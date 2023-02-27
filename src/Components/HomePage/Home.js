import React, { useEffect, useState } from "react";
import "../Css_Files/home.scss";
import Select from "react-select";
import Cards from "../ReUseableCards/Cards";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getOneData } from "../../Redux/Actions/priceAction";

const Home = () => {
  const [teamSize, setTeamSize] = useState(3);
  const [monthlyYearly, setMonthlyYearly] = useState("Yearly");
  const dispatch = useDispatch();
  const { getPrice } = useSelector((s) => s.priceReducer);

  useEffect(() => {
    dispatch(getOneData("63f5c489f130d24050545c4a"));
  }, []);

  const options = [
    { value: "3", label: "3 Seats" },
    { value: "5", label: "5 Seats" },
    { value: "10", label: "10 Seats" },
    { value: "15", label: "15 Seats" },
    { value: "20", label: "20 Seats" },
    { value: "25", label: "25 Seats" },
    { value: "30", label: "30 Seats" },
    { value: "35", label: "35 Seats" },
    { value: "40", label: "40 Seats" },
    { value: "45", label: "45 Seats" },
    { value: "50", label: "50 Seats" },
  ];

  return (
    <div>
      <div className="topHeading">
        <img
          className="banner"
          src={process.env.PUBLIC_URL + "/banner.jpeg"}
          alt="banner image"
        />
        <h1>
          A visual tool for collaboration and tracking work in one place <br/> Start
          for <span className="tagColor">free</span>.
        </h1>
        <p>Unlimited boards and workflows. No credit card needed.</p>
        <div className="getStartedBtnInHeading">
          <p>{`GET STARTED`}</p>
        </div>
      </div>
      <div className="daynmikButtons">
        <div className="dropDown">
          <label>Choose team size : </label>
          <Select
            options={options}
            name="purchaseOrderId"
            className="select"
            placeholder="Choose Seats"
            onChange={(val) => {
              setTeamSize("");
              setTeamSize(val.value);
            }}
          />
        </div>
        <div className="yearlyStyle">
          <p onClick={() => setMonthlyYearly("Yearly")}>Yearly Save 18% | </p>
          <p onClick={() => setMonthlyYearly("Monthly")}> Monthly</p>
        </div>
      </div>
      <div className="cards">
        <Cards
          color="#68df23"
          fontColor="#323338"
          heading="Individual"
          price={getPrice.individual}
          SubHeading="Individual plan includes:"
          priceMonth="Up to 2 seats"
          features={getPrice.individualFeature}
        />
        <Cards
          color="#fd7e3b"
          heading="Basic"
          price={monthlyYearly === "Yearly" ? getPrice.basic : 10}
          SubHeading="Includes Individual, plus:"
          priceMonth={`Total $${
            monthlyYearly === "Yearly"
              ? getPrice.basic * teamSize
              : 10 * teamSize
          } / month`}
          features={getPrice.basicFeature}
        />
        <Cards
          color="#f17074"
          heading="Standard"
          price={monthlyYearly === "Yearly" ? getPrice.standard : 12}
          SubHeading="Includes Basic, plus:"
          priceMonth={`Total $${
            monthlyYearly === "Yearly"
              ? getPrice.standard * teamSize
              : 12 * teamSize
          } / month`}
          features={getPrice.standardFeature}
        />
        <Cards
          color="#2774c6"
          heading="Pro"
          price={monthlyYearly === "Yearly" ? getPrice.pro : 20}
          SubHeading="Includes Standard, plus:"
          priceMonth={`Total $${
            monthlyYearly === "Yearly" ? getPrice.pro * teamSize : 20 * teamSize
          } / month`}
          features={getPrice.proFeature}
        />
        <Cards
          color="#527fff"
          heading="Enterprise"
          SubHeading="Includes Pro, plus:"
          features={getPrice.enterpriseFeature}
          text={getPrice.enterprise}
        />
      </div>

      <div className="featureList">
        <div className="listHeading">
          <h1>Complete features list</h1>
          <div>
            {/* <MdExpandLess size={50} color="#080808" /> */}
            <MdExpandMore size={50} color="#6161ff" />
          </div>
        </div>
        <div className="TableHeading">
          <div>  <h4>Features</h4></div>
          <div>
            <h4 style={{ color: "#68df23" }}>Individual</h4>
            <button className="tryFreebtn">Try for free</button>
          </div>
          <div>
            <h4 style={{ color: "#fd7e3b" }}>Basic</h4>
            <button className="tryFreebtn">Try for free</button>
          </div>
          <div>
            <h4 style={{ color: "#f17074" }}>Standard</h4>
            <button className="tryFreebtn">Try for free</button>
          </div>
          <div>
            <h4 style={{ color: "#2774c6" }}>Pro</h4>
            <button className="tryFreebtn">Try for free</button>
          </div>
          <div>
            <h4 style={{ color: "#527fff" }}>Enterprise</h4>
            <button className="tryFreebtn">Contact us</button>
          </div>
        </div>
        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Plan</h2>
          </div>
          <div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Teams</h2>
          </div>
          <div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
            </div>
          </div>
        </div>
         <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Wall</h2>
          </div>
          <div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
            </div>
          </div>
        </div>
         <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>file</h2>
          </div>
          <div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
            </div>
          </div>
        </div>
         <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Create Product</h2>
          </div>
          <div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
            </div>
          </div>
        </div>
         <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Manage</h2>
          </div>
          <div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Dashboard</h2>
            <h4>Support</h4>
          </div>
          <div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
              <div>
                <p>Individual</p>
              </div>
            </div>
            <div className="TableHeading">
              <div className="essentialsHead">
                <p>Maximum number of seats</p>
                <div>
                  <AiOutlineInfoCircle size={24} color="gray" />
                </div>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
              <div>
                <p>
                  <IoMdCheckmarkCircle size={20} color="green" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
