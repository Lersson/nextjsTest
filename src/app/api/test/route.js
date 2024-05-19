
export async function GET() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const res = await fetch(`${api}/users`, {
        cache: 'no-store',
        method: "GET",
        headers: {
            'Content-Type':  'application/json',
        }
    })

    const data = await res.json()

    return Response.json(data)
}

