/* eslint-disable prettier/prettier */

import { v4 as uuidv4 } from 'uuid';

let WEEK = [
  { id: '1', weekday: 'Montag', foodId: '774d72d3-09af-4b12-a229-2ec429a8335d' },
  { id: '2', weekday: 'Dienstag', foodId: 'cd8a9b36-289a-4dbc-abe7-6620930b4249' },
  { id: '3', weekday: 'Mittwoch', foodId: '55e8b3d7-0369-414b-a7d6-c01915b3979c' },
  { id: '4', weekday: 'Donnerstag', foodId: 'fda07c92-43c5-404e-a34f-70ac72f7cb28' },
  { id: '5', weekday: 'Freitag', foodId: '95628920-e254-4334-9017-7f62324f1909' },
  { id: '6', weekday: 'Samstag', foodId: '73a20a47-4627-4744-8392-559db2d7bb9b' },
  { id: '7', weekday: 'Sonntag', foodId: 'b9be78c1-a3e7-4c08-9436-41e86a153833' }];

let FOOD = [
  { id: '774d72d3-09af-4b12-a229-2ec429a8335d', name: 'Spaghetti Bolognese', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Food_in_Lichen_Stary_%28spaghetti_bolognese%29.jpg' },
  { id: 'cd8a9b36-289a-4dbc-abe7-6620930b4249', name: 'Käsespätzle', image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/K%C3%A4sesp%C3%A4tzle.jpg' },
  { id: '55e8b3d7-0369-414b-a7d6-c01915b3979c', name: 'Rahmsoße mit Spätzle', image: 'https://www.leckerei-bei-kay.de/wp-content/uploads/2012/02/Schweinefilet_Sahnesosse_Spaetzle.jpg' },
  { id: 'fda07c92-43c5-404e-a34f-70ac72f7cb28', name: 'Lasagne', image: 'https://en.wikipedia.org/wiki/Lasagne#/media/File:Lasagne_-_stonesoup.jpg' },
  { id: '95628920-e254-4334-9017-7f62324f1909', name: 'Salat', image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG'},
  { id: '73a20a47-4627-4744-8392-559db2d7bb9b', name: 'Überbackenes Baguette', image: 'https://www.kochwiki.org/images/9/9d/Ueberbackenes_baguette_champignons_1.jpg'},
  { id: 'b9be78c1-a3e7-4c08-9436-41e86a153833', name: 'Burger mit Pommes', image: 'https://de.wikipedia.org/wiki/Hamburger#/media/Datei:Hamburger_(black_bg).jpg'},
];

export const getWeekList = () => {
  return WEEK;
};

export const setWeekday = (weekday, foodId) => {
  const weekdayOfWeek = WEEK.find(week => week.weekday === weekday);
  if (foodId) {
    weekdayOfWeek.foodId = foodId;
  } else {
    weekdayOfWeek.foodId = null;
  }
};

export const getFoodList = () => {
  return FOOD;
};

export const getFood = (id) => {
  return FOOD.find(food => food.id === id);
};

export const addFood = (name) => {
  this.FOOD.push({ id: uuidv4, name: name });
};

export const filterFoodList = (filter) => {
  if (filter) {
    return FOOD.filter(food => food.name.toLowerCase().includes(filter.toLowerCase()));
  } else {
    return FOOD;
  }
};
