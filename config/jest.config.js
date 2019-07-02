global.request = require('supertest')
global.app = require('../app')
global.get = request(app).get
global.post = request(app).post
