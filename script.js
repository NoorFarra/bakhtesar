const articles = [
  { id: 1, category: 'فلسطين', title: 'نموذج تغطية رئيسية: كيف نعرض أهم خبر في اليوم بسرعة ووضوح دون تضخيم', excerpt: 'مثال على خبر رئيسي مبني على التحقق والإسناد والسياق، مع إبراز آخر تحديث ومصدر المعلومة.', time: 'منذ 18 دقيقة', source: 'مصدر رسمي — تجريبي', visual: 'visual-palestine' },
  { id: 2, category: 'اقتصاد', title: 'شرح تجريبي: ماذا يعني القرار الاقتصادي الجديد للمستهلك والسوق؟', excerpt: 'تلخيص مبسط يوضح الأثر المتوقع ويضع الأرقام الأساسية أمام القارئ.', time: 'منذ 32 دقيقة', source: 'بيانات رسمية — تجريبي', visual: 'visual-economy' },
  { id: 3, category: 'دولي', title: 'أبرز التطورات الدولية في موجز واحد قابل للقراءة خلال دقيقة', excerpt: 'صياغة سريعة للأحداث الأهم مع فصل المعلومة المؤكدة عن التحليل أو التوقع.', time: 'منذ 45 دقيقة', source: 'مصادر متعددة — تجريبي', visual: 'visual-world' },
  { id: 4, category: 'العالم العربي', title: 'موجز عربي: ثلاثة ملفات تتصدر المشهد خلال الساعات الماضية', excerpt: 'بدلاً من عشرات العناوين، نجمع النقاط الرئيسية في سياق واحد واضح.', time: 'منذ ساعة', source: 'مصادر عربية — تجريبي', visual: 'visual-arab' },
  { id: 5, category: 'رياضة', title: 'المشهد الرياضي اليوم: أبرز النتائج وما الذي ينتظر الجماهير', excerpt: 'بطاقة رياضية مختصرة تضع النتيجة والخلفية والموعد القادم في مكان واحد.', time: 'منذ ساعة و12 دقيقة', source: 'اتحاد رياضي — تجريبي', visual: 'visual-sports' },
  { id: 6, category: 'تكنولوجيا', title: 'تقنية: ما الجديد في خدمة رقمية حديثة ولماذا قد تهم المستخدم؟', excerpt: 'خبر تقني بلغة بسيطة يشرح الميزة الجديدة وتأثيرها العملي بعيداً عن المصطلحات المعقدة.', time: 'منذ ساعتين', source: 'بيان تقني — تجريبي', visual: 'visual-tech' },
  { id: 7, category: 'فلسطين', title: 'تحديث محلي: كيف نغطي حدثاً متسارعاً دون نشر معلومة غير مكتملة', excerpt: 'نموذج لمادة يتم تحديثها تدريجياً مع حفظ سجل واضح لما تغير ومتى.', time: 'منذ ساعتين و20 دقيقة', source: 'مصدر مباشر — تجريبي', visual: 'visual-palestine' },
  { id: 8, category: 'اقتصاد', title: 'بالأرقام: قراءة سريعة لمؤشر اقتصادي وتأثيره على الحياة اليومية', excerpt: 'عرض مختصر للرقم، مقارنته بالفترة السابقة، وما يعنيه بلغة عملية.', time: 'منذ 3 ساعات', source: 'بيانات اقتصادية — تجريبي', visual: 'visual-economy' },
  { id: 9, category: 'دولي', title: 'خلفية مختصرة: كيف وصل ملف دولي معقد إلى هذه المرحلة؟', excerpt: 'مساحة تفسيرية تربط الأحداث الحالية بما سبقها وتوضح نقاط الخلاف الأساسية.', time: 'منذ 3 ساعات و15 دقيقة', source: 'مراجع عامة — تجريبي', visual: 'visual-world' },
  { id: 10, category: 'العالم العربي', title: 'خريطة متابعة: أبرز التصريحات الرسمية اليوم وماذا قالت كل جهة', excerpt: 'ترتيب للتصريحات حسب المصدر والتوقيت مع تجنب دمج المواقف المتعارضة في صياغة واحدة.', time: 'منذ 4 ساعات', source: 'تصريحات رسمية — تجريبي', visual: 'visual-arab' },
  { id: 11, category: 'رياضة', title: 'قبل المباراة: ما الذي يجب معرفته في أقل من 60 ثانية؟', excerpt: 'توقيت، غيابات، ترتيب، وسياق المباراة في بطاقة واحدة قابلة للمشاركة.', time: 'منذ 5 ساعات', source: 'مصدر رياضي — تجريبي', visual: 'visual-sports' },
  { id: 12, category: 'تكنولوجيا', title: 'أمن رقمي: ثلاث ممارسات بسيطة تحمي الحسابات الرسمية للمؤسسة', excerpt: 'محتوى خدمي قصير يشرح أساسيات المصادقة الثنائية والصلاحيات والاسترداد.', time: 'منذ 5 ساعات ونصف', source: 'إرشادات تقنية — تجريبي', visual: 'visual-tech' },
];

const categories = ['الكل', 'فلسطين', 'العالم العربي', 'دولي', 'اقتصاد', 'رياضة', 'تكنولوجيا'];
let activeCategory = 'الكل';
let visibleCount = 6;

const newsGrid = document.getElementById('newsGrid');
const filterChips = document.getElementById('filterChips');
const loadMore = document.getElementById('loadMore');
const toast = document.getElementById('toast');

function renderFilters() {
  filterChips.innerHTML = categories.map(cat => `<button class="filter-chip ${cat === activeCategory ? 'active' : ''}" data-filter="${cat}">${cat}</button>`).join('');
  filterChips.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.filter;
    visibleCount = 6;
    renderFilters();
    renderNews();
  }));
}

function filteredArticles() {
  return activeCategory === 'الكل' ? articles : articles.filter(a => a.category === activeCategory);
}

function renderNews() {
  const list = filteredArticles();
  newsGrid.innerHTML = list.slice(0, visibleCount).map(a => `
    <article class="news-card reveal visible" data-open-article="${a.id}" tabindex="0">
      <div class="news-thumb ${a.visual}"><span>${a.category}</span></div>
      <div class="news-body">
        <div class="meta-line"><span>${a.time}</span></div>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
        <div class="news-footer"><span class="source-pill">${a.source}</span><span>اقرأ ←</span></div>
      </div>
    </article>`).join('');
  loadMore.style.display = visibleCount >= list.length ? 'none' : 'block';
  bindArticleTriggers();
}

loadMore.addEventListener('click', () => { visibleCount += 4; renderNews(); });

const tickerItems = [
  'خبر تجريبي: تحديث جديد ضمن التغطية المتواصلة للواجهة الرئيسية',
  'اقتصاد: مثال على عنوان سريع مع مصدر واضح وتوقيت محدث',
  'تحقق: الادعاء المتداول في هذا النموذج لم يتم إثباته حتى الآن',
  'رياضة: موجز تجريبي لأبرز النتائج والمواعيد القادمة'
];
const tickerTrack = document.getElementById('tickerTrack');
tickerTrack.innerHTML = tickerItems.map(item => `<span>${item}</span>`).join('');
document.getElementById('tickerPause').addEventListener('click', e => {
  tickerTrack.classList.toggle('paused');
  e.currentTarget.textContent = tickerTrack.classList.contains('paused') ? '▶' : 'Ⅱ';
});

const dateEl = document.getElementById('liveDate');
function updateDate() {
  const now = new Date();
  dateEl.textContent = new Intl.DateTimeFormat('ar-PS', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }).format(now);
}
updateDate();
setInterval(updateDate, 60000);

const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('bikhtisar-theme') === 'dark') document.body.classList.add('dark');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('bikhtisar-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

const searchOverlay = document.getElementById('searchOverlay');
const globalSearch = document.getElementById('globalSearch');
const searchResults = document.getElementById('searchResults');
function openSearch() {
  searchOverlay.classList.add('open'); searchOverlay.setAttribute('aria-hidden','false');
  setTimeout(() => globalSearch.focus(), 120);
}
function closeSearch() { searchOverlay.classList.remove('open'); searchOverlay.setAttribute('aria-hidden','true'); }
document.getElementById('searchOpen').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);
searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
globalSearch.addEventListener('input', () => {
  const q = globalSearch.value.trim();
  if (!q) { searchResults.innerHTML = ''; return; }
  const results = articles.filter(a => `${a.title} ${a.category} ${a.excerpt}`.includes(q)).slice(0,6);
  searchResults.innerHTML = results.length ? results.map(a => `<button class="search-result" data-open-article="${a.id}"><span>${a.category}</span><strong>${a.title}</strong></button>`).join('') : '<div class="search-result"><strong>لا توجد نتائج تجريبية مطابقة</strong></div>';
  searchResults.querySelectorAll('[data-open-article]').forEach(btn => btn.addEventListener('click', () => { closeSearch(); openArticle(+btn.dataset.openArticle); }));
});

const mobileMenu = document.getElementById('mobileMenu');
document.getElementById('menuToggle').addEventListener('click', () => { mobileMenu.classList.add('open'); mobileMenu.setAttribute('aria-hidden','false'); });
document.getElementById('menuClose').addEventListener('click', () => { mobileMenu.classList.remove('open'); mobileMenu.setAttribute('aria-hidden','true'); });
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

const articleModal = document.getElementById('articleModal');
const articleModalBody = document.getElementById('articleModalBody');
function openArticle(id) {
  const a = articles.find(x => x.id === id);
  if (!a) return;
  articleModalBody.innerHTML = `
    <span class="eyebrow">${a.category}</span>
    <h2>${a.title}</h2>
    <div class="meta-line"><span>${a.time}</span><span>•</span><span>نموذج تجريبي</span></div>
    <p>${a.excerpt}</p>
    <p>هذه نافذة قراءة تجريبية توضح كيف يمكن فتح الخبر بدون قاعدة بيانات. في النسخة الحقيقية ستظهر هنا تفاصيل الخبر، السياق، آخر تحديث، والمراجع المرتبطة بالمادة.</p>
    <div class="modal-source"><strong>المصدر:</strong> ${a.source}<br><strong>تنبيه:</strong> هذا المحتوى غير حقيقي ومخصص للتصميم فقط.</div>
  `;
  articleModal.classList.add('open'); articleModal.setAttribute('aria-hidden','false');
}
function closeArticle() { articleModal.classList.remove('open'); articleModal.setAttribute('aria-hidden','true'); }
document.getElementById('articleClose').addEventListener('click', closeArticle);
articleModal.addEventListener('click', e => { if (e.target === articleModal) closeArticle(); });
function bindArticleTriggers() {
  document.querySelectorAll('[data-open-article]').forEach(el => {
    el.onclick = () => openArticle(+el.dataset.openArticle);
    el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') openArticle(+el.dataset.openArticle); };
  });
}

function showToast(msg) {
  toast.textContent = msg; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}
document.querySelectorAll('[data-share]').forEach(btn => btn.addEventListener('click', async e => {
  e.stopPropagation();
  try { await navigator.clipboard.writeText(location.href); showToast('تم نسخ رابط الصفحة'); }
  catch { showToast('مشاركة تجريبية'); }
}));

document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  showToast('تم تسجيل الاشتراك التجريبي بنجاح');
  e.target.reset();
});

document.querySelectorAll('[data-category-link]').forEach(link => link.addEventListener('click', () => {
  activeCategory = link.dataset.categoryLink; visibleCount = 6; renderFilters(); renderNews();
}));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSearch(); closeArticle(); mobileMenu.classList.remove('open'); }
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

renderFilters();
renderNews();
bindArticleTriggers();
