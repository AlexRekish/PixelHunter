export const NUMBER_OF_QUESTION = 10;
export const NUMBER_OF_STATS = 3;

export const paramPoints = [
  `wrong`,
  `correct`,
  `slow`,
  `fast`,
  `unknown`
];

export const Points = Object.freeze({
  CORRECT: 100,
  FAST: 50,
  SLOW: -50,
  LIVES: 50
});

export const AnswerStatus = Object.freeze({
  WRONG: `wrong`,
  CORRECT: `correct`,
  SLOW: `slow`,
  FAST: `fast`,
  UNKNOWN: `unknown`
});

export const GameMode = Object.freeze({
  ONE_IMAGE: `tinder-like`,
  TWO_IMAGES: `two-of-two`,
  THREE_IMAGES: `one-of-three`
});

// начальное состояние игры.

export const initialState = Object.freeze({
  question: 0,
  time: 30,
  lives: 3,
  stats: {
    answers: new Array(NUMBER_OF_QUESTION).fill(AnswerStatus.UNKNOWN),
    rightAnswers: 0,
    score: 0,
    result: ``,
    speedBonus: {
      count: 0,
      points: 0
    },
    livesBonus: {
      count: 0,
      points: 0
    },
    slowPenalty: {
      count: 0,
      points: 0
    },
    totalScore: 0
  }
});

export const currentState = ``;

export const pictures = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

// описание режимов игры

export const game = [
  {
    type: GameMode.ONE_IMAGE,
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        'image': {
          url: pictures.paintings[1],
          width: 705,
          height: 455
        },
        'type': `paint`
      }
    ]
  },
  {
    type: GameMode.TWO_IMAGES,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        'image': {
          url: pictures.paintings[2],
          width: 468,
          height: 458
        },
        'type': `paint`
      },
      {
        'image': {
          url: pictures.photos[0],
          width: 468,
          height: 458
        },
        'type': `photo`
      }
    ]
  },
  {
    type: GameMode.THREE_IMAGES,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        'image': {
          url: pictures.photos[1],
          width: 304,
          height: 455
        },
        'type': `photo`
      },
      {
        'image': {
          url: pictures.photos[2],
          width: 304,
          height: 455
        },
        'type': `photo`
      },
      {
        'image': {
          url: pictures.paintings[0],
          width: 304,
          height: 455
        },
        'type': `paint`
      }
    ],
  }
];

export const statUnit = {
  stats: [],
  lives: 2
};

// функция генерации массива с вопросами

export const questions = () => new Array(NUMBER_OF_QUESTION).fill().map(() => game[Math.floor(Math.random() * game.length)]);

export const downloadedQuestion = [];
