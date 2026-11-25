import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  context.locals.ring_layers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return next();
});