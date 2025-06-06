import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../contexts/Context";

const Mainfile = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setRecentPrompt,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <>
      <div className="main">
        <div className="nav">
          <p id="Gemini_heading">Indus AI</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="content-area-operner-arae">
          {!showResult ? (
            <>
              <div className="main_container">
                <p id="greeting">
                  <span>Hello Developers</span>
                </p>
                <p id="msg">How may I help you ?</p>
              </div>
              <div className="cards">
                <div
                  onClick={() =>
                    loadPrompt(
                      "Suggest beautiful places to seee on an upcoming road trip"
                    )
                  }
                  className="card"
                >
                  <p>
                    Suggest beautiful places to seee on an upcoming road trip{" "}
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div
                  onClick={() =>
                    loadPrompt("Briefly explain the concept: Urban Planning")
                  }
                  className="card"
                >
                  <p>Briefly explain the concept: Urban Planning </p>
                  <img src={assets.bulb_icon} alt="" />
                </div>

                <div
                  onClick={() =>
                    loadPrompt(
                      "Brainstorming team bonding activities for our work retreat"
                    )
                  }
                  className="card"
                >
                  <p>
                    Brainstorming team bonding activities for our work retreat.
                  </p>
                  <img src={assets.message_icon} alt="" />
                </div>

                <div
                  onClick={() =>
                    loadPrompt("Improve the readability of the following code")
                  }
                  className="card"
                >
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result_title">
                <img src={assets.user_icon} />
                <p>{recentPrompt}.</p>
              </div>

              <div className="result_data">
                <img src={assets.gemini_icon} />

                {loading ? (
                  <>
                    <div className="loader">Extracting data...</div>
                  </>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="main_bottom">
          <div className="search_box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") onSent();
              }}
              value={input}
              type="text"
              placeholder="Enter prompt"
            />
            <div className="images">
              <img className="type1" src={assets.gallery_icon} />
              <img className="type1" src={assets.mic_icon} />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} />
              ) : (
                <img className="img_op_eff" src={assets.send_icon} />
              )}
            </div>
          </div>
          <div className="bottom_info">
            <p>
              ** Indus AI may display iaccurate info,including about person so
              double check it's correctness!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainfile;
