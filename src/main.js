import {createHeaderProfileTemplate} from './components/header-profile-template';
import {createMenuTemplate} from './components/menu-template';
import {createSortTemplate} from './components/sort-template';
import {createFilmsTemplate} from './components/films-template';
import {createFilmsListTemplate} from './components/films-list-template';
import {createFilmCardTemplate} from './components/film-card-template';
import {createShowMoreTemplate} from './components/show-more-template';
import {createFilmsListExtraTemplate} from './components/films-list-extra-template';
import {createFilmDetailsTemplate} from './components/film-details-template';
import {render, renderList} from './components/utils';

const CARDS_COUNT = 5;
const EXTRA_COUNT = 2;
const TOP_RATED_CARDS_COUNT = 2;
const MOST_COMMENTED_CARDS_COUNT = 2;
const headerElement = document.querySelector(`.header`);

render(headerElement, createHeaderProfileTemplate());

const menuElement = document.querySelector(`.main`);

render(menuElement, createMenuTemplate());
render(menuElement, createSortTemplate());
render(menuElement, createFilmsTemplate());

const filmsElement = document.querySelector(`.films`);

render(filmsElement, createFilmsListTemplate());

const filmsListContainerElement = filmsElement.querySelector(`.films-list__container`);

renderList(filmsListContainerElement, createFilmCardTemplate(), CARDS_COUNT);

const filmsListElement = document.querySelector(`.films-list`);

render(filmsListElement, createShowMoreTemplate());
renderList(filmsElement, createFilmsListExtraTemplate(), EXTRA_COUNT);

const filmsListExtraElements = document.querySelectorAll(`.films-list--extra`);
const filmsListContainerTopRated = filmsListExtraElements[0].querySelector(`.films-list__container`);
const filmsListContainerMostCommented = filmsListExtraElements[1].querySelector(`.films-list__container`);

renderList(filmsListContainerTopRated, createFilmCardTemplate(), TOP_RATED_CARDS_COUNT);
renderList(filmsListContainerMostCommented, createFilmCardTemplate(), MOST_COMMENTED_CARDS_COUNT);

const bodyElement = document.querySelector(`body`);

render(bodyElement, createFilmDetailsTemplate());
