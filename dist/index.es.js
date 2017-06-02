function humanDateRange(ref) {
  if ( ref === void 0 ) ref = {};
  var startDate = ref.startDate;
  var endDate = ref.endDate;
  var showWeekDays = ref.showWeekDays; if ( showWeekDays === void 0 ) showWeekDays = false;
  var month = ref.month; if ( month === void 0 ) month = 'short';
  var year = ref.year; if ( year === void 0 ) year = 'numeric';
  var weekday = ref.weekday; if ( weekday === void 0 ) weekday = 'short';

  if (!isDate(startDate) || !isDate(endDate)) {
    return null;
  }

  var sYear = startDate.getFullYear();
  var sDate = startDate.getDate();
  var sWeekday = showWeekDays ? startDate.toLocaleString('en-US', {weekday: weekday}) + ' ' : '';
  var sMonth = startDate.toLocaleString('en-US', {month: month});
  var eYear = endDate.getFullYear();
  var eDate = endDate.getDate();
  var eWeekday = showWeekDays ? endDate.toLocaleString('en-US', {weekday: weekday}) + ' ' : '';
  var eMonth = endDate.toLocaleString('en-US', {month: month});

  if (sYear === eYear && sMonth === eMonth) {
    return ("" + sWeekday + sMonth + " " + sDate + "-" + eWeekday + eDate + " " + eYear);
  }
  if (sYear === eYear) {
    return ("" + eWeekday + sMonth + " " + sDate + "-" + eWeekday + eMonth + " " + eDate + " " + eYear);
  }

  return ("" + eWeekday + sMonth + " " + sDate + " " + sYear + "-" + eWeekday + eMonth + " " + eDate + " " + eYear);
}

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]';
}

export default humanDateRange;
