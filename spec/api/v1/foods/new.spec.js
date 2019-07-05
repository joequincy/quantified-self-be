const shell = require('shelljs');

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
    });

    afterEach(() => {
      DB.wipe()
    });

    describe('food new page', () => {
      it('loads a new food item successfully', () => {
        return post('/api/v1/foods')
        .send(
          {food:
            {
              name: 'Strawberry',
              calories: 6
            }
          })
        .then(response => {
          expect(response.statusCode).toBe(201)
          expect(response.body.name).toBe('Strawberry');
          expect(response.body.calories).toBe(6);
        });
      });
    });
  });

  describe('Food Sad Path', () => {
    describe('400 Error', () => {
      beforeEach(() => {
        DB.migrate()
      });

      afterEach(() => {
        DB.wipe()
      });
      it('loads a new food item unsuccessfully if name is messing', () => {
        return post('/api/v1/foods')
        .send(
          {food:
            {
              calories: 6
            }
          })
        .then(response => {
          expect(response.statusCode).toBe(400)
          expect(response.body.error).toBe('Bad Request');
        });
      });

      it('loads a new food item unsuccessfully if calories is messing', () => {
        return post('/api/v1/foods')
        .send(
          {food:
            {
              name: 'Strawberry'
            }
          })
        .then(response => {
          expect(response.statusCode).toBe(400)
          expect(response.body.error).toBe('Bad Request');
        });
      });

      it('loads a new food item unsuccessfully if food is undefined', () => {
        return post('/api/v1/foods').then(response => {
          expect(response.statusCode).toBe(400)
          expect(response.body.error).toBe('Bad Request');
        });
      });
    });

    describe('500 Error', () => {
      beforeEach(() => {
        DB.wipe()
      });
      it('loads a new food item unsuccessfully if server error', () => {
        return post('/api/v1/foods')
        .send(
          {food:
            {
              name: 'Strawberry',
              calories: 6
            }
          })
        .then(response => {
          expect(response.statusCode).toBe(500)
          expect(response.body.error).toBe("Internal Server Error");
        });
      });
    });
  });
});
