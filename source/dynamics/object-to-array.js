'use strict';
export function objectToArray(object) {
    let amount = object.length;
    let array =[];
    for (let i = 0; i<amount; i++){
        array.push(object[i]);
    }
    return array;
}