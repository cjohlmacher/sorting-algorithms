function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flipped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j+1]) {
            } else {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flipped = true;
            }
        }
        if (!flipped) {
            return arr;
        };
    };
    return arr;
};

module.exports = bubbleSort;