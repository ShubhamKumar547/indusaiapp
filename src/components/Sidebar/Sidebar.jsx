import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Context } from "../../contexts/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  const viewDefiner = () => {
    if (window.innerWidth > "448") {
      console.log(window.innerWidth);
      return (
        <>
          <div className="top">
            <img
              onClick={() => {
                setExtended(extended ? false : true);
              }}
              className="menu"
              src={assets.menu_icon}
              alt="menu-icon"
            />
            <div onClick={() => newChat()} className="new_chat">
              <img src={assets.plus_icon} />
              {extended ? <p>New Chat</p> : null}
            </div>

            {extended ? (
              <div className="recent">
                <p className="recent_title">Recents</p>

                {prevPrompt.map((item, index) => {
                  return (
                    <>
                      <div
                        onClick={() => loadPrompt(item)}
                        className="recent_entry history"
                      >
                        <img src={assets.message_icon} alt="message-icon" />
                        <p>{item.slice(0, 10)}...</p>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className="bottom">
            <div className="bottom_item recent_entry">
              <img src={assets.question_icon} />

              {extended ? <p>Help</p> : null}
            </div>

            <div className="bottom_item recent_entry">
              <img src={assets.history_icon} />

              {extended ? <p>Activity</p> : null}
            </div>

            <div className="bottom_item recent_entry">
              <img src={assets.setting_icon} />

              {extended ? <p>Settings</p> : null}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="top">
            <img
              onClick={() => {
                setExtended(extended ? false : true);
              }}
              className="menu"
              src={assets.menu_icon}
              alt="menu-icon"
            />
            {/* {extended ? (
              <div className="recent">
                <p className="recent_title">Recents</p>

                {prevPrompt.map((item, index) => {
                  return (
                    <>
                      <div
                        onClick={() => loadPrompt(item)}
                        className="recent_entry history"
                      >
                        <img src={assets.message_icon} alt="message-icon" />
                        <p>{item.slice(0, 10)}...</p>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : null} */}
          </div>
          <div className="bottom">
            {extended ? (
              <>
                <div className="bottom_item recent_entry">
                  <img src={assets.question_icon} />
                  <p>Help</p>
                </div>

                <div className="bottom_item recent_entry">
                  <img src={assets.history_icon} />
                  <p>Activity</p>
                </div>

                <div className="bottom_item recent_entry">
                  <img src={assets.setting_icon} />
                  <p>Settings</p>
                </div>
              </>
            ) : null}
          </div>
        </>
      );
    }
  };

  return <div className="sidebar">{viewDefiner()} </div>;
};

export default Sidebar;
