export default CarouselMessageDisplaySettings;
/**
 * The CarouselMessageDisplaySettings model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings
 * @version 9.0.1
 */
declare class CarouselMessageDisplaySettings {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CarouselMessageDisplaySettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} The populated <code>CarouselMessageDisplaySettings</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Specifies how to display all carousel images. Valid values are horizontal (default) and square. Only supported in Facebook Messenger, Web Messenger, Android SDK and iOS SDK carousels.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings.ImageAspectRatioEnum}
         */
    getImageAspectRatio(): any;
    /**
     * Sets Specifies how to display all carousel images. Valid values are horizontal (default) and square. Only supported in Facebook Messenger, Web Messenger, Android SDK and iOS SDK carousels.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings.ImageAspectRatioEnum} imageAspectRatio Specifies how to display all carousel images. Valid values are horizontal (default) and square. Only supported in Facebook Messenger, Web Messenger, Android SDK and iOS SDK carousels.
     */
    setImageAspectRatio(imageAspectRatio: any): void;
    imageAspectRatio: any;
}
declare namespace CarouselMessageDisplaySettings {
    namespace ImageAspectRatioEnum {
        const horizontal: string;
        const square: string;
    }
}
