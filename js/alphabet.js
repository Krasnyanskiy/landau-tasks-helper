$(document).ready(function () {

    var alphabet = [
        'А', 'Б', 'В', 'Г', 'Д',
        'Е', 'Ё', 'Ж', 'З', 'И',
        'Й', 'К', 'Л', 'М', 'Н',
        'О', 'П', 'Р', 'С', 'Т',
        'У', 'Ф', 'Х', 'Ц', 'Ч',
        'Ш', 'Щ', 'Ъ', 'Ы', 'Ь',
        'Э', 'Ю', 'Я'];

    for (var i = 1; i <= alphabet.length; i++) {

        var letterBlock = $(document.createElement('div'))
            .attr('class', 'letter-block');
        var letter = $(document.createElement('div'))
            .attr('class', 'letter');
        var letterNumber = $(document.createElement('div'))
            .attr('class', 'number');

        var alphabetLetter = letterBlock
            .append(letter.html(alphabet[i - 1])
                .append(letterNumber.html(i)));

        $('.alphabet').append(alphabetLetter);
    }

    var lb = $('.letter-block');

        lb.hover(function () {
            $(this).toggleClass('selection');
        });

        lb.on('click', function () {
            $(this).toggleClass('checked');
        });

});
