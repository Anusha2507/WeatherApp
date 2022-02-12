import React, { useState } from "react";

export default function CounterFunction(props) {
  var [value, setvalue] = useState(0);

return (
  <div className="card m-auto mt-5 bg-light text-dark" style={{ width: "18rem" }}>
    <div className="card-body ">
      <h2 className="card-title card-header text-center mb-5">
        Counter Function component
      </h2>
      <a href="#" className="card-link">
        <button
          className="btn btn-success "
          onClick={() => {
            setvalue(value + 1);
          }}
        >
          Increase
        </button>
      </a>
      <span className="h1 text " style={{margin:"0px 10px"}}>
        {value}
      </span>
      <a href="#" className="card-link">
        <button
          className="btn btn-danger"
          onClick={() => {
            setvalue(value - 1);
          }}
        >
          Decrease
        </button>
      </a>
    </div>
  </div>
);
}
