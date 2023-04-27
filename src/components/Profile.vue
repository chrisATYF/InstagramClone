<script setup>
import Container from "./Container.vue"
import UserBar from "./UserBar.vue"
import ImageGallery from "./ImageGallery.vue"
import { ref } from "vue"

const posts = ref([]);

const addNewPost = (post) => {
    posts.value.unshift(post);
}
</script>

<template>
    <Container>
        <div class="profile-container">
            <UserBar
                :key="$route.params.username"
                username=""
                :userInfo="{
                    posts: 4,
                    followers: 100,
                    following: 342
                }"
                :addNewPost="addNewPost"
            ></UserBar>
            <ImageGallery :posts="posts"></ImageGallery>
        </div>
    </Container>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
}
</style>