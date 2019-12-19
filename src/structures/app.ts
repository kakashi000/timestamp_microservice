import koa from "koa";
import helmet from "koa-helmet";

export const app = new koa();

app.use(helmet());
app.use(ctx => {
  ctx.body = { message: "hello world" };
});
