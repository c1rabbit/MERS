//mod 10 weight 2
function generate (orgID, loanNum) {
  if (orgID.toString().length != 6 ){
    console.log("\t[error]: org ID is not 6 digits")
    return null;
  } else if (loanNum.toString().length > 9){
    console.log("\t[error]: loan number is longer than 9 digits");
    return null;
  } else if (loanNum.toString().length < 9){
    while (loanNum.toString().length < 9){
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
  return digit;

}

function validate (min){
  if(min.toString().length != 16){
    console.log("\t[error]: MIN length is not 16 digits")
    return null;
  }
  var digit = generate(min.toString().substring(0,6),min.toString().substring(6,15));
  return digit == min.toString().substring(15);
}

module.exports = {
    generate,
    validate
}
