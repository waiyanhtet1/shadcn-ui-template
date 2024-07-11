import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    // path="/" element={<Header />}
    >
      <Route index path="/" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
