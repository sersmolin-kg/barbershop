const header = document.querySelector("#header");
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
const bookingForm = document.querySelector("#bookingForm");
const toast = document.querySelector("#toast");

const whatsappNumber = "996555123456";

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const service = document.querySelector("#service").value;

  if (!name || !phone || !service) {
    return;
  }

  const message = [
    "Здравствуйте! Хочу записаться в BARBER HOUSE.",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Услуга: ${service}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  toast.classList.add("show");

  // setTimeout(() => {
  //   window.open(whatsappUrl, "_blank");
  //   toast.classList.remove("show");
  //   bookingForm.reset();
  // }, 700);
});
