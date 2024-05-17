import "./Doggycard.css"


function Doggycard({
    doggyImage,
    doggyName,
    doggyModel,
    doggyFR,
    doggyDW,
    doggyFuel
}){
    return(



        <>
            <div className="doggycard">
                <div className="doggycard-header">
                <img src={doggyImage}/>
                
                 </div>
                 <div className="doggycard-name">{doggyName}</div>
                 
                 <div className="doggycard-model">{doggyModel}</div>
                 
                 <div className="doggycard-details">First registraation {doggyFR}</div>
                 
                 <div className="doggycard-details">Distance walked {doggyDW}</div>
                 
                 <div className="doggycard-details">fuel type {doggyFuel}</div>
            </div>
            
        </>
    );
}

export default Doggycard