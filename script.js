// Define a own function that makes sure that an int is returned even if the input field is empty
function safeParseInt(input) {
    if (/\d+/.test(input)) {
        return input === "" ? 0 : parseInt(input, 10);
    }
    return 0
}

function calculate() {
    _game1_upper_sum =
        safeParseInt(game1_upper_1.value) +
        safeParseInt(game1_upper_2.value) +
        safeParseInt(game1_upper_3.value) +
        safeParseInt(game1_upper_4.value) +
        safeParseInt(game1_upper_5.value) +
        safeParseInt(game1_upper_6.value)

    if (safeParseInt(game1_upper_1.value) +
        safeParseInt(game1_upper_2.value) +
        safeParseInt(game1_upper_3.value) +
        safeParseInt(game1_upper_4.value) +
        safeParseInt(game1_upper_5.value) +
        safeParseInt(game1_upper_6.value) > 62) {
        _game1_upper_bonus = 35
    } else {
        _game1_upper_bonus = 0
    }

    _game1_lower_sum =
        safeParseInt(game1_lower_3.value) +
        safeParseInt(game1_lower_4.value) +
        (game1_lower_fullHouse.checked === true ? 25 : 0) +
        (game1_lower_smallStreet.checked === true ? 30 : 0) +
        (game1_lower_bigStreet.checked === true ? 40 : 0) +
        (game1_lower_kniffel.checked === true ? 50 : 0) +
        safeParseInt(game1_lower_chance.value)

    _game1_total_sum = _game1_upper_sum + _game1_upper_bonus + _game1_lower_sum

    game1_upper_sum.innerText = _game1_upper_sum
    game1_upper_bonus.innerText = _game1_upper_bonus
    game1_lower_sum.innerText = _game1_lower_sum
    game1_total_sum.innerText = _game1_total_sum
}
