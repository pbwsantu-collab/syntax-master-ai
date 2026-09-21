/* Syntax Master AI — Data */
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
          en: 'Each and every are followed by singular number. “Every three hours” = each group of three hours.',
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
            { en: 'The writing of letters well is not easy.', bn: 'ভালোভাবে চিঠি লেখা সহজ নয়।' },
            { en: 'That he is ill is known to all.', bn: 'সে অসুস্থ — এটা সবাই জানে।' },
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
            { en: 'Three miles is a long distance.', bn: 'তিন মাইল দীর্ঘ দূরত্ব।' },
            { en: 'Eight rupees was the price of the thing.', bn: 'জিনিসটির দাম ছিল আট টাকা।' }
          ]
        },
        {
          en: 'Name of a country or book, though plural in form, takes singular verb.',
          bn: 'দেশ বা বইয়ের নাম plural form-এ থাকলেও singular verb নেয়।',
          examples: [
            { en: 'The United States of America is a rich country.', bn: 'যুক্তরাষ্ট্র একটি ধনী দেশ।' },
            { en: 'The Folk Tales of Bengal is a good book.', bn: 'দ্য ফোক টেলস অব বেঙ্গল একটি ভালো বই।' }
          ]
        },
        {
          en: 'Collective noun: singular when taken as a unit, plural when members are considered separately.',
          bn: 'একই প্রকারের অনেকগুলোর সমষ্টি বুঝালে singular; স্বতন্ত্রভাবে বুঝালে plural।',
          examples: [
            { en: 'The class is large. The audience has expressed its approval.', bn: 'ক্লাসটি বড়। দর্শকরা তাদের অনুমোদন জানিয়েছে (সমষ্টি)।' },
            { en: 'The audience are requested to take their seats.', bn: 'দর্শকদের আসন গ্রহণ করতে অনুরোধ করা হচ্ছে (স্বতন্ত্র)।' }
          ]
        },
        {
          en: 'Collective noun + of + plural noun (as a unit) takes singular verb.',
          bn: 'A group of people was helping. But: two groups of people were helping.',
          examples: [
            { en: 'A bunch of keys is kept in the drawer.', bn: 'এক গোছা চাবি ড্রয়ারে রাখা আছে।' },
            { en: 'A crowd of students wants to meet the Principal.', bn: 'একদল ছাত্র অধ্যক্ষের সাথে দেখা করতে চায়।' }
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
            { en: 'Our guide was the stars. The stars were our guide.', bn: 'আমাদের পথপ্রদর্শক ছিল তারাগুলো।' },
            { en: 'Germany’s great need was colonies.', bn: 'জার্মানির বড় প্রয়োজন ছিল উপনিবেশ।' }
          ]
        },
        {
          en: 'After “what”, keep number consistent — do not let the complement force a wrong number.',
          bn: 'What-এর পরবর্তী verb-এর number consistent রাখতে হবে।',
          examples: [
            { en: 'What is required is houses at fair rents. (not are)', bn: 'যা প্রয়োজন তা হলো ন্যায্য ভাড়ার বাড়ি।' },
            { en: 'What strikes me most is its beautiful roads. (not are)', bn: 'যা আমাকে সবচেয়ে আকর্ষণ করে তা হলো এর সুন্দর রাস্তা।' }
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
            { en: 'Ram and Shyam were there, but they did nothing.', bn: 'রাম ও শ্যাম সেখানে ছিল, কিন্তু তারা কিছু করেনি।' }
          ]
        },
        {
          en: 'Exception: same person/thing → singular.',
          bn: 'একই ব্যক্তি বা বস্তু বোঝালে singular।',
          examples: [
            { en: 'The Secretary and Treasurer has come. (same person)', bn: 'সচিব ও কোষাধ্যক্ষ এসেছে (একই ব্যক্তি)।' }
          ]
        },
        {
          en: 'Exception: single idea → singular.',
          bn: 'একটি মাত্র ভাব প্রকাশ করলে singular।',
          examples: [
            { en: 'Bread and milk is his only food. Slow and steady wins the race.', bn: 'রুটি ও দুধই তার একমাত্র খাদ্য।' }
          ]
        },
        {
          en: 'Each / every / no before each noun → singular.',
          bn: 'প্রতিটি noun-এর আগে each/every/no থাকলে singular।',
          examples: [
            { en: 'Each man and each woman gets a shilling.', bn: 'প্রত্যেক পুরুষ ও প্রত্যেক নারী এক শিলিং পায়।' }
          ]
        },
        {
          en: 'With / together with / as well as: verb agrees with the noun preceding these words.',
          bn: 'With, together with, as well as-এর পূর্ববর্তী noun অনুযায়ী verb হয়।',
          examples: [
            { en: 'Ram, with his friends, was punished.', bn: 'রাম তার বন্ধুদের সাথে শাস্তি পেয়েছিল।' },
            { en: 'Ram as well as his friends is expected.', bn: 'রাম এবং তার বন্ধুরা প্রত্যাশিত।' }
          ]
        }
      ]
    },
    {
      id: 7, article: '462–465', title: 'OR / Either–Or / Neither–Nor', titleBn: 'OR / Either–Or / Neither–Nor',
      rules: [
        {
          en: 'Singular subjects joined by or / either–or / neither–nor take singular verbs.',
          bn: 'Singular subject or/either-or/neither-nor দ্বারা যুক্ত হলে singular verb বসে।',
          examples: [
            { en: 'Ram or Shyam has to go there.', bn: 'রাম অথবা শ্যামকে সেখানে যেতে হবে।' },
            { en: 'Neither he nor his brother is guilty.', bn: 'সেও নয়, তার ভাইও নয় — কেউ দোষী নয়।' }
          ]
        },
        {
          en: 'When subjects differ in number, the nearest subject prevails.',
          bn: 'Number ভিন্ন হলে নিকটতম subject অনুযায়ী verb হয়।',
          examples: [
            { en: 'Neither the teacher nor the students are coming.', bn: 'শিক্ষকও নয়, ছাত্ররাও আসছে না।' },
            { en: 'Neither the students nor the teacher is coming.', bn: 'ছাত্ররাও নয়, শিক্ষকও আসছে না।' }
          ]
        },
        {
          en: 'Different persons joined by either–or / neither–nor: verb agrees with nearest subject.',
          bn: 'ভিন্ন person হলে নিকটতম subject অনুযায়ী verb।',
          examples: [
            { en: 'Either he or I am to blame.', bn: 'হয় সে, নয় আমি — দোষী।' },
            { en: 'Neither he nor you are guilty.', bn: 'সেও নয়, তুমিও নয়।' }
          ]
        },
        {
          en: 'Not only … but also: verb agrees with the nearest subject.',
          bn: 'Not only…but also-এ নিকটতম subject অনুযায়ী verb।',
          examples: [
            { en: 'Not only he but also his brothers are in trouble.', bn: 'শুধু সে নয়, তার ভাইয়েরাও সমস্যায়।' }
          ]
        }
      ]
    },
    {
      id: 8, article: '466–471', title: 'Person and Pronoun Agreement', titleBn: 'Person ও Pronoun-এর সামঞ্জস্য',
      rules: [
        {
          en: 'Order of persons: 2nd → 3rd → 1st. In confessing faults the order is reversed.',
          bn: 'সাধারণত: You, he and I. দোষ স্বীকারে: I, he and you.',
          examples: [
            { en: 'You, Ram and I have been rewarded.', bn: 'তুমি, রাম এবং আমি পুরস্কৃত হয়েছি।' },
            { en: 'I, Ram and you are all guilty.', bn: 'আমি, রাম এবং তুমি সবাই দোষী।' }
          ]
        },
        {
          en: 'Relative Pronoun agrees in number, gender and person with its antecedent.',
          bn: 'Relative Pronoun তার antecedent-এর number, gender ও person অনুযায়ী হয়।',
          examples: [
            { en: 'I who am your leader command you.', bn: 'আমি, যে তোমার নেতা, তোমাকে আদেশ দিচ্ছি।' },
            { en: 'He was one of the best boys that were seen there.', bn: 'সে সেখানে দেখা সেরা ছেলেদের মধ্যে একজন।' }
          ]
        },
        {
          en: '“To be” verbs take the same case before and after them.',
          bn: 'To be verb-এর আগে ও পরে একই case বসে।',
          examples: [
            { en: 'Whom do you take me to be? It is I.', bn: 'তুমি আমাকে কাকে মনে করো?' }
          ]
        },
        {
          en: 'Anticipatory “It” is singular even for plural nouns; the relative agrees with the real antecedent.',
          bn: 'It singular; relative pronoun-এর antecedent হলো আসল noun/pronoun।',
          examples: [
            { en: 'It was these books that I wanted. It is they who teach the poor.', bn: 'এই বইগুলোই আমি চেয়েছিলাম।' }
          ]
        }
      ]
    },
    {
      id: 9, article: '472–477', title: 'Pronouns and Adjectives', titleBn: 'Pronoun ও Adjective',
      rules: [
        {
          en: 'Case after than / as is determined by mentally supplying the verb.',
          bn: 'Than/as-এর পর case নির্ধারণ করতে verb মানসিকভাবে বসিয়ে দেখতে হয়।',
          examples: [
            { en: 'I love you better than he (loves you). He loves you better than (he loves) me.', bn: 'আমি তোমাকে তার চেয়ে বেশি ভালোবাসি।' }
          ]
        },
        {
          en: 'A noun/pronoun in Possessive Case should not be the antecedent of a Relative Pronoun.',
          bn: 'Possessive case-এর noun/pronoun relative-এর antecedent হতে পারে না।',
          examples: [
            { en: 'I went to the house of the man who is my friend. (not: the man’s house who…)', bn: 'যে আমার বন্ধু, তার বাড়িতে গিয়েছিলাম।' }
          ]
        },
        {
          en: 'Emphatic Pronouns cannot stand alone as subjects.',
          bn: 'Emphatic pronoun একা subject হতে পারে না।',
          examples: [
            { en: 'He and I (not myself) went there. I myself will do it.', bn: 'সে এবং আমি সেখানে গিয়েছিলাম।' }
          ]
        },
        {
          en: 'Some adjectives are only predicative (alone, asleep, afraid…); some only attributive (former, olden…).',
          bn: 'কিছু adjective শুধু predicative; কিছু শুধু attributive।',
          examples: [
            { en: 'I am alone. He is a former teacher.', bn: 'আমি একা। সে প্রাক্তন শিক্ষক।' }
          ]
        },
        {
          en: 'To express quality of the subject use Adjective; to express manner use Adverb.',
          bn: 'Subject-এর quality → Adjective; manner → Adverb।',
          examples: [
            { en: 'He looks angry. He left the place angrily.', bn: 'সে রাগান্বিত দেখাচ্ছে। সে রাগে চলে গেল।' },
            { en: 'It tastes sweet. He spoke sweetly.', bn: 'এটি মিষ্টি লাগে। সে মিষ্টি করে কথা বলল।' }
          ]
        }
      ]
    },
    {
      id: 10, article: '478–483', title: 'Comparison and Articles', titleBn: 'Comparison ও Article',
      rules: [
        {
          en: 'Use “that of” when comparing possessions to avoid absurd comparison.',
          bn: 'মালিকানার তুলনায় “that of” ব্যবহার করুন।',
          examples: [
            { en: 'Ram’s house is better than that of Jadu. (not than Jadu)', bn: 'রামের বাড়ি যদুর বাড়ির চেয়ে ভালো।' },
            { en: 'The population of India is larger than that of France.', bn: 'ভারতের জনসংখ্যা ফ্রান্সের চেয়ে বেশি।' }
          ]
        },
        {
          en: 'When comparing objects of the same class, insert “other” after any/all/no. Superlative does not take “other”.',
          bn: 'একই জাতীয় জিনিসের তুলনায় other ব্যবহার করুন। Superlative-এ other লাগে না।',
          examples: [
            { en: 'He is the best of all the boys (not all the other boys).', bn: 'সে সব ছেলেদের মধ্যে সেরা।' },
            { en: 'The Himalayas are the highest of all mountains.', bn: 'হিমালয় সব পর্বতের মধ্যে সর্বোচ্চ।' }
          ]
        },
        {
          en: 'Article repetition: same person/thing → article once; different → repeat article.',
          bn: 'একই ব্যক্তি/বস্তু → একবার article; আলাদা → পুনরাবৃত্তি।',
          examples: [
            { en: 'The Secretary and Treasurer has done this. (one person)', bn: 'সচিব ও কোষাধ্যক্ষ (একজন) এটা করেছে।' },
            { en: 'The Secretary and the Treasurer have done this. (two persons)', bn: 'সচিব এবং কোষাধ্যক্ষ (দুজন) এটা করেছে।' }
          ]
        },
        {
          en: 'Adjectives joined by and referring to different objects: repeat the or use plural noun; verb is plural.',
          bn: 'ভিন্ন বস্তু বোঝালে the পুনরাবৃত্তি বা plural noun; verb plural।',
          examples: [
            { en: 'The black and the white cow were sold. / The black and white cows were sold.', bn: 'কালো ও সাদা গরু বিক্রি হয়েছিল।' },
            { en: 'The black and white cow = one cow (partly black and white).', bn: 'কালো-সাদা গরু = একটি গরু।' }
          ]
        }
      ]
    },
    {
      id: 11, article: '484–487', title: 'Auxiliaries and Prepositions', titleBn: 'Auxiliary ও Preposition',
      rules: [
        {
          en: 'A single Auxiliary may serve two Principal Verbs if the construction allows it. Otherwise expand fully.',
          bn: 'একটি Auxiliary দুটি Principal Verb-এর জন্য কাজ করতে পারে যদি গঠন অনুমতি দেয়।',
          examples: [
            { en: 'I have lost him but got you. Some were acquitted, and some punished.', bn: 'আমি তাকে হারিয়েছি কিন্তু তোমাকে পেয়েছি।' },
            { en: 'Wrong: He has been enrolled, but your brother resigned. → Correct: …but your brother has resigned.', bn: 'সঠিক রূপ প্রয়োজন।' }
          ]
        },
        {
          en: 'Two Auxiliaries with one Principal Verb only when the form allows it.',
          bn: 'দুটি Auxiliary এক Principal Verb-এর সাথে তখনই যখন form মিলে।',
          examples: [
            { en: 'I never have, nor ever will, hurt anybody. → Correct: I have never hurt… nor will ever hurt…', bn: 'সঠিক: I have never gone there, nor will ever go.' }
          ]
        },
        {
          en: 'Prepositions come before their objects, except with relative “that” and often with interrogatives.',
          bn: 'Preposition সাধারণত object-এর আগে; that ও interrogative-এ ব্যতিক্রম।',
          examples: [
            { en: 'This is the man that I spoke of. What have you come here for?', bn: 'এই সেই লোক যার কথা বলেছিলাম।' }
          ]
        },
        {
          en: 'One preposition should not do the work of two.',
          bn: 'একটি preposition দুটি কাজ করতে পারে না।',
          examples: [
            { en: 'He has come from and will return to Japan. (not: come and will return to)', bn: 'সে জাপান থেকে এসেছে এবং জাপানে ফিরবে।' }
          ]
        }
      ]
    },
    {
      id: 12, article: '488–489', title: 'Correlatives', titleBn: 'Correlatives (শব্দযুগল)',
      rules: [
        {
          en: 'Correlatives are pairs regularly used together. Each member should be followed by the same class of words.',
          bn: 'Correlatives হলো নিয়মিত একত্র ব্যবহৃত শব্দযুগল। উভয় অংশের পর একই জাতীয় part of speech বসবে।',
          examples: [
            { en: 'Both Ram and Kali were present. (not as well as)', bn: 'রাম এবং কালি উভয়ে উপস্থিত ছিল।' },
            { en: 'Either he or his brother was there. Neither the boy nor his brother was present.', bn: 'হয় সে নয় তার ভাই।' },
            { en: 'Not only he but also his brothers were present.', bn: 'শুধু সে নয়, তার ভাইয়েরাও।' },
            { en: 'As you sow, so shall you reap.', bn: 'যেমন বপন করবে, তেমন ফল পাবে।' },
            { en: 'He is as poor as you. He is not so poor as you.', bn: 'সে তোমার মতো গরিব। সে তোমার মতো এত গরিব নয়।' },
            { en: 'He is so angry that he cannot speak.', bn: 'সে এত রাগান্বিত যে কথা বলতে পারছে না।' },
            { en: 'Only such boys are wanted as have passed.', bn: 'শুধু যারা পাস করেছে এমন ছেলে চাই।' },
            { en: 'No sooner did I sit down than they left.', bn: 'আমি বসতে না বসতেই তারা চলে গেল।' },
            { en: 'Hardly had he left when it began to rain. Scarcely had he left when/before it began to rain.', bn: 'সে যেতে না যেতেই বৃষ্টি শুরু হলো।' },
            { en: 'Give me other books than this. I have none else than/but you.', bn: 'এটি ছাড়া অন্য বই দাও।' }
          ]
        },
        {
          en: 'Parallel structure is essential with correlatives.',
          bn: 'Correlatives-এর সাথে parallel structure অপরিহার্য।',
          examples: [
            { en: 'Wrong: He not only went to you, but also to your father. → He went not only to you but also to your father.', bn: 'সঠিক parallel গঠন ব্যবহার করুন।' },
            { en: 'Wrong: He neither offended me nor my brother. → He offended neither me nor my brother.', bn: 'neither…nor-এর পর একই ধরনের শব্দ।' }
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
    { id: 'q29', lesson: 12, article: '488', type: 'mcq', diff: 'beginner', q: 'No sooner did I sit down ___ they left the place.', options: ['when', 'than', 'then', 'before'], ans: 'than', expEn: 'Correlative: No sooner … than.', expBn: 'No sooner-এর সাথে “than” বসে।' }
  ];

  const EXERCISES = {
    65: { title: 'Exercise 65 — Fill up the blanks', type: 'fill', items: [
      { q: 'The man who quarrels with his brother —— not loved by anybody.', ans: 'is', exp: 'Relative clause; subject “man” singular.' },
      { q: 'To honour our superiors —— our duty.', ans: 'is', exp: 'Infinitive subject → singular.' },
      { q: 'The United States —— a rich country.', ans: 'is', exp: 'Country name → singular.' }
    ]},
    66: { title: 'Exercise 66 — AND / as well as / with', type: 'fill', items: [
      { q: 'Time and tide —— for nobody.', ans: 'wait', exp: 'Two subjects → plural.' },
      { q: 'Bread and milk ___ his only food.', ans: 'is', exp: 'Single idea → singular.' },
      { q: 'Ram as well as his friends ___ expected.', ans: 'is', exp: 'Agrees with noun before as well as.' }
    ]},
    67: { title: 'Exercise 67 — OR / Neither–Nor', type: 'fill', items: [
      { q: 'Either you or he —— wrong.', ans: 'is', exp: 'Nearest “he” singular.' },
      { q: 'Neither the king nor his ministers —— present.', ans: 'were', exp: 'Nearest “ministers” plural.' }
    ]},
    68: { title: 'Exercise 68 — Pronouns', type: 'fill', items: [
      { q: 'This is the boy who —— done it.', ans: 'has', exp: 'Antecedent “boy” singular.' },
      { q: 'I who —— your leader command you.', ans: 'am', exp: 'Agrees with “I”.' }
    ]},
    69: { title: 'Exercise 69 — Correct the sentences', type: 'correct', items: [
      { q: 'Iron is the most useful of all other metals.', ans: 'Iron is the most useful of all metals.', exp: 'Superlative — drop “other”.' }
    ]},
    70: { title: 'Exercise 70 — Correlatives', type: 'mixed', items: [
      { q: 'No sooner did I sit down ___ they left.', ans: 'than', exp: 'No sooner … than.' },
      { q: 'Hardly had he left ___ it began to rain.', ans: 'when', exp: 'Hardly … when.' }
    ]}
  };

window.SMA_LESSONS = LESSONS;
window.SMA_QUESTIONS = QUESTIONS;
window.SMA_EXERCISES = EXERCISES;
