import { app } from "./structures/app";
import http from "http";
import anyTest, { TestInterface } from "ava";
import request from "supertest";

const test = anyTest as TestInterface<{
  server: http.Server;
  baseUrl: string;
}>;

test.before(t => {
  t.context.server = app.listen(4000);
  // t.context.baseUrl = app.request.url;
});

test.after(t => {
  t.context.server.close();
});

test("get /", async t => {
  const response = await request(t.context.server).get("/");
  t.deepEqual(response.body, {
    message: "hello world"
  });
});
