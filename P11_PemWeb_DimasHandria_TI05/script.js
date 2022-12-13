document.querySelector("#option a").forEach((a) => {
    // Jika Di Click Akan Menjalankan Fungsi Computerchoice()
    a.addEventListener("click", (element) => {
        computerCohice(element);
    })
})

function computerCohice(element) {
    // Tangkap Pilihan User
    let pilihanUser = element.target.inerText;

    // Menangkap Element Result Dengan Queryselector Untuk Menampung
    // Nilai Hasil Dari Game 
    let pilihanComputer = document.querySelector("#result");

    // Membuat Array Pilihan Untuk Komputer
    let choice = ["Rock", "Paper", "Scissors"];

    // Pilihan Random Untuk Komputer
    pilihanComputer.inerHTML = choice[Math.round(Math.random() * choice.length)] 
    pilihanComputer = pilihanComputer.inerHTML;

    // Jika Pilihan Komputer Sama Dengan Pilihan User(Draw)
    if (pilihanUser == pilihanComputer) {
        alert("Draw");
    }

    // Jika Pilihan User Yang Menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("YOU WIN");
    }else{
        alert("Tidak ada pilihan");
    }

    // Jika Pilihan Komputer Yang Menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("COMPUTER WIN");
    }else{
        alert("Tidak ada pilihan");
    }
}