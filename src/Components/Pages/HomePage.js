// ----------------------------------------- HOME PAGE -----------------------------------------

// ----------------------------------------- IMPORTS -----------------------------------------

import image1 from '../../img/homePage.png';
import image2 from '../../img/homePage2.png';

// ----------------------------------------- HOME PAGE MIDDLEWARE  -----------------------------------------

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <section id="SectionMain">

        <section class="banner pt-5 d-flex justify-content-center align-items-center ">
          <div class="container my-5 py-5">
            <div class="row">
            <div class="col-md-12 col-12 col-lg-6 text-center d-flex align-items-center">
                <h1  >
                Prêt à explorer l'univers des quiz ? Découvrez une multitude de catégories et mettez vos connaissances à l'épreuve !
                <div>
                <a class="btn btn-style" id = "categorie">Explorer les catégories</a> 
                </div>
                </h1>
                </div>
                <div class="col-12 col-lg-6 col-md-12">
                <img  class="img-fluid" src="${image1}" alt="image banner">
                </div>
                </div>
          </div>
        </section>
      
        <svg style="background color:#D9EEE1;" width="100%" height="70" viewBox="0 0 100 100"' preserveAspectRatio="none"> 
        <path id="wavepath" d="M0, 0 L110, 0C35,150 35,0 0,100z" fill="#F4EEFF"></path>
         </svg>
      
        <section class="pt-5 d-flex justify-content-center align-items-center ">
        <div class="container my-5 py-5">
          <div class="row">
          <div class="col-12 col-lg-6 col-md-12">
          <h1> <img class="img-fluid"src="${image2}" alt="image banner"> <h1> 
            </div>
            <div class="col-md-12 col-12 col-lg-6 text-center d-flex align-items-center">
            <h3>
            Partager vos connaissances avec le monde ?<br>Laissez-vous emporter par votre imagination et créez votre propre QuizWiz !
            <div>
            <a class="btn btn-style" href="/register" data-uri="">Inscrivez vous gratuitement</a> <!--href ou data-uri????-->
            </div>
              </h3>
              </div>
            </div>
          </div>
      </section>
        </section>`;

        const btnCategory = document.getElementById('categorie');
        btnCategory.addEventListener('click', renderCategorie);
};

function renderCategorie(){
  Navigate('/login');
}

export default HomePage;
