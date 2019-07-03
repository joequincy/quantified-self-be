# Quantified Self

A calorie tracker using JavaScript, built on NodeJS with the Express framework.

### Learning Goals
- Create an Express API given specified endpoints and response formats.
- Create a single-page web for the front-end which will interact with the server via the API without page changes or reloads.

### Endpoints
[Foods Index](#foods-index)
[Meals Index](#meals-index)

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

---

### Meals

#### Meals Index

Returns all meals currently in the database, as well as their associated foods.

##### Request

```http
GET /api/v1/meals
```

##### Successful Response

A collection of Meal objects, each containing a collection of Food objects.

```http
HTTP/1.1 200 OK
```

###### Body
```js
[
  {
    "id": 1,
    "name": "Breakfast",
    "foods": [
      {
        "id": 1,
        "name": "Banana",
        "calories": 150
      },
      {
        "id": 6,
        "name": "Yogurt",
        "calories": 550
      }
    ]
  },
  {
    "id": 2,
    "name": "Snack",
    "foods": [
      {
        "id": 1,
        "name": "Banana",
        "calories": 150
      },
      {
        "id": 9,
        "name": "Gum",
        "calories": 50
      }
    ]
  }
]
```

##### Failed Response

There are no anticipated failure states. Any failures are unexpected and should follow the below format.

```http
HTTP/1.1 500 Internal Server Error
```

###### Body

```js
{"error": "Internal Server Error"}
```
