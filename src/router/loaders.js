import { redirect } from "react-router-dom";
import harvardArtData from "../data/harvardArt";

export async function galleryLoader({ params }) {
  console.log("gallery loader running");

  // todo: fragile - router throws if find fails
  const foundData = harvardArtData.records.find(
    (el) => el.id === +params.galleryId
  );

  if (!foundData)
    // todo: return a redirect if you have an alt route
    //return redirect("/");

    // throwing will send control flow to ErrorBoundary
    throw new Response(null, {
      status: 404,
      statusText: "That gallery id is not valid.",
    });

  return foundData;
}

export async function exhibitLoader({ params }) {
  /* 
  fragile - router throws if find fails and loader returns 
  null or undef. be sure to handle those edge cases.  
  */

  console.log("exhibit loader running");

  const foundData = harvardArtData.records.find(
    (el) => el.id === +params.galleryId
    );
    
    const exhibit = foundData.objects.find(({ id }) => id === +params.exhibitId );
    
    if (!foundData || !exhibit)
    // todo: this statement handles manual id's entered through url.
    // todo: 404 handles other invalid routes.

    // note: the error system wants us to throw Response objects
    throw new Response(null, {
      status: 404,
      statusText: "That resource id is not valid.",
    });

  return exhibit;
}

export async function homeLoader(routeResponse) {
  console.log("running home loader, routeResponse: ", routeResponse);
  return "data from home loader";
}
