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
getCurrentHour()

const getCurrentDate = () => {
    const newDate = new Date();
    const currentDay = newDate.getDay();
    const currentMonth = newDate.getMonth();
    const currentYear = newDate.getFullYear();

    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sanday'];
    const monthArray = [
        'January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    timeInfoDate.innerHTML = `${dayArray[currentDay]}, ${monthArray[currentMonth]}, ${currentYear}`;
}
getCurrentDate();