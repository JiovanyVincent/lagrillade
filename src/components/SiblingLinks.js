export function SiblingLinks() {
  
  window.addEventListener('load', () => {
    let allLinks = document.getElementsByClassName('nav-link');
    
    let firstLink = document.getElementById('firstL');
        firstLink.classList.add('active');

    for (let i = 0; i < allLinks.length; i++) {

      allLinks[i].addEventListener('click', (e) => {
        let link = allLinks[0];

        while (link) {
          if(link.tagName === "A") {
            link.classList.remove('active');
          }
          link = link.nextElementSibling;
        }

        e.target.classList.add('active');
      });
    }
  })
}