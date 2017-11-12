export function formatData(results){
    const data = JSON.parse(results);
    const obj = Object.keys(data).map(key => {
        return {title: data[key].title, cardCount: data[key].questions? o.questions.count : 0}
    })
    console.log(obj);
    return obj;
}