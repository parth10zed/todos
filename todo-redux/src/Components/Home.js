import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./Todo";
import { useDispatch } from "react-redux";
import { Add } from "../redux/actions/action";
const Home = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const AddTodo = () => {
    console.log("Add Calling", data);
    dispatch(Add(data));
    setData("");
  };
  return (
    <div>
      <div className="container">
        <section className="mt-3 text-center">
          <h3>Enter Your Task</h3>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">
            <input
              className="form-control"
              onChange={(e) => setData(e.target.value)}
              value={data}
            />
            <button
              onClick={() => AddTodo()}
              variant="contained"
              className="mx-2"
              style={{
                border: "none",
                color: "white",
                padding: "20px",
                textAlign: "center",
                TextDecoder: "none",
                display: "inline-block",
                fontSize: "12px",
                background: "#ee5253",
                borderRadius: "10px",
              }}
            >
              ADD
            </button>
          </div>

          <Todo />
        </section>
      </div>
    </div>
  );
};

export default Home;
