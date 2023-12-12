import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  GET (req) {
    const url = new URL(req.url);

    if(!url.host.startsWith("www.")){
      url.host = `www.${url.host}`
    }

    return Response.redirect(url, 301);
  },
};