{
    ///Problem-3


    function countWordOccurrences(sentence: string, word: string): number {

        const SomeWord = word.toLowerCase();
    
    
        return sentence.toLowerCase().split(" ").filter(s => s === SomeWord).length;
    }
    
    
    const sentence = "The word";
    const SomeWord = "the";
    
    const result = countWordOccurrences(sentence,SomeWord);
    console.log(result);
}