import "./cardDetails.css";

const CardDetails = ({ countryDetails }) => {
  return (
    <div className="card mb-3">
      <img
        src={countryDetails.img}
        alt="..."
        className="img-fluid rounded-start"
      />
      <div className="content">
        <div className="card-body">
          <h2 className="card-title">{countryDetails.name}</h2>
          <div className="container-sec">
            <div className="sec-1">
              <p className="card-text" key={countryDetails.region}>
                Región: {countryDetails.region}
              </p>
              <p className="card-text" key={countryDetails.capital}>
                Capital: {countryDetails.capital}
              </p>
              <p className="card-text" key={countryDetails.area}>
                Área: {countryDetails.area} km²
              </p>
              <p className="card-text" key={countryDetails.languages}>
                languages: {countryDetails.languages}{" "}
              </p>
              <p className="card-text" key={countryDetails.subregion}>
                subregion: {countryDetails.subregion}{" "}
              </p>
            </div>
            <div className="sec-2">
              <p className="card-text" key={countryDetails.currencies}>
                currencies: {countryDetails.currencies}{" "}
              </p>
              <div>
              <p className="card-text" key={countryDetails.subregion}>
              Border Countries: {countryDetails.borders?.map((el, index) => {
                  return (
                    <span key={index} className="badge text-bg-secondary">
                      {el}
                    </span>
                  );
                })}{" "}
              </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
