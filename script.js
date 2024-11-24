const agentName = {
    Duelist: [
        { name: "Jett", splashArt: "pngs/jett.webp", voiceLine: "voices/jett-voiceline.mp3" },
        { name: "Phoenix", splashArt: "pngs/phoenix.webp", voiceLine: "voices/phoenix-voiceline.mp3" },
        { name: "Reyna", splashArt: "pngs/reyna.webp", voiceLine: "voices/reyna-voiceline.mp3" },
        { name: "Raze", splashArt: "pngs/raze.webp", voiceLine: "voices/raze-voiceline.mp3" },
        { name: "Yoru", splashArt: "pngs/yoru.webp", voiceLine: "voices/yoru-voiceline.mp3" },
        { name: "Neon", splashArt: "pngs/neon.webp", voiceLine: "voices/neon-voiceline.mp3" },
        { name: "Iso", splashArt: "pngs/iso.webp", voiceLine: "voices/iso-voiceline.mp3" }
    ],
    Controller: [
        { name: "Brimstone", splashArt: "pngs/brimstone.webp", voiceLine: "voices/brimstone-voiceline.mp3" },
        { name: "Viper", splashArt: "pngs/viper.webp", voiceLine: "voices/viper-voiceline.mp3" },
        { name: "Omen", splashArt: "pngs/omen.webp", voiceLine: "voices/omen-voiceline.mp3" },
        { name: "Clove", splashArt: "pngs/clove.webp", voiceLine: "voices/clove-voiceline.mp3" },
        { name: "Astra", splashArt: "pngs/astra.webp", voiceLine: "voices/astra-voiceline.mp3" },
        { name: "Harbour", splashArt: "pngs/harbor.webp", voiceLine: "voices/harbour-voiceline.mp3" }

        
    ],
    Sentinel: [
        { name: "Sage", splashArt: "pngs/sage.webp", voiceLine: "voices/sage-voiceline.mp3" },
        { name: "Cypher", splashArt: "pngs/cypher.webp", voiceLine: "voices/cypher-voiceline.mp3" },
        { name: "Deadlock", splashArt: "pngs/deadlock.webp", voiceLine: "voices/deadlock-voiceline.mp3" },
        { name: "Killjoy", splashArt: "pngs/killjoy.webp", voiceLine: "voices/killjoy-voiceline.mp3" },
        { name: "Chamber", splashArt: "pngs/chamber.webp", voiceLine: "voices/chamber-voiceline.mp3" },
        { name: "Vyse", splashArt: "pngs/vyse.webp", voiceLine: "voices/vyse-voiceline.mp3" }
    ],
    Initiator: [
        { name: "Sova", splashArt: "pngs/sova.webp", voiceLine: "voices/sova-voiceline.mp3" },
        { name: "Kayo", splashArt: "pngs/kayo.webp", voiceLine: "voices/kayo-voiceline.mp3" },
        { name: "Fade", splashArt: "pngs/fade.webp", voiceLine: "voices/fade-voiceline.mp3" },
        { name: "Gekko", splashArt: "pngs/gekko.webp", voiceLine: "voices/gekko-voiceline.mp3" },
        { name: "Skye", splashArt: "pngs/skye.webp", voiceLine: "voices/skye-voiceline.mp3" },
        { name: "Breach", splashArt: "pngs/breach.webp", voiceLine: "voices/breach-voiceline.mp3" }
    ] 
};

function preloadImages() {
    Object.values(agentName).flat().forEach(agent=>{
        const img = new Image();
        img.src = agent.splashArt;
    });
}
preloadImages();



const agentNameDisplay = document.getElementById('agentName');
const agentSplash = document.getElementById('agentSplash');
const agentVoiceLine = document.getElementById('agentVoiceLine');
const slideContainer = document.getElementById('slideContainer');
const spinButton = document.getElementById('spinButton');


let spinTimeout;

function spinForAgent(selectedType) {
    spinButton.disabled = true;
    if (spinTimeout){
        clearTimeout(spinTimeout);
        spinTimeout = null;
    }
    const agents = selectedType === "allAgents"
        ? Object.values(agentName).flat()
        : agentName[selectedType];
    const randomAgent = agents[Math.floor(Math.random() * agents.length)];

    // Animation logic
    agentSplash.style.opacity = "0";
    setTimeout(() => {
    agentNameDisplay.textContent = randomAgent.name;
    agentSplash.src = randomAgent.splashArt;
    
    agentSplash.onload = () => {
        agentSplash.style.display = "block";
        agentSplash.style.opacity = "1";
        agentSplash.classList.add("pop-out");
    };
}, 300);

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
