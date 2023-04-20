<script setup>
import Container from "./Container.vue"
import Card from "./Card.vue"

const data = [
    {
        id: 1,
        username: "chrismcdonald",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdmpjBmeopKOEq2CVakUefPTp_L41EGAQXg&usqp=CAU",
        caption: ""
    },
    {
        id: 1,
        username: "sarahromero",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UHBpQUOaUk1KncG-gATabtzPcv-Cy_chRA&usqp=CAU",
        caption: "Beautiful trees"
    }
]

</script>

<template>
    <Container>
        <div class="timeline-container">
            <Card v-for="post in data" :key="post.id" :post="post"></Card>
        </div>
    </Container>
</template>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
}
</style>