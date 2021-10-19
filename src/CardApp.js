import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const API_BASE_URL = "http://deckofcardsapi.com/api/deck/";
const DRAW_CARD = `/draw/?count=1`;

function CardApp() {
    const [deckId, setDeckId] = useState(null);
    const [card, setCard] = useState(null);
    console.log("CardApp", {deckId, card})

    // useEffect for getting the deck for the first time
    useEffect(function getInitialDeckId(){
        async function getDeckId(){
            const response = await axios.get(`${API_BASE_URL}new`)
            setDeckId(response.data.deck_id)
        }
        getDeckId()
    }, []);

    async function handleClick () {
        const response = await axios.get(`${API_BASE_URL}${deckId}${DRAW_CARD}`);
        setCard(response.data.cards[0]);
    }
    if (deckId === null){
        return <div>Loading...</div>
    }

    return (
        <div>
            <button onClick={handleClick}>Get a New Card</button>
            {card && <Card card={card}/>}
        </div>
    )
}

export default CardApp;