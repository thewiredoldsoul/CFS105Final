
window.onload = function() {
    var idCard;

    function idCard(){
	var fullname = document.getElementById("firstname" + "lastname").value;
    document.getElementById('postFullName').innerHTML = userInput;
    
    var address = document.getElementById("address").value;
    document.getElementById('postAddress').innerHTML = userInput;

    var age = document.getElementById("age").value;
    var telephonenumber = document.getElementById("telephonenumber").value;
    
    var numberArray = [];
    
    numberArray.push ("age", "telephonenumber");
    
    for(i = 0; i < numberArray.length; i++) {
        if(numberArray[i] <= "age:" +i) {
            document.getElementById("age").innerHTML = userInput;
            
        }
        }
        else (numberArray[i] >= "telephonenumber: " + userInput),{
            document.getElementById("telephonenumber").innerHTML = telephonenumber;

        return;
            console.log(age);
            console.log(address);


        }
    ]
    }

    // for (numberArray;{
    //     if (document.getElementById("numberArray").value > 100);
    //     return(address);
    //     } else if (numberArray <100){
    //     return age;
    //     }
    

}
