<script setup>
import { defineProps } from "vue";

const props = defineProps(['post']);
</script>

<template>
    <ACard class="card" hoverable style="width: 240px">
      <template #cover>
        <img alt="example" :src="post.url" />
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