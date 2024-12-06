const { EventEmitter } = require('events');

class TicketManager extends EventEmitter {
    constructor(ticketCount) {
        super();
        this.ticketCount = ticketCount;
    }
    buy(email, price) {
        if (this.ticketCount > 0) {
            this.ticketCount--;
            this.emit('buyTicket', email, price)
        } else {
            this.emit('NoTicketAvailable', email,new Error('There are No More tickets to book'))
        }
    }
}
module.exports = TicketManager;