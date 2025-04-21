const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

const profilePic = document.getElementById('profilePic');

['click', 'touchend'].forEach(event => {
    profilePic.addEventListener(event, (e) => {
        if (event === 'touchend') {
        e.preventDefault();
        }
    profilePic.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        profilePic.style.transform = 'rotate(0deg)';
    }, 1000);
  });
});

const showSkillsBtn = document.getElementById('showSkills');
const skillsSection = document.getElementById('skillsSection');

['click', 'touchend'].forEach(event => {
    showSkillsBtn.addEventListener(event, (e) => {
        if (event === 'touchend') {
            e.preventDefault();
        }
    
        if (skillsSection.style.display === 'block') {
            skillsSection.style.display = 'none';
            showSkillsBtn.textContent = 'Show My Skills';
        } else {
            skillsSection.style.display = 'block';
            showSkillsBtn.textContent = 'Hide My Skills';
      
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.width = bar.getAttribute('data-percent') + '%';
                }, 200 + (index * 100));
      });
    }
  });
});

function typeWriter(element, text, speed = 100) {
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
  
    if (isMobile && text.length > 15) {
        element.textContent = text;
        return;
    }
  
    let i = 0;
    element.textContent = '';
  
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const nameElement = document.getElementById('userName');
const originalName = nameElement.textContent;

const socialBtns = {
    instagram: { emoji: '📸', text: 'Instagram' },
    facebook: { emoji: '👥', text: 'Facebook' },
    whatsapp: { emoji: '📱', text: 'WhatsApp' },
    twitter: { emoji: '🐦', text: 'Twitter' },
    tiktok: { emoji: '🎵', text: 'TikTok' },
    linkedin: { emoji: '💼', text: 'LinkedIn' }
};

Object.keys(socialBtns).forEach(id => {
    const btn = document.getElementById(id);
    const info = socialBtns[id];
  
    if ('ontouchstart' in window) {
        btn.textContent = `${info.emoji} ${info.text}`;
    } else {
        btn.addEventListener('mouseenter', () => {
        btn.textContent = `${info.emoji} ${info.text}`;
        });
    
        btn.addEventListener('mouseleave', () => {
        btn.textContent = info.text;
        });
    }
});

const funFacts = [
    "Did you know? The first computer bug was an actual bug - a moth trapped in a Harvard Mark II computer in 1947.",
    "Fun fact: The term 'debugging' came from removing an actual moth from a computer in 1947!",
    "Coding tidbit: JavaScript was created in just 10 days by Brendan Eich in 1995.",
    "Developer humor: Why do programmers prefer dark mode? Because light attracts bugs!",
    "Web dev fact: The first website is still online at info.cern.ch",
    "Tech trivia: The first hard drive was created by IBM in 1956 and weighed over a ton!",
    "Binary bit: The word 'robot' comes from the Czech word 'robota', meaning forced labor.",
    "Computer science fact: The first 1GB hard disk drive was announced in 1980 and cost $40,000.",
    "Nerd nugget: The QWERTY keyboard was designed to slow typists down to avoid jamming old typewriters.",
    "Programming pun: There are 10 types of people in the world—those who understand binary and those who don’t.",
    "Code culture: The 'Hello, World!' program is traditionally the first thing beginners learn to print.",
    "Internet fact: Over 90% of the world’s currency exists only on computers—not in physical form.",
    "CS history: The first email was sent by Ray Tomlinson to himself in 1971.",
    "Open source fact: Linus Torvalds created Linux as a hobby while he was a student in Finland.",
    "Java joke: Java and JavaScript are as related as ham and hamster.",
    "Cloudy fact: The term 'cloud computing' originated from diagrams that represented the internet as a fluffy cloud.",
    "AI trivia: The Turing Test, proposed by Alan Turing in 1950, measures a machine's ability to exhibit intelligent behavior.",
    "Fun fact: The Space Shuttle had less computing power than a modern smartphone.",
    "Retro tech: Floppy disks were once considered high-capacity storage!",
    "Web fact: HTML stands for HyperText Markup Language and was first introduced in 1993."
];
  

let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount = parseInt(visitorCount) + 1;
localStorage.setItem('visitorCount', visitorCount);

window.addEventListener('load', () => {
    typeWriter(nameElement, originalName, 100);
    
    const funFactElement = document.getElementById('funFact');
    funFactElement.textContent = funFacts[Math.floor(Math.random() * funFacts.length)];
  
    const visitorElement = document.getElementById('visitorCount');
    visitorElement.innerHTML = `You've visited this page ${visitorCount} time${visitorCount > 1 ? 's' : ''}. ${visitorCount > 5 ? "You must really like me! 😊" : "Thanks for stopping by! 👋"}`;
});

window.addEventListener('orientationchange', () => {
    if (skillsSection.style.display === 'block') {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = bar.getAttribute('data-percent') + '%';
            }, 100);
        });
    }
});

let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
let touchStartY = 0;
let touchStartX = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        checkKonamiCompletion();
    } else {
        konamiIndex = 0;
    }
});

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    const diffY = touchStartY - touchEndY;
    const diffX = touchStartX - touchEndX;
    const threshold = 50;
  
    if (Math.abs(diffY) > Math.abs(diffX)) {
        if (diffY > threshold) {
            processTouch('ArrowUp');
        } else if (diffY < -threshold) {
            processTouch('ArrowDown');
        }
    } else {
        if (diffX > threshold) {
            processTouch('ArrowLeft');
        } else if (diffX < -threshold) {
            processTouch('ArrowRight');
        }
    }
});

let lastTap = 0;
document.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
  
    if (tapLength < 300 && tapLength > 0) {
        if (konamiIndex === 8) {
            processTouch('b');
        } else if (konamiIndex === 9) {
            processTouch('a');
        }
    }
  
    lastTap = currentTime;
});

function processTouch(direction) {
    if (direction === konamiCode[konamiIndex]) {
        konamiIndex++;
        checkKonamiCompletion();
    } else {
        konamiIndex = 0;
    }
}

function checkKonamiCompletion() {
    if (konamiIndex === konamiCode.length) {
        document.body.style.background = 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradient 15s ease infinite';
    
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);
    
        alert("🎮 You found the secret code! You're a true developer!");
        konamiIndex = 0;
    }
}

const metaViewport = document.querySelector('meta[name="viewport"]');
if (!metaViewport) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
}