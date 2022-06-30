import Header from "../components/Header/Header";
import Countries from "../components/Countries/Countries";
import SearchBar from "../components/SearchBar/SearchBar";
import Menu from "../components/Menu/Menu";

import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [region, setRegion] = useState("All")
  console.log("this is the region", region)
  console.log("this is the search term", searchTerm)
  return (
    <div className="bg-very-dark-blue text-white text-sm ">

        <Header /> 

        <div className="flex flex-col  lg:flex-row px-4 justify-between lg:px-[4rem]" >
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  /> 
          <Menu setRegion={setRegion} region={region} />   
        </div>
        <Countries searchTerm={searchTerm} region={region}/>  
      
      
    </div>

  )
}
