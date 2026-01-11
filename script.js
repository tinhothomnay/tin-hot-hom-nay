document.addEventListener("DOMContentLoaded", () => {
  const SHOPEE_LINK = "https://s.shopee.vn/4LD2R7Anhb";

  if (sessionStorage.getItem("opened_shopee")) return;

  const handleFirstAction = (e) => {
    if (e.target.tagName === "IFRAME") {
      e.preventDefault();
      e.stopPropagation();
    }

    sessionStorage.setItem("opened_shopee", "yes");
    window.open(SHOPEE_LINK, "_blank");

    document.removeEventListener("pointerdown", handleFirstAction, true);
    document.removeEventListener("mousedown", handleFirstAction, true);
    document.removeEventListener("touchstart", handleFirstAction, true);
  };

  document.addEventListener("pointerdown", handleFirstAction, true);
  document.addEventListener("mousedown", handleFirstAction, true);
  document.addEventListener("touchstart", handleFirstAction, true);
});

// ===== ĐẾM LƯỢT XEM (MIỄN PHÍ) =====
fetch("https://api.countapi.xyz/hit/tinhothomnay/tin-hot-hom-nay")
  .then(res => res.json())
  .then(data => {
    const viewEl = document.getElementById("view-count");
    if (viewEl) {
      viewEl.innerText = data.value.toLocaleString("vi-VN");
    }
  })
  .catch(() => {});
