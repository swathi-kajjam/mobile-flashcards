import { AsyncStorage } from 'react-native';

const MOBILE_FLASHCARDS_KEY = 'UdactiyCards:MobileFlashCards';

export const getDecks = () => {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
}

export const saveDeckTitle = (deck) => {
   return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify(deck))
}

export const getDeck = (id) => {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
        .then(results => {
           const data = JSON.parse(results)
           return data.find(o=>o.id===id)
        })
}

export const addCardToDeck = (title, card) => {
    AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
        .then(results => {
            
            const data = JSON.parse(results);
            const deck = Object.keys(data).find(key => key===title)
            if(deck.hasOwnProperty('questions')){
                deck.questions.push(card)
            }
            else{
                deck.questions = [card];
            }

            data[title] = deck;

            AsyncStorage.setItem(MOBILE_FLASHCARDS_KEY, JSON.stringify(data))
        })
}