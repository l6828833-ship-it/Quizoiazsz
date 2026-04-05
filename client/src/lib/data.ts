import type { Category, Quiz } from "@shared/types";

export const categories: Category[] = [
  {
    id: "music",
    name: "Music",
    emoji: "\u{1F3B5}",
    description: "Test your knowledge of songs, artists, and music history.",
    quizCount: 1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
  },
  {
    id: "sports",
    name: "Sports",
    emoji: "\u{1F3C6}",
    description: "From football to Formula 1 — how well do you know sports?",
    quizCount: 1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1461896836934-bd45ba8fcfdb?w=800&q=80",
  },
  {
    id: "geography",
    name: "Geography",
    emoji: "\u{1F30D}",
    description: "Countries, capitals, and continents — explore the world.",
    quizCount: 1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
  },
  {
    id: "history",
    name: "History",
    emoji: "\u{1F3DB}",
    description:
      "Journey through time with questions about civilizations and events.",
    quizCount: 1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80",
  },
  {
    id: "science",
    name: "Science",
    emoji: "\u{1F52C}",
    description: "Physics, chemistry, biology — challenge your inner scientist.",
    quizCount: 1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    id: "movies-tv",
    name: "Movies & TV",
    emoji: "\u{1F3AC}",
    description: "Lights, camera, trivia! How well do you know the screen?",
    quizCount: 1,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    id: "maths-logic",
    name: "Maths & Logic",
    emoji: "\u{1F4D0}",
    description: "Numbers, patterns, and puzzles for the analytical mind.",
    quizCount: 0,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    id: "pub-quiz",
    name: "Pub Quiz",
    emoji: "\u{1F37A}",
    description: "Classic pub quiz trivia — a mix of everything!",
    quizCount: 0,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1575037614876-c38a4ca44f9e?w=800&q=80",
  },
  {
    id: "brain-training",
    name: "Brain Training",
    emoji: "\u{1F9E0}",
    description: "Sharpen your mind with cognitive challenges.",
    quizCount: 0,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  },
  {
    id: "visual-puzzles",
    name: "Visual Puzzles",
    emoji: "\u{1F441}",
    description: "Can you spot the difference? Visual challenges await.",
    quizCount: 0,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
  },
];

export const quizzes: Quiz[] = [
  {
    id: "quiz-1",
    slug: "ultimate-music-legends-quiz",
    title: "Can You Score 10/10 On This Music Legends Quiz?",
    description:
      "From The Beatles to Beyonce — only true music fans can ace this quiz.",
    categoryId: "music",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    questionCount: 10,
    playCount: 12400,
    status: "PUBLISHED",
    createdAt: "2026-03-26",
    questions: [
      {
        id: "q1-1",
        questionText:
          "Which band released the album 'Abbey Road' in 1969?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Making of Abbey Road",
        factLabContent:
          "Abbey Road is the eleventh studio album by the English rock band The Beatles, released on 26 September 1969 by Apple Records. Named after the street in London where EMI Studios (now Abbey Road Studios) is located, the album was the last one recorded by the band, although Let It Be was the last to be released. The iconic cover photograph, taken by Iain Macmillan, shows the four band members walking across the zebra crossing outside the studio. This image has become one of the most famous and imitated in music history. The album features some of the band's most beloved songs, including 'Come Together', 'Something', and 'Here Comes the Sun'. George Harrison's contributions on this album were particularly notable, with 'Something' becoming the first Harrison composition to appear as an A-side of a Beatles single. The medley on side two of the album is considered one of the greatest achievements in pop music production.",
        answers: [
          { id: "q1-1-a", text: "The Rolling Stones", isCorrect: false, voteCount: 800 },
          { id: "q1-1-b", text: "The Beatles", isCorrect: true, voteCount: 9200 },
          { id: "q1-1-c", text: "Led Zeppelin", isCorrect: false, voteCount: 600 },
          { id: "q1-1-d", text: "Pink Floyd", isCorrect: false, voteCount: 1100 },
        ],
      },
      {
        id: "q1-2",
        questionText: "What is the best-selling album of all time?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Thriller's Record-Breaking Success",
        factLabContent:
          "Michael Jackson's Thriller, released on November 30, 1982, holds the Guinness World Record as the best-selling album of all time, with estimated sales of 66 to 70 million copies worldwide. Produced by Quincy Jones, the album spawned seven singles, an unprecedented number at the time. The title track's groundbreaking music video, directed by John Landis, revolutionized the medium and was the first music video to be inducted into the National Film Registry by the Library of Congress. Thriller dominated the 1984 Grammy Awards, winning a record-breaking eight awards in a single night. The album spent 37 weeks at number one on the Billboard 200 chart and remained on the chart for over two years. Its success transcended racial barriers in the music industry, helping to break down the color barrier on MTV, which had been criticized for not featuring enough Black artists.",
        answers: [
          { id: "q1-2-a", text: "Back in Black — AC/DC", isCorrect: false, voteCount: 1500 },
          { id: "q1-2-b", text: "The Dark Side of the Moon — Pink Floyd", isCorrect: false, voteCount: 1800 },
          { id: "q1-2-c", text: "Thriller — Michael Jackson", isCorrect: true, voteCount: 8500 },
          { id: "q1-2-d", text: "Rumours — Fleetwood Mac", isCorrect: false, voteCount: 900 },
        ],
      },
      {
        id: "q1-3",
        questionText: "Which artist has won the most Grammy Awards in history?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Grammy Queen",
        factLabContent:
          "Beyonce holds the record for the most Grammy Awards won by any artist in history, surpassing the previous record held by conductor Georg Solti. Throughout her career, both as a solo artist and as a member of Destiny's Child, Beyonce has accumulated an extraordinary collection of Grammy wins across multiple categories. Her wins span genres from pop and R&B to dance and music video categories, reflecting her versatility as an artist. Beyonce's album Lemonade was a cultural phenomenon that pushed boundaries in both music and visual storytelling. Her live performances at the Grammy Awards have become legendary events in their own right, often generating more discussion than the awards themselves. The Recording Academy has recognized her contributions to music consistently over more than two decades of her career.",
        answers: [
          { id: "q1-3-a", text: "Beyonce", isCorrect: true, voteCount: 7200 },
          { id: "q1-3-b", text: "Adele", isCorrect: false, voteCount: 2100 },
          { id: "q1-3-c", text: "Taylor Swift", isCorrect: false, voteCount: 2400 },
          { id: "q1-3-d", text: "Stevie Wonder", isCorrect: false, voteCount: 1800 },
        ],
      },
      {
        id: "q1-4",
        questionText: "Which instrument does a pianist play?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Piano Through History",
        factLabContent:
          "The piano, short for pianoforte, was invented by Bartolomeo Cristofori of Padua, Italy, around the year 1700. The instrument's full Italian name, pianoforte, means 'soft-loud', referring to its ability to produce notes at different volumes depending on how hard the keys are pressed. This was a revolutionary improvement over the harpsichord, which could only play at one volume. The modern piano has 88 keys, spanning over seven octaves, and contains thousands of individual parts. The instrument has been central to Western classical music, jazz, blues, rock, and pop. Famous pianists throughout history include Ludwig van Beethoven, Frederic Chopin, Franz Liszt, and in modern times, artists like Elton John, Billy Joel, and Alicia Keys have brought the piano to popular music audiences worldwide.",
        answers: [
          { id: "q1-4-a", text: "Guitar", isCorrect: false, voteCount: 200 },
          { id: "q1-4-b", text: "Drums", isCorrect: false, voteCount: 150 },
          { id: "q1-4-c", text: "Piano", isCorrect: true, voteCount: 11000 },
          { id: "q1-4-d", text: "Violin", isCorrect: false, voteCount: 300 },
        ],
      },
      {
        id: "q1-5",
        questionText: "Which country did reggae music originate from?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Roots of Reggae",
        factLabContent:
          "Reggae music originated in Jamaica in the late 1960s, evolving from earlier Jamaican music styles including ska and rocksteady. The genre is characterized by its distinctive rhythmic style, with the accent on the off-beat, often referred to as the 'skank'. Bob Marley, Peter Tosh, and Jimmy Cliff are among the most internationally recognized reggae artists who helped bring the genre to a global audience. Reggae is deeply connected to the Rastafari movement, which originated in Jamaica in the 1930s. The music often carries messages of social justice, resistance against oppression, and spiritual themes. In 2018, UNESCO added reggae music to its list of Intangible Cultural Heritage of Humanity, recognizing its contribution to international discourse on issues of injustice, resistance, love, and humanity. The genre has influenced countless other music styles worldwide, from punk rock to hip-hop.",
        answers: [
          { id: "q1-5-a", text: "Cuba", isCorrect: false, voteCount: 1400 },
          { id: "q1-5-b", text: "Jamaica", isCorrect: true, voteCount: 8800 },
          { id: "q1-5-c", text: "Trinidad", isCorrect: false, voteCount: 900 },
          { id: "q1-5-d", text: "Brazil", isCorrect: false, voteCount: 600 },
        ],
      },
      {
        id: "q1-6",
        questionText: "What was Elvis Presley's first number-one hit?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The King's First Crown",
        factLabContent:
          "Elvis Presley's first number-one hit on the Billboard pop chart was 'Heartbreak Hotel', released in January 1956. The song was inspired by a newspaper article about a man who had taken his own life, leaving a note that read 'I walk a lonely street.' Songwriter Tommy Durden showed the article to Mae Boren Axton, who then co-wrote the song. Elvis recorded it at RCA Victor's studios in Nashville on January 10, 1956. The song spent eight weeks at number one and became one of the best-selling singles of 1956. It marked the beginning of Elvis's unprecedented dominance of the pop charts throughout the late 1950s and into the 1960s. Elvis would go on to have 18 number-one singles on the Billboard Hot 100, making him one of the most successful chart artists in history. His impact on popular culture extended far beyond music, influencing fashion, film, and youth culture worldwide.",
        answers: [
          { id: "q1-6-a", text: "Heartbreak Hotel", isCorrect: true, voteCount: 6800 },
          { id: "q1-6-b", text: "Hound Dog", isCorrect: false, voteCount: 3200 },
          { id: "q1-6-c", text: "Jailhouse Rock", isCorrect: false, voteCount: 1800 },
          { id: "q1-6-d", text: "Love Me Tender", isCorrect: false, voteCount: 1500 },
        ],
      },
      {
        id: "q1-7",
        questionText: "How many strings does a standard guitar have?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Six-String Wonder",
        factLabContent:
          "A standard guitar has six strings, typically tuned to E-A-D-G-B-E from lowest to highest pitch. This tuning, known as standard tuning, has been the default for guitars since the early 19th century. The guitar's origins can be traced back thousands of years, with stringed instruments appearing in ancient civilizations across the Middle East, Asia, and Europe. The modern six-string guitar evolved primarily in Spain during the 18th and 19th centuries. Antonio de Torres Jurado is often credited with developing the form of the classical guitar as we know it today. While six strings is standard, guitars can have different numbers of strings. Twelve-string guitars double each string for a richer sound, seven-string guitars add a lower bass string popular in metal music, and bass guitars typically have four strings. The guitar is one of the most popular instruments in the world, central to genres from classical to rock, jazz, blues, and country.",
        answers: [
          { id: "q1-7-a", text: "4", isCorrect: false, voteCount: 500 },
          { id: "q1-7-b", text: "5", isCorrect: false, voteCount: 400 },
          { id: "q1-7-c", text: "6", isCorrect: true, voteCount: 10200 },
          { id: "q1-7-d", text: "8", isCorrect: false, voteCount: 600 },
        ],
      },
      {
        id: "q1-8",
        questionText: "Which pop star is known as the 'Queen of Pop'?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Madonna's Reign",
        factLabContent:
          "Madonna Louise Ciccone, known simply as Madonna, has been referred to as the 'Queen of Pop' since the 1980s. Born on August 16, 1958, in Bay City, Michigan, she moved to New York City in 1977 with just $35 in her pocket. Her self-titled debut album in 1983 launched a career that would span over four decades. Madonna has sold more than 300 million records worldwide, making her the best-selling female music artist of all time according to Guinness World Records. She is known for constantly reinventing her image and pushing boundaries in music, fashion, and culture. Her influence extends beyond music into film, fashion, and social activism. Albums like Like a Virgin, True Blue, Ray of Light, and Confessions on a Dance Floor each represented distinct artistic eras. Madonna's impact on popular culture is immeasurable, and she paved the way for generations of female artists who followed.",
        answers: [
          { id: "q1-8-a", text: "Lady Gaga", isCorrect: false, voteCount: 2100 },
          { id: "q1-8-b", text: "Madonna", isCorrect: true, voteCount: 8400 },
          { id: "q1-8-c", text: "Whitney Houston", isCorrect: false, voteCount: 1200 },
          { id: "q1-8-d", text: "Rihanna", isCorrect: false, voteCount: 1600 },
        ],
      },
      {
        id: "q1-9",
        questionText: "Which musical features the song 'Defying Gravity'?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Magic of Wicked",
        factLabContent:
          "Defying Gravity is the iconic Act One finale from the musical Wicked, which premiered on Broadway in 2003. Written by Stephen Schwartz, the song is performed by the character Elphaba as she embraces her identity and literally takes flight on a broomstick. Wicked tells the untold story of the witches of Oz, serving as a prequel to The Wizard of Oz. The musical is based on Gregory Maguire's 1995 novel of the same name. Idina Menzel originated the role of Elphaba on Broadway, and her performance of Defying Gravity became legendary. The song has become an anthem of empowerment and self-acceptance, resonating with audiences far beyond the theatre world. Wicked became one of the highest-grossing musicals in Broadway history, and the 2024 film adaptation brought the story to an even wider audience. The musical explores themes of friendship, prejudice, and the nature of good and evil.",
        answers: [
          { id: "q1-9-a", text: "Hamilton", isCorrect: false, voteCount: 1400 },
          { id: "q1-9-b", text: "The Phantom of the Opera", isCorrect: false, voteCount: 1800 },
          { id: "q1-9-c", text: "Wicked", isCorrect: true, voteCount: 7600 },
          { id: "q1-9-d", text: "Les Miserables", isCorrect: false, voteCount: 900 },
        ],
      },
      {
        id: "q1-10",
        questionText: "What genre of music did Louis Armstrong help popularize?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Satchmo and the Birth of Jazz",
        factLabContent:
          "Louis Armstrong, affectionately known as 'Satchmo' or 'Pops', was one of the most influential figures in the history of jazz music. Born on August 4, 1901, in New Orleans, Louisiana, Armstrong grew up in poverty but found his calling through music. He learned to play the cornet at the Colored Waif's Home for Boys and went on to revolutionize jazz with his virtuosic trumpet playing and distinctive gravelly singing voice. Armstrong's innovations in the 1920s, particularly his Hot Five and Hot Seven recordings, established the importance of the jazz soloist and helped transform jazz from a collective ensemble music into an art form that showcased individual expression. His influence extended far beyond jazz, affecting virtually all forms of American popular music. Songs like 'What a Wonderful World', 'Hello, Dolly!', and 'When the Saints Go Marching In' became timeless classics. Armstrong was also one of the first African American entertainers to cross over to wide popularity with white audiences.",
        answers: [
          { id: "q1-10-a", text: "Blues", isCorrect: false, voteCount: 2200 },
          { id: "q1-10-b", text: "Jazz", isCorrect: true, voteCount: 8100 },
          { id: "q1-10-c", text: "Rock and Roll", isCorrect: false, voteCount: 800 },
          { id: "q1-10-d", text: "Country", isCorrect: false, voteCount: 400 },
        ],
      },
    ],
  },
  {
    id: "quiz-2",
    slug: "world-history-ultimate-quiz",
    title: "Can You Pass This World History Quiz?",
    description:
      "From ancient civilizations to modern events — test your knowledge of history's most pivotal moments.",
    categoryId: "history",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80",
    questionCount: 10,
    playCount: 8200,
    status: "PUBLISHED",
    createdAt: "2026-03-26",
    questions: [
      {
        id: "q2-1",
        questionText: "In what year did World War II end?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The End of World War II",
        factLabContent:
          "World War II officially ended in 1945, but the exact date depends on the theatre of war. In Europe, Germany surrendered on May 8, 1945 — a day now commemorated as Victory in Europe Day (VE Day). However, the war in the Pacific continued for several more months. Japan formally surrendered on September 2, 1945, aboard the USS Missouri in Tokyo Bay, following the devastating atomic bombings of Hiroshima on August 6 and Nagasaki on August 9. This date is known as Victory over Japan Day (VJ Day). The total death toll of World War II is estimated at between 70 and 85 million people, making it the deadliest conflict in human history. The war fundamentally reshaped the global political order, leading to the Cold War, the formation of the United Nations, and the beginning of the decolonization movement across Asia and Africa.",
        answers: [
          { id: "q2-1-a", text: "1943", isCorrect: false, voteCount: 800 },
          { id: "q2-1-b", text: "1944", isCorrect: false, voteCount: 1200 },
          { id: "q2-1-c", text: "1945", isCorrect: true, voteCount: 9100 },
          { id: "q2-1-d", text: "1946", isCorrect: false, voteCount: 600 },
        ],
      },
      {
        id: "q2-2",
        questionText: "Who was the first President of the United States?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Father of His Country",
        factLabContent:
          "George Washington served as the first President of the United States from 1789 to 1797. Before becoming president, Washington was the commanding general of the Continental Army during the American Revolutionary War, leading the colonies to victory against the British Empire. Born on February 22, 1732, in Westmoreland County, Virginia, Washington was a planter, military officer, and statesman. He presided over the Constitutional Convention in 1787, which drafted the United States Constitution. Washington's leadership style set many precedents for the office of the presidency, including the tradition of serving only two terms, which was later codified in the 22nd Amendment. He is often referred to as the 'Father of His Country' for his central role in the founding of the United States. Washington's farewell address warned against political parties and foreign entanglements, advice that would echo through American politics for centuries.",
        answers: [
          { id: "q2-2-a", text: "Thomas Jefferson", isCorrect: false, voteCount: 1100 },
          { id: "q2-2-b", text: "George Washington", isCorrect: true, voteCount: 9500 },
          { id: "q2-2-c", text: "John Adams", isCorrect: false, voteCount: 800 },
          { id: "q2-2-d", text: "Benjamin Franklin", isCorrect: false, voteCount: 1400 },
        ],
      },
      {
        id: "q2-3",
        questionText: "The Great Wall of China was primarily built to protect against invasions from which direction?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Great Wall's Purpose",
        factLabContent:
          "The Great Wall of China was primarily built to protect the Chinese states and empires against raids and invasions from the northern steppe nomads, including the Mongols, Xiongnu, and various Turkic peoples. Construction of various walls began as early as the 7th century BC, with the most well-known sections built during the Ming Dynasty (1368-1644). The wall stretches over 13,000 miles when including all its branches and is the longest structure ever built by humans. Contrary to popular myth, the Great Wall is not visible from space with the naked eye. The wall served not only as a military fortification but also as a border control system, allowing the imposition of duties on goods transported along the Silk Road. Guard towers, barracks, and signaling capabilities through smoke or fire allowed rapid communication across vast distances. The wall represents one of the most impressive architectural feats in human history.",
        answers: [
          { id: "q2-3-a", text: "The North", isCorrect: true, voteCount: 7800 },
          { id: "q2-3-b", text: "The South", isCorrect: false, voteCount: 1200 },
          { id: "q2-3-c", text: "The East", isCorrect: false, voteCount: 900 },
          { id: "q2-3-d", text: "The West", isCorrect: false, voteCount: 1100 },
        ],
      },
      {
        id: "q2-4",
        questionText: "Which ancient civilization built the pyramids at Giza?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Builders of the Pyramids",
        factLabContent:
          "The pyramids at Giza were built by the ancient Egyptians during the Old Kingdom period, approximately 4,500 years ago. The three main pyramids were built as tombs for the pharaohs Khufu (also known as Cheops), Khafre, and Menkaure. The Great Pyramid of Khufu, the largest of the three, was the tallest man-made structure in the world for over 3,800 years. It was originally 481 feet tall and is estimated to contain about 2.3 million stone blocks, each weighing an average of 2.5 tons. Contrary to the popular myth that slaves built the pyramids, archaeological evidence suggests that the workers were paid laborers, many of whom were skilled craftsmen. Workers' villages discovered near the pyramids reveal a well-organized labor force that was fed, housed, and even received medical care. The precision of the pyramids' construction continues to amaze engineers and architects today.",
        answers: [
          { id: "q2-4-a", text: "Romans", isCorrect: false, voteCount: 600 },
          { id: "q2-4-b", text: "Greeks", isCorrect: false, voteCount: 800 },
          { id: "q2-4-c", text: "Egyptians", isCorrect: true, voteCount: 9800 },
          { id: "q2-4-d", text: "Persians", isCorrect: false, voteCount: 500 },
        ],
      },
      {
        id: "q2-5",
        questionText: "In which year did the Berlin Wall fall?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Fall of the Berlin Wall",
        factLabContent:
          "The Berlin Wall fell on November 9, 1989, marking one of the most significant events of the 20th century. The wall had divided Berlin into East and West since August 13, 1961, serving as a physical symbol of the Iron Curtain that separated the communist Eastern Bloc from the democratic West during the Cold War. The wall's fall was triggered by a series of political changes in Eastern Europe and a miscommunication by East German government spokesman Gunter Schabowski, who announced at a press conference that travel restrictions would be lifted 'immediately, without delay.' Thousands of East Berliners flooded to the wall's checkpoints, and overwhelmed border guards eventually opened the gates. The scenes of jubilant Germans from both sides celebrating atop the wall were broadcast worldwide. The fall of the Berlin Wall led to German reunification on October 3, 1990, and symbolized the end of the Cold War era.",
        answers: [
          { id: "q2-5-a", text: "1987", isCorrect: false, voteCount: 900 },
          { id: "q2-5-b", text: "1989", isCorrect: true, voteCount: 8600 },
          { id: "q2-5-c", text: "1991", isCorrect: false, voteCount: 1800 },
          { id: "q2-5-d", text: "1985", isCorrect: false, voteCount: 700 },
        ],
      },
      {
        id: "q2-6",
        questionText: "Who was the leader of the Soviet Union during most of World War II?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Stalin's Wartime Leadership",
        factLabContent:
          "Joseph Stalin led the Soviet Union throughout most of World War II, from the German invasion in June 1941 until the war's end in 1945. Stalin had been the General Secretary of the Communist Party since 1922 and effectively ruled the Soviet Union as a dictator. When Nazi Germany launched Operation Barbarossa on June 22, 1941, Stalin was reportedly shocked despite numerous intelligence warnings. However, he quickly assumed the role of Supreme Commander-in-Chief of the Soviet Armed Forces. Under his leadership, the Soviet Union suffered enormous losses — an estimated 27 million Soviet citizens died during the war, the highest toll of any nation. Key Soviet victories at Stalingrad and Kursk turned the tide of the war on the Eastern Front. Stalin's wartime conferences with Churchill and Roosevelt at Tehran and Yalta shaped the post-war world order. Despite his role in defeating Nazi Germany, Stalin's regime was responsible for millions of deaths through purges, forced collectivization, and the Gulag system.",
        answers: [
          { id: "q2-6-a", text: "Vladimir Lenin", isCorrect: false, voteCount: 1500 },
          { id: "q2-6-b", text: "Joseph Stalin", isCorrect: true, voteCount: 8200 },
          { id: "q2-6-c", text: "Nikita Khrushchev", isCorrect: false, voteCount: 1100 },
          { id: "q2-6-d", text: "Leon Trotsky", isCorrect: false, voteCount: 900 },
        ],
      },
      {
        id: "q2-7",
        questionText: "The Renaissance period began in which country?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Birth of the Renaissance",
        factLabContent:
          "The Renaissance, meaning 'rebirth' in French, began in Italy in the 14th century, primarily in the city-states of Florence, Venice, and Rome. This cultural movement marked the transition from the medieval period to the early modern age and was characterized by a renewed interest in classical Greek and Roman art, literature, and philosophy. Florence, under the patronage of the powerful Medici family, became the epicenter of Renaissance art and culture. Artists like Leonardo da Vinci, Michelangelo, and Raphael created masterpieces that continue to define Western art. The Renaissance also saw major advances in science, with figures like Galileo Galilei challenging established views of the universe. The invention of the printing press by Johannes Gutenberg around 1440 helped spread Renaissance ideas across Europe. The movement gradually spread from Italy to the rest of Europe, influencing art, architecture, politics, science, and literature for centuries to come.",
        answers: [
          { id: "q2-7-a", text: "France", isCorrect: false, voteCount: 2100 },
          { id: "q2-7-b", text: "England", isCorrect: false, voteCount: 800 },
          { id: "q2-7-c", text: "Italy", isCorrect: true, voteCount: 8400 },
          { id: "q2-7-d", text: "Spain", isCorrect: false, voteCount: 700 },
        ],
      },
      {
        id: "q2-8",
        questionText: "Which ship sank on its maiden voyage in 1912?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Titanic Disaster",
        factLabContent:
          "The RMS Titanic sank in the early morning hours of April 15, 1912, during its maiden voyage from Southampton to New York City. The ship struck an iceberg at 11:40 PM on April 14 in the North Atlantic Ocean. Of the estimated 2,224 passengers and crew aboard, more than 1,500 died, making it one of the deadliest peacetime maritime disasters in history. The Titanic was the largest ship afloat at the time and was widely considered 'unsinkable' due to its advanced safety features, including watertight compartments. However, the iceberg caused damage to enough compartments that the ship's fate was sealed. The disaster led to major improvements in maritime regulations, including the requirement for sufficient lifeboats for all passengers, the establishment of the International Ice Patrol, and improvements in wireless communication protocols. The wreck was discovered on the ocean floor in 1985 by a joint American-French expedition led by Robert Ballard.",
        answers: [
          { id: "q2-8-a", text: "Lusitania", isCorrect: false, voteCount: 1200 },
          { id: "q2-8-b", text: "Titanic", isCorrect: true, voteCount: 9600 },
          { id: "q2-8-c", text: "Britannic", isCorrect: false, voteCount: 800 },
          { id: "q2-8-d", text: "Olympic", isCorrect: false, voteCount: 400 },
        ],
      },
      {
        id: "q2-9",
        questionText: "Who discovered America in 1492?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Columbus's Voyage",
        factLabContent:
          "Christopher Columbus, an Italian explorer sailing under the Spanish flag, reached the Americas on October 12, 1492, landing on an island in the Bahamas that he named San Salvador. While Columbus is traditionally credited with 'discovering' America, it is important to note that millions of indigenous people already lived throughout the Americas, and Norse explorer Leif Erikson had reached North America around 1000 AD, nearly 500 years before Columbus. Columbus made four voyages across the Atlantic Ocean between 1492 and 1504, exploring the Caribbean, Central America, and South America. He never realized he had reached a continent previously unknown to Europeans, believing until his death that he had found a western route to Asia. Columbus's voyages initiated the widespread European exploration and colonization of the Americas, a process that had profound and often devastating consequences for indigenous populations through disease, displacement, and violence.",
        answers: [
          { id: "q2-9-a", text: "Christopher Columbus", isCorrect: true, voteCount: 8800 },
          { id: "q2-9-b", text: "Amerigo Vespucci", isCorrect: false, voteCount: 1800 },
          { id: "q2-9-c", text: "Ferdinand Magellan", isCorrect: false, voteCount: 900 },
          { id: "q2-9-d", text: "Vasco da Gama", isCorrect: false, voteCount: 600 },
        ],
      },
      {
        id: "q2-10",
        questionText: "The French Revolution began in which year?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Dawn of Revolution",
        factLabContent:
          "The French Revolution began in 1789 with the storming of the Bastille on July 14, a date now celebrated as France's national day. The revolution was driven by widespread discontent with the monarchy, economic hardship, and the influence of Enlightenment ideas about democracy and individual rights. King Louis XVI had called the Estates-General in May 1789 to address the country's financial crisis, but the meeting quickly spiraled into a revolutionary movement. The Declaration of the Rights of Man and of the Citizen, adopted in August 1789, established fundamental principles of human rights and democratic governance. The revolution went through several phases, from the constitutional monarchy period to the radical Reign of Terror under Robespierre, during which thousands were executed by guillotine. The revolution ultimately led to the rise of Napoleon Bonaparte and fundamentally transformed French society, abolishing feudalism and establishing principles of citizenship and inalienable rights that influenced democratic movements worldwide.",
        answers: [
          { id: "q2-10-a", text: "1776", isCorrect: false, voteCount: 2200 },
          { id: "q2-10-b", text: "1789", isCorrect: true, voteCount: 7800 },
          { id: "q2-10-c", text: "1799", isCorrect: false, voteCount: 1400 },
          { id: "q2-10-d", text: "1815", isCorrect: false, voteCount: 600 },
        ],
      },
    ],
  },
  {
    id: "quiz-3",
    slug: "science-genius-quiz",
    title: "Only 5% of People Can Score 10/10 On This Science Quiz",
    description:
      "Physics, chemistry, biology — prove you are a true science genius.",
    categoryId: "science",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    questionCount: 10,
    playCount: 15600,
    status: "PUBLISHED",
    createdAt: "2026-03-27",
    questions: [
      {
        id: "q3-1",
        questionText: "What is the chemical symbol for water?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Molecule of Life",
        factLabContent:
          "Water, with the chemical formula H2O, is the most abundant substance on Earth's surface and is essential for all known forms of life. Each water molecule consists of two hydrogen atoms covalently bonded to one oxygen atom. Water covers approximately 71% of the Earth's surface, mostly in oceans and other large bodies of water. The unique properties of water, including its high specific heat capacity, surface tension, and ability to dissolve many substances, make it crucial for biological processes. Water is the only common substance that exists naturally in all three states of matter — solid (ice), liquid (water), and gas (steam) — at temperatures normally found on Earth. The human body is approximately 60% water by weight, and even a small decrease in hydration can significantly affect physical and cognitive performance. Scientists searching for extraterrestrial life often focus on finding water as a key indicator of potential habitability.",
        answers: [
          { id: "q3-1-a", text: "HO2", isCorrect: false, voteCount: 800 },
          { id: "q3-1-b", text: "H2O", isCorrect: true, voteCount: 10500 },
          { id: "q3-1-c", text: "OH", isCorrect: false, voteCount: 400 },
          { id: "q3-1-d", text: "H2O2", isCorrect: false, voteCount: 1200 },
        ],
      },
      {
        id: "q3-2",
        questionText: "What planet is known as the Red Planet?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Mars: The Red Planet",
        factLabContent:
          "Mars is known as the Red Planet due to the iron oxide (rust) that covers much of its surface, giving it a distinctive reddish appearance visible even from Earth. Mars is the fourth planet from the Sun and the second-smallest planet in our solar system, after Mercury. The planet has been a subject of human fascination for centuries and is currently the focus of multiple space exploration missions. NASA's Perseverance rover, which landed in February 2021, is searching for signs of ancient microbial life. Mars has the largest volcano in the solar system, Olympus Mons, which stands about 13.6 miles high — nearly three times the height of Mount Everest. The planet also features Valles Marineris, a system of canyons that stretches over 2,500 miles long. Mars has two small moons, Phobos and Deimos, which are thought to be captured asteroids. Multiple space agencies and private companies, including SpaceX, have plans for eventual human missions to Mars.",
        answers: [
          { id: "q3-2-a", text: "Venus", isCorrect: false, voteCount: 600 },
          { id: "q3-2-b", text: "Mars", isCorrect: true, voteCount: 10200 },
          { id: "q3-2-c", text: "Jupiter", isCorrect: false, voteCount: 400 },
          { id: "q3-2-d", text: "Saturn", isCorrect: false, voteCount: 300 },
        ],
      },
      {
        id: "q3-3",
        questionText: "What is the speed of light in a vacuum (approximately)?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Universal Speed Limit",
        factLabContent:
          "The speed of light in a vacuum is approximately 299,792,458 meters per second, or roughly 186,000 miles per second. This speed, denoted by the letter 'c' in physics equations, is considered the universal speed limit — nothing with mass can travel at or faster than the speed of light according to Einstein's theory of special relativity. Light from the Sun takes about 8 minutes and 20 seconds to reach Earth. The concept of the speed of light has been central to physics since the early 20th century, when Albert Einstein published his special theory of relativity in 1905, establishing the famous equation E=mc2. This equation shows that energy and mass are interchangeable, with the speed of light squared as the conversion factor. The speed of light also defines the light-year, a unit of distance used in astronomy equal to the distance light travels in one year — approximately 5.88 trillion miles.",
        answers: [
          { id: "q3-3-a", text: "150,000 km/s", isCorrect: false, voteCount: 1200 },
          { id: "q3-3-b", text: "300,000 km/s", isCorrect: true, voteCount: 8400 },
          { id: "q3-3-c", text: "500,000 km/s", isCorrect: false, voteCount: 900 },
          { id: "q3-3-d", text: "1,000,000 km/s", isCorrect: false, voteCount: 600 },
        ],
      },
      {
        id: "q3-4",
        questionText: "What is the powerhouse of the cell?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Mitochondria: Cellular Energy Factories",
        factLabContent:
          "Mitochondria are often referred to as the 'powerhouse of the cell' because they generate most of the cell's supply of adenosine triphosphate (ATP), the molecule used as the primary energy currency in cells. Each cell can contain hundreds to thousands of mitochondria, depending on the cell's energy needs. Muscle cells and heart cells, which require large amounts of energy, contain particularly high numbers of mitochondria. Mitochondria have their own DNA, separate from the cell's nuclear DNA, which supports the endosymbiotic theory — the idea that mitochondria were once free-living bacteria that were engulfed by ancestral eukaryotic cells billions of years ago. Mitochondrial DNA is inherited exclusively from the mother, making it useful for tracing maternal lineage in genetic studies. Beyond energy production, mitochondria play roles in cell signaling, cellular differentiation, cell death, and maintaining control of the cell cycle and cell growth. Dysfunction of mitochondria has been linked to numerous diseases and the aging process.",
        answers: [
          { id: "q3-4-a", text: "Nucleus", isCorrect: false, voteCount: 1800 },
          { id: "q3-4-b", text: "Ribosome", isCorrect: false, voteCount: 900 },
          { id: "q3-4-c", text: "Mitochondria", isCorrect: true, voteCount: 9200 },
          { id: "q3-4-d", text: "Golgi apparatus", isCorrect: false, voteCount: 600 },
        ],
      },
      {
        id: "q3-5",
        questionText: "What gas do plants absorb from the atmosphere during photosynthesis?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Photosynthesis and Carbon Dioxide",
        factLabContent:
          "Plants absorb carbon dioxide (CO2) from the atmosphere during photosynthesis, a process that converts light energy into chemical energy stored in glucose. During photosynthesis, plants use sunlight, water from the soil, and carbon dioxide from the air to produce glucose and oxygen. The chemical equation for photosynthesis is 6CO2 + 6H2O + light energy yields C6H12O6 + 6O2. This process occurs primarily in the leaves, where chlorophyll — the green pigment in chloroplasts — captures light energy. Photosynthesis is fundamental to life on Earth for two reasons: it produces the oxygen that most organisms need to breathe, and it forms the base of virtually all food chains. Without photosynthesis, the atmosphere would have very little oxygen, and complex life as we know it could not exist. Plants also play a crucial role in the global carbon cycle, absorbing approximately 25% of human-produced carbon dioxide emissions, making forests and other plant ecosystems vital in mitigating climate change.",
        answers: [
          { id: "q3-5-a", text: "Oxygen", isCorrect: false, voteCount: 2100 },
          { id: "q3-5-b", text: "Nitrogen", isCorrect: false, voteCount: 800 },
          { id: "q3-5-c", text: "Carbon Dioxide", isCorrect: true, voteCount: 8800 },
          { id: "q3-5-d", text: "Hydrogen", isCorrect: false, voteCount: 500 },
        ],
      },
      {
        id: "q3-6",
        questionText: "What is the largest organ in the human body?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Skin: Our Largest Organ",
        factLabContent:
          "The skin is the largest organ in the human body, covering an average area of about 20 square feet (1.85 square meters) in adults and weighing approximately 8 pounds (3.6 kilograms). The skin consists of three main layers: the epidermis (outer layer), the dermis (middle layer), and the hypodermis (deepest layer). It serves multiple vital functions, including protecting internal organs from physical damage, pathogens, and ultraviolet radiation. The skin also plays a crucial role in temperature regulation through sweating and blood vessel dilation or constriction. It contains millions of nerve endings that allow us to sense touch, pressure, temperature, and pain. The skin produces vitamin D when exposed to sunlight, which is essential for bone health and immune function. Skin cells are constantly being renewed — the average person sheds about 30,000 to 40,000 dead skin cells every hour, replacing the entire outer layer of skin approximately every two to four weeks.",
        answers: [
          { id: "q3-6-a", text: "Liver", isCorrect: false, voteCount: 2400 },
          { id: "q3-6-b", text: "Brain", isCorrect: false, voteCount: 1200 },
          { id: "q3-6-c", text: "Skin", isCorrect: true, voteCount: 7800 },
          { id: "q3-6-d", text: "Lungs", isCorrect: false, voteCount: 1600 },
        ],
      },
      {
        id: "q3-7",
        questionText: "What is the atomic number of hydrogen?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Hydrogen: Element Number One",
        factLabContent:
          "Hydrogen has an atomic number of 1, meaning it has one proton in its nucleus. It is the lightest and most abundant element in the universe, making up approximately 75% of all normal matter by mass. Hydrogen was first recognized as a distinct element by Henry Cavendish in 1766, and its name comes from the Greek words 'hydro' (water) and 'genes' (forming), literally meaning 'water-former'. In its most common form, a hydrogen atom consists of just one proton and one electron, making it the simplest atom in existence. Hydrogen is the fuel that powers stars, including our Sun, through nuclear fusion — a process where hydrogen atoms combine to form helium, releasing enormous amounts of energy. On Earth, hydrogen is rarely found in its pure form; it is usually bonded with other elements, most commonly with oxygen in water. Hydrogen fuel cells are being developed as a clean energy source for vehicles and power generation, producing only water as a byproduct.",
        answers: [
          { id: "q3-7-a", text: "1", isCorrect: true, voteCount: 9400 },
          { id: "q3-7-b", text: "2", isCorrect: false, voteCount: 1200 },
          { id: "q3-7-c", text: "4", isCorrect: false, voteCount: 600 },
          { id: "q3-7-d", text: "8", isCorrect: false, voteCount: 400 },
        ],
      },
      {
        id: "q3-8",
        questionText: "What force keeps us on the ground?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Understanding Gravity",
        factLabContent:
          "Gravity is the fundamental force that keeps us on the ground and governs the motion of celestial bodies throughout the universe. Sir Isaac Newton first described gravity mathematically in his 1687 work Principia Mathematica, formulating the law of universal gravitation. According to Newton, every object with mass attracts every other object with mass, with the force being proportional to the product of their masses and inversely proportional to the square of the distance between them. Albert Einstein later refined our understanding of gravity with his general theory of relativity in 1915, describing gravity not as a force but as a curvature of spacetime caused by mass and energy. On Earth, gravity accelerates objects at approximately 9.8 meters per second squared. Without gravity, our atmosphere would drift away into space, water would not flow, and life as we know it would be impossible. Gravity also causes tides through the gravitational pull of the Moon and Sun on Earth's oceans.",
        answers: [
          { id: "q3-8-a", text: "Magnetism", isCorrect: false, voteCount: 800 },
          { id: "q3-8-b", text: "Friction", isCorrect: false, voteCount: 600 },
          { id: "q3-8-c", text: "Gravity", isCorrect: true, voteCount: 10800 },
          { id: "q3-8-d", text: "Inertia", isCorrect: false, voteCount: 400 },
        ],
      },
      {
        id: "q3-9",
        questionText: "What is the hardest natural substance on Earth?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "Diamond: Nature's Hardest Material",
        factLabContent:
          "Diamond is the hardest known natural substance on Earth, scoring a perfect 10 on the Mohs hardness scale. Diamonds are formed deep within the Earth's mantle under extreme pressure and temperature conditions, typically at depths of 150 to 200 kilometers below the surface. They are brought to the surface through volcanic eruptions in structures called kimberlite pipes. Diamonds are composed entirely of carbon atoms arranged in a crystal structure called diamond cubic, where each carbon atom is bonded to four other carbon atoms in a tetrahedral arrangement. This structure gives diamond its exceptional hardness and thermal conductivity. While diamonds are famous as gemstones in jewelry, approximately 80% of mined diamonds are used for industrial purposes, including cutting, drilling, grinding, and polishing. Synthetic diamonds, first produced in the 1950s, are now widely used in industry and increasingly in jewelry. Despite their hardness, diamonds can be cleaved along certain crystallographic planes, a property used by gem cutters to shape rough diamonds into brilliant gemstones.",
        answers: [
          { id: "q3-9-a", text: "Quartz", isCorrect: false, voteCount: 1400 },
          { id: "q3-9-b", text: "Diamond", isCorrect: true, voteCount: 9200 },
          { id: "q3-9-c", text: "Titanium", isCorrect: false, voteCount: 1800 },
          { id: "q3-9-d", text: "Obsidian", isCorrect: false, voteCount: 800 },
        ],
      },
      {
        id: "q3-10",
        questionText: "How many bones are in the adult human body?",
        mediaType: "NONE",
        mediaUrl: null,
        factLabTitle: "The Human Skeleton",
        factLabContent:
          "The adult human body contains 206 bones, though babies are born with approximately 270 bones. The difference is because many bones fuse together during childhood and adolescence. The skeleton serves several crucial functions: it provides structural support for the body, protects vital organs (such as the skull protecting the brain and the ribcage protecting the heart and lungs), enables movement through its connection with muscles and joints, produces blood cells in the bone marrow, and stores minerals like calcium and phosphorus. The smallest bone in the human body is the stapes (stirrup bone) in the middle ear, measuring just 2-3 millimeters, while the largest is the femur (thighbone), which can be about a quarter of a person's total height. Bones are living tissue that constantly remodels itself throughout life. The entire skeleton is replaced approximately every 10 years through a process of bone resorption and formation. Maintaining bone health through adequate calcium intake, vitamin D, and weight-bearing exercise is essential for preventing osteoporosis.",
        answers: [
          { id: "q3-10-a", text: "186", isCorrect: false, voteCount: 1200 },
          { id: "q3-10-b", text: "206", isCorrect: true, voteCount: 8600 },
          { id: "q3-10-c", text: "226", isCorrect: false, voteCount: 1800 },
          { id: "q3-10-d", text: "256", isCorrect: false, voteCount: 900 },
        ],
      },
    ],
  },
];

// Helper functions
export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}

export function getQuizzesByCategory(categoryId: string): Quiz[] {
  return quizzes.filter((q) => q.categoryId === categoryId && q.status === "PUBLISHED");
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getAllPublishedQuizzes(): Quiz[] {
  return quizzes.filter((q) => q.status === "PUBLISHED");
}
