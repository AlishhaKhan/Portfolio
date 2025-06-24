import streamlit as st

st.set_page_config(page_title="My Portfolio | Alisha Khan", layout="wide")

# Styles
st.markdown("""
<style>
body {
    font-family: Arial, sans-serif;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 40px;
}
.navbar .name {
    font-style: italic;
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
}
.navbar .links a {
    margin-left: 30px;
    color: #000;
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
    transition: color 0.3s ease;
}
.navbar .links a:hover {
    color: #f1c40f;
}
.content h1 {
    font-size: 3rem;
    font-weight: bold;
}
.content p {
    font-size: 1.25rem;
    color: #555;
}
.buttons a {
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 10px;
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
}
.buttons a:hover {
    transform: translateY(-3px) scale(1.03);
}
.projects {
    background-color: #f1c40f;
    color: #000;
}
.linkedin {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
}
img {
    border-radius: 50% !important;
    border: 3px solid #f1c40f !important;
    object-fit: cover;
}
</style>
""", unsafe_allow_html=True)

# Navbar
st.markdown("""
<div class="navbar">
    <div class="name">Alisha Khan</div>
    <div class="links">
        <a href="about">About</a>
        <a href="projects">Projects</a>
        <a href="contact">Contact</a>
    </div>
</div>
""", unsafe_allow_html=True)

# Main Section
col1, col2 = st.columns([2, 1])

with col1:
    st.markdown("""
    <div class="content">
        <span style="color: #f1c40f; font-weight: bold">Web Developer | AI Enthusiast</span>
        <h1>Hello, myself Alisha Khan</h1>
        <p>A passionate Web Developer and AI Enthusiast with a strong interest in creating beautiful and functional digital experiences. 
           I love working with modern technologies, exploring the world of AI and machine learning, and building impactful projects. 
           In my work, I focus on combining clean design, strong coding practices, and a user-centric approach to deliver results that matter. 
           When I'm not coding, I enjoy learning new technologies, reading, and sharing knowledge with others in the developer community.
        </p>
    </div>
    """, unsafe_allow_html=True)

    st.markdown("""
    <div class="buttons">
        <a href="projects" class="projects">Projects</a>
        <a href="www.linkedin.com/in/alisha-khan-7353ab35a" class="linkedin">LinkedIn</a>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("<div style='margin-left:60px; margin-top:30px'>", unsafe_allow_html=True)
    st.image("assets/dp.png", use_container_width=False, width=300)
    st.markdown("</div>", unsafe_allow_html=True)
