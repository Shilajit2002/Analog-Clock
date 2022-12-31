let span = document.body.getElementsByTagName("span");

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;

    seconds.style.transform = `rotate(${srotation}deg)`;

    if (htime > 12) {
        let temp = htime - 12;
        span[temp - 1].firstElementChild.style.backgroundColor = "#a7119f";
        span[temp - 1].firstElementChild.style.color = "white";
    }
    else {
        span[htime - 1].firstElementChild.style.backgroundColor = "#a7119f";
        span[htime - 1].firstElementChild.style.color = "white";
    }
}, 1000);