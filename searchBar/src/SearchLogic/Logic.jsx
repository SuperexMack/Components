import { useState  , useEffect} from "react";
import { Heading } from "../Heading/Heading";

export function Logic(){

    const [userData , setUserData] = useState([])
    const [searchitem , setSearchItem] = useState("")

   useEffect(()=>{
    const data = {
    food : "Indian",
    friend : "Raju",
    teacher : "Harkirat"
   }

   setUserData(Object.values(data))
   } , [])



const filterData = userData.filter((item)=>
    item.toLowerCase().includes(searchitem.toLowerCase())
)
  
    return(
        <>
        <Heading></Heading>
        <div className="h-12 flex justify-center items-center relative top-[100px] space-x-9">
        <input onChange={(e)=>setSearchItem(e.target.value)} className="p-6 border border-black cursor-pointer" type="search"></input>
        {/* <button className="p-3 bg-red-500 rounded w-[100px] font-medium text-white">Search</button> */}
        </div>

        <div className="flex flex-col space-y-7 justify-center  items-center relative top-[200px]">
            {filterData.length> 0?(
               filterData.map((ele,index)=>(
                <p key={index} className="text-[30px]">
                    {ele}
                </p>
               ))
            ) : (
              <p>No item founded</p>
            )}

        </div>
        </>
    )
}