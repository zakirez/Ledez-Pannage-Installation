const icons = {
  mobile:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 18 18 0 0 1-7.8-2.8 18 18 0 0 1-5.5-5.5 18 18 0 0 1-2.8-7.9A2 2 0 0 1 5.7 3h3a2 2 0 0 1 2 1.7l.5 2.7a2 2 0 0 1-.6 2.1l-1.2 1.2a14 14 0 0 0 4 4l1.2-1.2a2 2 0 0 1 2.1-.6l2.7.5a2 2 0 0 1 2.6 1.5Z"/>',
  pin:'<path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  electricite:'<path d="m13 2-9 12h7l-1 8 10-12h-7z"/>',
  plomberie:'<path d="M12 2C8 8 5 11 5 15a7 7 0 0 0 14 0c0-4-3-7-7-13Z"/><path d="M8 15a4 4 0 0 0 4 4"/>',
  chauffage:'<path d="M4 9v11m4-11v11m4-11v11m4-11v11m4-11v11M3 11h18M3 18h18M8 3c-2 2 2 2 0 4m4-4c-2 2 2 2 0 4m4-4c-2 2 2 2 0 4"/>',
  ramonage:'<path d="M3 8h12a3 3 0 1 0-3-3m-9 7h16a3 3 0 1 1-3 3M3 16h7a3 3 0 1 1-3 3"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>'
};
function icon(name) {
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icons[name]+'</svg>';
}

const pages = {
  accueil:{label:'Accueil', eyebrow:'Bournonville · Pas-de-Calais', title:'Installation et dépannage pour votre maison', intro:'Électricité, plomberie, chauffage, ramonage et ventilation. Depuis Bournonville, nous intervenons sur vos installations, en neuf comme en rénovation.'},
  electricite:{
    label:'Électricité', title:'Électricité générale et alarmes', eyebrow:'Neuf, rénovation et dépannage', intro:'Nous installons et rénovons vos équipements électriques et intervenons pour mettre en sécurité une installation existante.',
    lead:'Du tableau électrique aux équipements de la maison',
    groups:[
      ['Installations et mise en sécurité','Installation électrique neuve','Rénovation sous moulure ou en encastré','Mise en sécurité et dépannage'],
      ['Alarme, interphonie et confort','Interphonie et alarme intrusion sans fil','Chauffage électrique et commande à distance','Ballon électrique ou thermodynamique']
    ],
    summary:'Installation neuve, rénovation, alarmes et interphonie.',
    brands:['Atlantic','Delta Dore','Hager','Legrand','Osram','Schneider Electric','Theben','Urmet']
  },
  plomberie:{
    label:'Plomberie', title:'Plomberie, sanitaires et salles de bain', eyebrow:'Réparation et aménagement', intro:'Fuite, évacuation bouchée ou projet de salle de bain. Nous intervenons sur vos équipements et réalisons vos installations sanitaires.',
    lead:'De la fuite à la salle de bain complète',
    groups:[
      ['Dépannage de plomberie','Débouchage au furet ou par hydrocurage','Inspection des évacuations par caméra','Réparation de fuites, chasses d’eau et robinetterie'],
      ['Salle de bain et sanitaires','Douche, baignoire, WC et meubles de salle de bain','Adoucisseur et remplacement de sanitaires','Ballon électrique ou thermodynamique']
    ],
    summary:'Dépannage, sanitaires et création de salles de bain.',
    brands:['Atlantic','Decotec','Sanijura','Jacob Delafon','Grohe','Geberit','Alterna','Comap','Permo','Delpha','Delabie']
  },
  chauffage:{
    label:'Chauffage', title:'Installation et rénovation du chauffage', eyebrow:'Chauffage central et régulation', intro:'Nous remplaçons votre chaudière et installons les équipements qui permettent de régler la température pièce par pièce.',
    lead:'Chaudières, radiateurs et réglage de la température',
    groups:[
      ['Chauffage et eau chaude','Chauffage central et chaudières murales ou au sol','Radiateurs et convecteurs gaz','Chauffe-bains et chauffe-eau gaz'],
      ['Régulation et entretien du réseau','Pose de robinets thermostatiques','Installation de thermostats d’ambiance','Désembouage du circuit de chauffage']
    ],
    summary:'Chaudières, radiateurs, thermostats et désembouage.',
    brands:['Frisquet','Delta Dore','e.l.m. leblanc','Brugman','Comap','Danfoss']
  },
  ramonage:{
    label:'Ramonage', title:'Ramonage et ventilation de l’habitat', eyebrow:'Conduits de cheminée et VMC', intro:'Nous réalisons le ramonage des conduits de cheminée et installons des systèmes de ventilation pour renouveler l’air intérieur.',
    lead:'Entretenir les conduits et renouveler l’air',
    groups:[
      ['Ramonage et détecteurs','Ramonage des conduits de cheminée','Pose de détecteurs de fumée'],
      ['Ventilation de la maison','Ventilation autoréglable ou hygroréglable','VMC double flux','Ventilation mécanique par insufflation (VMI)']
    ],
    summary:'Ramonage de conduits et installation de ventilation.',
    brands:['Atlantic','Aldes','Unelvent']
  },
  zone:{label:'Zone d’intervention', title:'Autour de Bournonville', intro:'Basés à Bournonville, dans le Pas-de-Calais, nous intervenons dans un rayon d’environ 40 km.'},
  contact:{label:'Contact', title:'Parlons de votre projet', intro:'Pour un dépannage ou une installation, contactez-nous par téléphone ou préparez votre demande par e-mail.'}
};

const towns = ['Bournonville','Desvres','Samer','Boulogne-sur-Mer','Neufchâtel-Hardelot','Le Touquet-Paris-Plage','Condette','Outreau','Le Portel','Saint-Léonard','Saint-Étienne-au-Mont','Wimille','Wimereux','Marquise','Rinxent','Lumbres','Licques'];
const photoDescriptions = {
  accueil: ['Salle de bain rénovée avec vasque et douche vitrée','Maison en brique dans un jardin du nord de la France'],
  electricite: ['Tableau électrique domestique avec disjoncteurs','Pose d’un interrupteur mural'],
  plomberie: ['Robinet chromé sur une vasque en céramique','Douche vitrée et carrelage clair'],
  chauffage: ['Radiateur à eau et robinet thermostatique','Chaudière murale dans une buanderie'],
  ramonage: ['Ramoneur avec une brosse devant une cheminée','Caisson de VMC et gaines de ventilation'],
  zone: ['Paysage de campagne inspiré du Boulonnais','Dunes et plage inspirées de la Côte d’Opale'],
  contact: ['Carnet, téléphone et mètre ruban sur un établi','Plans et échantillons pour un projet de rénovation']
};
const gallery = ['WC suspendu','Meuble vasque et faïence','Meuble vasque et rangements','Douche et faïence à bandes','Douche carrelée','WC et meuble vasque'];
const trades = ['electricite','plomberie','chauffage','ramonage'];
const address = '19, route de Brunembert, 62240 Bournonville';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(address);
const themes = ['signature','atelier','editorial'];
const localFile = location.protocol === 'file:';
const routePrefix = localFile ? '#?' : '?';
function currentRoute() {
  return localFile ? location.hash : location.search;
}
function routeParams() {
  const route = currentRoute();
  return new URLSearchParams(route.startsWith(routePrefix) ? route.slice(routePrefix.length) : '');
}
const params = routeParams();
let theme = themes.includes(params.get('vue')) ? params.get('vue') : 'signature';
let device = params.get('format') === 'mobile' ? 'mobile' : 'desktop';
let page = Object.hasOwn(pages,params.get('page')) ? params.get('page') : 'accueil';

const site = document.querySelector('#site');
const main = document.querySelector('main');
const navigation = document.querySelector('nav');
const menu = document.querySelector('.menu');
const dialog = document.querySelector('dialog');

function url(nextPage) {
  const query = new URLSearchParams({vue:theme,page:nextPage});
  if (device === 'mobile') query.set('format',device);
  return routePrefix+query;
}
function link(nextPage,label,classes='') {
  return '<a class="'+classes+'" href="'+url(nextPage)+'" data-page="'+nextPage+'">'+label+'</a>';
}
function photo(id, detail = false) {
  const name = id + (detail ? '-detail' : '');
  const description = photoDescriptions[id][detail ? 1 : 0];
  const loading = detail ? ' loading="lazy"' : ' fetchpriority="high"';
  return '<img class="site-photo" src="assets/'+name+'.webp" alt="'+description+'"'+loading+' decoding="async">';
}
function hero(id) {
  const item = pages[id];
  return '<section class="shell hero"><div class="hero-copy"><div class="eyebrow">'+icon(id === 'accueil' ? 'pin' : id)+item.eyebrow+'</div><h1>'+item.title+'</h1><p>'+item.intro+'</p><div class="actions">'+link('contact','Demander un devis','button primary')+(id === 'accueil' ? '<a class="button secondary" href="#metiers">Découvrir nos métiers</a>' : '<a class="button secondary" href="tel:+33321105227">Nous appeler</a>')+'</div></div>'+'<div class="art">'+photo(id)+'</div></section>';
}
function serviceCards() {
  return trades.map(id => link(id,'<span class="trade-icon">'+icon(id)+'</span><strong>'+pages[id].label+'</strong><span class="trade-summary">'+pages[id].summary+'</span>','trade-card')).join('');
}
function home() {
  return hero('accueil')+
    '<section class="shell section" id="metiers"><div class="section-head"><h2>Quatre métiers pour votre maison</h2><p>Pour installer, rénover ou dépanner vos équipements.</p></div><div class="trade-grid">'+serviceCards()+'</div></section>'+
    '<section class="shell section home-feature"><figure class="feature-photo">'+photo('accueil',true)+'</figure><div><span class="eyebrow">Rénovation de l’habitat</span><h2>Rénover votre maison, pièce par pièce</h2><p>Douche, baignoire, meuble vasque ou rénovation complète de la pièce. Nous réunissons les travaux de plomberie, d’électricité et de pose de faïence.</p>'+link('plomberie','Voir les salles de bain','text-link')+'</div></section>'+
    '<section class="shell section"><div class="local-band"><div><span class="eyebrow">'+icon('pin')+'Pas-de-Calais</span><h2>De Bournonville au littoral</h2><p>Nous intervenons autour de Bournonville, notamment à Desvres, Samer, Boulogne-sur-Mer et Wimereux.</p></div>'+link('zone','Voir les communes','button secondary')+'</div></section>';
}
function service(id) {
  const item = pages[id];
  const groups = item.groups.map(([title,...entries]) => '<article class="detail"><h3>'+title+'</h3><ul>'+entries.map(entry => '<li>'+icon('check')+entry+'</li>').join('')+'</ul></article>').join('');
  const photos = id === 'plomberie' ? '<section class="shell section"><div class="section-head"><h2>Salles de bain en images</h2></div><details class="archive-gallery"><summary>Afficher la galerie d’origine</summary><div class="gallery">'+gallery.map((caption,index) => '<button type="button" data-photo="'+index+'"><img src="assets/bain-'+(index+1)+'.webp" alt="" loading="lazy"><span>'+caption+'</span></button>').join('')+'</div></details></section>' : '';
  return hero(id)+'<section class="shell section"><div class="section-head"><h2>'+item.lead+'</h2></div><div class="service-layout"><div class="details">'+groups+'</div><figure class="feature-photo service-photo">'+photo(id,true)+'</figure></div></section>'+photos+
    '<section class="shell section"><div class="section-head"><h2>Marques référencées</h2></div><ul class="brands">'+item.brands.map(name=>'<li>'+name+'</li>').join('')+'</ul></section>'+
    '<section class="shell section"><div class="local-band"><div><h2>Vous avez un projet ou besoin d’un dépannage ?</h2><p>Décrivez-nous votre installation et la nature des travaux.</p></div>'+link('contact','Nous contacter','button secondary')+'</div></section>';
}
function zone() {
  return '<section class="shell section page-grid"><div class="page-copy"><span class="eyebrow">'+icon('pin')+'Zone d’intervention</span><h1>'+pages.zone.title+'</h1><p>'+pages.zone.intro+'</p><div class="actions">'+link('contact','Nous contacter','button primary')+'</div></div><div class="zone-graphic">'+photo('zone')+'<div class="zone-distance"><strong>40 km</strong><span>Rayon indicatif autour de Bournonville</span></div></div></section>'+
    '<section class="shell section town-section"><div class="section-head"><h2>Communes desservies</h2><label class="town-search">Rechercher une commune<input type="search" id="town-search" placeholder="Par exemple, Desvres"></label></div><ul class="towns">'+towns.map(town=>'<li>'+icon('pin')+town+'</li>').join('')+'</ul><p id="town-empty" role="status" hidden>Aucune commune ne correspond à cette recherche.</p></section>'+
    '<section class="shell section home-feature"><figure class="feature-photo">'+photo('zone',true)+'</figure><div><h2>De la campagne au littoral</h2><p>Notre zone comprend des communes du Boulonnais et de la Côte d’Opale, dont Wimereux, Le Portel et Neufchâtel-Hardelot.</p></div></section>';
}
function contact() {
  return '<section class="shell section page-grid contact-grid"><div class="page-copy"><span class="eyebrow">'+icon('mail')+'Contact</span><h1>'+pages.contact.title+'</h1><p>'+pages.contact.intro+'</p><address class="contact-info"><a href="tel:+33321105227">'+icon('phone')+'03 21 10 52 27</a><a href="tel:+33777392055">'+icon('mobile')+'07 77 39 20 55</a><a href="mailto:ledezpannage@orange.fr">'+icon('mail')+'ledezpannage@orange.fr</a><a href="'+mapUrl+'" target="_blank" rel="noopener">'+icon('pin')+address+'</a></address><div class="contact-photos"><figure class="feature-photo">'+photo('contact')+'</figure><figure class="feature-photo">'+photo('contact',true)+'</figure></div></div><form class="contact-form"><h2>Préparer un e-mail</h2><label>Nom et prénom<input name="nom" autocomplete="name" required></label><label>Votre e-mail<input name="email" type="email" autocomplete="email" required></label><label>Téléphone<input name="telephone" type="tel" autocomplete="tel"></label><label>Votre message<textarea name="message" rows="4" required></textarea></label><button class="button primary" type="submit">Ouvrir dans ma messagerie</button></form></section>';
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, observer) => {
      for (const {target,isIntersecting} of entries) {
        if (!isIntersecting) continue;
        target.classList.add('is-revealed');
        observer.unobserve(target);
      }
    }, {threshold:.08})
  : null;

function revealContent() {
  if (!revealObserver || reducedMotion.matches) return;
  const elements = main.querySelectorAll(
    '.hero-copy > *, .hero > .art, .section-head, .trade-card, .feature-photo, ' +
    '.home-feature > div, .local-band, .detail, .brands > li, .page-copy > :not(.contact-photos), ' +
    '.zone-graphic, .towns > li, .contact-form, .archive-gallery'
  );
  for (const element of elements) {
    element.classList.add('reveal');
    revealObserver.observe(element);
  }
}

function render(focus) {
  const previous = main.dataset.page;
  document.body.dataset.theme = theme;
  document.body.dataset.device = device;
  main.dataset.page = page;
  document.title = pages[page].label+' · Ledez’Pannage';
  document.querySelector('.logo').href = url('accueil');
  navigation.innerHTML = Object.entries(pages).map(([id,item]) => link(id,item.label,id === page ? 'current' : '').replace('data-page=',(id === page ? 'aria-current="page" ' : '')+'data-page=')).join('');
  menu.setAttribute('aria-expanded','false');
  document.querySelector('.phone').innerHTML = icon('phone')+'<span>03 21 10 52 27</span>';
  if (previous !== page) {
    revealObserver?.disconnect();
    main.innerHTML = page === 'accueil' ? home() : page === 'zone' ? zone() : page === 'contact' ? contact() : service(page);
    for (const heading of main.querySelectorAll('h1,h2,h3')) {
      const ink = document.createElement('span');
      ink.className = 'heading-ink';
      ink.append(...heading.childNodes);
      heading.append(ink);
    }
    revealContent();
  } else {
    for (const anchor of main.querySelectorAll('[data-page]')) anchor.href = url(anchor.dataset.page);
  }
  document.querySelector('#footer').innerHTML = '<div class="shell footer-inner"><div><strong>Ledez’Pannage et Installation</strong><p>'+address+'</p><small>Photographies d’illustration générées</small></div><div><a href="tel:+33321105227">03 21 10 52 27</a><a href="mailto:ledezpannage@orange.fr">ledezpannage@orange.fr</a></div><div>'+link('zone','Zone d’intervention')+link('contact','Contact')+'</div></div>';
  if (focus) { window.scrollTo({top:0,behavior:"instant"}); main.focus({preventScroll:true}); }
}

menu.addEventListener('click', () => menu.setAttribute('aria-expanded',String(menu.getAttribute('aria-expanded') === 'false')));
document.addEventListener('click', event => {
  const control = event.target.closest('a[data-page],button[data-photo]');
  if (!control) return;
  if (control.dataset.photo !== undefined) {
    const index = Number(control.dataset.photo);
    dialog.querySelector('img').src = 'assets/bain-'+(index+1)+'.webp';
    dialog.querySelector('img').alt = gallery[index];
    dialog.querySelector('p').textContent = gallery[index];
    dialog.showModal();
    return;
  }
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const changed = control.dataset.page && control.dataset.page !== page;
  if (changed) page = control.dataset.page;
  if (currentRoute() !== url(page)) history.pushState(null,'',url(page));
  render(changed);
});

const normalize = value => value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/[-’']/g,' ');
main.addEventListener('input',event => {
  if (event.target.id !== 'town-search') return;
  const value = normalize(event.target.value.trim());
  const entries = [...main.querySelectorAll('.towns li')];
  for (const entry of entries) entry.hidden = !normalize(entry.textContent).includes(value);
  document.querySelector('#town-empty').hidden = entries.some(entry => !entry.hidden);
});
main.addEventListener('submit',event => {
  if (!event.target.matches('.contact-form')) return;
  event.preventDefault();
  const data = new FormData(event.target);
  const body = [data.get('message'),'','Nom : '+data.get('nom'),'E-mail : '+data.get('email'),'Téléphone : '+data.get('telephone')].join('\n');
  location.href = 'mailto:ledezpannage@orange.fr?subject='+encodeURIComponent('Demande de renseignements')+'&body='+encodeURIComponent(body);
});
dialog.querySelector('button').addEventListener('click',() => dialog.close());
window.addEventListener('popstate',() => {
  if (localFile && location.hash && !location.hash.startsWith(routePrefix)) return;
  const current = routeParams();
  theme = themes.includes(current.get('vue')) ? current.get('vue') : 'signature';
  device = current.get('format') === 'mobile' ? 'mobile' : 'desktop';
  const nextPage = Object.hasOwn(pages,current.get('page')) ? current.get('page') : 'accueil';
  const changed = nextPage !== page;
  page = nextPage;
  render(changed);
});
render(false);
