const Meal = require('../../../../models').Meal
const Food = require('../../../../models').Food

describe('Meals create', () => {
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

    it('creates a new meal', async () => {
      let response = await post("/api/v1/meals").send({
        meal: {
          name: "Breakfast"
        }
      })
      expect(response.statusCode).toBe(201)
      expect(response.body).toHaveProperty('name', 'Breakfast')
    })
  })

  describe('Failed requests', () => {
    it('returns a 500 if it is unable to complete the request', async () => {
      let response = await post("/api/v1/meals").send({
        meal: {
          name: "Breakfast"
        }
      })
      expect(response.statusCode).toBe(500)
      expect(response.body.error).toBe("Internal Server Error")
    })

    it('returns a 400 if the request is malformed', async () => {
      let response = await post("/api/v1/meals").send({
        food: {
          name: "Breakfast",
          calories: 150
        }
      })
      expect(response.statusCode).toBe(400)
      expect(response.body.error).toBe("Invalid request. Please confirm request body matches API specification.")
    })
  })
})
