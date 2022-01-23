import React, { useEffect, useState } from 'react';
import { getCountries, filterByRegion } from '../services/countries';
import Country from './Country';

const CountriesList = ({region, search}) => {
    const [countries, setCountries] = useState()
    const [allCountries, setAllCountries] = useState()

    useEffect(()=>{
        const fetchGetData = async ()=> {
            const countries = await getCountries()
            setCountries(countries)
            setAllCountries(countries)
        }

        fetchGetData()
    }, [])

    useEffect(()=>{
        const fetchGetData = async ()=> {
            if(!region) return
            const countries = await filterByRegion(region)
            setCountries(countries)
            setAllCountries(countries)
        }

        fetchGetData()
    }, [region])

    useEffect(()=>{
        if(!search) return

        const filtrado = allCountries.filter(country => {
            const name = country.name.common || country.name
            
            return name.toLowerCase().includes(search.toLowerCase())
        })

        setCountries(filtrado)

    }, [search])

    return (
        <div className="container">
            <div className="row">
                {
                    countries && countries.map((country, index) => {
                        return (
                            <div key={index} className="col-sm-6 mb-5 col-md-3">
                                <Country
                                    flag={country.flags.png}
                                    name={country.name.common || country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default CountriesList;