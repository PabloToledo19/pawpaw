
import './PuppyComment.css'
import dogy from '../../images/dogo1.jpg'

function PuppyComment({
    title,
    paragraph,
    name,
    image,
    isReverseRow,
    isReverseColumn
}){
    var direction;

    if(isReverseRow!==undefined){
        direction= isReverseRow ? 'row-reverse' : 'row';
    }

    if(isReverseColumn!==undefined){
        direction= isReverseColumn ? 'column-reverse' : 'column';
    }

    return(

        <div className='puppy-comment-wrapper' style={{flexDirection:direction}}>
           <div className='puppy-comment-text-wrapper'>
           <span className='puppy-comment-title'>
                {title}
            </span>
            <span className='puppy-comment-paragraph'>
                {paragraph}
            </span>
            <span className='puppy-comment-name'>{name}
            </span>
           </div>
           <img src={image} className='puppy-comment-image'/>
        </div>
    );
}

export default PuppyComment