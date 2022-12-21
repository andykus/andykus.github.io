const minDay = -4;
const maxDay = 24;

const calendar = [
    { 
        day: -4, 
        beer: 'Finn Railyard IPA',
        rating: 4, 
        rhyme: 'Dag för dag, en i sänder<br/>Här är starten på din egen kalender!',
        tastingNotes: 'God smak, men väldigt vattnig'
    },
    { 
        day: -3, 
        beer: 'Fatamorgana FOLK',
        rating: 7, 
        rhyme: 'Skrik ut ett bröl,<br/>här får du en riktig folköl!',
        tastingNotes: 'Blandning av IPA och veteöl, mycket smak!'
    },
    { 
        day: -2, 
        beer: 'Örebro brygghus Cassis',
        rating: 5, 
        rhyme: 'Har hört att en öl om dagen,<br/>är riktigt bra för magen!',
        tastingNotes: 'Smakade mer som läsk än öl'
    },
    { 
        day: -1, 
        beer: 'Bron IPA',
        rating: 6, 
        rhyme: 'Om du vill i Danmark härja,<br/>kandu ta en färja,<br/>Om inte kanske du kan ro?<br/>Eller kanske ta en ____!',
        tastingNotes: 'Lite fruktig och inte särskilt bitig. Smakar lite brown ale.'
    },
    { 
        day: 1, 
        beer: 'Expectations',
        rating: 10, 
        rhyme: 'En sak vi vet är hög är räntan<br/>Men frågan har hur uppfyller denna din förväntan?<br/>När du har den i din famn,<br/>får vi se om den lever upp till sitt namn!',
        tastingNotes: 'Söt, stark och extremt god!'
    },
    { 
        day: 2, 
        beer: 'Sur-olle',
        rating: 2, 
        rhyme: 'Har du jobbat med vår produktspecialist?<br/>Har han kanske blivit lite pist?<br/>Jag tror han fått ett riktigt ryck,<br/>Och tillverkat sin egen dryck!!',
        tastingNotes: 'Smakade som sur, kolsyrad lakrits 😱'
    },
    { 
        day: 3, 
        beer: 'Forever Sun IPA',
        rating: 8, 
        rhyme: 'Sätt dig på en stol,<br/>Öppna och lys upp som en sol,<br/>Får hoppas att innehållet i denna burk,<br/>Får dig att vilja ta en slurk!',
        tastingNotes: 'Stark beska och apelsin!'
    },
    { 
        day: 4, 
        beer: 'Hyttpilsner',
        rating: 7, 
        rhyme: 'Förr i tiden ordnade man hyttsill inför jul.<br/>Att anordna en sån själv känns som ett jäkla strul.<br/>Men om du hyr dig ett sådan hak,<br/>Så kan du ta med denna sak.',
        tastingNotes: 'Ganska mild och god pilsnersmak'
    }, 
    { 
        day: 5, 
        beer: 'Cool Cat Hazy session IPA',
        rating: 8, 
        rhyme: 'Detta är nog ingen skatt.<br/>Men kanske kan den locka fram ett skratt?<br/>Den sitter där häftig, cool men utan hatt.<br/>Men jag vet att du kommer gilla denna katt!',
        tastingNotes: 'Blommig smak och mycket besk'
    }, 
    { 
        day: 6, 
        beer: '???',
        rating: 7, 
        rhyme: 'Hur tröstar man en vegetarian?<br/>- Soja soja ingefära!',
        tastingNotes: 'Smakade ingefära'
    }, 
    { 
        day: 7, 
        beer: 'Q lager',
        rating: 6, 
        rhyme: 'Du är allt lite mager,<br/>så här kommer en riktig lager.',
        tastingNotes: 'Tror inte det är honung i, men den smakade mest honung'
    }, 
    { 
        day: 8, 
        beer: 'Kåtöl',
        rating: 5, 
        rhyme: 'Det kan vara svårt,<br/>Att vara ensam & kåt.<br/>Kanske kan denna öl råda bot?<br/>Men häll den inte på din fot.',
        tastingNotes: 'Smakade knappt något'
    },
    { 
        day: 9, 
        beer: 'Well done',
        rating: 9, 
        rhyme: '"Bra jobbat" säger denna bira,<br/>så ta fram den och börja fira!',
        tastingNotes: 'Väldigt god och bra balans mellan blommig och beska'
    },
    { 
        day: 10, 
        beer: 'Just As Amazing Haze',
        rating: 6, 
        rhyme: 'Dessa smakrika fröjder<br/>tar dig till himelska höjder.<br/>Hoppas du blir riktigt nöjder',
        tastingNotes: 'Not quite as amazing'
    },
    { 
        day: 11, 
        beer: 'Lager than life',
        rating: 5, 
        rhyme: 'Denna öl är större än livet,<br/>det står tillochmed skrivet!',
        tastingNotes: 'Besk på ett dåligt sätt!'
    },
    { 
        day: 12, 
        beer: 'Super bock',
        rating: 7, 
        rhyme: 'Denna ölen kommer från ett land<br/>där det finns en fin strand,<br/>Ett land där Emmaaa bott, det hade du väl aldrig trott?<br/>Namnet rimmar på chock<br/>vet inte om de tänkte på en geta____?',
        tastingNotes: 'Trea på PBR-skalan!'
    },
    { 
        day: 13, 
        beer: 'Råå ölglögg',
        rating: 8, 
        rhyme: 'Ta fram en kopp och njut!<br/>Hoppas du gillar den, absolut!<br/>Innehållet är en god present,<br/>Men tänk på att den innehåller procent..',
        tastingNotes: 'Den smakade mest som vanlig glögg men utan den sliskiga eftersmaken!'
    },
    { 
        day: 14, 
        beer: 'Två feta grisar - Chill in',
        rating: 8, 
        rhyme: 'Den här klappen ska vara riktigt stark,<br/>Hoppas inte den klassas som knark?<br/>Hoppas du har tillräckligt med mod<br/>Så du smakar och inser att den är god.',
        tastingNotes: 'Stark och smakade färsk chili. Inte jättegott, men skoj!'
    },
    { 
        day: 15, 
        beer: 'Migla hazy IPA',
        rating: 7, 
        rhyme: 'Om du sitter i knipa,<br/>Eller behöver på dina kunskaper slipa,<br/>Ta då denna hazy ___!',
        tastingNotes: 'Stack inte ut åt något håll'
    },
    { 
        day: 16, 
        beer: 'Taco Taco',
        rating: 8, 
        rhyme: 'Take and go, a taste of Mexico!<br/>Hoppas du gillar mexikanska seder,<br/>Nu får vi se vart detta leder.<br/>Öppna paketet där du bor<br/>Smakupplevelsen är naturligtvis stor!',
        tastingNotes: 'En smakrik lager som troligen hade passat fint till Tacos!'
    },
    { 
        day: 17, 
        beer: 'Lardy-Dardy',
        rating: 5, 
        rhyme: 'Den kommer från en granne,<br/>Och i det landet känner vi en "hanne",<br/>Hannens namn rimmar på golf,<br/>Ja självklart tänker jag på Rolf!',
        tastingNotes: 'Inte den bästa!'
    },
    { 
        day: 18, 
        beer: 'Stallhagen Honungsöl',
        rating: '', 
        rhyme: 'Den här kan ingen människa producera<br/>Nej det behövs några hundra små, kanske flera!<br/>Som flyger fram och tillbaka hela dagen<br/>och gör så det här smakar gott i magen',
    },
    { 
        day: 19, 
        beer: 'PrinsKatts Breakfast IPA',
        rating: '', 
        rhyme: 'Innan du till jobbet far, måste frukosten vara klar!<br/>Det behövs en lite morgondryck,<br/>Kanske man borde köpt flera styck?',
    },
    { 
        day: 20, 
        beer: 'BunnyHopped Into the Haze',
        rating: '', 
        rhyme: 'Bryggeriet heter "skäggiga kaninen" typ,<br/>Och jag gillar skarpt deras logotyp<br/>Kunde inte annat än löpa<br/>direkt till systemet och köpa!'
    },
    { 
        day: 21, 
        beer: 'Mikeller Kærlighed',
        rating: '', 
        rhyme: 'När du ska supa dig full<br/>Så du ramlar omkull<br/>Kan detta va en bra start,<br/>det är ju uppenbart'
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

const getThumbnail = (day) => {
    const calendarDay = calendar.find(c => c.day === day);

    if (!calendarDay) {
        return 'unopened.jpg';
    }

    return `${calendarDay.day}.jpg`;
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
    <div class="image">
        <img class="thumbnail" src="${getThumbnail(i)}" />
    </div>
</div>
    `;
}

getTopBeers().forEach(b => {
    topBeersEl.innerHTML += `
        <span style="margin: 5px; cursor: pointer; text-decoration: underline;" onclick="scrollToDay(${b.day})"><b>${b.beer}</b> (Lucka ${b.day})</span>
    `;
});
