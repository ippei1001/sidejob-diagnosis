const recommendRoot = document.getElementById("recommend-page");

if (recommendRoot) {
  const typeKey = recommendRoot.dataset.type;
  const typeName = TYPE_LABELS[typeKey];
  const typeData = TYPE_DATA[typeKey];
  const recommendData = RECOMMEND_DATA[typeKey];

  if (!typeName || !typeData || !recommendData) {
    recommendRoot.innerHTML = "<p>ページ情報の読み込みに失敗しました。診断ページへ戻ってください。</p>";
  } else {
    document.title = `${typeName}のおすすめ副業3選 | 副業タイプ診断`;
    document.getElementById("recommend-eyebrow").textContent = `${typeName}向け`;
    document.getElementById("recommend-title").textContent = recommendData.pageTitle;
    document.getElementById("recommend-intro").textContent = recommendData.intro;
    document.getElementById("recommend-reason").textContent = recommendData.reason;
    document.getElementById("recommend-ai").textContent = recommendData.aiStartIntro;

    fillList("recommend-week", recommendData.firstWeek);
    fillList("recommend-mistakes", recommendData.mistakes);
    fillList("recommend-ai-steps", recommendData.aiSteps);

    renderJobCards(recommendData.sideJobs);
    renderComparisonTable(recommendData.sideJobs);

    const detailLink = document.getElementById("recommend-detail-link");
    detailLink.href = typeData.detailPagePath;
    detailLink.textContent = `${typeName}の詳しい解説を見る`;
  }
}

function renderJobCards(sideJobs) {
  const container = document.getElementById("recommend-jobs");
  container.innerHTML = "";

  sideJobs.forEach((job) => {
    const card = document.createElement("article");
    card.className = "recommend-job-card";
    card.innerHTML = `
      <h3>${job.name}</h3>
      <p><strong>どんな人に向いているか：</strong>${job.suitableFor}</p>
      <p><strong>このタイプと相性がいい理由：</strong>${job.matchReason}</p>
      <dl class="recommend-metrics">
        <div><dt>始めやすさ</dt><dd>${job.ease}</dd></div>
        <div><dt>収益化までの早さ</dt><dd>${job.speed}</dd></div>
        <div><dt>初期費用感</dt><dd>${job.cost}</dd></div>
        <div><dt>継続しやすさ</dt><dd>${job.sustainability}</dd></div>
        <div><dt>AIとの相性</dt><dd>${job.aiFit}</dd></div>
      </dl>
      <p><strong>最初にやること：</strong>${job.firstAction}</p>
      <p><strong>注意点：</strong>${job.caution}</p>
    `;
    container.appendChild(card);
  });
}

function renderComparisonTable(sideJobs) {
  const body = document.getElementById("recommend-table-body");
  body.innerHTML = "";

  sideJobs.forEach((job) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row">${job.name}</th>
      <td>${job.ease}</td>
      <td>${job.speed}</td>
      <td>${job.cost}</td>
      <td>${job.sustainability}</td>
      <td>${job.aiFit}</td>
    `;
    body.appendChild(tr);
  });
}

function fillList(targetId, items) {
  const target = document.getElementById(targetId);
  if (!target || !Array.isArray(items)) return;

  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}
