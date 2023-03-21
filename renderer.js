/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

//show & hide options list
select.addEventListener("click", () => {
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

//select option
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((option) => { option.classList.remove('selected') });
        select.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_list.classList.toggle("active");
        select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });
});


let lis = document.getElementById("nav").children[0].children;
for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute("onclick", "openPage(" + i + ")")
}

function openPage(index) {
    for (let i = 0; i < lis.length; i++) {
        if (lis[i] === lis[index]) {
            document.getElementById("page" + (i + 1)).classList.replace("close", "open");
            lis[i].classList.replace("no-checked", "checked");
        } else {
            document.getElementById("page" + (i + 1)).classList.replace("open", "close");
            lis[i].classList.replace("checked", "no-checked");
        }
    }
}

