#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const ProgramBegin = async (persons) => {
    do {
        console.log("Welcome to you in our institute!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to meet with?",
            choices: ["admin/reception", "student", "exit"]
        });
        if (ans.select == "admin/reception") {
            console.log("If you have any queries, go to admin/reception and please feel free to ask any queries.");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to meet with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
ProgramBegin(persons);
