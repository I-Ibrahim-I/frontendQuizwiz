import Navigate from '../Router/Navigate';

const Footer = () => {
    renderFooter();
};


function renderFooter() {
  const footer = document.querySelector('footer');
  const footerHtml = `
      <div class="text-center text-lg-start">
        <div class="text-center p-3">
        COPYRIGHT © 2023 - 2024 - TOUS DROITS RESERVES
        <a class="text-body" id = "footerLink" href = '#' >QuizWiz</a>
      </div>
       
      </div>  
  `;

  const btnFooter = document.getElementById('footerLink');

  if(btnFooter !== null){
    btnFooter.addEventListener('click',renderHomePage);
  }

  

  footer.innerHTML = footerHtml;
}

function renderHomePage(e){
  e.preventDefault();
  Navigate('/');
}

export default Footer;