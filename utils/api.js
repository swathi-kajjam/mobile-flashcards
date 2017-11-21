import { AsyncStorage } from 'react-native';
import { find } from 'lodash';

const MOBILE_FLASHCARDS_KEY = 'UdactiyCards:MobileFlashCards';

/**
 * @description - Gets all decks information
 * @returns{object} - returns all of the decks along with their titles, questions, and answers.
 */
export const getDecks = () => {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
        .then(JSON.parse);
}

/**
 * @description - takes in a single title argument and add it to the decks.
 */
export const saveDeckTitle = (title) => {
     AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify({
        [title]:{
            title: title,
            questions:[]
        }
    }))
}

/**
 * @description - Get specific deck information.
 * @returns{object} - returns the deck associated with given title.
 */
export const getDeck = (title) => {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
        .then(results => {
           const data = JSON.parse(results)
           return find(data,{'title': title})
        })
}

/**
 * @description - Add's the card to the list of questions for the deck with the associated title.
 */
export const addCardToDeck = (title, card) => {
    AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
        .then(results => {
            const data = JSON.parse(results);
            const deck = find(data, {'title': title})
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