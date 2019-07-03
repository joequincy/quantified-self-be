const Meal = require('../../../../models').Meal
const Food = require('../../../../models').Food

describe('Meals index', () => {
  beforeAll(() => {
    DB.create()
  });

  beforeEach(() => {
    DB.migrate()
  })

  afterEach(() => {
    DB.wipe()
  })

  afterAll(() => {
    DB.drop()
  })

  it('loads a collection of meals and foods', async () => {
    let meal1 = await Meal.create({name: "Breakfast", Food: [
      {name: "Cereal", calories: 240},
      {name: "Banana", calories: 150}
    ]}, {include: [Food]})

    let meal2 = await Meal.create({name: "Dinner", Food: [
      {name: "Steak", calories: 800},
      {name: "Milk", calories: 180}
    ]}, {include: [Food]})

    return get("/api/v1/meals").then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveLength(2)

      let meal = response.body[0]
      expect(meal).toHaveProperty('name', 'Breakfast')
      expect(meal.Food).toHaveLength(2)

      expect(meal.Food[0]).toHaveProperty('name', 'Cereal')
      expect(meal.Food[0]).toHaveProperty('calories', 240)
    })
  });
})
