const TYPES = {
  steady: "コツコツ積み上げ型",
  quick: "即収益スキル販売型",
  system: "仕組み化・自動化型",
  content: "発信・コンテンツ型",
  sales: "営業・提案型",
  expert: "専門知識活用型"
};

const questions = [
  {
    text: "Q1. 副業に使える平日の時間は？",
    choices: [
      { text: "30分〜1時間くらい", type: "steady" },
      { text: "1〜2時間くらい", type: "content" },
      { text: "まとまった時間を土日に取れる", type: "quick" },
      { text: "日によってかなりバラバラ", type: "system" },
      { text: "人とやり取りする時間も取れる", type: "sales" },
      { text: "本業の知識を活かす時間なら取れる", type: "expert" }
    ]
  },
  {
    text: "Q2. 副業で一番ほしいものは？",
    choices: [
      { text: "将来的にじわじわ育つ資産", type: "steady" },
      { text: "できるだけ早い収益", type: "quick" },
      { text: "自分が動かなくても回る仕組み", type: "system" },
      { text: "好きなことを形にすること", type: "content" },
      { text: "人に提案して成果を出すこと", type: "sales" },
      { text: "今の仕事経験をそのまま活かすこと", type: "expert" }
    ]
  },
  {
    text: "Q3. 次のうち、比較的苦にならないのは？",
    choices: [
      { text: "毎日少しずつ続けること", type: "steady" },
      { text: "納期を決めて作業すること", type: "quick" },
      { text: "一度作ったものを改善し続けること", type: "system" },
      { text: "文章や発信を考えること", type: "content" },
      { text: "人と話したり提案したりすること", type: "sales" },
      { text: "複雑な業務を整理して説明すること", type: "expert" }
    ]
  },
  {
    text: "Q4. お金になるまで時間がかかる副業についてどう思う？",
    choices: [
      { text: "むしろその方が自分に合う", type: "steady" },
      { text: "できれば早めに回収したい", type: "quick" },
      { text: "最初だけ頑張って後で楽したい", type: "system" },
      { text: "楽しければある程度続けられる", type: "content" },
      { text: "人に売れるなら早く結果を出したい", type: "sales" },
      { text: "実務に直結するなら時間がかかってもいい", type: "expert" }
    ]
  },
  {
    text: "Q5. あなたが得意寄りなのは？",
    choices: [
      { text: "地味な作業を続けること", type: "steady" },
      { text: "手を動かして何かを作ること", type: "quick" },
      { text: "面倒を減らすやり方を考えること", type: "system" },
      { text: "自分の考えを言葉にすること", type: "content" },
      { text: "相手の要望を聞いて動くこと", type: "sales" },
      { text: "実務のコツや知識を整理すること", type: "expert" }
    ]
  },
  {
    text: "Q6. 初期費用についての感覚は？",
    choices: [
      { text: "ほぼかけたくない", type: "steady" },
      { text: "多少ならかけてもすぐ回収したい", type: "quick" },
      { text: "仕組み作りのためなら少し使ってもいい", type: "system" },
      { text: "発信環境や見せ方には少し使ってもいい", type: "content" },
      { text: "営業資料や提案準備には使ってもいい", type: "sales" },
      { text: "学習や業務改善に役立つなら使ってもいい", type: "expert" }
    ]
  },
  {
    text: "Q7. 一番避けたい働き方は？",
    choices: [
      { text: "人と頻繁にやり取りすること", type: "steady" },
      { text: "収益化まで長すぎること", type: "quick" },
      { text: "毎回ゼロから作ること", type: "system" },
      { text: "ひたすら無機質な作業だけすること", type: "content" },
      { text: "一人で黙々と完結すること", type: "sales" },
      { text: "自分の経験が全く活きないこと", type: "expert" }
    ]
  },
  {
    text: "Q8. 周りから言われやすいことは？",
    choices: [
      { text: "真面目で地道", type: "steady" },
      { text: "作業が早い", type: "quick" },
      { text: "効率化がうまい", type: "system" },
      { text: "話や文章がわかりやすい", type: "content" },
      { text: "人当たりがいい", type: "sales" },
      { text: "仕事の理解が深い", type: "expert" }
    ]
  },
  {
    text: "Q9. どちらかと言えばワクワクするのは？",
    choices: [
      { text: "少しずつ積み上がっていくこと", type: "steady" },
      { text: "初報酬が早く出ること", type: "quick" },
      { text: "自分が寝てても回る形に近づくこと", type: "system" },
      { text: "自分の発信に反応がつくこと", type: "content" },
      { text: "提案が通って案件になること", type: "sales" },
      { text: "自分の知識が誰かの役に立つこと", type: "expert" }
    ]
  },
  {
    text: "Q10. 今のあなたに一番近いのは？",
    choices: [
      { text: "派手さはなくても堅実に進めたい", type: "steady" },
      { text: "とにかく最初の売上を作りたい", type: "quick" },
      { text: "AIやツールを使って賢く回したい", type: "system" },
      { text: "自分の経験や考えを形にしたい", type: "content" },
      { text: "相手がいる仕事の方がやりやすい", type: "sales" },
      { text: "本業や実務経験を武器にしたい", type: "expert" }
    ]
  }
];

const results = {
  steady: {
    title: "あなたは「コツコツ積み上げ型」です",
    summary: "あなたは、短期間で一気に稼ぐよりも、少しずつ積み上げて形にしていく副業が向いています。派手さはなくても、継続するほど強くなるタイプです。",
    goodFits: ["ブログ", "情報サイト運営", "SNSアカウント育成", "コンテンツ販売", "アフィリエイト"],
    badFits: ["営業色が強い受託", "対人交渉が多い案件", "即納中心の仕事"],
    firstStep: "まずは1テーマに絞って、3か月続ける前提で始めるのが向いています。",
    advice: "すぐ稼げないことを弱みだと思わなくて大丈夫です。積み上げ型は、途中でやめない人が最後に勝ちます。"
  },
  quick: {
    title: "あなたは「即収益スキル販売型」です",
    summary: "あなたは、時間を使って成果物を作り、その対価をもらう副業と相性がいいです。まずは売れる作業を持つ方が向いています。",
    goodFits: ["Web制作", "LP制作", "動画編集", "バナー作成", "資料作成代行", "AIを使った制作代行"],
    badFits: ["収益化まで長い副業一本勝負"],
    firstStep: "まずは1万円の売上を目標にして、小さく売れるサービスを作るのが近道です。",
    advice: "あなたは積み上げる前に、先に売上を作った方が伸びるタイプです。"
  },
  system: {
    title: "あなたは「仕組み化・自動化型」です",
    summary: "あなたは、自分がずっと手を動かし続けるより、最初に仕組みを作って後から楽にする副業が向いています。AIやツール活用との相性がいいタイプです。",
    goodFits: ["ミニアプリ開発", "診断サイト", "比較サイト", "自動化ツール販売", "業務効率化ツール", "テンプレート販売"],
    badFits: ["対人依存が強い仕事", "毎回オーダーメイド前提の受託"],
    firstStep: "1個を完璧に作るより、同じ土台で量産できる形を先に作るのが向いています。",
    advice: "あなたは『頑張り続ける』より、『最初に賢く作る』方が強いです。"
  },
  content: {
    title: "あなたは「発信・コンテンツ型」です",
    summary: "あなたは、考えたことや経験を言葉や形にして届ける副業と相性がいいです。伝える力で価値を出しやすいタイプです。",
    goodFits: ["SNS運用", "note販売", "ブログ", "コンテンツ制作", "台本作成"],
    badFits: ["完全に無言で進めるだけの作業"],
    firstStep: "誰に向けて何を発信するかを、まず1つに絞るのが大事です。",
    advice: "あなたは『作る力』だけでなく『伝える力』で勝てるタイプです。"
  },
  sales: {
    title: "あなたは「営業・提案型」です",
    summary: "あなたは、相手の悩みを聞いて必要なものを提案して形にする副業が向いています。課題解決の流れの中で力を出しやすいタイプです。",
    goodFits: ["HP制作営業", "SNS運用代行", "LINE導線改善", "小規模事業者向けサポート"],
    badFits: ["ひたすら一人で積み上げるだけの副業"],
    firstStep: "何を作るかより先に、誰の困りごとを解決するかを決めると強いです。",
    advice: "あなたは商品を置いて待つより、人に合わせて提案した方が強いです。"
  },
  expert: {
    title: "あなたは「専門知識活用型」です",
    summary: "あなたは、今までの仕事経験や実務知識をそのまま活かせる副業と相性がいいです。持っている知識をお金に変える方が勝ちやすいタイプです。",
    goodFits: ["実務代行", "業務改善支援", "資料・集計・分析支援", "リサーチ補助", "業界特化ミニツール制作"],
    badFits: ["知識が活きない横並び競争"],
    firstStep: "自分の仕事で、他の人が面倒がる作業を書き出すところから始めるのがおすすめです。",
    advice: "新しい武器を探す前に、今持っている武器をお金に変える方が早いです。"
  }
};

const tieBreakerQuestionIndexes = [1, 3, 9];

let currentQuestionIndex = 0;
let answers = [];

const startScreen = document.getElementById("screen-start");
const questionScreen = document.getElementById("screen-question");
const resultScreen = document.getElementById("screen-result");

const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");
const retryButton = document.getElementById("retry-button");

const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");

const resultTitle = document.getElementById("result-title");
const resultSummary = document.getElementById("result-summary");
const resultGoodFits = document.getElementById("result-goodfits");
const resultBadFits = document.getElementById("result-badfits");
const resultFirstStep = document.getElementById("result-firststep");
const resultAdvice = document.getElementById("result-advice");

function showScreen(screenName) {
  startScreen.classList.remove("active");
  questionScreen.classList.remove("active");
  resultScreen.classList.remove("active");

  if (screenName === "start") startScreen.classList.add("active");
  if (screenName === "question") questionScreen.classList.add("active");
  if (screenName === "result") resultScreen.classList.add("active");
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  questionTitle.textContent = question.text;
  progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

  choicesContainer.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${choice.text}`;
    button.addEventListener("click", () => {
      answers[currentQuestionIndex] = choice.type;

      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex += 1;
        renderQuestion();
      } else {
        renderResult();
      }
    });
    choicesContainer.appendChild(button);
  });

  backButton.style.display = currentQuestionIndex === 0 ? "none" : "block";
}

function calculateResultType() {
  const scores = {
    steady: 0,
    quick: 0,
    system: 0,
    content: 0,
    sales: 0,
    expert: 0
  };

  answers.forEach((type) => {
    scores[type] += 1;
  });

  let maxScore = Math.max(...Object.values(scores));
  let topTypes = Object.keys(scores).filter((type) => scores[type] === maxScore);

  if (topTypes.length === 1) {
    return topTypes[0];
  }

  for (const questionIndex of tieBreakerQuestionIndexes) {
    const answerType = answers[questionIndex];
    if (topTypes.includes(answerType)) {
      return answerType;
    }
  }

  return topTypes[0];
}

function createListItems(targetElement, items) {
  targetElement.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    targetElement.appendChild(li);
  });
}

function renderResult() {
  const resultType = calculateResultType();
  const data = results[resultType];

  resultTitle.textContent = data.title;
  resultSummary.textContent = data.summary;
  createListItems(resultGoodFits, data.goodFits);
  createListItems(resultBadFits, data.badFits);
  resultFirstStep.textContent = data.firstStep;
  resultAdvice.textContent = data.advice;

  showScreen("result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetDiagnosis() {
  currentQuestionIndex = 0;
  answers = [];
  showScreen("start");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  answers = [];
  showScreen("question");
  renderQuestion();
});

backButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
});

retryButton.addEventListener("click", resetDiagnosis);

showScreen("start");
