export async function GET() {
  
    const apiUrl = 'https://jsonplaceholder.typicode.com'

    const res = await fetch(`${apiUrl}/users`, {
        method: "GET",
        headers: {
            'Content-Type':  'application/json',
        },
    })

    const data = await res.json()

    return Response.json(data)
}

