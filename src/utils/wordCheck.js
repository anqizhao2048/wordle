export function wordColorCheck(word, correctWord) {
    let colors = [];

    let chs = word.split("")
    for (let i = 0; i < chs.length; i++) {
        if (chs[i] === correctWord[i]) {
            colors.push("green");
        } else if (charExist(correctWord, chs[i])) {
            colors.push("yellow");
        } else {
            colors.push("grey")
        }
    }

    return colors
}

function charExist(word, ch) {
    let chs = word.split("")
    for (let i = 0; i < chs.length; i++) {
        if (ch === word[i]) {
            return true;
        }
    }

    return false;
}