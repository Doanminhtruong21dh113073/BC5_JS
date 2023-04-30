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
      document.getElementById("ketQua").innerHTML = "Rất tiếc, bạn không đủ điểm để trúng tuyển.";
    }
  }
  