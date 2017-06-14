const EventEmitter = require('./dist/tom32i-event-emitter.js');

/**
 * Player
 */
class Player extends EventEmitter {
    constructor() {
        super();

        this.alive = true;
    }

    /**
     * Emit and event on death
     */
    die() {
        this.alive = false;

        // Emitting an event:
        this.emit('die', this, 'bar');
    }
}

var player = new Player();

function onDie(player, comment) {
    console.log('player die', player, comment);
}

// Adding a listener
player.on('die', onDie);  // "on" is an alias of "addEventListener"

player.die();

// Removing a listener
player.off('die', onDie); // "off" is an alias of "removeEventListener"

player.die();
