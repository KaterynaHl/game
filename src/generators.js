function* colorGenerator() {
    const colors = ["red", "green", "blue", "yellow"];
let index = 0;
while (true) {
    yield colors [index % colors.length];
    index++;
}
}

function consumeWithTimeout(iterator, timeoutSeconds = 3) {
    const start = Date.now();

    while (Date.now() - start < timeoutSeconds * 1000) {
        const next = iterator.next();
        if (next.done) break;
        console.log ("Отримано: ", next.value)
    }

    console.log ("Таймаут завершено.")
}

// експорт функцій, щоб використовувати в інших модулях
module.exports = {
    colorGenerator,
    consumeWithTimeout,
  };