import React,{useState} from "react";
import data from "./data";
import Card from "./Components/Card";


const App = () => {
  const [newData,changeData] = useState(data);
  function getId(id){
    changeData(newData.filter((e)=>e.id!==id))
  }
  function RefreshHandler(){
    changeData(data);
  }
  if(newData.length===0){
    return(
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
          <div className="text-5xl mb-5 font-semibold">No tours left</div>
          <button onClick={RefreshHandler} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Refresh</button>
        </div>
    )
  }
  return (
    
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <div className="text-5xl text-blue-500 mt-10 mb-10 font-medium text-center">Plan With Love</div>
      <div className="flex gap-10 flex-wrap m-10">
      {
        newData.map((e) => {
          return <Card key={e.id} {...e} getId={getId}></Card>
        })
      }
      </div>
    </div>
  )

};

export default App;
