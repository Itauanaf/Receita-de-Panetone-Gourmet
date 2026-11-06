(() => {
  const checkoutUrl = window.PANETONE_CONFIG?.checkoutUrl?.trim() || "";
  const isSecureCheckout = /^https:\/\//i.test(checkoutUrl);

  document.querySelectorAll("[data-checkout]").forEach((button) => {
    if (isSecureCheckout) {
      button.href = checkoutUrl;
      button.removeAttribute("aria-disabled");
      return;
    }

    button.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#checkout-status")?.focus?.();
    });
  });
})();

// Dias que faltam para o Natal (25/12, horário local)
(() => {
  const el = document.querySelector("[data-countdown]");
  if (!el) return;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const christmas = new Date(today.getFullYear(), 11, 25);
  const days = Math.round((christmas - today) / 86400000);
  if (days > 1) el.textContent = `Faltam ${days} dias para o Natal`;
  else if (days === 1) el.textContent = "Falta 1 dia para o Natal";
})();
