# Quantified Self

A calorie tracker using JavaScript, built on NodeJS with the Express framework.

### Learning Goals
- Create an Express API given specified endpoints and response formats.
- Create a single-page web for the front-end which will interact with the server via the API without page changes or reloads.

### Endpoints
[Foods Index](#foods-index)
[Meals Index](#meals-index)
[Meals Show](#meals-show)

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

There are no anticipated failure states. Any failures are unexpected and will follow the below format.

```http
HTTP/1.1 500 Internal Server Error
```

###### Body

```js
{"error": "Internal Server Error"}
```

---

#### Meals Show

Given the ID of a meal, the requested meal as well as its associated foods.

##### Requirements

- Provided ID must match a meal that exists in the database.

##### Request

```http
GET /api/v1/meals/:id
```

##### Successful Response

A Meal object containing a collection of its associated Food objects.

```http
HTTP/1.1 200 OK
```

###### Body
```js
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
}
```

##### Failed Response - Unable to find requested meal

This error will be returned when the requested ID does not match a Meal in the database.

```http
HTTP/1.1 404 Not Found
```

###### Body

```js
{"error": "No meal found with the provided ID."}
```

##### Failed Response - Other

There are no other anticipated failure states. A failure for any other reason is unexpected and will follow the below format.

```http
HTTP/1.1 500 Internal Server Error
```

###### Body

```js
{"error": "Internal Server Error"}
```
