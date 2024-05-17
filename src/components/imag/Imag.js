import lawyer from "../../images/lawyer1.png"
import treats from "../../images/treats1.png"
import "./imag.css"

function Imag(){
    return(
        <div className="images">
        <img src={lawyer} alt="prawnik"></img>
        <img src={treats} alt="przysmak"></img>
        </div>

    );
}
export default Imag;