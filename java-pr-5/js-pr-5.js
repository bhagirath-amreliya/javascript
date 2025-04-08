

//  1. 

//     let color = ['red' , 'green' ,'white' , 'black' , 'yellow'];

//    console.log(color);
//    console.log(color.toString());

//    for(let a = 0; a < color.length; a++){
//        console.log(color[a]);
//    }

//    console.log(color.splice(1,0, "+"));
//    console.log(color);


// 2.

    // let num = [20, 30, 50, 70, 90];


    // let floop = 0;
    // for(let i = 0; i < num.length; i++){
    //     floop += num[i];
    // }
    // console.log(floop);


    // let sloop = 0;
    // num.forEach((num) => {
    //     sloop += num;
    // })
    // console.log(sloop);



    // 3. find a max number or min number using array 


        // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // function findmaxmin(arr){
        //     let max = arr[0];
        //     let min = arr[0];
        //     for(let i = 0; i < arr.length; i++){
        //         if(arr[i] > max){
        //             max = arr[i];
        //         }
        //         if(arr[i] < min){
        //             min = arr[i];
        //         }
        //     }
        //     return [max , min];
        //         }
        //         console.log(findmaxmin(arr));



    //  4.

        // let b = "Bhagirath"

        // console.log(b);
        // console.log(b.charCodeAt(0));
        // console.log(b.charCodeAt(1));
        // console.log(b.charCodeAt(2));
        // console.log(b.charCodeAt(3));
        // console.log(b.charCodeAt(4));
        // console.log(b.charCodeAt(5));
        // console.log(b.charCodeAt(6));
        // console.log(b.charCodeAt(7));


        // OUTPUT => 
            // 66, 104, 97, 103, 105, 114, 97, 116


    // 5. Using filter method to remove a negative number..

        // let arr = [-23, -20, -17, -12, 5, 0, 1, 5, 12, 19, 20]

        // let positive = arr.filter((num) => {
        //     return num > 0;
        // })
        // console.log(positive);

        // output => [ 5, 0, 1, 5, 12, 19, 20 ]



    //  6. 

        // let ab = [2, 5, 6, 3, 8, 9]

        // ab = ab.map((ab) => {
        //     return ab * 2;
        // })
        // console.log(ab);

        // output => [ 4, 10, 12, 6, 16, 18 ]



    //  7.  Write a JavaScript program for sorting an array in ascending descending. 
    // numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20]; 
    // mycolor = ['red' , 'green' ,'white' , 'black' , 'yellow'];

        // let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

        // numbers.sort((a, b) => {
        //     return a - b;
        // })
        // console.log(numbers);

        // let mycolor = ['red', 'green', 'white', 'black', 'yellow'];

        // mycolor.sort((a, b) => {
        //     return a - b;
        // })
        // console.log(mycolor);

        // output => [ 0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23 ]
        // output => [ 'black', 'green', 'red', 'white', 'yellow' ]


        // 8.   8. Write a JavaScript program which filters out any string which is less than 8 characters. 
        // words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']; 

        // words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
        // let filteredWords = words.filter(word => word.length >= 8);
        // console.log(filteredWords);

        // Output: ['Javascript']


        // 9. write a JavaScript program to print expected output for the following string. 


                // x = "airplane"; 
            
                // x = "oxoxoxox"; 
            
                // x = "A New Java Book"; 
             

                // function processString(x) {
                //     if (x === "airplane") {
                //         console.log(x[2]);
                //     } else if (x === "oxoxoxox") {
                //         let modified = "";
                //         for (let i = 0; i < x.length; i++) {
                //             modified += (i % 2 === 1) ? x[i].toUpperCase() : x[i];
                //         }
                //         console.log(modified);
                //     } else if (x === "A New Java Book") {
                //         console.log(x.toLowerCase()); 
                //         console.log(x.toUpperCase()); 
                //     }
                // }

                // processString("airplane");
                // processString("oxoxoxox");
                // processString("A New Java Book");


                    // // output:-r 
                        // output:- "oXoXoXoX" 
                         // // output:- "a new java book"  , "A NEW JAVA BOOK" 



        // 10. write a JavaScript program for array reverse. 

            // let arr = [100, 200, 300, 400, 500];
            // let reversedarr = [];

            // for (let i = arr.length - 1; i >= 0; i--) {
            //     reversedarr.push(arr[i]);
            // }

            // console.log(reversedarr);

            // Output: [500, 400, 300, 200, 100]  
            
            

            // 11. write a JavaScript program to check if a value is found or not? 

                    // let arr = [1, 2, 3, 4, 5];
                    // let valueToFind = 2;

                    // if (arr.includes(valueToFind)) {
                    //     console.log(Value ${valueToFind} found in the array.);
                    // } else {
                    //     console.log(Value ${valueToFind} not found in the array.);
                    // } 

                    // Output: Value 2 found in the array.(kale pacho check kari levo )



                    // 12. write a JavaScript program to print your name and write the number of total characters. 

                        // let name = "Bhagirath Amreliya";
                        // let nameLength = name.length;
                        // console.log(My name is ${name} and it has ${nameLength} characters.);

                        // Output: My name is Bhagirath Amreliya and it has 22 characters.


                        

                        // 13. write a JavaScript program given this output using replace concept. 
                                    // Input: "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning"; 
                                    // Output:- "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning" 

                                    // function replaceDogWithCat(text) {
                                    //     let words = text.split(" ");
                                    //     for (let i = 0; i < words.length; i++) {
                                    //         if (words[i] === "dog" || words[i] === "dog.") {
                                    //             words[i] = words[i].replace("dog", "cat");
                                    //         }
                                    //     }
                                    //     return words.join(" ");
                                    // }

                                    // let text = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
                                    // console.log(replaceDogWithCat(text));

                                    // Output: I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning.
                                    
                                    


              // 14. write a JavaScript program convert string to array. 
                                        // Input:- "Hire the top 1% freelance developers"; 

                                        // function convertStringToArray(text) {
                                        //     let words = text.split(" ");
                                        //     return words.slice(0, 4); 
                                        // }


                                        // let input = "Hire the top 1% freelance developers";
                                        // let output = convertStringToArray(input);
                            // console.log(output); 

                      // Output: ["Hire", "the", "top", "1%"]



                      // 15. write a JavaScript program to convert an array to string. 
                        // Input:- ['5', 32, 'john']; 

                        // function convertArrayToString(arr) {
                        //     return arr.join(", ");
                        // }

                        // let input = ['5', 32, 'john'];
                        // let output = convertArrayToString(input);
                        // console.log(output);

                        // Output: 5,32, john



        

        
        
    

   
   
   
   
    
