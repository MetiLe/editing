import { requests } from './api.js';

const appLi = document.getElementById('view');
const appLiAsia = document.getElementById('viewAsia');
const appLiAustralia = document.getElementById('viewAustralia');
const appLiAfrica = document.getElementById('viewAfrica');
const appLiEurope = document.getElementById('viewEurope');
const appLiNorthAmerica = document.getElementById('viewNorthAmerica');
const appLiCentralAmerica = document.getElementById('viewCentralAmerica');
const appLiSouthAmerica = document.getElementById('viewSouthAmerica');
const appLiCaribbean = document.getElementById('viewCaribbean');
const spin = document.getElementById('spinner');
const search = document.getElementById('search-input');
search.addEventListener('keyup', searchCountries);

//Load Every thing ....
document.addEventListener('DOMContentLoaded', () => {
	//load_fromPlaceHolder();
	loadDataNew();
	loadDataNewAsia();
	loadDataNewAfrica();
	loadDataNewNorthAmerica();
	loadDataNewCentralAmerica();
	loadDataNewSouthAmerica();
	loadDataNewCaribbean();
	loadDataNewEurope();
	loadDataNewAustralia();
});

async function load_fromPlaceHolder_new() {
	//open the request
	let response = await fetch('https://restcountries.eu/rest/v2/all');

	let data = await response.json();

	return data;
}

function loadDataNew() {
	requests
		.ALL()
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLi.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}

function loadDataNewAsia() {
	requests
		.REGION('Asia')
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLiAsia.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}

function loadDataNewAustralia() {
	requests
		.REGION('Oceania')
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLiAustralia.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}

function loadDataNewEurope() {
	requests
		.REGION('Europe')
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLiEurope.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}

function loadDataNewAfrica() {
	requests
		.REGION('Africa')
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLiAfrica.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}

function loadDataNewNorthAmerica() {
	requests
		.SUBREGION('Northern America')
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLiNorthAmerica.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}

function loadDataNewCentralAmerica() {
	requests
		.SUBREGION('Central America')
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLiCentralAmerica.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}

function loadDataNewSouthAmerica() {
	requests
		.SUBREGION('South America')
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLiSouthAmerica.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}

function loadDataNewCaribbean() {
	requests
		.SUBREGION('Caribbean')
		.then((val) => val.json())
		.then(function(countries) {
			console.log(countries);
			let display = '';
			countries.forEach(function(country, index) {
				display += countryNode(country, index);
			});
			appLiCaribbean.innerHTML = display;
		})
		.catch(function(err) {
			console.log(err);
		});
}


function searchCountries() {
	spin.innerHTML = `<div class="spinner-border text-primary m-4" role="status">
    <span class="sr-only"></span>
  </div>`;
	//open the request

	load_fromPlaceHolder_new()
		.then(function(countries) {
			//iterate over each post [100 countries]
			let toBeSearched = new Array();
			countries.forEach(function(post) {
				toBeSearched.push({ name: post.name, flag: post.flag, capital: post.capital });
			});
			let output = '';
			for (let i = 0; i < toBeSearched.length; i++) {
				const searchContent = search.value.toUpperCase();
				if (toBeSearched[i].name.toUpperCase().indexOf(searchContent) > -1) {
					output += `
                <div class="col-md-4 mr-1 mb-4">
                        <div class="card" id="card">
                            <div class="card-body" id="card-body">
                                <img id="imgs" style="width: 20rem; height: 10rem;" class="card-img-top img-fluid" src="${toBeSearched[
									i
								].flag}" alt="">
                                <h4 id="names" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" class="card-title mt-2">${toBeSearched[
									i
								].name}</h4>
                                <h5 id="captial-names" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" class="card-title">${toBeSearched[
									i
								].capital}</h5>
                            </div>
                        </div>
                    </div>
                </div>   
                `;
				}
			}

			setTimeout(() => {
				spin.innerHTML = ``;
				appLi.innerHTML = output;
			}, 500);
		})
		.catch(function(err) {
			console.log(err);
		});
}

function countryNode(country, index) {
	return `<div class="col-md-4 mr-1 mb-4">
                        <div class="card" id="card">
                        <a href="detail.html?id=${index}">
                            <div class="card-body" id="card-body">
                                <img id="imgs" style="width: 20rem; height: 10rem;" class="card-img-top img-fluid" src="${country.flag}" alt="">
                                <h4 id="names" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" class="card-title mt-2">${country.name}</h4>
                                <h5 id="captial-names" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" class="card-title">${country.capital}</h5>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                `;
}
