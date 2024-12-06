const EmailService = require('./email_service')
const TicketManager = require('./ticket_manager')

const emailService = new EmailService();
const ticketManager = new TicketManager(2);

ticketManager.on('buyTicket', (email, price) => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`${email} booked ticket with price: Rs.${price}, at ${currentTime}`);
    emailService.sendEmail(email);
})
ticketManager.on('NoTicketAvailable', (email, err) => {
    console.log('Something went wrong');
    emailService.sendEmail(email);
})

ticketManager.buy('aaa@gmail.com', 300);
ticketManager.buy('bbb@gmail.com', 200);
ticketManager.buy('ccc@gmail.com', 400);