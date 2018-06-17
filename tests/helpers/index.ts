export const removeAllCookies = () => {
  delete window['CKIES_OPTIN']
  
  document.cookie.split(';').forEach(
    cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
  )
}