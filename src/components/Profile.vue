<script setup>
import Container from "./Container.vue"
import UserBar from "./UserBar.vue"

</script>

<template>
    <Container>
        <div class="profile-container">
            <UserBar
                username=""
                :userInfo="{
                    posts: 4,
                    followers: 100,
                    following: 342
                }"
            ></UserBar>
            <h1>IMAGEGALLERY</h1>
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