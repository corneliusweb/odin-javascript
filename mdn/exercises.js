/** FILTERING STRINGS --
 *
 * The task is to select and list only the strings that has 'Christmas' from the provided array.
 */

const body = document.querySelector('body'); // Select the empty exercises.html body tag.
const list = document.createElement('ul'); // Create global 'ul' for the 'li' items.

// Provided array
const greetings = [
	'Happy Birthday',
	'Merry Christmas my love',
	'A happy Christmas to all the family',
	"You're all I want for Christmas",
	'Get well soon',
];

for (const greeting of greetings) {
	if (greeting.includes('Christmas')) {
		const listItem = document.createElement('li');
		listItem.textContent = greeting;

		// Create lists and append the returned values
		list.appendChild(listItem);
		body.appendChild(list);
	}
}

/** CAPITALIZATION -- fixing the capitalization
 *
 * The task is to fix the casing of the city names from the provided cities array.
 */

const cityList = document.createElement('ul');

// Provided array
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
	const lowerCasedCity = city.toLowerCase();
	const firstLetter = lowerCasedCity[0];
	const capitalizedCity = lowerCasedCity.replace(
		firstLetter,
		firstLetter.toUpperCase()
	);
	const result = capitalizedCity;

	// Create lists and append the returned values
	const listItem = document.createElement('li');
	listItem.textContent = result;
	cityList.appendChild(listItem);
	body.appendChild(cityList);
}

/** TRAIN STATION EXERCISE -- forming new words from old ones
 *
 * The task is to extract the train code name and the station name from the stations array.
 * To concatenate them to form eg; MAN: Manchester Piccadilly.
 */

const trainList = document.createElement('ul');

// Provided array
const stations = [
	'MAN675847583748sjt567654;Manchester Piccadilly',
	'GNF576746573fhdg4737dh4;Greenfield',
	'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
	'SYB4f65hf75f736463;Stalybridge',
	'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield',
];

for (const station of stations) {
	const stationCode = station.slice(0, 3); // Get the first three letters.
	const indexOfSemiColon = station.indexOf(';'); // Get the index of each ';' in the array.
	const stationName = station.slice(indexOfSemiColon + 1); // Slice from the index of each ';'.
	const stationCodeAndName = `${stationCode}: ${stationName}`;

	// Create lists and append returned values
	const listItem = document.createElement('li');
	listItem.textContent = stationCodeAndName;
	trainList.appendChild(listItem);
	body.appendChild(trainList);
}

// const output = document.querySelector('.output');
// output.textContent = '';

let i = 10;

while (i <= 10 && i >= 0) {
	//const para = document.createElement('p');
	if (i === 10) {
		//para.textContent = 'Countdown 10';
		console.log('Countdown 10');
	} else if (i === 0) {
		//para.textContent = 'Blast off!!';
		console.log('Blast off!!');
	} else {
		//para.textContent = i;
		console.log(i);
	}
	i--;
	// output.appendChild(para);
}
