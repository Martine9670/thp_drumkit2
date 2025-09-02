# 🥁 Drum Kit + Stimulus

**Drum Kit project** built with **Rails 8** and **Stimulus**, 
as part of an **exercise from The Hacking Project (THP)**.  

Play drum sounds using your **keyboard** or by **clicking the drum pads** on the screen. 
This project demonstrates how to integrate **Stimulus** in a Rails application 
and handle **interactive user events** with JavaScript.

---

## 🚀 Features

- **9 unique drum sounds**: Boom, Clap, HiHat, Kick, OpenHat, Ride, Snare, Tink, Tom  
- **Keyboard support**: Press keys A–L to trigger sounds  
- **Mouse support**: Click on drum pads to play the sounds  
- **Visual effects**:  
  - Neon-style drum pads 💡  
  - Ripple effect on key press ✨  
  - Background color changes dynamically 🌈  

---

## 📂 Project Structure

drumkit/
│
├─ app/assets/images/ # Background images
├─ app/assets/sounds/ # Drum sound files (.wav)
├─ app/assets/stylesheets/ # style.css for drum kit
├─ app/javascript/controllers/ # Stimulus controllers (drumkit_controller.js)
├─ app/views/drums/index.html.erb # Drum kit interface
└─ config/routes.rb # Route for drum kit page


---

## 💻 Installation

1. Clone the repository:  
```bash
git clone <your-repo-url>
cd drumkit

    Install dependencies and setup the database:

bundle install
rails db:create
rails server

    Open your browser:

http://localhost:3000

🎹 Usage

Press the following keys or click on the pads:
Key	Sound
A	Boom
S	Clap
D	HiHat
F	Kick
G	OpenHat
H	Ride
J	Snare
K	Tink
L	Tom

💡 You can also click on the pads to play the corresponding sound.

✨ Notes

    This is a learning exercise from The Hacking Project (THP).

    The project demonstrates Stimulus controllers, data-targets, and DOM manipulation in Rails.

    Feel free to customize sounds, styles, and animations to enhance your drum kit experience.

---

👩‍💻 Author: Martine PINNA
Discord: Martine PINNA
GitHub: Martine9670

