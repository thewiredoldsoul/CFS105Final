
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
    
    for(numberArray = 0; i < 10; i++) {
        if(i < 100) {
            return(age);
        }
        else(i > 100);
            return(address);
        }
        }
    }

    // for (numberArray;{
    //     if (document.getElementById("numberArray").value > 100);
    //     return(address);
    //     } else if (numberArray <100){
    //     return age;
    //     }
    


