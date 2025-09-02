import { Controller } from "@hotwired/stimulus"

// Contrôleur Stimulus pour le Drum Kit
export default class extends Controller {
  static targets = ["key"]

  connect() {
    // 🎹 Gérer les touches clavier
    window.addEventListener("keydown", this.playSound.bind(this))

    // 🖱️ Gérer les clics souris
    this.keyTargets.forEach(key => {
      key.addEventListener("click", () =>
        this.playSound({ keyCode: key.dataset.key })
      )
    })
  }

  playSound(event) {
    const key = this.keyTargets.find(k => k.dataset.key == event.keyCode)
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

    if (!key || !audio) return

    // 🔊 Rejoue le son depuis le début
    audio.currentTime = 0
    audio.play()

    // ✨ Animation de la touche
    key.classList.add("playing")

    // 🌈 Effet visuel sur le fond
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 20%)`

    // 🎶 Exemple combo : A (65) + S (83) → son spécial
    if (event.keyCode === 65) {
      this.lastKey = 65
    } else if (event.keyCode === 83 && this.lastKey === 65) {
      const extra = new Audio("/assets/snare.wav")
      extra.play()
    }

    // Quand le son se termine → reset
    audio.addEventListener("ended", () => {
      key.classList.remove("playing")
      document.body.style.backgroundColor = "" // retour au fond normal
    })
  }
}
