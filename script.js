document.addEventListener("DOMContentLoaded", () => {
  const SHOPEE_LINK = "https://s.shopee.vn/4LD2R7Anhb";

  // Nếu trong phiên này đã click đi Shopee rồi → không làm gì nữa
  if (sessionStorage.getItem("opened_shopee")) return;

  const handleFirstClick = (e) => {
    // Đánh dấu đã mở Shopee trong phiên này
    sessionStorage.setItem("opened_shopee", "yes");

    // Ngăn hành vi click gốc (mở video, link...)
    e.preventDefault();
    e.stopPropagation();

    // Mở Shopee
    window.open(SHOPEE_LINK, "_blank");

    // Gỡ sự kiện để các click sau hoạt động bình thường
    document.removeEventListener("click", handleFirstClick, true);
  };

  // Bắt click ở CAPTURE phase để đảm bảo click đâu cũng dính
  document.addEventListener("click", handleFirstClick, true);
});
