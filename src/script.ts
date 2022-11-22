

export default {};

const apiKey = '0062ed30cbe67e2d2784de3614cfc7b1';

const urlTopTracks = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json&limit=18`;
const urlTopArtists = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json&limit=12`;

const $buttonSearchNav = document.querySelector('#buttonSearchNav') as HTMLButtonElement;

const $formSearch = document.querySelector('.form-search') as HTMLFormElement;
const $inputSreach = document.querySelector('.form-search__input') as HTMLInputElement;
const $buttonCancel = document.querySelector('#buttonCancel') as HTMLButtonElement;

const $sectionHotMusic = document.querySelector('.section__hot-music') as HTMLDivElement;
const $sectionPopularMusic = document.querySelector('.section__popular-music') as HTMLDivElement;

type FetchTrack = {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: ArtistTrack;
  image: Image[];
}

type Track = {
  tags: Tag[];
} & FetchTrack;

type ArtistTrack = {
  name: string;
  mbid: string;
  url: string;
};

type FetchArtist = {
  playcount: string;
  listeners: string;
  streamable: string;
  image: Image[];
} & ArtistTrack;

type Artist = {
  tags: Tag[];
} & FetchArtist;

type Streamable = {
  '#text': string;
  fulltrack: string;
};

type Image = {
  '#text': string;
  size: string;
};

type Tag = {
  name: string;
  count: string;
  url: string;
};

/**
 * Показывает форму на странице
 */
$buttonSearchNav.addEventListener('click', () => {
  $formSearch.classList.add('shown-form');
});

/**
 * Убирает форму со страницы
 */
$buttonCancel.addEventListener('click', () => {
  $formSearch.classList.remove('shown-form');
  $inputSreach.value = '';
});

/**
 * Кодирует url и переходит по нему
 */
$formSearch.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  
  const url = `search.html?nameMusick=${encodeURIComponent($inputSreach.value.trim())}`;

  $inputSreach.value = '';

  location.href = url;
});

/**
 * Создаёт шаблон для тегов как у исполнителей, так и у треков
 * @param obj объект из которого необходимо получить список тегов
*/
function getTemplatePopularTags(obj: Artist | Track) {
  let template = '<ul class="popular-tags">';
    obj.tags.forEach(tag => {
      template += `
      <li class="popular-tags-item">
        <a href="${tag.url}" class="link tag-music">${tag.name}</a>
      </li>`
    });
  template += '</ul>';

  return template;
}

/**
 * Получает с Last.fm данные о популярных треках
 * в количестве 18 штук
 */
async function fetchTopTracks() {
  const response = await fetch(urlTopTracks);
  const tracksJson = await response.json();
  return tracksJson['tracks']['track']; 
}

/**
 * Добавляет к каждому треку топ 3 его тэга
 * @returns возвращает новый тип трека с тегами
*/
async function addTagsTracks(tracks: FetchTrack[]) {
  const tracksWithTags:Track[] = [];

  for (const track of tracks) {
    const urlTrack = `https://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=${track.artist.name}&track=${track.name}&api_key=${apiKey}&format=json`;
    const response = await fetch(urlTrack);
    const tags = await response.json();
    const trackWithTag = { ...track } as Track;
    trackWithTag.tags = tags['toptags']['tag'].slice(0, 3);
    tracksWithTags.push(trackWithTag);
  }

  return tracksWithTags;
}

/**
 * Отображает треки на странице
*/
function displayTracks(tracks: Track[]) {
  tracks.forEach(track => {
    const template = `
    <article class="popular-music">
      <img class="popular-music__img" src="${track.image[1]['#text']}">
      <div class="popular-music__body">
        <a class="link popular-music__link" href="${track.url}">
          <h3 class="popular-music__title">${track.name}</h3>
        </a>
        <a class="link popular-music__link" href="${track.artist.url}">
          <h4 class="popular-music__author">${track.artist.name}</h4>
        </a> 
        ${getTemplatePopularTags(track)}
      </div>
    </article>`;

    $sectionPopularMusic.insertAdjacentHTML('beforeend', template);
  });
}

/**
 * Получает с Last.fm данные о популярных исполнителях
 * в количестве 12 штук
*/
async function fetchTopArtists() {
  const response = await fetch(urlTopArtists);
  const artistsJson = await response.json();
  return artistsJson['artists']['artist'];
}

/**
 * Добавляет топ 3 популярных тега к каждому артисту
 * @returns возвращает новый тип исполнителя с тегами
*/
async function addTagsArtists(artists: FetchArtist[]) {
  const artistsWithTags: Artist[] = [];

  for (const artist of artists) {
    const urlTrack = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${artist.name}&api_key=${apiKey}&format=json`;
    const response = await fetch(urlTrack);
    const tags = await response.json();
    const artitsWithTag = { ...artist } as Artist;
    artitsWithTag.tags = tags['toptags']['tag'].slice(0, 3);
    artistsWithTags.push(artitsWithTag);
  }

  return artistsWithTags;
}

/**
 * Отображает исполнителей на странице
*/
function displayArtists(artists: Artist[]) {
  artists.forEach(artist => {
      const template = `
      <article class="hot-music">
      <a class="link hot-music__link" href="${artist.url}">
        <img class="hot-music__img" src="${artist.image[3]["#text"]}">   
        <h3 class="hot-music__title">${artist.name}</h3>
      </a>
      ${getTemplatePopularTags(artist)}
    </article>`;
    $sectionHotMusic.insertAdjacentHTML('beforeend', template);
  });
}

/**
 * Точка входа
 */
async function main() {
  const topArtists = await fetchTopArtists() as FetchArtist[];
  const artistsWithTags = await addTagsArtists(topArtists);
  displayArtists(artistsWithTags);

  const topTracks = await fetchTopTracks() as FetchTrack[];
  const tracksWithTags = await addTagsTracks(topTracks);
  displayTracks(tracksWithTags);
}

main();
