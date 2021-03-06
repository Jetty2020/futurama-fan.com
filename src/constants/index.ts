export const API_ENDPOINT = 'https://api.sampleapis.com/futurama/';

export const MEDIA_QUERY_END_POINT = {
  MOBILE: '375px',
  TABLET: '768px',
  LAPTOP: '1366px',
  DESKTOP: '1600px',
};

export const ROUTES = [
  {
    ID: 0,
    PATH: '/',
    LABEL: 'Home',
    SUBS: [],
  },
  {
    ID: 1,
    PATH: '/info',
    LABEL: 'Info',
    SUBS: [],
  },
  {
    ID: 2,
    PATH: '/characters',
    LABEL: 'Characters',
    SUBS: [
      {
        ID: 0,
        PATH: '/1',
        LABEL: 'Philip',
        ORDER: 0,
      },
      {
        ID: 1,
        PATH: '/2',
        LABEL: 'Turanga',
        ORDER: 1,
      },
      {
        ID: 2,
        PATH: '/3',
        LABEL: 'Bender',
        ORDER: 2,
      },
      {
        ID: 3,
        PATH: '/4',
        LABEL: 'Hubert',
        ORDER: 3,
      },
      {
        ID: 4,
        PATH: '/5',
        LABEL: 'Amy',
        ORDER: 4,
      },
      {
        ID: 5,
        PATH: '/6',
        LABEL: 'Hermes',
        ORDER: 5,
      },
      {
        ID: 6,
        PATH: '/7',
        LABEL: 'Carol',
        ORDER: 6,
      },
      {
        ID: 7,
        PATH: '/8',
        LABEL: 'John',
        ORDER: 7,
      },
      {
        ID: 8,
        PATH: '/9',
        LABEL: 'Zapp',
        ORDER: 8,
      },
      {
        ID: 9,
        PATH: '/10',
        LABEL: 'Lrrr',
        ORDER: 9,
      },
      {
        ID: 10,
        PATH: '/11',
        LABEL: 'Scruffy',
        ORDER: 10,
      },
      {
        ID: 11,
        PATH: '/12',
        LABEL: 'Cubert',
        ORDER: 11,
      },
      {
        ID: 12,
        PATH: '/13',
        LABEL: 'Kif',
        ORDER: 12,
      },
      {
        ID: 13,
        PATH: '/14',
        LABEL: 'Dwight',
        ORDER: 13,
      },
      {
        ID: 14,
        PATH: '/15',
        LABEL: 'LaBarbara',
        ORDER: 14,
      },
    ],
  },
  {
    ID: 3,
    PATH: '/cast',
    LABEL: 'Cast',
    SUBS: [],
  },
  {
    ID: 4,
    PATH: '/episodes',
    LABEL: 'Episodes',
    SUBS: [
      {
        ID: 0,
        PATH: '/?page=1',
        LABEL: '1 ~ 10',
        ORDER: 0,
      },
      {
        ID: 1,
        PATH: '/?page=2',
        LABEL: '11 ~ 20',
        ORDER: 1,
      },
      {
        ID: 2,
        PATH: '/?page=3',
        LABEL: '21 ~ 30',
        ORDER: 2,
      },
      {
        ID: 3,
        PATH: '/?page=4',
        LABEL: '31 ~ 40',
        ORDER: 3,
      },
      {
        ID: 4,
        PATH: '/?page=5',
        LABEL: '41 ~ 50',
        ORDER: 4,
      },
      {
        ID: 5,
        PATH: '/?page=6',
        LABEL: '51 ~ 60',
        ORDER: 5,
      },
      {
        ID: 6,
        PATH: '/?page=7',
        LABEL: '61 ~ 70',
        ORDER: 6,
      },
      {
        ID: 7,
        PATH: '/?page=8',
        LABEL: '71 ~ 80',
        ORDER: 7,
      },
      {
        ID: 8,
        PATH: '/?page=9',
        LABEL: '81 ~ 90',
        ORDER: 8,
      },
      {
        ID: 9,
        PATH: '/?page=10',
        LABEL: '91 ~ 100',
        ORDER: 9,
      },
      {
        ID: 10,
        PATH: '/?page=11',
        LABEL: '101 ~ 110',
        ORDER: 10,
      },
      {
        ID: 11,
        PATH: '/?page=12',
        LABEL: '111 ~ 120',
        ORDER: 11,
      },
      {
        ID: 12,
        PATH: '/?page=13',
        LABEL: '121 ~ 128',
        ORDER: 12,
      },
    ],
  },
  {
    ID: 5,
    PATH: '/questions',
    LABEL: 'Quiz',
    SUBS: [],
  },
  {
    ID: 6,
    PATH: '/inventory',
    LABEL: 'Inventory',
    SUBS: [],
  },
];
