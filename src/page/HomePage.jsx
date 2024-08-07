import useAuth from "./../hooks/useAuth";

export default function HomePage() {
  const auth = useAuth();
  return (
    <div className="container min-h-[50vh] my-2 mx-auto">
        <h2 className="text-center text-3xl">Hello, <span className="text-orange-600">{auth?.username}!!</span></h2>
        <p className="text-center text-2xl">This is your home page</p>
    </div>
  )
}
