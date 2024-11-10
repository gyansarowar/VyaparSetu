import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { FirebaseProvider } from "./firebase/Firebase";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Exporter from "./pages/Exporter";
import ImporterList from "./pages/Importer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path:"/contact",
    element:(
      <>
      <Navbar/>
      <Contact/>
      </>
    )
  },
  {
    path:"/about",
    element:(
      <>
      <Navbar/>
      <About/>
      </>
    )
  },
  {
    path:'/exporters',
    element:(
      <>
      <Navbar/>
      <Exporter/>
      </>
    )
  },
  {
    path:'/importers',
    element:(
      <>
      <Navbar/>
      <ImporterList/>
      </>
    )
  }
]);

function App() {
  return (
    <div className=" box-border min-h-screen ">
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </div>
  );
}

export default App;
