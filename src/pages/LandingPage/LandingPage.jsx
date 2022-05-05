import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import "./landingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header></Header>
      <h1>Candidates</h1>
      <div className="users">
        {[1, 2, 3, 4, 5].map((e) => {
          return <Card></Card>;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
