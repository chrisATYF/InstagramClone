<script setup>
import Container from "./Container.vue"
import UserBar from "./UserBar.vue"
import ImageGallery from "./ImageGallery.vue"

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
            ></UserBar>
            <ImageGallery :posts="[
                {
                    id: 1,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UHBpQUOaUk1KncG-gATabtzPcv-Cy_chRA&usqp=CAU'
                },
                {
                    id: 2,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UHBpQUOaUk1KncG-gATabtzPcv-Cy_chRA&usqp=CAU'
                }
            ]"
            ></ImageGallery>
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