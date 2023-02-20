import {createApp} from 'vue'
import App from './App.vue'
// @ts-ignore
import components from "@/components/UI"

const app = createApp(App)

// @ts-ignore
components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
