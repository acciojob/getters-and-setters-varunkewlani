//complete this code
class Person {
	constructor(name, age)
	{
		this._Name=name 
		
/*_Name and _age represents Name as a private property 
and not public, so the child classes can access these*/

		
		this._Age=age			
	}
	get name()
	{
		return this._Name
	}
	set age(age)
	{
		this._Age=age
	}
}

class Student extends Person {
	study()
	{
		console.log(this.name + " is studying")
	}
}

class Teacher extends Person {
	teach()
	{
		console.log(this.name + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
