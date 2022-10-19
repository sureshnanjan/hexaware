// Object Literal
const myObject = {};
myObject.Name = "Suresh";
myObject.Designation = "Trainer";
myObject.Draw = () => console.log(`${myObject.Name}${myObject.Designation}`);
myObject.Draw();
// With the Properties provided
const anotherObject = {name:"Other",Designation:"Attendee"};
// Dashboard for the Training
// Trainer
// Participants
const trainer = {Name:"Suresh"};
//const Deekshit

// Factory Function
function CreateTrainer(name){
return {name};

}

function CreateParticipant(name){

    return {name};
}

const Suresh = CreateTrainer("Suresh");
const deekshit = CreateParticipant("Deekshit");
export default{CreateTrainer};



