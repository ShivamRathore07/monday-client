import React from "react";
import "../Css_Files/StepFirstQuestion.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Redux/Actions/userAction";

const StepFiveQuestion = ({
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
        <p className="logoImage">ambaram</p>
        <div>
          <p className="heading">
            One last question, How did you hear about us ?
          </p>
          <div className="answers">
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="hereAboutUs"
                  checked={formData.hereAboutUs === "Google"}
                  value="Google"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Google</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="hereAboutUs"
                  checked={formData.hereAboutUs === "You_Tube"}
                  value="You_Tube"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>You Tube</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="hereAboutUs"
                  checked={formData.hereAboutUs === "Social_media"}
                  value="Social_media"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Social media</div>
            </div>
          </div>
        </div>

        <div className="companyContinueBtn">
          <button
            onClick={() =>
              setActive({
                ...active,
                questionForth: true,
                questionFive: false,
              })
            }
          >
            Back
          </button>
          <button
            disabled={!formData.hereAboutUs}
            onClick={() => dispatch(signUp({ formData, navigate }))}
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

export default StepFiveQuestion;
