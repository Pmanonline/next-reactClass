import React from "react";
import { ReadMore } from "./buttons";
import DataList from "../data.json";

const Card = () => {
  return (
    <div className="container">
      <div className="row">
        {DataList.CardDetails.map((OneCard) => {
          return (
            <div className="col-6" key={OneCard.id}>
              <SingleCard {...OneCard} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SingleCard = (props) => {
  const { image, paragragh, title } = props;
  return (
    <>
      <div className="card card1 me-5">
        <div className="row">
          <div className="col-7">
            <img src={""} className="card-img" alt="" />
          </div>
          <div className="col-5">
            <p className="cardp text-start p-1">{paragragh}</p>

            <ReadMore />
          </div>
        </div>
        <h3 className="cardh3 text-center">{title}</h3>
      </div>
    </>
  );
};

export default Card;
