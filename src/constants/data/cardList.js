import { Card } from '../../classes/Card'
import * as cardImages from './cardImages'

const cardsObjects = {
  // Spades
  aceClubs: new Card('01c', cardImages.aceClubs, 1, 'Ace of Clubs'),
  aceDiamonds: new Card('01d', cardImages.aceDiamonds, 1, 'Ace of Diamonds'),
  aceHearts: new Card('01h', cardImages.aceHearts, 1, 'Ace of Hearts'),
  aceSpades: new Card('01s', cardImages.aceSpades, 1, 'Ace of Spades'),

  // Numbers
  twoClubs: new Card('02c', cardImages.twoClubs, 2, 'Two of Clubs'),
  twoDiamonds: new Card('02d', cardImages.twoDiamonds, 2, 'Two of Diamonds'),
  twoHearts: new Card('02h', cardImages.twoHearts, 2, 'Two of Hearts'),
  twoSpades: new Card('02s', cardImages.twoSpades, 2, 'Two of Spades'),

  threeClubs: new Card('03c', cardImages.threeClubs, 3, 'Three of Clubs'),
  threeDiamonds: new Card(
    '03d',
    cardImages.threeDiamonds,
    3,
    'Three of Diamonds'
  ),
  threeHearts: new Card('03h', cardImages.threeHearts, 3, 'Three of Hearts'),
  threeSpades: new Card('03s', cardImages.threeSpades, 3, 'Three of Spades'),

  fourClubs: new Card('04c', cardImages.fourClubs, 4, 'Four of Clubs'),
  fourDiamonds: new Card('04d', cardImages.fourDiamonds, 4, 'Four of Diamonds'),
  fourHearts: new Card('04h', cardImages.fourHearts, 4, 'Four of Hearts'),
  fourSpades: new Card('04s', cardImages.fourSpades, 4, 'Four of Spades'),

  fiveClubs: new Card('05c', cardImages.fiveClubs, 5, 'Five of Clubs'),
  fiveDiamonds: new Card('05d', cardImages.fiveDiamonds, 5, 'Five of Diamonds'),
  fiveHearts: new Card('05h', cardImages.fiveHearts, 5, 'Five of Hearts'),
  fiveSpades: new Card('05s', cardImages.fiveSpades, 5, 'Five of Spades'),

  sixClubs: new Card('06c', cardImages.sixClubs, 6, 'Six of Clubs'),
  sixDiamonds: new Card('06d', cardImages.sixDiamonds, 6, 'Six of Diamonds'),
  sixHearts: new Card('06h', cardImages.sixHearts, 6, 'Six of Hearts'),
  sixSpades: new Card('06s', cardImages.sixSpades, 6, 'Six of Spades'),

  sevenClubs: new Card('07c', cardImages.sevenClubs, 7, 'Seven of Clubs'),
  sevenDiamonds: new Card(
    '07d',
    cardImages.sevenDiamonds,
    7,
    'Seven of Diamonds'
  ),
  sevenHearts: new Card('07h', cardImages.sevenHearts, 7, 'Seven of Hearts'),
  sevenSpades: new Card('07s', cardImages.sevenSpades, 7, 'Seven of Spades'),

  eightClubs: new Card('08c', cardImages.eightClubs, 8, 'Eight of Clubs'),
  eightDiamonds: new Card(
    '08d',
    cardImages.eightDiamonds,
    8,
    'Eight of Diamonds'
  ),
  eightHearts: new Card('08h', cardImages.eightHearts, 8, 'Eight of Hearts'),
  eightSpades: new Card('08s', cardImages.eightSpades, 8, 'Eight of Spades'),

  nineClubs: new Card('09c', cardImages.nineClubs, 9, 'Nine of Clubs'),
  nineDiamonds: new Card('09d', cardImages.nineDiamonds, 9, 'Nine of Diamonds'),
  nineHearts: new Card('09h', cardImages.nineHearts, 9, 'Nine of Hearts'),
  nineSpades: new Card('09s', cardImages.nineSpades, 9, 'Nine of Spades'),

  tenClubs: new Card('10c', cardImages.tenClubs, 10, 'Ten Clubs'),
  tenDiamonds: new Card('10d', cardImages.tenDiamonds, 10, 'Ten Diamonds'),
  tenHearts: new Card('10h', cardImages.tenHearts, 10, 'Ten Hearts'),
  tenSpades: new Card('10s', cardImages.tenSpades, 10, 'Ten Spades'),

  // Jack
  jackClubs: new Card('11c', cardImages.jackClubs, 10, 'Jack of Clubs'),
  jackDiamonds: new Card(
    '11d',
    cardImages.jackDiamonds,
    10,
    'Jack of Diamonds'
  ),
  jackHearts: new Card('11h', cardImages.jackHearts, 10, 'Jack of Hearts'),
  jackSpades: new Card('11s', cardImages.jackSpades, 10, 'Jack of Spades'),

  // Queen
  queenClubs: new Card('12c', cardImages.queenClubs, 10, 'Queen of Clubs'),
  queenDiamonds: new Card(
    '12d',
    cardImages.queenDiamonds,
    10,
    'Queen of Diamonds'
  ),
  queenHearts: new Card('12h', cardImages.queenHearts, 10, 'Queen of Hearts'),
  queenSpades: new Card('12s', cardImages.queenSpades, 10, 'Queen of Spades'),

  // King
  kingClubs: new Card('13c', cardImages.kingClubs, 10, 'King of Clubs'),
  kingDiamonds: new Card(
    '13d',
    cardImages.kingDiamonds,
    10,
    'King of Diamonds'
  ),
  kingHearts: new Card('13h', cardImages.kingHearts, 10, 'King of Hearts'),
  kingSpades: new Card('13s', cardImages.kingSpades, 10, 'King of Spades')
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
