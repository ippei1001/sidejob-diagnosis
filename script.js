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
const resultWeekActions = document.getElementById("result-week-actions");
const resultAdvice = document.getElementById("result-advice");
const resultDetailLink = document.getElementById("result-detail-link");

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
  const scores = TYPE_ORDER.reduce((acc, type) => {
    acc[type] = 0;
    return acc;
  }, {});

  answers.forEach((type) => {
    scores[type] += 1;
  });

  const maxScore = Math.max(...Object.values(scores));
  const topTypes = Object.keys(scores).filter((type) => scores[type] === maxScore);

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
  const data = TYPE_DATA[resultType];

  resultTitle.textContent = data.title;
  resultSummary.textContent = data.summary;
  createListItems(resultGoodFits, data.goodFits);
  createListItems(resultBadFits, data.badFits);
  resultFirstStep.textContent = data.firstStep;
  createListItems(resultWeekActions, data.firstWeekActions);
  resultAdvice.textContent = data.advice;
  resultDetailLink.href = data.detailPagePath;

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
