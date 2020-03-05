$(document).ready(function () {
    $(".select").click(function () {
        var data = $(this).children('h4').text();
        $('.select i').removeClass('ch-color');
        $(this).children('i').addClass('ch-color');
        $("#disp").val(data);
    });

    $('#disp').keyup(function (e) {
        var matched = false;
        var search = $("#disp").val().toLowerCase().trim();
        $('.select').each(function (i, elm) {
            var data = $(elm).children('h4').text().toLowerCase();
            if (data == search) {
                $(elm).children('i').addClass('ch-color');
                matched = true;
            }
        })
        if (matched == false) {
            $('.select i').removeClass('ch-color');
        }
    });
});
