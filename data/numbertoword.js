function timeToWords(hours, minutes, seconds) {
    const numbersToWords = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen','sixteen','seventeen', 'eighteen', 'nineteen',
        'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 
        'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 
        'twenty-nine', 'thirty', 'thirty-one', 'thirty-two', 'thirty-three',
        'thirty-four', 'thirty-five', 'thirty-six','thirty-seven', 'thirty-eight', 'thirty-nine',
        'forty', 'forty-one', 'forty-two', 'forty-three', 'forty-four', 'forty-five', 'forty-six',
        'forty-seven', 'forty-eight', 'forty-nine', 'fifty', 'fifty-one', 'fifty-two', 'fifty-three',
        'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-nine'
    ];

    let words = numbersToWords[hours] + ' hour' + (hours !== 1 ? 's' : '');
    words += ' and ' + numbersToWords[minutes] + ' minute' + (minutes !== 1 ? 's' : '');
    words += ' and ' + numbersToWords[seconds] + ' second' + (seconds !== 1 ? "s" : "");


    return words;
};

export { timeToWords };