




var subbject_name1 = prompt("enter first subject name :");
var subbject_name2 = prompt("enter second subject name :");
var subbject_name3 = prompt("enter third subject name :");

var total_marks = 100;

var obtained_marks_in_subject1 = +prompt("enter Obtained marks of subject 1 : ");
var obtained_marks_in_subject2 = +prompt("enter Obtained marks of subject 2 : ");
var obtained_marks_in_subject3 = +prompt("enter Obtained marks of subject 3 : ");

document.write("<br>" + "Subject" + "  " + " total marks" + " " + "Obtained Marks" + " " + "percentage");

document.write("<br>" + subbject_name1 + " " + total_marks + " " + obtained_marks_in_subject1 + " " + ((obtained_marks_in_subject1/total_marks)*100));

document.write("<br>" + subbject_name2 + " " + total_marks + " " + obtained_marks_in_subject2 + " " + ((obtained_marks_in_subject2/total_marks)*100));

document.write("<br>" + subbject_name3 + " " + total_marks + " " + obtained_marks_in_subject3 + " " + ((obtained_marks_in_subject3/total_marks)*100));
