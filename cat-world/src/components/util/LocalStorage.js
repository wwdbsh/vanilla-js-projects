export const setItem = (key, value) => {
    if(key === undefined || value === undefined){
        return;
    }
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
};