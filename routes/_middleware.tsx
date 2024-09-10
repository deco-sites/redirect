import { FreshContext } from "$fresh/server.ts";

export async function handler(
  req: Request,
  _ctx: FreshContext,
) {
  const url = new URL(req.url);

  try {
    const redirectRecord = await Deno.resolveDns(`redirect.${url.host}`, "TXT");

    url.host = `${redirectRecord[0][0]}.${url.host}`;
    return Response.redirect(url.href, 301);
  } catch (_e) {
    url.host = `www.${url.host}`;
    return Response.redirect(url.href, 301);
  }
}
