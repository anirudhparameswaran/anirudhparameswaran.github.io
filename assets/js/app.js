/* ---------- helpers ---------- */
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};
const mount = (id, node) => document.getElementById(id).appendChild(node);
const sectionTitle = (text) => el("h2", "section-title", text);

const bulletList = (items) => {
  const ul = el("ul", "bullets");
  items.forEach((b) => ul.appendChild(el("li", null, b)));
  return ul;
};

/* ---------- masthead ---------- */
function renderMasthead(c) {
  const host = document.getElementById("masthead");
  host.appendChild(el("h1", "name", c.name));
  host.appendChild(el("p", "tagline", c.tagline));

  const meta = el("p", "contact-line");
  const parts = [
    `<a href="mailto:${c.email}">${c.email}</a>`,
    ...c.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`),
    c.location,
    c.languages
  ];
  if (c.pdf) parts.push(`<a href="${c.pdf}" target="_blank" rel="noopener">Download CV</a>`);
  meta.innerHTML = parts.join('<span class="sep">·</span>');
  host.appendChild(meta);
}

/* ---------- sections ---------- */
function renderSummary(s) {
  mount("summary", sectionTitle(s.heading));
  mount("summary", el("p", "summary-text", s.text));
}

function renderSkills(s) {
  mount("skills", sectionTitle(s.heading));
  const wrap = el("div", "skills-grid");
  s.groups.forEach((g) => {
    const row = el("div", "skill-row");
    row.appendChild(el("div", "skill-label", g.group));
    const tags = el("div", "skill-tags");
    g.items.forEach((i) => tags.appendChild(el("span", "tag", i)));
    row.appendChild(tags);
    wrap.appendChild(row);
  });
  mount("skills", wrap);
}

function renderEntries(targetId, data, keyPrimary, keySecondary) {
  mount(targetId, sectionTitle(data.heading));
  data.items.forEach((it) => {
    const card = el("article", "entry");
    const head = el("div", "entry-head");
    const left = el("div");
    left.appendChild(el("h3", "entry-title", it[keyPrimary]));
    left.appendChild(el("p", "entry-sub", it[keySecondary]));
    const right = el("div", "entry-meta");
    right.appendChild(el("span", "entry-date", it.date));
    if (it.location) right.appendChild(el("span", "entry-loc", it.location));
    head.appendChild(left);
    head.appendChild(right);
    card.appendChild(head);
    card.appendChild(bulletList(it.bullets));
    mount(targetId, card);
  });
}

function renderProjects(p) {
  mount("projects", sectionTitle(p.heading));
  const grid = el("div", "project-grid");
  p.items.forEach((it) => {
    const card = el("article", "entry project");
    const title = it.link
      ? `<a href="${it.link}" target="_blank" rel="noopener">${it.title} <span class="ext">↗</span></a>`
      : it.title;
    card.appendChild(el("h3", "entry-title", title));
    card.appendChild(el("p", "stack", it.stack));
    card.appendChild(bulletList(it.bullets));
    grid.appendChild(card);
  });
  mount("projects", grid);
}

function renderFooter(c) {
  const f = document.getElementById("footer");
  f.innerHTML = `Last updated ${new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                 <span class="sep">·</span> Built with plain HTML, CSS &amp; JS
                 <span class="sep">·</span> <a href="${c.links[1].url}" target="_blank" rel="noopener">Source</a>`;
}

/* ---------- theme & print ---------- */
function initControls() {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
  document.getElementById("printBtn").addEventListener("click", () => window.print());
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initControls();
  renderMasthead(RESUME.contact);
  renderSummary(RESUME.summary);
  renderSkills(RESUME.skills);
  renderEntries("experience", RESUME.experience, "company", "role");
  renderEntries("education", RESUME.education, "institution", "degree");
  renderProjects(RESUME.projects);
  renderFooter(RESUME.contact);
  document.title = `${RESUME.contact.name} — Résumé`;
});