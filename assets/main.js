// Vasuvridhi — small site script (no trackers, no live market data)
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('nav.links');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ---- Compounding / SIP learning calculator ----
  var calc = document.getElementById('calc-form');
  if (calc) {
    var inr = function (n) {
      return '₹' + Math.round(n).toLocaleString('en-IN');
    };
    var run = function () {
      var mode = calc.mode.value;
      var amt = Math.max(0, parseFloat(calc.amount.value) || 0);
      var rate = Math.max(-50, Math.min(50, parseFloat(calc.rate.value) || 0));
      var yrs = Math.max(1, Math.min(50, parseInt(calc.years.value, 10) || 1));
      var invested, value;
      if (mode === 'sip') {
        var r = rate / 100 / 12, n = yrs * 12;
        invested = amt * n;
        value = r === 0 ? invested : amt * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      } else {
        invested = amt;
        value = amt * Math.pow(1 + rate / 100, yrs);
      }
      var gain = value - invested;
      document.getElementById('out-invested').textContent = inr(invested);
      document.getElementById('out-value').textContent = inr(value);
      document.getElementById('out-gain').textContent = inr(gain);
      var pct = value > 0 ? Math.max(0, Math.min(100, (invested / value) * 100)) : 100;
      document.getElementById('bar-inv').style.width = pct + '%';
      document.getElementById('bar-gain').style.width = (100 - pct) + '%';
      document.getElementById('amount-label').textContent =
        mode === 'sip' ? 'Monthly amount (₹)' : 'One-time amount (₹)';
    };
    calc.addEventListener('input', run);
    run();
  }

  // ---- Contact form: opens the visitor's email app (no data stored by this site) ----
  var cf = document.getElementById('contact-form');
  if (cf) {
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!cf.consent.checked) { alert('Please tick the consent box to continue.'); return; }
      var to = cf.getAttribute('data-to');
      var subject = encodeURIComponent('[' + cf.topic.value + '] Website enquiry from ' + cf.name.value);
      var body = encodeURIComponent(
        'Name: ' + cf.name.value + '\nEmail: ' + cf.email.value + '\nTopic: ' + cf.topic.value + '\n\n' + cf.message.value
      );
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });
  }
})();
