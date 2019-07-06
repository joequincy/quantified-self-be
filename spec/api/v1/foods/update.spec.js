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
      it('loads an updated food item successfully', async () => {
        let response = await request.patch('/api/v1/foods/1')
          .send(
            {food:
              {
                name: 'Strawberry',
                calories: 21
              }
            })

        expect(response.statusCode).toBe(200),
        expect(response.body.name).toBe('Strawberry'),
        expect(response.body.calories).toBe(21)
      });
    });
  });

  describe('Food Sad Path', () => {
    describe('400 Error', () => {
      beforeEach(() => {
        DB.migrate()
        DB.seed('20190702190910-food_index_seed')
      });

      afterEach(() => {
        DB.wipe()
      });

      it('loads an updated food item unsuccessfully if name is messing', async () => {
        let response = await request.patch('/api/v1/foods/1')
          .send(
            {food:
              {
                calories: 6
              }
            })

        expect(response.statusCode).toBe(400),
        expect(response.body.error).toBe('Invalid request. Please confirm request body matches API specification.')
      });

      it('loads an updated food item unsuccessfully if calories is messing', async () => {
        let response = await request.patch('/api/v1/foods/1')
          .send(
            {food:
              {
                name: 'Strawberry'
              }
            })

        expect(response.statusCode).toBe(400),
        expect(response.body.error).toBe('Invalid request. Please confirm request body matches API specification.');
      });

      it('loads an updated food item unsuccessfully if food is undefined', async () => {
        let response = await request.patch('/api/v1/foods/1')
        expect(response.statusCode).toBe(400),
        expect(response.body.error).toBe('Invalid request. Please confirm request body matches API specification.')
      });
    });

    describe('500 Error', () => {
      beforeEach(() => {
        DB.wipe()
      });

      it('loads an updated food item unsuccessfully if server error', async () => {
        let response = await request.patch('/api/v1/foods/1')
          .send(
            {food:
              {
                name: 'Strawberry',
                calories: 6
              }
            })
        expect(response.statusCode).toBe(500),
        expect(response.body.error).toBe("Internal Server Error")
      });
    });
  });
});
