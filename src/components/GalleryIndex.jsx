import { Outlet } from "react-router-dom";

export default function GalleryIndex() {
  return (
    <div>
      <h3>This is the index for /galleries. Each gallery has several works to display. Click to view their art.</h3>
      <Outlet />
    </div>
  );
}
