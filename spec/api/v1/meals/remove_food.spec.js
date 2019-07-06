const Meal = require('../../../../models').Meal
const Food = require('../../../../models').Food

describe('Meals remove food endpoint', () => {
  beforeAll(() => {
    DB.create()
  });

  afterAll(() => {
    DB.drop()
  })

  describe('Successful request', () => {
    beforeEach(() => {
      DB.migrate()
    })

    afterEach(() => {
      DB.wipe()
    })

    it('removes a food from a meal', async () => {
      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240},
        {name: "Banana", calories: 150}
      ]}, {include: [Food]})

      let response = await del("/api/v1/meals/1/foods/2")
      expect(response.statusCode).toBe(204)

      let affectedMeal = await Meal.findByPk(1, {
        include: [{
          model: Food,
          attributes: ["id", "name", "calories"],
          through: {
            attributes: []
          }
        }]
      })
      expect(affectedMeal.Food).toHaveLength(1)
      expect(affectedMeal.Food[0].name).not.toBe("Banana")
    })
  })

  describe('Failed requests', () => {
    it('returns a 500 if it is unable to complete the request', async () => {
      let response = await del("/api/v1/meals/1/foods/1")
      expect(response.statusCode).toBe(500)
      expect(response.body.error).toBe("Internal Server Error")
    })

    it('returns a 404 if it is unable to find the requested meal', async () => {
      DB.migrate()

      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240},
        {name: "Banana", calories: 150}
      ]}, {include: [Food]})

      let response = await del("/api/v1/meals/2/foods/1")
      expect(response.statusCode).toBe(404)
      expect(response.body.error).toBe("No meal found with the provided ID.")
    })

    it('returns a 404 if it is unable to find the requested food', async () => {
      DB.migrate()

      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240},
        {name: "Banana", calories: 150}
      ]}, {include: [Food]})

      let response = await del("/api/v1/meals/1/foods/3")
      expect(response.statusCode).toBe(404)
      expect(response.body.error).toBe("No food found with the provided ID.")
    })
  })
})
