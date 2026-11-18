# Vasuvridhi.com: setup and SEBI compliance guide

## 1. Company details
These are already filled in for Vasuvridhi Investments Private Limited, Thrissur. To change them, edit `CONFIG` in `build.py` and run `python3 build.py`.

## 2. Upload to your hosting
| Host | Steps |
|---|---|
| cPanel / Hostinger / GoDaddy | File Manager → `public_html` → upload all files from this folder |
| Netlify / Cloudflare Pages (free) | Drag the folder into the dashboard, then add vasuvridhi.com under Domains |
| GitHub Pages (free) | Push to a repo, enable Pages, and add a CNAME record for vasuvridhi.com |

Turn on **HTTPS (SSL)**. Every host above provides it free.

## 3. SEBI rules for an unregistered, education-only site

| Do | Don't |
|---|---|
| Teach concepts with hypothetical companies ("Company A") | Name a real stock in any way that implies buy/sell/hold |
| Use real price data only if it is **30+ days old** (SEBI circular, May 2026, effective 1 July 2026) | Show live or recent prices, tickers, or live-market screen-shares |
| Keep the "Education only · not SEBI-registered" banner on every page and video | Rely on a disclaimer while giving tips. SEBI has acted against "education" academies that did this. |
| Direct people who want personal advice to SEBI-registered IAs | Give personal portfolio advice |
| Sell courses for a fixed fee, for education | Make claims about returns, profits or "accuracy", or show profit screenshots or testimonials |
| Run a community limited to learning questions | Run paid tip, signal or Telegram/WhatsApp call groups |
| | Take paid promotions or referral payouts from brokers or SEBI-regulated entities without legal advice (SEBI restricts their tie-ups with unregistered persons) |

## 4. Before going live
- [ ] Replace all placeholders
- [ ] Have a lawyer review the Disclaimer, Terms, Privacy and Refund pages
- [ ] Set up a payment gateway (Razorpay/Cashfree). They require Terms, Privacy, Refund and Contact pages, which are already included.
- [ ] Register GST if your turnover crosses the threshold
- [ ] Use the same disclaimer on YouTube, Instagram and every course video
- [ ] If you later want to give stock recommendations, first register as a SEBI Research Analyst or Investment Adviser

## 5. Adding a new article
Copy `article-pe-ratio.html`, change the title and content, and add a card for it on `articles.html` and an entry in `sitemap.xml`.
