export interface OpenseaAsset {
    id?:                         number;
    num_sales?:                  number;
    background_color?:           null;
    image_url?:                  string;
    image_preview_url?:          string;
    image_thumbnail_url?:        string;
    image_original_url?:         string;
    animation_url?:              null;
    animation_original_url?:     null;
    name?:                       string;
    description?:                string;
    external_link?:              null;
    asset_contract?:             AssetContract;
    permalink?:                  string;
    collection?:                 Collection;
    decimals?:                   null;
    token_metadata?:             string;
    is_nsfw?:                    boolean;
    owner?:                      null;
    seaport_sell_orders?:        null;
    creator?:                    Creator;
    traits?:                     any[];
    last_sale?:                  null;
    top_bid?:                    null;
    listing_date?:               null;
    supports_wyvern?:            boolean;
    rarity_data?:                null;
    transfer_fee?:               null;
    transfer_fee_payment_token?: null;
    token_id?:                   string;
}

export interface AssetContract {
    address?:                         string;
    asset_contract_type?:             string;
    created_date?:                    Date;
    name?:                            string;
    nft_version?:                     null;
    opensea_version?:                 null;
    owner?:                           null;
    schema_name?:                     string;
    symbol?:                          string;
    total_supply?:                    null;
    description?:                     null;
    external_link?:                   null;
    image_url?:                       null;
    default_to_fiat?:                 boolean;
    dev_buyer_fee_basis_points?:      number;
    dev_seller_fee_basis_points?:     number;
    only_proxied_transfers?:          boolean;
    opensea_buyer_fee_basis_points?:  number;
    opensea_seller_fee_basis_points?: number;
    buyer_fee_basis_points?:          number;
    seller_fee_basis_points?:         number;
    payout_address?:                  null;
}

export interface Collection {
    banner_image_url?:                null;
    chat_url?:                        null;
    created_date?:                    Date;
    default_to_fiat?:                 boolean;
    description?:                     null;
    dev_buyer_fee_basis_points?:      string;
    dev_seller_fee_basis_points?:     string;
    discord_url?:                     null;
    display_data?:                    DisplayData;
    external_url?:                    null;
    featured?:                        boolean;
    featured_image_url?:              null;
    hidden?:                          boolean;
    safelist_request_status?:         string;
    image_url?:                       null;
    is_subject_to_whitelist?:         boolean;
    large_image_url?:                 null;
    medium_username?:                 null;
    name?:                            string;
    only_proxied_transfers?:          boolean;
    opensea_buyer_fee_basis_points?:  string;
    opensea_seller_fee_basis_points?: string;
    payout_address?:                  null;
    require_email?:                   boolean;
    short_description?:               null;
    slug?:                            string;
    telegram_url?:                    null;
    twitter_username?:                null;
    instagram_username?:              null;
    wiki_url?:                        null;
    is_nsfw?:                         boolean;
    fees?:                            Fees;
    is_rarity_enabled?:               boolean;
    is_creator_fees_enforced?:        boolean;
}

export interface DisplayData {
    card_display_style?: string;
    images?:             any[];
}

export interface Fees {
    seller_fees?:  any;
    opensea_fees?: OpenseaFees;
}

export interface OpenseaFees {
    "0x0000a26b00c1f0df003000390027140000faa719"?: number;
}

export interface Creator {
    user?:            null;
    profile_img_url?: string;
    address?:         string;
    config?:          string;
}
