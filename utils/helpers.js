import { find } from 'lodash';

export function formatData(data){
   return Object.keys(data).map(key => {
        return {
            title: data[key].title,
            questions: data[key].questions || []
        }
    })
}

export function getDeck(data, title){
    return find(data, {'title': title})
}