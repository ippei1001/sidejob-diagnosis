// LINE導線のリンク先はここだけ差し替えれば全ページへ反映されます。
// 例: url: "https://lin.ee/xxxxxxxx"
window.LINE_CTA_CONFIG = {
  url: 'https://example.com/line',
  openInNewTab: true,
  rel: 'noopener noreferrer'
};

(function applyLineCtaLink() {
  const config = window.LINE_CTA_CONFIG || {};
  const lineUrl = config.url || 'https://example.com/line';
  const anchors = document.querySelectorAll('[data-line-link]');

  anchors.forEach((anchor) => {
    anchor.href = lineUrl;

    if (config.openInNewTab) {
      anchor.target = '_blank';
    }

    if (config.rel) {
      anchor.rel = config.rel;
    }
  });
})();
