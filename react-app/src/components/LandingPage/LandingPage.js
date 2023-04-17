import all from "../../assets/hi.gif";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1 className="landing-heading">𝘚𝘐𝘎𝘕 𝘜𝘗 𝘖𝘙 𝘓𝘖𝘎 𝘐𝘕 𝘛𝘖 𝘊𝘙𝘌𝘈𝘛𝘌 𝘈 𝘗𝘖𝘚𝘛 !!</h1>
      <div className="image-container">
        <img className="background-landing-page" src={all}></img>
      </div>
    </div>
  );
};
export default LandingPage;
