class Student {
    constructor(name,email,community){
        this.name = name
        this.email = email
        this.community = community
    }
}

class Bootcamp{
    constructor(name,level,students = []){
        this.name = name
        this.level = level
        this.students = students
    }
    registerStudent(studentToRegister){
        if(this.students.filter(student => student.email === studentToRegister.email).length > 0){
            console.log('already in there')            
        }
        else{
            this.students = this.students.concat(studentToRegister) 
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`)
        }
        return this.students
    }
}

//const student1 = new Student('kevin','kevin@gmail.com','react')
//const bootcamp1 = new Bootcamp
//bootcamp1.registerStudent(student1)