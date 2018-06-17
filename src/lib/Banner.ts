import { Cookie, PREFIX, CONFIG_EXPIRATION } from './Cookie'

export enum BannerState {
  CONFIRMED = 'confirmed'
}

export class Banner {
  public static needed() {
    return !this.confirmed()
  }

  public static confirmed() {
    const value = Cookie.get(`${PREFIX}_banner`)
    
    if (value === BannerState.CONFIRMED) {
      return true;
    }
  }

  public static confirm() {
    const date = new Date()
    date.setTime(date.getTime() + CONFIG_EXPIRATION)

    Cookie.set(
      `${PREFIX}_banner`,
      BannerState.CONFIRMED,
      date
    )
  }
}