var programming_languages = ["JavaScript", "Python", "C", "Java"];

document.write(programming_languages);
document.write("<br>");

// Accessing array element
document.write(programming_languages[0]);
document.write("<br>");
document.write(programming_languages[1]);
document.write("<br>");
document.write(programming_languages[2]);
document.write("<br>");

// Array Methods
// join() converts the array into a string. You can also put separator.
document.write(programming_languages.join(" * "));
// pop() removes the last element
programming_languages.pop();
programming_languages.pop();
programming_languages.pop();
document.write(programming_languages);
document.write("<br>")
function add(a, b) {
    document.write("add is called<br>");
    return a + b;
}
function average(a, b) {
    document.write("average is called<br>")
    return add(a, b);
}
let result = average(10, 20);
document.write(result);
