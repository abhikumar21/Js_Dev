//object destructuring

const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
// const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor: Teacher} = course;
console.log(Teacher);

