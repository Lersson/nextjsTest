export async function GET() {

    const users = [
        {
            
        "id": "1",
        "nome": "RamonActivity 1",
        "idade": "16",
    },
    {
            "id": "2",
            "nome": "Ricardo",
            "idade": "16",
        },
        {
            "id": "3",
            "nome": "Ana",
        "idade": "19",
        },
    ]

    return Response.json(users)
}

