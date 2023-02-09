/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import img from "../../SVG/list.svg";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import warning from "../../SVG/yellow-circle-exclamation-mark-icon-warning-sign-vector-13227823 1.png";
import axios from "axios";
const GenerateId = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [wallet, setWallet] = useState(false);

  const [data, setData] = useState([]);

  const [id, setID] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5002/api/heros/getherorole4"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Add Hero
  function MyVerticallyCenteredModal(props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [Gender, setGender] = useState("");
    const [DateOfBirth, setDOB] = useState("");
    const [Camera, setCamera] = useState("");
    const [EquipmentSpecification, setESpec] = useState("");
    const [gadgettop ,  ] = useState("")
    const [gadgetside ] = useState("")
    const [ gadgetfront] = useState("")
    const [Website, setWebsite] = useState("");
    const [SelectSkill, setSkills] = useState("");
    const [SelectExpertise, setExpertise] = useState("");
    const [OtherExpertise, setOtherExpertise] = useState("");
    const [DrivingLicenseNumber, setDNumber] = useState("");
    const [AadhaarCardNumber, setANumber] = useState("");
    const [Howdoyoutransferdata, setTData] = useState("");

    const AddHero = async (e) => {
      e.preventDefualt();
      const formD = {
        email,
        name,
        phoneNumber,
        Gender,
        Camera,
        DateOfBirth,
        EquipmentSpecification,
        Website,
        SelectExpertise,
        SelectSkill,
        OtherExpertise,
        DrivingLicenseNumber,
        AadhaarCardNumber,
        Howdoyoutransferdata,
      };

      try {
        const data = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5002/api/heros/addherobyadmin", formD
        );
        console.log(data)
        props.onHide()
        fetchData()
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "Edit Hero" : "Add Hero"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={AddHero}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number </Form.Label>
                <Form.Control type="number" onChange={(e) => setNumber(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Gender</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setGender(e.target.value)}>
                  <option>Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" onChange={(e) => setDOB(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Which Camera/Drone do you use</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setCamera(e.target.value)}>
                  <option>Select your Prefrence</option>
                  <option value={'Sony'}>Sony</option>
                  <option value={'Canon'}>Canon</option>
                  <option value={'Nikon'}>Nikon</option>
                  <option value={'DJI'}>DJI</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Equipment Specification</Form.Label>
                <Form.Control type="text" onChange={(e) => setESpec(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label> Gadget Side View</Form.Label>
                <Form.Control type="file" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Gadget Top View</Form.Label>
                <Form.Control type="file" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Gadget Front View</Form.Label>
                <Form.Control type="file"  onChange={(e) => setName(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Website/Portfolio link</Form.Label>
                <Form.Control type="text" onChange={(e) => setWebsite(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Skill</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setSkills(e.target.value)}>
                  <option>Select your Prefrence</option>
                  <option value={"Photography"}> Photography</option>
                  <option value={"Videography"}>Videography</option>
                  <option value={"Photography & Videography"}>Photography & Videography</option>
                  <option value={"Aerial Videography & PhotoGraphy"}>Aerial Videography & PhotoGraphy</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Expertise</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setExpertise(e.target.value)}>
                  <option>Select your Prefrence</option>
                  <option value={'Wedding/Pre wedding'}>Wedding/Pre wedding</option>
                  <option value={'Maternity/Baby Photoshoot'}>Maternity/Baby Photoshoot</option>
                  <option value={'Birthday Party (Adults)'}>Birthday Party (Adults)</option>
                  <option value={'Birthday Party (Kids)'}>Birthday Party (Kids)</option>
                  <option value={'Special Occasion / Function'}> Special Occasion / Function</option>
                  <option value={'Portriat/Fashion'}>Portriat/Fashion</option>
                  <option value={'Product/E-Com'}>Product/E-Com</option>
                  <option value={'Real Estate/Interior'}>Real Estate/Interior</option>
                  <option value={'Corporate/Industrial'}>Corporate/Industrial</option>
                  <option value={'Social Medial/Youtube'}>Social Medial/Youtube</option>
                  <option value={'Travel/Nature'}>Travel/Nature</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Other Expertise</Form.Label>
                <Form.Control type="text" onChange={(e) => setOtherExpertise(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Driving License Front Side</Form.Label>
                <Form.Control type="file" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Driving License Back Side</Form.Label>
                <Form.Control type="file"  onChange={(e) => setName(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Driving License Number</Form.Label>
                <Form.Control type="text" onChange={(e) => setDNumber(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Aadhaar Card Front Side</Form.Label>
                <Form.Control type="file" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Aadhaar CardBack Side</Form.Label>
                <Form.Control type="file"  onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Aadhaar Card Number</Form.Label>
                <Form.Control type="text"  onChange={(e) => setANumber(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>How do you transfer data</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setTData(e.target.value)}>
                  <option>Select your Prefrence</option>
                  <option value={'SD card to Laptop'}>SD card to Laptop</option>
                  <option value={'Pendrive'}>Pendrive</option>
                  <option value={'Data Cable & Sd Card Reader'}>Data Cable & Sd Card Reader</option>
                  <option value={'Online'}>Online</option>
                </Form.Select>
              </Form.Group>

              <Button
                variant="outline-success"
                type='submit'
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }




  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5002/api/heros/deleteheroByIdinadmin/${id}`
      );
      toast.success(`${data?.data?.name} is deleted `);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* Modals--------------------- */}{" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
      <StatusModal show={open} onHide={() => setOpen(false)} />
      <ViewModal show={view} onHide={() => setView(false)} />
      <AddWallet show={wallet} onHide={() => setWallet(false)} />
      {/* ------------------------------------ */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "2%" }}>
        <img
          src={img}
          alt=""
          style={{
            backgroundColor: "#4099ff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "40px",
            height: "40px",
            marginTop: "5px",
          }}
        />
        <p style={{ color: "black", fontSize: "18px", margin: "0" }}>
          Hero's List <br />
          <span style={{ fontSize: "14px" }}>All Hero's List</span>
        </p>
      </div>
      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Hero's
            <hr style={{ width: "70%" }} />
          </span>
          <Button
            style={{
              backgroundColor: "#4099ff",
              color: "#fff",
              borderRadius: "0",
              border: "1px solid #4099ff",
              padding: "10px",
            }}
            onClick={() => {
              setModalShow(true);
              setEdit(false);
            }}
          >
            Add Hero's
          </Button>
        </div>

        <div style={{ color: "black" }}>
          Search:{" "}
          <input
            type={"search"}
            style={{
              border: "1px solid #bfbfbf",
              width: "250px",
              color: "black",
              padding: "5px",
            }}
            placeholder="Search by Name , Phone number.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <br />

        <div style={{ overflow: "auto", marginTop: "2%" }} className="response">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.email} </td>
                  <td> {i.phoneNumber} </td>
                  <td> {i.SelectSkill} </td>
                  <td style={{ minWidth: "200px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {i.wallet}
                      <img
                        src="https://fox-jekapp.startuptrinity.com/assets/images/template-images/wallet-history3.png"
                        alt=""
                      />
                      {/* ----------------------------- */}
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          border: "1px solid #008000",
                          padding: "5px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => setWallet(true)}
                      >
                        <i
                          class="fa-solid fa-plus"
                          style={{ color: "#008000" }}
                        ></i>
                        <div
                          style={{
                            backgroundColor: "#008000",
                            height: "20px",
                            width: "2px",
                            transform: "rotate(20deg)",
                          }}
                        ></div>
                        <i
                          class="fa-solid fa-minus"
                          style={{ color: "#008000" }}
                        ></i>
                      </div>
                    </div>
                  </td>
                  <td> {i.rating} </td>
                  <td>
                    {i.status === "yes" ? (
                      <div
                        className="swipe"
                        onClick={() => {
                          setID(i._id);
                          setOpen(true);
                        }}
                      >
                        <div></div>
                      </div>
                    ) : (
                      <div className="swipe2">
                        <div></div>
                      </div>
                    )}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        class="fa-solid fa-eye"
                        style={{ color: "#099ffe", cursor: "pointer" }}
                        onClick={() => {
                          setID(i._id);
                          setView(true);
                        }}
                      ></i>
                      <i
                        class="fa-solid fa-pen-to-square"
                        style={{ color: "#267cb5", cursor: "pointer" }}
                        onClick={() => {
                          setModalShow(true);
                          setEdit(true);
                        }}
                      ></i>
                      <i
                        class="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};
export default HOC(GenerateId);