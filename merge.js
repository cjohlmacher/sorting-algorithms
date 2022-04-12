function merge(arr1, arr2) {
    const mergedArray = [];
    let i=0;
    let j=0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++
        }
    };
    return mergedArray.concat(arr1.slice(i,),arr2.slice(j,));
}

function mergeSort(arr) {
    if (arr.length === 0) {
        return arr;
    };
    let sortedArrays = [];
    const splitArray = (subArray) => {
        if (subArray.length <= 1) {
            sortedArrays.push(subArray);
        } else {
            let midIndex = Math.floor(subArray.length/2);
            splitArray(subArray.slice(0,midIndex));
            splitArray(subArray.slice(midIndex,));
        };
    };
    splitArray(arr);
    while (sortedArrays.length > 1) {
        let newSortedArrays = [];
        let i = 0;
        let j = 1;
        while (j < sortedArrays.length) {
            newSortedArrays.push(merge(sortedArrays[i],sortedArrays[j]));
            i += 2;
            j += 2;
        };
        if (i < sortedArrays.length) {
            newSortedArrays.push(sortedArrays[i]);
        };
        sortedArrays = [...newSortedArrays];
    }
    return sortedArrays[0];
}

module.exports = { merge, mergeSort};