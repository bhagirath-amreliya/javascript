
// Type of function ==> 

    // 1. NANR ==>

        function plus(){
            let a = 10, b = 30;
            totl = a + b ;
            console.log("totle of value : ",totl);
        }
        // plus()



    // 2. NAWR ==> 

        function mini(){
           let c = 98, d = 59;
           let totle = c - d;
           return totle;
        }
        // mini()
        // console.log("value of : ", totle);


    // 3. TANR ==> 

        function multiplication(a , b ){
            t = a * b;
            console.log("multiplication value of :", t);
        }
        // multiplication(23 , 45);


    // 4. TATR ==> 

        function divi(a , b ){
            tot = a / b ;
            return tot;
        }
        
        // divi(90 , 42)
        // console.log("Divison of this value :", tot);


        
        function bign(a , b){
            if(a > b){
                console.log("if a is big number of b ");
            }else{
                console.log("if b is big number of a ");               
            }
        }
        // bign(10 , 30);




        function switchcase(){
           
            let num = +prompt("Enter Choice");
        switch (num) {

            case 1:
                plus(); 
            break;
        
            case 2 :
                console.log(mini());              
            break;

            case 3:
                multiplication(23 , 45);
            break ;  
            
            case 4:
                console.log(divi(90 , 42));
            break ;   
           default:
                console.log("Wrong Choice");
                break;
                   
        }

    }

    switchcase();
    
        
        