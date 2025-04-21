const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')){
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

if (localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

const profilePic = document.getElementById('profilePic');
profilePic.addEventListener('click', () => {
    profilePic.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        profilePic.style.transform = 'rotate(0deg)';
    }, 1000);
});

const showSkillsBtn = document.getElementById('showSkills');
const skillsSection = document.getElementById('skillsSection');

showSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'block') {
        skillsSection.style.display = 'none';
        showSkillsBtn.textContent = 'Show My Skills';
    } else {
        skillsSection.style.display = 'block';
        showSkillsBtn.textContent = 'Hide My Skills';
        
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
          setTimeout(() => {
            bar.style.width = bar.getAttribute('data-percent') + '%';
          }, 200);
        });
    }
});

function typeWriter(element, text, speed = 100){
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

window.addEventListener('load', () => {
    typeWriter(nameElement, originalName, 100);

    const funFacts = [
        "Did you know? The first computer bug was an actual bug - a moth trapped in a Harvard Mark II computer in 1947.",
        "Fun fact: The term 'debugging' came from removing an actual moth from a computer in 1947!",
        "Coding tidbit: JavaScript was created in just 10 days by Brendan Eich in 1995.",
        "Developer humor: Why do programmers prefer dark mode? Because light attracts bugs!",
        "Web dev fact: The first website is still online at info.cern.ch",
        "VTuber fun fact: Shirakami Fubuki from Hololive once went viral for singing 'Scatman' live on stream—earning her the nickname 'Scatfox' among fans!"
    ];

    const funFactElement = document.createElement('p');
    funFactElement.style.fontSize = '12px';
    funFactElement.style.fontStyle = 'italic';
    funFactElement.style.marginTop = '20px';
    funFactElement.style.padding = '10px';
    funFactElement.style.borderRadius = '5px';
    funFactElement.style.backgroundColor = 'rgba(255,255,255,0.1)';

    funFactElement.textContent = funFacts[Math.floor(Math.random() * funFacts.length)];

    document.querySelector('.profile-container').appendChild(funFactElement);
});

const socialBtns = document.querySelectorAll('.social-btn');
const socialEmojis = ['📸', '👥', '📱', '🐦', '🎵', '💼'];

socialBtns.forEach((btn, index) => {
    const originalText = btn.textContent;

    btn.addEventListener('mouseenter', () => {
        btn.textContent = `${socialEmojis[index]} ${originalText}`;
        btn.style.transform = 'translateY(-3px)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.textContent = originalText;
        btn.style.transform = 'translateY(0)';
    });
});

let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount = parseInt(visitorCount) + 1;
localStorage.setItem('visitorCount', visitorCount);

const footer = document.createElement('p');
footer.innerHTML = `You've visited this page ${visitorCount} time${visitorCount > 1 ? 's' : ''}. ${visitorCount > 5 ? "You must really like me! 😊" : "Thanks for stopping by! 👋"}`;
footer.style.fontSize = '12px';
footer.style.marginTop = '20px';
footer.style.opacity = '0.7';
document.querySelector('.profile-container').appendChild(footer);

let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
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
    } else{
        konamiIndex = 0;
    }
});