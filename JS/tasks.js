// Tasks #1 Challenge

// Array object with key value pairs (key) name: and (value)"Alicia" score: 80, etc...
const students = [
  { name: "Alicia", score: 80, city: "New York" },
  { name: "Luis", score: 90, city: "New York" },
  { name: "Maria", score: 70, city: "Los Angeles" },
  { name: "Juan", score: 100, city: "Los Angeles" },
  { name: "Sarah", score: 60, city: "New York" },
  { name: "Carlos", score: 85, city: "Chicago" },
  { name: "Emily", score: 75, city: "New York" },
  { name: "Hannah", score: 95, city: "Los Angeles" },
  { name: "Mark", score: 68, city: "Chicago" },
  { name: "Olivia", score: 82, city: "New York" }
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
  const result = [];
  const filtered = list.filter(({ city: c }) => c=== city);

  if (filtered.length === 0) {
    result.push( `${city}: No students`);
  }

  const total = filtered.reduce((sum, { score }) => sum + score, 0);

  const avg = total / filtered.length;

  result.push(  `${city}: ${avg.toFixed(2)}`);
  return result;
}

console.log(getAverageScoreByCity(students, "New York"));


// Task 3 Challenge (Grouped Result)

function buildCitySummary(list) {
  const summary = list.reduce((acc, { city, score }) => {
    if (!acc[city]) {acc[city] = { count: 0, total: 0 };}
    acc[city].count += 1;
    acc[city].total += score;
    return acc;
  }, {});

  Object.keys(summary).forEach(city => {
    const { total, count } = summary [city]; 
    summary[city].average = total / count;
    delete summary[city].total;
  });
  return summary;
}

console.log("Summary by city:", buildCitySummary(students));
  



