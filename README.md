# Movie Review API

This is a simple REST API built using Node.js and Express.js to manage movie reviews.

## Features
- Add a new movie review (POST)
- Get all reviews (GET)
- Get a review by ID (GET)
- Update a review (PUT)
- Delete a review (DELETE)
- Each review has an auto-generated ID

## API Endpoints
POST /api/movies  
GET /api/movies  
GET /api/movies/:id  
PUT /api/movies/:id  
DELETE /api/movies/:id  

## Example POST Body
{
  "movieTitle": "Inception",
  "director": "Christopher Nolan",
  "reviewText": "Amazing movie!",
  "rating": 9
}

## How to Run
npm install  
node server.js  

Runs on: http://localhost:3000

## Deployment
Render URL: srv-d4m06bk9c44c73foql5g

## GitHub Repository
https://github.com/SarihaSaleem/movie-api.git

## Required Submission Screenshots
- POST request
- GET all reviews
- GET single review
- PUT update
- DELETE review
- Terminal showing server running
- GitHub repository
- Render deployed link

## Author
Sariha
