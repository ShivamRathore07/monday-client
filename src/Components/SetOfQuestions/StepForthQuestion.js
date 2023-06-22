import React from "react";
import "../Css_Files/StepFirstQuestion.scss";

const StepForthQuestion = ({
    handleFormChange,
    formData,
    setActive,
    active,
}) => {
      
  return (
    <div className="profession">
      <div className="questions">
        <p className="logoImage">ambaram</p>
        <div>
          <p className="heading">Which industry you represent ?</p>
          <p>help us craft your experience</p>
          <div className="answers">
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Fashion_Design"}
                  value="Fashion_Design"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Fashion Design</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Accessories"}
                  value="Accessories"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Accessories</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Footwear"}
                  value="Footwear"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Footwear</div>
            </div>

            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Lifestlye"}
                  value="Lifestlye"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Lifestlye</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Home"}
                  value="Home"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Home</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Leather"}
                  value="Leather"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Leather</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="focusOnFirst"
                  checked={formData.focusOnFirst === "Jwelery"}
                  value="Jwelery"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Jwelery</div>
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
             onClick={() =>
              setActive({
                ...active,
                questionForth: false,
                questionFive: true,
              })
            }
          >
            Continue
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
