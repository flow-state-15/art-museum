import { NavLink, Outlet } from "react-router-dom";

export default function GalleryArt({ art }) {
  return (
    <>
      <h5>Exhibits: </h5>
      {Object.values(art).map(({ id, title }) => (
        <NavLink key={id} to={`${id}`}>
          {title}
        </NavLink>
      ))}
      <Outlet />
    </>
  );
}
