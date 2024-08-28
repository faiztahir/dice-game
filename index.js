function playGame() {
    let randomNumberOne = Math.floor(Math.random() * 6) + 1;
    let randomImageOnePath = "./images/" + randomNumberOne + ".png";
    let randomNumberTwo = Math.floor(Math.random() * 6) + 1;
    let randomImageTwoPath = "./images/" + randomNumberTwo + ".png";
    
    let images = document.querySelectorAll("img");

    if (images.length >= 2) { 
        let image1 = images[0];
        let image2 = images[1];

        image1.setAttribute("src", randomImageOnePath);
        image2.setAttribute("src", randomImageTwoPath);
        
        if (randomNumberOne > randomNumberTwo) {
            document.querySelector("h1").innerHTML = "Player One Wins";
        } else if (randomNumberTwo > randomNumberOne) {
            document.querySelector("h1").innerHTML = "Player Two Wins";
        } else {
            document.querySelector("h1").innerHTML = "Draw";
        }
    } else {
        console.error("Not enough images in the document.");
    }
}

document.querySelector("button").addEventListener("click",playGame);
