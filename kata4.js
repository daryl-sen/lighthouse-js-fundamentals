const instructorWithLongestName = function(instructors) {
  let provisionalName;
  let provisionalLength = 0;
  let provisionalCourse;

  for (let instructor of instructors) {
    // console.log(instructor.name.length);
    if (instructor.name.length > provisionalLength) {
      provisionalLength = instructor.name.length;
      provisionalName = instructor.name;
      provisionalCourse = instructor.course;
    }
  }

  return {name: provisionalName, course: provisionalCourse};
};



console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));