const course = {
    coursename: "js",
    price: "99",
    courseInstructor: "hardik"
}

 //course.courseInstructor

 const {courseInstructor} = course
 console.log(courseInstructor);//method to ccess something in an object
 const {courseInstructor : instructor} = course
 console.log(instructor);//destructuring object courseInstructor ko apni taraf se instructor value dedi
 
 
//this is json and isme keys and values are bpth strings
 /*  { "name" : "hardik",
    "coursename" :"js ",
    "price": "free"

}*/

/*[  api's in arrays
    {},
    {},
    {},
]*/
