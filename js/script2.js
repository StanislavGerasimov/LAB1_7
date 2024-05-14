/**
 * Друкує символи рядка input, починаючи з індексу start і закінчуючи індексом end включно.
 *
 * @param {string} input - Вхідний рядок.
 * @param {number} start - Початковий індекс.
 * @param {number} end - Кінцевий індекс.
 */
function printFromTo(input, start, end) {
  // Перевірка на коректність індексів
  if (start < 0 || end >= input.length || start > end) {
    console.error("Неправильні індекси.");
    return;
  }

  // Виведення символів рядка input в межах вказаних індексів
  for (let i = start; i <= end; i++) {
    console.log(input[i]);
  }
}

// Приклад використання функції
printFromTo("Hello, World!", 2, 10);
