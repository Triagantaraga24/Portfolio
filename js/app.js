import { CONFIG, getRawDataUrl } from "./config.js";

const I18N = {
  id: {
    skip:"Lewati ke konten", navAbout:"Tentang", navSkills:"Keahlian", navJourney:"Perjalanan", navProjects:"Proyek", navContact:"Kontak",
    loading:"Memuat data portofolio…", retry:"Coba lagi", eyebrow:"PORTOFOLIO PERSONAL", hello:"Halo, saya", exploreProjects:"Jelajahi Proyek", contactMe:"Hubungi Saya", openToIdeas:"Terbuka untuk ide dan kolaborasi", portfolioLive:"Portfolio online", scrollToExplore:"GULIR UNTUK MENJELAJAH",
    aboutEyebrow:"TENTANG SAYA", aboutTitle:"Membangun sesuatu|yang bermakna.", aboutLead:"Ruang singkat untuk mengenal latar belakang, cara berpikir, dan hal yang sedang saya eksplorasi.", location:"LOKASI", email:"EMAIL", phone:"TELEPON",
    skillsEyebrow:"KEAHLIAN", skillsTitle:"Tools untuk|mewujudkan ide.", skillsLead:"Keahlian dan teknologi yang tercantum di sini bersumber dari data portofolio.", journeyEyebrow:"PERJALANAN", journeyTitle:"Belajar, bertumbuh,|berkontribusi.", journeyLead:"Pengalaman, pendidikan, dan organisasi yang ditampilkan berasal dari data yang dikelola melalui dashboard.",
    experienceTitle:"Pengalaman", educationTitle:"Pendidikan", organizationsTitle:"Organisasi", achievementsEyebrow:"PENCAPAIAN", achievementsTitle:"Hal kecil,|progres nyata.", achievementsLead:"Sertifikat dan pencapaian yang ditambahkan melalui dashboard admin.", projectsEyebrow:"KARYA TERPILIH", projectsTitle:"Ide yang menjadi|karya.", projectsLead:"Cari dan saring proyek berdasarkan nama atau teknologi yang digunakan.", searchPlaceholder:"Cari proyek atau teknologi…", all:"Semua", featured:"Unggulan", noSkillsTitle:"Keahlian belum ditambahkan", noSkills:"Informasi keahlian akan diperbarui oleh admin.", noExperienceTitle:"Belum ada pengalaman", noExperience:"Informasi pengalaman akan ditampilkan setelah data yang relevan ditambahkan.", noEducationTitle:"Belum ada data pendidikan", noEducation:"Informasi pendidikan belum ditambahkan.", noOrganizationsTitle:"Belum ada organisasi", noOrganizations:"Informasi organisasi belum ditambahkan.", noAchievementsTitle:"Belum ada pencapaian", noAchievements:"Pencapaian dan sertifikat akan muncul di bagian ini.", noProjectsTitle:"Belum ada proyek untuk ditampilkan", noProjects:"Proyek akan tampil di sini setelah diterbitkan melalui dashboard admin.", noSearchTitle:"Tidak ada hasil yang cocok", noSearch:"Coba kata kunci lain atau pilih filter Semua.", noSummary:"Ringkasan profil belum ditambahkan.", noDataSummary:"Ringkasan profil akan ditampilkan di sini setelah dilengkapi melalui dashboard admin.", readCredential:"Lihat kredensial ↗", viewDetails:"Lihat detail", repository:"Repositori", liveDemo:"Demo langsung", contactEyebrow:"MARI TERHUBUNG", contactTitle:"Punya ide menarik?|Mari wujudkan bersama.", contactLead:"Untuk pertanyaan, diskusi, atau peluang kolaborasi, silakan hubungi saya melalui kanal berikut.", sendEmail:"Kirim Email", footerRights:"Dibuat dengan tujuan dan rasa ingin tahu.", loadError:"Data belum berhasil dimuat.", loadErrorDetail:"Periksa koneksi dan konfigurasi repository konten, lalu coba lagi.", stale:"Menampilkan data terakhir yang berhasil dimuat; pembaruan terbaru belum terverifikasi.", lastUpdated:"Data dimuat", latest:"Data berhasil dimuat", noDate:"Tanggal tidak tersedia", current:"Sekarang", cvId:"Unduh CV (Indonesia)", cvEn:"Download CV (English)", featuredBadge:"UNGGULAN", projectsShown:(shown,total)=>`Menampilkan ${shown} dari ${total} proyek`, categoryUncategorized:"Lainnya", noDescription:"Deskripsi belum ditambahkan.", projectDetails:"Detail proyek", externalLink:"Buka tautan", publishedInfo:"Konten berasal dari repository publik. Perubahan dapat memerlukan jeda propagasi." 
  },
  en: {
    skip:"Skip to content", navAbout:"About", navSkills:"Skills", navJourney:"Journey", navProjects:"Projects", navContact:"Contact",
    loading:"Loading portfolio data…", retry:"Try again", eyebrow:"PERSONAL PORTFOLIO", hello:"Hello, I'm", exploreProjects:"Explore Projects", contactMe:"Contact Me", openToIdeas:"Open to ideas and collaboration", portfolioLive:"Portfolio online", scrollToExplore:"SCROLL TO EXPLORE",
    aboutEyebrow:"ABOUT ME", aboutTitle:"Building something|meaningful.", aboutLead:"A quick introduction to my background, way of thinking, and the things I am exploring.", location:"LOCATION", email:"EMAIL", phone:"PHONE",
    skillsEyebrow:"SKILLS", skillsTitle:"Tools to|bring ideas to life.", skillsLead:"Skills and technologies shown here come from the portfolio data.", journeyEyebrow:"JOURNEY", journeyTitle:"Learn, grow,|contribute.", journeyLead:"Experience, education, and organizations shown here are managed through the dashboard.",
    experienceTitle:"Experience", educationTitle:"Education", organizationsTitle:"Organizations", achievementsEyebrow:"ACHIEVEMENTS", achievementsTitle:"Small wins,|real progress.", achievementsLead:"Certificates and achievements added through the admin dashboard.", projectsEyebrow:"SELECTED WORK", projectsTitle:"Ideas turned into|work.", projectsLead:"Search and filter projects by name or technologies used.", searchPlaceholder:"Search projects or technologies…", all:"All", featured:"Featured", noSkillsTitle:"No skills added yet", noSkills:"Skill information will be updated by the administrator.", noExperienceTitle:"No experience added", noExperience:"Relevant experience will appear here once the data is added.", noEducationTitle:"No education data yet", noEducation:"Education details have not been added.", noOrganizationsTitle:"No organizations added", noOrganizations:"Organization details have not been added.", noAchievementsTitle:"No achievements yet", noAchievements:"Achievements and certificates will appear here.", noProjectsTitle:"No projects to show yet", noProjects:"Projects will appear here after being published through the admin dashboard.", noSearchTitle:"No matching results", noSearch:"Try another keyword or choose the All filter.", noSummary:"No profile summary has been added yet.", noDataSummary:"A profile summary will appear here once completed through the admin dashboard.", readCredential:"View credential ↗", viewDetails:"View details", repository:"Repository", liveDemo:"Live demo", contactEyebrow:"LET'S CONNECT", contactTitle:"Have an interesting idea?|Let's build it together.", contactLead:"For questions, discussions, or collaboration opportunities, contact me through the channels below.", sendEmail:"Send Email", footerRights:"Built with purpose and curiosity.", loadError:"Portfolio data could not be loaded.", loadErrorDetail:"Check your connection and content repository configuration, then try again.", stale:"Showing the last successfully loaded data; the latest update has not been verified.", lastUpdated:"Loaded", latest:"Data loaded successfully", noDate:"Date unavailable", current:"Present", cvId:"Download CV (Indonesian)", cvEn:"Download CV (English)", featuredBadge:"FEATURED", projectsShown:(shown,total)=>`Showing ${shown} of ${total} projects`, categoryUncategorized:"Other", noDescription:"No description has been added.", projectDetails:"Project details", externalLink:"Open link", publishedInfo:"Content comes from a public repository. Updates may take time to propagate."
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const emptyData = () => ({ schemaVersion: 1, updatedAt: "", profile: {}, skills: [], experiences: [], education: [], organizations: [], achievements: [], projects: [], socialLinks: [], siteSettings: {} });
let portfolioData = null;
let lastLoadedAt = null;
let language = safePreference("raga-portfolio-language", ["id", "en"]) || null;
let theme = safePreference("raga-portfolio-theme", ["light", "dark"]) || null;
let selectedTechnology = "all";
let searchTerm = "";
let activeProject = null;
let refreshTimer = null;
const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

function safePreference(key, allowed) {
  try { const value = localStorage.getItem(key); return allowed.includes(value) ? value : null; } catch { return null; }
}
function t(key) { const value = I18N[language || "id"][key]; return typeof value === "function" ? value : (value ?? key); }
function node(tag, className = "", text = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined && text !== null) element.textContent = String(text);
  return element;
}
function clear(element) { element.replaceChildren(); }
function safeUrl(value) {
  if (typeof value !== "string" || !value.trim()) return null;
  const raw = value.trim();
  if (/^(https?:\/\/|mailto:|tel:)/i.test(raw)) {
    try { const parsed = new URL(raw, window.location.href); return ["http:", "https:", "mailto:", "tel:"].includes(parsed.protocol) ? raw : null; } catch { return null; }
  }
  if ((raw.startsWith("./") || raw.startsWith("/")) && !raw.startsWith("//") && !raw.includes("\\")) return raw;
  return null;
}
function setLink(link, url, text) {
  const safe = safeUrl(url);
  if (!safe) { link.hidden = true; link.removeAttribute("href"); return false; }
  link.hidden = false; link.href = safe;
  if (text != null) link.textContent = text;
  if (/^https?:/i.test(safe)) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
  else { link.removeAttribute("target"); link.removeAttribute("rel"); }
  return true;
}
function initials(name) { return String(name || "Raga Triagantara").trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase() || "RT"; }
function formatDate(value) {
  if (!value) return "";
  const date = new Date(value.length === 7 ? `${value}-01T00:00:00` : value);
  if (Number.isNaN(date.getTime())) return String(value);
  try { return new Intl.DateTimeFormat(language === "en" ? "en-US" : "id-ID", { month: "short", year: "numeric" }).format(date); } catch { return String(value); }
}
function dateRange(start, end, isCurrent) {
  const first = formatDate(start), last = isCurrent ? t("current") : formatDate(end);
  if (!first && !last) return "";
  if (!first) return last;
  if (!last) return first;
  return `${first} — ${last}`;
}
function validatePortfolio(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Root JSON harus berupa object.");
  if (data.schemaVersion !== 1) throw new Error("schemaVersion tidak didukung; versi yang diperlukan adalah 1.");
  if (!data.profile || typeof data.profile !== "object" || Array.isArray(data.profile)) throw new Error("Objek profile tidak valid.");
  for (const key of ["skills", "experiences", "education", "organizations", "achievements", "projects", "socialLinks"]) {
    if (!Array.isArray(data[key])) throw new Error(`Field '${key}' harus berupa array.`);
  }
  if (!data.siteSettings || typeof data.siteSettings !== "object") throw new Error("Objek siteSettings tidak valid.");
  return data;
}
function translateStatic() {
  document.documentElement.lang = language || "id";
  $$('[data-i18n]').forEach(el => {
    const value = t(el.dataset.i18n);
    const gradient = el.querySelector('.gradient-text');
    if (gradient && typeof value === 'string' && value.includes('|')) {
      const [lead, tail] = value.split('|', 2);
      const leadNode = [...el.childNodes].find(child => child.nodeType === Node.TEXT_NODE && child.textContent.trim());
      if (leadNode) leadNode.textContent = lead + (el.querySelector('br') ? '' : ' ');
      gradient.textContent = tail;
    } else el.textContent = value;
  });
  const search = $("#project-search");
  if (search) { search.placeholder = t("searchPlaceholder"); search.setAttribute("aria-label", t("searchPlaceholder")); }
  const langBtn = $("#language-toggle");
  langBtn.textContent = (language || "id") === "id" ? "EN" : "ID";
  langBtn.setAttribute("aria-label", (language || "id") === "id" ? "Switch to English" : "Beralih ke Bahasa Indonesia");
  $("#theme-icon").textContent = (theme || "light") === "dark" ? "☀" : "☾";
  $("#theme-toggle").setAttribute("aria-label", theme === "dark" ? (language === "en" ? "Switch to light theme" : "Aktifkan tema terang") : (language === "en" ? "Switch to dark theme" : "Aktifkan tema gelap"));
}
function applyTheme() {
  if (!theme) theme = portfolioData?.siteSettings?.defaultTheme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  if (lastLoadedAt) { try { localStorage.setItem("raga-portfolio-theme", theme); } catch { /* preference storage is optional */ } }
  translateStatic();
}
function applyLanguage() {
  if (!language) language = portfolioData?.siteSettings?.defaultLanguage === "en" ? "en" : "id";
  if (lastLoadedAt) { try { localStorage.setItem("raga-portfolio-language", language); } catch { /* preference storage is optional */ } }
  translateStatic();
}
function emptyState(parent, title, description, icon = "✦") {
  const item = node("div", "empty-state");
  item.append(node("span", "empty-icon", icon));
  const copy = node("div"); copy.append(node("strong", "", title), node("p", "", description)); item.append(copy); parent.append(item); return item;
}
function renderProfile() {
  const profile = portfolioData?.profile || {};
  const name = profile.name || "Raga Triagantara";
  const title = profile.title || "Web Developer";
  $("#profile-name").textContent = name;
  $("#profile-title").textContent = title;
  $("#profile-location").textContent = profile.location || "Tangerang Selatan, Indonesia";
  $("#card-profile-name").textContent = name;
  $("#card-profile-title").textContent = title;
  $("#avatar-initials").textContent = initials(name);
  const photo = $("#profile-photo"), photoUrl = safeUrl(profile.photoUrl);
  if (photoUrl) { photo.src = photoUrl; photo.alt = language === "en" ? `Profile photo of ${name}` : `Foto profil ${name}`; photo.hidden = false; $("#avatar-initials").hidden = true; photo.onerror = () => { photo.hidden = true; $("#avatar-initials").hidden = false; }; }
  else { photo.hidden = true; photo.removeAttribute("src"); $("#avatar-initials").hidden = false; }
  const summary = profile.summary?.trim() || t("noDataSummary");
  $("#profile-summary").textContent = summary;
  $("#about-summary").textContent = profile.summary?.trim() || t("noSummary");
  $("#fact-location").textContent = profile.location || "—";
  $("#contact-location").textContent = profile.location || "—";
  const email = $("#fact-email");
  if (profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) { setLink(email, `mailto:${profile.email}`, profile.email); $("#contact-email").textContent = profile.email; setLink($("#contact-email"), `mailto:${profile.email}`); setLink($("#contact-email-button"), `mailto:${profile.email}`); }
  else { email.textContent = "—"; email.removeAttribute("href"); $("#contact-email").textContent = "—"; $("#contact-email").removeAttribute("href"); $("#contact-email-button").hidden = true; }
  if (profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) $("#contact-email-button").hidden = false;
  const phone = $("#fact-phone");
  const phoneValue = String(profile.phone || "").trim();
  if (phoneValue && /^[+0-9().\-\s]+$/.test(phoneValue)) { setLink(phone, `tel:${phoneValue.replace(/[^+\d]/g, "")}`, phoneValue); }
  else { phone.textContent = "—"; phone.removeAttribute("href"); }
  const cvBox = $("#cv-actions"); clear(cvBox);
  for (const item of [{ key: "cvIdUrl", label: t("cvId") }, { key: "cvEnUrl", label: t("cvEn") }]) {
    const url = safeUrl(profile[item.key]);
    if (url) { const a = node("a", "cv-link", `${item.label} ↗`); setLink(a, url); cvBox.append(a); }
  }
}
function renderSkills() {
  const target = $("#skills-container"); clear(target);
  const skills = portfolioData.skills || [];
  if (!skills.length) { emptyState(target, t("noSkillsTitle"), t("noSkills")); return; }
  const groups = new Map();
  for (const skill of skills) { const category = String(skill.category || t("categoryUncategorized")); if (!groups.has(category)) groups.set(category, []); groups.get(category).push(skill); }
  for (const [category, list] of groups) {
    const card = node("article", "skill-group reveal"); card.append(node("h3", "", category));
    const chips = node("div", "skill-chips");
    for (const skill of list) { const chip = node("span", "skill-chip"); chip.append(document.createTextNode(skill.name || "Skill")); if (skill.proficiency) chip.append(node("small", "", skill.proficiency)); chips.append(chip); }
    card.append(chips); target.append(card);
  }
}
function renderExperiences() {
  const target = $("#experiences-container"); clear(target);
  const rows = [...(portfolioData.experiences || [])].sort((a,b) => Number(b.sortOrder || 0) - Number(a.sortOrder || 0));
  if (!rows.length) { emptyState(target, t("noExperienceTitle"), t("noExperience")); return; }
  rows.forEach(item => {
    const card = node("article", "timeline-item reveal");
    const range = dateRange(item.startDate, item.endDate, item.isCurrent);
    if (range) card.append(node("div", "item-meta", range));
    card.append(node("h4", "item-title", item.position || item.title || ""));
    if (item.organization) card.append(node("div", "item-subtitle", item.organization));
    if (item.description) card.append(node("p", "item-description", item.description));
    target.append(card);
  });
}
function renderStackCards(key, targetSelector, emptyTitle, emptyDescription) {
  const target = $(targetSelector); clear(target);
  const rows = [...(portfolioData[key] || [])].sort((a,b) => Number(b.sortOrder || 0) - Number(a.sortOrder || 0));
  if (!rows.length) { emptyState(target, t(emptyTitle), t(emptyDescription)); return; }
  rows.forEach(item => {
    const card = node("article", "stack-card reveal");
    const range = dateRange(item.startDate || item.startYear, item.endDate || item.endYear, item.isCurrent);
    if (range) card.append(node("div", "item-meta", range));
    const title = item.institution || item.name || item.title || "";
    card.append(node("h4", "item-title", title));
    const subtitle = [item.degree, item.field, item.position].filter(Boolean).join(" · ");
    if (subtitle) card.append(node("div", "item-subtitle", subtitle));
    if (item.description) card.append(node("p", "item-description", item.description));
    target.append(card);
  });
}
function renderAchievements() {
  const target = $("#achievements-container"); clear(target);
  const rows = [...(portfolioData.achievements || [])].sort((a,b) => String(b.date || "").localeCompare(String(a.date || "")));
  if (!rows.length) { emptyState(target, t("noAchievementsTitle"), t("noAchievements")); return; }
  for (const item of rows) {
    const card = node("article", "achievement-card reveal");
    const date = formatDate(item.date); if (date) card.append(node("div", "item-meta", date));
    card.append(node("h3", "item-title", item.title || ""));
    if (item.issuer) card.append(node("div", "achievement-issuer", item.issuer));
    if (item.description) card.append(node("p", "item-description", item.description));
    const url = safeUrl(item.credentialUrl);
    if (url) { const a = node("a", "", t("readCredential")); setLink(a, url); card.append(a); }
    target.append(card);
  }
}
function renderSocialLinks() {
  const target = $("#social-links"); clear(target);
  for (const item of portfolioData.socialLinks || []) {
    const url = safeUrl(item.url); if (!url) continue;
    const a = node("a", "social-link", item.label || item.platform || t("externalLink")); setLink(a, url); target.append(a);
  }
}
function renderFilters() {
  const target = $("#project-filters"); clear(target);
  const technologies = [...new Set((portfolioData.projects || []).flatMap(p => Array.isArray(p.technologies) ? p.technologies : []).filter(Boolean))].sort((a,b) => String(a).localeCompare(String(b))).slice(0, 5);
  const filters = [{ value: "all", label: t("all") }, ...technologies.map(value => ({ value, label: value }))];
  if ((portfolioData.projects || []).some(project => project.featured)) filters.unshift({ value: "featured", label: t("featured") });
  if (!filters.some(item => item.value === selectedTechnology)) selectedTechnology = "all";
  for (const filter of filters) {
    const button = node("button", `filter-button${selectedTechnology === filter.value ? " active" : ""}`, filter.label);
    button.type = "button"; button.setAttribute("aria-pressed", selectedTechnology === filter.value ? "true" : "false");
    button.addEventListener("click", () => { selectedTechnology = filter.value; renderFilters(); renderProjects(); }); target.append(button);
  }
}
function renderProjects() {
  const target = $("#projects-container"); clear(target);
  const all = portfolioData.projects || [];
  let rows = [...all].sort((a,b) => Number(a.sortOrder ?? 9999) - Number(b.sortOrder ?? 9999));
  const query = searchTerm.trim().toLowerCase();
  if (query) rows = rows.filter(project => [project.title, project.summary, project.description, ...(Array.isArray(project.technologies) ? project.technologies : [])].some(value => String(value || "").toLowerCase().includes(query)));
  if (selectedTechnology === "featured") rows = rows.filter(project => project.featured);
  else if (selectedTechnology !== "all") rows = rows.filter(project => (project.technologies || []).includes(selectedTechnology));
  if (!rows.length) emptyState(target, all.length ? t("noSearchTitle") : t("noProjectsTitle"), all.length ? t("noSearch") : t("noProjects"), "⌕");
  else rows.forEach(project => target.append(buildProjectCard(project)));
  $("#project-count").textContent = t("projectsShown")(rows.length, all.length);
}
function buildProjectCard(project) {
  const card = node("article", "project-card reveal");
  const visual = node("div", "project-visual");
  if (project.featured) visual.append(node("span", "featured-label", t("featuredBadge")));
  const thumbnail = safeUrl(project.thumbnailUrl);
  if (thumbnail) {
    const img = node("img"); img.src = thumbnail; img.alt = project.title ? `${project.title} thumbnail` : "Project thumbnail"; img.loading = "lazy";
    img.onerror = () => { img.remove(); visual.append(node("span", "project-visual-placeholder", "{ }")); };
    visual.append(img);
  } else visual.append(node("span", "project-visual-placeholder", "{ }"));
  card.append(visual);
  const content = node("div", "project-card-content"), titleRow = node("div", "project-title-row");
  titleRow.append(node("h3", "", project.title || "Untitled project"));
  const open = node("button", "project-open", "↗"); open.type = "button"; open.setAttribute("aria-label", `${t("viewDetails")}: ${project.title || "project"}`); open.addEventListener("click", () => openProject(project)); titleRow.append(open);
  content.append(titleRow, node("p", "project-summary", project.summary || t("noDescription")));
  const tags = node("div", "project-tags"); (project.technologies || []).slice(0, 4).forEach(tech => tags.append(node("span", "tag", tech))); content.append(tags);
  card.append(content);
  card.tabIndex = 0; card.setAttribute("aria-label", `${t("viewDetails")}: ${project.title || "project"}`);
  card.addEventListener("keydown", event => { if (event.key === "Enter" && event.target === card) openProject(project); });
  return card;
}
function openProject(project) {
  activeProject = project;
  const target = $("#project-dialog-content"); clear(target);
  const thumbnail = safeUrl(project.thumbnailUrl);
  if (thumbnail) { const img = node("img", "dialog-hero"); img.src = thumbnail; img.alt = project.title ? `${project.title} screenshot` : "Project screenshot"; img.onerror = () => img.remove(); target.append(img); }
  target.append(node("h2", "dialog-title", project.title || "Untitled project"));
  if (project.summary) target.append(node("p", "", project.summary));
  if (project.description) target.append(node("p", "dialog-description", project.description));
  if ((project.technologies || []).length) { const tags = node("div", "project-tags"); project.technologies.forEach(item => tags.append(node("span", "tag", item))); target.append(tags); }
  if ((project.gallery || []).length) {
    const gallery = node("div", "project-gallery"); gallery.style.cssText = "display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-top:18px";
    project.gallery.map(safeUrl).filter(Boolean).forEach(url => { const img = node("img"); img.src = url; img.alt = `${project.title || "Project"} gallery image`; img.loading = "lazy"; img.style.cssText = "width:100%;height:120px;object-fit:cover;border-radius:10px;border:1px solid var(--border)"; img.onerror = () => img.remove(); gallery.append(img); });
    if (gallery.childElementCount) target.append(gallery);
  }
  const actions = node("div", "dialog-actions");
  for (const spec of [{ key: "repositoryUrl", label: t("repository") }, { key: "demoUrl", label: t("liveDemo") }]) {
    const url = safeUrl(project[spec.key]); if (!url) continue;
    const link = node("a", "button button-primary", `${spec.label} ↗`); setLink(link, url); actions.append(link);
  }
  if (actions.childElementCount) target.append(actions);
  const dialog = $("#project-dialog");
  if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
}
function renderAll() {
  if (!portfolioData) portfolioData = emptyData();
  if (lastLoadedAt) {
    if (!theme) theme = portfolioData.siteSettings?.defaultTheme === "dark" ? "dark" : "light";
    if (!language) language = portfolioData.siteSettings?.defaultLanguage === "en" ? "en" : "id";
    applyTheme(); applyLanguage();
  } else { document.documentElement.dataset.theme = theme || "light"; translateStatic(); }
  document.title = portfolioData.siteSettings?.siteTitle || "Raga Triagantara — Portfolio";
  const description = portfolioData.siteSettings?.metaDescription;
  if (description) $("meta[name='description']").content = description;
  renderProfile(); renderSkills(); renderExperiences();
  renderStackCards("education", "#education-container", "noEducationTitle", "noEducation");
  renderStackCards("organizations", "#organizations-container", "noOrganizationsTitle", "noOrganizations");
  renderAchievements(); renderFilters(); renderProjects(); renderSocialLinks();
  $("#current-year").textContent = String(new Date().getFullYear());
  if (lastLoadedAt) updateSyncStatus("success");
  revealElements();
}
function updateSyncStatus(state, message = "") {
  const dot = $("#sync-dot"), label = $("#sync-label"), retry = $("#retry-button"), banner = $("#error-banner");
  dot.className = `sync-dot${state === "loading" ? " loading" : state === "error" ? " error" : ""}`;
  if (state === "loading") { label.textContent = t("loading"); retry.hidden = true; }
  if (state === "success") { label.textContent = t("latest"); retry.hidden = true; }
  if (state === "error") { label.textContent = lastLoadedAt ? t("stale") : t("loadError"); retry.hidden = false; $("#error-message").textContent = message || t("loadErrorDetail"); }
  banner.hidden = state !== "error";
  $("#sync-time").textContent = lastLoadedAt ? `${t("lastUpdated")}: ${new Intl.DateTimeFormat(language === "en" ? "en-US" : "id-ID", {hour:"2-digit",minute:"2-digit"}).format(lastLoadedAt)}` : "";
}
async function loadData({ silent = false } = {}) {
  if (!silent) updateSyncStatus("loading");
  try {
    const response = await fetch(getRawDataUrl(true), { cache: "no-store", headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`HTTP ${response.status} saat mengambil ${CONFIG.contentRepo}/${CONFIG.dataPath}. Pastikan repository dan file JSON bersifat publik.`);
    const data = validatePortfolio(await response.json());
    portfolioData = data;
    lastLoadedAt = new Date();
    renderAll();
    updateSyncStatus("success");
  } catch (error) {
    const message = error instanceof SyntaxError ? "File JSON tidak valid. Perbaiki format data/portfolio.json." : (error?.message || t("loadErrorDetail"));
    updateSyncStatus("error", message);
    if (!portfolioData) { portfolioData = emptyData(); renderAll(); updateSyncStatus("error", message); }
  }
}
function revealElements() {
  const elements = $$(".reveal:not([data-observed])");
  if (!elements.length) return;
  if (prefersReducedMotion || !("IntersectionObserver" in window)) { elements.forEach(el => el.classList.add("reveal-visible")); return; }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("reveal-visible"); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  elements.forEach(el => { el.dataset.observed = "true"; observer.observe(el); });
}
function openMenu(open) {
  const nav = $("#main-nav"), button = $("#menu-toggle"); nav.classList.toggle("is-open", open); button.setAttribute("aria-expanded", String(open)); button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

$("#language-toggle").addEventListener("click", () => { language = language === "id" ? "en" : "id"; try { localStorage.setItem("raga-portfolio-language", language); } catch {} renderAll(); });
$("#theme-toggle").addEventListener("click", () => { theme = theme === "dark" ? "light" : "dark"; try { localStorage.setItem("raga-portfolio-theme", theme); } catch {} applyTheme(); });
$("#menu-toggle").addEventListener("click", () => openMenu(!$("#main-nav").classList.contains("is-open")));
$$("#main-nav a").forEach(link => link.addEventListener("click", () => openMenu(false)));
$("#project-search").addEventListener("input", event => { searchTerm = event.target.value; renderProjects(); });
$("#retry-button").addEventListener("click", () => loadData());
$("#error-retry").addEventListener("click", () => loadData());
$("#project-dialog").addEventListener("click", event => { if (event.target === $("#project-dialog")) $("#project-dialog").close(); });
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#project-search").focus(); }
  if (event.key === "Escape") openMenu(false);
});
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") loadData({ silent: true }); });
window.addEventListener("focus", () => loadData({ silent: true }));
window.addEventListener("pagehide", () => { if (refreshTimer) clearInterval(refreshTimer); });

document.documentElement.dataset.theme = theme || "light";
translateStatic();
loadData();
refreshTimer = window.setInterval(() => { if (document.visibilityState === "visible") loadData({ silent: true }); }, CONFIG.refreshIntervalMs);
