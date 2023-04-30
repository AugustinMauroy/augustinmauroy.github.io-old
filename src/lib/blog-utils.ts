export function authorsToArray(authors: string): string[] {
    return authors.split(', ').map(author => author.trim());
}

export function isToLongAuthor(author: string): boolean {
    const authorsArray = authorsToArray(author);
    if (authorsArray.length > 1) {
        return true;
    }
    return false;
}
