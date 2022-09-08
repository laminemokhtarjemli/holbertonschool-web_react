interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'lamine',
    lastName: 'Jemli',
    age: 26,
    location: 'Tunisia,Tn',
}
const student2: Student = {
    firstName: 'King',
    lastName: 'kal',
    age: 22,
    location: 'Los Angels, CA'
}

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student: Student): void => {
	const newRow: HTMLTableRowElement = table.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})