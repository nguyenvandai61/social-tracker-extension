let timer = null;

export const start = (doOnTick) => {
    if (timer) {
        return;
    }
    timer = setInterval(doOnTick, 1000)
}

export const stop = () => {
    clearInterval(timer);
    timer = null;
}