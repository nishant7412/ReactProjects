import Restaurantcard from "./Restaurantcard"
import resList from "../utils/mockData"
const  Body =()=>{
    return (
        <div className="body">
         <div className="search">search  </div>
         <div className="res-container">
         
             <Restaurantcard 
             resData={resList} />
              </div>
        </div>
    )
}
export default Body