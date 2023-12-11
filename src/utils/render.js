import Navigate from '../Components/Router/Navigate';

const clearPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
};

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = document.createElement('h4');
  pageTitle.innerText = title;
  main.appendChild(pageTitle);
};

async function quizLinkEventListeners() {
  const btnCategory = document.querySelectorAll('.quiz_link');
  btnCategory.forEach((quizLink) => {
    quizLink.addEventListener('click', (e) => {
      e.preventDefault();
      const quizId = e.currentTarget.getAttribute('id_quiz');
      console.log('helloworld');
      console.log(quizId);
      Navigate(`/quiz?id=${quizId}`);
    });
  });
}

export { clearPage, renderPageTitle, quizLinkEventListeners };
