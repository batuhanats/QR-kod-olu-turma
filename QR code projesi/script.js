const data = document.querySelector("#text");  //textarea
const qrCode = document.querySelector("#qrCode");  //kodun olduğu img
const qrGenerator = document.querySelector("#qrGenerator");  //button

const url = "https://api.qrserver.com/v1/create-qr-code/";

qrGenerator.addEventListener("click", () => {
    const size = `350x350`
    qrCode.src = `${url}?/size=${size}&data=${data.value}`

    if (data.value == "") {
        qrCode.src = "./QR_img.png";

    }

});
