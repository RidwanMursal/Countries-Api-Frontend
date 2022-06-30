import axios from "axios"
import Header from "../../components/Header/Header"
import { BASE_URL } from "../../constants"
import {BsArrowLeft} from "react-icons/bs"
import { specialCountries } from "../../constants"
import Link from "next/link"

const Details = ({data}) => {
  const {flags, name, region, subregion, population, capital, languages, currencies, tld, borders} = data[0]
  //console.log("this is the data", data[0])
  if (specialCountries.includes(data[0].name.common)) {
      return (
          <div className="flex h-screen items-center justify-center">
              <h1 className="text-3xl">Coming Soon...</h1>
          </div>
      )
   }
    return (
    <div className="bg-very-dark-blue text-white ">
        <Header />

        <Link href="/">
            <button className="flex gap-2 items-center px-8 py-1.5 5 ml-5 mt-10 mb-12 hover:opacity-75 bg-dark-blue rounded lg:ml-[4rem]">
                <BsArrowLeft size={22}/> 
                <p>Back</p>
            </button>
        </Link>

        <div className="flex flex-col gap-10 px-5 pb-5 md:flex-row md:gap[2rem] lg:px-[4rem]  lg:gap-[7rem] ">
            <img src={flags.svg} alt="" className="w-full h-[200px] object-cover md:h-[400px] w-[500px]" />

            <div className="flex flex-col justify-center md:w-[80%]">
                <h1 className="text-3xl mb-[3rem]">{name.common}</h1>

                <div className="md:flex md:justify-between ">
                    

                    <div className="flex flex-col gap-3">
                        <p><span className="font-semibold">Native Name: </span>{Object.values(name.nativeName)[0].official}</p>
                        <p><span className="font-semibold">Population: </span>{population}</p>
                        <p><span className="font-semibold">Region: </span>{region}</p>
                        <p><span className="font-semibold">Sub Region: </span>{subregion}</p>
                        <p><span className="font-semibold">Capital: </span>{"capital[0]"}</p>
                    </div>

                    <div className="mt-[2rem] flex flex-col gap-3 md:mt-0 lg:pr-[4rem]">
                        <p><span className="font-semibold">Top Level Domain: </span>{tld["0"]}</p>
                        <p><span className="font-semibold">Currencies: </span>{Object.values(currencies).map((currency, i) => i===0? <span key={currency.name}>{currency.name}</span>:<span key={currency.name}>{", " +currency.name}</span>)}</p>
                        <p><span className="font-semibold">Languages: </span>{Object.values(languages).map((language, i) => i===0? <span key={language}>{language}</span>:<span key={language}>{", " +language}</span>)}</p>
                    </div>

                </div>

                {/* <div className="flex flex-col gap-4">
                    <h1 className="lg:mt-[1rem]">Border Countries</h1>
                    <div className="flex gap-2">
                        
                        Comming Soon...
                    </div>
                </div> */}

            </div>

        </div>

        
    </div>
  )
}

export default Details

export const getStaticPaths = async () => {
    let countries; 
    await axios.get(`${BASE_URL}/all`)
    .then((response) => countries = response.data)
    .catch((error) => console.log(error))

    const paths = countries.map((country) => ({
        params: {
            name: country.name.common
        }
    }))

    return {
        paths, 
        fallback: "blocking"
    }
}


export const getStaticProps = async ({params: {name}}) =>  {
    let data; 
    await axios.get(`${BASE_URL}/name/${name}`)
    .then((response) => data = response.data)
    .catch((error) => console.log(error))

    return {props: {data}}
}

