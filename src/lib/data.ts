export type Course = {
  slug: string;
  name: string;
  chip: string;
  image: string;
  position?: string;
  tag: string;
  desc: string[];
  learn: string[];
  who: string;
  icon: string;
};

// Course copy taken verbatim from the previous site (quran-light-institute.html).
// No prices, durations, teacher names, testimonials or statistics are invented here.
export const COURSES: Course[] = [
  {
    slug: "noorani-qaida",
    chip: "Beginners",
    image: "https://images.pexels.com/photos/8164734/pexels-photo-8164734.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center 20%",
    name: "Noorani Qaida",
    tag: "The perfect first step — the foundation of reading the Holy Quran.",
    desc: ["Noorani Qaida is the foundation course for every beginner. Before a child can read the Holy Quran, they must first recognise the Arabic letters, pronounce them correctly from their proper articulation points (Makharij), and learn how letters join together to form words.", "In live one-to-one lessons, the teacher takes the student step by step through the Qaida — slowly, patiently and with lots of encouragement — until reading Arabic becomes easy and natural. It is the same trusted starting point used by Quran students all over the world."],
    learn: ["Recognition of all Arabic alphabet letters, in every form", "Correct pronunciation of each letter from its Makharij (articulation point)", "Harakat — Fatha, Kasra and Damma — and how they change a letter’s sound", "Joining letters together to read complete words", "Basic reading rules that prepare the student for the Holy Quran"],
    who: "Complete beginners of any age — especially young children taking their very first step towards reading the Quran, and adults who want to start from the basics.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M9.2 2.6 3.6 4.5c-.7.24-1.1 1-.86 1.7l.8 2.4c.24.7 1 1.1 1.7.86l5.6-1.9c.7-.24 1.1-1 .86-1.7l-.8-2.4a1.25 1.25 0 0 0-1.7-.86zM7.6 5.1l1.6 3.1-1.3.44-1-1.98-2.04.7-.55-1.2 3.3-1.05zm-.95 2.5.92-.3-.72-1.4-.2 1.7zM14.5 2.8h-3.9v7h3.9c2 0 3.4-1.4 3.4-3.5S16.5 2.8 14.5 2.8zm-.6 5.4h-1.6V4.5h1.6c1 0 1.7.7 1.7 1.85S14.9 8.2 13.9 8.2zM20.9 12.4c-1.4-.8-2.6-.3-3.3.6l1.2 1.1c.3-.4.8-.6 1.3-.4.5.2.7.7.5 1.2-.2.6-.9 1-2.1 1.4-1.4.5-2.2 1.4-2 2.7.2 1.5 1.6 2.4 3.2 2.2 1.2-.2 2.1-.9 2.6-1.9l-1.3-.9c-.3.5-.7.9-1.3 1-.6.1-1.1-.2-1.2-.7-.1-.6.4-1 1.3-1.3 1.5-.5 2.4-1.3 2.6-2.5.2-1.3-.4-2.3-1.5-2.5zM14.8 12.9l-1.6-.4-3.2 6 1.5.5 1-2 3 .8.5-1.6-2.9-.8 1-1.9zm-1.5 2.9.9-1.7.4 1.9-1.3-.2zM5.8 12.4 3 13.9l3.5 6.4 2.7-1.5-3.4-6.4zm1.4 4.9L6 15l1-.6 1.2 2.3-1 .6z\" opacity=\".95\"/></svg>",
  },
  {
    slug: "quran-reading-nazra",
    chip: "Reading",
    image: "https://images.pexels.com/photos/20784497/pexels-photo-20784497.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center",
    name: "Quran Reading (Nazra)",
    tag: "Read the Holy Quran fluently, directly from the Mushaf.",
    desc: ["In the Nazra Quran course, students read the Holy Quran directly from the Mushaf, looking at the Arabic text and reciting it aloud while the teacher listens, corrects and guides them in every class.", "Lesson by lesson, the student’s reading becomes smoother, faster and more confident, until they can open any page of the Quran and read it correctly on their own."],
    learn: ["Reading the Quran directly from the Arabic Mushaf", "Correct pronunciation of words while reading", "Fluency and confidence, page by page", "Applying the basic rules of recitation while reading", "Building a daily habit of Quran reading"],
    who: "Students who have completed Noorani Qaida (or can already read some Arabic) and want to read the whole Quran correctly and fluently.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M21 4.1A1.5 1.5 0 0 0 19.6 3c-3 0-5.6.86-7.6 2.5C10 3.86 7.4 3 4.4 3A1.5 1.5 0 0 0 3 4.5v14A1.5 1.5 0 0 0 4.6 20c2.9-.2 5.4.6 7.4 2.3 2-1.7 4.5-2.5 7.4-2.3a1.5 1.5 0 0 0 1.6-1.5v-14c0-.15-.02-.28-.06-.4zM10.5 18.2c-1.7-.95-3.6-1.4-5.5-1.3V5.4c1.9-.1 3.8.35 5.5 1.3v11.5zm8.5-1.3c-1.9-.1-3.8.35-5.5 1.3V6.7c1.7-.95 3.6-1.4 5.5-1.3v11.5z\"/></svg>",
  },
  {
    slug: "tajweed",
    chip: "Recitation",
    image: "https://images.pexels.com/photos/7654914/pexels-photo-7654914.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center",
    name: "Tajweed",
    tag: "Recite the Holy Quran beautifully, the way it was revealed.",
    desc: ["Tajweed means reciting the Holy Quran with every letter pronounced exactly as it should be — from its correct articulation point and with its proper characteristics. It is the rules that keep Quranic recitation accurate and beautiful.", "In this course, the teacher explains each Tajweed rule in a simple way and then practises it with the student through live recitation, correcting mistakes gently until the recitation becomes correct and confident."],
    learn: ["Makharij — the correct articulation point of every Arabic letter", "The rules of Noon Sakinah and Tanween (Izhar, Idgham, Iqlab, Ikhfa)", "The rules of Meem Sakinah and the rules of Madd (elongation)", "Sifaat — the characteristics of the letters", "Applying all the rules together in fluent, beautiful recitation"],
    who: "Students who can already read the Quran and want to perfect their recitation — and anyone preparing for Hifz or advanced Quran study.",
    icon: "<span class=\"arabic\">تجويد</span>",
  },
  {
    slug: "hifz-ul-quran",
    chip: "Memorization",
    image: "https://images.pexels.com/photos/8164735/pexels-photo-8164735.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center",
    name: "Hifz-ul-Quran",
    tag: "Memorize the Holy Quran with proper guidance, step by step.",
    desc: ["Hifz-ul-Quran is the blessed journey of memorizing the entire Holy Quran. It needs patience, consistency and — most of all — a teacher who listens to the student’s recitation every day and keeps their memorization strong.", "Our teachers follow a clear, proven routine in every class: new memorization (Sabaq), revision of the recent portion (Sabqi) and revision of the earlier Quran (Manzil), so that what is memorized is never forgotten."],
    learn: ["Memorizing new verses in every class (Sabaq)", "Daily revision of recently memorized portions (Sabqi)", "Regular revision of the whole memorized Quran (Manzil)", "Memorizing with correct Tajweed from the very beginning", "Discipline, consistency and love for the Holy Quran"],
    who: "Kids and adults who can read the Quran with Tajweed and wish to memorize the whole Quran with a dedicated one-to-one teacher.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM9 4h6v5l-3-2-3 2V4zm3 13.3 1.6 2.4-2.35-1.55L8.6 19.5l1.35-2.55L7.4 15.6l2.85-.35L12 12.8l1.75 2.45 2.85.35-2.55 1.35 1.35 2.55-2.65-1.75L12 17.3z\" opacity=\".95\"/></svg>",
  },
  {
    slug: "quran-translation",
    chip: "Understanding",
    image: "https://images.pexels.com/photos/36521599/pexels-photo-36521599.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center",
    name: "Quran Translation",
    tag: "Understand the meaning of the words you recite.",
    desc: ["Reciting the Quran is a great blessing — and understanding its meaning brings its guidance into daily life. In the Quran Translation course, students learn the meaning of the verses they read, word by word and verse by verse.", "The teacher explains the translation in simple, easy language, so students of every age can understand what Allah is saying to them in the Holy Quran."],
    learn: ["Word-by-word meaning of Quranic verses", "Understanding the message of each Surah", "The meaning of the verses recited in daily Salah", "Connecting the Quran’s guidance with everyday life"],
    who: "Students who can read the Quran and now want to understand its meaning — especially adults and older children.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 5.5C10.3 3.9 7.9 3 4.9 3c-.6 0-1.2.04-1.9.12v15.76c.7-.08 1.3-.12 1.9-.12 3 0 5.4.9 7.1 2.5 1.7-1.6 4.1-2.5 7.1-2.5.6 0 1.2.04 1.9.12V3.12C20.3 3.04 19.7 3 19.1 3c-3 0-5.4.9-7.1 2.5zM5 8.2c2-.06 3.9.35 5.5 1.3v2.1C8.9 10.72 7 10.3 5 10.36V8.2zm0 4.16c2-.06 3.9.35 5.5 1.3v2.1c-1.6-.9-3.5-1.32-5.5-1.26v-2.14zm14-4.16v2.16c-2-.06-3.9.36-5.5 1.24V9.5c1.6-.95 3.5-1.36 5.5-1.3zm0 4.16v2.14c-2-.06-3.9.36-5.5 1.26v-2.1c1.6-.95 3.5-1.36 5.5-1.3z\"/></svg>",
  },
  {
    slug: "quran-tafseer",
    chip: "Advanced",
    image: "https://images.pexels.com/photos/20784664/pexels-photo-20784664.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center",
    name: "Quran Tafseer",
    tag: "Go deeper — the meanings and lessons behind the verses.",
    desc: ["Tafseer is the detailed explanation of the Holy Quran. In this course, students go beyond translation to understand the background, meanings and lessons of Quranic verses through simple explanations.", "Every lesson opens a new door: why a verse was revealed, what it teaches us, and how its guidance applies to our lives today."],
    learn: ["The detailed meaning of Quranic verses", "The background and context of revelation", "Lessons and guidance for everyday life", "A deeper connection with the Holy Quran"],
    who: "Adults and older students who understand basic translation and want a deeper, guided study of the Quran’s meanings.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M21.5 10.5h-1v-.8c0-.9-.17-1.77-.48-2.57h1.43V5.35a.6.6 0 0 0-.6-.6h-.3a.6.6 0 0 0-.6.6v1.78h-1.44C17.77 5.2 16.1 3.6 14 3.04V1.7a.7.7 0 1 0-1.4 0v1.34C10.5 3.6 8.83 5.2 8.1 7.13H6.66V5.35a.6.6 0 0 0-.6-.6h-.3a.6.6 0 0 0-.6.6v1.78H6.6C6.28 7.93 6.1 8.8 6.1 9.7v.8h-1A1.1 1.1 0 0 0 4 11.6V21a1 1 0 0 0 1 1h3.2v-5.5a4 4 0 1 1 8 0V22h3.2a1 1 0 0 0 1-1v-9.4a1.1 1.1 0 0 0 1.1-1.1zM12.3 13.4a2.2 2.2 0 0 1 2.2 2.2V22H10v-6.4a2.2 2.2 0 0 1 2.3-2.2z\" transform=\"translate(-1.3 0)\"/></svg>",
  },
  {
    slug: "masnoon-duas",
    chip: "Daily Life",
    image: "https://images.pexels.com/photos/7249316/pexels-photo-7249316.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center 60%",
    name: "Masnoon Duas",
    tag: "The everyday supplications of the Prophet Muhammad ﷺ.",
    desc: ["Masnoon Duas are the blessed supplications that the Prophet Muhammad ﷺ taught us for every moment of the day — waking up, eating, leaving the home, travelling, sleeping, and much more.", "In this course, students memorize these duas one by one with correct pronunciation, and learn when each dua is said, so the Sunnah becomes a natural part of their daily routine."],
    learn: ["Duas for the morning and evening", "Duas for eating, drinking and daily routines", "Duas for leaving and entering the home", "Duas for travelling, sleeping and waking up", "The meaning of each dua in simple words"],
    who: "Children building their daily Islamic routine, and adults who want to bring the Masnoon duas into their everyday life.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18.6 4.4c-.5-.3-1.2-.1-1.5.4l-1.9 2.9V3.5A1.5 1.5 0 0 0 13.7 2c-.7 0-1.2.4-1.4 1l-1-1.3A1.35 1.35 0 0 0 9.4 1.4L5.2 6.1A4.5 4.5 0 0 0 3.7 9v3.2c0 3 1.8 5.7 4.6 6.9l2.4 1c1 .4 2.1.6 3.2.6 4.1 0 7.1-2.6 7.1-6.4V7.6c0-1.2-.6-2.3-1.7-2.9l-.7-.3zM12.5 7.6l1.8-2.7c.2-.3.7-.4 1-.2.2.2.3.5.1.8l-2 3c-.3.4-.9.3-1.1-.2-.1-.2 0-.5.2-.7z\" opacity=\".95\"/></svg>",
  },
  {
    slug: "salah-namaz",
    chip: "Worship",
    image: "https://images.pexels.com/photos/20784662/pexels-photo-20784662.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center 70%",
    name: "Salah (Namaz)",
    tag: "Learn to pray Salah correctly, step by step.",
    desc: ["Salah is the pillar of a Muslim’s day. In this course, students learn how to perform Namaz properly and completely — from Wudu to the final Salam — following the way of the Prophet Muhammad ﷺ.", "The teacher explains every step in simple words and makes sure the student knows what to recite at each position, so their prayer becomes correct, calm and confident."],
    learn: ["How to perform Wudu correctly", "The complete method of Salah, step by step", "What to recite in Qiyam, Ruku, Sujood and Tashahhud", "The duas after Salah and daily Adhkar", "Common mistakes in prayer — and how to avoid them"],
    who: "Children learning to pray for the first time, and adults who want to correct and perfect their Salah.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2a1 1 0 0 1 1 1c1.9.4 3.3 1.7 3.9 3.4h1.6V4.6A.6.6 0 0 1 19.1 4h.3a.6.6 0 0 1 .6.6v1.8h-.9c.3.7.4 1.4.4 2.1v1H20a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1h-3v-6.2a5 5 0 1 0-10 0V22H4a1 1 0 0 1-1-1V10.5a1 1 0 0 1 1-1h.5v-1c0-.7.15-1.4.42-2.1H4V4.6A.6.6 0 0 1 4.6 4h.3a.6.6 0 0 1 .6.6v1.8h1.6C7.7 4.7 9.1 3.4 11 3a1 1 0 0 1 1-1zm0 10.2a2.8 2.8 0 0 1 2.8 2.8v7H9.2v-7A2.8 2.8 0 0 1 12 12.2z\"/></svg>",
  },
  {
    slug: "islamic-studies",
    chip: "Knowledge",
    image: "https://images.pexels.com/photos/16848960/pexels-photo-16848960.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center",
    name: "Islamic Studies",
    tag: "The essential knowledge every Muslim should know.",
    desc: ["Islamic Studies gives students the essential knowledge of their Deen in an easy, interesting way — the beliefs, worship, stories and teachings that shape a Muslim’s life.", "Lessons are taught in simple language suited to the student’s age, building a strong Islamic foundation alongside their Quran learning."],
    learn: ["The basics of Iman and the articles of faith", "The five pillars of Islam", "Stories of the Prophets", "Daily Sunnah practices and Islamic values", "Good character and love for Allah and His Messenger ﷺ"],
    who: "Kids and adults who want a complete Islamic foundation together with their Quran classes.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 3 1 8.5l11 5.5 9-4.5V15h2V8.5L12 3zM5 12.6V16c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.4l-7 3.5-7-3.5z\"/></svg>",
  },
  {
    slug: "selected-surah-memorization",
    chip: "Memorization",
    image: "https://images.pexels.com/photos/8164735/pexels-photo-8164735.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center 30%",
    name: "Selected Surah Memorization",
    tag: "Memorize important Surahs of the Holy Quran with proper guidance.",
    desc: ["Memorize important Surahs of the Holy Quran with proper guidance. In this course, students memorize selected Surahs step by step — the Surahs that are recited most often in Salah and carry great reward.", "The teacher listens to the student’s recitation in every class, corrects pronunciation, and keeps revising the memorized Surahs so they stay strong in memory."],
    learn: ["Memorizing selected important Surahs, step by step", "Correct pronunciation and Tajweed while memorizing", "Surahs to recite in daily Salah", "Regular revision so memorized Surahs are never forgotten"],
    who: "Kids and adults who want to build a collection of memorized Surahs for their prayers — a perfect step before, or alongside, full Hifz.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4 3h13a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 18.5v-13A2.5 2.5 0 0 1 4 3zm1.5 4.5v9A1.5 1.5 0 0 0 7 18h8.5V6H7A1.5 1.5 0 0 0 5.5 7.5zM12 8.2l.95 1.95 2.15.3-1.55 1.5.35 2.15L12 13.05l-1.9 1.05.35-2.15-1.55-1.5 2.15-.3L12 8.2z\" opacity=\".95\"/></svg>",
  },
  {
    slug: "six-kalimas",
    chip: "Foundation",
    image: "https://images.pexels.com/photos/7249316/pexels-photo-7249316.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center 30%",
    name: "Six Kalimas",
    tag: "Learn all six Kalimas with correct pronunciation and easy explanations.",
    desc: ["The Six Kalimas are the foundational declarations of a Muslim’s faith. Every Muslim child should know them by heart — with correct pronunciation and a simple understanding of what they mean.", "In this course, the teacher teaches each Kalima step by step: first its correct reading, then its memorization, and then its meaning explained in easy words."],
    learn: ["All six Kalimas, memorized one by one", "Correct pronunciation of every word", "The meaning of each Kalima in simple words", "Confidence in the basic beliefs of Islam"],
    who: "Children and new learners of Islam — usually taught alongside Noorani Qaida and Masnoon Duas as part of a child’s foundation.",
    icon: "<span class=\"six\">6</span>",
  },
  {
    slug: "basic-arabic-learning",
    chip: "Language",
    image: "https://images.pexels.com/photos/29183999/pexels-photo-29183999.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center 60%",
    name: "Basic Arabic Learning",
    tag: "Develop basic Arabic reading skills, vocabulary, and understanding.",
    desc: ["Basic Arabic Learning helps students go one step further with the language of the Quran. Students develop basic Arabic reading skills, vocabulary, and understanding in a simple, gradual way.", "It is a gentle introduction to the Arabic language that makes Quran reading easier and opens the door to understanding the Quran directly."],
    learn: ["Arabic reading skills beyond the Qaida level", "Everyday Arabic vocabulary", "Understanding simple Arabic words and sentences", "Words that appear most often in the Holy Quran"],
    who: "Students who can read Arabic and want to start understanding the language of the Quran.",
    icon: "<span class=\"arabic\">أخلاق</span>",
  },
  {
    slug: "seerah",
    chip: "Seerah",
    image: "https://images.pexels.com/photos/20558196/pexels-photo-20558196.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center",
    name: "Seerah of Prophet Muhammad ﷺ",
    tag: "Learn about the beautiful life, teachings, and Sunnah of Prophet Muhammad ﷺ.",
    desc: ["The Seerah is the life story of our beloved Prophet Muhammad ﷺ — his blessed birth, his character, his struggles, his kindness and his teachings. Knowing his life is how we learn to love and follow him.", "In this course, students journey through the Seerah in simple, engaging lessons that build love for the Prophet ﷺ and a desire to follow his Sunnah."],
    learn: ["The blessed life of Prophet Muhammad ﷺ, from birth to his passing", "His character, kindness and noble manners", "The major events of Makkah and Madinah", "His teachings and Sunnah for our daily lives"],
    who: "Kids and adults alike — every Muslim benefits from knowing and loving the life of the Prophet Muhammad ﷺ.",
    icon: "<span class=\"arabic\">محمد ﷺ</span>",
  },
  {
    slug: "islamic-manners-ethics",
    chip: "Character",
    image: "https://images.pexels.com/photos/20785119/pexels-photo-20785119.jpeg?auto=compress&cs=tinysrgb&w=1600",
    position: "center 25%",
    name: "Islamic Manners & Ethics",
    tag: "Learn Islamic manners, good character, Sunnah, and everyday Islamic practices.",
    desc: ["Islam is not only worship — it is beautiful character. In this course, students learn Islamic manners, good character, Sunnah, and everyday Islamic practices in a warm, practical way.", "From respecting parents and teachers to honesty, kindness and cleanliness, these lessons shape the student’s Akhlaq (character) alongside their Quran learning."],
    learn: ["Manners with parents, teachers and elders", "Honesty, kindness and good speech", "The Sunnah manners of eating, sleeping and daily life", "Cleanliness and responsibility", "Building strong Islamic character and Akhlaq"],
    who: "Every student — especially children, whose character is formed by what they learn and practise each day.",
    icon: "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M21.4 10.6c.5-.6.4-1.5-.2-2l-.7-.6a1.4 1.4 0 0 0-2 .2l-1.1 1.3-1-1.1 2.1-2.5c.5-.6.4-1.5-.2-2L17 2.9c-.6-.5-1.5-.4-2 .2L9.9 9.2 8 7.4c-.9-.8-2.3-.6-3 .4L2.2 11a1.6 1.6 0 0 0 .1 2.2l8.5 7.7c1.8 1.6 4.4 1.6 6.2 0l1.6-1.4c.6-.5.6-1.4.1-2-.3-.3-.7-.5-1.1-.4.3-.6.2-1.3-.3-1.8-.4-.4-.9-.5-1.4-.4.3-.6.2-1.3-.3-1.7-.3-.3-.7-.5-1.1-.4l3.3-3.9c.5.5 1.3.5 1.9 0l.7-.6zm-9.9 8.6-6.4-5.8c-.3-.3-.4-.8-.1-1.1l1.6-1.8c.3-.3.8-.4 1.1-.1l4.6 4.2 1.3 1.2c.3.3.4.7.2 1-.3.5-1 .5-1.4.1l-1.2-1-.8.9 1.2 1.1c.4.3.4.9.1 1.2-.3.4-.9.4-1.2.1l-1.2-1.1-.8.9 1.1 1c.4.4.4.9.1 1.3-.3.3-.9.3-1.3 0z\" opacity=\".95\"/></svg>",
  },
];

export const COURSE_MAP: Record<string, Course> = Object.fromEntries(
  COURSES.map((c) => [c.slug, c]),
);

export type Speciality = { title: string; text: string };

// The 12 Additional Specialities, with the client's own wording.
export const ADDITIONAL_SPECIALITIES: Speciality[] = [
  { title: "Live One-to-One Online Classes", text: "Personalized Quran lessons with full teacher attention through live online sessions." },
  { title: "Qualified Male & Female Teachers", text: "Learn from experienced, qualified, and caring Quran teachers." },
  { title: "Classes for Kids & Adults", text: "Quran learning programs specially designed for children and adults of all ages." },
  { title: "Flexible Class Timings", text: "Choose convenient class timings according to your daily routine and time zone." },
  { title: "Islamic Manners & Ethics", text: "Learn Islamic manners, good character, Sunnah, and everyday Islamic practices." },
  { title: "Six Kalimas", text: "Learn all six Kalimas with correct pronunciation and easy explanations." },
  { title: "Selected Surah Memorization", text: "Memorize important Surahs of the Holy Quran with proper guidance." },
  { title: "Basic Arabic Learning", text: "Develop basic Arabic reading skills, vocabulary, and understanding." },
  { title: "Quran Tafseer", text: "Understand the meanings and lessons of Quranic verses through simple explanations." },
  { title: "Seerah of Prophet Muhammad ﷺ", text: "Learn about the beautiful life, teachings, and Sunnah of Prophet Muhammad ﷺ." },
  { title: "Student Progress Monitoring", text: "Regular progress assessments and personalized guidance for every student." },
  { title: "5-Day Absolutely FREE Trial Classes", text: "Experience our online Quran classes with no cost for the first five days." },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  { q: "Are the trial classes really free?", a: "Yes — we offer 5-day absolutely FREE trial classes. You can experience our online Quran classes with no cost for the first five days before deciding anything." },
  { q: "Are the classes one-to-one?", a: "Yes. Every class is a live one-to-one online session, so the teacher gives the student their full, personal attention in every lesson." },
  { q: "Do you have female teachers?", a: "Yes, we have qualified and experienced male and female teachers, so sisters and young children can learn comfortably with a female tutor." },
  { q: "What timings are available?", a: "Class timings are flexible. You choose a time that suits your daily routine and your time zone — we teach students online, worldwide." },
  { q: "How will I know my child's progress?", a: "We monitor every student's progress with regular assessments and personalized guidance, so parents always know how their child is improving." },
  { q: "Which course should my child start with?", a: "Beginners usually start with Noorani Qaida, then move to Quran Reading (Nazra) and Tajweed. During your free trial classes, the teacher will assess the student's level and recommend the right course." },
  { q: "How do I start?", a: "Simply call or WhatsApp us on +92 305 6622104, or fill in the free trial form on the Contact page, and we will arrange your first class." },
  /* Feedback round 7 (13 Nov 2026): fee by class duration + admission,
     from the client's own requirements. No rates are stated here — the
     exact fee is confirmed personally on WhatsApp. */
  { q: "Do the fees differ by class duration?", a: "Yes. The monthly fee depends on the length of each class — 30 minutes, 45 minutes or 1 hour have different fees — and on how many days a week you take classes. The exact monthly prices for 30-minute classes are on the Fee Schedule page. For 45- or 60-minute classes, message us on WhatsApp and we confirm your exact fee before you enrol." },
  { q: "How do I get admission?", a: "Book the 5-day free trial first, then choose your plan on WhatsApp — 30, 45 or 60 minutes per class, on the days that suit you. Once you are satisfied with the trial, your classes start. See the Online Admission page for the full steps." },
];

export type PricingPlan = { id: string; name: string; desc: string; features: string[]; popular?: boolean };
/* Feedback round 7 (13 Nov 2026): plans are now by CLASS DURATION,
   not days per week — the client said the fee must differ by duration
   (30 / 45 / 60 minutes). 45 Minutes is the Popular (middle) card.
   No numeric prices anywhere — the fee line stays "Monthly Fee /
   Confirmed personally on WhatsApp". Days per week (2, 3 or 5) is
   still the family's choice, kept as a feature line on every card. */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "30-min",
    name: "30 Minutes",
    desc: "A focused half-hour lesson — a gentle pace for young children and busy families.",
    features: ["30-Minute Live Class", "1 on 1 Session", "Qualified Male & Female Teachers", "Flexible Timings in Your Time Zone", "Monthly Progress Report", "Choose your days — 2, 3 or 5 days a week", "Free Trial Classes for Students Satisfaction"],
  },
  {
    id: "45-min",
    name: "45 Minutes",
    desc: "Our most chosen lesson length — enough time to learn, revise and practise in every class.",
    features: ["45-Minute Live Class", "1 on 1 Session", "Qualified Male & Female Teachers", "Flexible Timings in Your Time Zone", "Monthly Progress Report", "Choose your days — 2, 3 or 5 days a week", "Free Trial Classes for Students Satisfaction"],
    popular: true,
  },
  {
    id: "1-hour",
    name: "1 Hour",
    desc: "A full hour of learning — ideal for Hifz students and adults who want deeper study.",
    features: ["60-Minute Live Class", "1 on 1 Session", "Qualified Male & Female Teachers", "Flexible Timings in Your Time Zone", "Monthly Progress Report", "Choose your days — 2, 3 or 5 days a week", "Free Trial Classes for Students Satisfaction"],
  },
];

/* Feedback round 16 (13 Nov 2026) — REAL PRICES, as on the
   reference. The user corrected round 15 firmly: the reference
   (equrantutors.com) shows REAL PRICES on its homepage calculator
   and he wants the same — "jo price reference website mein likhi
   hai, wahi price likho". So the fee table now carries the
   reference's prices, per the user's DIRECT instruction. 1-student
   bases are browser-verified live reads (USD + PKR from the parent's
   13 Nov checks; EUR/GBP re-verified 13 Nov 20:53 — EUR €32/44/58/70/38,
   GBP £28/38/50/60/32, which CONFIRMS the earlier read; the video's
   £29/39/51/61/34 was a misread). Multi-student values come from
   the reference's own formula base × students × 0.85 (15% sibling
   discount), verified against the live calculator (USD 2/3 students,
   EUR 2, GBP 2, CAD 4 all match exactly). The plans are the
   REFERENCE'S five — 2/3/4/5 days + Weekend — NOT the client's
   2/3/5/7: the 7-day frequency is DROPPED (no reference price
   exists for it; the client would need to supply a 7-day price to
   bring it back). All plans are 30 minutes per class. */

export type FeeRegion = { id: string; label: string; currency: string; currencyName: string; symbol: string; priceSymbol: string };
/* Browser-verified (parent, 13 Nov 2026): equrantutors.com's dropdown
   is exactly these 5 options, in this order, default USD — USA,
   Canada, Europe, UK, Pakistan. NO Australia. Option text matches
   the reference: "USD ($ US Dollar) - USA". `symbol` is the option
   text; `priceSymbol` is what the price shows (CAD shows "C$" in
   prices, "$" in the option text; PKR shows "Rs. " with a space). */
export const FEE_REGIONS: FeeRegion[] = [
  { id: "US", label: "USA", currency: "USD", currencyName: "US Dollar", symbol: "$", priceSymbol: "$" },
  { id: "CA", label: "Canada", currency: "CAD", currencyName: "Canadian Dollar", symbol: "$", priceSymbol: "C$" },
  { id: "EU", label: "Europe", currency: "EUR", currencyName: "Euro", symbol: "€", priceSymbol: "€" },
  { id: "UK", label: "UK", currency: "GBP", currencyName: "British Pound", symbol: "£", priceSymbol: "£" },
  { id: "PK", label: "Pakistan", currency: "PKR", currencyName: "Pakistani Rupee", symbol: "Rs.", priceSymbol: "Rs. " },
];

export const FEE_STUDENTS = [1, 2, 3, 4];

export type FeeFrequency = { id: string; title: string; classesPerMonth: number; minutesEach: number; popular?: boolean };
/* The REFERENCE'S five plans, as it is — title = plan name + frequency
   ("Foundation 2 Days", "Regular 3 Days", "Fluent 4 Days",
   "Daily / Hifz 5 Days", "Weekend Sat & Sun"). Classes per month =
   days per week × 4 weeks. 3 Days is the Most Popular card (the
   reference's "Most Popular ⭐"). Every plan is 30 minutes per class.
   The 5 Days plan IS the Hifz plan — at $75 it is the highest price,
   which is how "Hifz fee higher" is expressed now (round 15's separate
   Hifz premium card is removed). */
export const FEE_FREQUENCIES: FeeFrequency[] = [
  { id: "2", title: "Foundation 2 Days", classesPerMonth: 8, minutesEach: 30 },
  { id: "3", title: "Regular 3 Days", classesPerMonth: 12, minutesEach: 30, popular: true },
  { id: "4", title: "Fluent 4 Days", classesPerMonth: 16, minutesEach: 30 },
  { id: "5", title: "Daily / Hifz 5 Days", classesPerMonth: 20, minutesEach: 30 },
  { id: "W", title: "Weekend Sat & Sun", classesPerMonth: 8, minutesEach: 30 },
];

/* 1-student base rates, per currency — the reference's prices.
   Order per plan: 2 Days / 3 Days / 4 Days / 5 Days / Weekend.
   USD: 35/48/62/75/40 · EUR: 32/44/58/70/38 · GBP: 28/38/50/60/32
   PKR: 9000/12000/15500/18500/7500 · CAD: 48/65/85/102/55. */
export const FEE_BASE_RATES: Record<string, number> = {
  "US|2": 35, "US|3": 48, "US|4": 62, "US|5": 75, "US|W": 40,
  "EU|2": 32, "EU|3": 44, "EU|4": 58, "EU|5": 70, "EU|W": 38,
  "UK|2": 28, "UK|3": 38, "UK|4": 50, "UK|5": 60, "UK|W": 32,
  "PK|2": 9000, "PK|3": 12000, "PK|4": 15500, "PK|5": 18500, "PK|W": 7500,
  "CA|2": 48, "CA|3": 65, "CA|4": 85, "CA|5": 102, "CA|W": 55,
};

/* Sibling discount factor — 0.85 = 15% off when 2+ students learn
   together. This IS the reference's discount, and it is IN because
   it is how the reference's prices move with students (the user
   explicitly wants prices to change with students). Verified live:
   USD $35 → $60 for 2 students (35 × 2 × 0.85 = 59.5 → 60). */
export const FEE_SIBLING_DISCOUNT_FACTOR = 0.85;

/* Monthly fee = base rate × students × discount factor (2+ students).
   Returns e.g. "$48/mo", "€54/mo", "£28/mo", "Rs. 12,000/mo",
   "C$65/mo". Math.round rounds .5 UP — the reference's own rounding
   for .5 was not observed live, so these five cases are flagged in
   the round-16 change log: EUR 3-student Hifz 178.5→179, GBP
   3-student Fluent 127.5→128, CAD 2-student Regular 110.5→111,
   CAD 2-student Fluent 144.5→145, CAD 2-student Weekend 93.5→94
   (and USD 2-student Hifz 127.5→128). */
export function feeFor(regionId: string, students: number, frequencyId: string): string {
  const base = FEE_BASE_RATES[`${regionId}|${frequencyId}`];
  const region = FEE_REGIONS.find((r) => r.id === regionId) ?? FEE_REGIONS[0];
  const factor = students >= 2 ? FEE_SIBLING_DISCOUNT_FACTOR : 1;
  const amount = Math.round(base * students * factor);
  return `${region.priceSymbol}${amount.toLocaleString("en-US")}/mo`;
}

export type SampleReview = { name: string; role: string; course: string; text: string };

/* Feedback round 10 (13 Nov 2026) — reviews to show how this section
   will look; round 11 (13 Nov 2026): the user DIRECTLY instructed that
   the visible "Sample" labels be removed — let the client check it once,
   she will like it. So the cards carry NO "Sample" badge and the section
   carries NO sample note. The reviews are still samples awaiting the
   client's official reviews — the list lives here as SAMPLE_REVIEWS
   (internal name only, never rendered) so replacement stays a one-file
   change: when the client sends real ones, replace this whole list.
   First names only, no full names, no invented countries or results. */
export const SAMPLE_REVIEWS: SampleReview[] = [
  {
    name: "Amina",
    role: "Parent",
    course: "Hifz-ul-Quran",
    text: "My daughter is memorising the Quran with her teacher, and the one-to-one attention makes all the difference. Her teacher is patient, kind, and she actually looks forward to every class.",
  },
  {
    name: "Bilal",
    role: "Student",
    course: "Tajweed",
    text: "My Tajweed has improved so much since I joined. My teacher corrects every word gently, and the evening timings fit perfectly around my work.",
  },
  {
    name: "Fatima",
    role: "Parent",
    course: "Quran Reading (Nazra)",
    text: "My son reads Nazra on his own now, Alhamdulillah. His female teacher is wonderful with children, and the monthly progress report tells me exactly how he is doing.",
  },
  {
    name: "Omar",
    role: "Student",
    course: "Noorani Qaida",
    text: "I started from zero and the free trial helped me decide. My teacher explains everything slowly and clearly — I never feel rushed in my lesson.",
  },
  {
    name: "Maryam",
    role: "Parent",
    course: "Quran Tafseer",
    text: "My daughter does not just read the Quran now, she understands it. The teacher stays in touch with us, and we always know what she is learning each week.",
  },
  {
    name: "Hassan",
    role: "Student",
    course: "Hifz-ul-Quran",
    text: "Hifz felt impossible before I joined. My teacher gave me a daily plan, revises with me in every class, and my memorisation is steady now, Alhamdulillah.",
  },
  {
    name: "Zainab",
    role: "Parent",
    course: "Quran Reading (Nazra)",
    text: "My young daughter loves her Quran classes — her teacher makes every lesson fun and patient, and she practises her Nazra every day without us asking her to.",
  },
  {
    name: "Ahmed",
    role: "Student",
    course: "Hifz-ul-Quran",
    text: "My Hifz has become steady because every class follows the same rhythm — new lesson, then revision of the old ones. My teacher never lets me fall behind.",
  },
  {
    name: "Sana",
    role: "Parent",
    course: "Noorani Qaida",
    text: "My son was shy and slow to start, but his teacher is so patient with him. He has finished Noorani Qaida and now reads the Quran with confidence, MashaAllah.",
  },
  {
    name: "Yusuf",
    role: "Student",
    course: "Tajweed",
    text: "My pronunciation of the letters was weak before. My teacher worked on my makharij word by word, and now I can hear the difference in my own recitation.",
  },
];
