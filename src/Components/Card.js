// import data from "../data";
import { useState } from "react";
function Card({id,name,info,image,price,getId}){
    function btnHandler(){
        console.log(id);
        getId(id);
    }
    const [display,alterDisplay] = useState(true);
    const desc = `${info.substring(0,200)}...`;
    function readMoreHandler(){
        alterDisplay(!display)
    }
    return(
        <div className="flex flex-col border-2 border-black p-4 justify-between w-[420px]  rounded-md">
        <div>
            <img src={image} alt="Error" className="h-[400px] w-[400px] rounded-md m-auto"/>
            <div className="font-bold text-xl text-blue-600">{name}</div>
            <div className="font-bold text-green-500">&#8377;{price}</div>
            <div className="text-justify">{display?desc:info}<span onClick={readMoreHandler} className="text-blue-400 cursor-pointer" >{display?`Read More`:` Read Less`}</span></div>
            </div>
        <button onClick={btnHandler} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-10">Not Interested</button>
        </div>
    );
}
export default Card;