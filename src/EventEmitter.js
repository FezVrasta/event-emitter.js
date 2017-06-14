/**
 * Event Emitter
 */
class EventEmitter {
    /**
     * Constructor
     */
    constructor() {
        this._events = new Map();

        // Aliases
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
    }

    /**
     * Emit a new event
     *
     * @param {String} type
     * @param {...} args
     */
    emit(name, ...args) {
        if (!this._events.has(name)) {
            return;
        }

        this._events.get(name).forEach(callback => callback(...args));
    }

    /**
     * Add a listener
     *
     * @param {String} name
     * @param {Function} callback
     */
    addEventListener(name, callback) {
        if (!this._events.has(name)) {
            this._events.set(name, new Set([callback]));
        } else {
            this._events.get(name).add(callback);
        }
    }

    /**
     * Remove a listener
     *
     * @param {String} name
     * @param {Function} callback
     */
    removeEventListener(name, callback) {
        if (!this._events.has(name)) {
            return;
        }

        const callbacks = this._events.get(name);

        callbacks.delete(callback);

        if (callbacks.size === 0) {
            this._events.delete(name);
        }
    }
}

export default EventEmitter;
