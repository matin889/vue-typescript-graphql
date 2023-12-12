import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import apolloClient from './apollo-client'
import { ApolloClients } from '@vue/apollo-composable'

const app = createApp(App)
app.provide(ApolloClients, {
  default: apolloClient
})
app.mount('#app')
