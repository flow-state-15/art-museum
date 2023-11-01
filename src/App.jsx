import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  redirect,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { galleryLoader, homeLoader, exhibitLoader } from "./router/loaders.js";
import Layout from "./router/Layout";
import GalleryView from "./components/GalleryView";
import harvardArtData from "./data/harvardArt.js";
import ErrorBoundary from "./router/ErrorBoundary";
import GalleryIndex from "./components/GalleryIndex";
import Route404 from "./components/Route404";
import Home from "./components/Home";
import ArtImageTile from "./components/ArtImageTile";


// below is syntax for creating routes from elements
// this is more familiar to legacy React Router devs
const routeObjects = createRoutesFromElements(
  <Route element={<Layout />} errorElement={<ErrorBoundary />}>
    <Route path={"/"} element={<Home />} loader={homeLoader} />
    <Route path={"/galleries"} element={<GalleryIndex />}>
      <Route
        path={":galleryId"}
        element={<GalleryView galleries={harvardArtData.records} />}
        loader={galleryLoader}
        >
        <Route
          path={":exhibitId"}
          element={<ArtImageTile />}
          loader={exhibitLoader}
          />
      </Route>
      <Route path={"*"} element={<Route404 />} />
    </Route>
  </Route>
);


export default function App() {
  return (
    <>
      <span>i&apos;m outside the router so I cannot use links</span>
      <RouterProvider router={createBrowserRouter(routeObjects)} />
    </>
  );
}

// below is syntax for creating plain route objects
// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     errorElement: <ErrorBoundary />,
//     children: [
//       {
//         path: "/",
//         element: (
//           <div>
//             <h2>Harvard Art Museum</h2>
//             <span>
//               Look, but Don&apos;t Touch. Please select a Gallery in the
//               navigation bar.
//             </span>
//           </div>
//         ),
//       },
//       {
//         path: "galleries",
//         element: (
//           <div>
//             <h2>this is the index for /galleries ....</h2>
//             <Outlet />
//           </div>
//         ),
//         children: [
//           {
//             path: ":galleryId",
//             element: <GalleryView galleries={harvardArtData.records} />,
//             errorElement: <ErrorBoundary />,
//             loader: async ({ params }) => {
//               console.log("loader running");

//               // todo: fragile - router throws if find fails
//               const foundData = harvardArtData.records.find(
//                 (el) => el.id === +params.galleryId
//               );

//               // throw new Response({ headers: {status: 404} })

//               if (!foundData) return redirect("/");

//               return foundData;
//             },
//           },
//         ],
//       },
//       { path: "*", element: <h2>page not found</h2> },
//     ],
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }