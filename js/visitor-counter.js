// Visitor Counter Service
window.visitorCounterService = {
    getVisitorCount: function() {
        let count = localStorage.getItem('visitorCount');
        if (!count) {
            count = 1;
        } else {
            count = parseInt(count) + 1;
        }
        localStorage.setItem('visitorCount', count);
        return count;
    },

    getStoredCount: function() {
        let count = localStorage.getItem('visitorCount');
        return count ? parseInt(count) : 0;
    },

    saveCountToFile: function(count) {
        // Create a visitor log entry
        const timestamp = new Date().toISOString();
        const logEntry = `Visitor #${count} - ${timestamp}\n`;
        
        // Try to save to IndexedDB as a fallback persistence mechanism
        const dbRequest = indexedDB.open('CrashStackDB', 1);
        
        dbRequest.onerror = function() {
            console.log('IndexedDB not available');
        };
        
        dbRequest.onsuccess = function(event) {
            const db = event.target.result;
            
            // Create object store if it doesn't exist
            if (!db.objectStoreNames.contains('visitors')) {
                db.createObjectStore('visitors', { keyPath: 'id', autoIncrement: true });
            }
        };
        
        dbRequest.onupgradeneeded = function(event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('visitors')) {
                db.createObjectStore('visitors', { keyPath: 'id', autoIncrement: true });
            }
        };
    }
};
