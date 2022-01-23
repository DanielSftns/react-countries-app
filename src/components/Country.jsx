import React from 'react';

const Country = ({flag, name, population, region, capital}) => {
    return (
        <div className="card shadow-sm">
            <img src={`${flag}`} className="card-img-top" alt={name} />
            <div className="card-body">
                <h3 className="country-name mb-4">{name}</h3>

                <p> <b>Population:</b> {population}</p>
                <p> <b>Region:</b> {region}</p>
                <p> <b>Capital:</b> {capital}</p>
            </div>
        </div>
    );
}
 
export default Country;