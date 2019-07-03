const shell = require('shelljs')
class SequelizeExecutor {
  static create() {
    shell.exec('npx sequelize db:create', {silent: true})
  }

  static drop(){
    shell.exec('npx sequelize db:drop', {silent: true})
  }

  static migrate(){
    shell.exec('npx sequelize db:migrate:undo:all', {silent: true})
    shell.exec('npx sequelize db:migrate', {silent: true})
  }

  static wipe(){
    shell.exec('npx sequelize db:migrate:undo:all', {silent: true})
  }

  static seed(seedFileName){
    shell.exec('npx sequelize db:seed --seed ' + seedFileName, {silent: true})
  }
}

global.request = require('supertest')
global.app = require('../app')
global.get = request(app).get
global.post = request(app).post
global.DB = SequelizeExecutor
