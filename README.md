# toko-play-api
HTTP Rest API backend with Node js and Express js. Mid Term Project Gigih Generation 3.0

How to setup local code program:
- Clone this repository
- Rename .envExample to .env and fill in the section that must be filled
- Run this command to instal dependencies:
```
npm install
```
- Run this command to start the server:
```
npm dev
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
Below is database design toko-play application using MongoDB:
- Videos Collections
  ```
  {
    _id: ObjectId,
    url_video: String,
    thumbnail: String,
    title: String,
    views: Number
  }
  ```
- Product Collections
  ```
  {
    _id: ObjectId,
    video_id: String,
    link_product: String,
    image: String,
    name: String,
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

## API Documentary and Usage (soon)
