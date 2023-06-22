import React, { useEffect, useState } from "react";
import "../Css_Files/home.scss";
import Select from "react-select";
import Cards from "../ReUseableCards/Cards";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getOneData } from "../../Redux/Actions/priceAction";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
      <Header />
      <div className="topHeading">
        <img
          className="banner"
          src={process.env.PUBLIC_URL + "/banner.jpeg"}
          alt="banner_image"
        />
        <p className="bannerHeading">
          A visual tool for collaboration and tracking work in one place <br />
          Start for <span className="tagColor">free</span>.
        </p>
        <p>No credit card needed.</p>
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
          fontColor="#68df23"
          heading="Individual"
          price={getPrice.individual}
          SubHeading="Includes Individual, plus:"
          priceMonth="Up to 2 seats"
          features={getPrice.individualFeature}
        />
        <Cards
          color="#fd7e3b"
          heading="Basic"
          price={monthlyYearly === "Yearly" ? getPrice.basic : 10}
          SubHeading="Includes Basic, plus:"
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
          color="#4D7CFE"
          heading="Pro"
          price={monthlyYearly === "Yearly" ? getPrice.pro : 20}
          SubHeading="Includes Basic, plus:"
          priceMonth={`Total $${
            monthlyYearly === "Yearly" ? getPrice.pro * teamSize : 20 * teamSize
          } / month`}
          features={getPrice.proFeature}
        />
        <Cards
          color="#527fff"
          heading="Enterprise"
          SubHeading="Includes Basic, plus:"
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
          <p>Complete features list</p>
          <div>
            <MdExpandMore size={50} color="#ffffff" />
          </div>
        </div>
        <div className="TableHeadingList">
          <div>
            <h2 style={{fontWeight:"400"}}>Features</h2>
          </div>
          <div>
            <h4 style={{ color: "#68df23" }}>Individual</h4>
            <button className="tryFreebtn">TRY FOR FREE</button>
          </div>
          <div>
            <h4 style={{ color: "#fd7e3b" }}>Basic</h4>
            <button className="tryFreebtn">TRY FOR FREE</button>
          </div>
          <div>
            <h4 style={{ color: "#f17074" }}>Standard</h4>
            <button className="tryFreebtn">TRY FOR FREE</button>
          </div>
          <div>
            <h4 style={{ color: "#4D7CFE" }}>Pro</h4>
            <button className="tryFreebtn">TRY FOR FREE</button>
          </div>
          <div>
            <h4 style={{ color: "#527fff" }}>Enterprise</h4>
            <button className="tryFreebtn">CONTACT US</button>
          </div>
        </div>
        <div className="CompletefeaturesList">
          <div className="essentials">
            <p>Plan</p>
          </div>
          <div>
            {getPrice.plan?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.planName}</p>
                  <div>
                    <AiOutlineInfoCircle size={20} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.planIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.planIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.planBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.planBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.planStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.planStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.planPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.planPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.planEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
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
            <p>Teams</p>
          </div>
          <div>
            {getPrice.team?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.teamName}</p>
                  <div>
                    <AiOutlineInfoCircle size={20} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.teamIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.teamIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.teamBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.teamBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.teamStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.teamStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.teamPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.teamPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.teamEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
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
            <p>Wall</p>
          </div>
          <div>
            {getPrice.wall?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.wallName}</p>
                  <div>
                    <AiOutlineInfoCircle size={20} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.wallIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.wallIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.wallBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.wallBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.wallStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.wallStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.wallPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.wallPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.wallEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
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
            <p>File</p>
          </div>
          <div>
            {getPrice.file?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.fileName}</p>
                  <div>
                    <AiOutlineInfoCircle size={20} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.fileIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.fileIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.fileBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.fileBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.fileStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.fileStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.filePro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.filePro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.fileEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
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
            <p>Create Product</p>
          </div>
          <div>
            {getPrice.product?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.productName}</p>
                  <div>
                    <AiOutlineInfoCircle size={20} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.productIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.productIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.productBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.productBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.productStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.productStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.productPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.productPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.productEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
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
            <p>Manage</p>
          </div>
          <div>
            {getPrice.manage?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.manageName}</p>
                  <div>
                    <AiOutlineInfoCircle size={20} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.manageIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.manageIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.manageBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.manageBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.manageStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.manageStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.managePro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.managePro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.manageEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
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
            <p>Dashboard</p>
          </div>
          <div>
            {getPrice.dashboard?.map((e, i) => (
              <div key={i} className="TableHeading">
                <div className="essentialsHead">
                  <p>{e.dashboardName}</p>
                  <div>
                    <AiOutlineInfoCircle size={20} color="gray" />
                  </div>
                </div>
                <div>
                  <p>
                    {e.dashboardIndividual === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.dashboardIndividual
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.dashboardBasic === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.dashboardBasic
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.dashboardStandard === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.dashboardStandard
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.dashboardPro === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
                    ) : (
                      e.dashboardPro
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {e.dashboardEnterprise === "icon" ? (
                      <IoMdCheckmarkCircle size={20} color="#4D7CFE" />
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
      <Footer />
    </div>
  );
};

export default Home;
