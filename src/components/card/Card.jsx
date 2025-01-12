import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="../src/images/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>

        <div className="botton">
          <div className="features">
            <div className="feature">
              <img src="../src/images/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="../src/images/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="../src/images/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="../src/images/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
