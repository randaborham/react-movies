import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Home from "./componts/Home/Home";
import About from "./componts/About/About";
import Contact from "./componts/Contact/Contact";
import Notfound from "./componts/Notfound/Notfound";
import Layout from "./componts/Layout/Layout";

function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "About", element: <About></About> },
        //   { path: "Portofolio", element: <Portofolio></Portofolio> },
        { path: "Contact", element: <Contact></Contact> },
        { path: "*", element: <Notfound></Notfound> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
