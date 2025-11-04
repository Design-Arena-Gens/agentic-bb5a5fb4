export async function GET() {
  return Response.json({ ok: true, hello: 'world', ts: Date.now() });
}

export async function POST(request) {
  try {
    const body = await request.json();
    return Response.json({ ok: true, youSent: body, ts: Date.now() });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
