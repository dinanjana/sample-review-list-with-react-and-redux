# React - Redux based review list
- Saving the reviews
- Delete the reviews using a button
- Form validation
- Pagination (5 reviews per page)
- Success message when a review is saved
- Dockerfile to run the project

# Installation
**Note**: We verified the assignment using npm 6.4.1 and node 11.3.0. However, it should also work on older versions.

1. Clone the project
2. Use `npm install` to install the dependencies.
3. Run `npm start` to launch the app. This should open your browser. If not, open http://localhost:3000.
4. Run `npm run api` in a seperate window/tab to start the API.

# API

We use https://github.com/typicode/json-server for the test API.

## GET /posts
Retrieves all posts.

### Response

```json
[
    {
        "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "id": 1,
        "rating": "3"
    },
    {
        "body": "Donec mattis, quam eget mattis pretium, nisi elit pellentesque sapien, id consequat eros risus vel neque.",
        "id": 2,
        "rating": "5"
    }
]
```

## POST /posts

### Request

```json
{
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "rating": 4
}
```

### Response

```json
{
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "rating": "4",
    "id": 3
}
```

## DELETE /posts/{id}

### Request
```json
{}
```

### Response
```json
{}
```

(Yes, the request and response are empty)