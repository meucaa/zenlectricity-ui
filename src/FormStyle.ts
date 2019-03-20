import { stylesheet } from 'typestyle';

export const css = stylesheet({
  formPage: {
    width: '360px',
    padding: '8% 0 0',
    margin: 'auto'
  },
  form: {
    position: 'relative',
    'z-index': 1,
    background: '#FFFFFF',
    'max-width': '360px',
    margin: '0 auto 100px',
    padding: '45px',
    'text-align': 'center',
    'box-shadow': '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)'
  },
  formInput: {
    'font-family': '"Roboto", sans-serif',
    outline: 0,
    background: '#f2f2f2',
    width: '100%',
    border: 0,
    margin: '0 0 15px',
    padding: '15px',
    'box-sizing': 'border-box',
    'font-size': '14px',
  },
  formButton: {
    'font-family': '"Roboto", sans-serif',
    'text-transform': 'uppercase',
    outline: 0,
    background: '#FFCE00',
    width: '100%',
    border: 0,
    padding: '15px',
    color: '#FFFFFF',
    'font-size': '14px',
    '-webkit-transition': 'all 0.3 ease',
    transition: 'all 0.3 ease',
    cursor: 'pointer',
  },
  formMessage: {
    margin: '15px 0 0',
    color: '#b3b3b3',
    'font-size': '12px',
  },
  formMessageLink: {
    color: '#008A85',
    'text-decoration': 'none',
  },
});