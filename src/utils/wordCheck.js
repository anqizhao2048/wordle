export function wordColorCheck(guessWord, correctWord) {
    let colors = Array.from(correctWord).fill("");
    let matched = Array.from(correctWord).fill(false);

    let chs = guessWord.split("")

    for (let i = 0; i < chs.length; i++) {
        if (chs[i] === correctWord[i]) {
            colors[i] = "green";
            matched[i] = true;
        }
    }

    for (let i = 0; i < chs.length; i++) {
        if (colors[i] === "green") {
            continue;
        }

        if (charExist(correctWord, guessWord, i, matched)) {
            colors[i] = "yellow";
        } else {
            colors[i] = "grey";
        }
    }


    return colors
}

function charExist(correctWord, guessWord, idx, matched) {
    let chs = correctWord.split("")
    for (let i = 0; i < chs.length; i++) {

        if (guessWord[idx] === chs[i] && !matched[i]) {
            matched[i] = true;
            return true;
        }
    }

    return false;
}