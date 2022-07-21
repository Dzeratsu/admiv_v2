import { Module, VuexAction, VuexMutation, VuexModule, getModule } from 'nuxt-property-decorator'
import { store } from '~/store'
import { IResponse } from '~/Interface/IResponse'
import { IResponseUser } from '~/Interface/login/IResponseUser'

/* Информация о Пользователе */

@Module({
  name: 'User',
  store,
  dynamic: true,
  namespaced: true
})
class User extends VuexModule {
  private userInfo: IResponseUser = {
    name: null,
    active: null,
    id: null
  }

  public get user () {
    return this.userInfo
  }

  @VuexMutation
  SET_USER (data: IResponseUser) {
    this.userInfo = data
  }

   @VuexAction({ rawError: true })
  async setUser () {
    await store.$axios.$get<IResponse<IResponseUser>>('/user/info')
      .then(({ result }) => {
        this.SET_USER(result)
      })
  }
}

export default getModule(User)
