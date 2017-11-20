import { AsyncStorage } from 'react-native';
import { find } from 'lodash';

const MOBILE_FLASHCARDS_KEY = 'UdactiyCards:MobileFlashCards';

export const getDecks = () => {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
        .then(JSON.parse);
}

export const saveDeckTitle = (title) => {
     AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify({
        [title]:{
            title: title,
            questions:[]
        }
    }))
}

export const getDeck = (title) => {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
        .then(results => {
           const data = JSON.parse(results)
           return find(data,{'title': title})
        })
}

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