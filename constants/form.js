export const survey = [
  {
    subName: "Informacje o przetwarzaniu danych osobowych",
    data: [
      {
        type: `text`,
        text: `Informujemy, że podane przez Pana / Panią w kwestionariuszu dane , zgodnie z Art. 17, ust. 1 Ustawy
            o publicznej służbie krwi (Dz. U.2014 poz. 332 i Dz. U. 2016 poz. 823) zostaną umieszczone w rejestrach dawców krwi, będących zbiorem danych osobowych, gromadzonych i przetwarzanych na potrzeby publicznej służby krwi, których Administratorem jest minister właściwy do spraw zdrowia. Informujemy, że na podstawie art. 32 ustawy o ochronie danych osobowych przysługuje Panu prawo do kontroli przetwarzania danych, dotyczących Pana / Pani, zawartych w rejestrach dawców krwi.
            `,
        value: null,
        visible: true,
      },
      {
        type: `checkbox`,
        text: `Potwierdzam, że zapoznałem/am się z powyższą informacją`,
        value: false,
        visible: true,
      },
    ],
  },
  {
    subName: `Dane osobowe`,
    data: [
      {
        type: `text-input`,
        text: `Imię`,
        value: ``,
        visible: true,
      },
      {
        type: `text-input`,
        text: `Nazwisko`,
        value: ``,
        visible: true,
      },
      {
        type: `text-input`,
        text: `Nr donacji`,
        value: ``,
        visible: false,
      },
      {
        type: `date-input`,
        text: `Data urodzenia`,
        value: new Date(),
        visible: true,
      },
      {
        type: `number-input`,
        text: `PESEL`,
        value: ``,
        visible: true,
      },
      {
        type: `text-input`,
        text: `Adres zameldowania`,
        value: ``,
        visible: true,
      },
      {
        type: `text-input`,
        text: `Adres korespondencji`,
        value: ``,
        visible: true,
      },
      {
        type: `radio`,
        text: `Płeć`,
        value: ``,
        values: [`kobieta`, `mężczyzna`],
        visible: true,
      },
    ],
  },
  {
    subName: "O czym musisz wiedzieć przed oddaniem krwi",
    data: [
      {
        type: `text`,
        text: `Twoja krew zostanie zbadana, aby stwierdzić czy nie jesteś zakażony/a kiłą, AIDS, żółtaczką zakaźną B lub C. Jeżeli test wypadnie dodatnio, krew nie zostanie przetoczona. Jednak przy każdej infekcji pomiędzy momentem zakażenia i chwilą, gdy staje się możliwe wykrycie go droga badań laboratoryjnych, upływa pewien czas. W tym okresie w żadnym przypadku nie wolno oddawać krwi. ponieważ może ona być źródłem zakażenia, chociaż testy laboratoryjne są jeszcze ujemne. Nie oddawaj więc krwi, jeżeli przez ryzykowne kontakty naraziłeś/aś się na niebezpieczeństwo. 
Ryzyko stwarzają: 
1.Kontakty seksualne z wieloma partnerami/partnerkami. 
2.Kontakty seksualne z osobami stosującymi narkotyki w postaci zastrzyków. 
3.Kontakty seksualne w celu zarobkowym. 
4.Wczesniej lub aktualnie stosowane narkotyki w postaci zastrzyków. 5.Kontakty seksualne z osobami, u których testy w kierunku AIDS, kiły czy żółtaczki zakażnej B lub C wypadły dodatnio. 
6.Kontakty seksualne z partnerem/partnerką, których znasz od niedawna. 
Zdajemy sobie sprawę, że zadając te pytania wkraczamy w Twoja sferę prywatną. Jednak niewielkie ryzyko przeniesienia zakażenia drogą krwi można dalej zmniejszyć jedynie wtedy, gdy będąc dawca dokładnie przemyślisz opisane powyżej sytuacje i skrupulatnie odpowiesz na postawione pytania. Twoje dane będą traktowane poufnie. Przy pozytywnych wynikach (wskazujących na infekcję), zostaniesz o tym poinformowany przez lekarza. 
Dziękujemy za współpracę! Uprzejmie prosimy o odpowiedź na następujące pytania.
            `,
        value: null,
        visible: true,
      },
    ],
  },
  {
    subName: "Informacja o chorobach zakaźnych dla krwiodawców",
    data: [
      {
        type: `radio-and-input`,
        text: `Czy już oddawał/a Pan/Pani krew? Jeżeli tak to w którym roku ostatnio?
            `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio`,
        text: `Czy czuje się Pan/Pani obecnie zdrowy/a?            `,
        value: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio`,
        text: `Czy w ciągu ostatnich 7 dni przechodził/a Pan Pani jakieś zabiegi stomatologiczne?            `,
        value: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy w ciągu ostatnich 4 tygodni chorował/a Pan/Pani lub pozostawał/a pod opieką lekarza albo miał/a gorączkę powyższej 38 stopni?            `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy w ciągu ostatnich 4 tygodni przyjmował/a Pan/Pani lekarstwa (tabletki, zastrzyki, czopki, maści i inne)  ).
		Jeżeli tak to jakie i kiedy?          `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio`,
        text: `Czy w ciągu ostatnich 3 dni przyjmował/a Pan/Pani lek, którego składnikiem jest kwas acetylosalicylowy (np. aspiryna)?
            `,
        value: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy w ciągu ostatnich 4 tygodni przechodził/a Pan/Pani szczepienia?
		Jeżeli tak, jakie i kiedy?            `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy choruje Pan/Pani bądź chorował/a na choroby układu krążenia (nadciśnienie), dolegliwości ze strony serca, zawał serca, duszność, udar mózgu
Jeżeli tak, kiedy?            `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy zauważył/a Pan/Pani u siebie następujące objawy: a) nieuzasadniony spadek ciężaru ciała,
b) nieuzasadnioną gorączkę, c) powiększenie węzłów chłonnych?            `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy choruje Pan/Pani bądź chorował/a na choroby skóry, wypryski/wysypka, uczulenia, katar sienny, astma.
Jeżeli tak, kiedy? `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy choruje Pan/Pani bądź chorował/a na cukrzyca, choroby krwi, przedłużone krwawienia, choroby naczyń krwionośnych, choroby nerek, choroby układu pokarmowego, choroby płuc, choroby nerwowe, choroby tarczycy, padaczka, nowotwór, zapalenie szpiku.
Jeżeli tak, kiedy?
            `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy choruje Pan/Pani bądź chorował/a na kiła, rzeżączka, toksoplazmoza, bruceloza, gruźlica, mononukleoza zakaźna.
Jeżeli tak, kiedy?`,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy choruje Pan/Pani bądź chorował/a na gorączka Q, gorączka Zachodniego Nilu
Jeżeli tak, kiedy? 
            `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
    ],
  },
  {
    subName: "Wyłącznie dla kobiet",
    data: [
      {
        type: `radio-and-input`,
        text: `Czy jest Pani obecnie w ciąży lub była w ciąży w ciągu ostatnich 12 miesięcy lub od czasu
ostatniej donacji krwi?
Jeżeli tak, proszę podać datę porodu.`,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy Pani miesiączkuje? Jeżeli tak, to kiedy ostatnio? `,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
      {
        type: `radio-and-input`,
        text: `Czy w latach 1965 – 1985 otrzymywała Pani zastrzyki hormonów w celu leczenia niepłodności?`,
        value: ``,
        addValue: ``,
        values: [`Tak`, `Nie`],
        visible: true,
      },
    ],
  },
];
