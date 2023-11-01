import { Outlet } from "react-router-dom";
import GalleryNavigation from "../components/GalleryNavigation";
import harvardArt from "../data/harvardArt";

export default function Layout() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records} />
      <Outlet />
      <div id="footer-wrap">
        <h2>Harvard Art Gallery Footer</h2>
      </div>
    </>
  );
}
