<script setup>
import Container from "./Container.vue";
import UserBar from "./UserBar.vue";
import ImageGallery from "./ImageGallery.vue";
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";
import { useRoute } from "vue-router";

const route = useRoute();
const posts = ref([]);
const user = ref(null);
const { username } = route.params;
const loading = ref(false);

const addNewPost = (post) => {
    posts.value.unshift(post);
};

const fetchData = async () => {
    loading.value = true;
    const {data: userData} = await supabase
        .from("users")
        .select()
        .eq('username', username)
        .single();

    if(!userData) {
        loading.value = false;
        return user.value = null;
    }

    
    user.value = userData;

    const {data: postsData} = await supabase
        .from("posts")
        .select()
        .eq('owner_id', user.value.id);

    posts.value = postsData;
    loading.value = false;
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <Container>
        <div class="profile-container" v-if="!loading">
            <UserBar
                :key="$route.params.username"
                :user="user"
                :userInfo="{
                    posts: posts.length,
                    followers: 0,
                    following: 0
                }"
                :addNewPost="addNewPost"
            ></UserBar>
            <ImageGallery :posts="posts"></ImageGallery>
        </div>
        <div v-else class="spinner">
            <ASpin></ASpin>
        </div>
    </Container>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
}

.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
}
</style>