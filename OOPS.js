function ask (question, yes, no){
 if(confirm(question)===true){
    return yes()
 }  else return no();
}
  
function showOk(){
return "You agreed.";

}

function confirm(question){
if(!question==null){
    return showOk();
} else return showCancel();

return question;

}

function showCancel(){
return "You canceled the execution.";

}

console.log(ask("Do you agreee?", showOk, showCancel));