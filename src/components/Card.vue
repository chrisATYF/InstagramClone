<script setup>
import { defineProps } from "vue";

const props = defineProps(['post']);
</script>

<template>
    <ACard class="card" hoverable style="width: 240px">
      <template #cover>
        <img alt="example" :src="`https://uhljezsgmikikyvgqbey.supabase.co/storage/v1/object/public/images/${post.url}`" />
      </template>
      <ACardMeta :title="post.username">
        <template #description>{{ post.caption }}</template>
      </ACardMeta>
    </ACard>
</template>

<style scoped>
.card {
    margin-bottom: 20px;
}
</style>