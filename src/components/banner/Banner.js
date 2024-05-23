import './Banner.css'
import dogo1 from '../../images/dogo1.jpg'
import dogo2 from '../../images/doggo2.png'
import dogo3 from '../../images/doggo3.png'
import background from '../../images/dogos.jpg'
import PuppyComment from '../puppy-comment/PuppyComment.js'
import dogy from '../../images/dogo1.jpg'
function Banner() {



    return (
        <div className='Bigwrapper'>
        <div className='banner-wrapper'>
            <div className='banner-section-column'>
            <PuppyComment 
            title={"Life good"}
            paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
            name={"Jake"}
            image={dogy}
            isReverseRow={false}
            />
            <PuppyComment 
            title={"Life good"}
            paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
            name={"Jake"}
            image={dogy}
            isReverseRow={true}
            />
            </div>

            <div className='banner-section-title'>
                <h1>Fluffs That Found a Home Through PawPaw</h1>
            </div>

            <div className='banner-section-row'>
            <PuppyComment 
            title={"Life good"}
            paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
            name={"Jake"}
            image={dogy}
            isReverseColumn={true}
            />
            <div className='happy-customer'>Over 300 happy customers ... and their hoomans</div>
            </div>
            


            

        </div>
        </div>
    );
}
export default Banner