var numbers=[-30, 14, 66, 21, 72, -4];

var dataNum = [];

function number(num){
  let that = this;
  
  //Elements
  this.ele = document.createElement("div");
  this.numberEle = document.createElement("div");
  
  //Variables
  this.outputMsg = outputMessage(num);
  this.number = num;
  
  //Text
  this.numberEle.innerHTML = "The number is " + this.number + this.outputMsg;
  
  //EventListener
  this.ele.addEventListener("click", function(){
    that.countUp();
  });
  
  //Append
  this.ele.appendChild(this.numberEle);
  document.body.appendChild(this.ele);
}

//Adds 1 to current number value
number.prototype.countUp = function(){
  this.number++;
  this.numberEle.innerHTML = "The number is " + this.number + this.outputMsg;
}

//Generates message based off input number
function outputMessage(number){
  if(number<0){
    return " and is below 0";
  }else if(number>50){
    return " and is greater than 50";
  }else if(number==14){
    return " and is exactly 14";
  }else{
    return " and did not meet any other parameter";
  }
}

//run
for(i=0;i<numbers.length;i++){
   dataNum.push(new number(numbers[i]));
}