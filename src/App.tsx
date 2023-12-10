import User from "./User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

// eslint-disable-next-line react-refresh/only-export-components
export const userType = ["admin", "user", "super_user"];

function App() {
  return (
    <div className="text-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
