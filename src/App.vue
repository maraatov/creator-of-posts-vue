<template>
  <main class="app">
    <div class="app__btns">
      <my-button @click="openDialog">Создать пост</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
        v-if="!postsLoading"
    />
    <div v-else>Идет загрузка</div>
  </main>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from 'axios'
import MySelect from "@/components/UI/MySelect.vue";

export default {
  components: {
    MySelect,
    MyButton,
    MyDialog,
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      postsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
        {value: 'id', name: 'По айдишнику'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    openDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.postsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
      } catch (e) {
          alert('Ошибка')
      }
      finally {
        this.postsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
