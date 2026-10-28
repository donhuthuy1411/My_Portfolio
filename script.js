/* 1. Làm nổi bật tab của trang hiện tại */

const tenTrang = window.location.pathname.split("/").pop().toLowerCase();

const cacLienKetMenu = document.querySelectorAll("nav a");

cacLienKetMenu.forEach(function (lienKet) {
  const duongDan = lienKet.getAttribute("href");

  if (!duongDan) {
    return;
  }

  const trangLienKet = duongDan.split("/").pop().toLowerCase();

  if (trangLienKet === (tenTrang || "index.html")) {
    lienKet.classList.add("active");
  } else {
    lienKet.classList.remove("active");
  }
});

/* 2. Hiện nội dung khi cuộn trang */

const cacPhanTu = document.querySelectorAll(
  "main h1, main h2, main .hero, main .project-card, main section",
);

if ("IntersectionObserver" in window) {
  const boQuanSat = new IntersectionObserver(
    function (danhSach) {
      danhSach.forEach(function (muc) {
        if (muc.isIntersecting) {
          muc.target.classList.add("visible");
          boQuanSat.unobserve(muc.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  cacPhanTu.forEach(function (phanTu) {
    phanTu.classList.add("reveal");
    boQuanSat.observe(phanTu);
  });
} else {
  cacPhanTu.forEach(function (phanTu) {
    phanTu.classList.add("visible");
  });
}

/* 3. Nút quay lại đầu trang */

const nutLenDau = document.createElement("button");

nutLenDau.id = "backToTop";
nutLenDau.type = "button";
nutLenDau.textContent = "↑";
nutLenDau.setAttribute("aria-label", "Quay lại đầu trang");

document.body.appendChild(nutLenDau);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    nutLenDau.classList.add("show");
  } else {
    nutLenDau.classList.remove("show");
  }
});

nutLenDau.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* 4. Cập nhật năm ở chân trang */

const namHienTai = document.querySelector("#year");

if (namHienTai) {
  namHienTai.textContent = new Date().getFullYear();
}
