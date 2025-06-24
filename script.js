function playSound(animal) {
    const sound = document.getElementById(`${animal}-sound`);
    sound.currentTime = 0;
    sound.play();
    
    const image = document.getElementById(`${animal}-image`);
    image.style.transform = 'scale(1.1)';
    setTimeout(() => {
        image.style.transform = 'scale(1)';
    }, 300);
}

function checkAnswer(isCorrect) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const title = document.getElementById('popup-title');
    const message = document.getElementById('popup-message');
    
    if (isCorrect) {
        // Respuesta correcta (perro)
        popup.className = 'popup correct';
        title.textContent = '¡Respuesta Correcta!';
        message.textContent = 'Has seleccionado al perro. ¡Muy bien!';
    } else {
        // Respuesta incorrecta (gato)
        popup.className = 'popup incorrect';
        title.textContent = '¡Inténtalo de nuevo!';
        message.textContent = 'Seleccionaste al gato. La respuesta correcta es el perro.';
    }
    
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}