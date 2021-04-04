export function ascending(arr) {
    const newArr = arr.slice(0);
    newArr.sort();
    console.log(arr, newArr);
}


export function descending(arr) {
    const newArr = arr.slice(0);
    newArr.sort((a, b) => b - a);
    console.log(arr, newArr);
    
}
