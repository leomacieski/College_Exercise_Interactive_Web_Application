function draw_table(){
    $("#results").empty();
    $.getHTMLuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
            }
        });

    };
    $.getHTMLuncached("/get/html");
}

function append(){

    $.ajax({
        url: "/post/json",
        type: "POST",
        dataType: 'json',
        data: {
            sec_n: $("#section").val(),
            item: $("#item").val(),
            price: $("#price").val(),
        },
        cache: false,
        success: draw_table()
    })
};

$(document).ready(function(){
    draw_table();
})