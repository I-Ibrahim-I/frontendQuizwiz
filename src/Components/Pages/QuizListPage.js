import { clearPage } from '../../utils/render';
import quizLinkEventListeners from '../../utils/quiz';
// eslint-disable-next-line import/named
// import {categoryName} from "./CategoriesPage";
import { readAllQuizzesByCategory } from '../../models/quizzes';
import Navigate from '../Router/Navigate';

// const numberOfQuizInCategory = 10; // voir dans la db

let categoryName;

const QuizListPage = async () => {
  clearPage();
  const url = new URLSearchParams(window.location.search);
  categoryName = url.get('label');
  console.log('Le labell', categoryName);
  renderQuizListInCategory();
};

// eslint-disable-next-line no-shadow
async function renderQuizListInCategory() {
  const quizzesInCategory = await readAllQuizzesByCategory(categoryName);
  const main = document.querySelector('main');
  let QuizList = '';
  const cardsInRow = 3; // nbre de carte par row;
  let counter = 0;
  QuizList = `
    <section>
        <div class="headerLabel">
            <h2>${categoryName}</h2>
        </div>
    </section>

    <section>
    <div class="container ">
    <div class="row mt-3 lowPart">
  `;
  if (quizzesInCategory.length === 0) {
    console.log('aucun quiz trouvé');
    QuizList += `   
    <div class="alert alert-light text-center alertQuizListPage" role="alert">
    <p>Aucun quiz n'a été créé pour cette catégorie.
    <a id = "createQuiz" class="alert-link">Sois le premier à en créer un !</a>
    </p>
  </div>
 `;
  } else {
    quizzesInCategory.forEach((q) => {
      if (counter === cardsInRow) {
        console.log('COUNTER:', counter);
        QuizList += `
      </div><div class="row mt-3 lowPart">
    `;
        counter = 0;
      }

      QuizList += `
    <div class="col-12 col-lg-3 col-md-6 mt-3">
    <a id_quiz="${q.quiz_id}" class="quiz_link text-decoration-none">
        <div class="card cardQuizzes  style="width: 10rem;">
            <div class="card-body">
               <h5 class="card-title">${q.title}</h5>
                <p class="card-text"> ${q.pseudo}</p>
            </div>
        </div>
        </a>
        </div>
  `;
      // eslint-disable-next-line no-plusplus
      counter++;
      console.log('compteur apres incrementation', counter);
    });
  }
  QuizList += `

</div>
</div>
</section>
`;

  const btnCreateQuiz = document.getElementById('createQuiz');
  btnCreateQuiz.addEventListener('click', renderCreateQuiz);
  main.innerHTML = QuizList;
  quizLinkEventListeners();
  console.log('Categorie:');
}

function renderCreateQuiz() {
  Navigate('/create');
}
export default QuizListPage;
