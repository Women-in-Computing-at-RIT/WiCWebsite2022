/**
 * Creates a baseline image format to use for input
 */
export interface IImage {
    /** Full filepath of image */
    fileName: string;
    /** Alt text of image */
    alt?: string;
 }

 /**
  * Creates an image with a link to the folder
  */
export default class Image implements IImage {
    /** Filename (not filepath!) of image */
    fileName: string;
    alt?: string | undefined;

    /**
     * 
     * @param fileName Name of image file in asset folder
     * @param alt Alt text of image
     */
    constructor(fileName: string, alt?: string) {
        this.fileName = `/assets/${fileName}`;
        this.alt = alt || undefined;
    }
    
}