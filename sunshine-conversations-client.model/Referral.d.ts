export default Referral;
/**
 * The Referral model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Referral
 * @version 9.0.1
 */
declare class Referral {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Referral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} The populated <code>Referral</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The referral’s identifier.
         * @return {String}
         */
    getCode(): string;
    /**
     * Sets The referral’s identifier.
     * @param {String} code The referral’s identifier.
     */
    setCode(code: string): void;
    code: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails}
         */
    getDetails(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails} details
     */
    setDetails(details: any): void;
    details: any;
}
