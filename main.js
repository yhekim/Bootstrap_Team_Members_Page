const switchButton = document.getElementById("switch");




window.onload = () => {
    switchButton.addEventListener("click", () => {
        const newBody = document.querySelector("body");
        title = document.querySelector(".title");

        if (newBody.style.backgroundColor == "black") {
            newBody.style.backgroundColor = "white";
            newBody.style.color = "black";




        } else {
            newBody.style.backgroundColor = "black";
            newBody.style.color = "white";


        }
    })
}