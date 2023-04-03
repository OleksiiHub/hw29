function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        sum += i;
    }
    let avg = sum / arr.length;
    console.log(`The average is: ${avg}`);
}
let numbers = [1, 2, 3, 4, 5];
calculateAverage(numbers);
