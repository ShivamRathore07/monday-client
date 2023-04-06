import React from "react";
import "../Css_Files/StepFirstQuestion.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Redux/Actions/userAction";

const StepForthQuestion = ({
    handleFormChange,
    formData,
    setActive,
    active,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
      
  return (
    <div className="profession">
      <div className="questions">
        <h2 className="logoImage">ambaram</h2>
        <div>
          <p className="heading">Select what you'd like to Focus on first</p>
          <p>Help us tailor the best experience for you</p>
          <div className="answers">
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Legal_requests"}
                  value="Legal_requests"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Legal requests</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Procurement"}
                  value="Procurement"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Procurement</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Project_management"}
                  value="Project_management"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Project management</div>
            </div>

            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Other"}
                  value="Other"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Other</div>
            </div>
          </div>
        </div>

        <div className="companyContinueBtn">
          <button
            onClick={() =>
              setActive({
                ...active,
                questionThird: true,
                questionForth: false,
              })
            }
          >
            Back
          </button>
          <button
             disabled={!formData.focusOnFirst}
             onClick={() =>dispatch(signUp({formData,navigate}))  }
          >
            Signup
          </button>
        </div>
      </div>
      <div className="image">
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/ForthQuestion.png"}
          alt="demo_image"
        />
      </div>
    </div>
  );
};

export default StepForthQuestion;
