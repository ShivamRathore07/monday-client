import React from "react";
import "../Css_Files/StepFirstQuestion.scss";

const StepTwoQuestion = ({handleFormChange, formData, setActive, active}) => {
  return (
    <div className="profession">
      <div className="questions">
        <p className="logoImage">ambaram</p>
        <div>
          <p className="heading">To form your team, how many logins would you like to purchase?</p>
          <div className="answers">
            <div className="radioBtn">
              <div>
                <input type="radio" name="teamSize" checked={formData.teamSize==="Only_me"} value="Only_me" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>Only me</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="teamSize" checked={formData.teamSize==="2-5"} value="2-5" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>2-5</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="teamSize" checked={formData.teamSize==="6-10"} value="6-10" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>6-10</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="teamSize" checked={formData.teamSize==="11-15"} value="11-15" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>11-15</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="teamSize" checked={formData.teamSize==="16-25"} value="16-25" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>16-25</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="teamSize" checked={formData.teamSize==="25-50"} value="25-50" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>25-50</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="teamSize" checked={formData.teamSize==="51-100"} value="51-100" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>51-100</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="teamSize" checked={formData.teamSize==="101-500"} value="101-500" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>101-500</div>
            </div>
          </div>
        </div>

         
        <div>
          <p className="heading">What is your company strength? how many people work in your company?</p>
          <div className="answers">
            <div className="radioBtn">
              <div>
                <input type="radio" name="companySize" checked={formData.companySize==="1-19"} value="1-19" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>1-19</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="companySize" checked={formData.companySize==="20-49"} value="20-49" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>20-49</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="companySize" checked={formData.companySize==="50-99"} value="50-99" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>50-99</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="companySize" checked={formData.companySize==="100-250"} value="100-250" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>100-250</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="companySize" checked={formData.companySize==="251-500"} value="251-500" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>251-500</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="companySize" checked={formData.companySize==="501-1500"} value="501-1500" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>501-1500</div>
            </div>
            <div className="radioBtn">
              <div>
                <input type="radio" name="companySize" checked={formData.companySize==="1500+"} value="1500+" onChange={(e)=>handleFormChange(e)}/>
              </div>
              <div>1500+</div>
            </div>
          </div>
        </div>

        <div className="companyContinueBtn"> 
          <button onClick={()=>setActive({ ...active, questionOne: true, questionTwo: false })} >Back</button>
          <button disabled={!formData.teamSize || !formData.companySize} onClick={()=>setActive({ ...active, questionTwo: false, questionThird: true })}>Continue</button>
        </div>
      </div>
      <div className="image">
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/sideimg.png"}
          alt="demo_image"
        />
      </div>
    </div>
  );
};

export default StepTwoQuestion;
