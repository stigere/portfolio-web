// app/api/booking/[...path]/route.ts
export const runtime = 'edge'; // optional
const BASE = process.env.BOOKING_API_BASE!; // e.g. https://booking-service.up.railway.app

async function handler(req: Request, ctx: { params: { path?: string[] } }) {
  const path = (ctx.params.path ?? []).join('/');
  const url = new URL(req.url);
  const target = `${BASE}/${path}${url.search}`;

  const init: RequestInit = {
    method: req.method,
    headers: Object.fromEntries(req.headers), // forward headers
  };

  if (!['GET', 'HEAD'].includes(req.method)) {
    init.body = await req.arrayBuffer(); // stream body through
  }

  const res = await fetch(target, init);
  return new Response(res.body, { status: res.status, headers: res.headers });
}

export { handler as GET, handler as POST, handler as PUT, handler as PATCH, handler as DELETE, handler as OPTIONS, handler as HEAD };
