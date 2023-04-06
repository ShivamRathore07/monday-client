import React from "react";
import "../Css_Files/StepFirstQuestion.scss";

const StepThirdQuestion = ({
  handleFormChange,
  formData,
  setActive,
  active,
}) => {
  return (
    <div className="profession">
      <div className="questions">
        <h2 className="logoImage">ambaram</h2>
        <div>
          <p className="heading">Select what you'd like to manage first</p>
          <p>You can always add more in the future</p>
          <div className="answers">
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Legal"}
                  value="Legal"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Legal</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Nonprofits"}
                  value="Nonprofits"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Nonprofits</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Software_development"}
                  value="Software_development"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Software development</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Operations"}
                  value="Operations"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Operations</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Construction"}
                  value="Construction"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Construction</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "25-50"}
                  value="25-50"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>25-50</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Design_&_Creative"}
                  value="Design_&_Creative"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Design & Creative</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Sales_&_CRM"}
                  value="Sales_&_CRM"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Sales & CRM</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "It"}
                  value="It"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>It</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "HR_&_Recruiting"}
                  value="HR_&_Recruiting"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>HR & Recruiting</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Finance"}
                  value="Finance"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Finance</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Marketing"}
                  value="Marketing"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Marketing</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Product_management"}
                  value="Product_management"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Product management</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "PMO"}
                  value="PMO"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>PMO</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Education"}
                  value="Education"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Education</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="manage"
                  checked={formData.manage === "Other"}
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
              setActive({ ...active, questionTwo: true, questionThird: false })
            }
          >
            Back
          </button>
          <button
            disabled={!formData.manage}
            onClick={() =>
              setActive({ ...active, questionThird: false, questionForth: true })
            }
          >
            Continue
          </button>
        </div>
      </div>
      <div className="image">
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/ThirdQuestion.png"}
          alt="demo_image"
        />
      </div>
    </div>
  );
};

export default StepThirdQuestion;
