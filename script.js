document.addEventListener("DOMContentLoaded", () => {
  const SHOPEE_LINK = "https://s.shopee.vn/4LD2R7Anhb";

  // Nếu trong phiên này đã đi Shopee rồi → cho dùng bình thường
  if (sessionStorage.getItem("opened_shopee")) return;

  const handleFirstAction = (e) => {
    // Đánh dấu đã mở Shopee trong phiên
    sessionStorage.setItem("opened_shopee", "yes");

    // Chặn hành vi gốc (video, link, nút…)
    e.preventDefault();
    e.stopPropagation();

    // Mở Shopee
    window.open(SHOPEE_LINK, "_blank");

    // Gỡ tất cả listener để các thao tác sau hoạt động bình thường
    document.removeEventListener("pointerdown", handleFirstAction, true);
    document.removeEventListener("mousedown", handleFirstAction, true);
    document.removeEventListener("touchstart", handleFirstAction, true);
  };

  // Bắt sớm – trước cả iframe
  document.addEventListener("pointerdown", handleFirstAction, true);
  document.addEventListener("mousedown", handleFirstAction, true);
  document.addEventListener("touchstart", handleFirstAction, true);
});
