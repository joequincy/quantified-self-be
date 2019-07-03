var shell = require('shelljs');
var request = require("supertest");

describe('api', () => {
  describe('Food Happy Path', () => {
    describe('food index page', () => {
      it('loads food items successfully', () => {
        return get('/api/v1/foods').then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body.length).toEqual(4)
          expect(Object.keys(response.body[0])).toContain('name')
          expect(Object.keys(response.body[0])).toContain('calories')
        })
      })
    });
  });

  describe('Food Sad Path', () => {
    beforeEach(() => {
      shell.exec('npx sequelize db:migrate:undo:all')
    });
    describe('food index page', () => {
      it('loads food items unsuccessfully', () => {
        return get('/api/v1/foods').then(response => {
          expect(response.statusCode).toBe(500)
        })
      });
    });
  });
});
