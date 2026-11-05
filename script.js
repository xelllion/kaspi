$(document).ready(function() {

    $(".tab").click(function() {

        // Убираем активность у всех кнопок
        $(".tab").removeClass("active");

        // Делаем нажатую кнопку активной
        $(this).addClass("active");

        // Скрываем весь контент
        $(".content").removeClass("active");

        // Получаем название нужной вкладки
        let tab = $(this).data("tab");

        // Показываем её содержимое
        $("#" + tab).addClass("active");

    });

});