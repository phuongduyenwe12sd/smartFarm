// Hàm để thay đổi trạng thái nút On/Off
function toggleButton(button) {
    if (button.classList.contains("on")) {
        button.classList.remove("on");
        button.classList.add("off");
        button.querySelector(".toggle-text").innerText = "Off";
        return 0; // Trả về trạng thái tắt
    } else {
        button.classList.remove("off");
        button.classList.add("on");
        button.querySelector(".toggle-text").innerText = "On";
        return 1; // Trả về trạng thái bật
    }
}

// Lấy các phần tử nút từ HTML
const tuoiBtn = document.getElementById("tuoi");
const denBtn = document.getElementById("den");
const quatBtn = document.getElementById("quat");
const maicheBtn = document.getElementById("maiche");

// Sự kiện nhấn nút Bơm
tuoiBtn.addEventListener("click", () => {
    const isOn = toggleButton(tuoiBtn);
    firebase.database().ref("Thiet bi/Tuoi").set(isOn);
});

// Sự kiện nhấn nút Đèn
denBtn.addEventListener("click", () => {
    const isOn = toggleButton(denBtn);
    firebase.database().ref("Thiet bi/Den").set(isOn);
});

// Sự kiện nhấn nút Quạt
quatBtn.addEventListener("click", () => {
    const isOn = toggleButton(quatBtn);
    firebase.database().ref("Thiet bi/Quat").set(isOn);
});

// Sự kiện nhấn nút Mái che
maicheBtn.addEventListener("click", () => {
    const isOn = toggleButton(maicheBtn);
    firebase.database().ref("Thiet bi/Mai che").set(isOn);
});