// import getUsers from "./lib/getUsers";



export default async function Home() {

  const users = await getUsers()
  console.log(users)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Usuarios</h1>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
        {/* <p>{users}</p> */}
        <p>apenasdfnjaksdnfasdhfjkashdfhjkh</p>
      </div>
    </main>
  );
}
