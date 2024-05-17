import logo from '../../images/Logo.png'
import HeaderItem from "../header-item/HeaderItem"
import "./header.css"

function Header(){
    return (
        <div className='header'>
        <img src={logo} alt='hihi'></img>
        <div className='homecontainer'>


<HeaderItem/>
<HeaderItem/>

        </div>
       </div>



    );
}
export default Header;