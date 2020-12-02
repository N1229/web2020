import store from '../store'
import jwt from 'jwt-decode'
import i18n from '../plugins/i18n'

export function initProject(){
    if(localStorage.getItem("lang")){
        i18n.locale = localStorage.getItem("lang")
    }
      
    if(localStorage.getItem("ego")){
        store.commit("loginModule/setUser",{
          username:jwt(localStorage.getItem("ego")).username,
          token:localStorage.getItem("ego")
        })
    }
}