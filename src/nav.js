function nav() {
  const div = document.createElement('div');
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const createRadioInput = (id) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('id', id);
    input.setAttribute('name', 'tab-browse');
    return input;
  };

  const homeRadioBtn = createRadioInput('home'); // checked at start?
  homeRadioBtn.setAttribute('checked', '');
  const menuRadioBtn = createRadioInput('menu');
  const contactRadioBtn = createRadioInput('contact');
  nav.appendChild(homeRadioBtn);
  nav.appendChild(menuRadioBtn);
  nav.appendChild(contactRadioBtn);

  const ul = document.createElement('ul');

  const createNavListItem = (forValue, labelText) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    label.setAttribute('for', forValue);
    label.textContent = labelText;
    li.appendChild(label);
    return li;
  };

  const homeTab = createNavListItem('home', 'Home');
  const menuTab = createNavListItem('menu', 'Menu');
  const contactTab = createNavListItem('contact', 'Contact');
  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(contactTab);

  nav.appendChild(ul);
  div.appendChild(nav);

  return div; // append div to div#content in here or in index.js?
}

export default nav;
