import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/loading";
import { Link, useParams } from "react-router-dom";
import CardDetails from "../card/cardDetails";

function CountryDetail() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const resp = await axios
          .get(`http://localhost:3000/country/${name}`)
          .then((el) => el.data);
        setData(resp);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Link to="/">
        <button type="button" className="btn btn-outline-primary">
          Back
        </button>
      </Link>

      <div className="card_container">
        {isLoading ? (
          <Loading type={"cylon"} color={"black"} />
        ) : (
          <CardDetails countryDetails={data} key={data.name} />
        )}
      </div>
    </>
  );
}

export default CountryDetail;
