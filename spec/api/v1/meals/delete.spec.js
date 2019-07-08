const Meal = require('../../../../models').Meal
const Food = require('../../../../models').Food

describe('Meals delete', () => {
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

    it('deletes an existing meal', async () => {
      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240}
      ]}, {include: [Food]})
      let response = await del("/api/v1/meals/1")

      expect(response.statusCode).toBe(204)

      let remainingFood = await Food.findByPk(1)
      expect(remainingFood.name).toBe("Cereal")
    })
  })

  describe('Failed requests', () => {
    it('returns a 500 if it is unable to complete the request', async () => {
      let response = await del("/api/v1/meals/1")

      expect(response.statusCode).toBe(500)
      expect(response.body.error).toBe("Internal Server Error")
    })

    it('returns a 404 if it is unable to find the requested meal', async () => {
      DB.migrate()

      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240},
        {name: "Banana", calories: 150}
      ]}, {include: [Food]})

      let response = await del("/api/v1/meals/2")
      expect(response.statusCode).toBe(404)
      expect(response.body.error).toBe("No meal found with the provided ID.")
    })
  })
})
