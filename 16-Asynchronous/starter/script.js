'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
/* 
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function (e) {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
    </div>
    </article>
`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('usa');
getCountryData('portugal');
getCountryData('germany');
getCountryData('nigeria');
 */

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
    </div>
    </article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/* 
// AJAX call country 1
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function (e) {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${neighbour}
`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log(`1 second passed`);
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
 */

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();
/* 
const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg}`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders;

      if (!neighbour) throw new Error('No neigbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💣💣💣`);
      renderError(`Something went wrong 💣💣💣 ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getCountryData('dsdfsfdsfdfs');
btn.addEventListener('click', function () {
  getCountryData('jamaica');
}); */

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=65c7fd816a52469795d988f06dc1d0e4`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      const address = data.results[0]?.components;

      if (!address || !address.city || !address.country) {
        throw new Error(
          'Could not find location with longtitude and latitude provided'
        );
      }

      console.log(`You are in ${address.city}, ${address.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${address.country.toLowerCase()}`
      );
    })
    .then(res => res.json())
    .then(data => {
      data = data[0];
      console.log(data);
      const html = `<article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[Object.keys(data.languages)[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
        </div>
        </article>
    `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    })
    .catch(err => console.log(err));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
 */

/*
console.log('Test start'); //1
setTimeout(() => console.log('0 sec timer'), 0); //4
Promise.resolve('Resolved promise 1').then(res => console.log(res)); //3

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end'); //2
*/

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening ');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));
 */

/* 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      const { latitude: lat, longtitude: lng } = pos.coords;

      return fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=65c7fd816a52469795d988f06dc1d0e4`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      const address = data.results[0]?.components;

      console.log(address);

      if (!address || !address.country) {
        throw new Error(
          'Could not find location with longtitude and latitude provided'
        );
      }

      console.log(`You are in ${address.city}, ${address.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${address.country.toLowerCase()}`
      );
    })
    .then(res => res.json())
    .then(data => {
      data = data[0];
      console.log(data);
      const html = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[Object.keys(data.languages)[0]]
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[Object.keys(data.currencies)[0]].name
              }</p>
          </div>
          </article>
      `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    })
    .catch(err => console.log(err));
};

btn.addEventListener('click', whereAmI);
 */

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/* const imgContainer = document.querySelector('.images');
let curImg;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const afterImgLoad = function (res) {
  console.log(res);
  return wait(2);
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img');
    imgEl.addEventListener('error', e => {
      e.preventDefault();
      reject('Error while loading img');
    });

    imgEl.src = imgPath;

    imgEl.addEventListener('load', e => {
      imgContainer.insertAdjacentElement('beforeend', imgEl);
      curImg = imgEl;
      resolve('Image loaded successfully');
    });
  });
};

createImage('img/img-1.jpg')
  .then(afterImgLoad)
  .then(() => {
    curImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(afterImgLoad)
  .then(() => {
    curImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(afterImgLoad)
  .catch(err => console.error(err));
  */
/* 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longtitude: lng } = pos.coords;

    // Reverse Geo Coding
    const resGeo = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=65c7fd816a52469795d988f06dc1d0e4`
    );
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json();
    const address = dataGeo.results[0]?.components;

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${address.country.toLowerCase()}`
    );

    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${address.city}, ${address.country}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);

    // Reject promise from asyn function
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log(`3: Finished getting location`);
})(); */
// try {
//   let y = 1;
//   const x = 2;
//   7 = 3;
// } catch (err) {
//   alert(err.message);
// }
/* 
const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg}`);
    }
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
 */

/* 
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);

  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tazania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
 */

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const imgContainer = document.querySelector('.images');
const imgArray = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const afterImgLoad = function (res) {
  console.log(res);
  return wait(2);
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img');
    imgEl.addEventListener('error', e => {
      e.preventDefault();
      reject('Error while loading img');
    });

    imgEl.src = imgPath;

    imgEl.addEventListener('load', e => {
      imgContainer.insertAdjacentElement('beforeend', imgEl);
      resolve(imgEl);
    });
  });
};

const loadNPause = async function (imgArr) {
  try {
    let img = await createImage(imgArr[0]);
    await wait(2);
    img.style.display = 'none';

    img = await createImage(imgArr[1]);
    await wait(2);

    img.style.display = 'none';
    img = await createImage(imgArr[2]);

    img.style.display = 'none';
  } catch (err) {
    console.error(err.message);
  }
};
loadNPause(imgArray);

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const resImgs = await Promise.all(imgs);
    resImgs.forEach(img => {
      img.classList.add('parallel');
    });
  } catch (err) {
    console.error(err.message);
  }
};

loadAll(imgArray);
