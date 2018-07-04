export const NUMBER_OF_QUESTION = 10;
export const NUMBER_OF_STATS = 3;

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
  ONE_IMAGE: `oneImage`,
  TWO_IMAGES: `twoImages`,
  THREE_IMAGES: `threeImages`
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
    mode: GameMode.ONE_IMAGE,
    description: `Угадай, фото или рисунок?`,
    images: 1,
    params: [
      {
        type: `paint`,
        src: pictures.paintings[1]
      }
    ],
    framesize: {
      width: 705,
      height: 455
    }
  },
  {
    mode: GameMode.TWO_IMAGES,
    description: `Угадайте для каждого изображения фото или рисунок?`,
    images: 2,
    params: [
      {
        type: `paint`,
        src: pictures.paintings[2]
      },
      {
        type: `photo`,
        src: pictures.photos[0]
      }
    ],
    framesize: {
      width: 468,
      height: 458
    }
  },
  {
    mode: GameMode.THREE_IMAGES,
    description: `Найдите рисунок среди изображений`,
    images: 3,
    params: [
      {
        type: `photo`,
        src: pictures.photos[1]
      },
      {
        type: `photo`,
        src: pictures.photos[2]
      },
      {
        type: `paint`,
        src: pictures.paintings[0]
      }
    ],
    framesize: {
      width: 304,
      height: 455
    }
  }
];

// функция генерации массива с вопросами

export const questions = () => new Array(NUMBER_OF_QUESTION).fill().map(() => game[Math.floor(Math.random() * game.length)]);
