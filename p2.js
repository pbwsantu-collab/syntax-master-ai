
  function showPage(page) {
    state.page = page;
    $$('.page').forEach(p => p.classList.remove('active'));
    const el = $('#page-' + page);
    if (el) el.classList.add('active');
    $$('.nav-list li').forEach(li => li.classList.toggle('active', li.dataset.page === page));
    $$('.bottom-nav button').forEach(b => b.classList.toggle('active', b.dataset.page === page));
    closeNav();
    if (page === 'learn') renderLessonList();
    if (page === 'practice') renderPractice();
    if (page === 'mistakes') renderMistakes();
    if (page === 'revision') renderRevision();
    if (page === 'progress') renderProgress();
    if (page === 'voice') renderVoice();
    if (page === 'teacher') renderTeacher();
    if (page === 'exercises') renderExerciseList();
    if (page === 'home') updateHomeStats();
  }
  function openNav() { $('#sideNav')?.classList.add('open'); $('#navOverlay')?.classList.add('show'); }
  function closeNav() { $('#sideNav')?.classList.remove('open'); $('#navOverlay')?.classList.remove('show'); }
  function setTheme(t) {
    state.theme = t;
    document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : '');
    localStorage.setItem('sma_theme', t);
    const btn = $('#themeBtn'); if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  }
  function cycleLang() {
    const order = ['en', 'bn', 'both'];
    state.lang = order[(order.indexOf(state.lang) + 1) % 3];
    const btn = $('#langBtn');
    if (btn) btn.textContent = state.lang === 'en' ? 'EN' : state.lang === 'bn' ? 'বাং' : 'EN/বাং';
    $$('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === state.lang));
    if (state.page === 'learn' && state.currentLesson) openLesson(state.currentLesson);
    if (state.page === 'practice') renderPractice();
  }

  function renderLessonList() {
    const list = $('#lessonList');
    const detail = $('#lessonDetail');
    if (!list) return;
    list.classList.remove('hidden');
    detail?.classList.add('hidden');
    list.innerHTML = LESSONS.map(l => '<div class="lesson-item" data-id="' + l.id + '"><div class="lesson-num">' + l.id + '</div><div class="lesson-info"><h4>' + (state.lang === 'bn' ? l.titleBn : l.title) + '</h4><div class="lesson-meta">Articles ' + l.article + '</div></div></div>').join('');
    list.querySelectorAll('.lesson-item').forEach(item => item.addEventListener('click', () => openLesson(+item.dataset.id)));
  }

  function openLesson(id) {
    const lesson = LESSONS.find(l => l.id === id);
    if (!lesson) return;
    state.currentLesson = id;
    $('#lessonList')?.classList.add('hidden');
    const detail = $('#lessonDetail');
    detail?.classList.remove('hidden');
    let html = '<button class="back-btn" id="backToLessons">← All Lessons</button><h2 style="margin:0.75rem 0">' + (state.lang === 'bn' ? lesson.titleBn : lesson.title) + '</h2><p style="color:var(--text-muted);margin-bottom:1rem">Articles ' + lesson.article + '</p>';
    lesson.rules.forEach((r, i) => {
      html += '<div class="rule-card"><h4>Rule ' + (i + 1) + '</h4>';
      if (state.lang !== 'bn') html += '<p>' + r.en + '</p>';
      if (state.lang !== 'en' && r.bn) html += '<p class="bn-text" style="margin-top:0.4rem;color:var(--text-muted)">' + r.bn + '</p>';
      (r.examples || []).forEach(ex => {
        html += '<div class="example-box"><div>' + ex.en + '</div>' + (state.lang !== 'en' && ex.bn ? '<div class="bn bn-text">' + ex.bn + '</div>' : '') + '</div>';
      });
      html += '</div>';
    });
    html += '<div style="margin-top:1rem"><button class="primary-btn" id="markLessonDone">Mark as Completed</button></div>';
    detail.innerHTML = html;
    $('#backToLessons').onclick = () => { state.currentLesson = null; renderLessonList(); };
    $('#markLessonDone').onclick = () => {
      state.progress.topics = state.progress.topics || {};
      state.progress.topics[id] = true;
      saveProgress();
      toast('Topic marked complete!');
    };
  }

  function renderQuestionCard(q) {
    let optsHtml = '';
    if (q.options) {
      optsHtml = '<div class="options">' + q.options.map((o, i) => {
        const letter = String.fromCharCode(65 + i);
        return '<button class="option-btn" data-val="' + o + '" data-qid="' + q.id + '"><span class="opt-letter">' + letter + '</span> ' + o + '</button>';
      }).join('') + '</div>';
    } else {
      optsHtml = '<input type="text" class="fill-input" data-qid="' + q.id + '" placeholder="Type your answer..." style="width:100%;padding:0.75rem;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text);margin-bottom:0.5rem" />';
    }
    return '<div class="question-card" data-qid="' + q.id + '"><div class="q-meta"><span class="badge article">Art. ' + (q.article || '—') + '</span><span class="badge diff-' + (q.diff || 'beginner') + '">' + (q.diff || 'beginner').toUpperCase() + '</span></div><div class="q-text">' + q.q + '</div>' + optsHtml + '<div class="answer-box" id="ans-' + q.id + '"><div class="ans-label">✓ Answer: ' + q.ans + '</div><div>' + (q.expEn || '') + '</div>' + (q.expBn ? '<div class="exp-bn bn-text">' + q.expBn + '</div>' : '') + '<div class="mistake-explain hidden" id="mistake-' + q.id + '"></div></div><div class="q-actions"><button class="primary-btn show-ans-btn" data-qid="' + q.id + '">Show Answer</button><button class="secondary-btn hide-ans-btn hidden" data-qid="' + q.id + '">Hide Answer</button><button class="secondary-btn mark-rev-btn" data-qid="' + q.id + '">📌 Revision</button></div></div>';
  }

  function bindQuestionCards(container) {
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.question-card');
        const qid = btn.dataset.qid;
        const q = [...QUESTIONS, ...state.teacherQs].find(x => x.id === qid);
        if (!q) return;
        card.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected', 'correct', 'wrong'));
        btn.classList.add('selected');
        const correct = btn.dataset.val === q.ans;
        if (correct) {
          btn.classList.add('correct');
          recordAttempt(qid, true);
          toast('Correct! ✓');
        } else {
          btn.classList.add('wrong');
          recordAttempt(qid, false, q);
          const me = $('#mistake-' + qid);
          if (me) {
            me.classList.remove('hidden');
            me.innerHTML = '<strong>Why is my answer wrong?</strong><br>You chose “' + btn.dataset.val + '”. Correct: “' + q.ans + '”.<br>' + (q.expEn || '') + '<br><span class="bn-text">' + (q.expBn || '') + '</span>';
          }
          card.querySelectorAll('.option-btn').forEach(b => { if (b.dataset.val === q.ans) b.classList.add('correct'); });
          toast('Incorrect — see explanation');
        }
        $('#ans-' + qid)?.classList.add('show');
        card.querySelector('.show-ans-btn')?.classList.add('hidden');
        card.querySelector('.hide-ans-btn')?.classList.remove('hidden');
      });
    });
    container.querySelectorAll('.show-ans-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        $('#ans-' + qid)?.classList.add('show');
        btn.classList.add('hidden');
        container.querySelector('.hide-ans-btn[data-qid="' + qid + '"]')?.classList.remove('hidden');
      });
    });
    container.querySelectorAll('.hide-ans-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        $('#ans-' + qid)?.classList.remove('show');
        btn.classList.add('hidden');
        container.querySelector('.show-ans-btn[data-qid="' + qid + '"]')?.classList.remove('hidden');
      });
    });
    container.querySelectorAll('.mark-rev-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        const q = [...QUESTIONS, ...state.teacherQs].find(x => x.id === qid);
        if (q && !state.progress.mistakes.find(m => m.id === qid)) {
          state.progress.mistakes.push({ id: qid, q: q.q, ans: q.ans, expEn: q.expEn, expBn: q.expBn, lesson: q.lesson });
          saveProgress();
          toast('Added to Mistake Book');
        } else toast('Already in revision list');
      });
    });
  }

  function recordAttempt(qid, correct, q) {
    state.progress.attempted = (state.progress.attempted || 0) + 1;
    if (correct) state.progress.correct = (state.progress.correct || 0) + 1;
    else if (q && !state.progress.mistakes.find(m => m.id === qid)) {
      state.progress.mistakes.push({ id: qid, q: q.q, ans: q.ans, expEn: q.expEn, expBn: q.expBn, lesson: q.lesson });
    }
    const today = new Date().toDateString();
    if (state.progress.lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      state.progress.streak = state.progress.lastDate === yesterday ? (state.progress.streak || 0) + 1 : 1;
      state.progress.lastDate = today;
    }
    saveProgress();
  }

  function renderPractice() {
    const topicSel = $('#practiceTopic');
    if (topicSel && topicSel.options.length <= 1) {
      LESSONS.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l.id;
        opt.textContent = 'L' + l.id + ': ' + l.title;
        topicSel.appendChild(opt);
      });
    }
    const topic = topicSel?.value || 'all';
    const diff = $('#practiceDiff')?.value || 'all';
    let qs = [...QUESTIONS, ...state.teacherQs];
    if (topic !== 'all') qs = qs.filter(q => q.lesson == topic);
    if (diff !== 'all') qs = qs.filter(q => q.diff === diff);
    const area = $('#practiceArea');
    if (!area) return;
    if (!qs.length) { area.innerHTML = '<p style="text-align:center;color:var(--text-muted)">No questions match filters.</p>'; return; }
    qs = qs.sort(() => Math.random() - 0.5).slice(0, 15);
    area.innerHTML = qs.map(q => renderQuestionCard(q)).join('');
    bindQuestionCards(area);
  }

  function startQuiz() {
    const count = +($('#quizCount')?.value || 10);
    const timeMin = +($('#quizTime')?.value || 0);
    let qs = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, count);
    if (!qs.length) { toast('No questions available'); return; }
    state.quiz = { qs, idx: 0, answers: {}, timeMin, timer: null };
    $('#quizSetup')?.classList.add('hidden');
    $('#quizResult')?.classList.add('hidden');
    const area = $('#quizArea');
    if (area) { area.classList.remove('hidden'); }
    renderQuizQ();
    if (timeMin > 0) {
      let left = timeMin * 60;
      state.quiz.timer = setInterval(() => {
        left--;
        const tb = $('#quizTimer');
        if (tb) tb.textContent = '⏱ ' + Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0');
        if (left <= 0) { clearInterval(state.quiz.timer); finishQuiz(); }
      }, 1000);
    }
  }
  function renderQuizQ() {
    const qz = state.quiz;
    if (!qz || qz.idx >= qz.qs.length) return finishQuiz();
    const q = qz.qs[qz.idx];
    const area = $('#quizArea');
    if (!area) return;
    area.innerHTML = '<div class="timer-bar"><span>Question ' + (qz.idx + 1) + ' / ' + qz.qs.length + '</span><span id="quizTimer">' + (qz.timeMin ? '⏱ …' : '') + '</span></div>' +
      renderQuestionCard(q) +
      '<div class="q-actions" style="margin-top:1rem"><button class="primary-btn" id="quizNext">' + (qz.idx + 1 === qz.qs.length ? 'Finish' : 'Next →') + '</button></div>';
    bindQuestionCards(area);
    area.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => { qz.answers[q.id] = btn.dataset.val; });
    });
    $('#quizNext').onclick = () => {
      const inp = area.querySelector('.fill-input');
      if (inp) qz.answers[q.id] = inp.value.trim();
      qz.idx++;
      renderQuizQ();
    };
  }
  function finishQuiz() {
    if (state.quiz?.timer) clearInterval(state.quiz.timer);
    const qz = state.quiz;
    if (!qz) return;
    let correct = 0;
    qz.qs.forEach(q => {
      const user = qz.answers[q.id];
      if (user && user === q.ans) correct++;
    });
    const total = qz.qs.length;
    const pct = total ? Math.round((correct / total) * 100) : 0;
    state.progress.attempted = (state.progress.attempted || 0) + total;
    state.progress.correct = (state.progress.correct || 0) + correct;
    state.progress.history = state.progress.history || [];
    state.progress.history.push({ type: 'quiz', correct, total, pct, date: new Date().toISOString() });
    saveProgress();
    $('#quizArea')?.classList.add('hidden');
    const res = $('#quizResult');
    if (!res) return;
    res.classList.remove('hidden');
    res.innerHTML = '<div class="result-card"><div class="result-score">' + pct + '%</div><div class="result-detail">' + correct + ' / ' + total + ' correct</div><div class="result-actions"><button class="primary-btn" id="quizRetry">Try Again</button><button class="secondary-btn" id="quizHome">Home</button></div></div>';
    $('#quizRetry').onclick = () => { res.classList.add('hidden'); $('#quizSetup')?.classList.remove('hidden'); };
    $('#quizHome').onclick = () => showPage('home');
  }

  function startExam(count, timeMin, neg) {
    count = count || +($('#examQ')?.value || 20);
    timeMin = timeMin ?? +($('#examT')?.value || 20);
    neg = neg ?? !!$('#examNeg')?.checked;
    let qs = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, count);
    if (!qs.length) { toast('No questions available'); return; }
    state.exam = { qs, idx: 0, answers: {}, timeMin, neg, timer: null };
    $('#examSetup')?.classList.add('hidden');
    $('#examResult')?.classList.add('hidden');
    const area = $('#examArea');
    if (area) area.classList.remove('hidden');
    renderExamQ();
    if (timeMin > 0) {
      let left = timeMin * 60;
      state.exam.timer = setInterval(() => {
        left--;
        const tb = $('#examTimer');
        if (tb) tb.textContent = '⏱ ' + Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0');
        if (left <= 0) { clearInterval(state.exam.timer); finishExam(); }
      }, 1000);
    }
  }
  function renderExamQ() {
    const ex = state.exam;
    if (!ex || ex.idx >= ex.qs.length) return finishExam();
    const q = ex.qs[ex.idx];
    const area = $('#examArea');
    if (!area) return;
    area.innerHTML = '<div class="timer-bar"><span>Q ' + (ex.idx + 1) + ' / ' + ex.qs.length + '</span><span id="examTimer">' + (ex.timeMin ? '⏱ …' : '') + '</span></div>' +
      renderQuestionCard(q) +
      '<div class="q-actions"><button class="secondary-btn" id="examPrev"' + (ex.idx === 0 ? ' disabled' : '') + '>← Prev</button><button class="primary-btn" id="examNext">' + (ex.idx + 1 === ex.qs.length ? 'Submit' : 'Next →') + '</button></div>';
    bindQuestionCards(area);
    area.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => { ex.answers[q.id] = btn.dataset.val; });
    });
    $('#examNext').onclick = () => {
      const inp = area.querySelector('.fill-input');
      if (inp) ex.answers[q.id] = inp.value.trim();
      ex.idx++;
      renderExamQ();
    };
    const prev = $('#examPrev');
    if (prev) prev.onclick = () => { if (ex.idx > 0) { ex.idx--; renderExamQ(); } };
  }
  function finishExam() {
    if (state.exam?.timer) clearInterval(state.exam.timer);
    const ex = state.exam;
    if (!ex) return;
    let correct = 0, wrong = 0, unans = 0;
    ex.qs.forEach(q => {
      const user = ex.answers[q.id];
      if (!user) unans++;
      else if (user === q.ans) correct++;
      else wrong++;
    });
    const total = ex.qs.length;
    let score = correct;
    if (ex.neg) score = Math.max(0, correct - wrong * 0.25);
    const pct = total ? Math.round((score / total) * 100) : 0;
    state.progress.attempted = (state.progress.attempted || 0) + total;
    state.progress.correct = (state.progress.correct || 0) + correct;
    state.progress.history = state.progress.history || [];
    state.progress.history.push({ type: 'exam', correct, total, pct, date: new Date().toISOString() });
    saveProgress();
    $('#examArea')?.classList.add('hidden');
    const res = $('#examResult');
    if (!res) return;
    res.classList.remove('hidden');
    res.innerHTML = '<div class="result-card"><div class="result-score">' + pct + '%</div><div class="result-detail">Score: ' + score + ' / ' + total + '<br>Correct: ' + correct + ' • Wrong: ' + wrong + ' • Unanswered: ' + unans + '</div><div class="result-actions"><button class="primary-btn" id="examHome">Home</button></div></div>';
    $('#examHome').onclick = () => showPage('home');
  }

  function renderMistakes() {
    const list = $('#mistakesList');
    if (!list) return;
    const ms = state.progress.mistakes || [];
    if (!ms.length) { list.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:2rem">No mistakes yet.</p>'; return; }
    list.innerHTML = ms.map(m => '<div class="question-card"><div class="q-text">' + m.q + '</div><p><strong>Answer:</strong> ' + m.ans + '</p><p style="font-size:0.9rem">' + (m.expEn || '') + '</p></div>').join('');
  }
  function renderRevision() {
    const area = $('#revisionArea');
    if (!area) return;
    const ms = state.progress.mistakes || [];
    if (!ms.length) { area.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Nothing to revise yet.</p>'; return; }
    area.innerHTML = '<p style="margin-bottom:1rem">' + ms.length + ' item(s) for revision</p>' + ms.map(m => {
      const full = QUESTIONS.find(q => q.id === m.id) || m;
      return renderQuestionCard(full);
    }).join('');
    bindQuestionCards(area);
  }
  function renderProgress() {
    const p = state.progress;
    const topicsDone = Object.keys(p.topics || {}).filter(k => p.topics[k]).length;
    const acc = p.attempted ? Math.round((p.correct / p.attempted) * 100) : 0;
    const dash = $('#progressDashboard');
    if (!dash) return;
    dash.innerHTML = '<div class="prog-card"><h3>Overview</h3><p>Topics Completed: <strong>' + topicsDone + '/12</strong></p><div class="prog-bar-bg"><div class="prog-bar-fill" style="width:' + (topicsDone / 12 * 100) + '%"></div></div><p style="margin-top:0.75rem">Questions: <strong>' + (p.attempted || 0) + '</strong> • Accuracy: <strong>' + acc + '%</strong></p><div class="prog-bar-bg"><div class="prog-bar-fill" style="width:' + acc + '%"></div></div><p style="margin-top:0.75rem">Streak: <strong>' + (p.streak || 0) + ' days</strong></p></div>';
  }
  function speak(text) {
    if (!window.speechSynthesis) { toast('Speech not supported'); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-IN';
    u.rate = +($('#voiceSpeed')?.value || 1);
    window.speechSynthesis.speak(u);
  }
  function renderVoice() {
    const content = $('#voiceContent');
    if (!content) return;
    content.innerHTML = LESSONS.map(l => '<div class="rule-card"><h4>' + l.title + '</h4><p style="font-size:0.9rem;color:var(--text-muted)">' + ((l.rules[0] && l.rules[0].en) || '').slice(0, 120) + '…</p><button class="secondary-btn speak-lesson" data-id="' + l.id + '">🔊 Play</button></div>').join('');
    content.querySelectorAll('.speak-lesson').forEach(b => {
      b.onclick = () => {
        const lesson = LESSONS.find(l => l.id == b.dataset.id);
        if (lesson) speak(lesson.rules.map(r => r.en).join('. '));
      };
    });
  }
  function renderTeacher() {
    const list = $('#teacherList');
    if (!list) return;
    const qs = state.teacherQs;
    list.innerHTML = qs.length ? qs.map(q => '<div class="question-card"><div class="q-text">' + q.q + '</div><p>Ans: ' + q.ans + '</p></div>').join('') : '<p style="color:var(--text-muted)">No teacher questions yet.</p>';
  }
  function renderExerciseList() {
    const list = $('#exerciseList');
    const detail = $('#exerciseDetail');
    if (!list) return;
    list.classList.remove('hidden');
    detail?.classList.add('hidden');
    list.innerHTML = Object.keys(EXERCISES).map(num => '<div class="lesson-item" data-ex="' + num + '"><div class="lesson-num">' + num + '</div><div class="lesson-info"><h4>' + EXERCISES[num].title + '</h4><div class="lesson-meta">' + EXERCISES[num].items.length + ' items</div></div></div>').join('');
    list.querySelectorAll('.lesson-item').forEach(item => {
      item.addEventListener('click', () => openExercise(item.dataset.ex));
    });
  }
  function openExercise(num) {
    const ex = EXERCISES[num];
    if (!ex) return;
    $('#exerciseList')?.classList.add('hidden');
    const detail = $('#exerciseDetail');
    detail?.classList.remove('hidden');
    let html = '<button class="back-btn" id="backToEx">← All Exercises</button><h2 style="margin:0.75rem 0">' + ex.title + '</h2>';
    ex.items.forEach((item, i) => {
      const id = 'ex' + num + '_' + i;
      html += '<div class="question-card"><div class="q-text">' + (i + 1) + '. ' + item.q + '</div><input type="text" class="fill-input" data-qid="' + id + '" placeholder="Your answer..." style="width:100%;padding:0.6rem;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text)" /><div class="answer-box" id="ans-' + id + '"><div class="ans-label">✓ ' + item.ans + '</div><div>' + (item.exp || '') + '</div></div><div class="q-actions"><button class="primary-btn show-ans-btn" data-qid="' + id + '">Show Answer</button><button class="secondary-btn hide-ans-btn hidden" data-qid="' + id + '">Hide</button></div></div>';
    });
    detail.innerHTML = html;
    $('#backToEx').onclick = () => renderExerciseList();
    bindQuestionCards(detail);
  }

  function init() {
    setTimeout(() => {
      $('#splash')?.classList.add('hidden');
      $('#app')?.classList.remove('hidden');
      updateHomeStats();
    }, 800);
    setTheme(state.theme);
    const lb = $('#langBtn'); if (lb) lb.textContent = state.lang === 'en' ? 'EN' : state.lang === 'bn' ? 'বাং' : 'EN/বাং';
    $('#menuBtn')?.addEventListener('click', openNav);
    $('#closeNav')?.addEventListener('click', closeNav);
    $('#navOverlay')?.addEventListener('click', closeNav);
    $('#themeBtn')?.addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
    $('#langBtn')?.addEventListener('click', cycleLang);
    $$('.nav-list li').forEach(li => li.addEventListener('click', () => showPage(li.dataset.page)));
    $$('.bottom-nav button').forEach(b => b.addEventListener('click', () => showPage(b.dataset.page)));
    $$('.dash-card').forEach(c => c.addEventListener('click', () => showPage(c.dataset.page)));
    $$('.lang-opt').forEach(b => b.addEventListener('click', () => {
      state.lang = b.dataset.lang;
      $$('.lang-opt').forEach(x => x.classList.toggle('active', x.dataset.lang === state.lang));
      if (state.currentLesson) openLesson(state.currentLesson); else if (state.page === 'learn') renderLessonList();
    }));
    ['practiceTopic', 'practiceDiff', 'practiceType'].forEach(id => {
      const el = $('#' + id);
      if (el) el.addEventListener('change', renderPractice);
    });
    $$('.map-node[data-lesson]').forEach(n => {
      n.addEventListener('click', () => { showPage('learn'); setTimeout(() => openLesson(+n.dataset.lesson), 100); });
    });
    $('#voiceStop')?.addEventListener('click', () => window.speechSynthesis?.cancel());
    $('#voicePlay')?.addEventListener('click', () => { if (LESSONS[0]) speak(LESSONS[0].rules.map(r => r.en).join('. ')); });
    $('#saveTeacherQ')?.addEventListener('click', () => {
      const q = {
        id: 'tq_' + Date.now(), lesson: 0, article: $('#tqArticle')?.value || '—',
        type: $('#tqType')?.value || 'mcq', diff: $('#tqDiff')?.value || 'beginner',
        q: ($('#tqText')?.value || '').trim(),
        options: [$('#tqA')?.value, $('#tqB')?.value, $('#tqC')?.value, $('#tqD')?.value].filter(Boolean),
        ans: ($('#tqAns')?.value || '').trim(),
        expEn: ($('#tqExpEn')?.value || '').trim(), expBn: ($('#tqExpBn')?.value || '').trim()
      };
      if (!q.q || !q.ans) { toast('Question and answer required'); return; }
      state.teacherQs.push(q);
      localStorage.setItem('sma_teacherQs', JSON.stringify(state.teacherQs));
      toast('Question saved');
      renderTeacher();
    });
    $('#startQuiz')?.addEventListener('click', startQuiz);
    $$('.preset-btn').forEach(b => {
      b.addEventListener('click', () => startExam(+b.dataset.q, +b.dataset.t, false));
    });
    $('#startExam')?.addEventListener('click', () => {
      startExam(+$('#examQ')?.value || 20, +$('#examT')?.value || 20, !!$('#examNeg')?.checked);
    });
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
