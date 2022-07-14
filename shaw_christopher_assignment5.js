/*
Chris Shaw
Javascript Assignment 5
12/3/19
*/



function validateCreditCard(number){

    //Get rid of the pesky dashes
    var filteredNumber = number.split('-').join('');

    //check to see if the card is 16 characters long
    if(filteredNumber.length < 16) return false;
    
    //loop to validate individual characters
    for(var i = 0; i < filteredNumber.length; i++){

        //uses loop index to save each character for multiple checks
        var currentNumber = filteredNumber[i];
    
        //ParseInt each character to validate that its an integer
        currentNumber = Number.parseInt(currentNumber);
    
        //Verify Integer
        if(!Number.isInteger(currentNumber)){
          return false;
        }
      }
    
      // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
      var obj = {};
      for(var i = 0; i < filteredNumber.length; i++){
        obj[filteredNumber[i]] = true;
      }
      if(Object.keys(obj).length < 2){
        return false;
      }
    
      //Modulus the last digit in filteredNumber against 2 to make sure its even
      if(filteredNumber[filteredNumber.length - 1] % 2 !== 0){
        return false;
      }
    
      //Total the sum of the filteredNumber to make sure its greater than 16
      var sum = 0;
      for(var i = 0; i < filteredNumber.length; i++){
        sum += Number(filteredNumber[i]);
      }
      if(sum <= 16){
        return false;
      }
      //If all tests pass return true
      return true;
    };
    
  

//Passing Test Cases
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("9999-9999-8888-0000"));

//Failing Test Cases
console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1111-1111-1111-1110"));
console.log(validateCreditCard("6666-6666-6666-6661"));


