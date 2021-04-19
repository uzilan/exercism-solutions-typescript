class Transcriptor {

    dnaMap = new Map([
        ['G', 'C'],
        ['C', 'G'],
        ['T', 'A'],
        ['A', 'U'],
    ]);

    toRna(strand: string) {
        return Array.from(strand)
            .map(ch => this.parse(ch))
            .join("");
    }

    private parse(ch: string): string {
        const replaced = this.dnaMap.get(ch);
        if (undefined === replaced) {
            throw new Error('Invalid input DNA.');
        }
        return replaced;
    }
}

export default Transcriptor
