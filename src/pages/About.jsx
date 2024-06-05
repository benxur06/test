import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold m-12">About page</h2>
      <Link to={"/about/info"}>go to info page</Link>
    </div>
  );
};

export default About;
