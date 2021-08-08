const strings = ['a', 'b', 'c', 'd'];

//push
//strings.push('g');
//console.log(strings);

//pop
strings.pop();
console.log(strings);

//add at first position
strings.unshift('x');
console.log(strings);

//add string gaurav at index 2
//strings.splice(2, 0, 'gaurav');
//console.log(strings);

//add string gaurav at index 2 and at over 1 element
strings.splice(2, 1, 'gaurav');
console.log(strings);