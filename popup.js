// Get the modal
var modal = document.getElementById("myModal");
var modalWebcam = document.getElementById("myModalWebcam");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
//class name info-hotspot-text
var infoHotspotEls = document.getElementsByClassName("info-hotspot-text");

var information = function () {
    modal.style.display = "block";
    modalImg.src = 'tiles/0-lobby-area-view-1/1/b/0/0.jpg';
}

var webcamPopup = function () {
    modalWebcam.style.display = "block";
    // modalImg.src = 'tiles/0-lobby-area-view-1/1/b/0/0.jpg';
}

for (var i = 0; i < infoHotspotEls.length; i++) {
    if (infoHotspotEls[i].innerHTML == "Information Tentang LPDP") {
        infoHotspotEls[i].addEventListener('click', information, false);
    } else if (infoHotspotEls[i].innerHTML == "Aktif Kamera Depan") {
        infoHotspotEls[i].addEventListener('click', webcamPopup, false);
    }
}

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

function map() {
    modal.style.display = "block";
    modalImg.src = 'tiles/0-lobby-area-view-1/1/b/0/0.jpg';
}

function dashBoard() {
    modal.style.display = "block";
    modalImg.src = 'tiles/1-lobby-area-view-2/2/d/1/1.jpg';
}

function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById('results').innerHTML =
            '<img src="' + data_uri + '"/>';
    });
}