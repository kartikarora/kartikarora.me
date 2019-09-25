function getRandom(items) {
    return _.sample(items);
}

function remove(items, value) {
    return items.filter(function (item) {
        return item !== value;
    });
}

function start() {
    $('#title').show();
    $('#ze_items').val('');
    $('#ze_items').show();
    $('#start_picking').text('PICK');
    $('#start_picking').show();
    $('#restart_process').hide();
    $('#selection').hide();
}

$('#start_picking').click(function () {
    let items = $('#ze_items').val().split('\n');
    $('#title').hide();
    $('#ze_items').hide();
    $('#start_picking').text('NEXT');
    $('#restart_process').show();
    let item = getRandom(items);
    items = remove(items, item);
    $('#selection').text(item);
    $('#selection').show();
    $('#ze_items').val(items.join('\n'));
    if (items.length === 0) {
        $('#start_picking').hide();
    }
});

$('#restart_process').click(function () {
    start();
});

$().ready(function () {
    start();
});

$().bind('_page_ready', start);
