<template>
  <div class="container">
    <div class="sidebar">
      <section id="hero">
        <h1>Lucas A. Magno</h1>
        <h3>Software Engineer / DevOps Engineer</h3>
        <p>I build user friendly software solutions and streamline development workflows.</p>
      </section>

      <section id="contact">
        <h2>Work with me</h2>
        <p></p>
        <form class="contact-form">
          <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <input type="text" id="subject" name="subject" placeholder="Subject" required>
          </div>
          <div class="form-group">
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Send Message</button>
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
        <p>When I'm not on my computer, I'm usually riding some type of board, listening to music, or traveling with my girlfriend.</p>
      </section>

      <hr>

      <section id="experience">
        <h2>Work Experience</h2>
        <p>This is the Work Experience Section.</p>

        <h3>Full Stack Engineer * Sparen Homes</h3>

        <h3>DevOps Engineer * United Wholesale Mortgage</h3> <!-- brighter than other rows--> 
        <h3>Release Engineer</h3> <!--Not as bright -->
        <h3>Business Analyst / Scrum Master</h3> <!--Not as bright-->

        <h3>Software Developer * Auto Owners Insurance</h3>

        <h3>System Administrator (Technology Operations) * Central Michigan University</h3>
        <h3>Mathematics Tutor</h3>

        <h3>Internship / Campus Ambassador * United Wholesale Mortgage</h3> <!-- brighter than other rows--> 

        <h3>Help Desk Analyst * Apple</h3>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>This is the Projects Section.</p>
        <p>Moms website</p>
        <p>Mo's website</p>
        <p>Kaylas website</p>
      </section>

            <section id="about">
        <h2>About Me</h2>
        <p>My main focus these days is building Sparen Homes along with buildling my freelance career.</p>
        <p>When I'm not on my computer, I'm usually riding some type of board, listening to music, or traveling with my girlfriend.</p>
      </section>


      <section id="experience">
        <h2>Work Experience</h2>
        <p>This is the Work Experience Section.</p>

        <h3>Full Stack Engineer * Sparen Homes</h3>

        <h3>DevOps Engineer * United Wholesale Mortgage</h3> <!-- brighter than other rows--> 
        <h3>Release Engineer</h3> <!--Not as bright -->
        <h3>Business Analyst / Scrum Master</h3> <!--Not as bright-->

        <h3>Software Developer * Auto Owners Insurance</h3>

        <h3>System Administrator (Technology Operations) * Central Michigan University</h3>
        <h3>Mathematics Tutor</h3>

        <h3>Internship / Campus Ambassador * United Wholesale Mortgage</h3> <!-- brighter than other rows--> 

        <h3>Help Desk Analyst * Apple</h3>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>This is the Projects Section.</p>
        <p>Moms website</p>
        <p>Mo's website</p>
        <p>Kaylas website</p>
      </section>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 50%; /* 50% of the viewport width */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  height: 100vh;
  padding-top: 5%;
}

.content {
  padding-top: 5%;
  text-align: left;
  margin-left: 50%; /* Same as the width of the sidebar */
  width: 50%; /* Adjusted width */
  overflow-y: auto;
  height: 100vh;
  padding-right: 15%;
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

#about {
  
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
  /* Styles for Work Experience Section */
}

#projects {
  /* Styles for Projects Section */
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
  background-color: #4CAF50; /* Example button color */
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
</style>
