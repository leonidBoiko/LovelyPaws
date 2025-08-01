const careContent = {
  upcycle: `<h2 class="mb-2 fs-1 fw-300">Upcycled Denim Dog Carrier</h2>
    <span class="fw-semibold">For the denim bag:</span>
    <ul>
      <li>Before washing the bag, take out the stiff base inside. It should stay dry to keep its shape</li>
      <li>If needed, wipe the stiff base with a damp cloth.</li>
      <li>For small spots, just wipe gently with a damp cloth.</li>
      <li>Need a deeper clean? Hand wash in cold water with mild detergent. Avoid soaking too long.</li>  
      <li>Let air dry naturally, away from direct sunlight — this helps preserve the color.</li>
      <li>Please don’t use bleach or harsh chemicals, as they may damage the denim fabric.</li>  
    </ul>
    <span class="fw-semibold mt-2">For the denim bag:</span>
    <ul>
      <li>For light dirt or stains, gently spot clean the surface using a soft cloth and mild detergent.</li>
      <li>If deeper cleaning is needed, hand wash the entire mattress in cold water with a gentle detergent.</li>
      <li>Air dry the mattress completely in a well-ventilated area. Do not tumble dry or expose to direct heat sources.</li>
      <li>Avoid using bleach or ironing the fabric to preserve the softness and shape.</li>
    </ul>`,
  sweater: `<span class="fw-semibold">sweatter</span>`,
  hoody: `<span class="fw-semibold">hoody</span>`,
  vest: `<span class="fw-semibold">vest</span>`,
  jacket: `<span class="fw-semibold">jacket</span>`,
  accessories: `<span class="fw-semibold">accessories</span>`,
};

function initCareModal() {
  // Fix Bootstrap modal error
  document.addEventListener('hide.bs.modal', function (event) {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  });

  const careSection = document.getElementById("care");
  const careModal = document.getElementById("careModal");
  if (careSection && careModal) {
    const careImages = careSection.querySelectorAll('img');
    const modalContent = careModal.querySelector('.modal-body');
    careImages.forEach((img) => {
      img.addEventListener("click", () => {
        const key = img.getAttribute("data-content");
        modalContent.innerHTML = careContent[key] || `<p>No content available</p>`;
      });
    });
  }
}

export default initCareModal;