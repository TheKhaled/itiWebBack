(()=>{"use strict";console.log("number");var e=document.getElementsByClassName("thebody"),o=document.querySelector(".thebody");console.log(e),console.log(o);for(var n=function(){var e=prompt("entre your name");do{var o=prompt("entre you age")}while(isNaN(o)||o<3);return{name:e,age:o}},t=[],r=[],l=0;l<1;l++){var s=n();console.log(s.name),console.log(s.age),t.push(s.name),r.push(s.age),o.innerHTML+=`        <tr>\n                 <td class="ftd"> ${t[l]} </td>\n                <td std> ${r[l]}</td>\n                                     </tr>`}console.log(t),console.log(r)})();