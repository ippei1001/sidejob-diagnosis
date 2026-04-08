/*
  Affiliate slot data.
  Replace each card's name/description/url/buttonText later.
  If you want to show disclosure text, set disclosure to non-empty string.
*/
const AFFILIATE_SLOT_DATA = {
  steady: {
    disclosure: "",
    cards: [
      {
        name: "積み上げ型サポート講座（仮）",
        oneLine: "毎週の行動を淡々と続けたい人向けの伴走サービス。",
        suitableFor: "作業時間を固定して、着実に副業を進めたい人",
        matchReason: "このページの『最初の1週間』と同じ流れで実践しやすいから",
        buttonText: "詳細を見てみる",
        url: "#affiliate-placeholder-steady-1"
      },
      {
        name: "作業管理ツール（仮）",
        oneLine: "タスクを分割して、継続ペースを可視化できるツール。",
        suitableFor: "副業でやることが増えると混乱しやすい人",
        matchReason: "継続しやすさを重視するこのタイプと相性がよいから",
        buttonText: "無料プランを確認する",
        url: "https://example.com/offer-steady"
      }
    ]
  },
  quick: {
    disclosure: "",
    cards: [
      {
        name: "即実践テンプレート集（仮）",
        oneLine: "すぐに使える提案文や出品文の型をまとめたサービス。",
        suitableFor: "最短で初案件を取りたい人",
        matchReason: "スピード重視で行動するこのタイプの立ち上がりを早めやすいから",
        buttonText: "テンプレートを見る",
        url: "#affiliate-placeholder-quick-1"
      }
    ]
  },
  system: {
    disclosure: "",
    cards: [
      {
        name: "自動化ワークフロー講座（仮）",
        oneLine: "定型作業を効率化する設定手順を学べるサービス。",
        suitableFor: "仕組みを先に作ってから運用したい人",
        matchReason: "このタイプの強みである再現性を伸ばしやすいから",
        buttonText: "内容を確認する",
        url: "#affiliate-placeholder-system-1"
      }
    ]
  },
  content: {
    disclosure: "",
    cards: [
      {
        name: "発信設計ノート（仮）",
        oneLine: "発信テーマと投稿導線を整理できるテンプレート。",
        suitableFor: "発信内容が散らかりやすい人",
        matchReason: "コンテンツ型で重要な『継続発信』を安定させやすいから",
        buttonText: "サンプルを見る",
        url: "#affiliate-placeholder-content-1"
      },
      {
        name: "編集効率化ツール（仮）",
        oneLine: "文章・画像・動画の下準備を短縮しやすい支援ツール。",
        suitableFor: "制作時間を減らして更新頻度を上げたい人",
        matchReason: "このページのAI活用ステップと合わせて使いやすいから",
        buttonText: "使い方を見る",
        url: "https://example.com/offer-content"
      }
    ]
  },
  sales: {
    disclosure: "",
    cards: [
      {
        name: "提案力トレーニング教材（仮）",
        oneLine: "ヒアリング〜提案までの流れを練習できる教材。",
        suitableFor: "営業経験が浅く、提案の型を持ちたい人",
        matchReason: "営業・コミュニケーション型の成果を出す土台になるから",
        buttonText: "教材ページを見る",
        url: "#affiliate-placeholder-sales-1"
      }
    ]
  },
  expert: {
    disclosure: "",
    cards: [
      {
        name: "専門スキル棚卸しシート（仮）",
        oneLine: "経験を商品化しやすい形に整理できるワークシート。",
        suitableFor: "強みの見せ方に迷っている人",
        matchReason: "専門性活用型の価値提案を作りやすくなるから",
        buttonText: "シートを確認する",
        url: "#affiliate-placeholder-expert-1"
      }
    ]
  },
  "free-guide": {
    disclosure: "",
    cards: [
      {
        name: "副業スタートチェックリスト（仮）",
        oneLine: "無料ガイドの内容を行動に落とすための確認用サービス。",
        suitableFor: "ガイドを読んだあと、最初の一歩を具体化したい人",
        matchReason: "free-guideページの内容を実践に繋げる補助として使いやすいから",
        buttonText: "チェック項目を見る",
        url: "#affiliate-placeholder-guide-1"
      }
    ]
  }
};

(function renderAffiliateSlots() {
  const recommendRoot = document.getElementById("recommend-page");
  const recommendSlot = document.getElementById("affiliate-slot-recommend");
  if (recommendRoot && recommendSlot) {
    createAffiliateCards(recommendSlot, recommendRoot.dataset.type);
  }

  const freeGuideSlot = document.getElementById("affiliate-slot-free-guide");
  if (freeGuideSlot) {
    createAffiliateCards(freeGuideSlot, "free-guide");
  }
})();

function createAffiliateCards(slotElement, typeKey) {
  const cardContainer = slotElement.querySelector(".affiliate-cards");
  if (!cardContainer) return;

  const slotData = AFFILIATE_SLOT_DATA[typeKey];
  if (!slotData || !Array.isArray(slotData.cards) || slotData.cards.length === 0) {
    cardContainer.innerHTML = "<p class='affiliate-empty'>紹介枠は準備中です。後からここにサービス情報を追加できます。</p>";
    return;
  }

  const noteElement = slotElement.querySelector(".affiliate-note-slot");
  if (noteElement) {
    if (slotData.disclosure) {
      noteElement.innerHTML = `<p class="affiliate-disclosure">${slotData.disclosure}</p>`;
    } else {
      noteElement.innerHTML = "";
    }
  }

  cardContainer.innerHTML = "";
  slotData.cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "affiliate-card";
    article.innerHTML = `
      <h3>${card.name}</h3>
      <p class="affiliate-one-line">${card.oneLine}</p>
      <p><strong>どんな人に向いているか：</strong>${card.suitableFor}</p>
      <p><strong>このページとの相性がいい理由：</strong>${card.matchReason}</p>
      <a class="secondary-button affiliate-link" href="${card.url}" target="_blank" rel="noopener noreferrer">${card.buttonText}</a>
    `;
    cardContainer.appendChild(article);
  });
}
