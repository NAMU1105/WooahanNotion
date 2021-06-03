import express from "express";
const port = process.env.PORT || 5001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});

export default app;
