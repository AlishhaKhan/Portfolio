// app.js
document.addEventListener("DOMContentLoaded", () => {
  // Navbar Toggle
  const toggle = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');
  toggle?.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Dark Mode Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Chatbox Toggle
  const chatToggle = document.querySelector('.chatbot-toggle');
  const chatbox = document.querySelector('.chatbox');
  chatToggle?.addEventListener('click', () => {
    chatbox.classList.toggle('active');
  });

  // Chatbox Logic
  const chatInput = document.getElementById('chatbox-input');
  const chatMessages = document.getElementById('chat-messages');

  chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim() !== '') {
      const userMessage = chatInput.value.trim();
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-msg');
      userDiv.textContent = userMessage;
      chatMessages.appendChild(userDiv);

      setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.classList.add('bot-msg');
        botDiv.textContent = replyToUser(userMessage);
        chatMessages.appendChild(botDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);

      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

 // Simple Bot Logic
function replyToUser(message) {
  const lower = message.toLowerCase();

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hello! 👋 I'm Alisha Khan’s assistant. You can ask me about her projects, experience, or anything you’d like to know.";
  } else if (lower.includes('about') || lower.includes('work experience') || lower.includes('experience')) {
    return "Alisha is a passionate developer focusing on Web Development, AI Agents, and creating beautiful, user-friendly interfaces.";
  } else if (lower.includes('projects') || lower.includes('work') || lower.includes('portfolio')) {
    return "Alisha has worked on many projects, including AI chatbots, streamlit apps, personal websites, dashboards, and interactive platforms.";
  } else if (lower.includes('skills') || lower.includes('technologies') || lower.includes('tools')) {
    return "Alisha is skilled in HTML, CSS, JavaScript, React, Next.js, Python, Streamlit, AI Agents (OpenAI, LangChain), and database integration.";
  } else if (lower.includes('contact') || lower.includes('email') || lower.includes('get in touch')) {
    return "You can contact Alisha via email or social links listed in the site. Let me know if you want more details.";
  } else if (lower.includes('help') || lower.includes('support')) {
    return "Of course! Let me know what you’d like help with — Alisha can build websites, AI bots, dashboards, or anything you can imagine.";
  } else if (lower.includes('thank') || lower.includes('thanks')) {
    return "You're very welcome! 😄 Let me know if you have any more questions.";
  } else {
    return "I’m here to tell you about Alisha Khan — her work experience, projects, skills, or anything you’re curious about.";
  }
}


  // EmailJS
  (function(){
    emailjs.init("YOUR_USER_ID"); // Replace with actual user id
  })();
  const form = document.getElementById("contact-form");
  if(form){
    form.addEventListener("submit", function(event){
      event.preventDefault();
      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(() => {
        alert("Message sent successfully! 🎉");
        form.reset();
      }, (error) => {
        alert("Error sending message. Try later.");
      });
    });
  }
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});