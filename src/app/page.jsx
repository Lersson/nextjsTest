
export default async function Home() {

 
  const res = await fetch(`http://127.0.0.1:3000/dados`, {
    method: "GET",
    headers: { 'Content-Type':  'application/json' },
  })
  
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Usuarios</h1>
        {data.map((user) => (
          <p key={user.id}>{user.nome}</p>
        ))}
        {/* <p>{users}</p> */}
        <p>apenasdfnjaksdnfasdhfjkashdfhjkh</p>
      </div>
    </main>
  );
}
