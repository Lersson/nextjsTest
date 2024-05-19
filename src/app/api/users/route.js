import { baseFetchOptions } from "@/app/tools/baseFetchOptions";
export async function GET() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const res = await fetch(`${apiUrl}/users`, {
        method: "GET",
        baseFetchOptions,
        headers: {
            'Content-Type':  'application/json',
        }
    })

    const data = await res.json()

    return Response.json(data)
}

