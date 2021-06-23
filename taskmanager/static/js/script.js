document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialisation
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // modals initialisation
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"},
    });

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initialisation
    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});

