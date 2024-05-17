import "./doggylist.css"
import Doggycard from "../doggycard/Doggycard";
import doggyImage from "../../images/doggy11.png";
import doggyImage2 from "../../images/doggy2 1 (1).png"

function Doggylist(){
    return(
        <div className="doggylist">
        <Doggycard 
       doggyImage={doggyImage} 
       doggyName={"Coco"} 
       doggyModel={"Seat Toledo 1.9 Tdi"}
       doggyFR={"03.05.2002"}
       doggyDW={"250000km"}
       doggyFuel={"diesel"}
       />
        <Doggycard 
       doggyImage={doggyImage2} 
       doggyName={"Lucy"} 
       doggyModel={"Fiat Seicento 0.9"}
       doggyFR={"10.07.2000"}
       doggyDW={"80000km"}
       doggyFuel={"Petrol"}
       />
        <Doggycard 
       doggyImage={doggyImage} 
       doggyName={"Rocky"} 
       doggyModel={"Ford Focus MK2 1.6"}
       doggyFR={"01.09.2007"}
       doggyDW={"300000km"}
       doggyFuel={"Sausage"}
       />
        <Doggycard 
       doggyImage={doggyImage} 
       doggyName={"Jonny"} 
       doggyModel={"BMW 320d M3"}
       doggyFR={"18.02.2006"}
       doggyDW={"150000km"}
       doggyFuel={"diesel"}
       />

        </div>



    );
}
export default Doggylist