const pageRoot = document.getElementById("detail-page");

if (pageRoot) {
  const typeKey = pageRoot.dataset.type;
  const typeData = TYPE_DATA[typeKey];

  if (!typeData) {
    pageRoot.innerHTML = "<p>ページ情報の読み込みに失敗しました。診断ページへ戻ってください。</p>";
  } else {
    const detail = typeData.detail;

    document.title = `${TYPE_LABELS[typeKey]}の詳細 | 副業タイプ診断`;
    document.getElementById("detail-eyebrow").textContent = "タイプ名";
    document.getElementById("detail-title").textContent = detail.heroTitle;
    document.getElementById("detail-summary").textContent = typeData.summary;

    document.getElementById("detail-features").textContent = detail.features;
    document.getElementById("detail-reason").textContent = detail.reason;
    document.getElementById("detail-month").textContent = detail.firstMonth;
    document.getElementById("detail-ai-start").textContent = detail.aiStart;

    fillList("detail-goodfits", detail.goodFits);
    fillList("detail-badfits", detail.badFits);
    fillList("detail-week", detail.firstWeek);
    fillList("detail-mistakes", detail.mistakes);

    appendRecommendLink(typeData.recommendPagePath, TYPE_LABELS[typeKey]);
  }
}

function appendRecommendLink(link, label) {
  if (!link) return;

  const stack = document.querySelector("#detail-page .content-stack");
  const returnCard = stack.lastElementChild;
  const recommendCard = document.createElement("article");
  recommendCard.className = "content-card";
  recommendCard.innerHTML = `
    <h2>おすすめ副業3選を見る</h2>
    <p>このタイプ向けの候補を比較しながら、最初の行動までまとめて確認できます。</p>
    <div class="page-actions">
      <a class="primary-button" href="${link}">${label}向けおすすめ副業3選へ</a>
    </div>
  `;

  stack.insertBefore(recommendCard, returnCard);
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
