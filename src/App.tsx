import User from "./User"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User/>
  },
  {
    path: "login",
    element: <Login/>,
  },
]);


function App() {

  return (
    <div className="text-black">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
