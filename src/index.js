import _ from 'lodash'; // Используем установленную зависимость
/**
* Функция, которая переворачивает строку и делает заглавной первую букву
* @param {string} str - Входная строка
* @returns {string} Обработанная строка
*/
export function reverseAndCapitalize(str) {
if (!str || typeof str !== 'string') return '';
// Используем lodash для капитализации
const reversed = str.split('').reverse().join('');
return _.capitalize(reversed);
}
/**
* Функция, которая находит уникальные элементы в массиве
* @param {Array} arr - Входной массив
* @returns {Array} Массив уникальных элементов
*/
export function uniqueElements(arr) {
if (!Array.isArray(arr)) return [];
return _.uniq(arr);
}
// Для обратной совместимости с CommonJS
// module.exports = { reverseAndCapitalize, uniqueElements };
