const DRIVE_HEADER_IMAGE_URL =
  'https://lh3.googleusercontent.com/d/1-t97iNlKt3eckuGwLz_EW_6sVEQSlC7c';
const LOCAL_HEADER_IMAGE_URL =
  '/assets/aistudio/top-10-entrepreneurship-trends_7ad89898.jpeg';

function buildBloggerInnerHtml(headerImageUrl: string): string {
  return `<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700');
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800');

  .sgn-landing-page {
    --sgn-bg: #ffffff;
    --sgn-surface: #f6f8fa;
    --sgn-surface-green: #eef7f2;
    --sgn-surface-orange: #fff7ed;
    --sgn-navy: #0b1f3a;
    --sgn-navy-deep: #071529;
    --sgn-navy-soft: #132c4f;
    --sgn-text: #334155;
    --sgn-muted: #526277;
    --sgn-border: #dce3ec;
    --sgn-green: #0e7a48;
    --sgn-green-dark: #0a5e37;
    --sgn-orange: #c8560a;
    --sgn-orange-dark: #a84606;
    --sgn-shadow: 0 10px 28px -10px rgba(11, 31, 58, 0.08);
    --sgn-shadow-lg: 0 24px 48px -16px rgba(11, 31, 58, 0.2);
    background-color: var(--sgn-bg);
    color: var(--sgn-text);
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.65;
    margin: 0 auto;
    overflow-x: hidden;
    padding: 0;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .sgn-landing-page *,
  .sgn-landing-page *::before,
  .sgn-landing-page *::after {
    box-sizing: border-box;
  }

  .sgn-landing-page h1,
  .sgn-landing-page h2,
  .sgn-landing-page h3,
  .sgn-landing-page h4,
  .sgn-landing-page p,
  .sgn-landing-page ul,
  .sgn-landing-page ol {
    margin: 0;
    padding: 0;
  }

  .sgn-landing-page img,
  .sgn-landing-page svg {
    display: block;
    max-width: 100%;
  }

  .sgn-landing-page a {
    text-decoration: none;
  }

  .sgn-landing-page .sgn-container {
    margin: 0 auto;
    max-width: 1120px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }

  .sgn-landing-page .sgn-section {
    padding-bottom: 64px;
    padding-top: 64px;
  }

  .sgn-landing-page .sgn-section-alt {
    background-color: var(--sgn-surface);
    border-bottom: 1px solid var(--sgn-border);
    border-top: 1px solid var(--sgn-border);
  }

  .sgn-landing-page .sgn-kicker {
    color: var(--sgn-green);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
  }

  .sgn-landing-page .sgn-h1 {
    color: var(--sgn-navy);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: clamp(2rem, 4.3vw, 3.05rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.14;
    margin-bottom: 20px;
    text-wrap: balance;
  }

  .sgn-landing-page .sgn-h2 {
    color: var(--sgn-navy);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: clamp(1.625rem, 3vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 16px;
    text-wrap: balance;
  }

  .sgn-landing-page .sgn-h3 {
    color: var(--sgn-navy);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.35;
    margin-bottom: 8px;
  }

  .sgn-landing-page .sgn-lead {
    color: var(--sgn-text);
    font-size: 1.0625rem;
    line-height: 1.7;
    max-width: 62ch;
  }

  .sgn-landing-page .sgn-body-text {
    color: var(--sgn-text);
    font-size: 0.96rem;
    line-height: 1.65;
  }

  .sgn-landing-page .sgn-inline-link {
    color: var(--sgn-green);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .sgn-landing-page .sgn-inline-link:hover,
  .sgn-landing-page .sgn-inline-link:focus-visible {
    color: var(--sgn-orange);
  }

  .sgn-landing-page .sgn-section-head {
    margin-bottom: 38px;
    max-width: 700px;
  }

  .sgn-landing-page .sgn-mt-sm {
    margin-top: 14px;
  }

  .sgn-landing-page .sgn-mt-md {
    margin-top: 28px;
  }

  .sgn-landing-page .sgn-mb-0 {
    margin-bottom: 0;
  }

  /* Primary CTA Button */
  .sgn-landing-page .sgn-cta-btn {
    align-items: center;
    background-color: var(--sgn-orange);
    border: 2px solid var(--sgn-orange);
    border-radius: 12px;
    box-shadow: 0 10px 24px -8px rgba(200, 86, 10, 0.42);
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    gap: 10px;
    justify-content: center;
    letter-spacing: 0.015em;
    min-height: 54px;
    padding: 15px 28px;
    text-align: center;
    transition: background-color 0.18s ease, border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
  }

  .sgn-landing-page .sgn-cta-btn:hover,
  .sgn-landing-page .sgn-cta-btn:focus-visible {
    background-color: var(--sgn-orange-dark);
    border-color: var(--sgn-orange-dark);
    box-shadow: 0 14px 28px -8px rgba(168, 70, 6, 0.48);
    color: #ffffff;
    outline: none;
    transform: translateY(-1px);
  }

  .sgn-landing-page .sgn-cta-btn:focus-visible {
    box-shadow: 0 0 0 3px #ffffff, 0 0 0 6px var(--sgn-navy);
  }

  .sgn-landing-page .sgn-cta-btn-lg {
    font-size: 1rem;
    min-height: 58px;
    padding: 17px 36px;
  }

  .sgn-landing-page .sgn-cta-note {
    color: var(--sgn-muted);
    font-size: 0.875rem;
    margin-top: 12px;
  }

  /* Header Banner Image */
  .sgn-landing-page .sgn-header-banner {
    background-color: var(--sgn-surface);
    border: 1px solid var(--sgn-border);
    border-radius: 18px;
    box-shadow: var(--sgn-shadow);
    margin-bottom: 36px;
    overflow: hidden;
    width: 100%;
  }

  .sgn-landing-page .sgn-header-img {
    height: clamp(220px, 38vw, 440px);
    object-fit: cover;
    object-position: center 22%;
    width: 100%;
  }

  /* A. Hero Section */
  .sgn-landing-page .sgn-hero {
    border-bottom: 1px solid var(--sgn-border);
    padding-bottom: 64px;
    padding-top: 28px;
  }

  .sgn-landing-page .sgn-hero-grid {
    align-items: center;
    display: grid;
    gap: 44px;
    grid-template-columns: 1fr;
  }

  .sgn-landing-page .sgn-hero-bullets {
    display: grid;
    gap: 10px;
    list-style: none;
    margin-top: 22px;
  }

  .sgn-landing-page .sgn-hero-bullets li {
    align-items: center;
    color: var(--sgn-navy);
    display: flex;
    font-size: 0.95rem;
    font-weight: 500;
    gap: 10px;
  }

  .sgn-landing-page .sgn-hero-check {
    color: var(--sgn-green);
    flex-shrink: 0;
  }

  .sgn-landing-page .sgn-hero-actions {
    margin-top: 28px;
  }

  /* Realistic PDF Book Cover Presentation */
  .sgn-landing-page .sgn-book-stage {
    margin: 0 auto;
    max-width: 390px;
    padding-bottom: 10px;
    padding-right: 10px;
    position: relative;
    width: 100%;
  }

  .sgn-landing-page .sgn-book-pages {
    background-color: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 6px 14px 14px 6px;
    bottom: 0;
    left: 10px;
    position: absolute;
    right: 0;
    top: 10px;
  }

  .sgn-landing-page .sgn-book-cover {
    background-color: var(--sgn-navy);
    border-radius: 6px 14px 14px 6px;
    box-shadow: var(--sgn-shadow-lg);
    color: #ffffff;
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .sgn-landing-page .sgn-book-spine {
    background-color: var(--sgn-navy-deep);
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    flex-shrink: 0;
    width: 18px;
  }

  .sgn-landing-page .sgn-book-face {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 28px 24px;
  }

  .sgn-landing-page .sgn-book-topbar {
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    padding-bottom: 14px;
  }

  .sgn-landing-page .sgn-book-publisher {
    color: #cbd5e1;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .sgn-landing-page .sgn-book-format {
    color: #fdba74;
    font-size: 0.78rem;
    font-weight: 700;
  }

  .sgn-landing-page .sgn-book-rule {
    background-color: var(--sgn-green);
    border-radius: 2px;
    height: 4px;
    margin-bottom: 16px;
    width: 52px;
  }

  .sgn-landing-page .sgn-book-title {
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.45rem;
    font-weight: 800;
    letter-spacing: -0.015em;
    line-height: 1.24;
    margin-bottom: 12px;
  }

  .sgn-landing-page .sgn-book-subtitle {
    color: #cbd5e1;
    font-size: 0.92rem;
    line-height: 1.55;
    margin-bottom: 22px;
  }

  .sgn-landing-page .sgn-book-toc {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    display: grid;
    gap: 10px;
    list-style: none;
    padding-top: 18px;
  }

  .sgn-landing-page .sgn-book-toc li {
    align-items: center;
    color: #e2e8f0;
    display: flex;
    font-size: 0.875rem;
    gap: 10px;
  }

  .sgn-landing-page .sgn-book-toc-check {
    color: #4ade80;
    flex-shrink: 0;
  }

  /* B. The Problem Section */
  .sgn-landing-page .sgn-questions-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: 1fr;
    margin-bottom: 36px;
  }

  .sgn-landing-page .sgn-question-card {
    background-color: var(--sgn-surface);
    border: 1px solid var(--sgn-border);
    border-radius: 12px;
    color: var(--sgn-navy);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.45;
    padding: 18px 20px;
  }

  .sgn-landing-page .sgn-problem-grid {
    display: grid;
    gap: 18px;
    grid-template-columns: 1fr;
  }

  .sgn-landing-page .sgn-problem-card {
    background-color: var(--sgn-bg);
    border: 1px solid var(--sgn-border);
    border-radius: 14px;
    box-shadow: var(--sgn-shadow);
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
  }

  .sgn-landing-page .sgn-problem-num {
    color: var(--sgn-orange);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.875rem;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
  }

  /* C. Why Starting Small Is Possible */
  .sgn-landing-page .sgn-mindset-layout {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
  }

  .sgn-landing-page .sgn-mindset-card {
    background-color: var(--sgn-bg);
    border: 1px solid var(--sgn-border);
    border-radius: 16px;
    box-shadow: var(--sgn-shadow);
    padding: 28px 24px;
  }

  .sgn-landing-page .sgn-mindset-pillars {
    display: grid;
    gap: 18px;
    list-style: none;
  }

  .sgn-landing-page .sgn-mindset-pillar {
    align-items: flex-start;
    display: flex;
    gap: 14px;
  }

  /* D. Introducing the Solution */
  .sgn-landing-page .sgn-solution-box {
    background-color: var(--sgn-surface);
    border: 1px solid var(--sgn-border);
    border-radius: 18px;
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    padding: 28px 24px;
  }

  .sgn-landing-page .sgn-solution-points {
    display: grid;
    gap: 16px;
    list-style: none;
  }

  .sgn-landing-page .sgn-solution-point {
    align-items: flex-start;
    background-color: var(--sgn-bg);
    border: 1px solid var(--sgn-border);
    border-radius: 14px;
    display: flex;
    gap: 14px;
    padding: 18px;
  }

  .sgn-landing-page .sgn-icon-box-green {
    align-items: center;
    background-color: var(--sgn-surface-green);
    border-radius: 10px;
    color: var(--sgn-green);
    display: inline-flex;
    flex-shrink: 0;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  .sgn-landing-page .sgn-icon-box-orange {
    align-items: center;
    background-color: var(--sgn-surface-orange);
    border-radius: 10px;
    color: var(--sgn-orange);
    display: inline-flex;
    flex-shrink: 0;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  /* E. Inside the Guide Grid */
  .sgn-landing-page .sgn-features-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
  }

  .sgn-landing-page .sgn-feature-card {
    background-color: var(--sgn-bg);
    border: 1px solid var(--sgn-border);
    border-radius: 16px;
    box-shadow: var(--sgn-shadow);
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 24px;
  }

  .sgn-landing-page .sgn-feature-card-featured {
    background-color: var(--sgn-surface-green);
    border-color: #bfe3cf;
  }

  .sgn-landing-page .sgn-section-cta-row {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 32px;
  }

  /* F. Practical Benefits Grid */
  .sgn-landing-page .sgn-benefits-grid {
    display: grid;
    gap: 18px;
    grid-template-columns: 1fr;
  }

  .sgn-landing-page .sgn-benefit-card {
    align-items: flex-start;
    background-color: var(--sgn-bg);
    border: 1px solid var(--sgn-border);
    border-radius: 14px;
    box-shadow: var(--sgn-shadow);
    display: flex;
    gap: 14px;
    padding: 22px 20px;
  }

  /* G. Who Is This Guide Designed For */
  .sgn-landing-page .sgn-audience-layout {
    display: grid;
    gap: 36px;
    grid-template-columns: 1fr;
  }

  .sgn-landing-page .sgn-audience-list {
    display: grid;
    gap: 14px;
    list-style: none;
  }

  .sgn-landing-page .sgn-audience-item {
    align-items: flex-start;
    background-color: var(--sgn-surface);
    border: 1px solid var(--sgn-border);
    border-radius: 14px;
    display: flex;
    gap: 14px;
    padding: 18px 20px;
  }

  .sgn-landing-page .sgn-audience-title {
    color: var(--sgn-navy);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
  }

  /* H. Why Useful for Beginners (Navy Panel) */
  .sgn-landing-page .sgn-diff-panel {
    background-color: var(--sgn-navy);
    border-radius: 20px;
    box-shadow: var(--sgn-shadow-lg);
    color: #e2e8f0;
    padding: 36px 24px;
  }

  .sgn-landing-page .sgn-diff-panel .sgn-kicker {
    color: #fdba74;
  }

  .sgn-landing-page .sgn-diff-panel .sgn-h2 {
    color: #ffffff;
  }

  .sgn-landing-page .sgn-diff-panel .sgn-lead {
    color: #cbd5e1;
  }

  .sgn-landing-page .sgn-diff-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
    margin-top: 32px;
  }

  .sgn-landing-page .sgn-diff-card {
    background-color: var(--sgn-navy-soft);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    padding: 22px;
  }

  .sgn-landing-page .sgn-diff-card h3 {
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.0625rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .sgn-landing-page .sgn-diff-card p {
    color: #cbd5e1;
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  .sgn-landing-page .sgn-honest-note {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    color: #cbd5e1;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 28px;
    padding-top: 20px;
  }

  /* I. Frequently Asked Questions */
  .sgn-landing-page .sgn-faq-list {
    display: grid;
    gap: 14px;
    max-width: 820px;
  }

  .sgn-landing-page .sgn-faq-item {
    background-color: var(--sgn-bg);
    border: 1px solid var(--sgn-border);
    border-radius: 14px;
    overflow: hidden;
  }

  .sgn-landing-page .sgn-faq-question {
    align-items: center;
    color: var(--sgn-navy);
    cursor: pointer;
    display: flex;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    gap: 16px;
    justify-content: space-between;
    list-style: none;
    min-height: 54px;
    padding: 18px 22px;
  }

  .sgn-landing-page .sgn-faq-question::-webkit-details-marker {
    display: none;
  }

  .sgn-landing-page .sgn-faq-question:focus-visible {
    outline: 2px solid var(--sgn-navy);
    outline-offset: -2px;
  }

  .sgn-landing-page .sgn-faq-icon {
    color: var(--sgn-green);
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  .sgn-landing-page .sgn-faq-item[open] .sgn-faq-icon {
    transform: rotate(180deg);
  }

  .sgn-landing-page .sgn-faq-answer {
    border-top: 1px solid var(--sgn-border);
    color: var(--sgn-text);
    font-size: 0.95rem;
    line-height: 1.65;
    padding: 18px 22px 20px;
  }

  /* J. Final Call to Action */
  .sgn-landing-page .sgn-final-cta {
    padding-bottom: 72px;
    padding-top: 72px;
    text-align: center;
  }

  .sgn-landing-page .sgn-final-cta-inner {
    margin: 0 auto;
    max-width: 680px;
  }

  .sgn-landing-page .sgn-final-cta .sgn-lead {
    margin: 0 auto 30px;
  }

  /* Footer */
  .sgn-landing-page .sgn-footer {
    background-color: var(--sgn-surface);
    border-top: 1px solid var(--sgn-border);
    padding-bottom: 40px;
    padding-top: 44px;
  }

  .sgn-landing-page .sgn-footer-grid {
    display: grid;
    gap: 28px;
    grid-template-columns: 1fr;
    padding-bottom: 28px;
  }

  .sgn-landing-page .sgn-footer-brand {
    color: var(--sgn-navy);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.125rem;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .sgn-landing-page .sgn-footer-desc {
    color: var(--sgn-muted);
    font-size: 0.92rem;
    line-height: 1.6;
    max-width: 44ch;
  }

  .sgn-landing-page .sgn-footer-nav-title {
    color: var(--sgn-navy);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .sgn-landing-page .sgn-footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
    list-style: none;
  }

  .sgn-landing-page .sgn-footer-links a {
    color: var(--sgn-text);
    display: inline-block;
    font-size: 0.92rem;
    font-weight: 500;
    padding: 4px 0;
    transition: color 0.15s ease;
  }

  .sgn-landing-page .sgn-footer-links a:hover,
  .sgn-landing-page .sgn-footer-links a:focus-visible {
    color: var(--sgn-green);
    text-decoration: underline;
  }

  .sgn-landing-page .sgn-footer-bottom {
    border-top: 1px solid var(--sgn-border);
    color: var(--sgn-muted);
    font-size: 0.875rem;
    padding-top: 20px;
  }

  @media (max-width: 639px) {
    .sgn-landing-page .sgn-cta-btn {
      width: 100%;
    }
  }

  @media (min-width: 640px) {
    .sgn-landing-page .sgn-container {
      padding-left: 28px;
      padding-right: 28px;
    }

    .sgn-landing-page .sgn-questions-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .sgn-landing-page .sgn-problem-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .sgn-landing-page .sgn-features-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .sgn-landing-page .sgn-feature-card-featured {
      grid-column: span 2;
    }

    .sgn-landing-page .sgn-benefits-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .sgn-landing-page .sgn-section {
      padding-bottom: 84px;
      padding-top: 84px;
    }

    .sgn-landing-page .sgn-hero {
      padding-bottom: 84px;
      padding-top: 40px;
    }

    .sgn-landing-page .sgn-header-banner {
      margin-bottom: 48px;
    }

    .sgn-landing-page .sgn-hero-grid {
      gap: 56px;
      grid-template-columns: 1.2fr 0.8fr;
    }

    .sgn-landing-page .sgn-problem-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .sgn-landing-page .sgn-mindset-layout {
      align-items: center;
      gap: 48px;
      grid-template-columns: 1fr 1fr;
    }

    .sgn-landing-page .sgn-solution-box {
      align-items: center;
      gap: 48px;
      grid-template-columns: 1.05fr 0.95fr;
      padding: 44px 40px;
    }

    .sgn-landing-page .sgn-features-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .sgn-landing-page .sgn-feature-card-featured {
      grid-column: span 2;
    }

    .sgn-landing-page .sgn-benefits-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .sgn-landing-page .sgn-audience-layout {
      align-items: start;
      gap: 48px;
      grid-template-columns: 0.9fr 1.1fr;
    }

    .sgn-landing-page .sgn-diff-panel {
      padding: 52px 48px;
    }

    .sgn-landing-page .sgn-diff-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .sgn-landing-page .sgn-footer-grid {
      align-items: start;
      grid-template-columns: 1.2fr 0.8fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sgn-landing-page .sgn-cta-btn,
    .sgn-landing-page .sgn-faq-icon {
      transition: none;
    }
    .sgn-landing-page .sgn-cta-btn:hover {
      transform: none;
    }
  }
</style>

<div class="sgn-landing-page">
  <main>
    <!-- A. HEADER IMAGE & HERO SECTION -->
    <section class="sgn-hero">
      <div class="sgn-container">
        <div class="sgn-header-banner">
          <img
            class="sgn-header-img"
            src="${headerImageUrl}"
            alt="Entrepreneur planning a small business on a laptop at a clean desk"
            width="1440"
            height="960"
            loading="eager"
            decoding="async"
            referrerpolicy="no-referrer"
          />
        </div>

        <div class="sgn-hero-grid">
          <div>
            <h1> Want to Start a Business But Don't Have Enough Money? Here Is How to Begin Small.</h1>
            <p class="sgn-lead">
              You don't need a big shop, a business loan, or thousands of naira to get started. 
              <strong>THE ZERO CAPITAL BUSINESS STARTER GUIDE</strong> shows you 50 practical business ideas you can start with little or no capital, how to find your first paying customers, and a simple 30-day roadmap to help you take action.
            </p>

            <ul class="sgn-hero-bullets">
              <li>
                <svg class="sgn-hero-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>50 practical business ideas suited for little or no starting capital</span>
              </li>
              <li>
                <svg class="sgn-hero-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Simple 30-day step-by-step plan to move from thinking to action</span>
              </li>
              <li>
                <svg class="sgn-hero-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Honest pricing, customer outreach examples, and planning worksheets</span>
              </li>
            </ul>

            <div class="sgn-hero-actions">
              <a class="sgn-cta-btn" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">
                <span>GET THE BUSINESS STARTER GUIDE</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <p class="sgn-cta-note">
                Instant PDF download at <a class="sgn-inline-link" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">selar.com/5244579955</a> &middot; Easy to read on Android or laptop
              </p>
            </div>
          </div>

          <div>
            <aside class="sgn-book-stage" aria-label="The Zero-Capital Business Starter Guide cover preview">
              <div class="sgn-book-pages" aria-hidden="true"></div>
              <div class="sgn-book-cover">
                <div class="sgn-book-spine" aria-hidden="true"></div>
                <div class="sgn-book-face">
                  <div class="sgn-book-topbar">
                    <span class="sgn-book-publisher">STUDENT GUIDE NIGERIA</span>
                    <span class="sgn-book-format">PDF Handbook</span>
                  </div>
                  <div class="sgn-book-rule"></div>
                  <h2 class="sgn-book-title">THE ZERO-CAPITAL BUSINESS STARTER GUIDE</h2>
                  <p class="sgn-book-subtitle">
                    Practical Business Ideas, First-Customer Strategies, and a 30-Day Launch Roadmap for Beginners
                  </p>
                  <ul class="sgn-book-toc">
                    <li>
                      <svg class="sgn-book-toc-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>30-Day Business Launch Roadmap</span>
                    </li>
                    <li>
                      <svg class="sgn-book-toc-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>50 Low-Capital Business Ideas</span>
                    </li>
                    <li>
                      <svg class="sgn-book-toc-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Customer Outreach &amp; Pricing Guide</span>
                    </li>
                    <li>
                      <svg class="sgn-book-toc-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Planning Worksheets &amp; Recordkeeping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <!-- B. THE PROBLEM MANY ASPIRING BUSINESS OWNERS FACE -->
    <section id="problem" class="sgn-section">
      <div class="sgn-container">
        <div class="sgn-section-head">
          <p class="sgn-kicker">You Are Not Alone</p>
          <h2 class="sgn-h2">Does Any of This Sound Like What You Are Going Through Right Now?</h2>
          <p class="sgn-lead">
            Many smart, hardworking people across Nigeria and beyond want to build something of their own. Before you worry about what to sell, let us be honest about the questions keeping most beginners stuck.
          </p>
        </div>

        <div class="sgn-questions-grid">
          <div class="sgn-question-card">Do you want to start a business, but you simply do not have enough money saved up?</div>
          <div class="sgn-question-card">Are you tired of having business ideas in your head without knowing where to begin?</div>
          <div class="sgn-question-card">Do you want to become self-employed, yet feel held back by your current financial limits?</div>
          <div class="sgn-question-card">Are you looking for practical, honest business opportunities you can actually start small?</div>
        </div>

        <div class="sgn-problem-grid">
          <article class="sgn-problem-card">
            <span class="sgn-problem-num">01</span>
            <h3 class="sgn-h3">Not having enough startup capital</h3>
            <p class="sgn-body-text">
              Almost every advice video talks about renting a shop, buying plenty of goods, or spending money you do not have right now.
            </p>
          </article>

          <article class="sgn-problem-card">
            <span class="sgn-problem-num">02</span>
            <h3 class="sgn-h3">Not knowing which business fits you</h3>
            <p class="sgn-body-text">
              With so many opinions online, it is hard to tell which small businesses really work around you and which ones are just noise.
            </p>
          </article>

          <article class="sgn-problem-card">
            <span class="sgn-problem-num">03</span>
            <h3 class="sgn-h3">Struggling to find your first customers</h3>
            <p class="sgn-body-text">
              Even when you pick an idea, figuring out who will pay for it, what to say to them, and where to meet buyers feels stressful.
            </p>
          </article>

          <article class="sgn-problem-card">
            <span class="sgn-problem-num">04</span>
            <h3 class="sgn-h3">Being afraid of losing scarce money</h3>
            <p class="sgn-body-text">
              When every naira is hard-earned, making the wrong move feels risky. That fear of losing the little you have keeps you waiting.
            </p>
          </article>

          <article class="sgn-problem-card">
            <span class="sgn-problem-num">05</span>
            <h3 class="sgn-h3">Not knowing how to turn a skill into income</h3>
            <p class="sgn-body-text">
              You may already know how to write, design, teach, fix things, cook, or organize—yet have no clear steps to package that skill into paid work.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- C. WHY STARTING SMALL IS POSSIBLE -->
    <section class="sgn-section sgn-section-alt">
      <div class="sgn-container">
        <div class="sgn-mindset-layout">
          <div>
            <p class="sgn-kicker">A Different Way to Think About Starting</p>
            <h2 class="sgn-h2">Why You Do Not Need Big Money to Take Your First Step</h2>
            <p class="sgn-lead">
              Wait long enough for "perfect conditions" and months turn into years. Most successful small businesses did not start with an office, a big loan, or expensive equipment.
            </p>
            <p class="sgn-lead sgn-mt-sm">
              They started with one person solving a real everyday problem for someone nearby—using time, effort, communication, and a clear plan. If you read our article <em>10 Business Trends Shaping Entrepreneurship in 2026: Opportunities for Nigerians</em>, you already saw how digital tools and local services let beginners start leaner than ever before.
            </p>
          </div>

          <div class="sgn-mindset-card">
            <ul class="sgn-mindset-pillars">
              <li class="sgn-mindset-pillar">
                <span class="sgn-icon-box-green" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </span>
                <div>
                  <h3 class="sgn-h3">Start With Skills and Service First</h3>
                  <p class="sgn-body-text">Offering what you can do—or connecting buyers with what they need—costs far less than stocking a physical store.</p>
                </div>
              </li>

              <li class="sgn-mindset-pillar">
                <span class="sgn-icon-box-orange" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </span>
                <div>
                  <h3 class="sgn-h3">Test Before You Spend</h3>
                  <p class="sgn-body-text">When you check whether people will actually pay before buying materials or tools, you protect the little money you have.</p>
                </div>
              </li>

              <li class="sgn-mindset-pillar">
                <span class="sgn-icon-box-green" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </span>
                <div>
                  <h3 class="sgn-h3">Grow Step by Step</h3>
                  <p class="sgn-body-text">One paying customer teaches you more than weeks of guessing. Small wins build the cash flow and confidence to grow.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- D. INTRODUCTION TO THE ZERO-CAPITAL BUSINESS STARTER GUIDE -->
    <section id="about-guide" class="sgn-section">
      <div class="sgn-container">
        <div class="sgn-solution-box">
          <div>
            <p class="sgn-kicker">Your Practical Next Step</p>
            <h2 class="sgn-h2">Meet THE ZERO-CAPITAL BUSINESS STARTER GUIDE</h2>
            <p class="sgn-lead">
              Created by Student Guide Nigeria, <strong>THE ZERO-CAPITAL BUSINESS STARTER GUIDE</strong> is an existing, ready-to-read digital handbook written to help beginners move from confusion to clear action.
            </p>
            <p class="sgn-lead sgn-mt-sm">
              Instead of leaving you with vague motivation, it walks you through choosing a realistic business idea, reaching your first customers, setting sensible prices, and following a 30-day plan you can start right away.
            </p>
            <div class="sgn-mt-md">
              <a class="sgn-cta-btn" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">
                <span>START PLANNING YOUR BUSINESS</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <ul class="sgn-solution-points">
              <li class="sgn-solution-point">
                <span class="sgn-icon-box-green" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </span>
                <div>
                  <h3 class="sgn-h3">Clear Handbook Format</h3>
                  <p class="sgn-body-text">An existing PDF guide you can download immediately and read comfortably on your phone anytime—even offline.</p>
                </div>
              </li>

              <li class="sgn-solution-point">
                <span class="sgn-icon-box-green" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <div>
                  <h3 class="sgn-h3">Step-by-Step Direction</h3>
                  <p class="sgn-body-text">Helps you make smart early decisions without getting lost in contradictory advice across social media.</p>
                </div>
              </li>

              <li class="sgn-solution-point">
                <span class="sgn-icon-box-orange" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <div>
                  <h3 class="sgn-h3">Built for Everyday Beginners</h3>
                  <p class="sgn-body-text">Focused on Nigeria's everyday realities—low risk, simple tools, and real customer conversations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- E. WHAT READERS WILL DISCOVER INSIDE THE GUIDE -->
    <section id="inside-guide" class="sgn-section sgn-section-alt">
      <div class="sgn-container">
        <div class="sgn-section-head">
          <p class="sgn-kicker">What Is Inside the Pages</p>
          <h2 class="sgn-h2">Everything You Need to Move From Idea to First Steps</h2>
          <p class="sgn-lead">
            Every chapter inside THE ZERO-CAPITAL BUSINESS STARTER GUIDE gives you practical tools you can put to work right away.
          </p>
        </div>

        <div class="sgn-features-grid">
          <article class="sgn-feature-card sgn-feature-card-featured">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">A practical 30-day business launch roadmap</h3>
              <p class="sgn-body-text">
                Instead of wondering what to do on Monday morning, follow a clear four-week schedule that guides you from picking an idea and checking demand to presenting your offer and getting organized.
              </p>
            </div>
          </article>

          <article class="sgn-feature-card">
            <span class="sgn-icon-box-orange" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">50 business ideas to explore</h3>
              <p class="sgn-body-text">
                Realistic service, campus, digital, and local trade ideas that require little or no capital and fit everyday needs around you.
              </p>
            </div>
          </article>

          <article class="sgn-feature-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Ways to find your first customers</h3>
              <p class="sgn-body-text">
                Simple, zero-budget ways to reach early buyers through people you know, local communities, WhatsApp, and social platforms.
              </p>
            </div>
          </article>

          <article class="sgn-feature-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Practical pricing and selling guidance</h3>
              <p class="sgn-body-text">
                Learn how to set fair prices without undercharging, explain why your offer matters, and handle buyer questions calmly.
              </p>
            </div>
          </article>

          <article class="sgn-feature-card">
            <span class="sgn-icon-box-orange" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Customer outreach examples</h3>
              <p class="sgn-body-text">
                Polite, natural message examples you can adjust when introducing what you do to potential customers for the first time.
              </p>
            </div>
          </article>

          <article class="sgn-feature-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M9 14l2 2 4-4"></path>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Business planning worksheets</h3>
              <p class="sgn-body-text">
                Short, clear worksheets to help you write down your chosen idea, target buyers, and weekly action goals on one page.
              </p>
            </div>
          </article>

          <article class="sgn-feature-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Basic financial recordkeeping advice</h3>
              <p class="sgn-body-text">
                Simple ways to separate personal spending from business money and keep track of every naira coming in and going out.
              </p>
            </div>
          </article>
        </div>

        <div class="sgn-section-cta-row">
          <a class="sgn-cta-btn" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">
            <span>DISCOVER 50 BUSINESS IDEAS</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <p class="sgn-cta-note">
            Get instant access via <a class="sgn-inline-link" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">selar.com/5244579955</a>
          </p>
        </div>
      </div>
    </section>

    <!-- F. THE PRACTICAL BENEFITS OF THE GUIDE -->
    <section id="benefits" class="sgn-section">
      <div class="sgn-container">
        <div class="sgn-section-head">
          <p class="sgn-kicker">How This Helps You</p>
          <h2 class="sgn-h2">What You Will Actually Gain From Reading This Guide</h2>
          <p class="sgn-lead">
            A good guide does more than fill pages—it helps you make smarter decisions and take your first real steps with less fear and confusion.
          </p>
        </div>

        <div class="sgn-benefits-grid">
          <article class="sgn-benefit-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Spot low-capital ideas that fit you</h3>
              <p class="sgn-body-text">Discover business options you can start with little or no money based on your skills and time.</p>
            </div>
          </article>

          <article class="sgn-benefit-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Notice real opportunities around you</h3>
              <p class="sgn-body-text">Learn how to spot everyday problems in your school, street, or online circle that people gladly pay to solve.</p>
            </div>
          </article>

          <article class="sgn-benefit-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Know how to reach first customers</h3>
              <p class="sgn-body-text">Understand practical, respectful ways to introduce your service and get your first paying buyers.</p>
            </div>
          </article>

          <article class="sgn-benefit-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Manage limited resources wisely</h3>
              <p class="sgn-body-text">Learn how to start lean, avoid wasteful spending, and keep simple track of your early income.</p>
            </div>
          </article>

          <article class="sgn-benefit-card">
            <span class="sgn-icon-box-green" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Follow a clear 30-day roadmap</h3>
              <p class="sgn-body-text">Replace overthinking with a practical week-by-week plan so you always know your next step.</p>
            </div>
          </article>

          <article class="sgn-benefit-card">
            <span class="sgn-icon-box-orange" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <div>
              <h3 class="sgn-h3">Avoid common beginner mistakes</h3>
              <p class="sgn-body-text">Save yourself costly trial and error by learning what holds most first-time founders back early on.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- G. WHO THE GUIDE IS DESIGNED FOR -->
    <section id="who-its-for" class="sgn-section sgn-section-alt">
      <div class="sgn-container">
        <div class="sgn-audience-layout">
          <div>
            <p class="sgn-kicker">Who This Is For</p>
            <h2 class="sgn-h2">Designed for Everyday People Ready to Start Small</h2>
            <p class="sgn-lead">
              You do not need a business degree, an office, or wealthy connections to use this handbook. It was written in plain language for anyone ready to learn and take practical steps.
            </p>
            <div class="sgn-mt-md">
              <a class="sgn-cta-btn" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">
                <span>GET THE BUSINESS STARTER GUIDE</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <ul class="sgn-audience-list">
            <li class="sgn-audience-item">
              <span class="sgn-icon-box-green" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <div>
                <h3 class="sgn-audience-title">Students</h3>
                <p class="sgn-body-text">University, polytechnic, and college students looking for honest side businesses that fit around classes and exams.</p>
              </div>
            </li>

            <li class="sgn-audience-item">
              <span class="sgn-icon-box-green" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <div>
                <h3 class="sgn-audience-title">Unemployed graduates</h3>
                <p class="sgn-body-text">Graduates and NYSC members who want to build something useful instead of waiting endlessly for scarce job openings.</p>
              </div>
            </li>

            <li class="sgn-audience-item">
              <span class="sgn-icon-box-green" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <div>
                <h3 class="sgn-audience-title">Beginners interested in entrepreneurship</h3>
                <p class="sgn-body-text">First-time starters who want simple, clear guidance without confusing corporate terms or empty hype.</p>
              </div>
            </li>

            <li class="sgn-audience-item">
              <span class="sgn-icon-box-green" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <div>
                <h3 class="sgn-audience-title">People with useful skills but limited capital</h3>
                <p class="sgn-body-text">Skilled people who already know how to deliver value and want a clear way to turn their skill into paid work.</p>
              </div>
            </li>

            <li class="sgn-audience-item">
              <span class="sgn-icon-box-green" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <div>
                <h3 class="sgn-audience-title">Anyone looking to start a small business</h3>
                <p class="sgn-body-text">Anyone ready to replace months of hesitation with a structured, low-risk approach to starting small.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- H. WHY THIS GUIDE IS USEFUL FOR BEGINNERS -->
    <section class="sgn-section">
      <div class="sgn-container">
        <div class="sgn-diff-panel">
          <div class="sgn-section-head sgn-mb-0">
            <p class="sgn-kicker">Honest, Practical Education</p>
            <h2 class="sgn-h2">Why Beginners Trust This Straightforward Approach</h2>
            <p class="sgn-lead">
              Too much business content online feels disconnected from real life. This guide focuses on what actually helps someone starting from scratch.
            </p>
          </div>

          <div class="sgn-diff-grid">
            <article class="sgn-diff-card">
              <h3>Written in Plain, Everyday English</h3>
              <p>
                No confusing academic jargon or bloated chapters. Every page is clear, direct, and easy to read on a phone screen.
              </p>
            </article>

            <article class="sgn-diff-card">
              <h3>Built Around Action, Not Theory</h3>
              <p>
                Every concept is paired with practical examples, outreach templates, and worksheets so you can apply what you read right away.
              </p>
            </article>

            <article class="sgn-diff-card">
              <h3>Realistic About Starting Small</h3>
              <p>
                Designed around working carefully with your current means—learning how to validate an idea before risking money.
              </p>
            </article>
          </div>

          <p class="sgn-honest-note">
            An honest note before you buy: Building any real business takes effort, patience, and consistency. This guide gives you practical ideas, customer-finding strategies, and planning tools—not overnight wealth, guaranteed income, or guaranteed business success.
          </p>
        </div>
      </div>
    </section>

    <!-- I. FREQUENTLY ASKED QUESTIONS -->
    <section id="faq" class="sgn-section sgn-section-alt">
      <div class="sgn-container">
        <div class="sgn-section-head">
          <p class="sgn-kicker">Common Questions</p>
          <h2 class="sgn-h2">Frequently Asked Questions</h2>
          <p class="sgn-lead">
            Clear, honest answers to help you decide if this guide is right for where you are right now.
          </p>
        </div>

        <div class="sgn-faq-list">
          <details class="sgn-faq-item">
            <summary class="sgn-faq-question">
              <span>Do I truly need zero money to start using what is in this guide?</span>
              <svg class="sgn-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="sgn-faq-answer">
              Many ideas in the guide can be started using only your existing skills, time, and phone—without renting space or buying stock upfront. Some ideas work best with very small amounts of money (such as basic transport or data), and the guide helps you choose options that match what you have right now.
            </div>
          </details>

          <details class="sgn-faq-item">
            <summary class="sgn-faq-question">
              <span>How will I receive the guide after I pay?</span>
              <svg class="sgn-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="sgn-faq-answer">
              This is an existing digital PDF handbook. Right after completing your purchase at <a class="sgn-inline-link" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">selar.com/5244579955</a>, you get instant access to download the PDF directly to your Android phone, iPhone, tablet, or computer.
            </div>
          </details>

          <details class="sgn-faq-item">
            <summary class="sgn-faq-question">
              <span>I have never run a business before. Will I understand it?</span>
              <svg class="sgn-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="sgn-faq-answer">
              Yes. The guide was written specifically for complete beginners. Everything—from choosing an idea and pricing your work to talking to your first customer and tracking simple records—is explained in clear, everyday English.
            </div>
          </details>

          <details class="sgn-faq-item">
            <summary class="sgn-faq-question">
              <span>Are the business ideas practical for Nigeria?</span>
              <svg class="sgn-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="sgn-faq-answer">
              Yes. It is published by Student Guide Nigeria with everyday Nigerian realities in mind, while the principles—starting lean, solving local problems, and finding first buyers—also work well for international readers starting small.
            </div>
          </details>

          <details class="sgn-faq-item">
            <summary class="sgn-faq-question">
              <span>Does buying this guide guarantee I will make money?</span>
              <svg class="sgn-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="sgn-faq-answer">
              No book or guide can guarantee income on its own. What THE ZERO-CAPITAL BUSINESS STARTER GUIDE gives you is a clear starting path, 50 practical ideas, outreach examples, and a 30-day plan so you can take real action. Your results depend on putting in consistent work.
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- J. FINAL CALL TO ACTION -->
    <section class="sgn-final-cta">
      <div class="sgn-container">
        <div class="sgn-final-cta-inner">
          <p class="sgn-kicker">Ready to Begin?</p>
          <h2 class="sgn-h2">Your Business Journey Can Start With What You Already Have.</h2>
          <p class="sgn-lead">
            Stop waiting for the perfect moment or a huge amount of capital. Learn how to turn your time, ideas, and everyday skills into a practical small business starting this week.
          </p>
          <a class="sgn-cta-btn sgn-cta-btn-lg" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">
            <span>GET YOUR COPY TODAY</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <p class="sgn-cta-note">
            THE ZERO-CAPITAL BUSINESS STARTER GUIDE &middot; Instant download at <a class="sgn-inline-link" href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">selar.com/5244579955</a>
          </p>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="sgn-footer">
    <div class="sgn-container">
      <div class="sgn-footer-grid">
        <div>
          <p class="sgn-footer-brand">Student Guide Nigeria</p>
          <p class="sgn-footer-desc">
            Practical guides and educational resources helping students, graduates, and everyday beginners make informed steps toward starting small businesses and building useful skills.
          </p>
        </div>

        <div>
          <p class="sgn-footer-nav-title">Explore This Page</p>
          <ul class="sgn-footer-links">
            <li><a href="#problem">The Challenge</a></li>
            <li><a href="#about-guide">About the Guide</a></li>
            <li><a href="#inside-guide">What's Inside</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#who-its-for">Who It Is For</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="https://selar.com/5244579955" target="_blank" rel="noopener noreferrer">Get the Guide</a></li>
          </ul>
        </div>
      </div>

      <div class="sgn-footer-bottom">
        <p>&copy; 2026 Student Guide Nigeria. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>`;
}

export const BLOGGER_PREVIEW_HTML = buildBloggerInnerHtml(LOCAL_HEADER_IMAGE_URL);

export const BLOGGER_FULL_DOCUMENT = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Zero-Capital Business Starter Guide — Student Guide Nigeria</title>
  <meta name="description" content="Discover practical business ideas, learn how to find customers, and follow a simple 30-day roadmap with The Zero-Capital Business Starter Guide by Student Guide Nigeria." />
</head>
<body>
${buildBloggerInnerHtml(DRIVE_HEADER_IMAGE_URL)}
</body>
</html>`;
