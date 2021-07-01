// Pilots Section //
const pilotsProp = {
  pilotsMain: document.getElementById('pilots-main'),
  pilot: null,
  pilotPicture: null,
  pilotInfoContainer: null,
  pilotInfo: null,
  pilotName: null,
  info: null,
  teamImage: null,
  teams: {
    lamborghini: 'Assets/img/lamborghini.png',
    ferrari: 'Assets/img/ferrari.png',
    porsche: 'Assets/img/porsche.png',
    maclaren: 'Assets/img/maclaren.png',
    Aston: 'Assets/img/astonmartin.png',
    Mercedes: 'Assets/img/mercedes.png',
  },
};

const pilots = [
  {
    id: 'jhonPoppins',
    name: 'Jhon Poppins',
    age: 32,
    picture: 'Assets/img/pilot.jpg',
    team: pilotsProp.teams.lamborghini,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'davidWawawas',
    name: 'David Wawawas',
    age: 30,
    picture: 'Assets/img/pilot2.jpg',
    team: pilotsProp.teams.ferrari,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'mattTruccio',
    name: 'Matt Truccio',
    age: 28,
    picture: 'Assets/img/pilot3.png',
    team: pilotsProp.teams.porsche,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'peterAltagama',
    name: 'Peter Altagama',
    age: 37,
    picture: 'Assets/img/pilot4.jpg',
    team: pilotsProp.teams.maclaren,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'samuelTeteo',
    name: 'Samuel Teteo',
    age: 30,
    picture: 'Assets/img/pilot5.jpg',
    team: pilotsProp.teams.Aston,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'lucasMolineo',
    name: 'Lucas Molineo',
    age: 30,
    picture: 'Assets/img/pilot6.jpg',
    team: pilotsProp.teams.Mercedes,
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
];
const pilotsMets = {
  run() {
    pilots.forEach((pilot) => {
      pilotsMets.create(pilot);
    });
  },
  create(pilot) {
    // Create Pilot Div //
    pilotsProp.pilotsMain.appendChild(document.createElement('div')).setAttribute('id', pilot.id);
    pilotsProp.pilot = document.getElementById(pilot.id);
    pilotsProp.pilot.classList.add('row', 'pilot');
    // Create Pilot Picture //
    pilotsProp.pilot.appendChild(document.createElement('img')).setAttribute('id', `${pilot.id}-picture`);
    pilotsProp.pilotPicture = document.getElementById(`${pilot.id}-picture`);
    pilotsProp.pilotPicture.classList.add('col-1', 'pilot-picture');
    pilotsProp.pilotPicture.setAttribute('src', pilot.picture);
    // Create Pilot info container //
    pilotsProp.pilot.appendChild(document.createElement('div')).setAttribute('id', `${pilot.id}-info-container`);
    pilotsProp.pilotInfoContainer = document.getElementById(`${pilot.id}-info-container`);
    pilotsProp.pilotInfoContainer.classList.add('col-8', 'pilot-info-container');
    // Create Pilot info //
    pilotsProp.pilotInfoContainer.appendChild(document.createElement('div')).setAttribute('id', `${pilot.id}-info`);
    pilotsProp.pilotInfo = document.getElementById(`${pilot.id}-info`);
    pilotsProp.pilotInfo.classList.add('row', 'pilot-info');
    // Create Pilot name //
    pilotsProp.pilotInfo.appendChild(document.createElement('h5')).setAttribute('id', `${pilot.id}-name`);
    pilotsProp.pilotName = document.getElementById(`${pilot.id}-name`);
    pilotsProp.pilotName.innerText = pilot.name;
    // Create info //
    pilotsProp.pilotInfo.appendChild(document.createElement('p')).setAttribute('id', `${pilot.id}-main-info`);
    pilotsProp.info = document.getElementById(`${pilot.id}-main-info`);
    pilotsProp.info.innerText = pilot.info;
    // Create Pilot Team //
    pilotsProp.pilot.appendChild(document.createElement('img')).setAttribute('id', `${pilot.id}-team`);
    pilotsProp.teamImage = document.getElementById(`${pilot.id}-team`);
    pilotsProp.teamImage.classList.add('col-1', 'team');
    pilotsProp.teamImage.setAttribute('src', pilot.team);
  },
};
pilotsMets.run();