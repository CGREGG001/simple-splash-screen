window.addEventListener("load", () => {
  const splash = document.querySelector(".splash-screen");

  setTimeout(() => {
    splash.style.display = "none"; // ou opacity 0 si déjà géré par CSS
    document.body.style.overflow = "auto"; // Réactive le scroll
  }, 5000); // durée = délai animation (4s) + durée fadeOut (1s)
});
