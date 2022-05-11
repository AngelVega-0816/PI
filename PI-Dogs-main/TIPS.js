function SumArray ( arr, n ){

    // for(let i = 0; i < arr.lengt - 1; i++){
    //     for(let j = i + 1; j < arr.lengt; j++){

    //         if(arr[i] + arr[j] === n) return true

    //     }
    // }

    //0(n2)


    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        const sum = arr[start] + arr[end];
        if (sum === n) return true;
        else if (sum > n) end--;
        else start++;
    }
    return false;
}

console.log([2, 4, 5, 9], 9)
console.log([2, 4, 5, 9], 12)
console.log([2, 5, 9], 4)

console.log([4, 2, 5, 9], 7)
console.log([5, 2, 9, 4], 12)