import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profilePage.scss";
export default function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="titles">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src="../src/images/Hgold.jpeg" alt="" />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <div className="head">
              <h1>My List</h1>
              <button>Create New Post</button>
            </div>
            <List />
          </div>
          <div className="title">
            <h1>Saved List</h1>
            <List />
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}
