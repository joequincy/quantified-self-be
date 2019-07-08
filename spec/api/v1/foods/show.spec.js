const shell = require('shelljs');

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
    describe('food show page', () => {
      it('loads a single food item successfully', () => {
        return get('/api/v1/foods/1').then(response => {
          expect(response.statusCode).toBe(200)
          expect(Object.keys(response.body[0])).toContain('name')
          expect(Object.keys(response.body[0])).toContain('calories')
        });
      });
    });
  });

  describe('Food Sad Path', () => {
    describe('404 Error', () => {
      beforeEach(() => {
        DB.migrate()
        DB.seed('20190702190910-food_index_seed')
      })

      afterEach(() => {
        DB.wipe()
      })
      it('loads a food item unsuccessfully', () => {
        return get('/api/v1/foods/6').then(response => {
          expect(response.statusCode).toBe(404)
          expect(response.body.error).toBe('No food found with provided ID.')
        });
      });
    });

    describe('500 Error', () => {
      it('loads food item unsuccessfully if server error', () => {
        return get('/api/v1/foods/1').then(response => {
          expect(response.statusCode).toBe(500)
          expect(response.body.error).toBe("Internal Server Error")
        })
      });
    });
  });
});
