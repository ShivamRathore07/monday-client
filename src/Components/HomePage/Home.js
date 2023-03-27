import React, { useEffect, useState } from "react";
import "../Css_Files/home.scss";
import Select from "react-select";
import Cards from "../ReUseableCards/Cards";
import { MdExpandMore } from "react-icons/md";
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
    dispatch(getOneData("64212a2eb090a91a90ce806e"));
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
          alt="banner_image"
        />
        <h1>
          A visual tool for collaboration and tracking work in one place <br />{" "}
          Start for <span className="tagColor">free</span>.
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

      <img
          className="bgImage"
          src={process.env.PUBLIC_URL + "/background.jpeg"}
          alt="bgImage"
        />
      <div className="featureList">
        <div className="listHeading">
          <h1>Complete features list</h1>
          <div>
            <MdExpandMore size={50} color="#ffffff" />
          </div>
        </div>
        <div className="TableHeadingList">
          <div>
            <h4>Features</h4>
          </div>
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
            {getPrice.plan?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.planName}</p>
                  <div>
                    <AiOutlineInfoCircle size={24} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.planIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.planIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.planBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.planBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.planStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.planStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.planPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.planPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.planEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.planEnterprise
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Teams</h2>
          </div>
          <div>
            {getPrice.team?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.teamName}</p>
                  <div>
                    <AiOutlineInfoCircle size={24} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.teamIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.teamIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.teamBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.teamBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.teamStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.teamStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.teamPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.teamPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.teamEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.teamEnterprise
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Wall</h2>
          </div>
          <div>
            {getPrice.wall?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.wallName}</p>
                  <div>
                    <AiOutlineInfoCircle size={24} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.wallIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.wallIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.wallBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.wallBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.wallStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.wallStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.wallPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.wallPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.wallEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.wallEnterprise
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>File</h2>
          </div>
          <div>
            {getPrice.file?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.fileName}</p>
                  <div>
                    <AiOutlineInfoCircle size={24} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.fileIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.fileIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.fileBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.fileBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.fileStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.fileStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.filePro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.filePro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.fileEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.fileEnterprise
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Create Product</h2>
          </div>
          <div>
            {getPrice.product?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.productName}</p>
                  <div>
                    <AiOutlineInfoCircle size={24} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.productIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.productIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.productBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.productBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.productStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.productStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.productPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.productPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.productEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.productEnterprise
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Manage</h2>
          </div>
          <div>
            {getPrice.manage?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.manageName}</p>
                  <div>
                    <AiOutlineInfoCircle size={24} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.manageIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.manageIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.manageBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.manageBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.manageStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.manageStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.managePro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.managePro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.manageEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.manageEnterprise
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="CompletefeaturesList">
          <div className="essentials">
            <h2>Dashboard</h2>
          </div>
          <div>
            {getPrice.dashboard?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.dashboardName}</p>
                  <div>
                    <AiOutlineInfoCircle size={24} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.dashboardIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.dashboardIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.dashboardBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.dashboardBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.dashboardStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.dashboardStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.dashboardPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.dashboardPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.dashboardEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#2774c6" />
                    ) : (
                      e.dashboardEnterprise
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
