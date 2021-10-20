import React, {useState, useEffect} from "react";


const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries));
    }

    const onCountryChange = function(country){
        setSelectedCountry(country);
    }

return (
    // <CountrySelector countries={countries} onCountrySelected={onCountryChange} />
    <p>hi</p>
    )

}

export default CountryContainer;