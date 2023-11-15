# Semestralni projekat

Studenti dizajniraju interaktivni prototip korisničkog interfejsa aplikacije na zadatu temu, i testiraju prototip 
sa korisnikom (testiranje, tj. evaluacija je obavezna samo za grupni projekat).  
Projekat realizuje isključivo interaktivni high-fidelity prototip korisničkog interfejsa (bez implementacije 
pozadinske logike).


Tehnologije 
Za izradu prototipa studenti mogu koristiti sledeće tehnologije: 
• AngularJS (Web tehnologija implementacije korisničkog interfejsa), 
• Tehnologijom za implementaciju tekstualnog konverzacijskog interfejsa (Rasa AI), 
• Interaktivni alat ili tehnologija implementacije po izboru studenata. 
Individualni projekat 
Sadržaj i isporuka 
Studenti predaju predmetnom nastavniku: 
• programski kod protitipa ukoliko je prototip kreiran upotrebom programskog jezika, ili interaktivni 
prototip aplikacije u slučaju da je prototip kreiran korišćenjem alata za kreiranje prototipa,  
• kopije izgleda ekrana prototipa u pdf dokumentu (jedan ekran po strani), 
 
Kriterijum 
Kvalitet realizacije high-fidelity prototipa procenjen u odnosu na heuristike upotrebljivosti obrađene u okviru 
kursa (tražene heuristike su naznačene na kraju lekcije o heurističkoj evaluaciji).


## Tema projekta


Pažljivo pročitati tekst zadatka pre početka realizacije prototipa. Zahtevi su definisani okvirno 
i  od  studenta  se  očekuje  da  ih  dalje  konkretizuje  i  kritički  analizira  u  skladu  sa  sopstvenim 
pretpostavkama  i  principima  dizajna  interakcije čoveka  i  računara  obrađenim  u  toku  kursa.  Cilj 
projekta  je  razvijanje  samostalnog,  kreativnog  i  kritičkog  razmišljanja  u  rešavanju  praktičnih 
problema razvoja korisničkog interfejsa. 
Tema 
Potrebno je realizovati prototip korisničkog interfejsa virtuelnog asistenta za rezervaciju 
avionskih karata. 
 
Aplikacija treba da omogući pretragu, kreiranje i pregled/navigaciju avionskih karata. 
Pretraga  postojećih  letova  treba  da  omogući  zadavanja  kriterijuma  kao što  su   avio-prevoznik, 
polazna lokacija, odredišna lokacija, vreme trajanja leta, dužina leta, kategorija leta (klasa), broj 
preostalih mesta, rang cena, i recenzije drugih korisnika koji su let obavili. 
 
Aplikacija  sadrži  i  tekstualnog  konverzacijskog  agenta  kojeg  korisnik  aktivira  i  prikazuje  na 
zahtev  (agent  se  može  aktivirati  iz  bilo  kog  dela  aplikacije).  Agent  daje  pozdravnu  poruku  i 
omogućava  pretragu  letova  kroz  dijalog  sa  korisnikom,  sa  identičnim  parametrima  iznad. 
Odgovor  agenta  sadrži  sažete  informacije  o  pronađenom  letu  kao  tekst  (naziv,  opis,  vreme, 
klasa, cena i sumarne recenzije korisnika) sa linkom ka detaljima leta na koji upućuje, tj. otvara 
deo  aplikacije  koji  prikazuje  dati  let.  Poseban  dijalog  agenta  omogućava  i  rezervaciju  letova. 
Ime i simbol agenta su stvar kreativnosti studenta. 
  
Korisnik  bira,  tj.  rezerviše  let  iz  skupa  ponuđenih  letova  (minimum  10).  Za  svaki  let  prikazati 
naziv  (polazište-odredište),  polazni  aerodrom,  dolazni  aerodrom,  opis,  sliku,  klasu  leta,  cenu 
leta, vreme leta, i recenzije korisnika koji su let obavili u prošlosti. 
 
Aplikacija  treba  da  vodi  evidenciju  o  rezervisanim  letovima  putem  standardnih  funkcionalnosti 
kao što  su  dodavanje,  izmena  i  brisanje.   Žurnal  letova  sadrži  sve  informacije  o  rezervisanim 
letovima. Let sadrži naziv (polazište-odredište), polazni aerodrom, dolazni aerodrom, opis, sliku, 
klasu  leta,  cenu  leta,  vreme  leta,  status  ('predstojeći',  'obavljen',  'otkazan')  i  ocenu  (samo  za 
obavljene letove). 
 
Putnik  može  vršiti  kreiranje,  modifikaciju  i  brisanje  rezervacija  letova.  Može  brisati  i  menjati 
samo svoje rezervacije. 
Putnik  može  vrednovati  samo  svoj  obavljen  let.  Vrednovanja  kao  ocena  su  deo  svakog  leta. 
Prezentacija vrednovanja je stvar kreativnosti autora (simboli, tekst ili kombinacija), ali mora biti 
vidljivo istaknuta i lako razumljiva. 
Kreirane rezervacije letova se čuvaju u žurnalu. Podaci letova iz žurnala se mogu menjati osim 
u slučaju da je let u statusu 'obavljen'. 
 
Aplikacija ima jedan tip korisnika - putnik. Svaki korisnik ima lični profil koji sadrži podatke kao 
što su ime i prezime, kontakt podaci (email, telefon, adresa), podaci o omiljenim destinacijama 
leta, i podaci za prijavljivanje u aplikaciju. Podaci profila se mogu menjati. 
Korisnik može, pre svega, da pregleda dostupne letove, čita recenzije i utiske ostalih 
zadovoljnih  ili  nezadovoljnih  putnika,  kao  i  da  dodaje  letove  od  interesa  u žurnal   prilikom 
definisanja  svojih  rezervacija.  Ukoliko  korisnik želi  da  rezerviše  let  i  pristupi  svom žurn alu  i 
rezervacijama koji se nalaze u njemu, mora se prijaviti (ukoliko ima svoj nalog) ili registrovati 
(ukoliko nema svoj nalog). Prilikom registracije korisnik mora uneti sve podatke profila. 
  
Prototip se realizuje na mobilnim uređajima po izboru (telefon, tablet, laptop). 
Zadatak 
Realizovati  računarski  prototip  korisničkog  interfejsa  aplikacije.  Prototip  se  može  realizovati 
korišćenjem: 
• Web tehnologije za implementaciju korisničkih interfejsa (Angular JS ili tehnologija po 
izboru). 
• Tehnologijom za implementaciju tekstualnog konverzacijskog agenta (Rasa AI). 
  
Potrebno  je  dostaviti  interaktivni  prototip  (Web  adresu  ili  html  verziju)  ili  programski  kod 
prototipa, i pdf dokument sa dokumentovanim kopijama izgleda stranica prototipa (jedan prikaz 
po stranici dokumenta, opis ispod slike). 
Na svakoj stranici dokumentovati izgled kao sažet opis funkcije (ne izgleda i rasporeda kontrola 
korisničkog interfejsa). 
  
Primer: 
Funkcija:  Pretraga  letova.  Koriste  se  kriterijumi  za  pretragu  kao  podaci  o  ...  Pri  pokretanju 
pretrage prikazuje se rezultat. 
  
Poželjno  je  (ne  i  obavezno  i  ne  utiče  na  ocenu)  da  studenti  kreiraju  video  snimak  simulacije 
korišćenja  prototipa  i  dostave  adresu  snimka  postavljenog  online  (Google  Drive,  DropBox, 
Vimeo  i  slične  platforme).  Snimak  se  može  kreirati  korišćenjem  softvera  za  snimanje  ekrana 
(screen  recording)  ili  kamere.  Snimak  ne  treba  da  bude  duži  od  5  minuta  (ovo  nije  zahtev  već 
ograničenje). 
Prototip korisničkog interfejsa 
Prototip sadrži isključivo interaktivne elemente korisničkog interfejsa. Implementacija 
podrazumeva: 
• Izgled stranica i dijaloga (kontrole interfejsa i njihov raspored), 
• Navigacija između stranica i drugih oblika prikaza (otvaranje i zatvaranje dijaloga i formi), 
• Interaktivnost (simulacija funkcija kao navigacije, poruka i podataka interfejsa), 
• Dijalog sa agentom (simulacija, odnosno unapred definisano stablo dijaloga). 
  
Ne  treba  implementirati  pozadinsku  logiku  i  skladište  podataka  (baza),  već  se  treba  isključivo 
fokusirati  na  korisnički  interfejs.  Podatke  interfejsa  za  potrebe  prikaza,  ažuriranja  i  brisanja 
simulirati  lokalno  na  način  po  izboru,  korišćenjem  tehnika  obrađenih  na časovima  vežbi  i  na 
ranijim predmetima (PKI i KVA). 
Predaja 
Predaja projekta se vrši isključivo elektronskim putem, na način koji će biti naknadno objavljen. 
Rok za predaju projekta, kao i datum odbrane će biti blagovremeno objavljeni u timu predmeta 
pred svaki ispitni rok. 
 