/* =============================================
 *  DATABAZA E 30 XHUZEVE
 * =============================================
 *  Çdo xhuz ka:
 *    number  → numri (1-30)
 *    name    → emri i sures ku fillon
 *    pages   → faqet totale (20)
 *    status  → "unread" / "current" / "read"
 *    bookmark → {surah, ayah, page, note, date}
 *               ose null nëse s'ka shënim
 */
let juzData = [
    { number: 1,  name: "El-Fatiha / El-Bekare",        pages: 20, status: "unread", bookmark: null },
    { number: 2,  name: "El-Bekare (142-252)",           pages: 20, status: "unread", bookmark: null },
    { number: 3,  name: "El-Bekare / Ali Imran",         pages: 20, status: "unread", bookmark: null },
    { number: 4,  name: "Ali Imran / En-Nisa",           pages: 20, status: "unread", bookmark: null },
    { number: 5,  name: "En-Nisa (24-147)",              pages: 20, status: "unread", bookmark: null },
    { number: 6,  name: "En-Nisa / El-Maide",            pages: 20, status: "unread", bookmark: null },
    { number: 7,  name: "El-Maide / El-En'am",           pages: 20, status: "unread", bookmark: null },
    { number: 8,  name: "El-En'am / El-A'raf",           pages: 20, status: "unread", bookmark: null },
    { number: 9,  name: "El-A'raf / El-Enfal",           pages: 20, status: "unread", bookmark: null },
    { number: 10, name: "El-Enfal / Et-Teube",           pages: 20, status: "unread", bookmark: null },
    { number: 11, name: "Et-Teube / Hud",                pages: 20, status: "unread", bookmark: null },
    { number: 12, name: "Hud / Jusuf",                   pages: 20, status: "unread", bookmark: null },
    { number: 13, name: "Jusuf / Ibrahim",               pages: 20, status: "unread", bookmark: null },
    { number: 14, name: "El-Hixhr / En-Nahl",            pages: 20, status: "unread", bookmark: null },
    { number: 15, name: "El-Isra / El-Kehf",             pages: 20, status: "unread", bookmark: null },
    { number: 16, name: "El-Kehf / Merjem / Ta-Ha",      pages: 20, status: "unread", bookmark: null },
    { number: 17, name: "El-Enbija / El-Haxh",           pages: 20, status: "unread", bookmark: null },
    { number: 18, name: "El-Mu'minun / En-Nur",          pages: 20, status: "unread", bookmark: null },
    { number: 19, name: "El-Furkan / Esh-Shuara",        pages: 20, status: "unread", bookmark: null },
    { number: 20, name: "En-Neml / El-Kasas",            pages: 20, status: "unread", bookmark: null },
    { number: 21, name: "El-Ankebut / Llukman",          pages: 20, status: "unread", bookmark: null },
    { number: 22, name: "Es-Sexhde / El-Ahzab",          pages: 20, status: "unread", bookmark: null },
    { number: 23, name: "Sebe / Fatir / Jasin",          pages: 20, status: "unread", bookmark: null },
    { number: 24, name: "Es-Saffat / Sad / Ez-Zumer",    pages: 20, status: "unread", bookmark: null },
    { number: 25, name: "Gafir / Fussilet",              pages: 20, status: "unread", bookmark: null },
    { number: 26, name: "Esh-Shura / Ez-Zuhruf",         pages: 20, status: "unread", bookmark: null },
    { number: 27, name: "Ed-Duhan / El-Xhathije",        pages: 20, status: "unread", bookmark: null },
    { number: 28, name: "El-Muxhadele / El-Hashr",        pages: 20, status: "unread", bookmark: null },
    { number: 29, name: "El-Mulk / El-Kalem / El-Hakka", pages: 20, status: "unread", bookmark: null },
    { number: 30, name: "En-Nebe / Xhuz Amma",           pages: 20, status: "unread", bookmark: null }
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
 *  SISTEMI I RANKIMEVE
 * ============================================= */
let ranks = [
    { minJuz: 0,  badge: "🌱", title: "Fillestar",             nextMsg: "Lexo 1 xhuz për nivelin tjetër" },
    { minJuz: 1,  badge: "📖", title: "Lexues",                 nextMsg: "Lexo 3 xhuze gjithsej" },
    { minJuz: 3,  badge: "⭐", title: "Kërkues i Dijes",        nextMsg: "Lexo 5 xhuze gjithsej" },
    { minJuz: 5,  badge: "🌟", title: "Ylli i Ramazanit",       nextMsg: "Lexo 10 xhuze gjithsej" },
    { minJuz: 10, badge: "🔥", title: "I Zjarrtë",              nextMsg: "Lexo 15 xhuze gjithsej" },
    { minJuz: 15, badge: "💎", title: "Diamanti i Kur'anit",    nextMsg: "Lexo 20 xhuze gjithsej" },
    { minJuz: 20, badge: "👑", title: "Mbret i Leximit",        nextMsg: "Lexo 25 xhuze gjithsej" },
    { minJuz: 25, badge: "🏆", title: "Kampion",                nextMsg: "Përfundo hatmen!" },
    { minJuz: 30, badge: "🕌", title: "Hafiz i Ramazanit",      nextMsg: "Elhamdulilah! Hatmja u plotësua!" }
];


/* =============================================
 *  SISTEMI I ARRITJEVE
 * ============================================= */
let achievements = [
    { id: "first_juz",   icon: "🎯", name: "Hapi i Parë",      desc: "Lexo xhuzin e parë",        condition: function(c) { return c >= 1; }  },
    { id: "five_juz",    icon: "✋", name: "Pesëshja",          desc: "Lexo 5 xhuze",              condition: function(c) { return c >= 5; }  },
    { id: "ten_juz",     icon: "🔟", name: "Dhjetëshja",        desc: "Lexo 10 xhuze",             condition: function(c) { return c >= 10; } },
    { id: "half_quran",  icon: "⚡", name: "Gjysma!",           desc: "Lexo 15 xhuze (gjysmën)",   condition: function(c) { return c >= 15; } },
    { id: "twenty_juz",  icon: "🌙", name: "Netët e Kadrit",    desc: "Lexo 20 xhuze",             condition: function(c) { return c >= 20; } },
    { id: "almost_done", icon: "🏃", name: "Pothuajse!",        desc: "Lexo 25 xhuze",             condition: function(c) { return c >= 25; } },
    { id: "hatme",       icon: "🕋", name: "HATME!",            desc: "Përfundo të 30 xhuzet",     condition: function(c) { return c >= 30; } },
    { id: "streak_3",    icon: "🔥", name: "3 ditë zjarr",      desc: "Lexo 3 ditë radhazi",       condition: function()  { return getStreak() >= 3; } },
    { id: "bookmark_5",  icon: "🔖", name: "Shënues i zellshëm", desc: "Vendos 5 bookmark-e",      condition: function()  { return countBookmarks() >= 5; } }
];


/* =============================================
 *  VARIABLA GLOBALE
 * ============================================= */
let currentFilter = "all";
let openJuzIndex = -1;     // Cili xhuz ka panelin hapur (-1 = asnjë)


/* =============================================
 *  RUAJTJA & NGARKIMI (localStorage)
 * ============================================= */
function saveData() {
    localStorage.setItem("hatme_juz", JSON.stringify(juzData));
    localStorage.setItem("hatme_lastDate", getTodayString());
}

function loadData() {
    let saved = localStorage.getItem("hatme_juz");
    if (saved !== null) {
        let parsed = JSON.parse(saved);

        // Sigurohu që çdo xhuz ka fushën "bookmark"
        for (let i = 0; i < parsed.length; i++) {
            if (parsed[i].bookmark === undefined) {
                parsed[i].bookmark = null;
            }
        }
        juzData = parsed;
    }
}


/* =============================================
 *  FUNKSIONE PËR DATËN
 * ============================================= */
function getTodayString() {
    let t = new Date();
    let y = t.getFullYear();
    let m = String(t.getMonth() + 1).padStart(2, '0');
    let d = String(t.getDate()).padStart(2, '0');
    return y + "-" + m + "-" + d;
}


/* =============================================
 *  STREAK (ditë radhazi)
 * ============================================= */
function getStreak() {
    let data = localStorage.getItem("hatme_streak");
    if (data === null) return 0;

    let parsed    = JSON.parse(data);
    let today     = getTodayString();

    if (parsed.lastDate === today) return parsed.count;

    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let yStr = yesterday.getFullYear() + "-" +
        String(yesterday.getMonth() + 1).padStart(2, '0') + "-" +
        String(yesterday.getDate()).padStart(2, '0');

    if (parsed.lastDate === yStr) return parsed.count;

    return 0;
}

function updateStreak() {
    let data  = localStorage.getItem("hatme_streak");
    let today = getTodayString();

    if (data === null) {
        localStorage.setItem("hatme_streak", JSON.stringify({ count: 1, lastDate: today }));
        return;
    }

    let parsed = JSON.parse(data);
    if (parsed.lastDate === today) return;

    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let yStr = yesterday.getFullYear() + "-" +
        String(yesterday.getMonth() + 1).padStart(2, '0') + "-" +
        String(yesterday.getDate()).padStart(2, '0');

    parsed.count = (parsed.lastDate === yStr) ? parsed.count + 1 : 1;
    parsed.lastDate = today;
    localStorage.setItem("hatme_streak", JSON.stringify(parsed));
}


/* =============================================
 *  NUMËRIME TË DOBISHME
 * ============================================= */
function getCompletedCount() {
    let count = 0;
    for (let i = 0; i < juzData.length; i++) {
        if (juzData[i].status === "read") count++;
    }
    return count;
}

function countBookmarks() {
    let count = 0;
    for (let i = 0; i < juzData.length; i++) {
        if (juzData[i].bookmark !== null) count++;
    }
    return count;
}


/* =============================================
 *  HAP PANELIN E BOOKMARK-UT
 * =============================================
 *  Kjo thirret kur klikohet një kartë xhuzi
 */
function openBookmark(index) {
    openJuzIndex = index;
    let juz = juzData[index];

    // Vendos titullin
    document.getElementById("bookmarkTitle").textContent    = "Xhuzi " + juz.number;
    document.getElementById("bookmarkSubtitle").textContent = juz.name;

    // Nëse ka bookmark të ruajtur, mbush fushat
    if (juz.bookmark !== null) {
        document.getElementById("bookmarkSurah").value = juz.bookmark.surah || "";
        document.getElementById("bookmarkAyah").value  = juz.bookmark.ayah  || "";
        document.getElementById("bookmarkPage").value  = juz.bookmark.page  || 0;
        document.getElementById("bookmarkNote").value  = juz.bookmark.note  || "";
        updatePageLabel(juz.bookmark.page || 0);

        // Shfaq shënimin e ruajtur
        showSavedBookmark(juz.bookmark);
    } else {
        // Pastro fushat
        document.getElementById("bookmarkSurah").value = "";
        document.getElementById("bookmarkAyah").value  = "";
        document.getElementById("bookmarkPage").value  = 0;
        document.getElementById("bookmarkNote").value  = "";
        updatePageLabel(0);

        // Fshih shënimin
        document.getElementById("bookmarkSaved").classList.remove("visible");
    }

    // Hap overlay-in
    document.getElementById("bookmarkOverlay").classList.add("visible");
}


/* =============================================
 *  MBYLL PANELIN
 * ============================================= */
function closeBookmark() {
    document.getElementById("bookmarkOverlay").classList.remove("visible");
    openJuzIndex = -1;
}


/* =============================================
 *  PËRDITËSO LABEL-IN E FAQEVE (slider)
 * ============================================= */
function updatePageLabel(value) {
    let label = document.getElementById("pageLabel");
    label.textContent = value + " / 20 faqe";

    // Ndrysho ngjyrën sipas progresit
    let v = parseInt(value);
    if (v === 0) {
        label.style.color = "#888";
    } else if (v < 10) {
        label.style.color = "#ffb74d";
    } else if (v < 20) {
        label.style.color = "#81c784";
    } else {
        label.style.color = "#69f0ae";
    }
}


/* =============================================
 *  RUAJ BOOKMARK-UN
 * ============================================= */
function saveBookmark() {
    if (openJuzIndex === -1) return;

    let surah = document.getElementById("bookmarkSurah").value.trim();
    let ayah  = document.getElementById("bookmarkAyah").value.trim();
    let page  = document.getElementById("bookmarkPage").value;
    let note  = document.getElementById("bookmarkNote").value.trim();

    // Krijo objektin bookmark
    juzData[openJuzIndex].bookmark = {
        surah: surah,
        ayah:  ayah,
        page:  parseInt(page),
        note:  note,
        date:  getTodayString()
    };

    // Nëse statusi ishte "unread" dhe ka shënim, bëje "current"
    if (juzData[openJuzIndex].status === "unread" && (surah || ayah || parseInt(page) > 0)) {
        juzData[openJuzIndex].status = "current";
    }

    saveData();
    updateStreak();
    renderAll();

    // Shfaq konfirmim
    showSavedBookmark(juzData[openJuzIndex].bookmark);

    // Efekt vizual
    let saveBtn = document.querySelector(".btn-save");
    saveBtn.textContent = "✅ U ruajt!";
    setTimeout(function() {
        saveBtn.textContent = "💾 Ruaj shënimin";
    }, 1500);
}


/* =============================================
 *  SHËNO SI "DUKE LEXUAR"
 * ============================================= */
function markAsReading() {
    if (openJuzIndex === -1) return;

    juzData[openJuzIndex].status = "current";
    saveBookmark();              // Ruaj edhe bookmark-un
    saveData();
    renderAll();
}


/* =============================================
 *  SHËNO SI "PËRFUNDUAR"
 * ============================================= */
function markAsDone() {
    if (openJuzIndex === -1) return;

    juzData[openJuzIndex].status = "read";

    // Vendos faqen në 20/20
    document.getElementById("bookmarkPage").value = 20;
    updatePageLabel(20);

    saveBookmark();
    updateStreak();
    checkNewAchievements();
    saveData();
    renderAll();

    // Mbyll panelin pas 1 sekonde
    setTimeout(function() {
        closeBookmark();
    }, 800);
}


/* =============================================
 *  SHFAQ SHËNIMIN E RUAJTUR
 * ============================================= */
function showSavedBookmark(bm) {
    let container = document.getElementById("bookmarkSaved");
    let info      = "";

    if (bm.surah) info += "📖 Sure: " + bm.surah;
    if (bm.ayah)  info += (info ? " · " : "") + "📌 Ajet: " + bm.ayah;
    if (bm.page)  info += (info ? " · " : "") + "📄 Faqe: " + bm.page + "/20";
    if (bm.note)  info += "\n📝 " + bm.note;

    container.innerHTML =
        '<div class="bookmark-saved-title">🔖 Shënimi i fundit</div>' +
        '<div class="bookmark-saved-info">' + info.replace("\n", "<br>") + '</div>' +
        '<div class="bookmark-saved-date">Ruajtur: ' + (bm.date || "—") + '</div>';

    container.classList.add("visible");
}


/* =============================================
 *  VIZATO GRIDËN E XHUZEVE
 * ============================================= */
function renderJuzGrid() {
    let container = document.getElementById("juzGrid");
    container.innerHTML = "";

    for (let i = 0; i < juzData.length; i++) {
        let juz = juzData[i];

        // Filtro
        if (currentFilter !== "all" && juz.status !== currentFilter) continue;

        // Ikona e statusit
        let icon = "⬜";
        if (juz.status === "current") icon = "📖";
        if (juz.status === "read")    icon = "✅";

        // Shënimi i bookmark-ut (nëse ekziston)
        let bookmarkBadge = "";
        let miniProgress  = "";

        if (juz.bookmark !== null && juz.status !== "read") {
            let bm = juz.bookmark;
            let parts = [];
            if (bm.surah) parts.push(bm.surah);
            if (bm.ayah)  parts.push("Ajet " + bm.ayah);
            if (parts.length > 0) {
                bookmarkBadge = '<span class="juz-bookmark-badge">🔖 ' + parts.join(" · ") + '</span>';
            }

            // Mini progress bar bazuar në faqe
            if (bm.page > 0) {
                let pct = (bm.page / 20) * 100;
                miniProgress =
                    '<div class="juz-mini-progress">' +
                        '<div class="juz-mini-fill" style="width:' + pct + '%"></div>' +
                    '</div>';
            }
        }

        // Nëse është përfunduar, progress = 100%
        if (juz.status === "read") {
            miniProgress =
                '<div class="juz-mini-progress">' +
                    '<div class="juz-mini-fill" style="width:100%"></div>' +
                '</div>';
        }

        container.innerHTML +=
            '<div class="juz-card ' + juz.status + '" onclick="openBookmark(' + i + ')">' +
                '<div class="juz-left">' +
                    '<div class="juz-number">' + juz.number + '</div>' +
                    '<div>' +
                        '<div class="juz-name">Xhuzi ' + juz.number + '</div>' +
                        '<div class="juz-pages">' + juz.name + '</div>' +
                        bookmarkBadge +
                        miniProgress +
                    '</div>' +
                '</div>' +
                '<div class="juz-status">' + icon + '</div>' +
            '</div>';
    }
}


/* =============================================
 *  FILTRAT
 * ============================================= */
function filterJuz(filter) {
    currentFilter = filter;

    let buttons = document.querySelectorAll(".filter-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    event.target.classList.add("active");

    renderJuzGrid();
}


/* =============================================
 *  STATISTIKAT
 * ============================================= */
function updateStats() {
    let completed  = getCompletedCount();
    let totalPages = completed * 20;
    let percentage = Math.round((completed / 30) * 100);
    let streak     = getStreak();

    // Shto edhe faqet e xhuzeve "current" që kanë bookmark
    for (let i = 0; i < juzData.length; i++) {
        if (juzData[i].status === "current" && juzData[i].bookmark !== null) {
            totalPages += juzData[i].bookmark.page || 0;
        }
    }

    document.getElementById("completedJuz").textContent   = completed;
    document.getElementById("completedPages").textContent = totalPages;
    document.getElementById("streakDays").textContent     = streak;
    document.getElementById("percentage").textContent     = percentage + "%";

    document.getElementById("mainProgress").style.width  = percentage + "%";
    document.getElementById("progressLabel").textContent = completed + " / 30 Xhuze";
}


/* =============================================
 *  RANKIMI
 * ============================================= */
function updateRank() {
    let completed   = getCompletedCount();
    let currentRank = ranks[0];
    let nextRank    = ranks[1];

    for (let i = ranks.length - 1; i >= 0; i--) {
        if (completed >= ranks[i].minJuz) {
            currentRank = ranks[i];
            nextRank    = ranks[Math.min(i + 1, ranks.length - 1)];
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
        let pct = ((completed - xpMin) / (xpMax - xpMin)) * 100;
        document.getElementById("xpFill").style.width = pct + "%";
    }
}


/* =============================================
 *  THËNIA MOTIVUESE
 * ============================================= */
function updateQuote() {
    let today     = new Date();
    let dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    let index     = dayOfYear % quotes.length;

    document.getElementById("quoteText").textContent =
        '"' + quotes[index].text + '" — ' + quotes[index].source;
}


/* =============================================
 *  ARRITJET
 * ============================================= */
function renderAchievements() {
    let container = document.getElementById("achievementsGrid");
    let completed = getCompletedCount();
    container.innerHTML = "";

    for (let i = 0; i < achievements.length; i++) {
        let a          = achievements[i];
        let isUnlocked = a.condition(completed);
        let cls        = isUnlocked ? "unlocked" : "locked";

        container.innerHTML +=
            '<div class="achievement ' + cls + '">' +
                '<span class="achievement-icon">' + (isUnlocked ? a.icon : "🔒") + '</span>' +
                '<span class="achievement-name">' + a.name + '</span>' +
                '<span class="achievement-desc">' + a.desc + '</span>' +
            '</div>';
    }
}

function checkNewAchievements() {
    let completed = getCompletedCount();

    for (let i = 0; i < achievements.length; i++) {
        let a   = achievements[i];
        let key = "hatme_achievement_" + a.id;

        if (a.condition(completed) && localStorage.getItem(key) === null) {
            localStorage.setItem(key, "true");
            showCelebration(a.icon, a.name + "!", a.desc);
            return;
        }
    }

    if (completed === 30) {
        let shown = localStorage.getItem("hatme_complete_shown");
        if (shown === null) {
            localStorage.setItem("hatme_complete_shown", "true");
            showCelebration("🕋", "HATME E PLOTË!", "Elhamdulilah! E përfundove Kur'anin!\nAllahu e pranoftë! 🤲");
        }
    }
}


/* =============================================
 *  FESTIMI (popup)
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
 *  PLANI DITOR
 * ============================================= */
function renderDailyPlan() {
    let container = document.getElementById("dailyPlan");

    // Gjej xhuzin e radhës
    let nextJuz = null;
    for (let i = 0; i < juzData.length; i++) {
        if (juzData[i].status !== "read") {
            nextJuz = juzData[i];
            break;
        }
    }

    if (nextJuz === null) {
        container.innerHTML =
            '<div class="daily-item">' +
                '<span class="daily-prayer">🎉 Hatmja u përfundua!</span>' +
                '<span class="daily-task">Elhamdulilah</span>' +
            '</div>';
        return;
    }

    // Llogarit nga fillon (nëse ka bookmark)
    let startPage = 1;
    let startInfo = "";
    if (nextJuz.bookmark !== null && nextJuz.bookmark.page > 0) {
        startPage = nextJuz.bookmark.page + 1;
        startInfo = "Vazhdo nga: " +
            (nextJuz.bookmark.surah || "") + " " +
            (nextJuz.bookmark.ayah ? "Ajet " + nextJuz.bookmark.ayah : "");
    }

    let prayers = [
        { icon: "🌅", name: "Sabahu" },
        { icon: "☀️",  name: "Dreka" },
        { icon: "🌤️", name: "Ikindia" },
        { icon: "🌅", name: "Akshami" },
        { icon: "🌙", name: "Jacia" }
    ];

    // Llogarit faqet e mbetura
    let remainingPages = 20 - (startPage - 1);
    let pagesPerPrayer = Math.ceil(remainingPages / 5);

    container.innerHTML =
        '<div style="text-align:center; margin-bottom:12px; color:#ffd54f; font-weight:600;">' +
            '📖 Xhuzi ' + nextJuz.number + ': ' + nextJuz.name +
        '</div>' +
        (startInfo ?
            '<div style="text-align:center; margin-bottom:10px; font-size:0.8rem; color:#80cbc4;">' +
                '🔖 ' + startInfo +
            '</div>' : '');

    let currentPage = startPage;
    for (let i = 0; i < prayers.length; i++) {
        let endPage = Math.min(currentPage + pagesPerPrayer - 1, 20);
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
 *  RESETO GJITHÇKA
 * ============================================= */
function resetAll() {
    let confirmed = confirm("A je i sigurt? Kjo do fshijë GJITHË progresin dhe shënimet!");

    if (confirmed) {
        for (let i = 0; i < juzData.length; i++) {
            juzData[i].status   = "unread";
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
}


/* =============================================
 *  VIZATO GJITHÇKA
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
 *  FILLO!
 * ============================================= */
loadData();
renderAll();