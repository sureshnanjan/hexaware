function Trainee()
{
	this.Name="Name";
	throw new Error("You cannot create an instance of Abstract Class");
}
Trainee.prototype.print=function()
{
	return "Trainee is: "+this.Name;
}
function KG(Name)
{
	this.Name=Name;
}
KG.prototype=Object.create(Trainee.prototype);
var kg=new KG("Otkur");
console.log(kg.print());