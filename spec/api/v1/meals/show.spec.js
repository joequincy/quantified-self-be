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

    it('loads a single meal and its foods', async () => {
      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240},
        {name: "Banana", calories: 150}
      ]}, {include: [Food]})

      let meal2 = await Meal.create({name: "Dinner", Food: [
        {name: "Steak", calories: 800},
        {name: "Milk", calories: 180}
      ]}, {include: [Food]})

      let response = await get("/api/v1/meals/1")
      expect(response.statusCode).toBe(200)

      let meal = response.body
      expect(meal).toHaveProperty('name', 'Breakfast')
      expect(meal.Food).toHaveLength(2)

      expect(meal.Food[0]).toHaveProperty('name', 'Cereal')
      expect(meal.Food[0]).toHaveProperty('calories', 240)
    })
  })

  describe('Failed requests', () => {
    it('returns a 500 if it is unable to complete the request', async () => {
      let response = await get("/api/v1/meals/1")
      expect(response.statusCode).toBe(500)
      expect(response.body.error).toBe("Internal Server Error")
    })

    it('returns a 404 if it is unable to find the requested meal', async () => {
      DB.migrate()

      let meal1 = await Meal.create({name: "Breakfast", Food: [
        {name: "Cereal", calories: 240},
        {name: "Banana", calories: 150}
      ]}, {include: [Food]})

      let response = await get("/api/v1/meals/2")
      expect(response.statusCode).toBe(404)
      expect(response.body.error).toBe("No meal found with the provided ID.")
    })
  })
})
