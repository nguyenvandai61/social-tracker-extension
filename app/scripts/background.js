let ports = [];

const updateTime = () => {
    console.log(`${ports.length} ports recently open`);
    const activePortsSet = [...new Set(ports.filter(p => p.isActive).map(p => p.name))];
    activePortsSet.forEach(tracks.updateTime);
    sentToAllActivePorts();
}
const sendToAllActivePorts = () => {
    ports.filter(p => p.isActive).map(port => {
        port.postMessage({
            action: 'UPDATE_TIME',
            payload: tracks.get(port.name)
        })
    })
}


chrome.runtime.onConnect.addListener(port => {
    ports.push(port);
    port.isActive = null;
    
    port.onMessage.addListener(message => {
        if (message.action === 'SET_ACTIVE') {
            port.isActive = message.payload;
            // If there are active ports, then we enable the timer, or else disable it
            if (ports.filter(p => p.isActive).length) {
                timer.start(updateTime);
            } else {
                timer.stop();
            }
        }
        else if (message.action === 'GET_TIME') {
            sendToAllActivePorts();
        }
    }) 
})