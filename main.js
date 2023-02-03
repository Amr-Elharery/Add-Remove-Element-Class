let addInp = document.querySelector(".classes-to-add");
let remInp = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title = 'Current']");
let myDiv = document.querySelector(".classes-list div")

function getClasses() {

    myDiv.innerHTML = '';

    if (current.classList.length > 0) {
        let myArr = [];
        for (let i = 0; i < current.classList.length; i++) {
            myArr.push(current.classList[i])
        }
        myArr.sort()

        for (let i = 0; i < myArr.length; i++) {

            let ele = document.createElement("span");

            ele.className = 'span';
            ele.appendChild(document.createTextNode(myArr[i]));

            myDiv.appendChild(ele);
        }
    } else {
        if (!(myDiv.innerHTML === "No Classes To Show.")) {
            myDiv.append(document.createTextNode("No Classes To Show."));

        }

    }
}

getClasses()

addInp.onblur = function () {
    if (addInp.value.length > 0) {

        let myArr = addInp.value.toLowerCase().split(" ");
        for (let i = 0; i < myArr.length; i++) {
            current.classList.add(myArr[i]);

        }

    }

    addInp.value = '';

    getClasses();
}

remInp.onblur = function () {
    if (remInp.value.length > 0) {

        let myArr = remInp.value.toLowerCase().split(" ");
        for (let i = 0; i < myArr.length; i++) {
            current.classList.remove(myArr[i]);

        }

    }

    remInp.value = '';

    getClasses();
}