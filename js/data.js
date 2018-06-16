export const NUMBER_OF_QUESTION = 10;
export const points = Object.freeze({
  CORRECT: 100,
  FAST: 50,
  SLOW: -50,
  LIVES: 50
});

// начальное состояние игры. Скорее всего заменю на класс <<< !!!!

export const initialState = Object.freeze({
  question: 0,
  time: 30,
  lives: 3,
  stats: {
    answers: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`],
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

// воспользуюсь JSON пока не нашел нормального способа глубокого клонирования объекта. Возможно реализую через наследование  <<< !!!!

export const currentState = JSON.parse(JSON.stringify(initialState));

export const answerStatus = {
  wrong: `wrong`,
  correct: `correct`,
  slow: `slow`,
  fast: `fast`,
  unknown: `unknown`
};

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
    mode: `oneImage`,
    description: `Угадай, фото или рисунок?`,
    images: 1,
    params: [
      {
        type: `paint`,
        src: pictures.paintings[0]
      }
    ]
  },
  {
    mode: `twoImages`,
    description: `Угадайте для каждого изображения фото или рисунок?`,
    images: 2,
    params: [
      {
        type: `paint`,
        src: pictures.paintings[1]
      },
      {
        type: `photo`,
        src: pictures.photos[0]
      }
    ]
  },
  {
    mode: `threeImages`,
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
        src: pictures.paintings[2]
      }
    ]
  }
];

// функция генерации массива с вопросами

export const questions = () => new Array(10).fill().map(() => game[Math.floor(Math.random() * game.length)]);

export const statistic = [];
