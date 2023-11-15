<template>

  <a :href="experience.url" target="_blank" class="experience-card-link">
    <div class="experience-card"
        @mouseover="isHovering = true" 
        @mouseleave="isHovering = false">
      <div class="left-column">
        <p class="dates">{{ experience.dates }}</p>
      </div>
      <div class="right-column">
        <h3 :class="{'highlight': isHovering }">{{ experience.titles[0] }} • {{ experience.company }}</h3>
        <div class="other-titles">
          <p v-for="(title, index) in experience.titles.slice(1)" :key="index" class="additional-title">{{ title }}</p>
        </div>
        <p class="description">{{ experience.description }}</p>
        <ul class="skills">
          <li v-for="skill in experience.skills" :key="skill" class="skill-bubble" 
              @mouseover="isHovering = true" 
              @mouseleave="isHovering = false">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </a>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
  experience: {
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

.experience-card {
  display: flex;
  padding: 20px;
  margin-bottom: 10px; /* Adds space between cards */
  transition: filter 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for transform, filter, and shadow */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  background-color: #09162c;
  border-radius: 20px;
}

.experience-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  filter: brightness(1.4); /* Increase brightness on hover */
}

.left-column {
  flex: 0.7; /* Adjust as necessary for your design */
}

.right-column {
  flex: 2; /* Adjust as necessary for your design */
}

.skills {
  list-style: none; /* Removes default list bullets */
  padding: 0; /* Removes default padding */
  display: flex; /* Display skills inline */
  flex-wrap: wrap; /* Wrap to the next line if space runs out */
  gap: 10px; /* Spacing between skill bubbles */
}

.highlight {
  color: #007bff;
}

.skill-bubble {
  background-color: #007bff; /* Bubble background color */
  color: white; /* Text color */
  padding: 5px 10px; /* Vertical and horizontal padding */
  border-radius: 15px; /* Rounded corners for bubble shape */
  font-size: 0.85em; /* Adjust font size as needed */
  cursor: pointer;
}

.other-titles {
  font-size: 18px;
  padding-bottom: 20px;
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

.experience-card-link {
  text-decoration: none; /* Removes underline */
  color: inherit; /* Inherits text color */
}
</style>
