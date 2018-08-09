/* variables */
const splash = document.querySelector('#splashScreen');
const main = document.getElementById('main');

main.style.display = 'none'

search.addEventListener('keyup', () => {
    searchWord = search.value;
    filterRestData(listRest, searchWord);
  });
  
setTimeout(() => {
    splash.remove()
    main.style.display = 'block'
}, 2000)

fetch('../data/restaurant.json')
  .then(response => response.json())
  .then(data => {
    listRest = data;
    listRest.map(x => {
      showRest(x.name, x.address, x.description, x.photo);
    });
  });

const filterRestData = (list, search) => {
  panel.innerHTML = '';
  listRest.filter(rest => {
    if (rest.type.toUpperCase().includes(search.toUpperCase())) {
      showRest(rest.name, rest.address, rest.description, rest.photo)
    }
  });
};

const showRest = (name, address, description, photo) => {
  panel.innerHTML += `
  <div class="col m4">
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${photo}">
        <span class="activator card-title">${name}</span>
      </div>

      <div class="card-content">
        <span class="card-title activator grey-text text-darken-2" style="font-size: 15px">
          ${address}
          <i class="material-icons right">more_vert</i>
        </span>

      </div>

      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${name}
          <i class="material-icons right">close</i>
        </span>
        <p>${description}</p>
      </div>
    </div>
  </div>`;
};