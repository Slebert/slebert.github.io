function bgRandColor() {
    var rand24 = Math.round(0xffffff * Math.random());
    document.querySelector(':root').style.setProperty('--color1',(rand24 >> 16)+','+(rand24 >> 8 & 255)+','+(rand24 & 255));
};
