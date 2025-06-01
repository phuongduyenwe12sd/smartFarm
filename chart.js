// Tạo dữ liệu ban đầu cho mỗi biểu đồ
const nhietdoData = [];
const doamData = [];
const dosangData = [];
const doamdatData = [];

// Hàm tạo biểu đồ với CanvasJS
function createChart(containerId, title, dataPoints) {
    return new CanvasJS.Chart(containerId, {
        title: { text: title },
        axisY: { includeZero: false },
        data: [{
            type: "line",
            dataPoints: dataPoints,
        }, ],
    });
}

// Khởi tạo bốn biểu đồ riêng biệt
const nhietdoChart = createChart("nhietdoChart", "Nhiệt độ (°C)", nhietdoData);
const doamChart = createChart("doamChart", "Độ ẩm (%)", doamData);
const dosangChart = createChart("dosangChart", "Độ sáng (LUX)", dosangData);
const doamdatChart = createChart("doamdatChart", "Độ ẩm đất (%)", doamdatData);

// Hàm cập nhật dữ liệu cho biểu đồ
function updateChart(chart, dataPoints, value) {
    const currentTime = new Date().toLocaleTimeString();

    // Không giới hạn điểm dữ liệu
    dataPoints.push({ label: currentTime, y: value });

    chart.render(); // Vẽ lại biểu đồ
}

// Lấy dữ liệu từ Firebase và cập nhật biểu đồ
function updateSensorData() {
    firebase
        .database()
        .ref("Nhiet do")
        .on("value", (snap) => {
            updateChart(nhietdoChart, nhietdoData, snap.val());
        });

    firebase
        .database()
        .ref("Do am")
        .on("value", (snap) => {
            updateChart(doamChart, doamData, snap.val());
        });

    firebase
        .database()
        .ref("Do sang")
        .on("value", (snap) => {
            updateChart(dosangChart, dosangData, snap.val());
        });

    firebase
        .database()
        .ref("Do am dat")
        .on("value", (snap) => {
            updateChart(doamdatChart, doamdatData, snap.val());
        });
}

// Gọi hàm để bắt đầu cập nhật dữ liệu
updateSensorData();