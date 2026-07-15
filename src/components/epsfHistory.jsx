// epsfHistory.jsx
// EPSF-BeniSuef ("El-Kayan" / الكيان) history timeline data.
// Each entry represents one chapter ("objective") of the story: a title,
// the date/period it covers, and a narrative description written in
// English while keeping the warm, storytelling tone of the original text.
//
// Usage example:
//   import epsfHistory from './epsfHistory';
//   epsfHistory.map(obj => <TimelineCard key={obj.id} {...obj} />)

const epsfHistory = [
  {
    id: 3,
    title: "From Inception to the Gap",
    date: "1998 – 2009",
    description:
      "In 1998, a group of ambitious students at the Faculty of Pharmacy took their first steps toward founding a scientific society at Beni Suef University, drawn together by the spirit of one big family and the promise of real, practical benefit. They had felt this spirit firsthand at national Federation events — gatherings that worked like the roots of a great family tree, connecting sister societies across the country. Inspired, they set out to pass that same spirit on to the students who came after them, so the shared benefit would never run dry. They kept at it until 2005, and for a few years after that the society leaned mostly on the occasional trip to stay alive — until 2009, when things quieted almost to a stop. Looking back, this stretch of years earned a name of its own: the Gap."
  },
  {
    id: 4,
    title: "The Awakening",
    date: "2009 – 2011",
    description:
      "In 2009, Ahmed Mamdouh — who would go on to lead the society from 2009 to 2011 — reached out to Islam Sayed, the Federation's president at the time, to track down whatever papers remained from the society's earlier leadership and start building a new generation from scratch. He gathered a handful of students — among them Mohamed El-Badry, Mohamed Yassin, Ahmed Mahmoud El-Qadi, Amr Hamdy, Ahmed Bahaa, Ahmed Rabie, and Ahmed Zakaria — and together they set out to spread the society's ideas and rebuild it from the ground up. There were no clearly defined roles yet, but that didn't stop them: they managed, for the first time, to make the society a full and present member at every national Federation event, starting a new chapter carried forward with more passion, more precision, and more attention to detail — determined not just to hold on to what they'd built, but to raise it to a level beyond even their own ambition."
  },
  {
    id: 5,
    title: "The Beginning of the Emergence into Light",
    date: "2010",
    description:
      "2010 marked the moment the society's work at Beni Suef truly became official. It became a full member of the Federation with a real, influential voice in decision-making, and for the first time it had a proper board with clearly defined roles for everyone. Ahmed Mamdouh served as president, alongside Ahmed Mahmoud El-Qadi (Secretary General), Mohamed El-Badry (Public Relations), Mohamed Yassin (Publicity), Mostafa Hassan (Public Health), Amr Hamdy (Treasurer), and Ahmed Mahmoud Abdel Mawla (Continuing Education) — with Rana Ahmed and Mona Gamal joining as general members. That same year, the society organized its first national event, held at Al-Ahly Club as part of a Federation campaign on diabetes. It also held its very first workshop and its first elections — though without voting cards just yet, a system that would only come later."
  },
  {
    id: 6,
    title: "Proving Their Worth",
    date: "2011",
    description:
      "Small in number but never short on determination, the society's members spent this year proving themselves and putting down deeper roots. They proved it best when they agreed to host the Federation's 11th National Convention in 2011. Ahmed Mamdouh led the organizing effort with his deputy Mohamed El-Badry, while Ibrahim Saad handled the entertainment and Ahmed Mahmoud Abdel Mawla managed communication with attendees; the scientific lectures were overseen by Mohamed Yassin. That year's board — Mostafa Hassan as president, Ahmed Mahmoud El-Qadi as Secretary General, Mohamed Yassin heading professional development as vice president, Rana Ahmed on public health, Ahmed Mahmoud Abdel Mawla on continuing education, Mohamed El-Badry on public relations, Rana Gamal leading the newly formed social and networking committee, Mona Gamal on humanitarian projects in partnership with Resala, Amr Hamdy as treasurer, and Mohamed Aly Kolay on publicity — also ran one of the most successful training courses the society had seen, 'Global Change.'"
  },
  {
    id: 7,
    title: "The Year of Prosperity",
    date: "2012",
    description:
      "Little by little, the society's persistence and hard work began to pay off, and 2012 was where it truly showed. The society launched its first medical convoy, bringing together four doctors for free medical screenings and medication at the Faculty of Pharmacy — an event that let the spirit of family spread and truly show its meaning. Membership grew noticeably, reaching over a hundred active members, and their enthusiasm carried them further: they held 25 events in partnership with Resala, hosted the Federation's LIT (In Leaders Training) course, and ran a major awareness campaign on Hepatitis C called 'Ittihdai' ('Unite'). This was also the year the society printed its first t-shirt, bearing its name — BSPSA, BeniSuef Scientific Pharmaceutical Students' Association. Under the presidency of Ahmed Mahmoud Abdel Mawla — with Ibrahim Emad as Secretary General, Rana Ahmed as treasurer, Youstina Nabil on professional development, Mohamed Aly Kolay on public health, Mohamed El-Qadi on continuing education, Ahmed Galal on organizing and logistics, Abdel Aziz on social and networking, Mina George on student exchange, Rokaia Khedr on humanitarian projects, Remy El-Kiromi on publicity, and Ahmed Saad on public relations — the society organized two trips, to Alexandria and to Wadi El Rayan in Fayoum, and held its first two regional board meetings. By year's end, the society had won second place for Best Scientific Society and Best Professional Development Committee, an award that included recognition for its best event promoting the pharmacist's role, and it made its first appearance at the international conference held in Hurghada that year."
  },
  {
    id: 8,
    title: "Breaking the Record, Entering the Guinness Book",
    date: "2013",
    description:
      "Following that success, 2013 brought a different kind of milestone: the society's members took part in breaking a world record for the largest number of blood-sugar measurements taken in one event — around 1,000 readings — held at Mall of Arabia in Cairo. That year's team, led by president Mohamed Aly Kolay with Ahmed Galal as treasurer, Mohamed Masoud on organizing and logistics, Abdel Aziz El-Sabbagh on public relations, Hisham Mahdy on publicity, Ola Magdy on humanitarian projects, Mohamed El-Qadi on professional development, Petro Saleeb on continuing education, Osama Nabil on public health, and Marco Wahid on student exchange, also brought home third place in the global patient-counseling competition."
  },
  {
    id: 9,
    title: "One Name, One Identity",
    date: "2014",
    description:
      "'Can we hold on to our identity, or will we erase our great history just to change a name?' — that was the question on everyone's mind, not only in Beni Suef, when the Federation decided to unify the names of all its societies nationwide under a single identity, to make their impact felt across the whole country rather than governorate by governorate. Until then, the society had gone by BSPSA; this was the year it became BeniSuef-EPSF. True to form, this ambitious group of young people never let circumstances stop them from proving their worth. Under the presidency of Osama Nabil — with Abdel Aziz El-Sabbagh as treasurer, Mahmoud Abdel Ghaffar on organizing and logistics, Marco Wahid on student exchange, Alaa Hamdy on humanitarian projects, Mahasen Hedeib on professional development, Remy Ahmed on public health, Ahmed Tarek on continuing education, and Hisham Mahdy on public relations — the society launched its first 'Sohbet Sneya' project under the humanitarian committee, reaching out to the blind, orphans, the elderly, and other underserved groups to affirm that they hold the very same rights to life as everyone else. Events with playful names like 'Havana Battaga' and 'The Great Chinese Camp' welcomed new members and broke down barriers between them, and by year's end the society had earned third place for Best Society at the Federation level."
  },
  {
    id: 10,
    title: "The Beginning of the Incredibles",
    date: "2015",
    description:
      "From this year on, the society's members earned themselves a nickname — the Incredibles — for outdoing themselves and pushing past every obstacle 2015 threw at them. The clearest proof was 'Fair Job,' a national event the society hosted in partnership with pharmaceutical companies, where Faculty of Pharmacy students competed with their CVs for a shot at a training placement. Getting university approval proved so difficult that the event was postponed more than once, but the team never gave up, and it finally went ahead at the City Star hall. Its overwhelming success drew many more members closer to the society and, for the first time since its revival, gave the role of Secretary General real stability and a creative touch of its own. That year's board — Hisham Mahdy as president, Mayssara Saudi as Secretary General, Ahmed Tarek as treasurer, Ola Magdy on organizing and logistics, Hadeer Aly on student exchange (the first time this committee truly came into its own, running more than one event), Abdullah Salah on publicity, Remy Ahmed on humanitarian projects, Mahasen Hedeib on professional development, Aly Ahmed on public health, Marco Wahid on continuing education, and Mayssara Saber on public relations — proved a simple truth: every achievement starts as a decision made from within. All it takes is believing you can."
  },
  {
    id: 11,
    title: "We Will Remain Here",
    date: "2016",
    description:
      "A quiet, stubborn drive still beats inside every member — the pull toward accomplishing what once seemed impossible, the spark in your eyes and the flutter in your chest when you finally do it. Even when the society lost the ability to operate from inside the Faculty of Pharmacy itself, this great entity refused to be broken by the news; if anything, it became fuel to prove, once again, that they could stand firm against any circumstance and keep working. In 2016, the society picked up two more Best Event awards — one from the public health committee, one from humanitarian projects — and placed fourth for Best Scientific Society at the Federation level, among many other accomplishments that year, all standing as proof of sheer will and the ability to prove yourself no matter what stands in the way. Leading the society that year was Mayssara Saber as president, with Mayssara Saudi serving a second consecutive year as Secretary General — perfecting the role and adding even more documentation and creativity to how the society's history was recorded. Alongside them: Abdullah Salah as treasurer, Mohamed Emad on organizing and logistics, Abdullah Abu Ghaleb on student exchange, Ibrahim Sultan on publicity, Walaa Ahmed on humanitarian projects, Tasneem Mostafa on professional development (who went on to compete fiercely for this seat at the Federation level by year's end, ready to carry the society's voice even further), Mazen Hisham on public health, Ibrahim Aly on continuing education, Hadeer Aly on internal relations, and Shireen Zakaria on external public relations — who won Best External Relations Committee that year."
  },
  {
    id: 12,
    title: "A Year of Boundless Creativity",
    date: "2017",
    description:
      "If 2016 was about standing firm, 2017 was about letting the imagination loose. The society launched two brand-new long-term projects, 'Food Ninja' and 'Belong,' each carrying the society's spirit into new corners of student life — and 'Food Ninja' rewarded that ambition with the Federation's award for Best Additional Event. It was, by every measure, one of the most creative and award-filled years the society had ever seen, and the role of Secretary General kept growing stronger still, with members becoming ever more fluent in the society's own bylaw. That year's board carried the family forward: Mayssara Saber as president, Mayssara Saudi still steering as Secretary General, Abdullah Salah as treasurer, Mazen Hisham on public health, Tasneem Mostafa on professional development, Ibrahim Aly on continuing education, Abdullah Abu Ghaleb on student exchange, Walaa Ahmed on humanitarian projects, Hadeer Aly on internal relations, Shireen Zakaria on external public relations, Ibrahim Sultan on publicity, and Mohamed Emad on organizing and logistics — proof that creativity, once it takes root in a place like this, only grows louder with time."
  },
  {
    id: 13,
    title: "Standing Firm Once More",
    date: "2018",
    description:
      "The society began 2018 on solid footing — a strong wave of returning members, a strong federation ranking behind them, and former board members still close by at the faculty. It was a year of building systems meant to last: a new education framework, a clearer internal working process among board members, regular advisory meetings, and an 'Internal Passenger' system letting members join a third team to broaden their experience. The society also began offering real public services at its additional events — blood pressure and blood sugar screenings among them — ran its very first roof-building convoy, strengthened the once-fragile foundations of internal relations and marketing, reached out online to other student groups under the banner 'Under the Same Sky,' revised its bylaw once again, and celebrated its 21st anniversary across two days, one formal and one entirely for fun. Leading the way that year: Mayssara Saudi as president, Nahed Nagm as Secretary General, Shireen Zakaria as treasurer, Esraa Ahmed on public health, Amira Sayed on professional development, Hisham Khaled on continuing education, Mena Ayman stepping in as acting student exchange officer (and leading humanitarian projects in her own right), Mahmoud Omar on internal relations, Mazen Hisham on external public relations, Ibrahim Aly on media and publications, and Mahmoud Safwat on organizing and logistics — a team that turned instability into another chapter of quiet, determined progress."
  },
  {
    id: 14,
    title: "Health Humans and a New Generation Rising",
    date: "2019",
    description:
      "Every so often, a single event comes to define an entire year — and for the society, 2019 belonged to 'Health Humans.' It drew Egyptian national television coverage and more than 300 pharmacy students through its doors, and along the way it trained a whole generation of members in the very skills they'd one day need to lead the society themselves. It wasn't the only milestone: the society added new perks for its members, including a discounts card, and launched 'El-Qonsol,' the first-ever additional event run under the student exchange committee, alongside educational workshops held throughout the year. The bylaw was revisited and revised once more, the society's identity was refreshed across its official papers and social media, and the external public relations committee split in two — publicity and external relations — to better carry the society's voice outward. A formal checklist was introduced to guarantee every additional event met the society's own standard of quality, new development programs for members launched under names like Jumanji, Local LIT, and The Incredibles Camp, and a 'Cluster System' let event coordinators from across every committee finally work as one to bring events to life. In recognition of everything they had given over the years, Hisham Mahdy and Mayssara Saber were granted lifetime honorary membership. That year's board — Mazen Hisham as president, Mostafa Mohamed Abdel Karim as Secretary General, Mahmoud Ahmed Azmy as treasurer, Sameh Sayed on public health, Sara Mostafa on professional development, Mena Ayman on continuing education, Heba Ahmed Farouk on student exchange, Nada Mohamed Salah on humanitarian projects, Mahmoud Omar on internal relations, Youssef Mohamed on external relations, Mazen Hisham doubling up on media and publications, and Esraa Ahmed on organizing and logistics — closed out a decade of growth by proving, once and for all, that this society had truly come of age."
  },
  {
    id: 15,
    title: "The Journey Continues",
    date: "Beyond",
    description:
      "This isn't the end of the story, because whatever comes next will always outweigh everything that came before it. This place will keep on thriving — through its achievements and through the people who build them — sending out into the world people who aren't just ready to face the job market, but ready to face life itself, with every one of its challenges, people capable of proving themselves no matter what. And the question will always remain: how do they manage all of this without missing a single lecture? How do you split your time between your studies and chasing what you love? How do you do all this work with a full heart and total contentment? Come find out for yourself — you'll walk away with people, memories, and experience that stay with you long after the last page. This place, and the people in it, will remain etched not only in memory, but in the heart too."
  }
];

export default epsfHistory;