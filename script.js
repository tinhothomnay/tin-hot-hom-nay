document.addEventListener("DOMContentLoaded", () => {
  const SHOPEE_LINK = "https://s.shopee.vn/50SjAWK3m3";

  if (!localStorage.getItem("opened_shopee")) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = 9999;
    overlay.style.cursor = "pointer";

    overlay.onclick = () => {
      localStorage.setItem("opened_shopee", "yes");
      window.open(SHOPEE_LINK, "_blank");
      overlay.remove();
    };

    document.body.appendChild(overlay);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const SHOPEE_LINK = "https://s.shopee.vn/50SjAWK3m3";
  const overlay = document.getElementById("shopee-overlay");

  if (localStorage.getItem("opened_shopee")) {
    overlay.classList.add("hidden");
    return;
  }

  overlay.addEventListener("click", () => {
    localStorage.setItem("opened_shopee", "yes");
    window.open(SHOPEE_LINK, "_blank");
    overlay.classList.add("hidden");
  });
});
