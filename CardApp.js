import { useState } from "react";
import axios from "axios";
import Card from "./Card";


const API_BASE_URL = "http://deckofcardsapi.com/api/deck/";
const DRAW_CARD = `/draw/?count=1`;

function CardApp() {
    const [deckId, setDeckId] = useState(null);
    const [card, setCard] = useState(null);

    // useEffect for getting the deck for the first time

    // useEffect for getting one card from the deck?

    async function handleClick () {
        let response = await axios.get(`${API_BASE_URL}${deckId}${DRAW_CARD}`);
        setCard(response.data.cards[0]);
    }

    return (
        <div>
            <button onClick={handleClick}>Get a New Card</button>
            <Card card={card}/>
        </div>
    )
}