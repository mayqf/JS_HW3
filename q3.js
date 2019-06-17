//Argument: 'Hello, it is a good day, I eat good bananas, I do not like the word good' remove the word 'good' from the string

var str = 'Hello, it is a good day, I eat good bananas, I do not like the word good';

const strManipulation = (a) => {
    var regex = /good/gi;
    return a.replace(regex, '');
};
console.log(strManipulation(str))

// defined a function with string-replace method.