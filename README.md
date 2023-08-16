# toko-play-api
HTTP Rest API backend Toko-Play Application with Node js and Express js.

How to setup local code program:
- Clone this repository
- Rename .envExample to .env and fill in the section that must be filled
- Run this command to instal dependencies:
```
npm install
```
- Run this command to start the server:
```
npm start
```


How to setup local mongodb:
- Entered into mongosh
- Make database toko-play with this command:
```
use toko-play
```
- Make Videos, Products and Comments collections with this command:
```
db.createCollection('videos')
db.createCollection('products')
db.createCollection('comments')
```
- Import each collections with data json in folder database collection

## API Structure 
Below is flow a request form client to the server and back
```
| Request |------>------| route |------>------| controller |------><------| models |------><------| database |
                                                     |
                                                     |
                                         ------<----------->------
                                         |                       |
                                         |                       |
                                    | success |              | errors |
                                         |                       |
                                         |                       |
                                    | Response |            | Response |
```
Explanation of the structure API:
- Request: The client (e.g., a web browser, mobile app, or another server) initiates a request to the server by sending an HTTP request. The request includes the HTTP method (e.g., GET, POST, PUT, DELETE), the endpoint URL, optional request parameters, headers, and sometimes a request body containing data (e.g., for POST or PUT requests).
- Route: Upon receiving the request, the server's routing mechanism determines which endpoint or URL the request should be routed to. The routing system matches the requested URL with the appropriate route defined in the API.
- Controller: Once the route is determined, the request is sent to the corresponding controller. The controller is responsible for handling the request and contains the business logic to process the incoming data, make decisions, and coordinate the actions to be taken.
- Model: The controller interacts with the model layer to handle the data-related operations. The model represents the application's data and business rules. It may contain database queries, data validation, and other data manipulation logic.
- Database: If the operation involves data retrieval or manipulation, the model interacts with the database to perform CRUD (Create, Read, Update, Delete) operations. The database stores and manages the persistent data of the application.
- Model (again): Once the model retrieves or updates data from the database, it returns the data to the controller. The controller may further process the data as needed before proceeding.
- Controller (again): After processing the data, the controller prepares the appropriate response to be sent back to the client. This may involve formatting the data, adding response headers, and setting the appropriate HTTP status code.
- Response: The server sends the prepared response back to the client in the form of an HTTP response. The response contains the HTTP status code (indicating the success or failure of the request), response headers (metadata about the response), and the response body (usually in JSON format) containing the data requested by the client.

## Structure Folder
Below is structure for building REST API toko-play using Express JS:
```
toko-play-api/
  |---app/
  |    |---config/
  |    |    |---db.js
  |    |---controllers/
  |    |    |---commentControllers.js
  |    |    |---productController.js
  |    |    |---videoController.js
  |    |---models/
  |    |    |---Comment.js
  |    |    |---Product.js
  |    |    |---Video.js
  |    |---routes/
  |    |    |---commentRoutes.js
  |    |    |---productRoutes.js
  |    |    |---videoRoutes.js
  |---database/
  |    |---collections/
  |    |    |---comments.json
  |    |    |---products.json
  |    |    |---videos.json
  |---node_modules/
  |---.env
  |---app.js                
  |---package-lock.json
  |---package.json
  |---README.md
```
  
Explanation of the folder structure:
- app/: This folder contains the main application code.
- config/: This folder holds configuration files for the application, such as database connection setup or environment variables.
- controllers/: This folder contains controller modules that handle business logic for different routes. Controllers interact with models and return responses to the client.
- models/: This folder holds the Mongoose models that define the structure of your MongoDB collections and interact with the database.
- routes/: This folder includes route definition modules. Each route module handles specific endpoints and connects them to corresponding controller functions.
- database/: This folder contains data sample of collection in mongodb database. Data in the form of json can be imported into collections.
- node_modules/: This folder contains the installed Node.js packages (dependencies) from npm.
- .env: An environment file that can store environment-specific configuration and sensitive information like port, url database connection, etc.
- app.js: This is the main application file where you configure Express, routes, and start the server.
- package.json: The package.json file that lists your application's dependencies and scripts.
  
## Design Database
Below is collection database application in MongoDB:
- Videos Collections
  ```
  {
    _id: ObjectId,
    title: String,
    url_video: String,
    thumbnail: String,
    views: Number
  }
  ```
- Product Collections
  ```
  {
    _id: ObjectId,
    video_id: String,
    image: String,
    name: String,
    link_product: String,
    price: String
  }
  ```
- Comment Collections
  ```
  {
    _id: ObjectId,
    video_id: String,
    username: String,
    comment: String,
    created_at: Date
  }
  ```
Below is database design toko-play application using MongoDB:
  ```
   ______________________                 ____________________                 __________________
  |       Products       |               |       Videos       |               |     Comments     |
  |______________________|               |____________________|               |__________________|
  | _id: ObjectId        |       |-------| _id: ObjectId      |-------|       | _id: ObjectId    |
  | video_id: String     |-------|       | title: String      |       |-------| video_id: String |
  | image: String        |               | url_video: String  |               | username: String |
  | name: String         |               | thumbnail: String  |               | comment: String  |
  | link_product: String |               | views: Number      |               | created_at: Date |
  | price: String        |               |____________________|               |__________________|
  |______________________|

  ```

## API Documentary and Usage
### 1. GET all Videos
- Method: `GET`
- URL Patterns: `/api/videos`
- Body: `none`
- Headers: `Content-Type: application/json`
- Usage:
  ```
  curl -X GET /api/videos
  ```
- Response:
  - Success: (200)
    ```
    {
      "videos": [
        {
          "_id": "videoId",
          "title": "title",
          "url_video": "url_video",
          "thumbnail": "thumbnail",
          "views": views
        }
      ]
    }
    ```
  - Errors: (404)
    ```
    {
      "error": "Video not found"
    }
    ```
### 2. GET Videos by Id
- Method: `GET`
- URL Patterns: `/api/videos/:videoId`
- Body: `none`
- Headers: `Content-Type: application/json`
- Usage:
  ```
  curl -X GET /api/videos/:videoId
  ```
- Response:
  - Success: (200)
    ```
    {
      "_id": "videoId",
      "title": "title",
      "url_video": "url_video",
      "thumbnail": "thumbnail",
      "views": views
    }
    ```
  - Errors: (404)
    ```
    {
      "error": "Video not found"
    }
    ```
### 3. Play Video
- Method: `PUT`
- URL Patterns: `/api/videos/:videoId`
- Body: `none`
- Headers: `Content-Type: application/json`
- Usage:
  ```
  curl -X PUT /api/videos/:videoId
  ```
- Response:
  - Success: (200)
    ```
    {
      "message": "Video successfully to play"
    }
    ```
  - Errors: (404)
    ```
    {
      "error": "Video not found"
    }
    ```
### 4. GET Videos search by title
- Method: `GET`
- URL Patterns: `/api/videos?title={title}`
- Body: `none`
- Headers: `Content-Type: application/json`
- Usage:
  ```
  curl -X GET /api/videos?title={title}
  ```
- Response:
  - Success: (200)
    ```
    {
      "videos": [
        {
          "_id": "videoId",
          "title": "title",
          "url_video": "url_video",
          "thumbnail": "thumbnail",
          "views": views
        }
      ]
    }
    ```
  - Errors: (404)
    ```
    {
      "error": "Video not found"
    }
    ```
### 5. GET Products by Id Video
- Method: `GET`
- URL Patterns: `/api/products/:videoId`
- Body: `none`
- Headers: `Content-Type: application/json`
- Usage:
  ```
  curl -X GET /api/products/:videoId
  ```
- Response:
  - Success: (200)
    ```
    {
      "products": [
        {
          "_id": "productId",
          "image": "image",
          "name": "name",
          "product_link": "product_link",
          "price" : "price"
        }
      ]
    }
    ```
  - Errors: (404)
    ```
    {
      "error": "Product not found"
    }
    ```
### 6. GET Comments by Id Video
- Method: `GET`
- URL Patterns: `/api/comments/:videoId`
- Body: `none`
- Headers: `Content-Type: application/json`
- Usage:
  ```
  curl -X GET /api/comments/:videoId
  ```
- Response:
  - Success: (200)
    ```
    {
      comments: [
        {
          "_id": "commentId",
          "username": "username:,
          "comment": "comment,
          "created_at: created_at
        }
      ]
    }
    ```
  - Errors: (404)
    ```
    {
      "error": "Comment not found"
    }
    ```
### 7. POST Comments in Video
- Method: `POST`
- URL Patterns: `/api/comments`
- Body:
  ```
  {
    video_id: ObjectId,
    username: String,
    comment: String
  }
  ```
- Headers: `Content-Type: application/json`
- Usage:
  ```
  curl -X POST \
  -d '{
    "video_id": "videoId",
    "username": "username",
    "comment": "comment"
  }'\
  /api/comments
  ```
- Response:
  - Success: (201)
    ```
    {
      "message": "Comment created successfully"
    }
    ```
  - Errors: (500)
    ```
    {
      "error": "Internal server error"
    }
    ```
    
