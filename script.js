const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const email = document.querySelector("#email")
const pnum = document.querySelector("#pnum")
const pwd = document.querySelector("#pwd")
const cpwd = document.querySelector("#cpwd")
const submit = document.querySelector("#submit")
let errorMsg = document.createElement('p');
errorMsg.textContent = "* Passwords do not match";
errorMsg.style.color = "red";
errorMsg.style.fontSize = "0.7rem";
errorMsg.style.width = "auto";
const pwdCon = document.querySelector(".input:nth-child(5)")
const temp = document.querySelector(".input:last-child")
console.log(pwdCon)
console.log(temp)
submit.addEventListener('click', (event) => {
    if (pwd.value != cpwd.value) {
        pwd.classList.add("error");
        pwdCon.appendChild(errorMsg);
    } else {
        pwd.classList.remove("error");
        pwdCon.removeChild(errorMsg);
    }
});