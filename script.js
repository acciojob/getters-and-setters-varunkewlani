//complete this code
class Person {
	constructor(name, age)
	{
		this.Name=name
		this.Age=age			
	}
	get NName()
	{
		return this.Name
	}
	set AAge(age)
	{
		this.Age=age
	}
}

class Student extends Person {
	study()
	{
		console.log(user.NName + " is studying")
	}
}

class Teacher extends Person {
	teach()
	{
		console.log(user.NName + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
