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

    _game1_upper_bonus = _game1_upper_sum > 62 ? 35 : 0

    _game1_lower_sum =
        safeParseInt(game1_lower_3.value) +
        safeParseInt(game1_lower_4.value) +
        (game1_lower_fullHouse.checked === true ? 25 : 0) +
        (game1_lower_smallStreet.checked === true ? 30 : 0) +
        (game1_lower_bigStreet.checked === true ? 40 : 0) +
        (game1_lower_kniffel.checked === true ? 50 : 0) +
        safeParseInt(game1_lower_chance.value)

    _game1_total_sum = _game1_upper_sum + _game1_upper_bonus + _game1_lower_sum

    game1_upper_sum.innerText = _game1_upper_sum === 0 ? "" : _game1_upper_sum
    game1_upper_bonus.innerText = _game1_upper_bonus === 0 ? "" : _game1_upper_bonus
    game1_lower_sum.innerText = _game1_lower_sum === 0 ? "" : _game1_lower_sum
    game1_total_sum.innerText = _game1_total_sum === 0 ? "" : _game1_total_sum

    _game2_upper_sum =
        safeParseInt(game2_upper_1.value) +
        safeParseInt(game2_upper_2.value) +
        safeParseInt(game2_upper_3.value) +
        safeParseInt(game2_upper_4.value) +
        safeParseInt(game2_upper_5.value) +
        safeParseInt(game2_upper_6.value)

    _game2_upper_bonus = _game2_upper_sum > 62 ? 35 : 0

    _game2_lower_sum =
        safeParseInt(game2_lower_3.value) +
        safeParseInt(game2_lower_4.value) +
        (game2_lower_fullHouse.checked === true ? 25 : 0) +
        (game2_lower_smallStreet.checked === true ? 30 : 0) +
        (game2_lower_bigStreet.checked === true ? 40 : 0) +
        (game2_lower_kniffel.checked === true ? 50 : 0) +
        safeParseInt(game2_lower_chance.value)

    _game2_total_sum = _game2_upper_sum + _game2_upper_bonus + _game2_lower_sum

    game2_upper_sum.innerText = _game2_upper_sum === 0 ? "" : _game2_upper_sum
    game2_upper_bonus.innerText = _game2_upper_bonus === 0 ? "" : _game2_upper_bonus
    game2_lower_sum.innerText = _game2_lower_sum === 0 ? "" : _game2_lower_sum
    game2_total_sum.innerText = _game2_total_sum === 0 ? "" : _game2_total_sum

    _game3_upper_sum =
        safeParseInt(game3_upper_1.value) +
        safeParseInt(game3_upper_2.value) +
        safeParseInt(game3_upper_3.value) +
        safeParseInt(game3_upper_4.value) +
        safeParseInt(game3_upper_5.value) +
        safeParseInt(game3_upper_6.value)

    _game3_upper_bonus = _game3_upper_sum > 62 ? 35 : 0

    _game3_lower_sum =
        safeParseInt(game3_lower_3.value) +
        safeParseInt(game3_lower_4.value) +
        (game3_lower_fullHouse.checked === true ? 25 : 0) +
        (game3_lower_smallStreet.checked === true ? 30 : 0) +
        (game3_lower_bigStreet.checked === true ? 40 : 0) +
        (game3_lower_kniffel.checked === true ? 50 : 0) +
        safeParseInt(game3_lower_chance.value)

    _game3_total_sum = _game3_upper_sum + _game3_upper_bonus + _game3_lower_sum

    game3_upper_sum.innerText = _game3_upper_sum === 0 ? "" : _game3_upper_sum
    game3_upper_bonus.innerText = _game3_upper_bonus === 0 ? "" : _game3_upper_bonus
    game3_lower_sum.innerText = _game3_lower_sum === 0 ? "" : _game3_lower_sum
    game3_total_sum.innerText = _game3_total_sum === 0 ? "" : _game3_total_sum

    _game4_upper_sum =
        safeParseInt(game4_upper_1.value) +
        safeParseInt(game4_upper_2.value) +
        safeParseInt(game4_upper_3.value) +
        safeParseInt(game4_upper_4.value) +
        safeParseInt(game4_upper_5.value) +
        safeParseInt(game4_upper_6.value)

    _game4_upper_bonus = _game4_upper_sum > 62 ? 35 : 0

    _game4_lower_sum =
        safeParseInt(game4_lower_3.value) +
        safeParseInt(game4_lower_4.value) +
        (game4_lower_fullHouse.checked === true ? 25 : 0) +
        (game4_lower_smallStreet.checked === true ? 30 : 0) +
        (game4_lower_bigStreet.checked === true ? 40 : 0) +
        (game4_lower_kniffel.checked === true ? 50 : 0) +
        safeParseInt(game4_lower_chance.value)

    _game4_total_sum = _game4_upper_sum + _game4_upper_bonus + _game4_lower_sum

    game4_upper_sum.innerText = _game4_upper_sum === 0 ? "" : _game4_upper_sum
    game4_upper_bonus.innerText = _game4_upper_bonus === 0 ? "" : _game4_upper_bonus
    game4_lower_sum.innerText = _game4_lower_sum === 0 ? "" : _game4_lower_sum
    game4_total_sum.innerText = _game4_total_sum === 0 ? "" : _game4_total_sum

    _game5_upper_sum =
        safeParseInt(game5_upper_1.value) +
        safeParseInt(game5_upper_2.value) +
        safeParseInt(game5_upper_3.value) +
        safeParseInt(game5_upper_4.value) +
        safeParseInt(game5_upper_5.value) +
        safeParseInt(game5_upper_6.value)

    _game5_upper_bonus = _game5_upper_sum > 62 ? 35 : 0

    _game5_lower_sum =
        safeParseInt(game5_lower_3.value) +
        safeParseInt(game5_lower_4.value) +
        (game5_lower_fullHouse.checked === true ? 25 : 0) +
        (game5_lower_smallStreet.checked === true ? 30 : 0) +
        (game5_lower_bigStreet.checked === true ? 40 : 0) +
        (game5_lower_kniffel.checked === true ? 50 : 0) +
        safeParseInt(game5_lower_chance.value)

    _game5_total_sum = _game5_upper_sum + _game5_upper_bonus + _game5_lower_sum

    game5_upper_sum.innerText = _game5_upper_sum === 0 ? "" : _game5_upper_sum
    game5_upper_bonus.innerText = _game5_upper_bonus === 0 ? "" : _game5_upper_bonus
    game5_lower_sum.innerText = _game5_lower_sum === 0 ? "" : _game5_lower_sum
    game5_total_sum.innerText = _game5_total_sum === 0 ? "" : _game5_total_sum
}
