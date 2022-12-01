const minDay = -4;
const maxDay = 24;

const calendar = [
    { 
        day: -4, 
        beer: 'Finn Railyard IPA',
        rating: 4, 
        rhyme: 'Dag för dag, en i sänder\nHär är starten på din egen kalender!',
        tastingNotes: 'God smak, men väldigt vattnig'
    },
    { 
        day: -3, 
        beer: 'Fatamorgana FOLK',
        rating: 7, 
        rhyme: 'Skrik ut ett bröl,\nhär får du en riktig folköl!',
        tastingNotes: 'Blandning av IPA och veteöl, mycket smak!'
    },
    { 
        day: -2, 
        beer: 'Örebro brygghus Cassis',
        rating: 5, 
        rhyme: 'Har hört att en öl om dagen,\när riktigt bra för magen!',
        tastingNotes: 'Smakade mer som läsk än öl'
    },
    { 
        day: -1, 
        beer: 'Bron IPA',
        rating: 6, 
        rhyme: 'Om du vill i Danmark härja,\nkandu ta en färja,\nOm inte kanske du kan ro?\nEller kanske ta en ____!',
        tastingNotes: 'Lite fruktig och inte särskilt bitig. Smakar lite brown ale.'
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
    const calendarClone = calendar.slice();
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
        <pre><p>${getRhyme(i)}</p></pre>
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
