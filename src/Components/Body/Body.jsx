import React, { useState } from "react";

import AppBar from "../AppBar/AppBar";
import "../../Style/Body.css";
import { IoIosPersonAdd, IoMdCloseCircle } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import { MdAttachFile } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

export default function Body() {
  const [taskDescription, setTaskDescription] = useState("");
  const [items, setItems] = useState(0);
  const [qty, setQty] = useState(0);
  const [results, setResults] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMultiplication = () => {
    // Check if taskDescription, items, and qty are not empty
    if (taskDescription.trim() !== "" && items !== "" && qty !== "") {
      const multipliedValue = parseInt(items) * parseInt(qty);
      const newResult = {
        taskDescription: taskDescription,
        items: items,
        qty: qty,
        result: multipliedValue,
      };
      setResults([...results, newResult]);
    }
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleRemoveRow = (index) => {
    setResults(results.filter((_, i) => i !== index));
  };

  const [startDate, setStartDate] = useState(new Date()); // Default start date
  const [endDate, setEndDate] = useState(new Date()); // Default end date

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  return (
    <div>
      <AppBar />
      <Container style={{ maxWidth: "80%" }}>
        <Row>
          <div className="body">
            <div className="my-3">
              <h4>Edit Card</h4>
              <p className="bread_crumbs" href="#">
                Dashboard
              </p>
              <span className="px-2">/</span>
              <p className="bread_crumbs" href="#">
                Projects
              </p>
              <span className="px-2">/</span>
              <a className="bread_crumbs_active" href="#photoShoot">
                Photo shoot
              </a>
            </div>
            <Col xs={5} md={7} lg={9} className="my-3">
              <span className="px-3 fs-4">General</span>
              <span className="px-3 fs-4 bread_crumbs_active">Tasks</span>
              <span
                style={{ backgroundColor: "#cccccc", borderRadius: "100%" }}
                className="fs-5 p-1 bread_crumbs_active"
              >
                {results.length}
              </span>
              <ReactDatePicker
                className="mx-5"
                startDate={startDate}
                endDate={endDate}
                onChange={([start, end]) => {
                  handleStartDateChange(start);
                  handleEndDateChange(end);
                }}
                selectsRange
              />
            </Col>

            <hr />
            <Col>
              <Row id="items" className="item subtitle">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="row-container"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <div>
                      <div>{result.taskDescription}</div>
                      <span style={{ color: "grey" }}>Items: </span>
                      <span>{result.items}</span>
                      <span style={{ paddingLeft: 10 }}></span>
                      <span style={{ color: "grey" }}>Qty: </span>
                      <span>{result.qty}</span>
                      <span style={{ paddingLeft: 10 }}></span>
                      <span style={{ color: "grey" }}>Total: </span>
                      <span>{result.result}</span>{" "}
                      <span className="w-100"></span>
                      <Form.Select
                        style={{ backgroundColor: "#cce0ff" }}
                        size="sm"
                        className="w-25 d-inline mx-5"
                      >
                        <option style={{ color: "#4a3dff;" }}>
                          Productions
                        </option>
                        <option value="1">Productions</option>
                      </Form.Select>
                      <a
                        href="#attach"
                        style={{ color: "grey" }}
                        className="text-decoration-none"
                      >
                        <MdAttachFile className="side_menu_body_item_icon" />
                        17
                      </a>
                      <a
                        href="#attach"
                        style={{
                          color: "grey",
                          backgroundColor: "#f2f2f2",
                          display: "inline",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          border: "1px solid white",
                          textDecoration: "none",
                          marginLeft: "20px",
                          padding: "5px",
                        }}
                      >
                        <span style={{ fontSize: "20px" }}>
                          <AiOutlineUpload />
                        </span>
                      </a>
                      <span
                        href="#attach"
                        style={{
                          color: "red",
                          backgroundColor: "#ffc2b3",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100px",
                          height: "40px",
                          borderRadius: "50%",
                          border: "1px solid white",
                          textDecoration: "none",
                          marginLeft: "20px",
                          padding: "8px",
                        }}
                      >
                        <FaRegClock className="mx-1" />
                        May 7
                      </span>
                      <a
                        href="#attach"
                        style={{
                          color: "grey",
                          display: "inline",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          border: "1px solid white",
                          textDecoration: "none",
                          marginLeft: "20px",
                          padding: "5px",
                        }}
                      >
                        <span style={{ fontSize: "28px" }}>
                          <RxAvatar />
                        </span>
                      </a>
                    </div>
                    <div>
                      {hoverIndex === index && (
                        <button
                          size="sm"
                          onClick={() => handleRemoveRow(index)}
                          className="remove-button"
                        >
                          <IoMdCloseCircle />
                        </button>
                      )}
                    </div>
                    <hr />
                  </div>
                ))}
              </Row>
            </Col>
          </div>
          <Col xs={4}>
            <Form.Control
              size="md"
              className="d-inline"
              type="text"
              placeholder="Task Description"
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
            />
          </Col>
          <Col>
            <button
              onClick={handleMultiplication}
              style={{
                borderRadius: "100%",
                padding: "5px 12px 5px 12px",
                fontSize: 18,
              }}
              className="btn_primary"
            >
              +
            </button>
            <a
              href="#time"
              style={{
                color: "grey",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid white",
                textDecoration: "none",
                padding: "8px",
                fontSize: "24px",
                marginLeft: "20px",
              }}
            >
              <FaRegClock className="mx-1" />
            </a>
            <a
              href="#addUser"
              style={{
                color: "grey",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid white",
                textDecoration: "none",
                padding: "8px",
                fontSize: "24px",
              }}
            >
              <IoIosPersonAdd className="mx-1" />
            </a>
          </Col>
          <Row className="my-2">
            <Form.Label column xs="1">
              Items
            </Form.Label>
            <Col xs={1}>
              <Form.Control
                size="small"
                type="number"
                placeholder="Items"
                value={items}
                onChange={(e) => setItems(e.target.value)}
              />
            </Col>
            <Form.Label column xs="1">
              QTY
            </Form.Label>
            <Col xs={1}>
              <Form.Control
                size="small"
                type="number"
                placeholder="Qty"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
