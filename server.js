const express = require("express");
const app = express();

app.use(express.json());

// Temporary in-memory data store
let reviews = [];
let nextId = 1;

// ⭐ Task 1: Add a new movie review (POST)
app.post("/api/movies", (req, res) => {
  const { movieTitle, director, reviewText, rating } = req.body;

  // Validation
  if (!movieTitle || !director || !reviewText || rating === undefined) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (typeof rating !== "number" || rating < 0 || rating > 10) {
    return res.status(400).json({ error: "Rating must be a number 0–10" });
  }

  const newReview = {
    id: nextId++,
    movieTitle,
    director,
    reviewText,
    rating,
  };

  reviews.push(newReview);
  res.status(201).json(newReview);
});

// ⭐ Task 2: Get all movie reviews (GET)
app.get("/api/movies", (req, res) => {
  res.status(200).json(reviews);
});

// ⭐ Task 3: Get a single review by ID (GET)
app.get("/api/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const review = reviews.find((r) => r.id === id);

  if (!review) return res.status(404).json({ error: "Review not found" });

  res.status(200).json(review);
});

// ⭐ Task 4: Update review (PUT)
app.put("/api/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const review = reviews.find((r) => r.id === id);

  if (!review) return res.status(404).json({ error: "Review not found" });

  const { reviewText, rating } = req.body;

  if (rating !== undefined) {
    if (typeof rating !== "number" || rating < 0 || rating > 10) {
      return res.status(400).json({ error: "Rating must be a number 0–10" });
    }
    review.rating = rating;
  }

  if (reviewText !== undefined) {
    review.reviewText = reviewText;
  }

  res.status(200).json(review);
});

// ⭐ Task 5: Delete review (DELETE)
app.delete("/api/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = reviews.findIndex((r) => r.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Review not found" });

  reviews.splice(index, 1);

  res.status(200).json({ message: "Review deleted successfully" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
app.get("/", (req, res) => {
  res.send("Welcome to the Movie Review API!");
});
