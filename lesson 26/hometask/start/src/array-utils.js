function ascending(arr) {
    const newArr = arr.slice(0);
    newArr.sort();
    console.log(arr, newArr);
}


function descending(arr) {
    const newArr = arr.slice(0);
    newArr.sort((a, b) => b - a);
    console.log(arr, newArr);
    
}
ascending([4,1,0,6]);
descending([4,1,0,6]);