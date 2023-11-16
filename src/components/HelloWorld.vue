<script setup>
import WorkExperienceCard from "./WorkExperienceCard.vue";
import { experiences } from '../experiences'
import { projects } from '../projects'
import ProjectCard from "./ProjectCard.vue"
import emailjs from 'emailjs-com'
import { ref } from "vue";

const fromEmail = ref('')
const subject = ref('')
const message = ref('')

function sendEmail() {
  emailjs.send("service_izwy97u", "template_3ke76hi", {
    from_name: fromEmail.value,
    subject: subject.value,
    message: message.value,
  }).then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    fromEmail.value = '';
    subject.value = '';
    message.value = '';
  }, (err) => {
    console.error('EMAIL FAILED...', err);
  });
}

const handleSubmit = () => {
  sendEmail(fromEmail.value, subject.value, message.value);
};

document.addEventListener('mousemove', (e) => {
  const gradient = document.getElementById('cursor-gradient');
  gradient.style.left = `${e.clientX}px`;
  gradient.style.top = `${e.clientY}px`;
  gradient.style.display = 'block';
});

</script>

<template>
  <div class="container">
    <div id="cursor-gradient"></div>
    <div class="sidebar">
      <section id="hero">
        <h1>Lucas A. Magno</h1>
        <h3>Software Engineer / DevOps Engineer</h3>
        <p>I build user friendly software solutions and streamline development workflows.</p>
      </section>

      <section id="contact">
        <h2>Work with me</h2>
        <p>Send me a message and lets chat!</p>
        <form class="contact-form" @submit.prevent="handleSubmit" ref="form">
          <div class="form-group">
            <input type="email" v-model="fromEmail" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <input type="text" v-model="subject" placeholder="Subject" required>
          </div>
          <div class="form-group">
            <textarea v-model="message" placeholder="Your Message" required></textarea>
          </div>
          <div class="form-group ">
            <button type="submit" class="button-style">Send Message</button>
          </div>
        </form>
      </section>

      <div class="social-media-links">
        <a href="https://github.com/yourusername" target="_blank" class="icon-link">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" class="icon-link">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>


    <div class="content">
      <section id="about">
        <h2>About Me</h2>
        <p>In 2014, as I was developing new skills with Adobe Premiere, After Effects, and Cinema 4D, it felt like a natural progression to embark on my development journey with my first programming class in with C++. 
          Fast-forward to today, and I’ve built a large and very diverse skill set while working at companies such as Apple, United Wholesale Mortgage, a start-up, and more.</p>
        <p>My main focus these days is building Sparen Homes along with freelance work.</p>
        <p>When I'm not on my computer, I'm usually outside, listening to music, or traveling with my girlfriend.</p>
      </section>

      <hr>

      <section id="experience">
        <h2>Work Experience</h2>
        
        <div v-for="experience in experiences" :key="experience.id">
          <work-experience-card :experience="experience" />
        </div>
        <div class="experience-button">
          <a href="https://drive.google.com/file/d/1EMLM_gmHWMIMxVqmUj3rH782DMLb7t9v/view?usp=sharing" target="_blank" class="resume-button">View Full Resume</a>
        </div>
      </section>

      <hr>

      <section id="projects">
        <h2>Projects</h2>
        <div v-for="project in projects" :key="project.id">
          <project-card :project="project" />
        </div>
        <div class="experience-button">
          <a href="https://lucasamagno.github.io/myblog" target="_blank" class="resume-button">View Blog</a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  overflow-y: hidden;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  font-family: 'Inter', sans-serif; /* Replace with your desired font */
  font-size: 16px; /* Adjust the size as needed */
  color: #666; /* Adjust the color as needed */
}

.sidebar {
  width: 50%; /* 50% of the viewport width */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: hidden;
  height: 100vh;
  padding-top: 5%;
}

.content {
  padding-top: 5%;
  text-align: left;
  margin-left: 50%;
  width: 50%;
  overflow-y: auto;
  height: calc(100vh - 10%); /* Adjust height to account for padding */
  padding-right: 10%;
}

h1 {
  font-size: 50px;
  padding: 0;
  margin: 0;
}

#hero {
  text-align: left;
  padding-left: 30%;
  padding-right: 10%;
}

hr {
  border: 0;
  height: 1px;
  background-color: #ccc; /* or any color you prefer */
  margin-top: 30px;
  margin-bottom: 20px;
}

.icon-link {
  color: grey; /* Initial color */
  transition: color 0.3s; /* Smooth transition for hover effect */
  margin-right: 30px; /* Spacing between icons */
  font-size: 30px;
}

.icon-link:hover {
  color: white; /* Color change on hover */
}

.social-media-links {
  position: absolute;
  bottom: 20%;
  left: 30%; /* Adjust as needed */
}

#experience {
  
}

#projects {
  
}

#contact {
  margin-top: 7%;
  text-align: left;
  padding-left: 30%;
  padding-right: 10%;
}

.contact-form .form-group {
  margin-bottom: 15px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 75%;
  font-size: 16px;
}

.contact-form textarea {
  height: 100px; /* Adjust height as needed */
  resize: vertical; /* Allow vertical resize */
}

.contact-form button {
  background-color: #007bff; /* Example button color */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.contact-form button:hover {
  background-color: #45a049;
}

.experience-button {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content horizontally */
}


.resume-button {
  display: inline-block;
  background-color: #007bff; /* Bubble background color */
  color: white; /* Text color */
  padding: 10px 20px; /* Vertical and horizontal padding */
  margin-top: 20px;
  border-radius: 15px; /* Rounded corners for bubble shape */
  font-size: 16px; /* Adjust font size as needed */
  text-align: center;
  text-decoration: none; /* Removes underline from link */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.resume-button:hover {
  background-color: #0056b3; /* Darker shade of blue for hover effect */
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
  }

  .sidebar {
    position: static;
    width: 100%;
    height: auto;
    overflow-y: visible;
    padding-top: 0;
  }

  .content {
    margin-left: 0;
    width: 100%;
    height: auto;
  }
}
#cursor-gradient {
  position: fixed;
  pointer-events: none; /* Ensures the gradient doesn't interfere with other elements */
  border-radius: 50%;
  width: 700px; /* Adjust size as needed */
  height: 700px; /* Adjust size as needed */
  background: radial-gradient(circle, rgba(156, 157, 177, 0.5), rgba(136, 21, 21, 0));
  transform: translate(-50%, -50%);
  display: none;
  z-index: 1000; /* Ensures it's above other elements */
  filter: blur(50px); /* Apply blur effect */
  opacity: 20%;
}

.button-style {
  background-color: #007bff; /* Bubble background color */
  color: white; /* Text color */
  padding: 10px 20px; /* Vertical and horizontal padding */
  border-radius: 15px; /* Rounded corners for bubble shape */
  font-size: 16px; /* Adjust font size as needed */
  text-align: center;
  text-decoration: none; /* Removes underline from link */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.button-style:hover {
  background-color: #0056b3; /* Darker shade of blue for hover effect */
}
</style>
