{
  // Draws a speech-like waveform into every <svg class="wave">
  for (const s of document.querySelectorAll('svg.wave')) {
    const n = 64, w = 400 / n;
    let bars = '';
    for (let i = 0; i < n; i++) {
      const env = Math.sin(Math.PI * i / n) ** 0.7;
      const v = Math.abs(Math.sin(i * 0.9) * 0.55 + Math.sin(i * 0.37 + 1) * 0.35 + Math.sin(i * 2.3) * 0.15);
      const h = Math.max(4, 90 * env * v);
      bars += `<rect x="${(i * w + 1.2).toFixed(1)}" y="${(50 - h / 2).toFixed(1)}" width="${(w - 2.4).toFixed(1)}" height="${h.toFixed(1)}" rx="2"/>`;
    }
    s.setAttribute('viewBox', '0 0 400 100');
    s.setAttribute('preserveAspectRatio', 'none');
    s.innerHTML = `<g fill="#ffffff" opacity=".95">${bars}</g>`;
  }

  // Countdown to election day (21 November 2026)
  const c = document.getElementById('count');
  if (c) {
    const day = new Date(2026, 10, 21);
    const now = new Date(); now.setHours(0, 0, 0, 0);
    const d = Math.round((day - now) / 86400000);
    c.textContent = d > 1 ? `${d} days to go` : d === 1 ? 'Tomorrow' : d === 0 ? 'Voting is today' : 'Thank you for voting';
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}
