import React from "react";
import './CountryDetails.css'

const CountryDetail = ({selectedCountry}) => {
    return(
        <div className="country-detail">
            <h2>Country: {selectedCountry.name.common}</h2>
            <h3>Continent: {selectedCountry.continents}</h3>
            <h3>Flag: </h3><img src={selectedCountry.flags.png}/>
            <h3>Coat of Arms: </h3><img src={selectedCountry.coatOfArms.png}/>
        </div>
    )
}

export default CountryDetail;