const timeInfoHour = document.querySelector('.time-info-hour');
const timeInfoDate = document.querySelector('.time-info-date');

const newDate = new Date();

const getCurrentHour = () => {
    const currentHours = newDate.getHours();
    const currentMinutes = newDate.getMinutes();
    const currentSeconds = newDate.getSeconds();

    timeInfoHour.innerHTML = `${currentHours}.${currentMinutes}:${currentSeconds}`;
    setTimeout('getCurrentHour()', 500);
}
getCurrentHour();

const getCurrentDate = () => {
    let dayCurrent;
    const currentDay = newDate.getDay();

    switch (currentDay) {
        case 0:
            dayCurrent = 'Sunday';
            break;
        case 1:
            dayCurrent = 'Monday';
            break;
        case 2:
            dayCurrent = 'Tuesday';
            break;
        case 3:
            dayCurrent = 'Wednesday';
            break;
        case 4:
            dayCurrent = 'Thursday';
            break;
        case 5:
            dayCurrent = 'Friday';
            break;
        case 6:
            dayCurrent = 'Saturday';
            break;
        default:
            dayCurrent = 'Error';
            break;
    }

    console.log(dayCurrent);
}
getCurrentDate();