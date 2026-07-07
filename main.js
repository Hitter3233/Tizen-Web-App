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

        // Get hours, minutes, and seconds
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        // Calculate AM or PM marker
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert 24-hour time to 12-hour time
        hours = hours % 12;
        hours = hours ? hours : 12; // The hour '0' should be '12'
        
        // Keep hours as a string (uncomment the line below if you want '05:00' instead of '5:00')
        // hours = String(hours).padStart(2, '0');

        // Display the time with the AM/PM marker at the end
        document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

        // Format Date (e.g., Monday, January 1, 2026)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
    }

    // Run clock immediately, then update every 1 second
    updateClock();
    setInterval(updateClock, 1000);
};
