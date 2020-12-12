import express, { Request, Response } from "express";

const app = express();
const appId = process.env.APPID;

app.get("/", (req: Request, res: Response) =>
  res.send(`appid : ${appId} home page : says hello!`)
);

app.get("/app1", (req: Request, res: Response) =>
  res.send(`appid : ${appId} app1 : says hello!`)
);

app.get("/app2", (req: Request, res: Response) =>
  res.send(`appid : ${appId} app2 : says hello!`)
);

app.get("/admin", (req: Request, res: Response) =>
  res.send(
    `appid : ${appId} Admin page : very few people can see this page🚀️!`
  )
);

app.listen(9999, () => console.log(`${appId} is listening on localhost:9999`));
