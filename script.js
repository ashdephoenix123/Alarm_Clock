let audio = new Audio('alarm.mp3');
// audio.loop = true;

document.getElementById("nos").addEventListener("change", (e) => {

    document.getElementsByTagName("button")[0].addEventListener("click", () => {
        if (e.target.value == "") {
            console.log("User didnt gave any input");
        } else {
            let i = e.target.value;
            document.getElementById("message").innerHTML = `Alarm will ring in ${i} seconds from now!`;
            setInterval(() => {
                if (i > "1") {
                    document.getElementById("message").innerHTML = `Alarm will ring in ${i - 1} seconds from now!`;


                } else {

                    document.getElementById("message").innerHTML = "<img src='Waveform.gif' alt='hbui' width='310px' height='90px'>"

                } i--;
            }, 1000)

            setTimeout(() => {
                if (typeof audio.loop == 'boolean') {
                    audio.loop = true;
                }
                else {
                    audio.addEventListener('ended', function () {
                        this.currentTime = 0;
                        this.play();
                    }, false);
                }

                audio.play();
                document.getElementById("show").hidden = false

            }, 1000 * e.target.value)
            // e.target.value = "";
            document.getElementById("nos").hidden = true;
            document.getElementsByTagName("button")[0].hidden = true;
            // document.getElementById("show").hidden = false
        }
    })

})
document.getElementsByTagName("button")[1].addEventListener("click", () => {
    audio.pause();
    // document.getElementById("message").innerHTML = " ";
    document.getElementsByTagName("button")[1].innerHTML = "Alarm Stopped"
});
document.getElementsByTagName("button")[2].addEventListener("click", () => {
    location.reload()
});



