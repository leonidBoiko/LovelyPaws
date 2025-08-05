const careContent = {
  upcycle: `<h2 class="mb-2 fs-1 text-center">Upcycled Denim Dog Carrier</h2>
    <span class="fw-semibold">For the denim bag:</span>
    <ul>
      <li>Before washing the bag, take out the stiff base inside. It should stay dry to keep its shape.</li>
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
  sweater: `<h2 class="mb-2 fs-1 text-center">Knitted Sweater</h2>
    <ul>
      <li>Spot clean small areas with a damp cloth.</li>
      <li>For deeper cleaning, hand wash in cold water with a mild detergent.</li>
      <li>Gently squeeze out excess water — do not wring or twist.</li>
      <li>Lay flat to dry, away from direct heat or sunlight.</li>  
      <li>Avoid bleach and fabric softeners — they may damage the fibers.</li>
    </ul>`,
  hoody: `<h2 class="mb-2 fs-1 text-center">Hoody & Sweatshirts</h2>
    <ul>
      <li>Spot clean if possible.</li>
      <li>For full cleaning, hand wash or machine wash on a gentle cycle with cold water.</li>
      <li>Use mild detergent. No bleach, please.</li>
      <li>Air dry flat or hang dry. Avoid tumble drying to prevent shrinking.</li>  
      <li>Do not iron directly on the fleece side.</li>
    </ul>`,
  vest: `<h2 class="mb-2 fs-1 text-center">Vest</h2>
    <ul>
      <li>Wipe down with a damp cloth for light dirt.</li>
      <li>Hand wash in cold water for a deeper clean.</li>
      <li>Avoid soaking for long periods.</li>
      <li>Hang to dry in a well-ventilated area.</li>  
      <li>Do not bleach, tumble dry, or iron.</li>
    </ul>`,
  jacket: `<h2 class="mb-2 fs-1 text-center">Jacket</h2>
    <span class="fw-semibold">Raincoat fabric:</span>
    <ul>
      <li>Wipe down with a damp cloth for light dirt.</li>
      <li>Hand wash in cold water for a deeper clean.</li>
      <li>Avoid soaking for long periods.</li>
      <li>Hang to dry in a well-ventilated area.</li>  
      <li>Do not bleach, tumble dry, or iron.</li>
    </ul>
    <span class="fw-semibold mt-2">Eco fur and coat fabric:</span>
    <ul>
      <li>Gently brush off any dirt.</li>
      <li>Spot clean fur and fabric with a damp cloth.</li>
      <li>For deeper cleaning, hand wash in cold water.</li>
      <li>Allow to air dry completely.</li>
      <li>Do not bleach, iron, or expose to direct heat.</li>
    </ul>`,
  accessories: `<h2 class="mb-2 fs-1 text-center">Accessories</h2>
    <span class="fw-semibold fs-5 d-block">Bow Ties</span>
    <span class="fw-semibold">Upcycled Denim:</span>
    <ul>
      <li>Spot clean gently with a damp cloth.</li>
      <li>Do not soak or machine wash — to preserve the shape.</li>
      <li>Let air dry completely.</li>
    </ul>
    <span class="fw-semibold mt-2">Soft Touch Velvet:</span>
    <ul>
      <li>Use a lint roller or soft brush to remove dust.</li>
      <li>Spot clean only, using a soft cloth with a small amount of water if needed.</li>
      <li>Do not machine wash, bleach, or iron.</li>
    </ul>`,
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