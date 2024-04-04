const GetRoad = document.querySelectorAll(".get");
const StrText = document.querySelectorAll(".answer__li");
const NameCom = document.querySelector(".name_text");
const box = document.querySelector(".name");
const NumberGroup = document.querySelector(".group");

function getName(message) {
    return prompt(message);
}
function getNumberGroup(message) {
    return prompt(message);
}

let resultName = getName('Введите название команды');
NameCom.textContent = resultName;

let resultGroup = getNumberGroup('Введите номер группы');
NumberGroup.textContent = resultGroup;

box.addEventListener('click', () => {
    let resultName = getName('Введите название команды');
    NameCom.textContent = resultName;
});

NumberGroup.addEventListener('click', () => {
    let resultGroup = getNumberGroup('Введите номер группы');
    NumberGroup.textContent = resultGroup;
});

GetRoad.forEach((event) => {
    event.addEventListener('click', () => {
        if (event.checked) {
            TextDecor(event);
        } else {
            TextUndecor(event);
        }
    });
});

function TextDecor(checkbox) {
    const parentLi = checkbox.parentElement;
    parentLi.classList.add("active");
}

function TextUndecor(checkbox) {
    const parentLi = checkbox.parentElement;
    parentLi.classList.remove("active");
}
