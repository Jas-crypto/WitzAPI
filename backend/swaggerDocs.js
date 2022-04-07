const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Example REST API Joke Service",
      description: "API for jokes",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    host: "localhost:4000",
    basePath: "/",
    tags: [
      {
        name: "Computer Scientist Jokes",
        description: "computer scientist jokes in the database",
      },
      {
        name: "Student Jokes",
        description: "student jokes in the database",
      },
      {
        name: "Flat Jokes",
        description: "flat jokes in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "computerScientistJokes/": {
        get: {
          tags: ["Computer Scientist Jokes"],
          summary: "Get all computer scientist jokes in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "computerScientistJokes/{id}": {
        get: {
          tags: ["Computer Scientist Jokes"],
          summary: "Get a specific computer scientist joke by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the computer scientist joke searched for",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            404: {
              description: "Not Found",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "computerScientistJokes/search": {
        get: {
          tags: ["Computer Scientist Jokes"],
          summary: "Get a specific computer scientist joke by title",
          parameters: [
            {
              name: "title",
              in: "path",
              description: "Title of the computer scientist joke searched for",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            404: {
              description: "Not Found",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "computerScientistJokes/add": {
        post: {
          tags: ["Computer Scientist Jokes"],
          summary: "Add a new computer scientist joke",
          parameters: [
            {
              name: "computer scientist joke",
              in: "body",
              description: "computer scientist joke to be added",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "computerScientistJokes/put":{
        post: {
            tags: ["Computer Scientist Jokes"],
            summary: "Edit a computer scientist joke",
            parameters: [
              {
                name: "computer scientist joke",
                in: "body",
                description: "computer scientist joke to be edited",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            ],
            responses: {
              200: { 
                description: "Ok",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              400: {
                description: "Bad Request",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              404: {
                description: "Not Found",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            },
          },
        },
        "computerScientistJokes/delete": {
          delete: {
            tags: ["Computer Scientist Jokes"],
            summary: "Delete a specific computer scientist joke by id",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "Id of the computer scientist joke to be deleted",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              404: {
                description: "Not Found",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            },
          },
        },
      "studentJokes/": {
        get: {
          tags: ["Student Jokes"],
          summary: "Get all student jokes in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "studentJokes/{id}": {
        get: {
          tags: ["Student Jokes"],
          summary: "Get a specific student joke by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the student joke searched for",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            404: {
              description: "Not Found",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "studentJokes/search": {
        get: {
          tags: ["Student Jokes"],
          summary: "Get a specific student joke by title",
          parameters: [
            {
              name: "title",
              in: "path",
              description: "Title of the student joke searched for",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            404: {
              description: "Not Found",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "studentJokes/add": {
        post: {
          tags: ["Student Jokes"],
          summary: "Add a new student joke",
          parameters: [
            {
              name: "student joke",
              in: "body",
              description: "student joke to be added",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "studentJokes/put":{
        post: {
            tags: ["Student Jokes"],
            summary: "Edit a student joke",
            parameters: [
              {
                name: "student joke",
                in: "body",
                description: "student joke to be edited",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            ],
            responses: {
              200: {
                description: "Ok",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              400: {
                description: "Bad Request",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              404: {
                description: "Not Found",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            },
          },
        },
        "studentJokes/delete": {
          delete: {
            tags: ["Student Jokes"],
            summary: "Delete a specific student joke by id",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "Id of the student joke to be deleted",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              404: {
                description: "Not Found",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            },
          },
        },
      "flatJokes/": {
        get: {
          tags: ["Flat Jokes"],
          summary: "Get all flat jokes in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "flatJokes/{id}": {
        get: {
          tags: ["Flat Jokes"],
          summary: "Get a specific flat joke by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the flat joke searched for",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            404: {
              description: "Not Found",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "flatJokes/search": {
        get: {
          tags: ["Flat Jokes"],
          summary: "Get a specific flat joke by title",
          parameters: [
            {
              name: "title",
              in: "path",
              description: "Title of the flat joke searched for",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            404: {
              description: "Not Found",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "flatJokes/add": {
        post: {
          tags: ["Flat Jokes"],
          summary: "Add a new flat joke",
          parameters: [
            {
              name: "flat joke",
              in: "body",
              description: "flat joke to be added",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/Jokes",
              },
            },
          },
        },
      },
      "flatJokes/put":{
        post: {
            tags: ["Flat Jokes"],
            summary: "Edit a flat joke",
            parameters: [
              {
                name: "flat joke",
                in: "body",
                description: "flat joke to be edited",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            ],
            responses: {
              200: { //Welcher Statuscode?
                description: "Ok",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              400: {
                description: "Bad Request",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              404: {
                description: "Not Found",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            },
          },
        },
        "flatJokes/delete": {
          delete: {
            tags: ["Flat Jokes"],
            summary: "Delete a specific flat joke by id",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "Id of the flat joke to be deleted",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
              404: {
                description: "Not Found",
                schema: {
                  $ref: "#/definitions/Jokes",
                },
              },
            },
          },
        },
    },

    definitions: {
        Jokes: {
        required: ["title", "text"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          title: {
            type: "string",
          },
          text: {
            type: "string",
          }
        },
      },
    },
  };
  
  export default swaggerDocs;