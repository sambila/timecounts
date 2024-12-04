class NotificationManager {
    constructor() {
        this.permission = false;
        this.init();
    }

    async init() {
        if ('Notification' in window) {
            this.permission = await this.checkPermission();
            this.setupBanner();
        }
    }

    async checkPermission() {
        return Notification.permission === 'granted';
    }

    setupBanner() {
        const banner = document.getElementById('notification-banner');
        if (!this.permission && Notification.permission !== 'denied') {
            banner.style.display = 'block';
            banner.onclick = () => this.requestPermission();
        }
    }

    async requestPermission() {
        const permission = await Notification.requestPermission();
        this.permission = permission === 'granted';
        document.getElementById('notification-banner').style.display = 'none';
    }

    notify(title, options = {}) {
        if (this.permission) {
            options.icon = options.icon || 'https://sambila.net/logo.jpg';
            return new Notification(title, options);
        }
        return null;
    }
}