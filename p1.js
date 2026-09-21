/* ========== SYNTAX MASTER AI — Core Application ========== */
(function () {
  'use strict';

  // ---------- DATA: LESSONS (Articles 451–489) ----------
  const LESSONS = [
    {
      id: 1, article: '451–452', title: 'Subject–Verb Agreement', titleBn: 'Subject ও Verb-এর সামঞ্জস্য',
      rules: [
        {
          en: 'A verb must agree with its subject in number and person.',
          bn: 'Verb-এর number ও person তার প্রকৃত subject অনুযায়ী হবে।',
          examples: [
            { en: 'He is ill; I am happy; They were happy.', bn: 'সে অসুস্থ; আমি সুখী; তারা সুখী ছিল।' }
          ]
        },
        {
          en: 'Error of Proximity — The verb is sometimes made, through mistake, to agree with a nearby noun/pronoun instead of the real subject. Guard against this.',
          bn: 'অনেক সময় verb-এর number ইহার প্রকৃত subject অনুযায়ী না লিখিয়া নিকটবর্তী noun বা pronoun অনুযায়ী লেখা হয় — এটা ভুল।',
          examples: [
            { en: 'One of them was (not were) present there.', bn: 'তাদের মধ্যে একজন সেখানে উপস্থিত ছিল।' },
            { en: 'The best of the boys has (not have) got a prize.', bn: 'ছেলেদের মধ্যে সেরাটি পুরস্কার পেয়েছে।' },
            { en: 'Each of the girls is clever.', bn: 'প্রতিটি মেয়েই চালাক।' }
          ]
        }
      ]
    },
    {
      id: 2, article: '453, 481', title: 'One of, Each, Every', titleBn: 'One of, Each, Every',
      rules: [
        {
          en: 'The Common Noun following “one of the” should be in the plural number.',
          bn: '“One of the”-এর পরবর্তী Common Noun plural হবে।',
          examples: [
            { en: 'He is one of the best boys (not boy).', bn: 'সে সেরা ছেলেদের মধ্যে একজন।' },
            { en: 'One of the rooms is closed (not are closed).', bn: 'ঘরগুলোর মধ্যে একটি বন্ধ আছে। Subject হলো “one” — singular।' }
          ]
        },
        {
          en: 'One of + plural noun + relative clause: the relative refers to the plural noun, not “one”.',
          bn: 'Relative pronoun-এর antecedent হলো plural noun, “one” নয়।',
          examples: [
            { en: 'He is one of those persons who are never satisfied with their job.', bn: 'যারা নিজেদের চাকরিতে কখনো সন্তুষ্ট নয়, সে তাদের মধ্যে একজন।' },
            { en: 'This is one of the buildings that were destroyed.', bn: 'যেসব ভবন ধ্বংস হয়েছিল, এটি তাদের মধ্যে একটি।' }
          ]
        },
        {
          en: 'One in ten boys is in default. Two in ten boys are in default.',
          bn: 'দশজনের মধ্যে একজন → singular; দুজন → plural।'
        },
        {
          en: 'Each and every are followed by singular number.',
          bn: 'Each ও every-এর পর singular verb ও pronoun বসে।',
          examples: [
            { en: 'Every man must do his duty. Each of the boys was given a cup.', bn: 'প্রত্যেক মানুষকে তার কর্তব্য পালন করতে হবে।' }
          ]
        }
      ]
    },
    {
      id: 3, article: '454', title: 'Subjects That Take Singular Verbs', titleBn: 'Singular Verb নেয় এমন Subject',
      rules: [
        {
          en: 'When an Infinitive, Gerund, Verbal Noun, Clause or Phrase is the subject, the verb is third person singular.',
          bn: 'Infinitive, Gerund, Verbal Noun, Clause বা Phrase subject হলে verb singular হয়।',
          examples: [
            { en: 'To err is human.', bn: 'ভুল করা মানুষের স্বভাব।' },
            { en: 'Swimming is a good exercise.', bn: 'সাঁতার ভালো ব্যায়াম।' },
            { en: 'What he says is not right.', bn: 'সে যা বলে তা ঠিক নয়।' }
          ]
        }
      ]
    },
    {
      id: 4, article: '455–458', title: 'Collective Numbers & Collective Nouns', titleBn: 'Collective Number ও Collective Noun',
      rules: [
        {
          en: 'When a collective number is meant, the noun (plural in form) takes a singular verb.',
          bn: 'সমষ্টিগত সংখ্যা বোঝালে plural form-এর noun-এর সাথে singular verb বসে।',
          examples: [
            { en: 'Fifty rupees is enough for me.', bn: 'পঞ্চাশ টাকা আমার জন্য যথেষ্ট।' },
            { en: 'Three miles is a long distance.', bn: 'তিন মাইল দীর্ঘ দূরত্ব।' }
          ]
        },
        {
          en: 'Name of a country or book, though plural in form, takes singular verb.',
          bn: 'দেশ বা বইয়ের নাম plural form-এ থাকলেও singular verb নেয়।',
          examples: [
            { en: 'The United States of America is a rich country.', bn: 'যুক্তরাষ্ট্র একটি ধনী দেশ।' }
          ]
        },
        {
          en: 'Collective noun: singular when taken as a unit, plural when members are considered separately.',
          bn: 'একই প্রকারের অনেকগুলোর সমষ্টি বুঝালে singular; স্বতন্ত্রভাবে বুঝালে plural।',
          examples: [
            { en: 'The class is large. The audience has expressed its approval.', bn: 'ক্লাসটি বড়।' },
            { en: 'The audience are requested to take their seats.', bn: 'দর্শকদের আসন গ্রহণ করতে অনুরোধ।' }
          ]
        },
        {
          en: 'Collective noun + of + plural noun (as a unit) takes singular verb.',
          bn: 'A group of people was helping.',
          examples: [
            { en: 'A bunch of keys is kept in the drawer.', bn: 'এক গোছা চাবি ড্রয়ারে রাখা আছে।' }
          ]
        }
      ]
    },
    {
      id: 5, article: '459', title: 'Subject and Complement', titleBn: 'Subject ও Complement',
      rules: [
        {
          en: 'If Subject and Complement differ in number, the verb agrees with the Subject.',
          bn: 'Subject ও Complement-এর number ভিন্ন হলে verb Subject অনুযায়ী হয়।',
          examples: [
            { en: 'Our guide was the stars.', bn: 'আমাদের পথপ্রদর্শক ছিল তারাগুলো।' }
          ]
        },
        {
          en: 'Introductory “there”: There is (singular); There are (plural).',
          bn: 'There is — singular; There are — plural।',
          examples: [
            { en: 'There is a big tree near my house.', bn: 'আমার বাড়ির কাছে একটি বড় গাছ আছে।' },
            { en: 'There are many good schools in the town.', bn: 'শহরে অনেক ভালো স্কুল আছে।' }
          ]
        }
      ]
    },
    {
      id: 6, article: '460–461', title: 'Subjects Joined by AND', titleBn: 'AND দ্বারা যুক্ত Subject',
      rules: [
        {
          en: 'Two or more singular subjects joined by and take plural verb and pronoun.',
          bn: 'একাধিক singular subject and দ্বারা যুক্ত হলে verb ও pronoun plural হয়।',
          examples: [
            { en: 'Ram and Shyam were there, but they did nothing.', bn: 'রাম ও শ্যাম সেখানে ছিল।' }
          ]
        },
        {
          en: 'Exception: same person/thing → singular. Single idea → singular. Each/every/no → singular.',
          bn: 'একই ব্যক্তি/একটি ভাব/each-every → singular।',
          examples: [
            { en: 'Bread and milk is his only food.', bn: 'রুটি ও দুধই তার একমাত্র খাদ্য।' },
            { en: 'Ram as well as his friends is expected.', bn: 'রাম এবং তার বন্ধুরা প্রত্যাশিত।' }
          ]
        }
      ]
    },
    {
      id: 7, article: '462–465', title: 'OR / Either–Or / Neither–Nor', titleBn: 'OR / Either–Or / Neither–Nor',
      rules: [
        {
          en: 'Singular subjects joined by or / either–or / neither–nor take singular verbs. Nearest subject prevails when number/person differs.',
          bn: 'or/either-or/neither-nor: singular; number ভিন্ন হলে নিকটতম subject।',
          examples: [
            { en: 'Neither he nor his brother is guilty.', bn: 'সেও নয়, তার ভাইও নয়।' },
            { en: 'Either he or I am to blame.', bn: 'হয় সে, নয় আমি।' }
          ]
        }
      ]
    },
    {
      id: 8, article: '466–471', title: 'Person and Pronoun Agreement', titleBn: 'Person ও Pronoun-এর সামঞ্জস্য',
      rules: [
        {
          en: 'Order of persons: 2nd → 3rd → 1st. Relative agrees with antecedent.',
          bn: 'ক্রম: second → third → first. Relative antecedent অনুযায়ী।',
          examples: [
            { en: 'You, Ram and I have been rewarded.', bn: 'তুমি, রাম এবং আমি পুরস্কৃত হয়েছি।' },
            { en: 'I who am your leader command you.', bn: 'আমি, যে তোমার নেতা।' }
          ]
        }
      ]
    },
    {
      id: 9, article: '472–477', title: 'Pronouns and Adjectives', titleBn: 'Pronoun ও Adjective',
      rules: [
        {
          en: 'Quality of subject → Adjective; manner → Adverb. Emphatic pronouns cannot stand alone as subjects.',
          bn: 'Quality → Adjective; manner → Adverb।',
          examples: [
            { en: 'He looks angry. He left the place angrily.', bn: 'সে রাগান্বিত দেখাচ্ছে।' }
          ]
        }
      ]
    },
    {
      id: 10, article: '478–483', title: 'Comparison and Articles', titleBn: 'Comparison ও Article',
      rules: [
        {
          en: 'Use “that of” for possessions. Superlative does not take “other”. Article once for same person; repeat for different.',
          bn: 'মালিকানায় that of; Superlative-এ other লাগে না।',
          examples: [
            { en: 'Ram’s house is better than that of Jadu.', bn: 'রামের বাড়ি যদুর বাড়ির চেয়ে ভালো।' }
          ]
        }
      ]
    },
    {
      id: 11, article: '484–487', title: 'Auxiliaries and Prepositions', titleBn: 'Auxiliary ও Preposition',
      rules: [
        {
          en: 'One preposition should not do the work of two. Expand auxiliaries when forms differ.',
          bn: 'একটি preposition দুটি কাজ করতে পারে না।',
          examples: [
            { en: 'He has come from and will return to Japan.', bn: 'সে জাপান থেকে এসেছে এবং ফিরবে।' }
          ]
        }
      ]
    },
    {
      id: 12, article: '488–489', title: 'Correlatives', titleBn: 'Correlatives (শব্দযুগল)',
      rules: [
        {
          en: 'Correlatives need parallel structure: No sooner…than; Hardly…when; Both…and; Neither…nor.',
          bn: 'Correlatives-এ parallel structure অপরিহার্য।',
          examples: [
            { en: 'No sooner did I sit down than they left.', bn: 'আমি বসতে না বসতেই তারা চলে গেল।' },
            { en: 'Hardly had he left when it began to rain.', bn: 'সে যেতে না যেতেই বৃষ্টি।' }
          ]
        }
      ]
    }
  ];

  const QUESTIONS = [
    { id: 'q1', lesson: 1, article: '451', type: 'mcq', diff: 'beginner', q: 'One of them ___ present there.', options: ['are', 'is', 'were', 'have'], ans: 'is', expEn: 'The real subject is “one” (singular).', expBn: 'প্রকৃত subject হলো “one”; তাই singular verb “is”।' },
    { id: 'q2', lesson: 1, article: '452', type: 'mcq', diff: 'intermediate', q: 'The best of the boys ___ got a prize.', options: ['have', 'has', 'are', 'were'], ans: 'has', expEn: 'Subject is “the best” (singular).', expBn: 'Subject হলো “the best” — singular।' },
    { id: 'q4', lesson: 2, article: '453', type: 'mcq', diff: 'intermediate', q: 'He is one of those persons who ___ never satisfied with their job.', options: ['is', 'are', 'was', 'has'], ans: 'are', expEn: 'Antecedent of “who” is “persons” (plural).', expBn: '“who”-এর antecedent হলো “persons” — plural।' },
    { id: 'q7', lesson: 3, article: '454', type: 'mcq', diff: 'beginner', q: 'To err ___ human.', options: ['are', 'is', 'were', 'have'], ans: 'is', expEn: 'Infinitive as subject takes singular verb.', expBn: 'Infinitive subject হলে singular verb।' },
    { id: 'q10', lesson: 4, article: '455', type: 'mcq', diff: 'intermediate', q: 'Fifty rupees ___ enough for me.', options: ['are', 'is', 'were', 'have'], ans: 'is', expEn: 'Collective number takes singular verb.', expBn: 'সমষ্টিগত সংখ্যা → singular verb।' },
    { id: 'q16', lesson: 6, article: '460', type: 'mcq', diff: 'beginner', q: 'Ram and Shyam ___ there.', options: ['was', 'were', 'is', 'has'], ans: 'were', expEn: 'Two subjects joined by and → plural.', expBn: 'And দ্বারা যুক্ত → plural।' },
    { id: 'q19', lesson: 7, article: '462', type: 'mcq', diff: 'beginner', q: 'Neither he nor his brother ___ guilty.', options: ['are', 'is', 'were', 'have'], ans: 'is', expEn: 'Singular subjects with neither–nor → singular.', expBn: 'Neither–nor + singular → singular।' },
    { id: 'q29', lesson: 12, article: '488', type: 'mcq', diff: 'beginner', q: 'No sooner did I sit down ___ they left the place.', options: ['when', 'than', 'then', 'before'], ans: 'than', expEn: 'Correlative: No sooner … than.', expBn: 'No sooner-এর সাথে “than” বসে।' },
    { id: 'q30', lesson: 12, article: '489', type: 'mcq', diff: 'board', q: 'Hardly had he left the house ___ it began to rain.', options: ['than', 'when', 'then', 'that'], ans: 'when', expEn: 'Hardly … when.', expBn: 'Hardly-এর সাথে “when” বসে।' },
    { id: 'q18', lesson: 6, article: '461', type: 'mcq', diff: 'intermediate', q: 'Ram as well as his friends ___ expected.', options: ['are', 'is', 'were', 'have'], ans: 'is', expEn: 'Verb agrees with noun before as well as.', expBn: 'as well as-এর আগের noun অনুযায়ী।' }
  ];

  const EXERCISES = {
    65: { title: 'Exercise 65 — Fill up the blanks', type: 'fill', items: [
      { q: 'The man who quarrels with his brother —— not loved by anybody.', ans: 'is', exp: 'Subject “man” singular.' },
      { q: 'To honour our superiors —— our duty.', ans: 'is', exp: 'Infinitive subject → singular.' },
      { q: 'The United States —— a rich country.', ans: 'is', exp: 'Country name → singular.' },
      { q: 'Fifty rupees —— enough for me.', ans: 'is', exp: 'Collective number.' }
    ]},
    66: { title: 'Exercise 66 — AND / as well as / with', type: 'fill', items: [
      { q: 'Time and tide —— for nobody.', ans: 'wait', exp: 'Two subjects → plural.' },
      { q: 'Bread and milk —— his only food.', ans: 'is', exp: 'Single idea → singular.' },
      { q: 'Ram as well as his friends —— expected.', ans: 'is', exp: 'Agrees with Ram.' }
    ]},
    67: { title: 'Exercise 67 — OR / Neither–Nor', type: 'fill', items: [
      { q: 'Either you or he —— wrong.', ans: 'is', exp: 'Nearest he singular.' },
      { q: 'Neither the king nor his ministers —— present.', ans: 'were', exp: 'Nearest ministers plural.' }
    ]},
    68: { title: 'Exercise 68 — Pronouns', type: 'fill', items: [
      { q: 'This is the boy who —— done it.', ans: 'has', exp: 'Antecedent boy singular.' },
      { q: 'I who —— your leader command you.', ans: 'am', exp: 'Agrees with I.' }
    ]},
    69: { title: 'Exercise 69 — Correct the sentences', type: 'correct', items: [
      { q: 'Iron is the most useful of all other metals.', ans: 'Iron is the most useful of all metals.', exp: 'Superlative — drop other.' }
    ]},
    70: { title: 'Exercise 70 — Correlatives', type: 'mixed', items: [
      { q: 'No sooner did I sit down ___ they left.', ans: 'than', exp: 'No sooner … than.' },
      { q: 'Hardly had he left ___ it began to rain.', ans: 'when', exp: 'Hardly … when.' }
    ]}
  };

  let state = {
    lang: 'both',
    theme: localStorage.getItem('sma_theme') || 'light',
    page: 'home',
    currentLesson: null,
    progress: JSON.parse(localStorage.getItem('sma_progress') || '{"topics":{},"attempted":0,"correct":0,"mistakes":[],"streak":0,"lastDate":null,"history":[]}'),
    teacherQs: JSON.parse(localStorage.getItem('sma_teacherQs') || '[]'),
    quiz: null,
    exam: null
  };

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  function toast(msg, ms = 2200) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), ms);
  }
  function saveProgress() {
    localStorage.setItem('sma_progress', JSON.stringify(state.progress));
    updateHomeStats();
  }
  function updateHomeStats() {
    const p = state.progress;
    const topicsDone = Object.keys(p.topics || {}).filter(k => p.topics[k]).length;
    const st = $('#statTopics'); if (st) st.textContent = topicsDone + '/12';
    const sq = $('#statQuestions'); if (sq) sq.textContent = p.attempted || 0;
    const acc = p.attempted ? Math.round((p.correct / p.attempted) * 100) : 0;
    const sa = $('#statAccuracy'); if (sa) sa.textContent = acc + '%';
    const sb = $('#streakBadge'); if (sb) sb.textContent = '🔥 Streak: ' + (p.streak || 0) + ' days';
  }
