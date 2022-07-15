/**
 * Creates a baseline button for site navigation
 */
 export interface IButton {
    text?: string;
    links?: string | string[];

 }

/**
 * Creates a baseline button for site navigation
 */
export default class Button implements IButton {
    text?: string | undefined;
    links?: string | string[] | undefined;

    /**
     * Creates a baseline button for site navigation
     * @param text text to display
     * @param links link or list of links
     */
    constructor(text?: string, links?: string | string[]) {
        this.text = text || undefined;
        this.links = links || undefined;
    }
    
}