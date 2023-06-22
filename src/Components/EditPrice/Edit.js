import React, { useEffect, useState } from "react";
import "../Css_Files/edit.scss";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Input from "../../controls/input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneData, updatePrice } from "../../Redux/Actions/priceAction";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getPrice } = useSelector((s) => s.priceReducer);

  const [individualFeatureInput, setIndividualFeatureInput] = useState("");
  const [individualFeatureList, setIndividualFeatureList] = useState([]);

  const [basicFeatureInput, setBasicFeatureInput] = useState("");
  const [basicFeatureList, setBasicFeatureList] = useState([]);

  const [standardFeatureInput, setStandardFeatureInput] = useState("");
  const [standardFeatureList, setStandardFeatureList] = useState([]);

  const [proFeatureInput, setProFeatureInput] = useState("");
  const [proFeatureList, setProFeatureList] = useState([]);

  const [enterpriseFeatureInput, setEnterpriseFeatureInput] = useState("");
  const [enterpriseFeatureList, setEnterpriseFeatureList] = useState([]);

  const [plan, setPlan] = useState({});
  const [planArray, setPlanArray] = useState([]);

  const [team, setTeam] = useState({});
  const [teamArray, setTeamArray] = useState([]);

  const [wall, setWall] = useState({});
  const [wallArray, setWallArray] = useState([]);

  const [file, setFile] = useState({});
  const [fileArray, setFileArray] = useState([]);

  const [product, setProduct] = useState({});
  const [productArray, setProductArray] = useState([]);

  const [manage, setManage] = useState({});
  const [manageArray, setManageArray] = useState([]);

  const [dashboard, setDashboard] = useState({});
  const [dashboardArray, setDashboardArray] = useState([]);

  const [editToggle, setEditToggle] = useState(false);
  const [editId, setEditId] = useState();

  useEffect(() => {
    dispatch(getOneData("64212a2eb090a91a90ce806e"));
  }, []);

  useEffect(() => {
    setIndividualFeatureList(getPrice.individualFeature);
    setBasicFeatureList(getPrice.basicFeature);
    setStandardFeatureList(getPrice.standardFeature);
    setProFeatureList(getPrice.proFeature);
    setEnterpriseFeatureList(getPrice.enterpriseFeature);
    setPlanArray(getPrice.plan);
    setTeamArray(getPrice.team);
    setWallArray(getPrice.wall);
    setFileArray(getPrice.file);
    setProductArray(getPrice.product);
    setManageArray(getPrice.manage);
    setDashboardArray(getPrice.dashboard);
  }, [getPrice]);

  //validation
  const signInValidationSchema = Yup.object().shape({
    basic: Yup.number()
      .required("Basic price is Required")
      .positive("Must be Positive"),
    standard: Yup.number()
      .required("Standard price is Required")
      .positive("Must be Positive"),
    pro: Yup.number()
      .required("Pro price is Required")
      .positive("Must be Positive"),
    individual: Yup.number().required("Individual price is Required"),
  });

  //formhandler
  const signInHandler = async (values) => {
    let obj = {
      basic: values.basic,
      standard: values.standard,
      pro: values.pro,
      enterprise: values.enterprise,
      individual: values.individual,
      individualFeature: individualFeatureList,
      basicFeature: basicFeatureList,
      standardFeature: standardFeatureList,
      proFeature: proFeatureList,
      enterpriseFeature: enterpriseFeatureList,
      plan: planArray,
      team: teamArray,
      wall: wallArray,
      file: fileArray,
      manage: manageArray,
      product: productArray,
      dashboard: dashboardArray,
    };

    dispatch(updatePrice({ obj, navigate }));
  };

  const handleAdd = (setList, featureList, setInput, featureInput, id) => {
    if (editToggle) {
      if (featureInput === "") {
        return;
      }
      const updatedTodos = [...featureList].map((e, i) => {
        if (id === i) {
          e = featureInput;
        }
        return e;
      });
      setList(updatedTodos);
      setEditToggle(false);
      setInput("");
    } else {
      if (featureInput === "") {
        return;
      }
      setList([...featureList, featureInput]);
      setInput("");
    }
  };

  const handleDelete = (id, featureList, setList) => {
    let Filter = featureList.filter((e, i) => i !== id);
    setList(Filter);
  };

  const handleEdit = (i, e, setInput) => {
    setEditToggle(true);
    setInput(e);
    setEditId(i);
  };

  const handleAddFeature = (input, name, setInput, array, setArray, id) => {
    if (editToggle) {
      let obj = { ...input };
      const updatedTodos = [...array].map((e, i) => {
        if (id === i) {
          e = obj;
        }
        return e;
      });
      name && setArray(updatedTodos);
      setEditToggle(false);
      
      for (let key in input) {
        input[key] = "";
      }
      setInput({ ...input });
    } else {
      let obj = { ...input };
      name && setArray([...array, obj]);
      for (let key in input) {
        input[key] = "";
      }
      setInput({ ...input });
    }
  };


  return (
    <>
      <Header />
      <div className="editPage">
        <Formik
          initialValues={{
            individual: getPrice.individual,
            Individual: individualFeatureInput,
            basic: getPrice.basic,
            basicFeature: basicFeatureInput,
            standard: getPrice.standard,
            standardFeature: standardFeatureInput,
            pro: getPrice.pro,
            proFeature: proFeatureInput,
            enterprise: getPrice.enterprise,
            enterpriseFeature: enterpriseFeatureInput,
          }}
          onSubmit={signInHandler}
          validationSchema={signInValidationSchema}
          enableReinitialize
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            handleBlur,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <div className="formContainer">
                <div className="form">
                  <p className="batch individualColor">Individual</p>
                  <Input
                    label="Individual Price"
                    name="individual"
                    value={values.individual}
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="features">
                    <Input
                      label="Individual plan includes:"
                      name="Individual"
                      type="text"
                      value={values.Individual}
                      onChange={(e) =>
                        setIndividualFeatureInput(e.target.value)
                      }
                      onBlur={handleBlur}
                    />

                    <div>
                      <AiFillPlusCircle
                        onClick={() =>
                          handleAdd(
                            setIndividualFeatureList,
                            individualFeatureList,
                            setIndividualFeatureInput,
                            individualFeatureInput,
                            editId
                          )
                        }
                        size={35}
                        className="addButton"
                      />
                    </div>
                  </div>
                  {individualFeatureList?.map((e, i) => (
                    <div key={i} className="tags">
                      <div className="tags">
                        <div>
                          <BsDot size={20} />
                        </div>

                        <p>{e}</p>
                      </div>
                      <div className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(
                              i,
                              individualFeatureList,
                              setIndividualFeatureList
                            )
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() =>
                            handleEdit(i, e, setIndividualFeatureInput)
                          }
                          size={19}
                          className="deleteButton"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="form">
                  <p className="batch basicColor">Basic</p>

                  <Input
                    label="Basic Price"
                    name="basic"
                    value={values.basic}
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="features">
                    <Input
                      label="Includes Individual, plus:"
                      name="basicFeature"
                      value={values.basicFeature}
                      type="text"
                      onChange={(e) => setBasicFeatureInput(e.target.value)}
                      onBlur={handleBlur}
                    />

                    <div>
                      <AiFillPlusCircle
                        onClick={() =>
                          handleAdd(
                            setBasicFeatureList,
                            basicFeatureList,
                            setBasicFeatureInput,
                            basicFeatureInput,
                            editId
                          )
                        }
                        size={35}
                        className="addButton"
                      />
                    </div>
                  </div>
                  {basicFeatureList?.map((e, i) => (
                    <div key={i} className="tags">
                      <div className="tags">
                        <div>
                          <BsDot size={20} />
                        </div>

                        <p>{e}</p>
                      </div>
                      <div className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(
                              i,
                              basicFeatureList,
                              setBasicFeatureList
                            )
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setBasicFeatureInput)}
                          size={19}
                          className="deleteButton"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="form">
                  <p className="batch standardColor">Standard</p>

                  <Input
                    label="Standard Price"
                    name="standard"
                    type="number"
                    value={values.standard}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="features">
                    <Input
                      label="Includes Basic, plus:"
                      name="standardFeature"
                      value={values.standardFeature}
                      type="text"
                      onChange={(e) => setStandardFeatureInput(e.target.value)}
                      onBlur={handleBlur}
                    />

                    <div>
                      <AiFillPlusCircle
                        onClick={() =>
                          handleAdd(
                            setStandardFeatureList,
                            standardFeatureList,
                            setStandardFeatureInput,
                            standardFeatureInput,
                            editId
                          )
                        }
                        size={35}
                        className="addButton"
                      />
                    </div>
                  </div>
                  {standardFeatureList?.map((e, i) => (
                    <div key={i} className="tags">
                      <div className="tags">
                        <div>
                          <BsDot size={20} />
                        </div>

                        <p>{e}</p>
                      </div>
                      <div className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(
                              i,
                              standardFeatureList,
                              setStandardFeatureList
                            )
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() =>
                            handleEdit(i, e, setStandardFeatureInput)
                          }
                          size={19}
                          className="deleteButton"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="formContainer">
                <div className="form">
                  <p className="batch proColor">Pro</p>
                  <Input
                    label="Pro Price"
                    name="pro"
                    type="number"
                    value={values.pro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="features">
                    <Input
                      label="Includes Standard, plus:"
                      name="proFeature"
                      value={values.proFeature}
                      type="text"
                      onChange={(e) => setProFeatureInput(e.target.value)}
                      onBlur={handleBlur}
                    />

                    <div>
                      <AiFillPlusCircle
                        onClick={() =>
                          handleAdd(
                            setProFeatureList,
                            proFeatureList,
                            setProFeatureInput,
                            proFeatureInput,
                            editId
                          )
                        }
                        size={35}
                        className="addButton"
                      />
                    </div>
                  </div>
                  {proFeatureList?.map((e, i) => (
                    <div key={i} className="tags">
                      <div className="tags">
                        <div>
                          <BsDot size={20} />
                        </div>

                        <p>{e}</p>
                      </div>
                      <div className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(i, proFeatureList, setProFeatureList)
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setProFeatureInput)}
                          size={19}
                          className="deleteButton"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="form">
                  <p className="batch enterpriseColor">Enterprise</p>
                  <Input
                    label="Enterprise Price"
                    name="enterprise"
                    type="text"
                    value={values.enterprise}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="features">
                    <Input
                      label="Includes Pro, plus:"
                      name="enterpriseFeature"
                      value={values.enterpriseFeature}
                      type="text"
                      onChange={(e) =>
                        setEnterpriseFeatureInput(e.target.value)
                      }
                      onBlur={handleBlur}
                    />

                    <div>
                      <AiFillPlusCircle
                        onClick={() =>
                          handleAdd(
                            setEnterpriseFeatureList,
                            enterpriseFeatureList,
                            setEnterpriseFeatureInput,
                            enterpriseFeatureInput,
                            editId
                          )
                        }
                        size={35}
                        className="addButton"
                      />
                    </div>
                  </div>
                  {enterpriseFeatureList?.map((e, i) => (
                    <div key={i} className="tags">
                      <div className="tags">
                        <div>
                          <BsDot size={20} />
                        </div>

                        <p>{e}</p>
                      </div>
                      <div className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(
                              i,
                              enterpriseFeatureList,
                              setEnterpriseFeatureList
                            )
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() =>
                            handleEdit(i, e, setEnterpriseFeatureInput)
                          }
                          size={19}
                          className="deleteButton"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="CompletefeaturesList">
                <div className="essentials">
                  <h2>Plan</h2>
                </div>
                <div className="featuresInputBoxList">
                  <Input
                    label="Feature Name"
                    name="planName"
                    type="text"
                    value={plan.planName}
                    onChange={(e) =>
                      setPlan({ ...plan, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Individual"
                    name="planIndividual"
                    type="text"
                    value={plan.planIndividual}
                    onChange={(e) =>
                      setPlan({ ...plan, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Basic"
                    name="planBasic"
                    type="text"
                    value={plan.planBasic}
                    onChange={(e) =>
                      setPlan({ ...plan, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Standard"
                    name="planStandard"
                    type="text"
                    value={plan.planStandard}
                    onChange={(e) =>
                      setPlan({ ...plan, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Pro"
                    name="planPro"
                    type="text"
                    value={plan.planPro}
                    onChange={(e) =>
                      setPlan({ ...plan, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Enterprise"
                    name="planEnterprise"
                    type="text"
                    value={plan.planEnterprise}
                    onChange={(e) =>
                      setPlan({ ...plan, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                </div>
                <div className="addFeaturesContainer">
                  <button
                    type="button"
                    className="addfeatures"
                    onClick={() => {
                      handleAddFeature(
                        plan,
                        plan.planName,
                        setPlan,
                        planArray,
                        setPlanArray,
                        editId
                      );
                    }}
                  >
                    Add New Plans
                  </button>
                </div>

                {planArray?.map((e, i) => (
                  <div className="TableHeading">
                    <div className="essentialsHead">
                      <div>
                        <p>{e.planName}</p>
                      </div>
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
                    <div>
                      <p className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(i, planArray, setPlanArray)
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setPlan)}
                          size={19}
                          className="deleteButton"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="CompletefeaturesList">
                <div className="essentials">
                  <h2>Teams</h2>
                </div>
                <div className="featuresInputBoxList">
                  <Input
                    label="Feature Name"
                    name="teamName"
                    value={team.teamName}
                    type="text"
                    onChange={(e) =>
                      setTeam({ ...team, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Individual"
                    name="teamIndividual"
                    type="text"
                    value={team.teamIndividual}
                    onChange={(e) =>
                      setTeam({ ...team, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Basic"
                    name="teamBasic"
                    value={team.teamBasic}
                    type="text"
                    onChange={(e) =>
                      setTeam({ ...team, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Standard"
                    name="teamStandard"
                    value={team.teamStandard}
                    type="text"
                    onChange={(e) =>
                      setTeam({ ...team, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Pro"
                    name="teamPro"
                    type="text"
                    value={team.teamPro}
                    onChange={(e) =>
                      setTeam({ ...team, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Enterprise"
                    name="teamEnterprise"
                    type="text"
                    value={team.teamEnterprise}
                    onChange={(e) =>
                      setTeam({ ...team, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                </div>
                <div className="addFeaturesContainer">
                  <button
                    type="button"
                    className="addfeatures"
                    onClick={() =>
                      handleAddFeature(
                        team,
                        team.teamName,
                        setTeam,
                        teamArray,
                        setTeamArray,
                        editId
                      )
                    }
                  >
                    Add New Teams
                  </button>
                </div>

                {teamArray?.map((e, i) => (
                  <div className="TableHeading">
                    <div className="essentialsHead">
                      <div>
                        <p>{e.teamName}</p>
                      </div>
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
                    <div>
                      <p className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(i, teamArray, setTeamArray)
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setTeam)}
                          size={19}
                          className="deleteButton"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="CompletefeaturesList">
                <div className="essentials">
                  <h2>wall</h2>
                </div>
                <div className="featuresInputBoxList">
                  <Input
                    label="Feature Name"
                    name="wallName"
                    type="text"
                    value={wall.wallName}
                    onChange={(e) =>
                      setWall({ ...wall, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Individual"
                    name="wallIndividual"
                    type="text"
                    value={wall.wallIndividual}
                    onChange={(e) =>
                      setWall({ ...wall, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Basic"
                    name="wallBasic"
                    type="text"
                    value={wall.wallBasic}
                    onChange={(e) =>
                      setWall({ ...wall, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Standard"
                    name="wallStandard"
                    type="text"
                    value={wall.wallStandard}
                    onChange={(e) =>
                      setWall({ ...wall, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Pro"
                    name="wallPro"
                    type="text"
                    value={wall.wallPro}
                    onChange={(e) =>
                      setWall({ ...wall, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Enterprise"
                    name="wallEnterprise"
                    type="text"
                    value={wall.wallEnterprise}
                    onChange={(e) =>
                      setWall({ ...wall, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                </div>
                <div className="addFeaturesContainer">
                  <button
                    type="button"
                    className="addfeatures"
                    onClick={() =>
                      handleAddFeature(
                        wall,
                        wall.wallName,
                        setWall,
                        wallArray,
                        setWallArray,
                        editId
                      )
                    }
                  >
                    Add New Walls
                  </button>
                </div>

                {wallArray?.map((e, i) => (
                  <div className="TableHeading">
                    <div className="essentialsHead">
                      <div>
                        <p>{e.wallName}</p>
                      </div>
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
                    <div>
                      <p className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(i, wallArray, setWallArray)
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setWall)}
                          size={19}
                          className="deleteButton"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="CompletefeaturesList">
                <div className="essentials">
                  <h2>File</h2>
                </div>
                <div className="featuresInputBoxList">
                  <Input
                    label="Feature Name"
                    name="fileName"
                    type="text"
                    value={file.fileName}
                    onChange={(e) =>
                      setFile({ ...file, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Individual"
                    name="fileIndividual"
                    type="text"
                    value={file.fileIndividual}
                    onChange={(e) =>
                      setFile({ ...file, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Basic"
                    name="fileBasic"
                    type="text"
                    value={file.fileBasic}
                    onChange={(e) =>
                      setFile({ ...file, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Standard"
                    name="fileStandard"
                    type="text"
                    value={file.fileStandard}
                    onChange={(e) =>
                      setFile({ ...file, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Pro"
                    name="filePro"
                    type="text"
                    value={file.filePro}
                    onChange={(e) =>
                      setFile({ ...file, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Enterprise"
                    name="fileEnterprise"
                    type="text"
                    value={file.fileEnterprise}
                    onChange={(e) =>
                      setFile({ ...file, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                </div>
                <div className="addFeaturesContainer">
                  <button
                    type="button"
                    className="addfeatures"
                    onClick={() =>
                      handleAddFeature(
                        file,
                        file.fileName,
                        setFile,
                        fileArray,
                        setFileArray,
                        editId
                      )
                    }
                  >
                    Add New Files
                  </button>
                </div>

                {fileArray?.map((e, i) => (
                  <div className="TableHeading">
                    <div className="essentialsHead">
                      <div>
                        <p>{e.fileName}</p>
                      </div>
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
                    <div>
                      <p className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(i, fileArray, setFileArray)
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setFile)}
                          size={19}
                          className="deleteButton"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="CompletefeaturesList">
                <div className="essentials">
                  <h2>Create Product</h2>
                </div>
                <div className="featuresInputBoxList">
                  <Input
                    label="Feature Name"
                    name="productName"
                    type="text"
                    value={product.productName}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Individual"
                    name="productIndividual"
                    type="text"
                    value={product.productIndividual}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Basic"
                    name="productBasic"
                    type="text"
                    value={product.productBasic}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Standard"
                    name="productStandard"
                    type="text"
                    value={product.productStandard}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Pro"
                    name="productPro"
                    type="text"
                    value={product.productPro}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Enterprise"
                    name="productEnterprise"
                    type="text"
                    value={product.productEnterprise}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                </div>
                <div className="addFeaturesContainer">
                  <button
                    type="button"
                    className="addfeatures"
                    onClick={() =>
                      handleAddFeature(
                        product,
                        product.productName,
                        setProduct,
                        productArray,
                        setProductArray,
                        editId
                      )
                    }
                  >
                    Add New Products
                  </button>
                </div>

                {productArray?.map((e, i) => (
                  <div className="TableHeading">
                    <div className="essentialsHead">
                      <div>
                        <p>{e.productName}</p>
                      </div>
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
                    <div>
                      <p className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(i, productArray, setProductArray)
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setProduct)}
                          size={19}
                          className="deleteButton"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="CompletefeaturesList">
                <div className="essentials">
                  <h2>Manage</h2>
                </div>
                <div className="featuresInputBoxList">
                  <Input
                    label="Feature Name"
                    name="manageName"
                    type="text"
                    value={manage.manageName}
                    onChange={(e) =>
                      setManage({ ...manage, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Individual"
                    name="manageIndividual"
                    type="text"
                    value={manage.manageIndividual}
                    onChange={(e) =>
                      setManage({ ...manage, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Basic"
                    name="manageBasic"
                    type="text"
                    value={manage.manageBasic}
                    onChange={(e) =>
                      setManage({ ...manage, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Standard"
                    name="manageStandard"
                    type="text"
                    value={manage.manageStandard}
                    onChange={(e) =>
                      setManage({ ...manage, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Pro"
                    name="managePro"
                    type="text"
                    value={manage.managePro}
                    onChange={(e) =>
                      setManage({ ...manage, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Enterprise"
                    name="manageEnterprise"
                    type="text"
                    value={manage.manageEnterprise}
                    onChange={(e) =>
                      setManage({ ...manage, [e.target.name]: e.target.value })
                    }
                    onBlur={handleBlur}
                  />
                </div>
                <div className="addFeaturesContainer">
                  <button
                    type="button"
                    className="addfeatures"
                    onClick={() =>
                      handleAddFeature(
                        manage,
                        manage.manageName,
                        setManage,
                        manageArray,
                        setManageArray,
                        editId
                      )
                    }
                  >
                    Add New Manages
                  </button>
                </div>

                {manageArray?.map((e, i) => (
                  <div className="TableHeading">
                    <div className="essentialsHead">
                      <div>
                        <p>{e.manageName}</p>
                      </div>
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
                    <div>
                      <p className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(i, manageArray, setManageArray)
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setManage)}
                          size={19}
                          className="deleteButton"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="CompletefeaturesList">
                <div className="essentials">
                  <h2>Dashboard</h2>
                </div>
                <div className="featuresInputBoxList">
                  <Input
                    label="Feature Name"
                    name="dashboardName"
                    type="text"
                    value={dashboard.dashboardName}
                    onChange={(e) =>
                      setDashboard({
                        ...dashboard,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Individual"
                    name="dashboardIndividual"
                    type="text"
                    value={dashboard.dashboardIndividual}
                    onChange={(e) =>
                      setDashboard({
                        ...dashboard,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Basic"
                    name="dashboardBasic"
                    type="text"
                    value={dashboard.dashboardBasic}
                    onChange={(e) =>
                      setDashboard({
                        ...dashboard,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Standard"
                    name="dashboardStandard"
                    type="text"
                    value={dashboard.dashboardStandard}
                    onChange={(e) =>
                      setDashboard({
                        ...dashboard,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Pro"
                    name="dashboardPro"
                    type="text"
                    value={dashboard.dashboardPro}
                    onChange={(e) =>
                      setDashboard({
                        ...dashboard,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Enterprise"
                    name="dashboardEnterprise"
                    type="text"
                    value={dashboard.dashboardEnterprise}
                    onChange={(e) =>
                      setDashboard({
                        ...dashboard,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={handleBlur}
                  />
                </div>
                <div className="addFeaturesContainer">
                  <button
                    type="button"
                    className="addfeatures"
                    onClick={() =>
                      handleAddFeature(
                        dashboard,
                        dashboard.dashboardName,
                        setDashboard,
                        dashboardArray,
                        setDashboardArray,
                        editId
                      )
                    }
                  >
                    Add New Dashboards
                  </button>
                </div>

                {dashboardArray?.map((e, i) => (
                  <div className="TableHeading">
                    <div className="essentialsHead">
                      <div>
                        <p>{e.dashboardName}</p>
                      </div>
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
                    <div>
                      <p className="btns">
                        <MdDeleteForever
                          onClick={() =>
                            handleDelete(i, dashboardArray, setDashboardArray)
                          }
                          size={20}
                          className="deleteButton"
                        />
                        <FiEdit
                          onClick={() => handleEdit(i, e, setDashboard)}
                          size={19}
                          className="deleteButton"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="formContainer">
                <button className="submit" onClick={handleSubmit}>
                  Update Data
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
