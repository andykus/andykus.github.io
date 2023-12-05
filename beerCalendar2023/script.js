const minDay = -1;
const maxDay = 25;

const calendar = [
    { 
        day: -1, 
        beer: 'Hazy Afternoon',
        rating: 4, 
        rhyme: 'Dag för dag, en dag i sänder<br/>Här är starten på din advents-kalender.<br/>Detta kan va en bra start,<br/>det är ju uppenbart.<br/>Det är en öl, ingen nubbe. <br/>Hoppas den kan passa denna gubbe',
        tastingNotes: 'Lite för vattnig'
    },
    { 
        day: 1, 
        beer: 'Slacker',
        rating: 4, 
        rhyme: 'En veckodag brukar avslutas med fredags-mys<br/>...och kvällen inleds ofta med ett välbekant pys',
        tastingNotes: 'Smakade ungefär som den förra'
    }, 
    { 
        day: 2, 
        beer: 'Hypno goat',
        rating: 6, 
        rhyme: 'Ny är det nån som är snurrig & yr!<br/>Kanske så förvirrad att hen spyr?<br/>I en saga trippar hen på en bro,<br/>men vanligtvis står hen mest och "glo".',
        tastingNotes: 'God smak men liite för söt!'
    }, 
    { 
        day: 3, 
        beer: 'Nelson IPA',
        rating: 7, 
        rhyme: 'Hör och häpna! Det är en gammal munk<br/>som inspirerat din framtida klunk.<br/>Du kan använda ölen som ett plåster,<br/>medan munkarna fortsätter gå i kloster.',
        tastingNotes: ''
        // tastingNotes: 'Väldigt IPIG! Inte dum alls!'
    }, 
    { 
        day: 4, 
        beer: 'Röksvamp',
        rating: '', 
        rhyme: 'Denna öl passar kanske inte denna gossen,<br/>men i så fall skulle du kunna ge den till bossen?<br/>Drycken innehåller till viss del rök.<br/>Perfekt att bjuda på vid oväntat besök?',
        tastingNotes: ''
    }, 
    { 
        day: 5, 
        beer: 'Revision Cold IPA',
        rating: '', 
        rhyme: 'Företagarna sina siffror boka,<br/>sen kommer dessa och vill snoka!<br/>De granskar varje siffra i kundens RÅ<br/>Om allt stämmer - ett leende de få!',
        tastingNotes: ''
    }, 
    { 
        day: 6, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'När det är vinter, snö och is<br/>är det lätt att tänka på ett paradis.<br/>Honolulu är en solig stad,<br/>att åka dit hade gjort mig glad.<br/>Gör man det finns en chans,<br/>att det slutar i en Hula-dans.<br/>När man inte är riktigt rik...<br/>får man nöja sig med öl som är lite lik.',
        tastingNotes: ''
    }, 
    { 
        day: 7, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Om du på jobbet gjort en tabbe,<br/>skit i det & öppna burken med denna labbe.<br/>Labben verkar faktiskt heta,<br/>inte mindre än Agneta!<br/>Hoppas hon god öl gör,<br/>och inte bara är en charmör!',
        tastingNotes: ''
    }, 
    { 
        day: 8, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Kavla först en platta rund, in i ugnen och ut om en stund<br/>Därefter kan du denna dryck poppa,<br/>jag tror den får din kväll att toppa!',
        tastingNotes: ''
    }, 
    { 
        day: 9, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Snart är det jul, se till att ha riktigt kul!<br/>Om ditt humör är glatt, drick denna efter skratt!',
        tastingNotes: ''
    }, 
    { 
        day: 10, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Kan bli avundsjuka om denna dryck,<br/>dels på grund av dess tryck.<br/>En kombo av korv med bröd,<br/>som avslutas i burk mjöd.<br/>Jag tror att du vet vem?!<br/>...som hade velat ta den hem.',
        tastingNotes: ''
    }, 
    { 
        day: 11, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Det är nog inte så bra för min lilla flicka<br/>att utav denna presenten dricka.<br/>Hon har dock något med trixat,<br/>och till och med namnet fixat!',
        tastingNotes: ''
    }, 
    { 
        day: 12, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'När maten ska få dig att mätta,<br/>då kan det vara bra att toppa med hetta.<br/>Drycken avrundas med Mmango,<br/>så kanske får du feeling för tango?',
        tastingNotes: ''
    }, 
    { 
        day: 13, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Ölen påminner om en kort, halvnaken rund man.<br/>Kan du gissa?<br/>Vem är han?',
        tastingNotes: ''
    }, 
    { 
        day: 14, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Namnet på denna IPA kan jag inte riktigt begripa<br/>Ska smaka söt aprikos, men det låter ju som en god juice<br/>Namnet antyder att man elden tänt,<br/>Sen har man inte haft koll och namnet bränt.',
        tastingNotes: ''
    }, 
    { 
        day: 15, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Hos företaget är bokföringen gjord i ett kick<br/>detta då de via Fortnox automatik fick<br/>ja det är faktiskt vår egen Berit-tant<br/>som sköter detta galant.',
        tastingNotes: ''
    }, 
    { 
        day: 16, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Nu är det äntligen helg,<br/>öppna njut & svälj!<br/>Ta en skål med skogens kung,<br/>då skulle du vara riktigt tung!',
        tastingNotes: ''
    }, 
    { 
        day: 17, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Drycken förknippas med en polare,<br/>Om jag avslöjar vem är jag en golare<br/>jag kan säga att det är en tjej<br/>och jag vet att ni varit på galej.<br/>Jag tror jon gör dig väldans glad,<br/>men tyvärr bor hon långt bort från vår stad.',
        tastingNotes: ''
    }, 
    { 
        day: 18, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Jag hittade denna ölen i en kista,<br/>kanske var det varelsens sista?<br/>Akta dig för att blöda,<br/>då kanske varelsen dig döda!<br/>Om du inte dör - så när morgonen gryr,<br/>så blir du kanske också en ______?',
        tastingNotes: ''
    }, 
    { 
        day: 19, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: '007 kallas ju en känd agent,<br/>dess aktivitet är ofta inte känt.<br/>Nu vill jag verkligen inte att vara dryg,<br/>men denna kanske du måste dricka i smyg.',
        tastingNotes: ''
    }, 
    { 
        day: 20, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Ett litet djur verkar vara ute och segla,<br/>ölen kanske kan få dig att dregla?<br/>Det lilla djuret är vanligtvis söt & fin,<br/>men nu verkar det vara en tappad kanin.',
        tastingNotes: ''
    }, 
    { 
        day: 21, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Jag hoppas inte denna är en nit,<br/>Jag tror den kan bli en favorit!',
        tastingNotes: ''
    }, 
    { 
        day: 22, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Denna dryck kanske gör dig rund<br/>dessutom inspirerad av en sådan hund<br/>Elektricitet med blixtar och dunder<br/>hoppas denna kalender ger dig fina stunder.',
        tastingNotes: ''
    }, 
    { 
        day: 23, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Du jobbar i Team Banka<br/>vad passar då inte bättre än en öl med en grön anka?<br/>Kanske har den glömt vart den lagt äggen,<br/>för den verkar bara glo in i väggen!',
        tastingNotes: ''
    }, 
    { 
        day: 24, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'Detta är något som får mig att njuta<br/>När jag äter det kan jag typ inte sluta!<br/>Hoppas drycken smakar najs,<br/>i grunden gjord med smak av majs!',
        tastingNotes: ''
    }, 
    { 
        day: 25, 
        beer: 'Ej öppnad',
        rating: '', 
        rhyme: 'När du tar på dig din skjorta och kostym,<br/>tror jag det kan vara bra med lite mer volym.<br/>Jag vet att du inte gillar skumpa,<br/>men denna kanske ändå kan få dig att skaka rumpa!<br/>Detta blir ett avslut, ditt sista paket,<br/>hoppas du avnjuter den ihop med någon raket!',
        tastingNotes: ''
    },
];

const calendarEl = document.querySelector('#calendar');
const topBeersEl = document.querySelector('#top-beers');

const getName = (day) => {
    const calendarDay = calendar.find(c => c.day === day);

    if (!calendarDay) {
        return '';
    }

    return calendarDay.beer;
};

const getRhyme = (day) => {
    const calendarDay = calendar.find(c => c.day === day);

    if (!calendarDay) {
        return 'Ej öppnad';
    }

    return calendarDay.rhyme;
};

const getRating = (day) => {
    const calendarDay = calendar.find(c => c.day === day);

    if (!calendarDay || !calendarDay.rating) {
        return '';
    }

    return `<b>Betyg:</b> <i>${calendarDay.rating}</i>`;
};

const getTastingNotes = (day) => {
    const calendarDay = calendar.find(c => c.day === day);

    if (!calendarDay || !calendarDay.tastingNotes) {
        return '';
    }

    return `<b>Tasting notes:</b> <i>${calendarDay.tastingNotes}</i>`;
};

const unopenedImage = (day) => {
    return `<img class="thumbnail" src="${day}_unopened.jpg" onclick="swapImage(${day}, false)" />`;
};

const openedImage = (day) => {
    return `<img class="thumbnail" src="${day}.jpg" onclick="swapImage(${day}, true)" />`;
};

const swapImage = (day, isOpened) => {
    const calendarDay = calendar.find(c => c.day == day);
    if (calendarDay.beer === 'Ej öppnad') {
        return;
    }

    const imageWrapper = document.querySelector(`.day-${day} .image`);

    if (isOpened) {
        imageWrapper.innerHTML = unopenedImage(day);
        return;
    }

    imageWrapper.innerHTML = openedImage(day);
};

const getThumbnail = (day) => {
    const calendarDay = calendar.find(c => c.day === day);

    if (!calendarDay || calendarDay.beer === 'Ej öppnad') {
        return unopenedImage(day);
    }

    return openedImage(calendarDay.day);
};

const getTopBeers = () => {
    const calendarClone = calendar.slice().filter(c => !!c.rating);
    calendarClone.sort((a, b) => b.rating - a.rating);
    return calendarClone.slice(0, 3);
};

const scrollToDay = (day) => {
    const el = document.querySelector(`.day-${day}`);
    el.scrollIntoView({behavior: "smooth"});
};

for (let i = minDay; i <= maxDay; i++) {
    if (i === 0) {
        continue;
    }

    calendarEl.innerHTML += `
    <div class="day-card day-${i}">
    <div class="day-container">
        <h2 class="lucka"><pre>Lucka\n${i}</pre></h2>
    </div>
    <div class="info-card">
        <h4>${getName(i)}</h4>
        <p>${getRhyme(i)}</p>
        <p class="notes">${getTastingNotes(i)}</p>
        <p class="notes">${getRating(i)}</p>
        </div>
    <div class="image" style="cursor: pointer">
        ${getThumbnail(i)}
    </div>
</div>
    `;
}

getTopBeers().forEach(b => {
    topBeersEl.innerHTML += `
        <span style="margin: 5px; cursor: pointer; text-decoration: underline;" onclick="scrollToDay(${b.day})"><b>${b.beer}</b> (Lucka ${b.day})</span>
    `;
});
