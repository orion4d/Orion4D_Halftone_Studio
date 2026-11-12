const languages = document.querySelectorAll(".language-picker a");
if (languages.length) {
  const syncChapter = () => {
    for (const link of languages) link.href = link.href.split("#")[0] + location.hash;
  };
  addEventListener("hashchange", syncChapter);
  syncChapter();
  const picker = document.querySelector(".language-picker");
  picker.addEventListener("keydown", event => {
    if (event.key === "Escape" && picker.open) {
      picker.open = false;
      picker.querySelector("summary").focus();
    }
  });
  document.addEventListener("click", event => {
    if (picker.open && !picker.contains(event.target)) picker.open = false;
  });
}

const gallerySwitch = document.querySelector(".gallery-switch");
if (gallerySwitch) {
  const choices = [...gallerySwitch.querySelectorAll("[data-gallery]")];
  const panels = [...document.querySelectorAll("[data-proof]")];
  const show = id => {
    for (const panel of panels) panel.hidden = panel.dataset.proof !== id;
    for (const button of choices) button.setAttribute("aria-pressed", String(button.dataset.gallery === id));
  };
  for (const button of choices) button.addEventListener("click", () => show(button.dataset.gallery));
  show(choices[0].dataset.gallery);
  gallerySwitch.hidden = false;
}

const search = document.querySelector("#doc-search");
if (search) {
  const normalize = text => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const nav = [...document.querySelectorAll(".docs-nav a")];
  const chapters = [...document.querySelectorAll(".topic")].map(node => ({
    node,
    link: nav.find(link => link.hash === "#" + node.id),
    index: normalize(node.textContent),
  }));
  const status = document.querySelector("#doc-status");
  const empty = document.querySelector(".no-results");
  search.closest(".docs-search").hidden = false;

  const filterChapters = () => {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const {node, link, index} of chapters) {
      const found = terms.every(term => index.includes(term));
      node.hidden = !found;
      if (link) link.hidden = !found;
      if (found) count++;
    }
    empty.hidden = count > 0;
    const message = count === 1 ? status.dataset.one : status.dataset.many;
    status.textContent = terms.length ? message.replace("{count}", count) : "";
  };
  search.addEventListener("input", filterChapters);
  const markActive = () => {
    for (const link of nav) {
      if (link.hash === location.hash) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };
  addEventListener("hashchange", () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target?.closest(".topic")?.hidden) {
      search.value = "";
      filterChapters();
      target.scrollIntoView();
    }
    markActive();
  });
  markActive();
}

for (const button of document.querySelectorAll("[data-copy]")) {
  const code = document.getElementById(button.dataset.copy);
  if (!code) continue;
  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = button.dataset.copied;
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = button.dataset.selected;
    }
  });
}
