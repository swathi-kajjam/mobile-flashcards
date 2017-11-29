import { find } from 'lodash';
import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY='MobileFlashCards:Notifications';

/**
 * @description - Formats data returned from AsyncStorage database
 * @returns{object} - formats and returns data in a way that is needed for displaying decks in DeckListView
 */
export function formatData(data){
   return Object.keys(data).map(key => {
        return {
            title: data[key].title,
            questions: data[key].questions || []
        }
    })
}

/**
 * @description - gets specific deck information
 * @returns{object} - returns deck from list of decks
 */
export function getDeck(data, title){
    return find(data, {'title': title})
}

/**
 * @description - clears the notification
 */
export function clearNotification(){
    AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotifications)
}

/**
 * @description - Notification template
 * @returns{object} - returns the notification template
 */
const createNotification = () => {
    return {
        title: 'complete the quiz',
        body:"👋 don't forget to complete the quiz for today!",
        ios:{
            sound:true
        },
        android:{
            sound: true,
            vibrate:true,
            priority:'high',
            sticky: false
        }
    }
}

/**
 * @description - Creates Notification
 */
export function setLocalNotification(){
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {

                            Notifications.cancelAllScheduledNotificationsAsync()

                            //Send Notification at 6:00pm
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(18)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}