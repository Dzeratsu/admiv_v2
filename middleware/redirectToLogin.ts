import { Middleware } from '@nuxt/types'

const toLogin:Middleware = (contex) => {
  if (contex.$auth.loggedIn) {
    console.log('123')
  } else {
    return contex.redirect('/login')
  }
}

export default toLogin
