// Define a own function that makes sure that an int is returned even if the input field is empty
function safeParseInt(input) {
    if (/\d+/.test(input)) {
        return input === "" ? 0 : parseInt(input, 10);
    }
    return 0
}

function calculate(gameNumber){
    const upper_sum =
        safeParseInt(document.getElementById(`game${gameNumber}_upper_1`).value) +
        safeParseInt(document.getElementById(`game${gameNumber}_upper_2`).value) +
        safeParseInt(document.getElementById(`game${gameNumber}_upper_3`).value) +
        safeParseInt(document.getElementById(`game${gameNumber}_upper_4`).value) +
        safeParseInt(document.getElementById(`game${gameNumber}_upper_5`).value) +
        safeParseInt(document.getElementById(`game${gameNumber}_upper_6`).value)

    const upper_bonus = upper_sum > 62 ? 35 : 0

    const lower_sum =
        safeParseInt(document.getElementById(`game${gameNumber}_lower_3`).value) +
        safeParseInt(document.getElementById(`game${gameNumber}_lower_4`).value) +
        (document.getElementById(`game${gameNumber}_lower_fullHouse`).checked === true ? 25 : 0) +
        (document.getElementById(`game${gameNumber}_lower_smallStreet`).checked === true ? 30 : 0) +
        (document.getElementById(`game${gameNumber}_lower_bigStreet`).checked === true ? 40 : 0) +
        (document.getElementById(`game${gameNumber}_lower_kniffel`).checked === true ? 50 : 0) +
        safeParseInt(document.getElementById(`game${gameNumber}_lower_chance`).value)

    const total_sum = upper_sum + upper_bonus + lower_sum

    document.getElementById(`game${gameNumber}_upper_sum`).innerText   = upper_sum   === 0 ? "" : upper_sum
    document.getElementById(`game${gameNumber}_upper_bonus`).innerText = upper_bonus === 0 ? "" : upper_bonus
    document.getElementById(`game${gameNumber}_lower_sum`).innerText   = lower_sum   === 0 ? "" : lower_sum
    document.getElementById(`game${gameNumber}_total_sum`).innerText   = total_sum   === 0 ? "" : total_sum
}

function calculate_all(){
    for (let index = 1; index < 6; index++) {
        calculate(index)
    }
}
