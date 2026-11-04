(() => {
  const checkoutUrl = window.PANETONE_CONFIG?.checkoutUrl?.trim() || "";
  const isSecureCheckout = /^https:\/\//i.test(checkoutUrl);

  document.querySelectorAll("[data-checkout]").forEach((button) => {
    if (isSecureCheckout) {
      button.href = checkoutUrl;
      button.textContent = "COMPRAR AGORA";
      button.removeAttribute("aria-disabled");
      return;
    }

    button.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#checkout-status")?.focus?.();
    });
  });
})();
