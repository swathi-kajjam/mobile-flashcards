export function formatData(results){
    const data = JSON.parse(results);
    return Object.keys(data).map(key => {
        return data[key];
    })
}