// layout.js
async function loadLayout(path) {
  try {
    const response = await fetch(`layout/${path}.html`);
    const html = await response.text();
    document.getElementById(path).innerHTML = html;
  } catch (error) {
    console.error(`Failed to load ${path}:`, error);
  }
}

loadLayout('navbar');
loadLayout('main');
loadLayout('footer');

