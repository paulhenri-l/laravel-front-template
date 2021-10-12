import { setCookie } from '../lib/cookie'
const { timeZone } = new Intl.DateTimeFormat().resolvedOptions()
setCookie('time_zone', timeZone)
