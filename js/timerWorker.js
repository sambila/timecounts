let timers = new Map();

self.onmessage = function(event) {
    const { type, id, duration } = event.data;
    
    switch(type) {
        case 'start':
            startTimer(id, duration);
            break;
        case 'stop':
            stopTimer(id);
            break;
        case 'pause':
            pauseTimer(id);
            break;
        default:
            console.error('Unknown timer command:', type);
    }
};

function startTimer(id, duration) {
    stopTimer(id);
    
    let timeLeft = duration;
    const interval = setInterval(() => {
        timeLeft--;
        self.postMessage({ id, time: timeLeft });
        
        if (timeLeft <= 0) {
            stopTimer(id);
        }
    }, 1000);
    
    timers.set(id, { interval, timeLeft });
}

function stopTimer(id) {
    const timer = timers.get(id);
    if (timer) {
        clearInterval(timer.interval);
        timers.delete(id);
    }
}

function pauseTimer(id) {
    const timer = timers.get(id);
    if (timer) {
        clearInterval(timer.interval);
        timers.set(id, { ...timer, interval: null });
    }
}