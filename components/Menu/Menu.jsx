import { useState } from "react"
import {IoIosArrowDown, IoIosArrowBack} from "react-icons/io"

const REGIONS = [
    "Africa", 
    "Americas", 
    "Asia", 
    "Europe", 
    "Oceania", 
    "All"
]

const Menu = ({setRegion, region}) => {
  const [menuClosed, setMenuClosed] = useState(true)
  
  return (
    <div className="">
        <div className="flex justify-between items-center w-[60%] mb-1.5 px-5 py-5 bg-dark-blue rounded lg:w-48 mt-4">
            <p>{region === "All"? "Filter By Region": region}</p>
            <IoIosArrowDown className={menuClosed? "cursor-pointer":"hidden"} onClick={() => setMenuClosed(false)}/>
            <IoIosArrowBack className={menuClosed? "hidden":"cursor-pointer"} onClick={() => setMenuClosed(true)}/> 
        </div>

        <div className={menuClosed? "hidden":"flex flex-col gap-1 w-[60%] px-5 py-3 bg-dark-blue rounded lg:w-48"}>
            {REGIONS.map(region => <p key={region} className={"cursor-pointer"} onClick={() => setRegion(region)}>{region}</p>)}
        </div>

    </div>
  )
}

export default Menu