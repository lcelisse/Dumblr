import all from "../../assets/hi.gif";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="image-container">
        <img className="background-landing-page" src={all}></img>
      </div>
    </div>
  );
};
export default LandingPage;
