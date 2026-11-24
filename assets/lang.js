/* Startseite ohne Präfix (Englisch): Besucher einmalig auf ihre Browsersprache leiten.
   ?lang=en im Link (Sprachmenü) verhindert die Weiterleitung. Suchmaschinen sehen die englische Seite. */
(function () {
  try {
    if (location.search.indexOf("lang=en") !== -1) { localStorage.setItem("beetario-lang", "en"); return; }
    if (localStorage.getItem("beetario-lang") === "en") return;
  } catch (e) { if (location.search.indexOf("lang=en") !== -1) return; }
  var have = ["de", "fr", "it", "es", "pt", "nl", "pl"];
  var list = navigator.languages || [navigator.language || ""];
  for (var i = 0; i < list.length; i++) {
    var code = String(list[i]).toLowerCase().slice(0, 2);
    if (code === "en") return;
    if (have.indexOf(code) !== -1) { location.replace("/" + code + "/" + location.hash); return; }
  }
})();
