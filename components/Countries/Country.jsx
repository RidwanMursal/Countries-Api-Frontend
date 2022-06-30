import Link from "next/link"


const country = ({country}) => {
  const {population, name, capital, flags, region} = country
  //console.log(population, name, capital, flags)
  //console.log(capital)
  
  return (
    <div className="flex flex-col w-9/10 h-96 bg-dark-blue rounded">
        <Link href={`/details/${name.common}`}> 
          <div className="w-full h-1/2" > 
              <img src={flags.svg} alt={`${name.common} flag`} className="object-cover h-full w-full cursor-pointer rounded "/> 
          </div>
        </Link>

        <div className="flex flex-col gap-3 p-5">
            <h1 className="font-bold mb-2 text-xl">{name.common}</h1>
            <p> <span className="font-semibold">Population: </span>{population}</p>
            <p> <span className="font-semibold">Region: </span>{region}</p>
            <p> <span className="font-semibold">Capital: </span>{capital && capital[0]}</p>

        </div>
        
        
        {/* <Image src={flags.png} layout="fill"/>  */}
        
    </div>
  )
}

export default country