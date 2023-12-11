import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, UPDATE } from "../redux/actions/action";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Todo = () => {
  const { User_data } = useSelector((state) => state.todoreducers);
  console.log("T  his is data", User_data);
  const dispatch = useDispatch();

  const handlRemove = (id) => {
    dispatch(DELETE(id));
  };
  const [show, setShow] = useState(false);
  const [showvalue, setShowvalue] = useState("");

  const [showupdate, setShowUpdate] = useState(false);
  const [update, setUpdate] = useState("");
  const [updateid, setUpdateid] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleupdate = (ele, id) => {
    setShowUpdate(true);
    setUpdate(ele);
    setUpdateid(id);
  };

  const handlerupdate = () => {
    dispatch(UPDATE(update, updateid));
    setShowUpdate(false);
  };
  return (
    <div className="todo_data mt-3 col-lg-5 mx-auto ">
      {User_data.map((ele, key) => {
        return (
          <>
            <div
              className="todo_container mt-3 px-2 d-flex justify-content-between"
              style={{
                background: "#dcdde1",
                borderRadius: "3px",
                height: "45px",
              }}
            >
              <li
                style={{ listStyle: "none" }}
                className="mt-2 my-2 align-items-center"
              >
                {ele}
              </li>
              <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                <EditIcon
                  onClick={() => handleupdate(ele, key)}
                  style={{ color: "#3c40c6", cursor: "pointer" }}
                />
                <DeleteIcon
                  onClick={() => handlRemove(key)}
                  style={{ color: "red", cursor: "pointer" }}
                />
                <RemoveRedEyeIcon
                  onClick={() => {
                    handleShow(true);
                    setShowvalue(ele);
                  }}
                  style={{ color: "blue", cursor: "pointer" }}
                />
              </div>
            </div>
          </>
        );
      })}

      <Modal show={show}>
        <h3 className="text-center mt-3">{showvalue}</h3>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showupdate}
        onHide={() => setShowUpdate(false)}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">
            <input
              className="form-control"
              onChange={(e) => setUpdate(e.target.value)}
              value={update}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdate(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handlerupdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Todo;
