function solution (input) {
    var obj = {};
    for (let i = 0; i < input.length; i++) {
        if (obj.hasOwnProperty(input[i])) {
            obj[input[i]] += 1;
        } else {
            obj[input[i]] = 1;
        }
    }
    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]] === 1) {
            return input[i];
        }
    }
}
