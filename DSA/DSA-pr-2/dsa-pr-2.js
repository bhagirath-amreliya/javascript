
// DSA-PR-2


// 1.Write a program for Reverse Link List..

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null; 
//     }
// }

// class LinkList {
//     constructor() {
//         this.head = null;
//     }



// lastInsert(data)
// {
//     let newNode = new Node(data);

//     if(this.head == null){
//         this.head = newNode;
//         return;
//     }
//     else{
//         let current = this.head;
//         while(current.next != null){
//             current = current.next;
//         }
//         current.next = newNode;
//     }
// }


//     revelinklist()
//     {
//         let current = this.head;
//         let prev = null;
//         let next = null;

//         while(current != null )
//         {
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }

//         this.head = prev;
//     }


//     // Display =>

//         display()
//         {
//             if(this.head == null){
//                 console.log("List is Empty !!");
//             }else{
//                 let result = [];
//                 let current = this.head;
//                 while(current.next != null){
//                     result.push(current.data);
//                     current = current.next;
//                 }
//                 result.push(current.data);
//                 console.log(result.join(" -> "));
//             }
//         }

//         }


//         let test = new LinkList();

//         test.lastInsert(100);
//         test.lastInsert(200);
//         test.lastInsert(300);
//         test.lastInsert(400);
//         test.lastInsert(500);

//         test.display();
//         test.revelinklist();
//         test.display();

// Output:
// 100 -> 200 -> 300 -> 400 -> 500
// 500 -> 400 -> 300 -> 200 -> 100



// 2.Write a Program for Given Link List is Palindrome or not..

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null; 
//     }
// }

// class LinkList {
//     constructor() {
//         this.head = null;
//     }

//     isPalindrome(data) 
//     {
//         let newNode = new Node(data);
//         if(this.head == null) {
//             this.head = newNode;
//             return;
//         } else {
//             let current = this.head;
//             while(current.next != null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     display()
//     {
//         if(this.head == null){
//             console.log("List is Empty !!");
//         }else{
//             let result = [];
//             let current = this.head;
//             while(current.next != null){
//                 result.push(current.data);
//                 current = current.next;
//             }
//             result.push(current.data);
//             console.log(result.join(" -> "));
//         }
//     }

//     checkpalidrome(){
//         let current = this.head;
//         let stack = [];
//         while(current != null){
//             stack.push(current.data);
//             current = current.next;
//         }
//         current = this.head;
//         while(current != null){
//             if(stack.pop() != current.data){
//                 return false;
//             }
//             current = current.next;
//         }
//         return true;
//     }
// }  

// let test = new LinkList();
// test.isPalindrome(100);
// test.isPalindrome(200);
// test.isPalindrome(300);
// test.isPalindrome(200);
// test.isPalindrome(100);
// test.display();
// console.log(test.checkpalidrome());


// Output:
// 100 -> 200 -> 300 -> 200 -> 100
// true


// 3.Write a Program for Singly Link List (insert, delete and display function)..

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null; 
//     }
// }

// class LinkList {
//     constructor() {
//         this.head = null;
//     }

//     lastInsert(data)
//     {
//         let newNode = new Node(data);
//         if(this.head == null){
//             this.head = newNode;
//             return;
//         }
//         else{
//             let current = this.head;
//             while(current.next != null){
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }
//     deleteNode(data) {
//         if (this.head == null) {
//             console.log("List is Empty !!");
//             return;
//         }
//         if (this.head.data === data) {
//             this.head = this.head.next;
//             return;
//         }
//         let current = this.head;
//         while (current.next != null && current.next.data !== data) {
//             current = current.next;
//         }
//         if (current.next == null) {
//             console.log("Node not found !!");
//         } else {
//             current.next = current.next.next;
//         }
//     }

//     display(){
//         if(this.head == null){
//             console.log("List is Empty !!");
//         }else{
//             let result = [];
//             let current = this.head;
//             while(current.next != null){
//                 result.push(current.data);
//                 current = current.next;
//             }
//             result.push(current.data);
//             console.log(result.join(" -> "));
//         }
//     }
// }
// let test = new LinkList();
// test.lastInsert(100);
// test.lastInsert(200);
// test.lastInsert(300);
// test.lastInsert(400);
// test.lastInsert(500);
// test.display();
// test.deleteNode(300);
// test.display();


// Output:
// 100 -> 200 -> 300 -> 400 -> 500
// 100 -> 200 -> 400 -> 500