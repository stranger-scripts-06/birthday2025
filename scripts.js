// IntersectionObserver for animated elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}, {
  threshold: 0.6
});

document.querySelectorAll('.animated-heading').forEach(el => observer.observe(el));


window.addEventListener('load', () => {
  const images = document.querySelectorAll('.peek');

  images.forEach(img => {
    // Set starting offset for peekIn animation based on position
    if(img.classList.contains('peek-top-left')) {
      img.style.setProperty('--startX', '-30px');
      img.style.setProperty('--startY', '-20px');
    } else if(img.classList.contains('peek-top-right')) {
      img.style.setProperty('--startX', '30px');
      img.style.setProperty('--startY', '-25px');
    } else if(img.classList.contains('peek-bottom-left')) {
      img.style.setProperty('--startX', '-50px');
      img.style.setProperty('--startY', '50px');
    } else if(img.classList.contains('peek-bottom-right')) {
      img.style.setProperty('--startX', '30px');
      img.style.setProperty('--startY', '25px');
    }

    // When appear animation ends, start floating animation
    img.addEventListener('animationend', () => {
      img.style.animation = 'floatUpDown 4s ease-in-out infinite';
      img.style.opacity = '0.85';
      img.style.transform = 'translateY(0)';
    });
  });
});


const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}, {
  threshold: 0.6
});

document.querySelectorAll('.animated-heading').forEach(el => observer2.observe(el));


const envelope = document.querySelector('.envelope-wrapper');
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
        });


const section2 = document.querySelector("#section2");
  const heart = section2.querySelector(".heart");

  const observerheart = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heart.classList.add("visible");
        } else {
          heart.classList.remove("visible");
        }
      });
    },
    { threshold: 0.5 } // Adjust as needed
  );

  observerheart.observe(section2);

  

  