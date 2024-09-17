import "./index.html";
import "./style.css";

var x = 1;
console.log(typeof x);

var r = document.getElementsByClassName("thebody");
var q = document.querySelector(".thebody");

console.log(r);
console.log(q);
var res = function input() {
  var na = prompt("entre your name");
  do {
    var ag = prompt("entre you age");
  } while (isNaN(ag) || ag < 3);

  return { name: na, age: ag };
};

var names = [];
var ages = [];

var tr = ` <tr>
<td class="ftd"> khaled </td>
<td std> 25</td>
</tr>`;
for (var i = 0; i < x; i++) {
  var userInput = res();
  console.log(userInput.name);
  console.log(userInput.age);

  names.push(userInput.name);
  ages.push(userInput.age);
  //ages.push(ag);
  //q.innerHTML+=tr
  q.innerHTML += `        <tr>
                 <td class="ftd"> ${names[i]} </td>
                <td std> ${ages[i]}</td>
                                     </tr>`;
}

console.log(names);
console.log(ages);
