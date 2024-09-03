// no 6
function kirim() {
    var nama = document.getElementById("nama").value;
    document.getElementById("hasil").innerHTML = "Sedang Mencari " + nama;
}

// no 5
function waktu() {
    let countdownElement = document.getElementById('demo');
    let count = 10;

    let countdownTimer = setInterval(function() {
        countdownElement.innerHTML = "Danger! Alert akan tertutup dalam" + count;
        count--;

        if (count < 0) {
            clearInterval(countdownTimer);
            countdownElement.innerHTML = "";
        }
    }, 1000);

    const style = document.createElement('style');
    style.innerHTML += `
      .test {
        background-color: red;
        width:300px;
      }
    `;
document.head.appendChild(style);
}

// no 4
function ganti() {
  const gambar = document.getElementById(document.getElementById('pilihgambar').value);
  const opacitys = document.getElementById('pilihopacity').value;
  gambar.style.opacity = opacitys;

}

