export function getCookie(name: string) {
  const data = `; ${document.cookie}`.split(`; ${name}=`)

  return data && data.length === 2 ? (
    (data.pop() || '').split(';').shift()
  ) : (
    null
  )
}

export function setCookie(name: string, value: string, expires: Date) {
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`
}
