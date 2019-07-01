var shell = require('shelljs');
var request = require("supertest");

describe('api', () => {
  beforeAll(() => {
    DB.create()
  })

  afterAll(() => {
    DB.drop()
  })

  describe('Food Happy Path', () => {
    beforeEach(() => {
      DB.migrate()
      DB.seed('20190702190910-food_index_seed')
    })

    afterEach(() => {
      DB.wipe()
    })
    describe('food index page', () => {
      it('loads food items successfully', async () => {
        let response = await get('/api/v1/foods')
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toEqual(4)
        expect(Object.keys(response.body[0])).toContain('name')
        expect(Object.keys(response.body[0])).toContain('calories')
      })
    });
  });

  describe('Food Sad Path', () => {
    describe('food index page', () => {
      it('loads food items unsuccessfully', async () => {
        let response = await get('/api/v1/foods')
        expect(response.statusCode).toBe(500)
      });
    });
  });
});
