function bgRandColor() {
    var rand24 = Math.random() * 0x1000000;
    document.querySelector(':root').style.setProperty('--color1',(rand24 >> 0x10)+','+(rand24 >> 0x08 & 0xFF)+','+(rand24 & 0xFF));
};
