function  dowbleElem(arr) {
    if(Array.isArray(arr)) {
        for(let i of arr) {
            if(typeof i !== 'number'){
                return 'в массиве присутсвуют не только числа';
            }
        }
        let newArr = arr.map(function (elem) {
        return elem * 2;
    });
        return newArr;
    } else {
        return 'передан не массив';
    };


    
    
};

dowbleElem(['g']);
console.log(dowbleElem(['j']));