import logo from '../../images/Logo.png'
import HeaderItem from "../header-item/HeaderItem"
import HeaderItem2 from '../../header-item2/HeaderItem2';
import "./header.css"

function Header(){
    return (
        <div className='header'>
        <img src={logo} alt='hihi'></img>
        <div className='homecontainer'>


<HeaderItem
item='Home'
/>
<HeaderItem
item='Fluff list'
/>
<HeaderItem2 
item='Contact us'
/>


        </div>
       </div>



    );
}
export default Header;