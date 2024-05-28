export async function GET() {

    const users = [
        {
        "nome": "RamonActivity 1",
        "idade": "16",
        },
        {
        "nome": "Ricardo",
        "idade": "16",
        },
        {
        "nome": "Ana",
        "idade": "19",
        },
    ]

    return Response.json(users)
}

