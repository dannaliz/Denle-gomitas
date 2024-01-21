const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
.typeString('Ciudad de México')
.pauseFor(200)
.start();