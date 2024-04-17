import { Link } from "react-router-dom"
import './card.css'

const Card = ({dataCountry}) => {

    return (
            <div className="card w-25 m-3 p-2" >
                    <img src={dataCountry.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{dataCountry.name}</h5>
                    <p className="card-text">Population: {dataCountry.population}</p>
                    <p className="card-text">Region: {dataCountry.region}</p>
                    <p className="card-text">Capital: {dataCountry.capital}</p>
                    <Link to={'country-detail/' + dataCountry.name}><button type="button" className="btn btn-outline-primary">more detail</button></Link>
                </div>
            </div>
    )
}

export default Card