import streamlit as st

# Page Configuration
st.set_page_config(page_title="Contact | Alisha Khan", layout="wide")

# Styles
st.markdown("""
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #fff;
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
.content {
    font-size: 1.25rem;
    color: #555;
}
form .stButton>button {
    background-color: #f1c40f !important;
    color: #000 !important;
    font-size: 1rem !important;
    font-weight: bold !important;
    padding: 10px 20px !important;
    border-radius: 5px !important;
}
.footer {
    text-align: center;
    padding: 30px 0;
    font-size: 1rem;
}
.footer a {
    text-decoration: none;
    font-weight: bold;
    margin: 0 15px;
    color: #333;
}
.footer a:hover {
    color: #f1c40f;
}
</style>
""", unsafe_allow_html=True)

# Contact Section
st.markdown("<div class='section-heading'>Get in Touch</div>", unsafe_allow_html=True)
st.markdown("<p class='content'>Have a project in mind or just want to say hi? Drop your message below, and I’ll get back to you soon! 👋</p>", unsafe_allow_html=True)

# Contact Form
with st.form("contact_form"):
    name = st.text_input("Your Name")
    email = st.text_input("Your Email")
    message = st.text_area("Your Message")
    submitted = st.form_submit_button("Send Message")

    if submitted:
        if name and email and message:
            st.success("Thank you! Your message has been received. I’ll be in touch soon.")
        else:
            st.error("Please fill out all fields before submitting.")

# Footer Section
st.markdown("""
<div class="footer">
    <a href="https://www.youtube.com/@alisha_codecorner" target="_blank">YouTube</a> |
    <a href="www.linkedin.com/in/alisha-khan-7353ab35a" target="_blank">LinkedIn</a> |
    <a href="https://www.github.com/AlishhaKhan.git" target="_blank">GitHub</a>
</div>
""", unsafe_allow_html=True)
