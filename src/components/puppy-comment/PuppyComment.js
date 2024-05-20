
import './PuppyComment.css'
import dogy from '../../images/dogo1.jpg'

function PuppyComment(){



    return(

        <div className='puppy-comment-wrapper'>
           <div className='puppy-comment-text-wrapper'>
           <span className='puppy-comment-title'>
                Life good
            </span>
            <span className='puppy-comment-paragraph'>
                Lots of food, lots of walkses and lots of food.
                After i finish paw school I might get good job to repay my hoomans.
                Then I give them treats...
                Until then i just cute 
            </span>
            <span className='puppy-comment-name'>Jake
            </span>
           </div>
           <img src={dogy} className='puppy-comment-image'/>
        </div>
    );
}

export default PuppyComment