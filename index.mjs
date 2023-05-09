// @ts-check
import { createServer } from "node:http";
import { createRouter, Response } from "fets";

const router = createRouter({
  title: "Bug Report",
  description: "Setting base path",
  base: "/v1",
}).route({
  method: "GET",
  path: "/greetings",
  schemas: {
    responses: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
        },
      },
    },
  },
  handler: () => Response.json({ hello: "world" }),
});

createServer(router).listen(3000, () => {
  console.log("Swagger UI is available at http://localhost:3000/docs");
});
