import {IoSearchSharp} from "react-icons/io5"

const SearchBar = ({setSearchTerm, searchTerm }) => {
  //const [searchTerm, setSearchTerm] = useState("")
  return (
    // <div>hello</div>
    <div className="flex items-center gap-5 py-2.5 pl-8 w-full  my-5  bg-dark-blue rounded md:w-[45%] h-fit lg:w-[25rem]">
        
      <IoSearchSharp size={22} /> 
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}placeholder="Search for a country..." className="bg-dark-blue placeholder:text-white focus:outline-none w-full" />

    </div>
  )
}

export default SearchBar