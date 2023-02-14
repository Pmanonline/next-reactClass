import CardContent from "../Data/Card.json";

// export const Card = (props) => {
//   const{image, tittle, bodyText, rating, price, link}=props

export const Card = (props) => {
  const { image, tittle, bodyText, rating, price, link } = props;
  return (
    <>
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{tittle}</h5>
          <p class="card-text">{bodyText}</p>
          <p>{rating}</p>
          <p>{price}</p>
          <a href="#" class="btn btn-primary">
            {link}
          </a>
        </div>
      </div>
    </>
  );
};

export const CardMapping = () => {
  return (
    <>
      <div className="row">
        {CardContent.CardDetails.map((Carditem) => {
          return (
            <>
              <div className="col-lg-3 col-md-4 col-sm-12" key={Carditem.id}>
                <Card {...Carditem} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
