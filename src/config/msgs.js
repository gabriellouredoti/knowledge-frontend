import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'fontawersome',
  duration: 5000
})

Vue.toasted.register(
  'defaultSuccess',
  payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
  { type: 'success', icon: 'check' }
)

Vue.toasted.register(
  'defaultError',
  'Ocorreu um erro',
  payload => !payload.msg ? 'Oops.. ocorreu um erro inesperado' : payload.msg,
  { type: 'error', icon: 'times' }
)