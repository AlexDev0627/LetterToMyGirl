document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica de la Carta y Sobre ---
    const container = document.getElementById('container');
    const envelope = document.getElementById('envelope');
    const closeBtn = document.getElementById('close-letter');
    const letterMainText = document.getElementById('letter-main-text');
    const letterSignature = document.getElementById('letter-signature');
    const letter = document.querySelector('.letter');

    const fullText = 'En solo 30 días, has llenado mi vida de tanta alegría que a veces me cuesta asimilarlo. Me has enseñado a ver la vida de una forma más bonita, y cada día a tu lado es una nueva aventura que me emociona. Me encanta cómo me miras, la forma en que te ríes a carcajadas con mis tonterías, y cómo, con un simple gesto, logras que me sienta el hombre más afortunado del mundo. Quiero que sepas que me tienes pensando en ti todo el tiempo. Me despierto sonriendo porque sé que voy a hablar contigo, y me voy a dormir con ganas de que amanezca para verte de nuevo. Eres mi lugar seguro, mi paz, mi cómplice y mi mejor amiga. Este es solo el primer capítulo de nuestro libro, y estoy impaciente por leer las siguientes páginas contigo. Gracias por cada momento, cada sonrisa y por este mes maravilloso. Te quiero más de lo que las palabras pueden expresar. Feliz primer mes, mi amor.';
    let typeInterval;

    function typeWriter(text, i) {
        if (i < text.length) {
            letterMainText.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
            letter.scrollTop = letter.scrollHeight;
            typeInterval = setTimeout(() => {
                typeWriter(text, i + 1);
            }, 80);
        } else {
            letterMainText.innerHTML = text;
            letter.scrollTop = letter.scrollHeight;
            letterSignature.style.opacity = '1';
        }
    }

    function startTyping() {
        letterMainText.innerHTML = '';
        letterSignature.style.opacity = '0';
        clearTimeout(typeInterval);
        setTimeout(() => {
            typeWriter(fullText, 0);
        }, 600);
    }

    function resetLetter() {
        clearTimeout(typeInterval);
        letterMainText.innerHTML = '';
        letterSignature.style.opacity = '0';
        letter.scrollTop = 0;
    }

    envelope.addEventListener('click', function() {
        if (!container.classList.contains('open')) {
            container.classList.add('open');
            startTyping();
        }
    });

    closeBtn.addEventListener('click', function() {
        container.classList.remove('open');
        resetLetter();
    });

    // --- Lógica de la Galería (Fotos y Vídeos) ---
    const imageThumbnails = document.querySelectorAll('.thumbnail');
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    const closeLightbox = document.getElementById('close-lightbox');

    imageThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const largeImageUrl = thumbnail.src.replace('/100/100', '/800/600');
            lightboxImage.src = largeImageUrl;
            lightboxImage.style.display = 'block';
            lightbox.classList.remove('hidden');
        });
    });

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoSrc = thumbnail.getAttribute('data-video-src');
            lightboxVideo.src = videoSrc;
            lightboxVideo.style.display = 'block';
            lightboxVideo.play();
            lightbox.classList.remove('hidden');
        });
    });

    function hideLightbox() {
        lightbox.classList.add('hidden');
        lightboxVideo.pause();
        lightboxVideo.src = "";
        lightboxImage.style.display = 'none';
        lightboxVideo.style.display = 'none';
    }

    closeLightbox.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    // --- Lógica para el mensaje de Scroll ---
    const scrollPrompt = document.querySelector('.scroll-prompt');
    setTimeout(() => {
        scrollPrompt.classList.add('visible');
    }, 30000);

    // --- Lógica del Contador Regresivo ---
<<<<<<< HEAD
    const countdownDate = new Date("2025-09-17T00:00:00").getTime();
=======
    const countdownDate = new Date("2025-10-17T00:00:00").getTime();
>>>>>>> b5c1e4d (Actualizacion de contador)

    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
<<<<<<< HEAD
            document.getElementById('countdown-timer').innerHTML = "¡Felices 2 meses, mi amor!";
=======
            document.getElementById('countdown-timer').innerHTML = "¡Felices 3 meses, mi amor!";
>>>>>>> b5c1e4d (Actualizacion de contador)
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.innerHTML = days;
        hoursSpan.innerHTML = hours;
        minutesSpan.innerHTML = minutes;
        secondsSpan.innerHTML = seconds;
    }

    // Actualizar el contador cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Llamar una vez al inicio para mostrar el contador inmediatamente
    updateCountdown();
});
