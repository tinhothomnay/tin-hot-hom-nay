document.addEventListener("DOMContentLoaded", () => {
  const SHOPEE_LINK = "https://shopee.vn/your-affiliate-link";

  // Chỉ yêu cầu click 1 lần mỗi phiên
  if (sessionStorage.getItem("opened_shopee")) return;

  // Overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,0.85)";
  overlay.style.zIndex = "9999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  // Nút click
  const button = document.createElement("button");
  button.innerText = "👉 Bắt đầu học";
  button.style.padding = "15px 30px";
  button.style.fontSize = "18px";
  button.style.cursor = "pointer";

  button.onclick = () => {
    sessionStorage.setItem("opened_shopee", "1");
    window.open(SHOPEE_LINK, "_blank");
    overlay.remove();
  };

  overlay.appendChild(button);
  document.body.appendChild(overlay);
});
