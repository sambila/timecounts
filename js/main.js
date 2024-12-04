// Feature detection
const features = {
    webWorker: 'Worker' in window,
    notifications: 'Notification' in window,
    blob: 'Blob' in window
};

// Initialize notification manager
const notificationManager = new NotificationManager();

// Initialize Web Worker
let worker;
if (features.webWorker && features.blob) {
    try {
        const blob = new Blob([document.querySelector('#worker-script').textContent], { 
            type: 'text/javascript' 
        });
        worker = new Worker(URL.createObjectURL(blob));
        setupWorkerHandlers();
    } catch (error) {
        console.error('Could not initialize worker:', error);
        fallbackToInterval();
    }
}

function setupWorkerHandlers() {
    worker.onmessage = function(event) {
        const station = stations.find(s => s.id === event.data.id);
        if (station) {
            station.time = event.data.time;
            updateStationDisplay(station);
            checkAlerts(station);
        }
    };

    worker.onerror = function(error) {
        console.error('Worker error:', error);
        fallbackToInterval();
    };
}

function checkAlerts(station) {
    if (station.time === 300 && !station.alertPlaying) { // 5 minutes warning
        playAlert(station.sound);
        station.alertPlaying = true;
        
        notificationManager.notify(
            `${station.name} - 5 minutes remaining`,
            {
                body: 'Time is almost up!',
                requireInteraction: true
            }
        );
    }
    
    if (station.time <= 0) {
        stopStation(station.id);
        notificationManager.notify(
            `${station.name} - Time's up`,
            {
                body: 'The timer has ended!',
                requireInteraction: true
            }
        );
    }
}

function updateStationDisplay(station) {
    const display = document.querySelector(`#station-${station.id} .timer-display`);
    if (display) {
        const minutes = Math.floor(station.time / 60);
        const seconds = station.time % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function startStation(id, duration) {
    if (worker) {
        worker.postMessage({ type: 'start', id, duration });
    }
}

function stopStation(id) {
    if (worker) {
        worker.postMessage({ type: 'stop', id });
    }
}

function playAlert(sound) {
    try {
        const audio = new Audio(sound);
        audio.play();
    } catch (error) {
        console.error('Could not play alert sound:', error);
    }
}

// Fallback for browsers without Worker support
function fallbackToInterval() {
    console.log('Using fallback interval timer');
    // Implementation of fallback timer logic
}
