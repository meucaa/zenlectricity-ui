export const Auth = {
  isAuthenticated: () => getCookie('userToken') != '',
  authenticate: (token: string) => {
    setCookie('userToken', token);
  },
  signout: () => {
    deleteCookie('userToken');
  },
  getToken: () => getCookie('userToken')
}

const setCookie = (name: string, value: string, days = 7, path = '/') => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

const getCookie = (name: string) => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=')
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '')
}

const deleteCookie = (name: string, path: string = '/') => {
  setCookie(name, '', -1, path)
}