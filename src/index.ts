import express, { Application, Response, Request, NextFunction } from "express";

const app: Application = express();
const port: Number = 4000;

app.use("/user", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [
      {
        id: 1,
        name: "admin kantor",
        username: "admin17",
        password: "admin",
        role: "admin",
      },
      {
        id: 2,
        name: "user kantor",
        username: "user",
        password: "user",
        role: "user",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
