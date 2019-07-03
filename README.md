# Quantified Self

A calorie tracker using JavaScript, built on NodeJS with the Express framework.

### Learning Goals
- Create an Express API given specified endpoints and response formats.
- Create a single-page web for the front-end which will interact with the server via the API without page changes or reloads.

### Endpoints
[Foods Index](#foods-index)

---

### Foods

#### Foods Index

Returns all foods currently in the database

##### Request

```http
GET /api/v1/foods
```

##### Successful Response

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

###### Body
```json
[
  {
    "id": 1,
    "name": "Banana",
    "calories": 150
  },
  {
    "id": 2,
    "name": "Apple",
    "calories": 120
  }
]
```

##### Failed Response

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json
```
