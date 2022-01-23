import React, { useState } from 'react';
import CountriesList from './CountriesList';
import Navbar from './Navbar';
import { Icon } from '@iconify/react';

const HomePage = () => {
    const [region, setRegion] = useState()
    const [search, setSearch] = useState('')
    
    const handleSelectRegion = (e)=> {
        const region = e.target.value
        setSearch('')
        setRegion(region)
    }

    const hanldeSearch = (e)=>{
        const keyWords = e.target.value
        setSearch(keyWords)
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 mb-4 mb-md-0 col-md-4">
                        <div className="searbar">
                            <Icon icon="eva:search-fill" />
                            <input
                                type="text"
                                value={search}
                                onChange={hanldeSearch}
                                className="form-control"
                                placeholder="Search for a country..."
                                aria-label="Username"
                            />
                        </div>
                    </div>

                    <div className="col-6 col-md-2 offset-md-6">
                        <select onChange={handleSelectRegion} className="form-select" >
                            <option value=''>Filter by Region</option>
                            <option value="africa">Africa</option>
                            <option value="americas">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europa</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>
                </div>

                <CountriesList region={region} search={search} />
            </div>
        </>
    );
}
 
export default HomePage;