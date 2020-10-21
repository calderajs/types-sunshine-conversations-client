export default ReferralDetails;
/**
 * The ReferralDetails model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails
 * @version 9.0.1
 */
declare class ReferralDetails {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ReferralDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails} The populated <code>ReferralDetails</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The source of the referral - MESSENGER_CODE, ADS etc…
         * @return {String}
         */
    getSource(): string;
    /**
     * Sets The source of the referral - MESSENGER_CODE, ADS etc…
     * @param {String} source The source of the referral - MESSENGER_CODE, ADS etc…
     */
    setSource(source: string): void;
    source: string;
    /**
         * Returns The type of referral, typically OPEN-THREAD.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of referral, typically OPEN-THREAD.
     * @param {String} type The type of referral, typically OPEN-THREAD.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns If the referral came from an ad, this field will be present with the ad’s Id.
         * @return {String}
         */
    getAdId(): string;
    /**
     * Sets If the referral came from an ad, this field will be present with the ad’s Id.
     * @param {String} adId If the referral came from an ad, this field will be present with the ad’s Id.
     */
    setAdId(adId: string): void;
    adId: string;
}
