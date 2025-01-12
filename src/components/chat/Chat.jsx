import { useState } from "react";
import "./chat.scss";
export default function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="../src/images/Hgold.jpeg" alt="" />
          <span>John Doe</span>
          <p>Texting massage message...</p>
        </div>
        <div className="message">
          <img src="../src/images/Hgold.jpeg" alt="" />
          <span>John Doe</span>
          <p>Texting massage message...</p>
        </div>
        <div className="message">
          <img src="../src/images/Hgold.jpeg" alt="" />
          <span>John Doe</span>
          <p>Texting massage message...</p>
        </div>
        <div className="message">
          <img src="../src/images/Hgold.jpeg" alt="" />
          <span>John Doe</span>
          <p>Texting massage message...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="../src/images/Hgold.jpeg" alt="" />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              x
            </span>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>Texting massage message...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Texting massage message...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Texting massage message...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Texting massage message...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Texting massage message...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Texting massage message...</p>
              <span>1 hour ago</span>
            </div>
          </div>

          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
