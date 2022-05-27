console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum (a: number){
//     return function(b: number){
//             return a + b
//         }
// }
// console.log(sum(3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter(){
//     let count = 1
//     return function (){
//         console.log(count++)
//     }
// }
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter(num: number){
//     let count = num
//     return {
//         increase: function(){
//             console.log(++count)
//         },
//         decrease: function(){
//             console.log(--count)
//         },
//         reset: function (){
//             console.log(count = 0)
//         },
//         set: function (arg: number){
//             console.log(count = arg)
//         }
//     }
// }
//
// let counter = makeCounter(0)
// counter.decrease();
// counter.decrease();
// counter.increase();
// counter.reset();
// counter.set(5);
// counter.increase();

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(num: number){
    if(num <= 0) return 0;
    if(num === 1) return (n:number) => n;

    let _arguments: number[] = [];
    function helper(arg: number[]){
        _arguments = [..._arguments, ...arg]
        if(_arguments.length >= num){
            _arguments.length = num
            _arguments.reduce((acc, number)=>acc + number)
        } else {
            return helper
        }
    }
    return helper
}

// function superSum(num: number) {
//     if(num <= 0) return 0;
//     if(num === 1) return (n:number) => n;
//
//     let _arguments: number[] = [];
//
//     function helper(...arg: number[]) {
//         _arguments = [..._arguments, ...arg];
//         if(_arguments.length >= num){
//             _arguments.length = num;
//             return _arguments.reduce((acc, number)=> acc + number)
//         } else {
//             return helper
//         }
//
//     }
//     return helper
// }

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};

