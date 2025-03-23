class Product {
    constructor(
      MaSP,
      TenSP,
      MaNCC,
      MaLoaiSP,
      ThanhTien,
      SoLuongTonKho,
      SoLuongDatMua,
      MucDatHangLai,
      TrangThaiNgungBan
    ) {
      this.MaSP = MaSP;
      this.TenSP = TenSP;
      this.MaNCC = MaNCC;
      this.MaLoaiSP = MaLoaiSP;
      this.ThanhTien = ThanhTien;
      this.SoLuongTonKho = SoLuongTonKho;
      this.SoLuongDatMua = SoLuongDatMua;
      this.MucDatHangLai = MucDatHangLai;
      this.TrangThaiNgungBan = TrangThaiNgungBan;
    }
  }
  
  module.exports = Product;