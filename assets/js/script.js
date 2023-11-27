var formEl = $('#user-search');
var nameInputEl = $('#form-label');
var dateInputEl = $('#datepicker');
var flightsList = $('#flight-search-form')

var results = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('form-label').text(listDetail);
  listEl.appendTo(flightsList);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  results(nameInput, dateInput);

  // resets form
  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
// Datepicker widget
$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });
  