export default ActivityTypes;
/**
 * The ActivityTypes model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes
 * @version 9.0.1
 */
declare class ActivityTypes {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ActivityTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes} The populated <code>ActivityTypes</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns If the author type is `user`, only `conversation:read` is supported.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes.TypeEnum}
         */
    getType(): any;
    /**
     * Sets If the author type is `user`, only `conversation:read` is supported.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes.TypeEnum} type If the author type is `user`, only `conversation:read` is supported.
     */
    setType(type: any): void;
    type: any;
}
declare namespace ActivityTypes {
    const TypeEnum: {
        /**
         * value: "conversation:read"
         * @const
         */
        "conversation:read": string;
        /**
         * value: "typing:start"
         * @const
         */
        "typing:start": string;
        /**
         * value: "typing:stop"
         * @const
         */
        "typing:stop": string;
    };
}
