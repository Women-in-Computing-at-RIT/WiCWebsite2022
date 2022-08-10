import Link from "@app/shared/models/inputs/link";

/**
 * Creates a baseline button for site navigation
 */
 export interface IButton {
    text: string;
    links: Link[];

 }

/**
 * Creates a baseline button for site navigation
 */
export default class Button implements IButton {
    text: string;
    links: Link[];

    /**
     * Creates a baseline button for site navigation
     * @param text text to display
     * @param links link or list of links
     */
    constructor(text: string, links: Link[]) {
        this.text = text;
        this.links = links;
    }
    
}