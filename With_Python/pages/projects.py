import streamlit as st

st.set_page_config(page_title="Projects | Alisha Khan", layout="wide")

# Styles
st.markdown("""
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #fafafa;
    color: #333;
}
.section-heading {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    border-left: 5px solid #f1c40f;
    padding-left: 10px;
    margin: 40px 0 20px;
}
.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    flex: 1 1 30%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 15px rgba(241,196,15,0.5);
}
.card h3 {
    font-size: 1.25rem;
    color: #333;
}
.tagline {
    font-style: italic;
    color: #777;
    font-size: 1rem;
}
.description {
    font-size: 0.95rem;
    color: #555;
    margin: 10px 0;
}
.card a {
    text-decoration: none;
    color: #555;
    font-size: 1rem;
    font-weight: bold;
}
.card a:hover {
    color: #f1c40f;
}
.footer {
    text-align: center;
    margin: 40px 0;
}
.footer a {
    margin: 0 15px;
    text-decoration: none;
    font-size: 1.2rem;
    color: #555;
}
.footer a:hover {
    color: #f1c40f;
}
</style>
""", unsafe_allow_html=True)

# =========================== AI Agents Projects ===========================
st.markdown('<div class="section-heading">🤖 AI Agents Projects</div>', unsafe_allow_html=True)

ai_agents_projects = [
    {"name": "Simple Chatbot", "url": "#", "icon": "💬",
     "tagline": "Your Friendly Assistant", "description": "A basic chatbot built with Chainlit for quick QnA interactions."},
    {"name": "QnA Chatbot / Chatbot‑Auth", "url": "#", "icon": "❓",
     "tagline": "Secure and Smart", "description": "An intelligent QnA bot with user authentication, built using Chainlit and OpenAI APIs."},
    {"name": "Simple Agent", "url": "#", "icon": "🤖",
     "tagline": "The Friendly Agent", "description": "A basic AI Agent designed for simple tasks and user interactions."},
    {"name": "Advanced Agent", "url": "#", "icon": "🚀",
     "tagline": "Powerful AI Assistant", "description": "An advanced agent utilizing stateful conversations and advanced reasoning capabilities."}
]

st.markdown('<div class="cards-container">', unsafe_allow_html=True)
for project in ai_agents_projects:
    st.markdown(f"""
    <div class="card">
        <h3>{project['icon']} {project['name']}</h3>
        <div class="tagline">{project['tagline']}</div>
        <div class="description">{project['description']}</div>
        <a href="{project['url']}" target="_blank">View Project</a>
    </div>
    """, unsafe_allow_html=True)
st.markdown("</div>", unsafe_allow_html=True)

# =========================== Python Projects ===========================
st.markdown('<div class="section-heading">🐍 Python Projects</div>', unsafe_allow_html=True)

python_projects = [
    {"name": "Unit Converter", "url": "#", "icon": "📏",
     "tagline": "Easy Conversions", "description": "A quick and easy tool for converting units across various measurement systems."},
    {"name": "Password Strength Meter", "url": "#", "icon": "🔐",
     "tagline": "Secure Your Accounts", "description": "Evaluate password strength and enforce best security practices."},
    {"name": "Personal Library Manager", "url": "#", "icon": "📚",
     "tagline": "Organize Your Reads", "description": "A Streamlit app for managing your book collections and recommendations."},
    {"name": "Secure Data Encryption", "url": "#", "icon": "🔒",
     "tagline": "Protect Your Files", "description": "An app for encrypting and securely managing sensitive files and data."},
    {"name": "OOP Practice Series", "url": "#", "icon": "👩‍💻",
     "tagline": "Master OOP Concepts", "description": "A comprehensive OOP practice project focusing on clean and maintainable code design."},
    {"name": "Growth Mindset Challenge", "url": "#", "icon": "🌱",
     "tagline": "Personal Development", "description": "An interactive app for cultivating a growth mindset and daily motivation habits."}
]

st.markdown('<div class="cards-container">', unsafe_allow_html=True)
for project in python_projects:
    st.markdown(f"""
    <div class="card">
        <h3>{project['icon']} {project['name']}</h3>
        <div class="tagline">{project['tagline']}</div>
        <div class="description">{project['description']}</div>
        <a href="{project['url']}" target="_blank">View Project</a>
    </div>
    """, unsafe_allow_html=True)
st.markdown("</div>", unsafe_allow_html=True)

# =========================== NEXT.JS Projects ===========================
st.markdown('<div class="section-heading">💻 Next.js Projects</div>', unsafe_allow_html=True)

nextjs_projects = [
    {"name": "Resume Builder", "url": "#", "icon": "📝",
     "tagline": "Modern and Interactive", "description": "A sleek Next.js app for creating professional resumes instantly."},
    {"name": "E‑commerce", "url": "#", "icon": "🛒",
     "tagline": "Shop Smart", "description": "A clean and fast e-commerce website built with Next.js and Tailwind CSS."},
    {"name": "30 Days of 30 Projects", "url": "#", "icon": "🔥",
     "tagline": "Consistent Practice", "description": "A series of projects built every day for 30 days to master Next.js and web development."}
]

st.markdown('<div class="cards-container">', unsafe_allow_html=True)
for project in nextjs_projects:
    st.markdown(f"""
    <div class="card">
        <h3>{project['icon']} {project['name']}</h3>
        <div class="tagline">{project['tagline']}</div>
        <div class="description">{project['description']}</div>
        <a href="{project['url']}" target="_blank">View Project</a>
    </div>
    """, unsafe_allow_html=True)
st.markdown("</div>", unsafe_allow_html=True)

# =========================== FOOTER ===========================
st.markdown("""
<div class="footer">
    <a href="www.linkedin.com/in/alisha-khan-7353ab35a" target="_blank">LinkedIn</a> | 
    <a href="https://github.com/alishakhan" target="_blank">GitHub</a> | 
    <a href="https://www.youtube.com/@alisha_codecorner" target="_blank">YouTube</a>
</div>
""", unsafe_allow_html=True)
