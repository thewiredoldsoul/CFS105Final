

    var idCard;
    
    function idCard(){
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
  
    var fullName = firstname + lastname;
    document.getElementById("postFullName").innerHTML = fullName;

    var address = document.getElementById("address").value;
    document.getElementById("postAddress").innerHTML = address;

    var age = document.getElementById("age").value;
    var telephonenumber = document.getElementById("telephonenumber").value;

    var numberArray = [];
    
    numberArray.push(age, telephonenumber);
    
    for(i = 0; i < numberArray.length; i++) {
        if(numberArray[i] <= 100) 
        {
            document.getElementById("postAge").innerHTML = ("Age:" + age) ;
        }
        else
        {
            document.getElementById("postPhoneNumber").innerHTML = ("Telephone Number:" + telephonenumber);
        }
        console.log(age);
        console.log(telephonenumber);
        
    }
    }



    // var fullname = document.getElementById("firstname" + "lastname").value;
    // document.getElementById('postFullName').innerHTML = userInput;
    
    // var address = document.getElementById("address").value;
    // document.getElementById('postAddress').innerHTML = userInput;

    // var age = document.getElementById("age").value;
    // var telephonenumber = document.getElementById("telephonenumber").value;
    
        
        
        
    //     // else (numberArray[i] >= "telephonenumber: " + userInput),{
    //     //     document.getElementById("telephonenumber").innerHTML = telephonenumber;

    //     // return;
    //     //     console.log(age);
    //     //     console.log(address);


    //     // }
    

    // // for (numberArray;{
    // //     if (document.getElementById("numberArray").value > 100);
    // //     return(address);
    // //     } else if (numberArray <100){
    // //     return age;
    // //     }
    

    
