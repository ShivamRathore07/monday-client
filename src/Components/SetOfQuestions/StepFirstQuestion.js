import React from "react";
import "../Css_Files/StepFirstQuestion.scss";

const StepFirstQuestion = ({
  handleFormChange,
  formData,
  setActive,
  active,
}) => {
  console.log(formData);
  return (
    <div className="profession">
      <div className="questions">
        <p className="logoImage">ambaram</p>
        <div>
          <p className="heading">
            {" "}
            Welcome to Ambaram Community !! Please tell us about yourself ?
          </p>
          <div className="answers">
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="profession"
                  checked={formData.profession === "Work"}
                  value="Work"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Work</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="profession"
                  checked={formData.profession === "freelance_designer"}
                  value="freelance_designer"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>freelance designer</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="profession"
                  checked={formData.profession === "Collage"}
                  value="Collage"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Collage</div>
            </div>
            <div className="radioBtn">
              <div>
                <input
                  type="radio"
                  name="profession"
                  checked={formData.profession === "Non_profit"}
                  value="Non_profit"
                  onChange={(e) => handleFormChange(e)}
                />
              </div>
              <div>Non profit</div>
            </div>
          </div>
        </div>

        {formData.profession === "Work" ? (
          <div>
            <p className="heading">What best describes your current role?</p>
            <div className="answers">
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Business_owner"}
                    value="Business_owner"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Business owner</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Team_leader"}
                    value="Team_leader"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Team leader</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Team_member"}
                    value="Team_member"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Team member</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Catagory_head"}
                    value="Catagory_head"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Catagory head</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Account_head"}
                    value="Account_head"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Account head</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Merchantiser"}
                    value="Merchantiser"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Merchantiser</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Designer"}
                    value="Designer"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Designer</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Product_developer"}
                    value="Produc_developer"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Product developer</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Freelancer"}
                    value="Freelancer"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Freelancer</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Director"}
                    value="Director"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Director</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "C-Suit"}
                    value="C-Suit"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>C-Suit</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "VP"}
                    value="VP"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>VP</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "CEO"}
                    value="CEO"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>CEO</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Owner"}
                    value="Owner"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Owner</div>
              </div>
            </div>
          </div>
        ) : formData.profession === "Collage" ? (
          <div>
            <p className="heading">What best describes your current role?</p>
            <div className="answers">
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Undergraduate_student"}
                    value="Undergraduate_student"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Undergraduate student</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Graduate_student"}
                    value="Graduate_student"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Graduate student</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Faculty_member"}
                    value="Faculty_member"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Faculty member</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Other"}
                    value="Other"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Other</div>
              </div>
            </div>
          </div>
        ) : formData.profession === "Non_profit" ? (
          <div>
            <p className="heading">What best describes your current role?</p>
            <div className="answers">
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Border_member"}
                    value="Border_member"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Border member</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Executive"}
                    value="Executive"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Executive</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Employee"}
                    value="Employee"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Employee</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "Volunteer"}
                    value="Volunteer"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>Volunteer</div>
              </div>
              <div className="radioBtn">
                <div>
                  <input
                    type="radio"
                    name="current_role"
                    checked={formData.current_role === "It_staff"}
                    value="It_staff"
                    onChange={(e) => handleFormChange(e)}
                  />
                </div>
                <div>It staff</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="professionContinueBtn">
          <button
            onClick={() =>
              setActive({ ...active, signup: true, questionOne: false })
            }
          >
            Back
          </button>
          <button
            disabled={!formData.profession || !formData.current_role}
            onClick={() =>
              setActive({ ...active, questionOne: false, questionTwo: true })
            }
          >
            Continue
          </button>
        </div>
      </div>
      <div className="image">
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/demo_image.png"}
          alt="demo_image"
        />
      </div>
    </div>
  );
};

export default StepFirstQuestion;
