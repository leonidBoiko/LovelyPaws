function privacyModal() {
  const privacyModal = document.getElementById("careModal");
  const privacyButton = document.getElementById("privacyButton");
  privacyButton.addEventListener("click", () => {
    if (privacyModal) {
      const modalContent = privacyModal.querySelector('.modal-body');
      modalContent.innerHTML = `
        <h2 class="mb-2 fs-1 fw-300 text-center">Privacy Policy</h2>
        <p>This website LovelyPawsUA is an informational resource only. We do not collect, store, or process any personal data from visitors.<br>
        Our site does not use forms to collect personal information, does not set cookies (or uses only essential technical cookies), and does not track visitor data.<br>
        If you follow links to our social media pages or other external sites, please note that we do not control their privacy policies. We recommend reviewing their privacy practices independently.
        If you have any questions about privacy, you can contact us at: <a class="text-decoration-none icon-link" href="mailto:sendorders9@gmail.com">sendorders9@gmail.com</a></p>
      `;
    }
  })
}

export default privacyModal;