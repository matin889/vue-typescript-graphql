<template>
  <div>
    <p>{{ message.body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Message } from '@/types'

export default defineComponent({
  name: 'MessageDetails',
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
