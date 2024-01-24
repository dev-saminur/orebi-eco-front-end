import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/product" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
