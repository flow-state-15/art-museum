import { useEffect } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import GalleryArt from "./GalleryArt";

export default function GalleryView({ galleries }) {
  // const navigate = useNavigate();
  // const paramsObj = useParams();
  // const { galleryId } = paramsObj;
  const data = useLoaderData();
  console.log("component data from loader: ", data)
  // const galleryFromProps = galleries.find((g) => g.id === +galleryId);
  // console.log("gallery from props: ", galleryFromProps)

  // throw new Error("this is a custom error")

  useEffect(() => {
    console.log("mount")
    return () => {
      console.log("unmounting");
    };
  }, []);

  // if (!galleryFromProps) navigate("/");

  return (
    <div>
      <h2>{data.name}</h2>
      <h3>gallery theme: {data.theme || "No gallery theme."}</h3>
      <p>{data.labeltext}</p>
      <GalleryArt art={data.objects} />
    </div>
  );
}
