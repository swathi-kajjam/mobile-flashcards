# mobile-flashcards

 mobile-flashcards application allows users to study collections of flashcards. App will allow users to create different categories of flashcards
 called "decks" and add flashcards to those decks then take quizzes on those decks. This application is developed using React-Native.


### Views:
    DeckListView -
        Displays the title of each Deck
        Displays the number of cards in each deck

    IndividualDeckView -
        Displays the title of the Deck
        Displays the number of cards in the deck
        Displays an option to start a quiz on this specific deck
        An option to add a new question to the deck

    NewDeckView -
        An option to enter in the title for the new deck
        An option to submit the new deck title

    NewQuestionView -
        An option to enter in the question
        An option to enter in the answer
        An option to submit the new question

    QuizView -
        Displays a card question
        An option to view the answer (flips the card)
        A "Correct" button
        An "Incorrect" button
        The number of cards left in the quiz
        Displays the percentage correct once the quiz is complete


# Quickstart

### Install

    $ npm install
    $ yarn start


#### API
    AsyncStorage will be used as database for this application and below are the methods provided to operate on the data

    getDecks -  return all of the decks along with their titles, questions, and answers.
    getDeck - take in a single deckid argument and return the deck associated with that deckid.
    saveDeckTitle -  take in a single title argument and add it to the decks.
    addCardToDeck - take in two arguments, title and card, and will add the card to the list of questions for the deck
    with the associated title.


#### Data
    AsyncStorage is used as database to store decks and flashcards information

    Below is the shape of AsyncStorage data object
    {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }

