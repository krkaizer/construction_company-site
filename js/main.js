document.addEventListener('DOMContentLoaded', function () { //когда построено дом-дерево
    //инициализация меню
    var sidenav = document.querySelectorAll('.sidenav');
    var instances_sidenav = M.Sidenav.init(sidenav);
    //инициализация модального окна
    var modal = document.querySelectorAll('.modal');
    var instances_modal = M.Modal.init(modal);
});