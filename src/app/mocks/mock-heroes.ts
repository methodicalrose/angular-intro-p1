import { HeroInterface } from '../interfaces/hero-interface';

export const HEROES: HeroInterface[] = [
  { id: 1, name: 'Batman', hero: true, alter: 'Bruce Wayne', bio: 'Fights crime in Gotham city',img: 'https://www.dccomics.com/sites/default/files/GalleryChar_1920x1080_BM_Cv38_54b5d0d1ada864.04916624.jpg' },
  { id: 2, name: 'Spider-Man', hero: true, alter: 'Peter Parker', bio: 'Stops bad dudes in New York', img: 'https://lumiere-a.akamaihd.net/v1/images/usa_spider-man_chi_spider-man_r_d909a17b.png?region=0%2C0%2C600%2C600' },
  { id: 3, name: 'Joker', hero: false, alter: 'Unknown', bio: 'Jokes around', img: 'http://cdn1us.denofgeek.com/sites/denofgeekus/files/2017/08/the-joker-movie-origin-martin-scorsese.jpg' },
  { id: 4, name: 'Venom', hero: false, alter: 'Eddie Brock', bio: 'Tries to get revenge on Spider-Man', img: 'https://i.kym-cdn.com/entries/icons/mobile/000/017/227/venom.jpg' },
  { id: 5, name: 'Green Goblin', hero: false, alter: 'Norman Osborn', bio: 'Developed the equipment used by the other Green Goblins ever since he was exposed to the Goblin Formula. He was also the cause of Gwen Stacy\'s death. He then died soon after, but was soon revived by the formula within him.', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Greengoblin%2C1967.jpg/220px-Greengoblin%2C1967.jpg' },
  { id: 6, name: 'Lex Luthor', hero: false, alter: 'Lex Luthor', bio: 'Bald and rich', img: 'https://vignette.wikia.nocookie.net/thelastson/images/2/26/Lex_Luthor.jpg/revision/latest?cb=20120506094752' },
  { id: 7, name: 'Thor', hero: true, alter: 'Thor', bio: 'Has a hammer', img: 'https://i.stack.imgur.com/BVQ7t.jpg' }
];
