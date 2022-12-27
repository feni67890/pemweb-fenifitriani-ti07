// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // jika di klik akan menjalankan fungsi computerchoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })

);
function computerChoice(element) {
    //tangkap pilihan user 
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihancomputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihancomputer.innerHTML =
        choices[Math.round(Math.random() * choices.length)];
    pilihancomputer = pilihancomputer.innerHTML;

    // jika pilihan komputer dan pilihan user sama (draw)
    if (pilihanUser == pilihancomputer) {
        alert("DRAW");
    }

    // jika pilihan user yang menang
    if (pilihanUser == "Rock" && pilihancomputer == "Scissors") {
        alert("YOU WIN");
    } else if (pilihanUser == "Paper" && pilihancomputer == "Rock") {
        alert("YOU WIN");
    } else if (pilihanUser == "Scissors" && pilihancomputer == "Paper") {
        alert("YOU WIN");
    }

    // jika pilihan user yang menang
    if (pilihanUser == "Rock" && pilihancomputer == "Paper") {
        alert("COMPUTER WIN");
    } else if (pilihanUser == "Paper" && pilihancomputer == "Scissors") {
        alert("COMPUTER WIN");
    } else if (pilihanUser == "Scissors" && pilihancomputer == "Rock") {
        alert("COMPUTER WIN");
    }
}