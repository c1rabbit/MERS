//mod 10 weight 2
function generate (orgID, loanNumber) {
  //strip non-numeric or letters
  loanNumber = loanNumber.replace(/\D/g,"");
  orgID = orgID.replace(/\D/g,"");

  //string letters
  var loanNum = loanNumber.replace(/[a-z]/gi,"");
  orgID = orgID.replace(/[a-z]/gi,"");

  if (orgID.toString().length != 7 ){
    throw new Error("org ID is not 7 digits")
    //return null;
  } else if (loanNum.toString().length > 10){
    throw new Error("[error]: loan number is longer than 10 digits");
    //return null;
  } else if (loanNum.toString().length < 10){
    while (loanNum.toString().length < 10){
      loanNum = "0" + loanNum;
    }
    //console.log("orgID: " + orgID + "\tloanNum: " + loanNum);
  }
  var temp = orgID.toString() + loanNum.toString();
  var sum = 0;
  for(var i = 0; i < temp.length; i++){
    if(i % 2 == 0){
      var x2 = parseInt(temp[i])*2;
      if(x2 > 9){
        sum += 1 + x2 % 10;
        //console.log(1 + x2 % 10);
      }else{
        sum += x2;
        //console.log(x2);
      }
    }else{
      sum += parseInt(temp[i]);
      //console.log(temp[i]);
    }
  }
  //console.log("sum" + sum);
  var digit = Math.ceil(sum/10)*10 - sum
  //console.log(Math.ceil(sum/10)*10);
  var output = {
    "orgID": orgID,
    "loanNum": loanNumber,
    "digit": digit,
    "min": orgID + loanNum + digit
  }
  return output;

}

function validate (min){
  if(min.toString().length != 18){
    throw new Error("MIN length is not 18 digits");
    //return null;
  }
  var digit = generate(min.toString().substring(0,7),min.toString().substring(7,17)).digit;
  return digit == min.toString().substring(17);
}

module.exports = {
    generate,
    validate
}
