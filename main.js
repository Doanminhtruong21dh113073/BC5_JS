

function calculateScore() {
    // Lấy giá trị nhập từ giao diện
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var diemA = parseFloat(document.getElementById("diemA").value);
    var diemB = parseFloat(document.getElementById("diemB").value);
    var diemC = parseFloat(document.getElementById("diemC").value);
  
    // Tính điểm tổng
    var diemTong = diemA + diemB + diemC;
  
    // Áp dụng điểm ưu tiên khu vực và đối tượng
    if (khuVuc == "A") {
      diemTong += 2.0;
    } else if (khuVuc == "B") {
      diemTong += 1.0;
    } else if (khuVuc == "C") {
      diemTong += 0.5;
    }
  
    if (doiTuong == 1) {
      diemTong += 2.5;
    } else if (doiTuong == 2) {
      diemTong += 1.5;
    } else if (doiTuong == 3) {
      diemTong += 1;
    }
  
    // Kiểm tra xem có đủ điểm để trúng tuyển không
    if (diemTong >= diemChuan) {
      document.getElementById("ketQua").innerHTML = "Chúc mừng bạn đã trúng tuyển!";
    } else {
      document.getElementById("ketQua").innerHTML = "Rất tiếc, lew lew rớt rồi buồn hong ";
    }
  }
  ///////////////////////////////////////////////////////////////////
  

  ///////////////////////////////////////////////////////////////////////////////////////////


  function tinhTienDien() {
    var ten = document.getElementById("name").value;
    var kw = document.getElementById("kw").value;
    var tien = 0;
  
    if (kw <= 50) {
      tien = kw * 50;
    } else if (kw <= 100) {
      tien = 50 * 50 + (kw - 50) * 650;
    } else if (kw <= 150) {
      tien = 50 * 50 + 50 * 650 + (kw - 100) * 850;
    } else {
      tien = 50 * 50 + 50 * 650 + 50 * 850 + (kw - 150) * 1100;
    }
  
    document.getElementById("result").innerHTML = "Tên: " + ten + "<br>Tiền điện: " + tien + "đ";
  }
  

  //////////////////////////////////////////////////////////////////////////
  function toggleConnectionsInput() {
    const customerType = document.getElementById("customer-type").value;
    const connectionsInput = document.getElementById("connections");
  
    if (customerType === "business") {
      connectionsInput.disabled = false;
    } else {
      connectionsInput.disabled = true;
    }
  }

  function calculateBill() {
    const customerType = document.getElementById("customer-type").value;
    const connections = document.getElementById("connections").value;
    const channels = document.getElementById("channels").value;
  
    let processingFee = 0;
    let serviceFee = 0;
    let premiumChannelFee = 0;
    let totalBill = 0;
  
    if (customerType === "individual") {
      processingFee = 4.5;
      serviceFee = 20.5;
      premiumChannelFee = 7.5 * channels;
    } else if (customerType === "business") {
      processingFee = 15;
      serviceFee = 75 + (connections - 10) * 5;
      premiumChannelFee = 50 * channels;
    }
  
    totalBill = processingFee + serviceFee + premiumChannelFee;
  
    const billDiv = document.getElementById("bill");
    billDiv.innerHTML = `Hóa đơn của bạn: ${totalBill}$`;
  }
  