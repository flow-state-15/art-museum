import { useLoaderData } from "react-router-dom";

export default function ArtImageTile() {
  const exhibit = useLoaderData();
  console.log("exhibit: ", exhibit);
  return (
    <>
      <h5>Period: {exhibit.period || "N/A"}</h5>
      <h5>Description:</h5>
      <p>{exhibit.description || "No description."}</p>
      {exhibit.images.map(({ alttext, baseimageurl, imageid }) => (
        <img
          alt={alttext}
          src={baseimageurl}
          key={imageid}
        />
      ))}
      <span>Credit: {exhibit.creditline || "N/A"}</span>
    </>
  );
}
