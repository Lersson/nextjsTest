export async function GET() {

    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' }
      ];
  
    // const apiUrl = process.env.NEXT_PUBLIC_API_URL

    // const res = await fetch(`${apiUrl}/users`, {
    //     method: "GET",
    //     headers: {
    //         'Content-Type':  'application/json',
    //     },
    // })

    // const data = await res.json()

    // return Response.json(data)
    // return Response.json({ 
    //     name: "John Doe", age: 30,
        
    // })
    return Response.json(users)
}

