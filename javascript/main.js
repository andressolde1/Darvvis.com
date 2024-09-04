document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
});
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item, index) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        
        // Inicialmente, todas las respuestas están colapsadas
        item.classList.remove("expanded");
        item.style.maxHeight = "60px"; // Ajusta la altura para mostrar solo la pregunta

        question.addEventListener("click", () => {
            if (item.classList.contains("open")) {
                item.style.maxHeight = "60px"; // Colapsa la pregunta
                item.classList.remove("open");
            } else {
                // Colapsa las otras preguntas abiertas
                faqItems.forEach(i => {
                    i.style.maxHeight = "60px";
                    i.classList.remove("open");
                });

                item.style.maxHeight = item.scrollHeight + "px"; // Expande la pregunta
                item.classList.add("open");
            }
        });
    });
});

document.querySelectorAll('.logo .letter').forEach(letter => {
    letter.addEventListener('mouseenter', () => {
        letter.style.transform = 'scale(1.5)';
    });
    letter.addEventListener('mouseleave', () => {
        letter.style.transform = 'scale(1)';
    });
});


let body = document.querySelector("body");
let botonColorMode = document.querySelector(".color-mode");
botonColorMode.addEventListener("click",() => {
    body.classList.toggle("dark-mode");
})

document.getElementById('language').addEventListener('click', function() {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/en/')) {
        // Redirige a la versión en español
        window.location.href = '../index.html';
    } else {
        // Redirige a la versión en inglés
        window.location.href = 'en/index.html';
    }
});

// Cargar el idioma correcto en función de la URL
window.onload = function() {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/en/')) {
        document.documentElement.lang = 'en';
    } else {
        document.documentElement.lang = 'es';
    }
};
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    let interval;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Botones de control manual
    nextButton.addEventListener('click', function() {
        nextTestimonial();
        resetInterval();
    });

    prevButton.addEventListener('click', function() {
        prevTestimonial();
        resetInterval();
    });

    // Cambio automático de testimonios cada 5 segundos
    function startInterval() {
        interval = setInterval(nextTestimonial, 5000);
    }

    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }

    startInterval(); // Inicia el cambio automático
    showTestimonial(currentIndex); // Muestra el primer testimonio
});
function toggleChatForm() {
    const chatFormContainer = document.querySelector('.chat-form-container');
    const chatButton = document.querySelector('.chat-button');
    
    if (chatFormContainer.style.display === "none" || chatFormContainer.style.display === "") {
        chatFormContainer.style.display = "block";
        chatButton.style.maxHeight = "600px"; // Ajusta según el contenido del formulario
    } else {
        chatFormContainer.style.display = "none";
        chatButton.style.maxHeight = "200px"; // Restablece a la altura inicial
    }
}

function minimizeChat() {
    document.getElementById('chatBox').style.display = 'none';
    document.getElementById('chatMinimized').style.display = 'flex';
}

function maximizeChat() {
    document.getElementById('chatBox').style.display = 'block';
    document.getElementById('chatMinimized').style.display = 'none';
}


document.querySelector('.scroll-down a').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
    });
});


document.addEventListener('mousemove', function(event) {
    const eyes = document.querySelectorAll('.eye');
    
    eyes.forEach(eye => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
        const distance = 10; // Distancia de movimiento de los ojos
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
