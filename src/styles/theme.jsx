export const theme = Object.freeze({
  colors: {
    black: '#000000',
    lightBlack: '#141414',
    grey1: '#313131',
    grey2: '#343434',
    white: '#FFFFFF',
    mainbackground: '#E2DDD9',
    menuBackground: 'rgba(0, 0, 0, 0.85)',
    backgroundOfBlock1: '#CEC4C5',
    backgroundOfBlock2: '#B29596',
    backgroundOfBlock3: '#8B8398',
    backgroundOfBlock4: '#F1F1F1',
    backgroundOfBlock5: '#9A8AAE',
    backgroundOfBlock6: '#7B85E2',
    backgroundOfBlock7: '#46FFD3',
    backgroundOfBlock8: '#FF8777',
  },
  fontSizes: {
    little: '10px',
    small: '14px',
    regular: '16px',
    medium: '18px',
    large: '24px',
    xl: '32px',
    xxl: '44px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  spacing: value => `${4 * value}px`,
});
