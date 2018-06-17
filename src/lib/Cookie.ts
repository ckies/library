export const CONFIG_EXPIRATION = 365 * 24 * 60 * 60 * 1000
export const PREFIX = 'ckies'

export class Cookie {
  public static get = (name: string) => {
    const data = `; ${document.cookie}`.split(`; ${name}=`)

    return data && data.length === 2 ? (
      (data.pop() || '').split(';').shift()
    ) : (
      null
    )
  }

  public static set = (name: string, value: string, expires: Date) => {
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`
  }
}
