interface String {
        right(numOfChars: number): string;
        left(numOfChars: number): string;
        replaceAll(find: string, replace: string);
        orEmpty(): string;
}