const pages = {
    '/interest.html': 'Интересы',
    '/index.html': 'Главная',
    '/about.html': 'Обо мне',
    '/studing.html': 'Учеба',
    '/photo.html': 'Фотоальбом',
    '/contact.html': 'Контакт',
    '/test.html': 'Тест',
    '/history.html': 'История'
};

function setCookie(name, value, exlpiration_days) {
    exlpiration_seconds = exlpiration_days * 24 * 60 * 60;
    document.cookie = '' + name + '=' + value + ';max-age=' + exlpiration_seconds;
}

function getCookieValue(name) {
    const findeCookie = document.cookie.split(';').find((item) => item.trim().startsWith(name + '='));
    if (findeCookie) {
        return findeCookie.substr(name.length + 2);
    }
    return findeCookie;
}

function getSavedVisitfInCookie(pathName) {
    const parseVal = parseInt(getCookieValue(pathName), 10);
    if (isNaN(parseVal)) {
        return 0;
    } else {
        return parseVal;
    }
}

function addVisitSavedInCookie(pathName) {
    setCookie(pathName, getSavedVisitfInCookie(pathName) + 1, 1);
}

function getSavedVisitInLocalStorage(pathName) {
    const prepVal = parseInt(localStorage.getItem(pathName), 10);
    if (isNaN(prepVal)) {
        return 0;
    } else {
        return prepVal;
    }
};

function addVisitSavedInLocalStorage(pathName) {
    const oldValue = getSavedVisitInLocalStorage(pathName);
    localStorage.setItem(pathName, oldValue + 1);
}

function getCurrentPageKey() {
    return location.pathname;
}

addVisitSavedInCookie(getCurrentPageKey())
addVisitSavedInLocalStorage(getCurrentPageKey())

function getPagesKeyLocalStorage() {
    const prepData = [];
    const pagesKey = Object.keys(pages);
    for (let i = 0; i < pagesKey.length; i++) {
        prepData.push([pagesKey[i], getSavedVisitInLocalStorage(pagesKey[i])]);
    }
    return prepData;
}

function getPagesKeyCookies() {
    const prepData = [];
    const pagesKey = Object.keys(pages);
    for (let i = 0; i < pagesKey.length; i++) {
        prepData.push([pagesKey[i], getSavedVisitfInCookie(pagesKey[i])]);
    }
    return prepData;
}

function renderTable(sourceData, header) {
    const tmpTable = document.createElement("table");
    tmpTableCaption = document.createElement("caption");
    tmpTableCaption.textContent = header;
    tmpTable.append(tmpTableCaption);
    tmpTable.append(...sourceData.map(elm => {
        const dataString = document.createElement("tr");
        const pagePath = document.createElement("td");
        //pagePath.textContent = elm[0];
        pagePath.textContent = pages[elm[0]];
        const pageCount = document.createElement("td");
        pageCount.textContent = elm[1];
        dataString.append(pagePath, pageCount);
        return dataString;
    }))
    return tmpTable;
}

function testSession() {
    const isStarted = sessionStorage.getItem('sessionStartted');
    if (!isStarted) {

        const pagesKey = Object.keys(pages);

        pagesKey.forEach((item) => {
            localStorage.setItem(item, 0);
        });
        sessionStorage.setItem('sessionStartted', true);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    testSession();
    anhorAll = document.getElementById("history-all");
    if (anhorAll) {
        anhorAll.append(renderTable(getPagesKeyLocalStorage(), '«История текущего сеанса»'));
    };
    anhorSession = document.getElementById("history-session");
    if (anhorSession) {
        anhorSession.append(renderTable(getPagesKeyCookies(), '«История за все время»'));
    };
})

function showWindow(){
    $('#btClear').click(function(){
        $('.backBlur').css('visibility', 'visible');
    });
    $('#yes').click(function(){
        clearHistory();
    });
    $('#no').click(function(){
        closeWindow();
    });
}
function closeWindow(){
    $('.backBlur').css('visibility', 'hidden');
}
function clearHistory(){
    closeWindow();
}