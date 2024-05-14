/**
 * Друкує символи рядка input у зворотному порядку, починаючи з індексу end і закінчуючи індексом start включно.
 *
 * @param {string} input - Вхідний рядок.
 * @param {number} start - Початковий індекс.
 * @param {number} end - Кінцевий індекс.
 */
function printBackwards(input, start, end) {
  // Перевірка на коректність індексів
  if (start < 0 || end >= input.length || start > end) {
    console.error("Неправильні індекси.");
    return;
  }

  // Виведення символів рядка input у зворотному порядку
  for (let i = end; i >= start; i--) {
    console.log(input[i]);
  }
}

// Приклад використання функції
printBackwards("Hello, World!", 2, 9);
