// Adding validation for empty input field

document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter The Task To Be Created")
    }
    else{
        document.querySelector("#tasks").innerHTML += 
        `
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#newtask input").value}
            </span>

            <button class="delete">
                Remove
            </button>
        </div>
        `;
    }
}  