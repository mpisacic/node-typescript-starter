import express, { Request } from "express";

const port = 4000;
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello world!");
});

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("⚡️[server]: Shutting down...");
    process.exit();
  });
});
