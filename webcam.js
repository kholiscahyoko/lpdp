Webcam.set({
  width: 320,
  height: 240,
  image_format: "jpeg",
  jpeg_quality: 90,
});
Webcam.attach("#my_camera");

function preview_snapshot() {
  // freeze kamera
  Webcam.freeze();

  // persiapan button
  document.getElementById("pre_take_buttons").style.display = "none";
  document.getElementById("post_take_buttons").style.display = "";
}

function cancel_preview() {
  // batalkan pembekuan  dan kembali balik ke kamera langsung
  Webcam.unfreeze();

  // penukaran button kembali (intinya buat button balik photo lagi)
  document.getElementById("pre_take_buttons").style.display = "";
  document.getElementById("post_take_buttons").style.display = "none";
}

function save_photo() {
  // fungsi penyimpanan photo ke database
  Webcam.snap(function (data_uri) {
    // hasil photo
    document.getElementById("results").innerHTML = "<h2>Here is your image:</h2>" + '<img src="' + data_uri + '"/>';

    // swap button kembali
    document.getElementById("pre_take_buttons").style.display = "";
    document.getElementById("post_take_buttons").style.display = "none";
  });
}