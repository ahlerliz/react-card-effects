
function Card({card}){
    return (
        <div key={card.code}>
            <img src={card.image}/>
        </div>
    )
}

export default Card;