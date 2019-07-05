const Meal = require('../../../../models').Meal
const Food = require('../../../../models').Food

describe('Meals index', () => {
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

    it('adds a food to a meal', async () => {
      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240}
      ]}, {include: [Food]})
      let food2 = await Food.create({name: "Banana", calories: 150})

      let response = await post("/api/v1/meals/1/foods/2")
      expect(response.statusCode).toBe(201)

      expect(response.body.message).toBe("Successfully added Banana to Breakfast")
    })
  })

  describe('Failed requests', () => {
    it('returns a 500 if it is unable to complete the request', async () => {
      let response = await post("/api/v1/meals/1/foods/1")
      expect(response.statusCode).toBe(500)
      expect(response.body.error).toBe("Internal Server Error")
    })

    it('returns a 404 if it is unable to find the requested meal', async () => {
      DB.migrate()

      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240},
        {name: "Banana", calories: 150}
      ]}, {include: [Food]})

      let response = await post("/api/v1/meals/2/foods/1")
      expect(response.statusCode).toBe(404)
      expect(response.body.error).toBe("No meal found with the provided ID.")
    })

    it('returns a 404 if it is unable to find the requested food', async () => {
      DB.migrate()

      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240},
        {name: "Banana", calories: 150}
      ]}, {include: [Food]})

      let response = await post("/api/v1/meals/1/foods/3")
      expect(response.statusCode).toBe(404)
      expect(response.body.error).toBe("No food found with the provided ID.")
    })
  })
})
