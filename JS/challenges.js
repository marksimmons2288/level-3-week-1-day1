// Data set used for tasks
// -------------------------
/**
 * We have a list of students as an array of objects.
 * Each student has: name, score and city.
 */

const students = [
  { name: "Alicia", score: 80, city: "New York" },
  { name: "Luis", score: 90, city: "New York" },
  { name: "Maria", score: 70, city: "Los Angeles" },
  { name: "Juan", score: 100, city: "Los Angeles" },
  { name: "Sarah", score: 60, city: "New York" }
 
];

// Constant freeze variable
const MIN_PASSING_GRADE = 70;

// -------------------------
// Task 1: Passing students
// -------------------------
/**
 * Currently this function:
 * - Uses a manual for loop
 * - Uses push into a mutable array
 * - Does not use destructuring
 *
 * CHALLENGE:
 * 1) Make ESLint happy (no warnings).
 * 2) Rewrite using array methods (.filter, .map).
 * 3) Keep it pure and readable.
 */
function getPassingStudentsNames(list) {
  // First, we need to create a new array to store the passing students
  const result = [];

  // Use a manual loop to go over the array
  // 1. forEach
  // 2. for loop
  // 3. while loop
  // TODO: Update this for loop to a forEach or any other type of loop
  for (let i = 0; i < list.length; i++) {
    // BONUS: Use array deconstructing
    const student = list[i];

    if (student.score >= MIN_PASSING_GRADE) {
      result.push(student.name.toUpperCase());
    }
  }

  return result;
}

// Test the function
const passingStudents = getPassingStudentsNames(students);

console.log("Passing students: ", passingStudents);



// -------------------------
// Task 2: Average by city
// -------------------------

/**
 * This function is written in a verbose, imperative style.
 *
 * CHALLENGE:
 * 1) Rewrite using .filter, .reduce and destructuring.
 * 2) Do not mutate the input array.
 * 3) Try to keep the function short and declarative.
 */
function getAverageScoreByCity(list, city) {
  let total = 0;
  let count = 0;

  // TODO: Update this loop to a forEach or any other type of loop
  for (let i = 0; i < list.length; i += 1) {
    // BONUS: Use array deconstructing and expand the response to include the city
    const student = list[i];

    if (student.city === city) {
      total += student.score;
      count += 1;
    }
  }

  // conditonal to prevent error if city doesnt exist (edge case)
  if (count === 0) {
    return 0;
  }

  return total / count;
}

const averageByCity = getAverageScoreByCity(students, "Los Angeles");

console.log("Average by City: ", averageByCity.toFixed(2));


// -------------------------
// Task 3: Grouped result
// -------------------------
/**
 * We want a summary object with this shape:
 * {
 *   "New York": { count: X, average: Y },
 *   "Los Angeles": { count: X, average: Y },
 *   ...
 * }
 * 
 * CHALLENGE:
 * 1) Implement this using .reduce() function.
 * 2) Use objects as dictionaries (keys = city names).
 * 3) Reuse getAverageScoreByCity or common helpers if it makes sense.
 * 4) Avoid repeating code, keep functions small.
 */

function buildCitySummary(_list) {
  // TODO: students implement this function using .reduce and objects.
  return {};
}

// Small Console
console.log("Summary by city:", buildCitySummary(students));