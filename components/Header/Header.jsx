import {BsMoon} from "react-icons/bs"
const Header = () => {
  return (
    <div className="flex justify-between px-2 py-9 bg-dark-blue text-white lg:py-[1rem] lg:px-[4rem]">
        <h1 className="text-2xl">Where in the world?</h1>
        {/* <div className="flex gap-1 items-center">
            <BsMoon /> 
            <p >Dark Mode</p>
        </div> */}
    </div>
  )
}

export default Header