// Adding validation for empty input field

document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter The Task To Be Created")
    }
}  