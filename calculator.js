const display = document.getElementById("display");

const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
