# GraphQL multiple connection to MongoDB and MySQL

-------------
Multiple connection for mongo db and mysql with GraphQL

To start project:
```
cd server
edit MONGO_CONNECTION_STRING in app.js
cd config
edit MYSQL_CONFIG in config/db.connection.js
cd ..
npm install && node app
go to http://localhost:4000/graphql
```

Example GraphQL query:

```
{
  users {
    email
  }
  books {
    name
  }
}
```

Result

```
{
  "data": {
    "users": [
      {
        "email": "user@email.com"
      },
      {
        "email": "user2@email.com"
      }
    ],
    "books": [
      {
        "name": "Book_name"
      },
      {
        "name": "Book_name_2"
      }
    ]
  }
}
```

