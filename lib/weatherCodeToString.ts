import exp from 'constants';

const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: 'c01d',
    label: 'Ensoleillé',
  },
  1: {
    icon: 'c02d',
    label: 'Principallement ensoleillé',
  },
  2: {
    icon: 'c03d',
    label: 'Partiellement nuageux',
  },
  3: {
    icon: 'c04d',
    label: 'Couvert',
  },
  45: {
    icon: 'c05d',
    label: 'Brouillard',
  },
  48: {
    icon: 's05d',
    label: 'Brouillard givrant',
  },
  51: {
    icon: 'd01d',
    label: 'Bruine',
  },
  55: {
    icon: 'd01d',
    label: 'Bruine',
  },
  53: {
    icon: 'd01d',
    label: 'Bruine',
  },
  56: {
    icon: 'd01d',
    label: 'Bruine givrante',
  },
  57: {
    icon: 'd01d',
    label: 'Bruine givrante',
  },
  61: {
    icon: 'r01d',
    label: 'Pluie',
  },
  63: {
    icon: 'r01d',
    label: 'Pluie',
  },
  65: {
    icon: 'r01d',
    label: 'Pluie',
  },
  66: {
    icon: 'f01d',
    label: 'Pluie verglaçante',
  },
  67: {
    icon: 'f01d',
    label: 'Pluie verglaçante',
  },
  71: {
    icon: 's02d',
    label: 'Neige',
  },
  73: {
    icon: 's02d',
    label: 'Neige',
  },
  75: {
    icon: 's02d',
    label: 'Neige',
  },
  77: {
    icon: 's02d',
    label: 'Grêle',
  },
  80: {
    icon: 'r02d',
    label: 'Chutes de pluie',
  },
  81: {
    icon: 'r02d',
    label: 'Chutes de pluie',
  },
  82: {
    icon: 'r02d',
    label: 'Chutes de pluie',
  },
  85: {
    icon: 's01d',
    label: 'Chutes de neige',
  },
  86: {
    icon: 's01d',
    label: 'Chutes de neige',
  },
  95: {
    icon: 't04d',
    label: 'Thunderstorm',
  },
  96: {
    icon: 't04d',
    label: 'Orage',
  },
  99: {
    icon: 't04d',
    label: 'Orage',
  },
};

export default weatherCodeToString;
