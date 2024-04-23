"use strict";
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const arr = [1, 5, 7, 9];
const minEl = (array) => Math.min(...array);
console.log(minEl(arr));

function createCounter(el) {
  return {
    value: el,
    increment() {
      return ++this.value;
    },
    decrement() {
      return --this.value;
    },
  };
}
console.log(createCounter(10).increment());
console.log(createCounter(10).decrement());

const elements = [];
function findElementByClass(el, str) {
  if (el.hasChildNodes()) {
    for (let iterator of el.children) {
      if (iterator.classList.contains(str)) {
        elements.push(iterator);
      }
      findElementByClass(iterator, str);
    }
  }
  return elements[0];
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
