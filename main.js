window.onload = function () {
    // Standard Tizen remote control exit key support
    window.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    function updateClock() {
        const now = new Date();

        // Format Time (HH:MM:SS)
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

        // Format Date (e.g., Monday, January 1, 2026)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
    }

    // Run clock immediately, then update every 1 second
    updateClock();
    setInterval(updateClock, 1000);
};
