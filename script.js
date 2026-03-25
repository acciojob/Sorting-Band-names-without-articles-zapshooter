const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Acacia Strain',
  'A Day to Remember',
  'The Wonder Years',
  'An Albatross',
  'Bring Me the Horizon',
  'Motionless in White'
];

function stripArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) =>
  stripArticles(a).toLowerCase() > stripArticles(b).toLowerCase() ? 1 : -1
);

const bandList = document.querySelector('ul');
bandList.id = 'bands';
bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');