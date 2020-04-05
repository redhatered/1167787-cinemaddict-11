export const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export const renderList = (container, template, count = 1) => {
  for (let i = 0; i < count; i++) {
    render(container, template);
  }
};
