export default class Link {
    text: string;
    link: string;
    isLocal?: boolean;

    /**
     * Creates a basic link structure
     * @param text text to display for link
     * @param link end of link
     */
    constructor(text: string, link: string, isLocal: boolean = false) {
        this.isLocal = false;
        this.text = text;
        this.link = link;
    }
}