// ============================================================
// 1. HORLOGE EN TEMPS RÉEL
// ============================================================
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeStr = `${hours}:${minutes}:${seconds}`;
    
    const timeDisplay = document.getElementById('timeDisplay');
    if (timeDisplay) {
        timeDisplay.textContent = timeStr;
    }
}

// Mise à jour toutes les secondes
updateClock();
setInterval(updateClock, 1000);

// ============================================================
// 2. COMPTEUR DE VISITES (avec localStorage)
// ============================================================
function updateVisitorCount() {
    let count = localStorage.getItem('hma_visitor_count');
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count, 10);
    }
    count += 1;
    localStorage.setItem('hma_visitor_count', count);
    
    const visitorSpan = document.getElementById('visitorCount');
    if (visitorSpan) {
        visitorSpan.textContent = count;
    }
}
updateVisitorCount();

// ============================================================
// 3. EFFET DE TYPING SUR LE TITRE (au chargement)
// ============================================================
function typeEffect() {
    const titleEl = document.getElementById('title');
    if (!titleEl) return;
    
    const originalText = titleEl.textContent;
    titleEl.textContent = '';
    
    let index = 0;
    const interval = setInterval(() => {
        if (index < originalText.length) {
            titleEl.textContent += originalText.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 80);
}

// On attend un peu que la page soit bien chargée
setTimeout(typeEffect, 600);

// ============================================================
// 4. SURVOL DU LOGO : changement de texte du badge
// ============================================================
const logo = document.getElementById('logo');
const badgeText = document.getElementById('badgeText');

if (logo && badgeText) {
    const originalBadgeText = badgeText.textContent;
    
    logo.addEventListener('mouseenter', () => {
        badgeText.textContent = '✨ HMA Studio';
        document.getElementById('badge').style.background = 'rgba(232, 93, 4, 0.18)';
    });
    
    logo.addEventListener('mouseleave', () => {
        badgeText.textContent = originalBadgeText;
        document.getElementById('badge').style.background = 'rgba(232, 93, 4, 0.08)';
    });
}

// ============================================================
// 5. ANIMATION D'APPARITION DES NOUVEAUX ÉLÉMENTS (clock & counter)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const clock = document.querySelector('.clock');
    const counter = document.querySelector('.visitor-counter');
    
    if (clock) {
        clock.style.opacity = '0';
        clock.style.transform = 'translateY(10px)';
        setTimeout(() => {
            clock.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            clock.style.opacity = '1';
            clock.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (counter) {
        counter.style.opacity = '0';
        counter.style.transform = 'translateY(10px)';
        setTimeout(() => {
            counter.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            counter.style.opacity = '1';
            counter.style.transform = 'translateY(0)';
        }, 500);
    }
});

console.log('✨ HMA — Espace réservé chargé avec élégance.');