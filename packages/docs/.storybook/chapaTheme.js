import { create } from '@storybook/theming'

export default create({
  base: 'light',

  colorPrimary: '#212529',
  colorSecondary: '#ADB5BD',

  appBg: '#212529',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: '#212529',

  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  textColor: '#999',
  textInverseColor: '#aaa',

  brandTitle: 'Chapa UI',
  brandUrl: 'https://www.omeletecompany.com/',
  brandImage: 'https://www.omeletecompany.com/media/logo-selo-white.svg',
  brandTarget: '_self'
})