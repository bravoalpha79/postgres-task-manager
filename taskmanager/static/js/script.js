document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialisation
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // modals initialisation
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

