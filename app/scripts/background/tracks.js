let tracks;

const isTrackableWebsite = (name) => {
    if (Object.keys(trackableWebsites).includes(name)) {
        return true;
    }
    console.error(`This website ${name} is not tracked`)
}

const addTrack = (name) => {
    if (tracks[name] || !isTrackableWebsite(name)) return;
    tracks[name] = {
        today: 0,
        total: 0,
        startDate: (new Date()).toISOString(),
        lastUsedDate: (newDate()).toISOString(),
    }
}

export const updateTime = (name) => {
    if (!tracks[name]) {
        addTrack(name)
    }
    if (!isTrackableWebsite(name)) {
        return;
    }

    tracks[name].today = tracks[name].today + 1;
    tracks[name].total = tracks[name].total + 1;

    saveToLocalStorage();
}

const saveToLocalStorage = () => {
    chrome.storage.sync.set({tracks})
}


export const get = (name) => {
    if (!isTrackableWebsite(name)) {
        return;
    }
    return tracks[name]
}