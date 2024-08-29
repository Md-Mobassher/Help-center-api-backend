import express, { Request, Response, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import Card from "./model/Card";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 5000;

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://fullstack:cUe6Gydb3N70oOzp@cluster0.ebkpw09.mongodb.net/fullstack`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

/* check the server */
app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "Server is running!" });
});

/* create card */
app.post("/cards", async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newCard = new Card({
    id: uuidv4(),
    title,
    description,
  });

  try {
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(400).json({ error: "Failed to create card" });
  }
});

/* get all cards */
app.get("/cards", async (req: Request, res: Response) => {
  try {
    const cards = await Card.find();
    res.status(200).json({ data: cards });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cards" });
  }
});

/* get card by title */
app.get("/cards/:title", async (req: Request, res: Response) => {
  const { title } = req.params;

  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.status(200).json({ data: card });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch card" });
  }
});

// 404 Not Found Route
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
