                                            // PROJECT 7


// 1. Create a school class and create a student and faculty method. The student method gives the student Name, Email , and Contact number as arguments and Prints all details the same as faculty using class & object..



// class School{
//     student (name , email , number){
//         this.name = name ;
//         this.email = email;
//         this.number = number;

//         console.log(`Student name : ${this.name} ,  Email : ${this.email} , number : ${this.number}`)
//     }

//     faculty (name , email , number){
//         this.name = name ;
//         this.email = email;
//         this.number = number;

//         console.log(`faculty name: ${this.name} , Email : ${this.email} , number : ${this.number}`)
//     }
// }

// let obj = new School ();
// obj.student ("Bhagi" , "bhagi@mail.com" , "0978654332");
// obj.faculty ("Darshit" ,"d@tutamail.com" , "9887654378");


// output : Student name : Bhagi ,  Email : bhagi@mail.com , number : 0978654332



// 2. Create a person class with a argument name and age. Create a employee class through print out deatils of person class..


    // class Person {
    //     constructor(name , age){
    //         this.name = name ; 
    //         this.age = age ;
    //     }
    // }

    // class Employee extends Person {
    //     constructor(name , age , position){
    //         super( name , age , position);
    //         this.position = position;
    //     }
    //     show (){
    //         console.log(`Name : ${this.name} , Age : ${this.age} , Position : ${this.position}`)
    //     }
    // }

    // let employee = new Employee ("Bhagirath" , "25" , "TL");

    // employee.show();

    // output : Name : Bhagirath , Age : 25 , Position : TL





// 3. Employee class creates a constructor called print a simple message.. 


// class Employee {
//     constructor(){
//         console.log("Employee class called a simpale massage to create a class function or method..")
//     }
// }

// obj = new Employee ();

// output : Employee class called a simpale massage to create a class function or method..




// 4. Create a shape class and create a rectangle and circle method  find circle area (3.14 * radius * radius) and rectangle area (width * height) using with argumnet..



// class shape {
//     rectangle (width , height){
//         return width * height
//     }

//     circle (radius){
//         return 3.14 * radius * radius
//     }
// }

// let obj = new shape ();
// console.log(obj.rectangle (20 , 65));
// console.log(obj.circle (90));

// output : 
// Rectangle : 1300 
//  Circle : 25434.000000000004