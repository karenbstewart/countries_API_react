import React, {useState, useEffect} from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetail from "../components/CountryDetail";
import Country from "../models/Country";


const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    // this.population = [];

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        // fetch('https://restcountries.eu/rest/v2/all')
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries));
    }

    const onCountryChange = function(country){
        setSelectedCountry(country);
    }

return (
    <>
        <CountrySelector countries={countries} onCountrySelected={onCountryChange} />
        {selectedCountry ? <CountryDetail selectedCountry = {selectedCountry}/> :null}
        
    </>
    )
}

// CountryContainer.prototype.addPopulationToList = function(country){
//     this.population.push(country.population);
// }


export default CountryContainer;