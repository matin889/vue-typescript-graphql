<template>
  <div>
    <UserDetails v-for="user in result?.users" :key="user.name" :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//import type { User } from '@/types';
import UserDetails from '@/components/UserDetails.vue'
import { useQuery } from '@vue/apollo-composable'
import { GetUsersDocument } from '@/graphql/generated'

export default defineComponent({
  name: 'App',
  components: {
    UserDetails
  },
  setup() {
    const { result, loading, error } = useQuery(GetUsersDocument)

    return { result, loading, error }
  }
})
</script>

<style scoped></style>
