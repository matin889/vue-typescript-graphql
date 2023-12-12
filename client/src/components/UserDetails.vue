<template>
  <div>
    <h1>{{ user.name }}</h1>
    <MessageDetails v-for="message in user.messages" :key="message.body" :message="message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { User } from '@/types'
import MessageDetails from '@/components/MessageDetails.vue'

export default defineComponent({
  name: 'UserDetails',
  components: {
    MessageDetails
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
