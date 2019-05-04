import { Card } from '../classes/Card'
import * as cardImages from './cardImages'

const cardsObjects = {
  // Spades
  aceClubs: new Card('01c', cardImages.aceClubs, 1),
  aceDiamonds: new Card('01d', cardImages.aceDiamonds, 1),
  aceHearts: new Card('01h', cardImages.aceHearts, 1),
  aceSpades: new Card('01s', cardImages.aceSpades, 1),

  // Numbers
  twoClubs: new Card('02c', cardImages.twoClubs, 2),
  twoDiamonds: new Card('02d', cardImages.twoDiamonds, 2),
  twoHearts: new Card('02h', cardImages.twoHearts, 2),
  twoSpades: new Card('02s', cardImages.twoSpades, 2),

  threeClubs: new Card('03c', cardImages.threeClubs, 3),
  threeDiamonds: new Card('03d', cardImages.threeDiamonds, 3),
  threeHearts: new Card('03h', cardImages.threeHearts, 3),
  threeSpades: new Card('03s', cardImages.threeSpades, 3),

  fourClubs: new Card('04c', cardImages.fourClubs, 4),
  fourDiamonds: new Card('04d', cardImages.fourDiamonds, 4),
  fourHearts: new Card('04h', cardImages.fourHearts, 4),
  fourSpades: new Card('04s', cardImages.fourSpades, 4),

  fiveClubs: new Card('05c', cardImages.fiveClubs, 5),
  fiveDiamonds: new Card('05d', cardImages.fiveDiamonds, 5),
  fiveHearts: new Card('05h', cardImages.fiveHearts, 5),
  fiveSpades: new Card('05s', cardImages.fiveSpades, 5),

  sixClubs: new Card('06c', cardImages.sixClubs, 6),
  sixDiamonds: new Card('06d', cardImages.sixDiamonds, 6),
  sixHearts: new Card('06h', cardImages.sixHearts, 6),
  sixSpades: new Card('06s', cardImages.sixSpades, 6),

  sevenClubs: new Card('07c', cardImages.sevenClubs, 7),
  sevenDiamonds: new Card('07d', cardImages.sevenDiamonds, 7),
  sevenHearts: new Card('07h', cardImages.sevenHearts, 7),
  sevenSpades: new Card('07s', cardImages.sevenSpades, 7),

  eightClubs: new Card('08c', cardImages.eightClubs, 8),
  eightDiamonds: new Card('08d', cardImages.eightDiamonds, 8),
  eightHearts: new Card('08h', cardImages.eightHearts, 8),
  eightSpades: new Card('08s', cardImages.eightSpades, 8),

  nineClubs: new Card('09c', cardImages.nineClubs, 9),
  nineDiamonds: new Card('09d', cardImages.nineDiamonds, 9),
  nineHearts: new Card('09h', cardImages.nineHearts, 9),
  nineSpades: new Card('09s', cardImages.nineSpades, 9),

  tenClubs: new Card('10c', cardImages.tenClubs, 10),
  tenDiamonds: new Card('10d', cardImages.tenDiamonds, 10),
  tenHearts: new Card('10h', cardImages.tenHearts, 10),
  tenSpades: new Card('10s', cardImages.tenSpades, 10),

  // Jack
  jackClubs: new Card('11c', cardImages.jackClubs, 11),
  jackDiamonds: new Card('11d', cardImages.jackDiamonds, 11),
  jackHearts: new Card('11h', cardImages.jackHearts, 11),
  jackSpades: new Card('11s', cardImages.jackSpades, 11),

  // Queen
  queenClubs: new Card('12c', cardImages.queenClubs, 12),
  queenDiamonds: new Card('12d', cardImages.queenDiamonds, 12),
  queenHearts: new Card('12h', cardImages.queenHearts, 12),
  queenSpades: new Card('12s', cardImages.queenSpades, 12),

  // King
  kingClubs: new Card('13c', cardImages.kingClubs, 13),
  kingDiamonds: new Card('13d', cardImages.kingDiamonds, 13),
  kingHearts: new Card('13h', cardImages.kingHearts, 13),
  kingSpades: new Card('13s', cardImages.kingSpades, 13)
}

const cardList = [
  cardsObjects.aceClubs,
  cardsObjects.aceDiamonds,
  cardsObjects.aceHearts,
  cardsObjects.aceSpades,
  cardsObjects.twoClubs,
  cardsObjects.twoDiamonds,
  cardsObjects.twoHearts,
  cardsObjects.twoSpades,
  cardsObjects.threeClubs,
  cardsObjects.threeDiamonds,
  cardsObjects.threeHearts,
  cardsObjects.threeSpades,
  cardsObjects.fourClubs,
  cardsObjects.fourDiamonds,
  cardsObjects.fourHearts,
  cardsObjects.fourSpades,
  cardsObjects.fiveClubs,
  cardsObjects.fiveDiamonds,
  cardsObjects.fiveHearts,
  cardsObjects.fiveSpades,
  cardsObjects.sixClubs,
  cardsObjects.sixDiamonds,
  cardsObjects.sixHearts,
  cardsObjects.sixSpades,
  cardsObjects.sevenClubs,
  cardsObjects.sevenDiamonds,
  cardsObjects.sevenHearts,
  cardsObjects.sevenSpades,
  cardsObjects.eightClubs,
  cardsObjects.eightDiamonds,
  cardsObjects.eightHearts,
  cardsObjects.eightSpades,
  cardsObjects.nineClubs,
  cardsObjects.nineDiamonds,
  cardsObjects.nineHearts,
  cardsObjects.nineSpades,
  cardsObjects.tenClubs,
  cardsObjects.tenDiamonds,
  cardsObjects.tenHearts,
  cardsObjects.tenSpades,
  cardsObjects.jackClubs,
  cardsObjects.jackDiamonds,
  cardsObjects.jackHearts,
  cardsObjects.jackSpades,
  cardsObjects.queenClubs,
  cardsObjects.queenDiamonds,
  cardsObjects.queenHearts,
  cardsObjects.queenSpades,
  cardsObjects.kingClubs,
  cardsObjects.kingDiamonds,
  cardsObjects.kingHearts,
  cardsObjects.kingSpades
]

export default cardList
