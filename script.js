//complete this code
class Person {
	constructor(name, age)
	{
		this.getter=name
		this.setter=age			
	}
	get name()
	{
		return this.name
	}
	set age()
	{
		this.age=
	}
		
}

class Student extends Person {
	study()
	{
		console.log(super.name(), "is studying")
	}
}

class Teacher extends Person {
	teach()
	{
		console.log(super.name(), "is teaching);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
