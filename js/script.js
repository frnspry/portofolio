// Skrip untuk mengelola tab
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Skrip untuk mengelola formulir dan pesan
const scriptURL = 'https://script.google.com/macros/s/AKfycbww6jbK_v-QCZVOH8tpDjdLzG2D7gYKitCHAu4Gtfe8j5qckGmGIJHjLk1R3IeWDQ/exec';
const form = document.querySelector('.submit-to-google-sheet');
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
