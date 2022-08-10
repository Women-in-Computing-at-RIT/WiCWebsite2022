export default class Link {
    text: string;
    link: string;

    /**
     * Creates a basic link structure
     * @param text text to display for link
     * @param link end of link
     */
    constructor(text: string, link: string) {
        this.text = text;
        this.link = link;
    }
}