<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";

const visible = ref(false);
const caption = ref("");
const file = ref(null);

const showModal = () => {
    visible.value = true;
};

const handleOk = async (e) => {
    // there is a chance of dups but for this application this is fine
    const fileName = Math.floor(Math.random() * 10000000000000000)
    if(file.value) {
        await supabase.storage
            .from("images")
            .upload("public/" + fileName, file.value);
    }
};

const handleUploadChange = (e) => {
    if(e.target.files[0]) {
        file.value = e.target.files[0];
    }
}
</script>

<template>
    <div>
      <AButton @click="showModal">Upload Photo</AButton>
      <AModal v-model:visible="visible" title="Upload Photo" @ok="handleOk">
        <input type="file" accept=".jpeg,.png" @change="handleUploadChange">
        <AInput 
            v-model:value="caption" 
            placeholder="Caption..."
            :maxLength="50"
        />
      </AModal>
    </div>
  </template>

<style scoped>
input {
    margin-top: 10px;
}
</style>