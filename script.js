// Функція для оновлення годинника
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Оновлюємо годинник щосекунди
setInterval(updateClock, 1000);
updateClock(); // Запускаємо відразу при завантаженні

// Функція для обробки натискань меню
function handleMenuClick(buttonName) {
    const statusBox = document.getElementById('status-message');
    
    // Спеціальна логіка для погоди (приклад із завдання)
    if (buttonName === 'Погода') {
        alert('Тут буде погода, натисніть щоб оновити');
        statusBox.innerText = `Ви натиснули: ${buttonName} (Очікуємо підключення API)`;
    } else {
        statusBox.innerText = `Ви натиснули кнопку: ${buttonName}`;
    }
}
