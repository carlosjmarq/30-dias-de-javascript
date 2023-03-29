export function getStudentAverage(students) {
	// Tu código aquí 👈
	const newStudents = students.map(student => ({
	  name: student.name,
	  average: Number((student.grades.reduce((acc, grade) => acc + grade) / student.grades.length).toFixed(2))
	}))
	const classAverage = (newStudents.reduce((acc, student) => acc + Number(student.average), 0) / newStudents.length).toFixed(2)
	return {
	  classAverage: Number(classAverage),
	  students: newStudents
	}
  }
  