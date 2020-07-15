Date.prototype.toDateInputValue = (function () {
    let local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});
Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

window.onload = function () {
    document.getElementById('date-period-from').value = new Date().addDays(1).toDateInputValue();
    document.getElementById('date-period-to').value = new Date().addDays(5).toDateInputValue();
};

