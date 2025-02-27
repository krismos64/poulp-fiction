// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
  // Gestion de l'écran de démarrage (splash screen)
  const splashScreen = document.getElementById("splash-screen");
  const enterSiteBtn = document.getElementById("enter-site");
  const mainHeader = document.getElementById("main-header");
  const heroSection = document.querySelector(".hero");

  // Création des bulles pour l'animation
  const bubblesContainer = document.getElementById("bubbles-container");

  function createBubbles() {
    // Nombre de bulles à créer
    const bubbleCount = 50;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Taille aléatoire pour chaque bulle
      const size = Math.random() * 60 + 10; // entre 10px et 70px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Position horizontale aléatoire
      const left = Math.random() * 100;
      bubble.style.left = `${left}%`;

      // Durée d'animation aléatoire
      const duration = Math.random() * 15 + 5; // entre 5s et 20s
      bubble.style.animationDuration = `${duration}s`;

      // Délai de départ aléatoire
      const delay = Math.random() * 5;
      bubble.style.animationDelay = `${delay}s`;

      // Ajouter la bulle au conteneur
      bubblesContainer.appendChild(bubble);
    }
  }

  // Créer les bulles au chargement
  createBubbles();

  // Effet de particules flottantes dans la section héro
  function createParticles() {
    if (!heroSection) return;

    // Créer un conteneur pour les particules
    const particlesContainer = document.createElement("div");
    particlesContainer.classList.add("particles-container");
    heroSection.appendChild(particlesContainer);

    // Nombre de particules à créer
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Taille aléatoire pour chaque particule
      const size = Math.random() * 8 + 2; // entre 2px et 10px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Position aléatoire
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;

      // Opacité aléatoire
      const opacity = Math.random() * 0.5 + 0.2; // entre 0.2 et 0.7
      particle.style.opacity = opacity;

      // Durée d'animation aléatoire
      const duration = Math.random() * 20 + 10; // entre 10s et 30s
      particle.style.animationDuration = `${duration}s`;

      // Délai de départ aléatoire
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;

      // Ajouter la particule au conteneur
      particlesContainer.appendChild(particle);
    }
  }

  // Créer les particules au chargement
  createParticles();

  if (enterSiteBtn) {
    enterSiteBtn.addEventListener("click", () => {
      splashScreen.style.opacity = "0";
      setTimeout(() => {
        splashScreen.style.display = "none";
      }, 500);
    });
  }

  // Gestion du menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Fermer le menu mobile lorsqu'un lien est cliqué
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // Animation du header au scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      mainHeader.classList.add("scrolled");
    } else {
      mainHeader.classList.remove("scrolled");
    }
  });

  // Galerie d'images
  const galleryContainer = document.querySelector(".gallery-container");
  const galleryModal = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");
  const modalClose = document.querySelector(".modal-close");
  const modalPrev = document.querySelector(".modal-prev");
  const modalNext = document.querySelector(".modal-next");
  const filterButtons = document.querySelectorAll(".filter-button");

  // Données de la galerie
  const galleryItems = [
    {
      src: "img/Utj16dz0jHo6GLvu-generated_image.jpg",
      alt: "Plongeur explorant une grotte sous-marine",
      caption: "Exploration des grottes bleues",
      category: "plongeurs",
    },
    {
      src: "img/LsqxzKzOYRJVvPK3-generated_image.jpg",
      alt: "Poulpe curieux",
      caption: "Rencontre avec un poulpe curieux",
      category: "poulpes",
    },
    {
      src: "img/8ZYoaxEAiQKvIlKX-generated_image.jpg",
      alt: "Récif corallien coloré",
      caption: "Les merveilles du récif",
      category: "paysages",
    },
    {
      src: "img/8FZfgpezLUYMFhTS-generated_image.jpg",
      alt: "Plongeur et banc de poissons",
      caption: "Nager avec les locaux",
      category: "plongeurs",
    },
    {
      src: "img/JofRLNQXqh3sjP8J-generated_image.jpg",
      alt: "Poulpe camouflé",
      caption: "Maître du camouflage",
      category: "poulpes",
    },
    {
      src: "img/BWco2NY9WOtN95IV-generated_image.jpg",
      alt: "Épave de bateau",
      caption: "L'épave mystérieuse",
      category: "paysages",
    },
    {
      src: "img/Utj16dz0jHo6GLvu-generated_image.jpg",
      alt: "Plongeur en combinaison",
      caption: "Prêt pour l'aventure",
      category: "plongeurs",
    },
    {
      src: "img/LsqxzKzOYRJVvPK3-generated_image.jpg",
      alt: "Poulpe géant",
      caption: "Le gardien des profondeurs",
      category: "poulpes",
    },
    {
      src: "img/8ZYoaxEAiQKvIlKX-generated_image.jpg",
      alt: "Vue sous-marine",
      caption: "La lumière des profondeurs",
      category: "paysages",
    },
  ];

  // Fonction pour créer les éléments de la galerie
  function createGalleryItems(items) {
    galleryContainer.innerHTML = "";

    items.forEach((item, index) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.dataset.category = item.category;

      galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}">
                <div class="gallery-item-overlay">
                    <h3>${item.caption}</h3>
                </div>
            `;

      galleryItem.addEventListener("click", () => openModal(index));

      galleryContainer.appendChild(galleryItem);
    });
  }

  // Initialiser la galerie
  if (galleryContainer) {
    createGalleryItems(galleryItems);
  }

  // Filtrage de la galerie
  if (filterButtons) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Mettre à jour la classe active
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        // Filtrer les éléments
        if (filter === "all") {
          createGalleryItems(galleryItems);
        } else {
          const filteredItems = galleryItems.filter(
            (item) => item.category === filter
          );
          createGalleryItems(filteredItems);
        }
      });
    });
  }

  // Variables pour la galerie modale
  let currentIndex = 0;
  let currentItems = galleryItems;

  // Ouvrir la modal
  function openModal(index) {
    if (galleryModal) {
      currentIndex = index;
      updateModalContent();
      galleryModal.style.display = "block";

      // Désactiver le défilement de la page
      document.body.style.overflow = "hidden";
    }
  }

  // Fermer la modal
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      galleryModal.style.display = "none";

      // Réactiver le défilement de la page
      document.body.style.overflow = "auto";
    });
  }

  // Mettre à jour le contenu de la modal
  function updateModalContent() {
    const item = currentItems[currentIndex];
    modalImg.src = item.src;
    modalCaption.textContent = item.caption;
  }

  // Navigation dans la galerie
  if (modalPrev) {
    modalPrev.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + currentItems.length) % currentItems.length;
      updateModalContent();
    });
  }

  if (modalNext) {
    modalNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % currentItems.length;
      updateModalContent();
    });
  }

  // Gestion des touches clavier pour la navigation dans la galerie
  document.addEventListener("keydown", (e) => {
    if (galleryModal && galleryModal.style.display === "block") {
      if (e.key === "ArrowLeft") {
        currentIndex =
          (currentIndex - 1 + currentItems.length) % currentItems.length;
        updateModalContent();
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % currentItems.length;
        updateModalContent();
      } else if (e.key === "Escape") {
        galleryModal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
  });

  // Animation des tentacules flottantes
  const tentacles = document.querySelectorAll(".floating-tentacle");

  tentacles.forEach((tentacle) => {
    // Ajouter un délai aléatoire pour chaque tentacule
    const randomDelay = Math.random() * 5;
    tentacle.style.animationDelay = `${randomDelay}s`;
  });

  // Gestion du formulaire de contact
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simuler l'envoi du formulaire
      const submitButton = contactForm.querySelector(".submit-button");
      const originalText = submitButton.textContent;

      submitButton.textContent = "Envoi en cours...";
      submitButton.disabled = true;

      setTimeout(() => {
        // Afficher un message de succès
        const formElements = contactForm.elements;
        contactForm.innerHTML = `
                    <div class="success-message">
                        <h3>Message envoyé avec succès !</h3>
                        <p>Merci ${formElements.name.value} pour ton message. Notre équipe de poulpes messagers te contactera très bientôt !</p>
                        <button class="submit-button" id="reset-form">Envoyer un autre message</button>
                    </div>
                `;

        // Permettre d'envoyer un autre message
        document.getElementById("reset-form").addEventListener("click", () => {
          window.location.reload();
        });
      }, 2000);
    });
  }

  // Animation au défilement
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".team-member, .dive-card, .pricing-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Initialiser les éléments avec une opacité de 0
  const elementsToAnimate = document.querySelectorAll(
    ".team-member, .dive-card, .pricing-card"
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Déclencher l'animation au chargement et au défilement
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);

  // Effet de parallaxe pour le fond de la section héro
  if (heroSection) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
  }

  // Animation des jauges d'intensité
  const intensityBars = document.querySelectorAll(".intensity-fill");

  const animateIntensityBars = () => {
    intensityBars.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (barPosition < screenPosition) {
        const width = bar.style.width;
        bar.style.width = "0";

        setTimeout(() => {
          bar.style.transition = "width 1.5s ease-in-out";
          bar.style.width = width;
        }, 200);
      }
    });
  };

  // Déclencher l'animation des jauges au chargement et au défilement
  window.addEventListener("load", animateIntensityBars);
  window.addEventListener("scroll", animateIntensityBars);

  // Effet de profondeur au survol des cartes
  const diveCards = document.querySelectorAll(".dive-card");
  diveCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Position X de la souris dans la carte
      const y = e.clientY - rect.top; // Position Y de la souris dans la carte

      // Calculer la rotation en fonction de la position de la souris
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20; // Rotation X (haut/bas)
      const rotateY = (centerX - x) / 20; // Rotation Y (gauche/droite)

      // Appliquer la transformation
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    // Réinitialiser la transformation lorsque la souris quitte la carte
    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
      setTimeout(() => {
        card.style.transition = "transform 0.5s ease";
      }, 100);
    });

    // Désactiver la transition lors de l'entrée de la souris pour un effet fluide
    card.addEventListener("mouseenter", () => {
      card.style.transition = "none";
    });
  });
});
