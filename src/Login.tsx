const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="h-[350px] w-[500px] bg-white rounded-md p-10">
        <h3 className="text-center font-bold text-lg mb-5">Login to continue</h3>
        <form className="space-y-5 flex flex-col">
            <div className="flex flex-col space-y-1">
              <label htmlFor="username"  className="font-medium">Username</label>
              <input type="text" id="username" className="bg-white border-2 rounded-md px-4 py-2 text-sm focus:outline-none" />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password"  className="font-medium">Password</label>
              <input type="password" id="password" className="bg-white border-2 rounded-md px-4 py-2 text-sm focus:outline-none " />
            </div>

            <button type="submit" className="text-white bg-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary font-medium rounded-full text-sm px-10 py-2.5 text-center w-[200px] self-center">Login</button>
        </form>
      </div>
    </section>
  )
}
export default Login