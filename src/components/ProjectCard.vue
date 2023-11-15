<template>
  <a :href="project.url" target="_blank" class="project-card-link">
    <div class="project-card" 
         @mouseover="isHovering = true" 
         @mouseleave="isHovering = false">
      <div class="left-column">
        <img :src="project.image" alt="Project Image" class="project-image"/>
      </div>
      <div class="right-column">
        <h3 :class="{'highlight': isHovering }">{{ project.title }}</h3>
        <p class="description">{{ project.description }}</p>
        <ul class="tools">
          <li v-for="tool in project.tools" :key="tool" class="tool-bubble" 
              @mouseover="isHovering = true" 
              @mouseleave="isHovering = false">{{ tool }}</li>
        </ul>
      </div>
    </div>
  </a>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const isHovering = ref(false);

onMounted(() => {
  console.log(props.experience);
});
</script>

<style scoped>

.project-card {
  display: flex;
  padding: 20px;
  margin-bottom: 10px;
  transition: filter 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #09162c;
  border-radius: 20px;
  color: white;
}

.project-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  filter: brightness(1.4); /* Increase brightness on hover */
}

.project-card-link {
  text-decoration: none;
  color: inherit;
}

.left-column {
  flex: 1; /* Adjust as necessary */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
}

.project-image {
  max-width: 100%; /* Ensure the image is responsive */
  border-radius: 10px; /* Optional: for styled image corners */
}

.right-column {
  flex: 2; /* Adjust as necessary */
  padding-left: 20px; /* Space between image and content */
}

.tools {
  list-style: none; /* Removes default list bullets */
  padding: 0; /* Removes default padding */
  display: flex; /* Display skills inline */
  flex-wrap: wrap; /* Wrap to the next line if space runs out */
  gap: 10px; /* Spacing between skill bubbles */
}

.highlight {
  color: #007bff;
}

.tool-bubble {
  background-color: #007bff; /* Bubble background color */
  color: white; /* Text color */
  padding: 5px 10px; /* Vertical and horizontal padding */
  border-radius: 15px; /* Rounded corners for bubble shape */
  font-size: 0.85em; /* Adjust font size as needed */
  cursor: pointer;
}

h3 {
  padding: 0;
  margin: 0;
  transition: color 0.3s ease;
}

p {
  padding: 0;
  margin: 0;
}

.project-card-link {
  text-decoration: none; /* Removes underline */
  color: inherit; /* Inherits text color */
}
</style>
