import Country from "./Country"
import { BASE_URL } from "../../constants"
import axios from "axios"
import { useEffect, useState } from "react"

 

const fetchCountries = async (setCountries) => {
    await axios.get(`${BASE_URL}/all`)
    .then((response) => setCountries(response.data))
    .catch((error) => console.log(error))
}

const Countries = ({searchTerm, region}) => {

  const [countries, setCountries] = useState([])
  //console.log("REGION IN COUNTRIES COMPONENT", region)
  //const [regionFlag, setRegionFlag] = useState(false)
  let queryFlag = false 
  useEffect(() => {
    fetchCountries(setCountries)
  }, [])

  // filter countries based on search term and region 
  let queriedCountries = []
  if (searchTerm !== "") {queryFlag = true; queriedCountries = countries.filter( country => country.name.common.toLowerCase().includes(searchTerm))}

  if (region !== "All" && searchTerm !== "") {console.log("in second if") ;queriedCountries = queriedCountries.filter(country => country.region === region)} 
  
  if (region !== "All" && searchTerm === "") {queryFlag = true;queriedCountries = countries.filter(country => country.region === region)}
  console.log("THIS IS THE QUERIED COUNTRIES VARIABLE", queriedCountries )


  //console.log(countries)

  return (
    <div className="grid grid-cols-1 gap-10 px-5 md:grid-cols-2 lg:grid-cols-4 mt-10 lg:px-[4rem]">
        {queryFlag? (
          queriedCountries.map(country => <Country key={country.ccn3} country={country}/> )
        ):(
          countries.map(country => <Country key={country.name.common} country={country}/> )
        )}
        
    </div>
  )
}

export default Countries