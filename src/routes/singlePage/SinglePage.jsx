import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../components/lib/dummydata";
export default function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="../src/images/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src="../src/images/Hgold.jpeg" alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="../src/images/utility.png" alt="" />
              <div className="featureText">
                <span>Utility</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="../src/images/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="../src/images/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="../src/images/size.png" alt="" />
              <span>80sq</span>
            </div>
            <div className="size">
              <img src="../src/images/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="../src/images/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Place</p>
          <div className="listHorizotal">
            <div className="feature">
              <img src="../src/images/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="../src/images/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>200m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="../src/images/school.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="../src/images/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="../src/images/save.png" alt="" />
              Save the Places
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
