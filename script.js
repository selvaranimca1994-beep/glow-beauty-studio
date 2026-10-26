
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const bookingDate = document.getElementById("bookingDate");

// Replace this with the salon owner's WhatsApp number.
// India example: 919876543210
const salonWhatsAppNumber = "919876543210";

// Prevent past dates
const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

bookingDate.min = localToday;

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const service = document.getElementById("service").value;
  const date = bookingDate.value;

  if (!name || !phone || !service || !date) {
    formMessage.textContent = "Please fill in all the fields.";
    formMessage.style.color = "red";
    return;
  }

  if (date < localToday) {
    formMessage.textContent = "Please select today or a future date.";
    formMessage.style.color = "red";
    return;
  }

  const message =
    "Hello Glow Beauty Studio! I would like to request an appointment.\n\n" +
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Service: " + service + "\n" +
    "Preferred Date: " + date + "\n\n" +
    "Please confirm availability. Thank you!";

  const whatsappURL =
    "https://wa.me/" + salonWhatsAppNumber +
    "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");

  formMessage.textContent =
    "WhatsApp opened. Please send the message to request your appointment.";
  formMessage.style.color = "green";
});
