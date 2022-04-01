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
    host: "localhost:3000",
    basePath: "/computerScientistJokes",
    tags: [
      {
        name: "Computer Scientist Jokes",
        description: "computer scientist jokes in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/": {
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
      "/{id}": {
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
      "/search": {
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
      "/add": {
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
      "/put":{
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
        "/delete": {
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
    },
    //StudentJokes
    basePath: "/studentJokes",
    tags: [
      {
        name: "Student Jokes",
        description: "student jokes in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/": {
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
      "/{id}": {
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
      "/search": {
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
      "/add": {
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
      "/put":{
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
        "/delete": {
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
    },
    //FlatJokes 

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