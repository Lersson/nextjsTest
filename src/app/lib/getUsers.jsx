export default async function getUsers(){

const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {})

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }
    
        const data = await res.json()
        
        return data
    
}
