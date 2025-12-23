// Mise en place des étoiles en fonction des notes des artisans
const RatingStars = ({rating}) =>{
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const stars = [];
    for(let i=1;i<=5;i++){
    if(i<=full) stars.push('★');
    else if(i===full+1 && half) stars.push('☆');
    else stars.push('☆');
    }

    return (
        <div className="rating card-deco">
            {stars.join(' ')}
        </div>
    )
};

export default RatingStars;