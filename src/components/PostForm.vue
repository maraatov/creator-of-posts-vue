<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model:value="post.title"
           type="text"
           placeholder="Название"
    />
    <my-input v-model:value="post.body"
           type="text"
           placeholder="Описание"
    />
    <my-button class="button" @click="createPost">{{ value }}</my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput, MyButton},
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
      value: 'Создать'
    }
  },
  methods: {
    createPost() {
      if (this.post.title.trim()) {
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.button {
  height: 50px;
  margin-top: 15px;
  font-weight: bold;
  color: green;
  background-color: white;
}
</style>