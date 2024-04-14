import axios from "axios";

const DECK_API_BASE_URL = "http://localhost:8080/api/v1/decks";

class DeckApiService {
    fetchDecks() {
        return axios.get(DECK_API_BASE_URL);
    }

    fetchDeckById(deckId) {
        return axios.get(DECK_API_BASE_URL + "/" + deckId);
    }

    deleteDeck(deckId) {
        return axios.delete(DECK_API_BASE_URL + "/" + deckId);
    }

    addDeck(deck) {
        return axios.post(DECK_API_BASE_URL, deck);
    }

    editDeck(deck) {
        return axios.put(DECK_API_BASE_URL + "/" + deck.id, deck);
    }
}