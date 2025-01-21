import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/defaultLayout";
const App = () => <RouterProvider router={router} />;
var router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [{ path: "/", Component: Home }],
  },
]);
export default App;
