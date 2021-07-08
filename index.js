function writeCards(name, eventName) {
    let cards = []
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
}

function countDown(countdown) {
    while (countdown > 0) {
        console.log(countdown);
        countdown -= 1
    }
    console.log(countdown);
}