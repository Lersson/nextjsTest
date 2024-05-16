import getUsers from "./lib/getUsers";
// export const dynamic = 'force-dynamic';
const users = await getUsers()
console.log(users)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Variables</h2>
        <p>{process.env.NEXT_PUBLIC_PROXY}</p>
      </div>
    </main>
  );
}
