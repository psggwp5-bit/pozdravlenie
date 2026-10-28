(() => {
  /* ===== Тексты — меняйте здесь ===== */

  const FACES = [
    { id: 'code',   chip: 'Программирование',     name: 'Программирование',             face: 'Програм&shy;мирование',
      color: '#3A5BFF', rot: 'rotateY(0deg)',   n: [0, 0, 1],  show: { x: 0,   y: 0 },
      wish: 'Чистого кода, понятных имён переменных и ошибок, которые находятся с первого print().' },
    { id: 'robots', chip: 'Робототехника',        name: 'Робототехника',                face: 'Робото&shy;техника',
      color: '#FF7A1A', rot: 'rotateY(90deg)',  n: [1, 0, 0],  show: { x: 0,   y: -90 },
      wish: 'Точных датчиков, послушных моторов и роботов, которые с первой попытки проезжают по линии.' },
    { id: 'games',  chip: 'Игры',                 name: 'Разработка игр',               face: 'Разработка игр',
      color: '#FFCF33', rot: 'rotateY(180deg)', n: [0, 0, -1], show: { x: 0,   y: -180 },
      wish: 'Игр, в которые хочется звать друзей, уровней без лагов и боссов, которых всё-таки можно победить.' },
    { id: 'mobile', chip: 'Мобильная разработка', name: 'Мобильная разработка',         face: 'Мобильная разработка',
      color: '#17A77F', rot: 'rotateY(-90deg)', n: [-1, 0, 0], show: { x: 0,   y: 90 },
      wish: 'Приложений на пять звёзд и сборок, которые не падают на настоящем телефоне.' },
    { id: 'vr',     chip: 'VR и AR',              name: 'VR и AR',                      face: 'VR и AR',
      color: '#E8406F', rot: 'rotateX(90deg)',  n: [0, -1, 0], show: { x: -90, y: 0 },
      wish: 'Миров, в которые хочется возвращаться, и шлемов, которые всегда заряжены к началу занятия.' },
    { id: 'sys',    chip: 'Сисадмин',             name: 'Системное администрирование',  face: 'Системное администри&shy;рование',
      color: '#9B6BFF', rot: 'rotateX(-90deg)', n: [0, 1, 0],  show: { x: 90,  y: 0 },
      wish: 'Аптайма 100 %, аккуратных проводов и сети, которая не падает перед открытым уроком.' }
  ];

  const LETTER = [
    { t: 'cmd',  s: './pozdravit --ot-vseh-uchenikov' },
    { t: 'out',  s: 'Загружаем тёплые слова… готово' },
    { t: 'out',  s: 'Собираем пожелания с шести граней… готово' },
    { t: 'gap' },
    { t: 'head', s: 'Дорогой IT-куб!' },
    { t: 'text', s: 'Спасибо, что здесь вопрос «а как это работает?» превращается в первый собственный проект. Спасибо педагогам, которые терпеливо ищут с нами пропущенную скобку и радуются вместе с нами, когда программа наконец запускается.' },
    { t: 'text', s: 'Желаем новых лабораторий и смелых идей, учеников, которые не боятся ошибок, и побед на конкурсах и хакатонах. Пусть каждый год будет как удачный релиз: больше возможностей и меньше багов.' },
    { t: 'gap' },
    { t: 'ok',   s: 'Поздравление доставлено ✓' }
  ];

  const WISHES = [
    'Пусть все баги находятся до релиза, а не после.',
    'Пусть Wi-Fi одинаково хорошо ловит в каждом кабинете.',
    'Пусть каждый git push проходит без конфликтов.',
    'Пусть идей будет больше, чем открытых вкладок в браузере.',
    'Пусть ноутбуки заряжаются быстрее, чем разряжаются.',
    'Пусть чай у педагогов не остывает, пока они проверяют проекты.',
    'Пусть ошибка 404 встречается только в шутках.',
    'Пусть бесконечным будет вдохновение, а не цикл в коде.',
    'Пусть каждый хакатон заканчивается призовым местом.',
    'Пусть принтер печатает с первого раза — и именно то, что нужно.',
    'Пусть код компилируется, а мечты сбываются.',
    'Пусть пароль от Wi-Fi не меняется накануне олимпиады.',
    'Пусть в каждом проекте найдётся место для одной смелой идеи.',
    'Пусть фразу «у меня работает» говорят только о хорошем.'
  ];

  const ICONS = {
    code:   '<path d="M17 14 7 24l10 10M31 14l10 10-10 10M27 10l-6 28"/>',
    robots: '<rect x="10" y="16" width="28" height="22" rx="6"/><path d="M24 16V10"/><circle cx="24" cy="7.5" r="2.5"/><circle cx="18" cy="26" r="2.6" fill="currentColor"/><circle cx="30" cy="26" r="2.6" fill="currentColor"/><path d="M19 33h10M6 24v7M42 24v7"/>',
    games:  '<path d="M14 16h20a9 9 0 0 1 9 9v2a7 7 0 0 1-12.6 4.2L29 30H19l-1.4 1.2A7 7 0 0 1 5 27v-2a9 9 0 0 1 9-9Z"/><path d="M15 21v8M11 25h8"/><circle cx="31" cy="23" r="1.8" fill="currentColor"/><circle cx="35.5" cy="27" r="1.8" fill="currentColor"/>',
    mobile: '<rect x="14" y="5" width="20" height="38" rx="5"/><path d="M21 37h6"/>',
    vr:     '<path d="M8 17h32a3 3 0 0 1 3 3v9a5 5 0 0 1-5 5h-6l-4-5h-8l-4 5h-6a5 5 0 0 1-5-5v-9a3 3 0 0 1 3-3Z"/><path d="M14 17l3-6h14l3 6"/>',
    sys:    '<rect x="8" y="7" width="32" height="14" rx="3"/><rect x="8" y="27" width="32" height="14" rx="3"/><circle cx="15" cy="14" r="1.9" fill="currentColor"/><circle cx="15" cy="34" r="1.9" fill="currentColor"/><path d="M22 14h12M22 34h12"/>'
  };

  /* ===== Логика ===== */

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (id) => document.getElementById(id);
  const cube = $('cube'), scene = $('scene'), chipsBox = $('chips');
  const panel = $('panel'), panelName = $('panelName'), panelText = $('panelText');

  // Грани и кнопки направлений
  const chipEls = [];
  FACES.forEach((f, i) => {
    const el = document.createElement('div');
    el.className = 'face';
    el.dataset.id = f.id;
    el.style.setProperty('--c', f.color);
    el.style.setProperty('--i', i);
    el.style.transform = `${f.rot} translateZ(calc(var(--s) / 2 + var(--gap)))`;
    for (let k = 0; k < 9; k++) {
      const t = document.createElement('span');
      t.className = 'tile';
      el.append(t);
    }
    const c = document.createElement('div');
    c.className = 'face-content';
    c.innerHTML = `<svg class="face-ico" viewBox="0 0 48 48" aria-hidden="true">${ICONS[f.id]}</svg><span class="face-name">${f.face}</span>`;
    el.append(c);
    cube.append(el);

    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.dataset.id = f.id;
    b.style.setProperty('--c', f.color);
    b.setAttribute('aria-pressed', 'false');
    b.textContent = f.chip;
    b.addEventListener('click', () => { auto = false; showFace(f); });
    chipsBox.append(b);
    chipEls.push(b);
  });

  // Вращение куба
  let rx = -20, ry = -30, target = null, auto = !reduced, dragging = false;
  let activeId = null;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  function frontFace(ax, ay) {
    const a = ax * Math.PI / 180, b = ay * Math.PI / 180;
    let best = FACES[0], bz = -Infinity;
    for (const f of FACES) {
      const [x, y, z] = f.n;
      const z1 = -x * Math.sin(b) + z * Math.cos(b);
      const zf = Math.sin(a) * y + Math.cos(a) * z1;
      if (zf > bz) { bz = zf; best = f; }
    }
    return best;
  }

  function setActive(f) {
    if (activeId === f.id) return;
    activeId = f.id;
    chipEls.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.id === f.id)));
    panel.style.setProperty('--c', f.color);
    panelName.innerHTML = '<span class="sw" aria-hidden="true"></span>';
    panelName.append(f.name);
    panelText.textContent = f.wish;
  }

  function showFace(f) {
    const ty = f.show.y + 360 * Math.round((ry - f.show.y) / 360);
    target = { x: f.show.x, y: ty };
    if (reduced) { rx = target.x; ry = target.y; target = null; }
    setActive(f);
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(50, now - last);
    last = now;
    if (target) {
      const k = 1 - Math.pow(0.001, dt / 450);
      rx += (target.x - rx) * k;
      ry += (target.y - ry) * k;
      if (Math.abs(target.x - rx) < 0.05 && Math.abs(target.y - ry) < 0.05) {
        rx = target.x; ry = target.y; target = null;
      }
    } else if (auto && !dragging) {
      ry += dt * 0.012;
    }
    cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    requestAnimationFrame(frame);
  }
  if (!reduced) cube.classList.add('assemble');
  requestAnimationFrame(frame);

  // Перетаскивание
  let px = 0, py = 0, sx = 0, sy = 0, moved = false, downTarget = null;
  scene.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true; moved = false; target = null;
    px = sx = e.clientX; py = sy = e.clientY;
    downTarget = e.target;
    try { scene.setPointerCapture(e.pointerId); } catch (_) {}
    scene.classList.add('grabbing');
  });
  scene.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - px, dy = e.clientY - py;
    px = e.clientX; py = e.clientY;
    if (!moved && Math.hypot(e.clientX - sx, e.clientY - sy) > 6) { moved = true; auto = false; }
    if (!moved) return;
    ry += dx * 0.5;
    rx = clamp(rx - dy * 0.5, -90, 90);
  });
  function endDrag(e, cancelled) {
    if (!dragging) return;
    dragging = false;
    scene.classList.remove('grabbing');
    if (moved) {
      showFace(frontFace(rx, ry));
    } else if (!cancelled) {
      const faceEl = downTarget && downTarget.closest ? downTarget.closest('.face') : null;
      auto = false;
      if (faceEl) showFace(FACES.find((f) => f.id === faceEl.dataset.id));
      burst(e.clientX, e.clientY, 40, 0.7);
    }
  }
  scene.addEventListener('pointerup', (e) => endDrag(e, false));
  scene.addEventListener('pointercancel', (e) => endDrag(e, true));

  // Клавиатура
  scene.addEventListener('keydown', (e) => {
    const cx = Math.round(rx / 90) * 90, cy = Math.round(ry / 90) * 90;
    let tx = null, ty = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      tx = 0;
      ty = cx !== 0 ? cy : cy + (e.key === 'ArrowRight' ? 90 : -90);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      tx = clamp(cx + (e.key === 'ArrowUp' ? -90 : 90), -90, 90);
      ty = cy;
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const r = scene.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 50, 0.8);
      return;
    } else {
      return;
    }
    e.preventDefault();
    auto = false;
    ry = cy; rx = clamp(rx, -90, 90);
    showFace(frontFace(tx, ty));
  });

  // Конфетти из маленьких кубиков
  const cv = $('confetti'), ctx = cv.getContext('2d');
  const COLORS = FACES.map((f) => f.color);
  let W = 0, H = 0, parts = [], raf = 0, lastC = 0;
  function size() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  addEventListener('resize', size);

  function burst(x, y, n = 120, power = 1) {
    if (reduced) return;
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1;
      const v = (6 + Math.random() * 9) * power;
      parts.push({
        x, y,
        vx: Math.cos(a) * v, vy: Math.sin(a) * v,
        s: 6 + Math.random() * 7,
        r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.35,
        t: Math.random() * Math.PI * 2, vt: 0.08 + Math.random() * 0.12,
        c: COLORS[i % COLORS.length]
      });
    }
    if (!raf) { lastC = performance.now(); raf = requestAnimationFrame(tick); }
  }
  function tick(now) {
    const k = Math.min(2.5, (now - lastC) / 16.67);
    lastC = now;
    ctx.clearRect(0, 0, W, H);
    const drag = Math.pow(0.985, k);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.vy += 0.32 * k;
      p.vx *= drag; p.vy *= drag;
      p.x += p.vx * k; p.y += p.vy * k;
      p.r += p.vr * k; p.t += p.vt * k;
      if (p.y > H + 30) { parts.splice(i, 1); continue; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.scale(1, Math.cos(p.t));
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s);
      ctx.restore();
    }
    if (parts.length) raf = requestAnimationFrame(tick);
    else { raf = 0; ctx.clearRect(0, 0, W, H); }
  }

  // Письмо в терминале
  const termBody = $('termBody'), skip = $('skip');
  const lines = LETTER.map((l) => {
    const p = document.createElement('p');
    p.className = 'ln ' + l.t;
    termBody.append(p);
    if (l.t === 'gap') { p.setAttribute('aria-hidden', 'true'); return { l, p }; }
    if (l.t === 'cmd') {
      const pr = document.createElement('span');
      pr.className = 'prompt';
      pr.textContent = 'ученики@it-cube:~$ ';
      p.append(pr);
    }
    const typed = document.createElement('span');
    const rest = document.createElement('span');
    typed.className = 'typed';
    rest.className = 'rest';
    rest.textContent = l.s;
    p.append(typed, rest);
    return { l, p, typed, rest };
  });

  let state = 'idle', timer = 0, current = null;
  function setLine(L) {
    if (current) current.p.classList.remove('active');
    current = L;
    if (L) { L.p.classList.add('active', 'started'); }
  }
  function typeLine(i, c) {
    if (i >= lines.length) return finish();
    const L = lines[i];
    if (L.l.t === 'gap') { timer = setTimeout(() => typeLine(i + 1, 0), 200); return; }
    if (current !== L) setLine(L);
    const s = L.l.s;
    const step = (L.l.t === 'text') ? 2 : 1;
    c = Math.min(s.length, c + step);
    L.typed.textContent = s.slice(0, c);
    L.rest.textContent = s.slice(c);
    if (c < s.length) {
      let d = L.l.t === 'cmd' ? 55 : L.l.t === 'out' ? 22 : 20;
      if (/[.,!?…:]/.test(s[c - 1])) d += L.l.t === 'text' ? 140 : 60;
      timer = setTimeout(() => typeLine(i, c), d);
    } else {
      timer = setTimeout(() => typeLine(i + 1, 0), L.l.t === 'cmd' ? 420 : 300);
    }
  }
  function startTyping() {
    if (state !== 'idle') return;
    state = 'typing';
    skip.textContent = 'Показать целиком';
    typeLine(0, 0);
  }
  function finish() {
    clearTimeout(timer);
    lines.forEach((L) => {
      if (L.typed) { L.typed.textContent = L.l.s; L.rest.textContent = ''; L.p.classList.add('started'); }
    });
    setLine(null);
    state = 'done';
    skip.textContent = 'Напечатать заново';
  }
  function resetTyping() {
    clearTimeout(timer);
    lines.forEach((L) => {
      if (L.typed) { L.typed.textContent = ''; L.rest.textContent = L.l.s; L.p.classList.remove('started', 'active'); }
    });
    current = null;
    state = 'idle';
  }
  skip.addEventListener('click', () => {
    if (state === 'done') { resetTyping(); startTyping(); }
    else finish();
  });

  if (reduced) {
    finish();
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) { startTyping(); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe($('term'));
  } else {
    startTyping();
  }

  // Главная кнопка
  const launch = $('launch');
  launch.addEventListener('click', () => {
    const r = launch.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top, 140, 1.1);
    const s = scene.getBoundingClientRect();
    burst(s.left + s.width / 2, s.top + s.height * 0.45, 90, 0.9);
    setTimeout(() => {
      $('letter').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      startTyping();
    }, reduced ? 0 : 900);
  });

  // Случайные пожелания
  const wishText = $('wishText');
  let wi = 0;
  wishText.textContent = WISHES[wi];
  $('nextWish').addEventListener('click', () => {
    let n;
    do { n = Math.floor(Math.random() * WISHES.length); } while (n === wi && WISHES.length > 1);
    wi = n;
    wishText.classList.remove('swap');
    void wishText.offsetWidth;
    wishText.textContent = WISHES[n];
    wishText.classList.add('swap');
  });
})();
