// btn cover event & play music
const btnBuka = document.getElementById("btnBuka");

btnBuka.onclick = function() {
    const isiUndangan = document.getElementById("isiUndangan");
    const musik = document.getElementById("music");

    isiUndangan.style.display = 'flex';
    musik.play();
}

// countdown
const hariH = new Date('Jan 1, 2025 20:00:00').getTime();

setInterval(() => {
    const waktuSekarang = new Date().getTime();
    const selisihWaktu = hariH - waktuSekarang;

    const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

    document.getElementById("day").innerText = hari;
    document.getElementById("hour").innerText = jam;
    document.getElementById("minute").innerText = menit;
    document.getElementById("second").innerText = detik;

    if(selisihWaktu < 0) {
        clearInterval();
        const countdown = document.getElementById("countDown");
        
        countdown.innerHTML = "Selamat Tahun Baru!";
        countdown.style.fontSize = "1.4rem";
        countdown.style.textAlign = "center";
        countown.style.fontWeight = "800";
    }
}, 1000);