// English lives in the HTML (so the page works without JS and indexes in English).
// Uzbek strings below replace it by data-i18n key. Uzbek uses ‘ (U+2018) for o‘/g‘
// and ’ (U+2019) for the tutuq belgisi.
(function () {
  const UZ = {
    "doc.title": "Umar Yuldashev — Mahsulot muhandisi",
    "skip": "Ishlarga o‘tish",
    "nav.work": "Ishlar",
    "nav.resume": "Rezyume",
    "nav.contact": "Aloqa",

    "hero.eyebrow": "Mahsulot muhandisi · Toshkent · Masofaviy",
    "hero.lede": "Men dasturni bo‘sh papkadan odamlar foydalanadigan va pul to‘laydigan mahsulotgacha olib boraman: yig‘ilgan, sertifikatlangan, narxi belgilangan va ishga tushirilgan. Microsoft Store’da sotilayotgan ikkita ilova, studiya sayti va ishlab turgan Telegram botlar.",
    "hero.email": "Menga yozing",
    "hero.resume": "Rezyumeni o‘qish",

    "log.title": "Relizlar jurnali",
    "log.sub": "Eng yangisi tepada",
    "log.navbat": "Asoschi bilan telefonda sinovdan so‘ng sozlash jarayoni qayta qurildi",
    "log.imlo": "O‘zbek imlo tekshiruvchisi Telegramda ishga tushdi",
    "log.meridian": "Butun hujum zanjiri avtomatik skript bilan yechildi",
    "log.atom": "Studiya sayti o‘z ma’lumotlar bazasi va Telegram admin paneli bilan ishga tushdi",
    "log.scanner": "$0.99 lik Pro versiya Store sertifikatsiyasidan o‘tdi",
    "log.readcat": "Pullik o‘quvchi ilova Microsoft Store’da sotuvga chiqdi",
    "log.finance": "Postgres ma’lumotlar bazasi bilan Railway’ga joylandi",
    "st.testing": "Sinovda",
    "st.live": "Ishlamoqda",
    "st.verified": "Tekshirildi",
    "st.shipped": "Chiqarildi",
    "st.published": "Nashr etildi",

    "work.title": "Ishlar",
    "cat.store": "Microsoft Store ilovalari",
    "cat.web": "Veb",
    "cat.bots": "Telegram botlar",
    "cat.security": "Xavfsizlik",
    "hard": "Qiyin joyi",
    "link.store": "Microsoft Store’da ko‘rish",
    "link.code": "Kodni ko‘rish",
    "link.telegram": "Telegramda ochish",

    "alt.readcat": "ReadCat roman sahifasini toza o‘qish rejimida ko‘rsatmoqda",
    "alt.scanner": "Screen Scanner: chapda ekrandan olingan uchrashuv qaydi, o‘ngda ajratib olingan matn",
    "alt.atom": "ATOM studiyasi saytidan: shom paytida yoritilgan zamonaviy uy va suv havzasi",

    "p.readcat.kind": "Windows uchun PDF va EPUB o‘quvchi · $4.99",
    "p.readcat.desc": "PDF, EPUB, DOCX, Markdown va TXT uchun oflayn o‘quvchi. Akkaunt yo‘q, reklama yo‘q, kuzatuv yo‘q. Har bir faylda qayerda to‘xtaganingizni eslab qoladi.",
    "p.readcat.hard": "PDF’ni kattalashtirish sichqoncha g‘ildiragining har bir harakatida sahifani qaytadan chizardi. Men buni ikkiga ajratdim: darhol CSS orqali oldindan ko‘rinish va g‘ildirak to‘xtaganda bitta aniq chizish. Natijada kattalashtirish silliq ishlaydi.",

    "p.scanner.kind": "Windows uchun ekrandan matn olish · Bepul, Pro $0.99",
    "p.scanner.desc": "Alt+C ni bosing, ekranning istalgan qismini belgilang — matn allaqachon buferda. Windows’ga o‘rnatilgan OCR’dan foydalanadi, to‘liq oflayn.",
    "p.scanner.hard": "Electron Windows OCR va Store xarid API’lariga o‘zi ulana olmaydi. Men ikkalasini bajaradigan kichik C# yordamchi dastur yozdim; ilova har bir skanerlash va Pro’ni ochish uchun unga murojaat qiladi.",

    "p.atom.kind": "Toshkentdagi arxitektura studiyasi uchun sayt · Mijoz loyihasi",
    "p.atom.desc": "O‘rta segmentdagi interyer studiyasi uchun loyihalar sahifalari, ta’mirlash narxi kalkulyatori va mijoz arizalarini yig‘ish. Studiya yangi arizalarni Telegram panelidan boshqaradi.",
    "p.atom.hard": "Ochilish sahnasida kamera kulrang ko‘p qavatli uydan bitta yoritilgan deraza orqali tayyor xonaga uchib kiradi. Kadrlar to‘g‘ridan-to‘g‘ri DOM’ga yoziladi, og‘ir xiralashtirish effekti esa faqat kuchli kompyuterlarda ishlaydi.",

    "p.blogy.kind": "Django blog · O‘quv loyihasi",
    "p.blogy.desc": "Statik Bootstrap shablonini mualliflar, kategoriyalar, qidiruv, sahifalash va admin paneli bor, ma’lumotlar bazasiga asoslangan blogga aylantirdim.",

    "p.imlo.kind": "O‘zbek tili imlo va grammatika tekshiruvchisi · Ishlamoqda",
    "p.imlo.desc": "Unga xabar yuboring — tuzatilgan holda qaytaradi. Matnni 2026-yil sentabrda Senat ma’qullagan yangi lotin alifbosida ham yozib bera oladi.",
    "p.imlo.hard": "Bepul model tarifi taxminan har beshta so‘rovdan birida xato beradi. Bot kutib turib uchta model orasida navbatma-navbat o‘tadi, shuning uchun foydalanuvchilar xatoni deyarli ko‘rmaydi.",

    "p.navbat.kind": "Do‘kon kanallari uchun rejalashtirilgan postlar · Sinovda",
    "p.navbat.desc": "O‘zbekistondagi kiyim do‘konlari Telegram kanallari orqali sotadi. Egasi rasmlarni bir marta yuklaydi, bot esa ularni jadval bo‘yicha do‘konning o‘z izohi bilan joylaydi.",
    "p.navbat.hard": "Asoschi telefonida sozlashni oxirigacha yetkaza olmadi. Men sozlamalar ekranini uch qadamli yo‘riqnomali sozlash bilan almashtirdim va ixtiyoriy maydonlarni chetga oldim.",

    "p.finance.name": "Moliya boti",
    "p.finance.kind": "Shaxsiy moliya hisobchisi · Imtihon loyihasi",
    "p.finance.desc": "Daromad va xarajatlarni yozing, har bir kategoriya uchun limit qo‘ying va oylik grafiklarni to‘g‘ridan-to‘g‘ri chatda oling.",

    "p.meridian.kind": "Zaif o‘quv serveri · OSCP-medium darajasi",
    "p.meridian.desc": "Soxta IT yordam xizmati serveri: sizib chiqqan zaxira nusxadan root’gacha bitta real yo‘l. Qo‘shimcha portal har bir talaba uchun o‘z flaglari bilan alohida nusxa ishga tushiradi.",
    "p.meridian.hard": "Bitta Ansible rollari to‘plami ham VM obrazini, ham Docker obrazini yig‘adi. Yechuvchi skript har bir yig‘ishda butun zanjirni o‘tib, uni hali ham yechish mumkinligini isbotlaydi.",

    "p.ddos.name": "Rate-limit laboratoriyasi",
    "p.ddos.kind": "So‘rovlar oqimiga qarshi mashq laboratoriyasi",
    "p.ddos.desc": "Har bir IP uchun sirpanuvchi oyna cheklovchisi bor kichik server va siz unga hujum qilayotganda ruxsat berilgan va bloklangan so‘rovlarni ko‘rsatadigan jonli panel.",
    "p.ddos.node": "Node.js, tashqi kutubxonalarsiz",

    "resume.title": "Rezyume",
    "resume.print": "PDF sifatida saqlash",
    "r.about": "Men haqimda",
    "r.about.text": "Men nima buzilgani, sekin ishlashi yoki chala qolganini ko‘radigan va uni shunchaki qoldira olmaydigan muhandisman. Mahsulotlarni boshidan oxirigacha o‘zim quraman: kod, paketlash, do‘kon sahifasi va haqiqiy foydalanuvchilardan keyingi tuzatishlar. Bu odat foydali bo‘ladigan to‘liq masofaviy ish izlayapman.",
    "r.edu": "Ta’lim",
    "r.edu.degree": "Kompyuter fanlari bo‘yicha bakalavr",
    "r.edu.course": "Ma’lumotlar tuzilmalari va algoritmlar, ma’lumotlar bazalari, sun’iy intellekt, operatsion tizimlar, dasturiy injiniring",
    "r.proj": "Tanlangan loyihalar",
    "r.proj.readcat": "Windows uchun pullik PDF va EPUB o‘quvchi, Microsoft Store’da sotilmoqda. Electron, React, pdf.js.",
    "r.proj.scanner": "Windows uchun oflayn ekran OCR, $0.99 lik ichki xarid bilan. Electron, React, C# / WinRT.",
    "r.proj.atom": "Toshkentdagi arxitektura studiyasi sayti: narx kalkulyatori va Telegram arizalar paneli. Next.js, Neon Postgres.",
    "r.proj.imlo": "O‘zbek imlosi va grammatikasini tuzatadigan ishlab turgan Telegram bot. Python, Gemini API.",
    "r.proj.navbat": "Do‘kon kanallari uchun rejalashtirilgan postlar boti va Mini App. Django, React.",
    "r.proj.meridian": "Har bir talaba uchun alohida nusxa ochadigan OSCP-medium o‘quv serveri. Ansible, Packer, Docker, FastAPI.",
    "r.skills": "Ko‘nikmalar",
    "r.sk.lang": "Dasturlash tillari",
    "r.sk.front": "Frontend",
    "r.sk.back": "Backend",
    "r.sk.data": "Ma’lumotlar",
    "r.sk.plat": "Platformalar",
    "r.sk.plat.v": "Electron, MSIX va Microsoft Store, Telegram Bot API va Mini Apps",
    "r.sk.infra": "Infratuzilma",
    "r.spoken": "Biladigan tillarim",
    "r.en": "Ingliz tili",
    "r.ru": "Rus tili",
    "r.uz": "O‘zbek tili",
    "r.ar": "Arab tili",
    "r.fluent": "Erkin",
    "r.native": "Ona tili",
    "r.conv": "So‘zlashuv darajasida",
    "r.looking": "Nima izlayapman",
    "r.looking.text": "To‘liq stavkali masofaviy ish va amaliyot, AQSh vaqt zonalari ham mos keladi. Toshkentda yashayman (UTC+5).",

    "contact.title": "Aloqa",
    "contact.line": "Men bilan bog‘lanishning eng tez yo‘li — elektron pochta.",
    "foot": "Oddiy HTML va CSS, GitHub Pages’da joylashgan."
  };

  const root = document.documentElement;
  root.classList.add("js");

  const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const altNodes = Array.from(document.querySelectorAll("[data-i18n-alt]"));
  const EN = { "doc.title": document.title };
  textNodes.forEach((el) => { EN[el.dataset.i18n] = el.textContent; });
  altNodes.forEach((el) => { EN[el.dataset.i18nAlt] = el.alt; });

  function apply(lang) {
    const dict = lang === "uz" ? UZ : EN;
    const pick = (key) => dict[key] ?? EN[key];
    textNodes.forEach((el) => { el.textContent = pick(el.dataset.i18n); });
    altNodes.forEach((el) => { el.alt = pick(el.dataset.i18nAlt); });
    document.title = pick("doc.title");
    root.lang = lang;
    document.querySelectorAll(".lang button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  function saved() {
    try { return localStorage.getItem("lang"); } catch { return null; }
  }

  const fromUrl = new URLSearchParams(location.search).get("lang");
  const initial = [fromUrl, saved()].find((l) => l === "en" || l === "uz") || "en";
  if (initial !== "en") apply(initial);

  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => {
      apply(b.dataset.lang);
      try { localStorage.setItem("lang", b.dataset.lang); } catch { /* private mode */ }
    });
  });

  document.getElementById("print-resume").addEventListener("click", () => window.print());

  // Fit the name to the column by moving along Anybody's width axis (50–150%).
  // Desktop: the whole name is one line. Phones: each span is its own line.
  const name = document.querySelector(".name");
  const textWidth = (el) => {
    const r = document.createRange();
    r.selectNodeContents(el);
    return r.getBoundingClientRect().width;
  };
  function fitLine(el, target) {
    let lo = 50, hi = 150;
    for (let n = 0; n < 12; n++) {
      const mid = (lo + hi) / 2;
      el.style.fontStretch = mid + "%";
      if (textWidth(el) > target) hi = mid; else lo = mid;
    }
    el.style.fontStretch = lo + "%";
  }
  function fitName() {
    const target = name.clientWidth - 2;
    const spans = Array.from(name.children);
    spans.forEach((s) => { s.style.fontStretch = ""; });
    if (getComputedStyle(spans[0]).display === "block") {
      spans.forEach((s) => fitLine(s, target));
    } else {
      name.style.fontStretch = "";
      fitLine(name, target);
    }
  }
  let fitQueued = false;
  const queueFit = () => {
    if (fitQueued) return;
    fitQueued = true;
    requestAnimationFrame(() => { fitQueued = false; fitName(); });
  };
  fitName();
  if (document.fonts) document.fonts.ready.then(fitName);
  window.addEventListener("resize", queueFit);

  document.querySelectorAll(".log-rows li").forEach((li, i) => li.style.setProperty("--i", i));
  const reveal = () => root.classList.add("loaded");
  requestAnimationFrame(() => requestAnimationFrame(reveal));
  setTimeout(reveal, 800); // rAF stalls in background tabs; never leave the log hidden
})();
