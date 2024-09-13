/**   GRADING SYSTEM TASK
 *
 * Two grading systems :-
 * First: 1 - 5 (3 and up passed)
 * Second: A, A-, B, B-, C, C- (C is the lowest passing).
 *
 * Task :-
 * Given the following array allStudents representing all students and their grades,
 * construct a new array studentsWhoPass containing all students who pass.
 */

let allStudents = ['A', 'B-', 'P', 4, 5, 2];

let studentsWhoPass = [];

for (const grade of allStudents) {
	if (typeof grade === 'number') {
		if (grade >= 3 && grade <= 5) {
			studentsWhoPass.push(grade);
		}
	} else if (
		grade !== 'C-' ||
		grade !== 'D' ||
		grade !== 'E' ||
		grade !== 'F'
	) {
		studentsWhoPass.push(grade);
	} else {
		studentsWhoPass = 'Not a supported grade';
	}
}
console.log(studentsWhoPass);
