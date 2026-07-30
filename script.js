// ===== LOADER - FASTER =====
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loaderWrapper");
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    }, 400);

    loadVideos();

    // Force hero video to play
    const heroVideo = document.querySelector('.hero-bg-video');
    if (heroVideo) {
        heroVideo.play().catch(() => {});
    }
});

// ===== PROGRESS BAR =====
window.addEventListener("scroll", () => {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
});

// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

// ===== TOAST =====
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

document.getElementById('closeToast')?.addEventListener('click', () => {
    document.getElementById('toast').classList.remove('show');
});

// ===== LAZY LOAD & SMART PERFORMANCE VIDEO ENGINE =====
function loadVideos() {
    const videos = document.querySelectorAll('video');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                const dataSrc = video.getAttribute('data-src');

                if (dataSrc) {
                    let source = video.querySelector('source');
                    if (!source) {
                        source = document.createElement('source');
                        source.type = 'video/mp4';
                        video.appendChild(source);
                    }
                    source.src = dataSrc;
                    video.removeAttribute('data-src');
                    video.load();
                }

                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            video.classList.add('is-playing');
                        })
                        .catch(err => {
                            console.log('Autoplay prevented:', err);
                        });
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }, { rootMargin: '200px 0px' });

    videos.forEach(video => observer.observe(video));
}

// ===== SERVICE CARD CLICK =====
document.querySelectorAll('.service-card-click').forEach(card => {
    card.addEventListener('click', (e) => {
        const targetId = card.getAttribute('data-target');
        if (targetId) {
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== HERO BUTTONS =====
document.getElementById("startProjectBtn")?.addEventListener("click", () => {
    document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("viewWorkBtn")?.addEventListener("click", () => {
    document.getElementById("video-editing")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("workWithUsBtn")?.addEventListener("click", () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== NAV LINKS SMOOTH SCROLL + HAMBURGER CLOSE =====
const navLinks = document.querySelectorAll('.nav-link');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinksContainer = document.getElementById('navLinks');

function closeMenu() {
    navLinksContainer.classList.remove('open');
    hamburgerBtn.classList.remove('active');
}

hamburgerBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinksContainer.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu();
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (navLinksContainer.classList.contains('open') &&
        !navLinksContainer.contains(e.target) &&
        e.target !== hamburgerBtn &&
        !hamburgerBtn.contains(e.target)) {
        closeMenu();
    }
});

// ===== PRICING CTA → WHATSAPP =====
const whatsappUrl = "https://wa.me/923222664348?text=Hi%20Clipzen%20Studio%2C%20I%20want%20to%20start%20a%20project";
document.querySelectorAll(".pricing-cta").forEach(btn => {
    btn.addEventListener("click", () => {
        window.open(whatsappUrl, "_blank");
    });
});

// ===== CONTACT FORM → EMAILJS =====

emailjs.init("ekuskUcrGiLPmY7gR");

document.getElementById("contactForm")?.addEventListener("submit", function (e) {

    e.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

  emailjs.send(
    "service_eok6jfi",
    "template_4v79htw",
    templateParams
)
    .then(() => {
        showToast();
        document.getElementById("contactForm").reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Email sending failed!");
    });

});