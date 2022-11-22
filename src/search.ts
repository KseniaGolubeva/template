
export default {};

const apiKey = '0062ed30cbe67e2d2784de3614cfc7b1';

const $mainTitle = document.querySelector('.main__title') as HTMLHeadingElement;

const $form = document.querySelector('.main__form') as HTMLFormElement;
const $input = document.querySelector('.main__form-input') as HTMLInputElement;
const $buttonCancel = document.querySelector('#buttonCancel') as HTMLButtonElement;

const $sectionBody = document.querySelectorAll('.section__body') as NodeListOf<HTMLDivElement>;
const $listArtists = $sectionBody[0];
const $listAlbums = $sectionBody[1];
const $listTrack = document.querySelector('.list-track') as HTMLUListElement;

const $sections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;

type FetchTrack = {
  artist: string;
  streamable: string;
  image: Image[];
} & Track;

type Track = {
  name: string;
  mbid: string;
  url: string;
  listeners: string;
}

type TrackInfo = {
  duration: string;
  strimable: Streamable;
  playcount: string;
  artist: ArtistTrack;
  album?: AlbumTrack;
  toptags: {
    tag: Tag[];
  }
  wiki: Wiki;
} & Track;

type FetchAlbum = {
  name: string;
  streamable: string;
} & Album;

type Album = {
  artist: string;
  mbid: string;
  url: string;
  image: Image[];
}

type AlbumTrack = {
  title: string;
  '@attr': {
    position: string;
  }
}  & Album;

type FetchArtist = {
  listeners: string;
  streamable: string;
  image: Image[];
} & ArtistTrack;

type ArtistTrack = {
  name: string;
  mdid: string;
  url: string;
}

type Streamable = {
  '#text': string;
  fulltrack: string;
}

type Wiki = {
  published: string;
  summary: string;
  content: string;
}

type Image = {
  '#text': string;
  size: string;
}

type Tag = {
  name: string;
  url: string;
}

/**
 * Кодирует Url и переходит по нему
 */
$form.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();

  const url = `search.html?nameMusick=${encodeURIComponent($input.value.trim())}`;

  location.href = url;
})

/**
 * Очищает форму поиска
 */
$buttonCancel.addEventListener('click', () => {
  $input.value = '';
});

/**
 * Парсит Url, извлекая название трека.
 * @returns возвращает название трека или ''
 */
function getNameTrack() {
  try {
    const track = decodeURIComponent(location.href).split('?')[1].split('=')[1];

    return track;
  } catch (error) {
    return '';
  }
}

/**
 * Получает от LastFm все релевантные треки с переданным названием треком
 * в количестве 10 штук
 * @param name название трека
 */
async function feachTracks(name: string) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${apiKey}&format=json&limit=10`;
  const response = await fetch(url);
  const tracksJson = await response.json();
  return tracksJson['results']['trackmatches']['track'] as FetchTrack[];
}

/**
 * Получает от LastFm информацию по каждому треку
 * @param name название трека
 * @returns возвращает список треков с информацией по каждому из них
 */
async function addInfoTracks(tracks: FetchTrack[]) {
  const tracksInfo: TrackInfo[] = [];

  for (const track of tracks) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${track.artist}&track=${track.name}&format=json`;
    const response = await fetch(url);
    const trackWithInfoJson = await response.json();
    tracksInfo.push(trackWithInfoJson['track'] as TrackInfo);
  }

  return tracksInfo;
}

/**
 * Получает от LastFm все альбомы с переданным треком
 * в количестве 8 штук
 * @param name название трека
 */
async function fetchAlbums(name: string) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${name}&api_key=${apiKey}&format=json&limit=8`;
  const response = await fetch(url);
  const albumsJson = await response.json();
  return albumsJson['results']['albummatches']['album'] as FetchAlbum[];
}

/**
 * Получает от LastFm всех артистов с переданным треком
 * в количестве 8 штук
 * @param name название трека
 */
async function fetchArtists(name: string) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=${apiKey}&format=json&limit=8`;
  const response = await fetch(url);
  const artistsJson = await response.json();
  return artistsJson['results']['artistmatches']['artist'] as FetchArtist[];
}

/**
 * Отображает всех исполнителей на странице
 */
function displayArtists(artists: FetchArtist[]) {
  artists.forEach(artist => {
    const path = artist.image[3]['#text'] ? artist.image[3]['#text'] : 'img/star.jpg';
    const template = `
      <a class="link" href="${artist.url}">
        <article class="about-music">
          <img class="about-music__img" src="${path}" alt="Preview">
          <h3 class="about-music__title">${artist.name}</h3>
          <span class="about-music__description">listeners ${artist.listeners}</span>
        </article>
      </a>`;
    
    $listArtists.insertAdjacentHTML('beforeend', template);
  });
}

/**
 * Отображает все альбомы на странице
 */
function displayAlbums(albums: FetchAlbum[]) {
  albums.forEach(album => {
    const path = album.image[3]['#text'] ? album.image[3]['#text'] : 'img/track.png';
    const template = `
      <a class="link" href="${album.url}">
        <article class="about-music">
          <img class="about-music__img" src="${path}" alt="Preview">
          <h3 class="about-music__title">${album.name}</h3>
          <span class="about-music__description">${album.artist}</span>
        </article>
      </a>`;
    
    $listAlbums.insertAdjacentHTML('beforeend', template);
  });
}

/**
 * Отображает треки на странице
 */
function displayTracks(tracks: TrackInfo[]) {
  tracks.forEach(track => {
    if (track) {
      const path = track.album !== undefined && track.album.image[0]['#text'] !== ''
      ? track.album.image[0]['#text']
      : 'img/note.png';
    const template = `
    <li class="list-track__item">
      <div class="list-track__content">
        <a class="list-track__img" href="#">
          <svg class="svg-track-img" xmlns="http://www.w3.org/2000/svg" 
               width="100%" height="100%" fill="currentColor" 
               class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
          </svg>
        </a>
        <img class="list-track__img" src="${path}" alt="Preview">
        <a class="list-track__img" href="#">
          <svg class="svg-track-img list-track__like" xmlns="http://www.w3.org/2000/svg" 
               width="100%" height="100%"  fill="currentColor" 
               class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </a>
      <h3 class="list-track__music-name"><a class="link" href="${track.url}">${track.name}</a></h3>
      </div>
      <span class="list-track__author"><a class="link" href="${track.artist.url}">${track.artist.name}</a></span>
      <time class="list-track__time">${getTime(+track.duration)}</time>
    </li>`;
  
    $listTrack.insertAdjacentHTML('beforeend', template);
    }
  });
}

/**
 * Выводит время в читаемом формате
 * @param duration количество миллисекунд
 * @returns строка в формате 'x?x:xx' или ''
 */
function getTime(duration: number) {
  const durationSeconds = duration / 1000;

  let seconds = (durationSeconds % 60).toString();
  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }
  const time = `${Math.trunc(durationSeconds / 60)}:${seconds}`;
  if (time !== '0:00') {
    return time;
  } else {
    return '';
  }
}

/**
 * Убирает все секции со страницы
 */
function hideSections() {
  $mainTitle.hidden = true;

  $sections.forEach(section => {
    section.classList.add('hidden');
  });
}

/**
 * Показывает все секции на странице
 */
function showSection() {
  $mainTitle.hidden = false;

  $sections.forEach(section => {
    section.classList.remove('hidden');
  });
}

/**
 * Инициализирует форму
 */
function initializeForm(nameTrack: string) {
  $mainTitle.append(` "${nameTrack}"`);
  $input.value = nameTrack;
}

/**
 * Точка входа
 */
async function main() {
  const nameTrack = getNameTrack();

  if (nameTrack) {
    showSection();

    initializeForm(nameTrack);

    const artists = await fetchArtists(nameTrack);
    displayArtists(artists);
  
    const albums = await fetchAlbums(nameTrack);
    displayAlbums(albums);
  
    const tracks = await feachTracks(nameTrack);
    const tracksInfo = await addInfoTracks(tracks);
    displayTracks(tracksInfo);

  } else {
    hideSections();
  }
}

main();