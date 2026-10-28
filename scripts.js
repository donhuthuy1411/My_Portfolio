/* 1. Hiển thị thông báo khi bấm vào nút Email */
const emailLink = document.querySelector('#contact a[href^="mailto:"]');

if (emailLink) {
  emailLink.addEventListener("click", function () {
    console.log("Bạn đang mở liên kết email!");
  });
}

/* 2. Hiệu ứng xuất hiện khi cuộn đến các phần */
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach(function (section) {
  observer.observe(section);
});

/* 3. Hiển thị năm hiện tại ở chân trang */
const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} My Portfolio. All rights reserved.`;
}

/* ===== 4. KIỂM TRA FORM LIÊN HỆ ===== */

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent =
      "Form đã được kiểm tra, nhưng tin nhắn chưa được gửi. Website chưa kết nối máy chủ.";

    contactForm.reset();
  });
}

/* ===== HIỆU ỨNG HIỆN NỘI DUNG KHI CUỘN ===== */

const cacPhanTu = document.querySelectorAll(
  "main h1, main h2, main .hero, main .project-card, main section",
);

cacPhanTu.forEach(function (phanTu) {
  phanTu.classList.add("reveal");
});

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
    boQuanSat.observe(phanTu);
  });
} else {
  cacPhanTu.forEach(function (phanTu) {
    phanTu.classList.add("visible");
  });
}

/* ===== TẠO NÚT QUAY LẠI ĐẦU TRANG ===== */

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
