/* ========= AUDIO SETUP ========= */
const music = document.getElementById("bgMusic");
const voice = document.getElementById("voiceLine");
let musicStarted = false;

function playMusicOnce() {
    if (!musicStarted) {
        music.volume = 0.5;
        music.play().catch(() => {});
        musicStarted = true;
    }
}

/* ========= IMAGE LIST ========= */
const images = [
    "img1.png","img2.png","img3.png","img4.png",
    "img5.png","img6.png","img7.png"
];

/* ========= 120+ NO REPLIES ========= */
const noTexts = [
"Ankita… tumhara NO bhi pyaar jaisa lagta hai ❤️",
"Itna mana mat karo jaan, dil thak jaata hai 💔",
"Tum jab NO bolti ho, dil aur paas aa jata hai 🫂",
"Meri duniya tum ho Ankita, thoda sa haan bol do 💖",
"Tumhara NO bhi mujhe tumse door nahi kar paata 🥺",
"Main yahin hoon Ankita, har NO ke baad bhi ❤️",
"Tumhare NO mein bhi fikr chhupi hoti hai 💞",
"Ankita, tum mana karo… main phir bhi tumhara hi hoon 🌸",
"Dil maanta hai, bas zubaan ko waqt chahiye 💓",
"Main sabr kar sakta hoon, par bina tumhare nahi 😌",

"Ankita… har NO ke baad tum aur pyaari lagti ho 💕",
"Tumhara dil naram hai, bas dar bol raha hai 💗",
"Main tumhare har NO ko samajhne ki koshish karta hoon 🫶",
"Tum mana karti ho, main aur yakeen se rukta hoon ❤️",
"Ankita, main tumse sirf pyaar hi toh maang raha hoon 🌹",
"Har NO mujhe aur zimmedaar bana deta hai 💪",
"Tumhe paane se zyada, tumhe sambhalna chahta hoon 🤍",
"Ankita, tumhara bharosa jeetna meri zimmedaari hai 💖",
"Main waqt doon ga, par kabhi chhodunga nahi 🌙",
"Tumhara NO meri himmat kam nahi karta 🫂",

"Ankita… tumhari khamoshi bhi mujhe sunai deti hai 💭",
"Main tumhare liye ruk sakta hoon, bhaag nahi raha 🧡",
"Tumhari marzi meri izzat hai 🌸",
"Bas itna yaad rakhna, main yahin hoon ❤️",
"Ankita, main tumhara intezaar bhi pyaar se karta hoon ⏳",
"Tum mana karo, main phir bhi dua karta hoon 🤲",
"Har NO ke saath mera pyaar gehra hota ja raha hai 💞",
"Tumhara dil safe hai, kyunki main hoon 🤍",
"Ankita, tumhara sukoon meri priority hai 💗",
"Mujhe tumhara YES chahiye, par bina dabav ke 🌹",

"Tumhare NO ke peeche bhi ek kahani hoti hai 📖",
"Main woh aadmi banna chahta hoon jise tum chuno 💪",
"Ankita, main tumhare pace par chalna seekh raha hoon 🚶‍♂️",
"Tumhara dar mere pyaar se chhota hai ❤️",
"Main tumse sirf vaada nahi, saath maang raha hoon 🤝",
"Tumhari aankhon mein sach dikhta hai 👀",
"Ankita, tumhara NO meri respect badha deta hai 🌸",
"Main tumhe jeetna nahi, paana chahta hoon 💖",
"Tumhara dil jab ready hoga, main yahin milunga 🕊️",
"Tum mana karo, main sambhal jaata hoon 🫂",

"Ankita… main tumhari boundaries maanta hoon 🙏",
"Pyaar zabardasti ka nahi hota, mujhe pata hai ❤️",
"Bas itna kehna tha — tum important ho 💗",
"Main tumhare har decision ke saath hoon 🤍",
"Tumhara NO meri feelings ko kam nahi karta 🌹",
"Ankita, tumhara bharosa meri jeet hoga 🏆",
"Main sirf tumhara nahi, tumhara sukoon bhi banna chahta hoon 🌙",
"Tumhare liye better banna meri zimmedaari hai 💪",
"Ankita, tum jab haan kahogi, woh pal khaas hoga ✨",
"Main intezaar karunga… bina shikayat ke ❤️",

"Tumhari ek muskaan sab NO bhula deti hai 😊",
"Ankita, tum meri kahani ka sabse khoobsurat hissa ho 📖",
"Main tumse sirf ishq nahi, izzat bhi karta hoon 🤍",
"Tumhara NO meri umeed nahi todta 🌸",
"Main yahin hoon, bina pressure ke 💖",
"Ankita, tumhara dil safe jagah par hai 🫂",
"Jab tum ready hogi, main yahin milunga ❤️",
"Main tumhe samajhna chahta hoon, badalna nahi 🌹",
"Tumhara har NO mujhe aur mature bana raha hai 💪",
"Ankita… pyaar ho toh aisa hi hota hai 💞",

"Bas itna kehna tha — main tumse sach mein pyaar karta hoon ❤️",
"NO ke baad bhi, tum meri hi rehti ho 🤍",
"Ankita, main tumhara hoon… bina shart ke 🫂",
"Tumhari marzi, meri mohabbat 🌹",
"Main rukunga, kyunki tum worth ho 💖"
];


/* ========= ELEMENTS ========= */
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const img = document.getElementById("cuteImage");
const ring = document.getElementById("ring");
const message = document.getElementById("message");

/* ========= STATE ========= */
let imgIndex = 0;
let noIndex = 0;
let noSize = 18;
let yesSize = 20;

/* ========= NO BUTTON LOGIC ========= */
function sayNo() {
    playMusicOnce();

    noBtn.innerText = noTexts[noIndex % noTexts.length];
    noIndex++;

    img.src = images[imgIndex % images.length];
    imgIndex++;

    noSize = Math.max(noSize - 2, 10);
    noBtn.style.fontSize = noSize + "px";
    noBtn.style.padding = (noSize - 2) + "px";

    yesSize += 3;
    yesBtn.style.fontSize = yesSize + "px";
}

/* ========= YES BUTTON LOGIC ========= */
function sayYes() {
    playMusicOnce();
    voice.play().catch(() => {});

    document.querySelector(".buttons").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector("p").style.display = "none";

    ring.style.display = "block";
    launchFireworks();

    setTimeout(() => {
        message.style.display = "block";
    }, 1400);
}

/* ========= FIREWORKS ========= */
function launchFireworks() {
    for (let i = 0; i < 30; i++) {
        let fw = document.createElement("div");
        fw.className = "firework";
        fw.style.left = "50%";
        fw.style.top = "50%";
        fw.style.background = `hsl(${Math.random()*360},100%,60%)`;
        fw.style.setProperty("--x", (Math.random()*400-200)+"px");
        fw.style.setProperty("--y", (Math.random()*400-200)+"px");
        document.body.appendChild(fw);
        setTimeout(() => fw.remove(), 1000);
    }
}

/* ========= FLOATING HEARTS ========= */
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}, 700);
