const pageRoot = document.getElementById("detail-page");

if (pageRoot) {
  const typeKey = pageRoot.dataset.type;
  const typeData = TYPE_DATA[typeKey];

  if (!typeData) {
    pageRoot.innerHTML = "<p>ページ情報の読み込みに失敗しました。診断ページへ戻ってください。</p>";
  } else {
    const detail = typeData.detail;

    document.title = `${TYPE_LABELS[typeKey]}の詳細 | 副業タイプ診断`;
    document.getElementById("detail-eyebrow").textContent = TYPE_LABELS[typeKey];
    document.getElementById("detail-title").textContent = detail.heroTitle;
    document.getElementById("detail-summary").textContent = typeData.summary;
    document.getElementById("detail-features").textContent = detail.features;
    document.getElementById("detail-start").textContent = detail.gettingStarted;
    document.getElementById("detail-ai-start").textContent = detail.aiStart;

    fillList("detail-goodfits", detail.goodFits);
    fillList("detail-badfits", detail.badFits);
    fillList("detail-mistakes", detail.mistakes);
  }
}

function fillList(targetId, items) {
  const target = document.getElementById(targetId);
  target.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}
