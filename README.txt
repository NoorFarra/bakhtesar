باختصار — النسخة العصرية | Bikhtisar Modern Demo
=================================================
WHAT IS READY
- Responsive dark editorial shell in the existing Bikhtisar gold/cyan identity.
- Cinematic image carousel, mobile swipeable cards, and persistent mobile bottom navigation.
- Immersive article reader: main picture, additional pictures, thumbnail selection, next/previous arrows, captions, accessible image descriptions.
- Source-aware summary panel distinguishes DEMO previews from true AI-generated summaries.
- Browser text-to-speech works now (Arabic/English, play, pause/resume, stop, rate 0.8–1.5x), subject to browser-installed voice quality.
- The existing weather, clock, theme toggle, language switch, search and news listing are preserved.

REAL AI — CONNECT WHEN CMS IS READY
1. Deploy the project root to Vercel (the `api/` folder becomes serverless functions).
2. Set these Vercel Environment Variables (NEVER put them in frontend JS):
   OPENAI_API_KEY, PUBLISH_WEBHOOK_SECRET, BLOB_READ_WRITE_TOKEN.
   Optionally SUMMARY_MODEL (default gpt-4.1-mini), TTS_MODEL (default gpt-4o-mini-tts).
3. On CMS publication, backend must POST `/api/publish` with Authorization: Bearer <PUBLISH_WEBHOOK_SECRET>
   and JSON body { "id":"story-001", "publishedAt":"2026-09-22T12:00:00Z",
   "ar": {"title":"...", "body":"Full verified Arabic article...", "source":"..."},
   "en": {"title":"...", "body":"Full verified English article...", "source":"..."} }.
   Response returns `summary.ar/en` and `audioUrl.ar/en` (MP3 from OpenAI TTS, hosted on Vercel Blob).
4. Have editors review the summaries and article before exposing the generated text/audio.
5. CMS stores those fields and exports `data/articles.json` (shape in data/README.md).
   The website detects this data and replaces the fictional demo list on page load.
   The JSON MUST include complete text, category, main/additional licensed images and source.
   For real production scale, replace static export with CMS API and add idempotency/retry and content audit.

IMPORTANT
- There is NO connected CMS, API key, or real-news ingestion inside this project. The preloaded stories and stock images are strictly fictional layout placeholders and are labeled as such.
- The real AI endpoint is implemented but cannot run until deployment and secret credentials are supplied. Its automatic invocation must be wired to YOUR CMS publication event.
- For demo stories, sound is browser speech synthesis, NOT AI voice recording. Real CMS stories can play the generated MP3 if present.
- AI summaries can be inaccurate, especially on breaking stories. The interface labels them as machine-generated and recommends reading the source.
- Images are illustrative external Unsplash photos. Replace them with licensed, captioned media when publishing real news.

تحديث السلايدر: انتقال سلس بين الأخبار
-----------------------------------
عند الضغط على السهم يمين/يسار، تظهر الصورة التالية بتأثير Crossfade مع حركة خفيفة باتجاه السهم وتكبير/تصغير ناعم؛ العناوين والوصف تظهر تدريجياً.
يعمل التأثير أيضاً مع مؤشرات الأخبار والتبديل التلقائي كل 7 ثوانٍ، ويتوقف التحريك عند تفعيل خيار تقليل الحركة في النظام.
التغييرات موجودة في styles.css وscript.js فقط.


تحديث معرض الصور داخل الخبر — Gallery transitions
-------------------------------------------------
- تنقّل الصور الآن بترانزشن Slide + Crossfade + Zoom، بدون تغيير مفاجئ للصورة.
- تم تثبيت اتجاه الأسهم داخل المقال: اليسار للسابق، اليمين للتالي (في اللغتين).
- الصور المصغّرة واللمس على الموبايل وأزرار الكيبورد (← →) تستخدم نفس التأثير.
- يمكن الضغط على الأسهم عدة مرات؛ الطلبات المتتابعة تنتظر حتى انتهاء الحركة.
- يراعي إعداد تقليل الحركة في الجهاز (prefers-reduced-motion).
- هذه نسخة مشروع كاملة؛ افتح index.html أو انشر المجلد على Vercel.
- الصور الإيضاحية تحتاج اتصال إنترنت، والـ AI الحقيقي يحتاج مفاتيح وربط CMS كما ورد أعلاه.


تحديث تجربة القراءة 3.0 / Reader Controls
----------------------------------
- لوحة أدوات متناسقة تحت معرض صور الخبر: الاستماع والإيقاف والسرعة ونسخ الرابط.
- حجم الخط: A− / A+ بسبعة مستويات من 85% إلى 160%، وإعادة ضبط 100%.
- يتم حفظ حجم الخط محلياً في المتصفح وتطبيقه على ملخص الخبر ووصفه ونصه.
- الوضع المتجاوب: عمودان للشاشات الواسعة وعمود واحد للتابلت والموبايل.
- أدوات تحكم كبيرة مناسبة للمس، تسميات لقارئ الشاشة واحترام تقليل الحركة.
- المحتوى التجريبي لا يُعدّ خبراً حقيقياً؛ توليد الملخص والصوت الحقيقي يحتاج ربط النشر.
