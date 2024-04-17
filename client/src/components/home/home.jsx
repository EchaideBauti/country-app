import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../home/home.css";
import Card from "../card/card";
import Loading from "../loading/loading";
import Switch from "../modeDark/buttonSwitch";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [region, setRegion] = useState("");
  const [resetFilter, setResetFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const resp = await axios
          .get("http://localhost:3000/country")
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

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value.trim());
  };

  const handleClick = (e) => {
    setRegion(e.target.name);
    setResetFilter(true);
  };

  const handleResetFilter = () => {
    setResetFilter(false);
    setRegion("")
  };
  const filtered = () => {
    if (keyword !== "" && region === "")
      return data.filter((country) =>
        country.name.toLowerCase().includes(keyword.toLowerCase())
      );

    if (keyword === "" && region !== "")
      return data.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );

    if (keyword !== "" && region !== "")
      return data
        .filter((country) =>
          country.name.toLowerCase().includes(keyword.toLowerCase())
        )
        .filter(
          (country) => country.region.toLowerCase() === region.toLowerCase()
        );
    return data;
  };
  const resolvedCountries = filtered();
  console.log(resolvedCountries)
  return (
    <>
      <div className="content-search">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            id="country"
            name="country"
            defaultValue={keyword}
            aria-label="Name of Country"
            placeholder="Search for country..."
            onChange={handleChange}
          />
        </form>
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter by region
            </button>
            {resetFilter & resetFilter ? (
              <button type="button" className="btn btn-danger" onClick={handleResetFilter}>Reset Filter</button>
            ) : (
              false
            )}
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  name="Africa"
                  onClick={handleClick}
                >
                  Africa
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  name="Americas"
                  onClick={handleClick}
                >
                  Americas
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  name="Asia"
                  onClick={handleClick}
                >
                  Asia
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  name="Europe"
                  onClick={handleClick}
                >
                  Europe
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  name="Oceania"
                  onClick={handleClick}
                >
                  Oceania
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card_container">
        {isLoading ? (
          <Loading type={"cylon"} color={"black"} />
        ) : (
          resolvedCountries &&
          resolvedCountries.map((el, index) => (
            <Card key={index} dataCountry={el} />
          ))
        )}
      </div>
    </>
  );
}

export default Home;
