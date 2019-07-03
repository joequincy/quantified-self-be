var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
const pry = require('pryjs');

describe('api', () => {
  describe('Food', () => {
    beforeEach((done) => {
      server = app.listen(4000, (err) => {
        if (err) return done(err);

        agent = request.agent(server);
        done();
      });
      shell.exec('npx sequelize db:migrate')
      shell.exec('npx sequelize db:seed:all')
    });
    afterEach((done) => {
      shell.exec('npx sequelize db:migrate:undo:all')
      return  server && server.close(done);
    });

    describe('food index page', () => {
      it('loads food items successfully', async () => {
        const response = await agent.get('/api/v1/foods');
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toEqual(4)
        expect(Object.keys(response.body[0])).toContain('name')
        expect(Object.keys(response.body[0])).toContain('calories')
      })
    });
  })
  describe('Sad Path', () => {
    describe('food index page', () => {
      it('loads food items unsuccessfully', async () => {
        const response = await agent.get('/api/v1/foods');
        // .set('Content-Type', 'application/json')
        expect(response.statusCode).toBe(500)
      });
    });
  });
});

describe('index page', () => {
  beforeEach((done) => {
    server = app.listen(4000, (err) => {
      if (err) return done(err);

      agent = request.agent(server);
      done();
    });
  });
  afterEach((done) => {
    return  server && server.close(done);
  });
  it('loads successfully', async () => {
    const response = await agent.get("/");
    expect(response.statusCode).toBe(200);
  });
})
