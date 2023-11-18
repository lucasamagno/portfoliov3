import { createApp } from 'vue'
import App from './App.vue'
import emailjs from 'emailjs-com'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

emailjs.init("EnT3Qfe4jqEM4H-Fl")

const app = createApp(App)

// Use Toast plugin
app.use(Toast, {
  // You can set global options for the toast here
  // For example, position: 'top-right'
  // Refer to the documentation for more options
});

app.mount('#app')
