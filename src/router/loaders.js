import { redirect } from "react-router-dom";
import harvardArtData from "../data/harvardArt";

export async function galleryLoader({ params }) {
  console.log("loader running");

  // todo: fragile - router throws if find fails
  const foundData = harvardArtData.records.find(
    (el) => el.id === +params.galleryId
  );

  if (!foundData)
    throw new Response(null, {
      status: 404,
      statusText: "That gallery id is not valid.",
    });

  // if (!foundData) return redirect("/");

  return foundData;
}

export async function exhibitLoader({ params }) {
  console.log("loader running");

  // todo: fragile - router throws if find fails
  const foundData = harvardArtData.records.find(
    (el) => el.id === +params.galleryId
  );

  const exhibit = foundData.objects.find(({ id }) => id === +params.exhibitId );

  if (!foundData || !exhibit)
    throw new Response(null, {
      status: 404,
      statusText: "That resource id is not valid.",
    });


  // if (!foundData) return redirect("/");

  return exhibit;
}

export async function homeLoader(routeResponse) {
  console.log("running home loader, routeResponse: ", routeResponse);
  return "data from home loader";
}
