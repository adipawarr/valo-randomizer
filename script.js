const agentName = {
    Duelist: [
        { name: "Jett", splashArt: "pngs/jett.webp", voiceLine: "voices/jett-voiceline.mp3" ,agentbg: "agentbg/jett.png"},
        { name: "Phoenix", splashArt: "pngs/phoenix.webp", voiceLine: "voices/phoenix-voiceline.mp3", agentbg: "agentbg/phoenix.png"},
        { name: "Reyna", splashArt: "pngs/reyna.webp", voiceLine: "voices/reyna-voiceline.mp3",agentbg: "agentbg/reyna.png" },
        { name: "Raze", splashArt: "pngs/raze.webp", voiceLine: "voices/raze-voiceline.mp3",agentbg: "agentbg/raze.png" },
        { name: "Yoru", splashArt: "pngs/yoru.webp", voiceLine: "voices/yoru-voiceline.mp3",agentbg: "agentbg/yoru.png" },
        { name: "Neon", splashArt: "pngs/neon.webp", voiceLine: "voices/neon-voiceline.mp3",agentbg: "agentbg/neon.png" },
        { name: "Iso", splashArt: "pngs/iso.webp", voiceLine: "voices/iso-voiceline.mp3",agentbg: "agentbg/iso.png" }
    ],
    Controller: [
        { name: "Brimstone", splashArt: "pngs/brimstone.webp", voiceLine: "voices/brimstone-voiceline.mp3", agentbg: "agentbg/brimstone.png" },
        { name: "Viper", splashArt: "pngs/viper.webp", voiceLine: "voices/viper-voiceline.mp3",agentbg: "agentbg/viper.png" },
        { name: "Omen", splashArt: "pngs/omen.webp", voiceLine: "voices/omen-voiceline.mp3",agentbg: "agentbg/omen.png" },
        { name: "Clove", splashArt: "pngs/clove.webp", voiceLine: "voices/clove-voiceline.mp3",agentbg: "agentbg/clove.png" },
        { name: "Astra", splashArt: "pngs/astra.webp", voiceLine: "voices/astra-voiceline.mp3",agentbg: "agentbg/astra.png" },
        { name: "Harbour", splashArt: "pngs/harbor.webp", voiceLine: "voices/harbour-voiceline.mp3",agentbg: "agentbg/harbor.png" }

        
    ],
    Sentinel: [
        { name: "Sage", splashArt: "pngs/sage.webp", voiceLine: "voices/sage-voiceline.mp3",agentbg: "agentbg/sage.png" },
        { name: "Cypher", splashArt: "pngs/cypher.webp", voiceLine: "voices/cypher-voiceline.mp3",agentbg: "agentbg/cypher.png" },
        { name: "Deadlock", splashArt: "pngs/deadlock.webp", voiceLine: "voices/deadlock-voiceline.mp3",agentbg: "agentbg/deadlock.png" },
        { name: "Killjoy", splashArt: "pngs/killjoy.webp", voiceLine: "voices/killjoy-voiceline.mp3",agentbg: "agentbg/killjoy.png" },
        { name: "Chamber", splashArt: "pngs/chamber.webp", voiceLine: "voices/chamber-voiceline.mp3",agentbg: "agentbg/chamber.png" },
        { name: "Vyse", splashArt: "pngs/vyse.webp", voiceLine: "voices/vyse-voiceline.mp3",agentbg: "agentbg/vyse.png" }
    ],
    Initiator: [
        { name: "Sova", splashArt: "pngs/sova.webp", voiceLine: "voices/sova-voiceline.mp3",agentbg: "agentbg/sova.png" },
        { name: "Kayo", splashArt: "pngs/kayo.webp", voiceLine: "voices/kayo-voiceline.mp3",agentbg: "agentbg/kayo.png" },
        { name: "Fade", splashArt: "pngs/fade.webp", voiceLine: "voices/fade-voiceline.mp3",agentbg: "agentbg/fade.png" },
        { name: "Gekko", splashArt: "pngs/gekko.webp", voiceLine: "voices/gekko-voiceline.mp3",agentbg: "agentbg/gekko.png" },
        { name: "Skye", splashArt: "pngs/skye.webp", voiceLine: "voices/skye-voiceline.mp3",agentbg: "agentbg/skye.png" },
        { name: "Breach", splashArt: "pngs/breach.webp", voiceLine: "voices/breach-voiceline.mp3",agentbg: "agentbg/breach.png" }
    ] 
};

function preloadImages() {
    Object.values(agentName).flat().forEach(agent=>{
        const img1 = new Image();
        img1.src = agent.splashArt;
        const img2 = new Image();
        img2.src = agent.agentbg;
    });
}
preloadImages();

const agentNameDisplay = document.getElementById('agentName');
const agentSplash = document.getElementById('agentSplash');
const agentNameImage = document.getElementById('agentNameImage');
const agentVoiceLine = document.getElementById('agentVoiceLine');
const slideContainer = document.getElementById('slideContainer');

let spinTimeout;

function spinForAgent(selectedType) {

    const spinButton  = document.getElementById('spinButton');
    spinButton.disabled = true;

    if (spinTimeout){
        clearTimeout(spinTimeout);
        spinTimeout = null;
    }
    let selectedAgents;
    if (selectedType === "allAgents") {
        selectedAgents = [].concat(
            agentName.Duelist,
            agentName.Controller,
            agentName.Sentinel,
            agentName.Initiator
        );
    } else {
        selectedAgents = agentName[selectedType];
    }

    const randomAgent = selectedAgents[Math.floor(Math.random() * selectedAgents.length)];

    agentSplash.style.transition = "opacity 0.3s ease-out";
    agentSplash.style.opacity = "0";
    setTimeout(()=>{
        agentSplash.style.display = "none";
        agentNameImage.style.display = "none";

        agentNameDisplay.textContent = randomAgent.name;
        agentSplash.src = randomAgent.splashArt;
        agentNameImage.src = randomAgent.agentbg;;

        agentSplash.classList.remove("pop-out");
        agentNameImage.classList.remove("pop-out");

        void agentSplash.offsetWidth;
        void agentNameImage.offsetWidth;
        
        agentSplash.style.display = "block";
        agentSplash.style.opacity = "1";
        agentSplash.classList.add("pop-out");

        agentNameImage.style.display = "block";
        agentNameImage.style.opacity = "1";
        agentNameImage.classList.add("pop-out");

        slideContainer.style.display = "block";
        agentSplash.style.display = "block";
        agentNameImage.style.display = "block";
        agentSplash.style.left = "50%";
        agentSplash.style.transform = "translate(-50%,-50%) scale(0)";
        agentSplash.classList.remove("pop-out");
        agentNameImage.classList.remove("pop-out");
        agentSplash.offsetWidth;
        agentNameImage.offsetWidth;
        agentSplash.classList.add("pop-out");
        agentSplash.classList.add("show-splash");
        agentSplash.style.display = "block";
        agentNameImage.classList.add("pop-out");
        agentNameImage.classList.add("show-splash");
        agentNameImage.style.display = "block";

        

        
    },300);
    //agentNameDisplay.textContent = randomAgent.name;
    //agentSplash.src = randomAgent.splashArt;
    //agentVoiceLine.src = randomAgent.voiceLine;

    agentVoiceLine.pause();
    agentVoiceLine.currentTime = 0;
    agentVoiceLine.src = randomAgent.voiceLine;
    agentVoiceLine.play();

    

    

    backgroundMusic.volume = 0.2;
    agentVoiceLine.play();

    agentVoiceLine.onended = () =>{
        backgroundMusic.volume = 0.5;
    };

    spinTimeout = setTimeout(() => {
        spinButton.disabled = false;
        agentSplash.classList.remove("show-splash")
        agentSplash.style.display = "none";
        slideContainer.style.display = "none";
    }, 4000);
    
    
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedType = event.target.closest('a').id;
        spinForAgent(selectedType);
    });
});

document.getElementById('spinButton').addEventListener('click', () => {
    spinForAgent("allAgents");
});

document.getElementById('fullScreenButton').addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});
