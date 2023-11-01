import { NavLink } from "react-router-dom";

export default function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <h1>Gallery Navigation</h1>
      <NavLink to={"/"}>&larr; Go Home</NavLink>
      {galleries.map((record) => (
        <div key={record.id}>
          <NavLink to={`/galleries/${record.id}`}>{record.name}</NavLink>
        </div>
      ))}
    </nav>
  );
}
