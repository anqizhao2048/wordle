import {hardWordList} from "../reducer/hardWords";
import {normalWordList} from "../reducer/normalWords";
export const hardWords = [
    "fantasy",
    "gravity",
    "plaster",
    "frosted",
    "gleeful",
    "trickle",
    "flutter",
    "strange",
    "bristle",
    "clarity"
];

export const normalWords = [
    "bright",
    "gravel",
    "frozen",
    "tangle",
    "mumble",
    "driven",
    "gliste",
    "sprint",
    "twinge",
    "cradle"
];

export const generateNormalWordDict = () => {
    const normalWordDict = [];

    for (let i = 0; i < normalWordList.length; i++) {
        normalWordDict.push(normalWordList[i])
    }

    for (let i = 0; i < normalWords.length; i++) {
        normalWordDict.push(normalWords[i])
    }

    return normalWordDict;
}

export const generateHardWordDict = () => {
    let hardWordDict = [];

    for (let i = 0; i < hardWordList.length; i++) {
        hardWordDict.push(hardWordList[i])
    }

    for (let i = 0; i < hardWords.length; i++) {
        hardWordDict.push(hardWords[i])
    }

    return hardWordDict;
}