function showCalendar() {
    document.getElementsByName('birth')[0].value = "";
    var elems = document.getElementsByName('birth')[0];
    elems.onfocus = function() {
        var cal = document.getElementsByClassName('calendar')[0];
        cal.style.visibility = "visible";
        cal.style.height = '200px';
        createCalendar();
    };
    var close = document.getElementsByClassName('exit')[0];
    close.onclick = function() {
        var main_part = document.getElementsByClassName('main_part')[0];
        main_part.innerHTML = '';
        var cal = document.getElementsByClassName('calendar')[0];
        cal.style.height = '0px';
        cal.style.visibility = "hidden";
    }
}

function createCalendar() {
    var calendar = document.getElementsByClassName('main_part')[0];
    var months = new Array('Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь');
    var years = new Array(2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990);
    calendar.innerHTML = '<select name="month" class="select"> </select> <select name="year" class="select"> </select>';
    months.forEach(month => { document.getElementsByName('month')[0].innerHTML += '<option>' + month + '</option>' });
    years.forEach(year => { document.getElementsByName('year')[0].innerHTML += '<option>' + year + '</option>' });
    calendar.innerHTML += '<div class="days">ПН ВТ СР ЧТ ПТ СБ ВС </div>';
    calendar.innerHTML += '<div class="numbers"></div>';
    showDays();
}

function showDays() {
    var selectMonth = document.getElementsByName('month')[0].value;
    var selectYear = document.getElementsByName('year')[0].value;
    var dateFirst = new Date(selectYear, getMonthNum(selectMonth), 1); //Первый день месяца
    var dayWeekFirst = dateFirst.getDay(); //День недели первого дня месяца
    var dateLast = new Date(selectYear, getMonthNum(selectMonth) + 1, 0).getDate(); //Последний день месяца
    var day = 1; //Начать с одного        
    //Выводим первую неделю        
    if (dayWeekFirst == 0) {
        document.getElementsByClassName('numbers')[0].innerHTML += '<div class="raw"></div>';
        for (var i = 0; i < 6; i++) {
            document.getElementsByClassName('raw')[0].innerHTML += '<div class="num_zero"></div>';
        }
        document.getElementsByClassName('raw')[0].innerHTML += '<div class="num">' + 1 + '</div>';
    } else {
        document.getElementsByClassName('numbers')[0].innerHTML += '<div class="raw"></div>';
        for (var i = 0; i < 7; i++) {
            if (i < dayWeekFirst-1) {
                document.getElementsByClassName('raw')[0].innerHTML += '<div class="num_zero"></div>';
            } else {
                document.getElementsByClassName('raw')[0].innerHTML += '<div class="num">' + day + '</div>';
                day++;
            }
        }
    }
    //Выводим все остальные недели        
    var ned = 1; //счетчик недель        
    while (day < dateLast) {
        document.getElementsByClassName('numbers')[0].innerHTML += '<div class="raw"></div>';
        for (var i = 0; i < 7; i++) {
            if (day > dateLast) {
                document.getElementsByClassName('raw')[ned].innerHTML += '<div class="num_zero"></div>';
            } else {
                document.getElementsByClassName('raw')[ned].innerHTML += '<div class="num">' + day + '</div>';
                day++;
            }
        }
        ned++;
    }
    //Вешаем обработчики событий на выбор года и месяца        
    var selectMonth = document.getElementsByName('month')[0];
    selectMonth.addEventListener("change", function() {
        document.getElementsByClassName('numbers')[0].innerHTML = ' ';
        showDays();
    });
    var selectYear = document.getElementsByName('year')[0];
    selectYear.addEventListener("change", function() {
        document.getElementsByClassName('numbers')[0].innerHTML = ' ';
        showDays();
    });
    //Вешаем обработчики событий на числа        
    var calcDays = document.getElementsByClassName('num');
    for (var i = 0; i < calcDays.length; i++) {
        calcDays[i].onclick = function() {
            var inputBirth = document.getElementsByName('birth')[0];
            var selectMonth = document.getElementsByName('month')[0].value;
            var selectYear = document.getElementsByName('year')[0].value;
            inputBirth.value = this.textContent + ' ' + getMonthNumForInput(selectMonth) + ' ' + selectYear;
            inputBirth.focus();
        };
    }
}

function getMonthNum(selectMonth) {
    switch (selectMonth) {
        case 'Январь':
            return 0;
        case 'Февраль':
            return 1;
        case 'Март':
            return 2;
        case 'Апрель':
            return 3;
        case 'Май':
            return 4;
        case 'Июнь':
            return 5;
        case 'Июль':
            return 6;
        case 'Август':
            return 7;
        case 'Сентябрь':
            return 8;
        case 'Октябрь':
            return 9;
        case 'Ноябрь':
            return 10;
        case 'Декабрь':
            return 11;
    }
}

function getMonthNumForInput(selectMonth) {
    switch (selectMonth) {
        case 'Январь':
            return 'Января';
        case 'Февраль':
            return 'Февраля';
        case 'Март':
            return 'Марта';
        case 'Апрель':
            return 'Апреля';
        case 'Май':
            return 'Мая';
        case 'Июнь':
            return 'Июня';
        case 'Июль':
            return 'Июля';
        case 'Август':
            return 'Августа';
        case 'Сентябрь':
            return 'Сентября';
        case 'Октябрь':
            return 'Октября';
        case 'Ноябрь':
            return 'Ноября';
        case 'Декабрь':
            return 'Декабря';
    }
}