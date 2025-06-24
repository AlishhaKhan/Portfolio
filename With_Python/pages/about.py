import streamlit as st

# Page Configuration
st.set_page_config(page_title="About | Alisha Khan", layout="wide")

# Styles
st.markdown("""
<style>
body {
    background-color: #fff;
    color: #333;
    font-family: Arial, sans-serif;
}
.container {
    max-width: 900px;
    margin: auto;
}
.section-heading {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    border-left: 5px solid #f1c40f;
    padding-left: 10px;
    margin: 40px 0 20px;
}
.content {
    font-size: 1.25rem;
    color: #555;
}
.card {
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
    background-color: #f9f9f9;
}
.skills-columns {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.skill-list {
    font-size: 1.1rem;
}
.footer {
    text-align: center;
    padding: 30px 0;
    font-size: 1rem;
}
.footer a {
    margin: 0 15px;
    color: #333;
    font-weight: bold;
    text-decoration: none;
}
.footer a:hover {
    color: #f1c40f;
}
</style>
""", unsafe_allow_html=True)

# Introduction
st.markdown("""
<div class="container">
    <div class="section-heading">About Me</div>
    <p class="content">
    Hey! 👋 I’m Alisha Khan — a curious learner and passionate creator. 
    I believe that every line of code can tell a story, and every design can make a difference. 
    From building sleek websites to exploring AI, I’m always chasing new ways to learn, create, and grow. 
    For me, it's not just about coding — it's about making ideas come to life and leaving a mark worth remembering.
    </p>
</div>
""", unsafe_allow_html=True)

# Education
st.markdown("""
<div class="container">
    <div class="section-heading">Education</div>
    <div class="card"><b>Cloud Native Computing</b> — GIAIC (2023 – Present)</div>
    <div class="card"><b>ADP Economics</b> — UNIVERSITY OF KARACHI (2021 – 2023)</div>
    <div class="card"><b>FSc Pre‑Medical</b> — GOVT. GIRLS DEGREE COLLEGE - BLOCK M (2017 – 2019)</div>
</div>
""", unsafe_allow_html=True)

# Achievements / Certifications
st.markdown("""
<div class="container">
    <div class="section-heading">Achievements & Certifications</div>
    <div class="card"><b>Certification:</b> Business Management (King’s College London)</div>
    <div class="card"><b>Certification:</b> Project Management (Coventry University MBA Program)</div>
    <div class="card"><b>Certification:</b> Human Resource Management (UniAthena)</div>
    <div class="card"><b>Certification:</b> Diploma in Psychology (Alison)</div>
</div>
""", unsafe_allow_html=True)

# Skills Section
st.markdown("""
<div class="container">
    <div class="section-heading">Skills</div>
    <div class="skills-columns">
        <div>
            <h3>💻 Technical Skills</h3>
            <p class="skill-list">– Python<br>– Streamlit<br>– HTML / CSS / JS<br>– REST APIs<br>– Git & GitHub<br>– Canva & CapCut</p>
        </div>
        <div>
            <h3>✨Soft Skills</h3>
            <p class="skill-list">– Communication<br>– Teamwork<br>– Problem‑solving<br>– Time Management<br>– Adaptability<br>– Data Analysis & Research</p>
        </div>
    </div>
</div>
""", unsafe_allow_html=True)

# Work Experience
st.markdown("""
<div class="container">
    <div class="section-heading">Work Experience</div>
    <div class="card"><b>Intern — Redline Intelligence Company</b> (2025 – Present)<br>Learning and working on website development, databases, and AI projects while gaining hands‑on experience and teamwork skills.</div>
    <div class="card"><b>Web Developer</b> (2023 – Present)<br>Built various projects using Next.js and Figma, participated in a GIAIC hackathon where I developed a Resume Builder and an E‑commerce website, created many smaller projects for practice, and now exploring Python‑based projects, AI Agents, and Chatbots to expand my skill set and build intelligent applications.</div>
    <div class="card"><b>Workshop Attendee – State Bank of Pakistan</b> (2022)<br>Participated in a financial awareness workshop; gained exposure to real banking operations.</div>
</div>
""", unsafe_allow_html=True)

# Footer
st.markdown("""
<div class="footer">
    Connect with me:
    <a href="www.linkedin.com/in/alisha-khan-7353ab35a" target="_blank">LinkedIn</a> |
    <a href="https://www.github.com/AlishhaKhan.git" target="_blank">GitHub</a> |
    <a href="https://www.youtube.com/@alisha_codecorner" target="_blank">YouTube</a>
</div>
""", unsafe_allow_html=True)
