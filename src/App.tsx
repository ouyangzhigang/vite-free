import { defineComponent } from 'vue'
import '@style/test.less'

export default defineComponent({
  setup() {
    return () => {
      return <div class="app root tsx">hello vue3 tsx</div>
    }
  },
})
