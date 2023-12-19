
import { FreshContext } from "$fresh/server.ts";

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  const url = new URL(req.url);

  try{
    const redirectRecord = await Deno.resolveDns(`redirect.${url.host}}`, "TXT")

    console.log(redirectRecord)
    url.host = `${redirectRecord[0][0]}.${url.host}`
    return Response.redirect("https://localhost:8000", 301);
  } catch (e) {
    console.log(e)
    return Response.redirect(url.href, 404);
  }

}