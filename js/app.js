const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('custom-hamburger');
    const menu = document.getElementById('mobileMenu');

    // Düyməyə klikləyəndə menyunu aç/bağla
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation(); // Klikin sənədə yayılmasını dayandırır
        menu.classList.toggle('show');
    });

    // Ekranın hər hansı başqa yerinə klikləyəndə menyu bağlansın
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});