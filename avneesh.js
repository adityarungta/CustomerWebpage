student = {
    firstName: 'Udit',
    lastName: 'Rungta',
    studentAge: 30,
    enrollmentNo: 'A2305218449',
    studentInfo: function(){
        return this.firstName + " " + this.lastName + "\n" + this.enrollmentNo + "\n" + this.studentAge;
    }
};
console.log('The student details are:');
console.log(student.studentInfo());
