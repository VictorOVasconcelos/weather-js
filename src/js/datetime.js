const timeInfoHour = document.querySelector('.time-info-hour');
const timeInfoDate = document.querySelector('.time-info-date');

const getCurrentHour = () => {
    const newDate = new Date();
    const currentHours = newDate.getHours();
    const currentMinutes = newDate.getMinutes();
    const currentSeconds = newDate.getSeconds();

    timeInfoHour.innerHTML = `${currentHours}.${currentMinutes}:${currentSeconds}`;
    setTimeout('getCurrentHour()', 500);
}
getCurrentHour();