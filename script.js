 // OK SO I KNOW WHATS WRONG, it divides milk example 1L by 7 that is 142 or smth in this case + 1L in this case that is why its wrong
 // FIXED but i will make it a better way soon (hopefully)

document.getElementById('calculate').addEventListener('click', function() {
    const milkAmount = parseFloat(document.getElementById('milkAmount').value); // in liters
    if (isNaN(milkAmount) || milkAmount <= 0) {
        alert('MIlk cannot be below 0'); // all that for a notification :/
        return;
    }

    // Calculate the Oboy amount based on the given milk amount
    const oboyAmount = (milkAmount / 7) / 2; // Divide the milk amount by 7(oboy amount), then by 2 ( fix i said at top)
    const totalVolume = milkAmount + oboyAmount; // Total volume (in liters)

    // Convert Oboy amount to tablespoons
    const oboyAmountInTablespoons = oboyAmount * 67.63; // Convert liters to tablespoons (about 14.8 ML cuz it wont be full that is 15ML)

    document.getElementById('result').innerHTML = `
        <p>You need: ${oboyAmountInTablespoons.toFixed(2)} tablespoons (14.8ML eatch)</p>
        <p>Total amount of Oboy: ${oboyAmount.toFixed(2)} L</p>
    `;

    const oboyFill = document.querySelector('.oboy-fill');
    oboyFill.style.height = `${(oboyAmount / totalVolume) * 100}%`; // Fill height as a procentage
});

// currently a place holder cuz its WIP
document.getElementById('dyslexicMode').addEventListener('click', function() {
    alert('Dyslexic mode is a work in progress!');
});
