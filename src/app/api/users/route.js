export async function GET() {

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const res = await fetch(`${apiUrl}/users`, {
        method: "GET",
        headers: {
            'Content-Type':  'application/json',
        },
        signal: controller.signal
    })

    const data = await res.json()
    clearTimeout(timeoutId);

    return Response.json(data)
}

