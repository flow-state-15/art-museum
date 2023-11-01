import { Link } from "react-router-dom";
export default function Route404() {
  return (
    <div>
      <h2>Oops there&apos;s nothing here! Let&apos;s go <Link to={"/"}>home</Link></h2>
    </div>
  )
}