import React from "react";
import cardimage1 from "../images/saves.jpg";
import cardimage2 from "../images/sendmoney.jpg";

function Hero() {
  return (
    <div className="container-fluid">
      <>
        <div className="d-lg-none d-md-none d-sm-block d-xs-block">
          <img
            className="img-fluid"
            width="1340"
            height="400"
            src={cardimage2}
            class="card-img-top w-100"
            alt="..."
          />
        </div>
        <div className="d-none d-lg-block d-md-block">
          <img
            className="img-fluid"
            width="1340"
            height="400"
            src={cardimage1}
            class="card-img-top w-100"
            alt="..."
          />
        </div>
      </>
    </div>
  );
}

export default Hero;
