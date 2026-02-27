/* =============================================
 *  DATABAZA E 30 XHUZEVE
 * ============================================= */
let juzData = [
    { number: 1,  name: "Elif Lam Mim",           startInfo: "El-Fatiha 1:1",       endInfo: "El-Bekare 2:141",      surahs: "El-Fatiha (1-7) · El-Bekare (1-141)",                              pages: 20, status: "unread", bookmark: null },
    { number: 2,  name: "Sejekulu",                startInfo: "El-Bekare 2:142",     endInfo: "El-Bekare 2:252",      surahs: "El-Bekare (142-252)",                                               pages: 20, status: "unread", bookmark: null },
    { number: 3,  name: "Tilkel Rusulu",           startInfo: "El-Bekare 2:253",     endInfo: "Ali Imran 3:92",       surahs: "El-Bekare (253-286) · Ali Imran (1-92)",                            pages: 20, status: "unread", bookmark: null },
    { number: 4,  name: "Len Tenalu",              startInfo: "Ali Imran 3:93",      endInfo: "En-Nisa 4:23",         surahs: "Ali Imran (93-200) · En-Nisa (1-23)",                               pages: 20, status: "unread", bookmark: null },
    { number: 5,  name: "Vel Muhsanatu",           startInfo: "En-Nisa 4:24",        endInfo: "En-Nisa 4:147",        surahs: "En-Nisa (24-147)",                                                  pages: 20, status: "unread", bookmark: null },
    { number: 6,  name: "La Juhibbullah",          startInfo: "En-Nisa 4:148",       endInfo: "El-Maide 5:81",        surahs: "En-Nisa (148-176) · El-Maide (1-81)",                               pages: 20, status: "unread", bookmark: null },
    { number: 7,  name: "Ve Idha Semi'u",          startInfo: "El-Maide 5:82",       endInfo: "El-En'am 6:110",       surahs: "El-Maide (82-120) · El-En'am (1-110)",                              pages: 20, status: "unread", bookmark: null },
    { number: 8,  name: "Ve Lev Ennena",           startInfo: "El-En'am 6:111",      endInfo: "El-A'raf 7:87",        surahs: "El-En'am (111-165) · El-A'raf (1-87)",                              pages: 20, status: "unread", bookmark: null },
    { number: 9,  name: "Kalel Meleu",             startInfo: "El-A'raf 7:88",       endInfo: "El-Enfal 8:40",        surahs: "El-A'raf (88-206) · El-Enfal (1-40)",                               pages: 20, status: "unread", bookmark: null },
    { number: 10, name: "Va'lemu",                 startInfo: "El-Enfal 8:41",       endInfo: "Et-Teube 9:92",        surahs: "El-Enfal (41-75) · Et-Teube (1-92)",                                pages: 20, status: "unread", bookmark: null },
    { number: 11, name: "Ja'tedhirune",            startInfo: "Et-Teube 9:93",       endInfo: "Hud 11:5",             surahs: "Et-Teube (93-129) · Junus (1-109) · Hud (1-5)",                     pages: 20, status: "unread", bookmark: null },
    { number: 12, name: "Ve ma min Dabbeh",        startInfo: "Hud 11:6",            endInfo: "Jusuf 12:52",          surahs: "Hud (6-123) · Jusuf (1-52)",                                        pages: 20, status: "unread", bookmark: null },
    { number: 13, name: "Ve ma Uberriu",           startInfo: "Jusuf 12:53",         endInfo: "Ibrahim 14:52",        surahs: "Jusuf (53-111) · Er-Ra'd (1-43) · Ibrahim (1-52)",                  pages: 20, status: "unread", bookmark: null },
    { number: 14, name: "Rubema",                  startInfo: "El-Hixhr 15:1",       endInfo: "En-Nahl 16:128",       surahs: "El-Hixhr (1-99) · En-Nahl (1-128)",                                 pages: 20, status: "unread", bookmark: null },
    { number: 15, name: "Subhanel-ledhi",          startInfo: "El-Isra 17:1",        endInfo: "El-Kehf 18:74",        surahs: "El-Isra (1-111) · El-Kehf (1-74)",                                  pages: 20, status: "unread", bookmark: null },
    { number: 16, name: "Kal Elem Ekul",           startInfo: "El-Kehf 18:75",       endInfo: "Ta-Ha 20:135",         surahs: "El-Kehf (75-110) · Merjem (1-98) · Ta-Ha (1-135)",                  pages: 20, status: "unread", bookmark: null },
    { number: 17, name: "Ikterebe",                startInfo: "El-Enbija 21:1",      endInfo: "El-Haxh 22:78",        surahs: "El-Enbija (1-112) · El-Haxh (1-78)",                                pages: 20, status: "unread", bookmark: null },
    { number: 18, name: "Kad Efleha",              startInfo: "El-Mu'minun 23:1",    endInfo: "El-Furkan 25:20",      surahs: "El-Mu'minun (1-118) · En-Nur (1-64) · El-Furkan (1-20)",            pages: 20, status: "unread", bookmark: null },
    { number: 19, name: "Ve Kalel-ledhine",        startInfo: "El-Furkan 25:21",     endInfo: "En-Neml 27:55",        surahs: "El-Furkan (21-77) · Esh-Shuara (1-227) · En-Neml (1-55)",           pages: 20, status: "unread", bookmark: null },
    { number: 20, name: "Emmen Haleka",            startInfo: "En-Neml 27:56",       endInfo: "El-Kasas 28:88",       surahs: "En-Neml (56-93) · El-Kasas (1-88)",                                 pages: 20, status: "unread", bookmark: null },
    { number: 21, name: "Utlu ma Uhije",           startInfo: "El-Ankebut 29:1",     endInfo: "El-Ahzab 33:30",       surahs: "El-Ankebut (1-69) · Er-Rum (1-60) · Llukman (1-34) · Es-Sexhde (1-30) · El-Ahzab (1-30)", pages: 20, status: "unread", bookmark: null },
    { number: 22, name: "Ve Men Jaknut",           startInfo: "El-Ahzab 33:31",      endInfo: "Jasin 36:27",          surahs: "El-Ahzab (31-73) · Sebe (1-54) · Fatir (1-45) · Jasin (1-27)",      pages: 20, status: "unread", bookmark: null },
    { number: 23, name: "Ve Ma Lije",              startInfo: "Jasin 36:28",         endInfo: "Ez-Zumer 39:31",       surahs: "Jasin (28-83) · Es-Saffat (1-182) · Sad (1-88) · Ez-Zumer (1-31)", pages: 20, status: "unread", bookmark: null },
    { number: 24, name: "Fe Men Edhlemu",          startInfo: "Ez-Zumer 39:32",      endInfo: "Fussilet 41:46",       surahs: "Ez-Zumer (32-75) · Gafir (1-85) · Fussilet (1-46)",                 pages: 20, status: "unread", bookmark: null },
    { number: 25, name: "Ilejhi Jureddu",          startInfo: "Fussilet 41:47",      endInfo: "El-Xhathije 45:37",    surahs: "Fussilet (47-54) · Esh-Shura (1-53) · Ez-Zuhruf (1-89) · Ed-Duhan (1-59) · El-Xhathije (1-37)", pages: 20, status: "unread", bookmark: null },
    { number: 26, name: "Ha Mim",                  startInfo: "El-Ahkaf 46:1",       endInfo: "Edh-Dharijat 51:30",   surahs: "El-Ahkaf (1-35) · Muhammed (1-38) · El-Fet'h (1-29) · El-Huxhurat (1-18) · Kaf (1-45) · Edh-Dharijat (1-30)", pages: 20, status: "unread", bookmark: null },
    { number: 27, name: "Kale Fe ma Hatbukum",     startInfo: "Edh-Dharijat 51:31",  endInfo: "El-Hadid 57:29",       surahs: "Edh-Dharijat (31-60) · Et-Tur (1-49) · En-Nexhm (1-62) · El-Kamer (1-55) · Er-Rahman (1-78) · El-Vakia (1-96) · El-Hadid (1-29)", pages: 20, status: "unread", bookmark: null },
    { number: 28, name: "Kad Semi'allah",          startInfo: "El-Muxhadele 58:1",   endInfo: "Et-Tahrim 66:12",      surahs: "El-Muxhadele · El-Hashr · El-Mumtehine · Es-Saff · El-Xhumua · El-Munafikun · Et-Tegabun · Et-Talak · Et-Tahrim", pages: 20, status: "unread", bookmark: null },
    { number: 29, name: "Tebarekil-ledhi",         startInfo: "El-Mulk 67:1",        endInfo: "El-Murselat 77:50",    surahs: "El-Mulk · El-Kalem · El-Hakka · El-Mearixh · Nuh · El-Xhinn · El-Muzzemmil · El-Muddeth-thir · El-Kijame · El-Insan · El-Murselat", pages: 20, status: "unread", bookmark: null },
    { number: 30, name: "Amme Jetesaelun",         startInfo: "En-Nebe 78:1",        endInfo: "En-Nas 114:6",         surahs: "En-Nebe deri En-Nas (37 sure)",                                     pages: 20, status: "unread", bookmark: null }
];


/* =============================================
 *  THËNIET MOTIVUESE
 * ============================================= */
let quotes = [
    { text: "Lexoni Kur'anin, sepse ai do vijë Ditën e Gjykimit si ndërmjetësues për lexuesit e tij.", source: "Profeti ﷺ (Muslim)" },
    { text: "Më i miri prej jush është ai që e mëson Kur'anin dhe ua mëson të tjerëve.", source: "Profeti ﷺ (Buhari)" },
    { text: "Ai që lexon një shkronjë nga Libri i Allahut, ka një shpërblim, dhe shpërblimi shumëfishohet dhjetë herë.", source: "Profeti ﷺ (Tirmidhiu)" },
    { text: "Kur'ani ose do jetë argument për ty, ose kundër teje.", source: "Profeti ﷺ (Muslim)" },
    { text: "Zemrat ndryshken ashtu siç ndryshket hekuri. Shkëlqyesja e tyre është leximi i Kur'anit.", source: "Profeti ﷺ" },
    { text: "Allahu e ngre me këtë Libër disa popuj dhe ul të tjerë.", source: "Profeti ﷺ (Muslim)" },
    { text: "Lexoje Kur'anin, sepse do thuhet: Lexo dhe ngritu, vendi yt është tek ajeti i fundit që lexon.", source: "Profeti ﷺ (Ebu Davudi)" },
    { text: "Agjëruesi ka një lutje që nuk refuzohet, në momentin e iftarit.", source: "Profeti ﷺ (Ibn Maxhe)" },
    { text: "Kush agjëron Ramazanin me besim dhe shpresë, i falen mëkatet e mëparshme.", source: "Profeti ﷺ (Buhari & Muslim)" },
    { text: "Ramazani ka ardhur, muaj i bekuar. Hapen dyert e Xhenetit.", source: "Profeti ﷺ (Nesaiu)" }
];


/* =============================================
 *  RANKIMET
 * ============================================= */
let ranks = [
    { minJuz: 0,  badge: "🌱", title: "Fillestar",          nextMsg: "Lexo 1 xhuz për nivelin tjetër" },
    { minJuz: 1,  badge: "📖", title: "Lexues",              nextMsg: "Lexo 3 xhuze gjithsej" },
    { minJuz: 3,  badge: "⭐", title: "Kërkues i Dijes",     nextMsg: "Lexo 5 xhuze gjithsej" },
    { minJuz: 5,  badge: "🌟", title: "Ylli i Ramazanit",    nextMsg: "Lexo 10 xhuze gjithsej" },
    { minJuz: 10, badge: "🔥", title: "I Zjarrtë",           nextMsg: "Lexo 15 xhuze gjithsej" },
    { minJuz: 15, badge: "💎", title: "Diamanti i Kur'anit", nextMsg: "Lexo 20 xhuze gjithsej" },
    { minJuz: 20, badge: "👑", title: "Mbret i Leximit",     nextMsg: "Lexo 25 xhuze gjithsej" },
    { minJuz: 25, badge: "🏆", title: "Kampion",             nextMsg: "Përfundo hatmen!" },
    { minJuz: 30, badge: "🕌", title: "Hafiz i Ramazanit",   nextMsg: "Elhamdulilah! Hatmja u plotësua!" }
];


/* =============================================
 *  ARRITJET
 * ============================================= */
let achievements = [
    { id: "first_juz",   icon: "🎯", name: "Hapi i Parë",        desc: "Lexo xhuzin e parë",      condition: function(c) { return c >= 1; } },
    { id: "five_juz",    icon: "✋", name: "Pesëshja",            desc: "Lexo 5 xhuze",            condition: function(c) { return c >= 5; } },
    { id: "ten_juz",     icon: "🔟", name: "Dhjetëshja",          desc: "Lexo 10 xhuze",           condition: function(c) { return c >= 10; } },
    { id: "half_quran",  icon: "⚡", name: "Gjysma!",             desc: "Lexo 15 xhuze",           condition: function(c) { return c >= 15; } },
    { id: "twenty_juz",  icon: "🌙", name: "Netët e Kadrit",      desc: "Lexo 20 xhuze",           condition: function(c) { return c >= 20; } },
    { id: "almost_done", icon: "🏃", name: "Pothuajse!",          desc: "Lexo 25 xhuze",           condition: function(c) { return c >= 25; } },
    { id: "hatme",       icon: "🕋", name: "HATME!",              desc: "Përfundo të 30 xhuzet",   condition: function(c) { return c >= 30; } },
    { id: "streak_3",    icon: "🔥", name: "3 ditë zjarr",        desc: "Lexo 3 ditë radhazi",     condition: function()  { return getStreak() >= 3; } },
    { id: "bookmark_5",  icon: "🔖", name: "Shënues i zellshëm",  desc: "Vendos 5 bookmark-e",     condition: function()  { return countBookmarks() >= 5; } }
];


/* =============================================
 *  VARIABLA GLOBALE
 * ============================================= */
let currentFilter = "all";
let openJuzIndex = -1;


/* =============================================
 *  LOCALSTORAGE
 * ============================================= */
function saveData() {
    localStorage.setItem("hatme_juz", JSON.stringify(juzData));
    localStorage.setItem("hatme_lastDate", getTodayString());
}

function loadData() {
    let saved = localStorage.getItem("hatme_juz");
    if (saved !== null) {
        let parsed = JSON.parse(saved);

        // KYÇE: Nëse të dhënat e vjetra s'kanë fushat e reja,
        // i marrim nga databaza origjinale
        for (let i = 0; i < parsed.length; i++) {
            if (parsed[i].bookmark === undefined) parsed[i].bookmark = null;
            if (parsed[i].startInfo === undefined) parsed[i].startInfo = juzData[i].startInfo;
            if (parsed[i].endInfo === undefined)   parsed[i].endInfo = juzData[i].endInfo;
            if (parsed[i].surahs === undefined)    parsed[i].surahs = juzData[i].surahs;
            if (parsed[i].name === undefined)      parsed[i].name = juzData[i].name;
        }
        juzData = parsed;
    }
}


/* =============================================
 *  DATA HELPERS
 * ============================================= */
function getTodayString() {
    let t = new Date();
    return t.getFullYear() + "-" +
        String(t.getMonth() + 1).padStart(2, '0') + "-" +
        String(t.getDate()).padStart(2, '0');
}


/* =============================================
 *  STREAK
 * ============================================= */
function getStreak() {
    let data = localStorage.getItem("hatme_streak");
    if (data === null) return 0;
    let parsed = JSON.parse(data);
    let today = getTodayString();
    if (parsed.lastDate === today) return parsed.count;

    let y = new Date();
    y.setDate(y.getDate() - 1);
    let yStr = y.getFullYear() + "-" +
        String(y.getMonth() + 1).padStart(2, '0') + "-" +
        String(y.getDate()).padStart(2, '0');
    if (parsed.lastDate === yStr) return parsed.count;
    return 0;
}

function updateStreak() {
    let data = localStorage.getItem("hatme_streak");
    let today = getTodayString();

    if (data === null) {
        localStorage.setItem("hatme_streak", JSON.stringify({ count: 1, lastDate: today }));
        return;
    }

    let parsed = JSON.parse(data);
    if (parsed.lastDate === today) return;

    let y = new Date();
    y.setDate(y.getDate() - 1);
    let yStr = y.getFullYear() + "-" +
        String(y.getMonth() + 1).padStart(2, '0') + "-" +
        String(y.getDate()).padStart(2, '0');

    parsed.count = (parsed.lastDate === yStr) ? parsed.count + 1 : 1;
    parsed.lastDate = today;
    localStorage.setItem("hatme_streak", JSON.stringify(parsed));
}


/* =============================================
 *  COUNTERS
 * ============================================= */
function getCompletedCount() {
    let c = 0;
    for (let i = 0; i < juzData.length; i++) {
        if (juzData[i].status === "read") c++;
    }
    return c;
}

function countBookmarks() {
    let c = 0;
    for (let i = 0; i < juzData.length; i++) {
        if (juzData[i].bookmark !== null) c++;
    }
    return c;
}


/* =============================================
 *  BOOKMARK PANEL
 * ============================================= */
function openBookmark(index) {
    openJuzIndex = index;
    let juz = juzData[index];

    document.getElementById("bookmarkTitle").textContent =
        "Xhuzi " + juz.number + " — " + juz.name;

    document.getElementById("bookmarkSubtitle").textContent =
        "▶ " + juz.startInfo + "  ➜  " + juz.endInfo + " ◼";

    // Shfaq suret brenda xhuzit
    document.getElementById("bookmarkSurahsInfo").innerHTML =
        "📚 <strong>Suret:</strong> " + juz.surahs;

    if (juz.bookmark !== null) {
        document.getElementById("bookmarkSurah").value = juz.bookmark.surah || "";
        document.getElementById("bookmarkAyah").value  = juz.bookmark.ayah  || "";
        document.getElementById("bookmarkPage").value  = juz.bookmark.page  || 0;
        document.getElementById("bookmarkNote").value  = juz.bookmark.note  || "";
        updatePageLabel(juz.bookmark.page || 0);
        showSavedBookmark(juz.bookmark);
    } else {
        document.getElementById("bookmarkSurah").value = "";
        document.getElementById("bookmarkAyah").value  = "";
        document.getElementById("bookmarkPage").value  = 0;
        document.getElementById("bookmarkNote").value  = "";
        updatePageLabel(0);
        document.getElementById("bookmarkSaved").classList.remove("visible");
    }

    document.getElementById("bookmarkOverlay").classList.add("visible");
}

function closeBookmark() {
    document.getElementById("bookmarkOverlay").classList.remove("visible");
    openJuzIndex = -1;
}

function updatePageLabel(value) {
    let label = document.getElementById("pageLabel");
    label.textContent = value + " / 20 faqe";
    let v = parseInt(value);
    if (v === 0)       label.style.color = "#888";
    else if (v < 10)   label.style.color = "#ffb74d";
    else if (v < 20)   label.style.color = "#81c784";
    else               label.style.color = "#69f0ae";
}

function saveBookmark() {
    if (openJuzIndex === -1) return;

    let surah = document.getElementById("bookmarkSurah").value.trim();
    let ayah  = document.getElementById("bookmarkAyah").value.trim();
    let page  = document.getElementById("bookmarkPage").value;
    let note  = document.getElementById("bookmarkNote").value.trim();

    juzData[openJuzIndex].bookmark = {
        surah: surah, ayah: ayah,
        page: parseInt(page), note: note,
        date: getTodayString()
    };

    if (juzData[openJuzIndex].status === "unread" && (surah || ayah || parseInt(page) > 0)) {
        juzData[openJuzIndex].status = "current";
    }

    saveData();
    updateStreak();
    renderAll();
    showSavedBookmark(juzData[openJuzIndex].bookmark);

    let saveBtn = document.querySelector(".btn-save");
    saveBtn.textContent = "✅ U ruajt!";
    setTimeout(function() { saveBtn.textContent = "💾 Ruaj shënimin"; }, 1500);
}

function markAsReading() {
    if (openJuzIndex === -1) return;
    juzData[openJuzIndex].status = "current";
    saveBookmark();
    saveData();
    renderAll();
}

function markAsDone() {
    if (openJuzIndex === -1) return;
    juzData[openJuzIndex].status = "read";
    document.getElementById("bookmarkPage").value = 20;
    updatePageLabel(20);
    saveBookmark();
    updateStreak();
    checkNewAchievements();
    saveData();
    renderAll();
    setTimeout(function() { closeBookmark(); }, 800);
}

function showSavedBookmark(bm) {
    let container = document.getElementById("bookmarkSaved");
    let info = "";
    if (bm.surah) info += "📖 Sure: " + bm.surah;
    if (bm.ayah)  info += (info ? " · " : "") + "📌 Ajet: " + bm.ayah;
    if (bm.page)  info += (info ? " · " : "") + "📄 Faqe: " + bm.page + "/20";
    if (bm.note)  info += "<br>📝 " + bm.note;

    container.innerHTML =
        '<div class="bookmark-saved-title">🔖 Shënimi i fundit</div>' +
        '<div class="bookmark-saved-info">' + info + '</div>' +
        '<div class="bookmark-saved-date">Ruajtur: ' + (bm.date || "—") + '</div>';
    container.classList.add("visible");
}


/* =============================================
 *  RENDER JUZ GRID
 * ============================================= */
function renderJuzGrid() {
    let container = document.getElementById("juzGrid");
    container.innerHTML = "";

    for (let i = 0; i < juzData.length; i++) {
        let juz = juzData[i];
        if (currentFilter !== "all" && juz.status !== currentFilter) continue;

        let icon = "⬜";
        if (juz.status === "current") icon = "📖";
        if (juz.status === "read")    icon = "✅";

        let ayahInfo =
            '<div class="juz-ayah-range">' +
                '<span class="ayah-start">▶ ' + juz.startInfo + '</span>' +
                '<span class="ayah-end">◼ ' + juz.endInfo + '</span>' +
            '</div>';

        let surahList = '<div class="juz-surahs">' + juz.surahs + '</div>';

        let bookmarkBadge = "";
        let miniProgress = "";

        if (juz.bookmark !== null && juz.status !== "read") {
            let bm = juz.bookmark;
            let parts = [];
            if (bm.surah) parts.push(bm.surah);
            if (bm.ayah)  parts.push("Ajet " + bm.ayah);
            if (parts.length > 0) {
                bookmarkBadge = '<span class="juz-bookmark-badge">🔖 ' + parts.join(" · ") + '</span>';
            }
            if (bm.page > 0) {
                let pct = (bm.page / 20) * 100;
                miniProgress = '<div class="juz-mini-progress"><div class="juz-mini-fill" style="width:' + pct + '%"></div></div>';
            }
        }

        if (juz.status === "read") {
            miniProgress = '<div class="juz-mini-progress"><div class="juz-mini-fill" style="width:100%"></div></div>';
        }

        container.innerHTML +=
            '<div class="juz-card ' + juz.status + '" onclick="openBookmark(' + i + ')">' +
                '<div class="juz-left">' +
                    '<div class="juz-number">' + juz.number + '</div>' +
                    '<div class="juz-details">' +
                        '<div class="juz-name">Xhuzi ' + juz.number + ' — ' + juz.name + '</div>' +
                        ayahInfo + surahList + bookmarkBadge + miniProgress +
                    '</div>' +
                '</div>' +
                '<div class="juz-status">' + icon + '</div>' +
            '</div>';
    }
}


/* =============================================
 *  FILTERS
 * ============================================= */
function filterJuz(filter) {
    currentFilter = filter;
    let buttons = document.querySelectorAll(".filter-btn");
    for (let i = 0; i < buttons.length; i++) buttons[i].classList.remove("active");
    event.target.classList.add("active");
    renderJuzGrid();
}


/* =============================================
 *  STATS
 * ============================================= */
function updateStats() {
    let completed = getCompletedCount();
    let totalPages = completed * 20;
    let percentage = Math.round((completed / 30) * 100);

    for (let i = 0; i < juzData.length; i++) {
        if (juzData[i].status === "current" && juzData[i].bookmark !== null) {
            totalPages += juzData[i].bookmark.page || 0;
        }
    }

    document.getElementById("completedJuz").textContent   = completed;
    document.getElementById("completedPages").textContent = totalPages;
    document.getElementById("streakDays").textContent     = getStreak();
    document.getElementById("percentage").textContent     = percentage + "%";
    document.getElementById("mainProgress").style.width   = percentage + "%";
    document.getElementById("progressLabel").textContent  = completed + " / 30 Xhuze";
}


/* =============================================
 *  RANK
 * ============================================= */
function updateRank() {
    let completed = getCompletedCount();
    let currentRank = ranks[0];
    let nextRank = ranks[1];

    for (let i = ranks.length - 1; i >= 0; i--) {
        if (completed >= ranks[i].minJuz) {
            currentRank = ranks[i];
            nextRank = ranks[Math.min(i + 1, ranks.length - 1)];
            break;
        }
    }

    document.getElementById("rankBadge").textContent = currentRank.badge;
    document.getElementById("rankTitle").textContent = currentRank.title;
    document.getElementById("rankNext").textContent  = currentRank.nextMsg;

    let xpMin = currentRank.minJuz;
    let xpMax = nextRank.minJuz;
    if (xpMax === xpMin) {
        document.getElementById("xpFill").style.width = "100%";
    } else {
        document.getElementById("xpFill").style.width = ((completed - xpMin) / (xpMax - xpMin)) * 100 + "%";
    }
}


/* =============================================
 *  QUOTE
 * ============================================= */
function updateQuote() {
    let today = new Date();
    let dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    let index = dayOfYear % quotes.length;
    document.getElementById("quoteText").textContent =
        '"' + quotes[index].text + '" — ' + quotes[index].source;
}


/* =============================================
 *  ACHIEVEMENTS
 * ============================================= */
function renderAchievements() {
    let container = document.getElementById("achievementsGrid");
    let completed = getCompletedCount();
    container.innerHTML = "";

    for (let i = 0; i < achievements.length; i++) {
        let a = achievements[i];
        let unlocked = a.condition(completed);
        let cls = unlocked ? "unlocked" : "locked";
        container.innerHTML +=
            '<div class="achievement ' + cls + '">' +
                '<span class="achievement-icon">' + (unlocked ? a.icon : "🔒") + '</span>' +
                '<span class="achievement-name">' + a.name + '</span>' +
                '<span class="achievement-desc">' + a.desc + '</span>' +
            '</div>';
    }
}

function checkNewAchievements() {
    let completed = getCompletedCount();
    for (let i = 0; i < achievements.length; i++) {
        let a = achievements[i];
        let key = "hatme_achievement_" + a.id;
        if (a.condition(completed) && localStorage.getItem(key) === null) {
            localStorage.setItem(key, "true");
            showCelebration(a.icon, a.name + "!", a.desc);
            return;
        }
    }
    if (completed === 30 && localStorage.getItem("hatme_complete_shown") === null) {
        localStorage.setItem("hatme_complete_shown", "true");
        showCelebration("🕋", "HATME E PLOTË!", "Elhamdulilah! E përfundove Kur'anin! 🤲");
    }
}


/* =============================================
 *  CELEBRATION
 * ============================================= */
function showCelebration(emoji, title, text) {
    document.getElementById("celebrationEmoji").textContent = emoji;
    document.getElementById("celebrationTitle").textContent = title;
    document.getElementById("celebrationText").textContent  = text;
    document.getElementById("celebrationOverlay").classList.add("visible");
}

function closeCelebration() {
    document.getElementById("celebrationOverlay").classList.remove("visible");
}


/* =============================================
 *  DAILY PLAN
 * ============================================= */
function renderDailyPlan() {
    let container = document.getElementById("dailyPlan");
    let nextJuz = null;

    for (let i = 0; i < juzData.length; i++) {
        if (juzData[i].status !== "read") { nextJuz = juzData[i]; break; }
    }

    if (nextJuz === null) {
        container.innerHTML =
            '<div class="daily-item"><span class="daily-prayer">🎉 Hatmja u përfundua!</span><span class="daily-task">Elhamdulilah</span></div>';
        return;
    }

    let startPage = 1;
    let startInfo = "";
    if (nextJuz.bookmark !== null && nextJuz.bookmark.page > 0) {
        startPage = nextJuz.bookmark.page + 1;
        startInfo = (nextJuz.bookmark.surah || "") + " " +
            (nextJuz.bookmark.ayah ? "Ajet " + nextJuz.bookmark.ayah : "");
    }

    let prayers = [
        { icon: "🌅", name: "Sabahu" },
        { icon: "☀️", name: "Dreka" },
        { icon: "🌤️", name: "Ikindia" },
        { icon: "🌅", name: "Akshami" },
        { icon: "🌙", name: "Jacia" }
    ];

    let remaining = 20 - (startPage - 1);
    let perPrayer = Math.ceil(remaining / 5);

    container.innerHTML =
        '<div style="text-align:center;margin-bottom:12px;color:#ffd54f;font-weight:600">' +
            '📖 Xhuzi ' + nextJuz.number + ': ' + nextJuz.name +
        '</div>' +
        (startInfo ?
            '<div style="text-align:center;margin-bottom:10px;font-size:0.8rem;color:#80cbc4">🔖 Vazhdo nga: ' + startInfo + '</div>' : '');

    let currentPage = startPage;
    for (let i = 0; i < prayers.length; i++) {
        let endPage = Math.min(currentPage + perPrayer - 1, 20);
        if (currentPage > 20) break;
        container.innerHTML +=
            '<div class="daily-item">' +
                '<span class="daily-prayer">' + prayers[i].icon + ' ' + prayers[i].name + '</span>' +
                '<span class="daily-task">Faqe ' + currentPage + '-' + endPage + '</span>' +
            '</div>';
        currentPage = endPage + 1;
    }
}


/* =============================================
 *  RESET
 * ============================================= */
function resetAll() {
    if (!confirm("A je i sigurt? Kjo do fshijë GJITHË progresin!")) return;

    for (let i = 0; i < juzData.length; i++) {
        juzData[i].status = "unread";
        juzData[i].bookmark = null;
    }

    localStorage.removeItem("hatme_juz");
    localStorage.removeItem("hatme_streak");
    localStorage.removeItem("hatme_complete_shown");

    for (let i = 0; i < achievements.length; i++) {
        localStorage.removeItem("hatme_achievement_" + achievements[i].id);
    }

    renderAll();
}


/* =============================================
 *  RENDER ALL
 * ============================================= */
function renderAll() {
    renderJuzGrid();
    updateStats();
    updateRank();
    updateQuote();
    renderAchievements();
    renderDailyPlan();
}


/* =============================================
 *  START!
 * ============================================= */
loadData();
renderAll();