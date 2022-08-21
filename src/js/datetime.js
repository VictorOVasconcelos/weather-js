const mainDateValue = document.querySelector('.main-date-value');

const getCurrentDate = () => {
    const newDate = new Date();
    const currentDay = newDate.getDay();
    const currentMonth = newDate.getMonth();
    const currentDayMonth = newDate.getDate() + 1;

    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sanday'];
    const monthArray = [
        'January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    mainDateValue.innerHTML = `${dayArray[currentDay]}, ${currentDayMonth} ${monthArray[currentMonth]}`;
}
getCurrentDate();