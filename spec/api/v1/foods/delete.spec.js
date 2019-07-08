describe('api', () => {
  beforeAll(() => {
    DB.create()
  });

  afterAll(() => {
    DB.drop()
  });

  describe('Food Happy Path', () => {
    beforeEach(() => {
      DB.migrate()
      DB.seed('20190702190910-food_index_seed')
    });

    afterEach(() => {
      DB.wipe()
    });

    describe('Food Update Path', () => {
      it('deleted food item successfully', async () => {
        let response = await request.delete('/api/v1/foods/2')

        expect(response.statusCode).toBe(204)
      });
    });
  });

  describe('Food Sad Path', () => {
    describe('404 Error', () => {
      beforeEach(() => {
        DB.migrate()
        DB.seed('20190702190910-food_index_seed')
      });

      afterEach(() => {
        DB.wipe()
      });

      it('deleted food item unsuccessfully if food not found', async () => {
        let response = await request.delete('/api/v1/foods/6')

        expect(response.statusCode).toBe(404),
        expect(response.body.error).toBe('No food found with provided ID.')
      });
    });

    describe('500 Error', () => {
      beforeEach(() => {
        DB.wipe()
      });

      it('deleted food item unsuccessfully if server error', async () => {
        let response = await request.delete('/api/v1/foods/1')

        expect(response.statusCode).toBe(500),
        expect(response.body.error).toBe("Internal Server Error")
      });
    });
  });
});
