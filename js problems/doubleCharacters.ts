function doubleCharacters(word: string): string {
    return word.split('').map(ch => ch + ch).join('');
}