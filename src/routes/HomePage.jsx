import SearchBar from "../components/SearchBar/SearchBar";
import "./homePage.scss";
export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Snail share butane obtain screeching aback awesome smell medical,
            vault distributor lan dreary, fear likeable, disgusting divorced
            curve fibre, snowboarding hushed jeep slimy meddle unkempt, kamikaze
          </p>
          <SearchBar />
          <div className="boxs">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="../src/images/bg.png" alt="" />
      </div>
    </div>
  );
}
