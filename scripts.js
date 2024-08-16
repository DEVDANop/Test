document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spinbutton');
    const result = document.getElementById('result');

    spinButton.addEventListener('click', function() {
        const discounts = [10, 20, 30, 40, 50]; // Descuentos en porcentaje
        const randomIndex = Math.floor(Math.random() * discounts.length);
        const discount = discounts[randomIndex];
        result.innerText = `¡Felicidades! Has ganado un ${discount}% de descuento.`;
    });
});
