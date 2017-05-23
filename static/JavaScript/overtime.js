$('.date').datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd',
        language: "lv",
        daysOfWeekHighlighted: "0,6",
        todayHighlight: true,
});

$('.time').timepicker({
    timeFormat: 'HH:mm',
    interval: 30,
    dynamic: true,
});