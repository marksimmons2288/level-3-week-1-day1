// Tasks #1 Challenge

// Array object with key value pairs (key) name: and (value)"Alicia" score: 80, etc...
const students = [
  { name: "Alicia", score: 80, city: "New York" },
  { name: "Luis", score: 90, city: "New York" },
  { name: "Maria", score: 70, city: "Los Angeles" },
  { name: "Juan", score: 100, city: "Los Angeles" },
  { name: "Sarah", score: 60, city: "New York" }
];

// Freeze Varible
const MIN_PASSING_GRADE = 70;

// Task 1 Challenge (forEach)
function getPassingStudentsNames(list) {
  const result = [];

  list.forEach(({ name, score }) => {
    if (score >= MIN_PASSING_GRADE) {
      result.push(name.toUpperCase());
    
    }
    
  });
  return result;
}

// Test the function
const passingStudents = getPassingStudentsNames(students);

console.log("Passing Students: ", passingStudents);



// Task 2 Challenge
// Get average score by city using .filter, .reduce


function getAverageScoreByCity(list, city) {
  const filtered = list.filter(({ city: c }) => c=== city);

  if (filtered.length === 0) {
    return `${city}: No students`;
  }

  const total = filtered.reduce((sum, { score }) => sum + score, 0);

  const avg = total / filtered.length;

  return `${city}: ${avg.toFixed(2)}`;
}

console.log(getAverageScoreByCity(students, "New York"));
