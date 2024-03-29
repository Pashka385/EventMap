const GetRoad = document.querySelectorAll(".get");
const StrText = document.querySelectorAll(".answer__li");
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
