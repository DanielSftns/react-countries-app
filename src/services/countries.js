const API_URL = 'https://restcountries.com/v3.1/'

const getCountries = async ()=> {
    const data = await fetch(API_URL + 'all')
    const countries = await data.json()
    return countries
}

const filterByRegion = async (region)=> {
    const data = await fetch(API_URL + `region/${region}`)
    const countries = await data.json()
    return countries
}

export {
    getCountries,
    filterByRegion
}