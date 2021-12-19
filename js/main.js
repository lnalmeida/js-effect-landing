const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');

for (var i = 0; i < 400; i++) {
     banner.innerHTML += "<div class='blocks'></div>";
     const duration = Math.random() * 20;
     blocks[i].style.animationDuration = `${15 + duration}s`;
     blocks[i].style.animationDelay = `${duration}s`;

}