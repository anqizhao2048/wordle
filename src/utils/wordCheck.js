export function wordColorCheck(word, correctWord) {
    let colors = Array.from(correctWord).fill("");

    let chs = word.split("")

    for (let i = 0; i < chs.length; i++) {
        if (chs[i] === correctWord[i]) {
            colors[i]("green");
        } else if (charExist(correctWord, chs[i], colors)) {
            colors[i]("yellow");
        } else {
            colors[i]("grey")
        }
    }

    return colors
}

function charExist(word, ch, colors) {
    let chs = word.split("")
    for (let i = 0; i < chs.length; i++) {
        if (ch === word[i] && colors[i].length === 0) {
            return true;
        }
    }

    return false;
}