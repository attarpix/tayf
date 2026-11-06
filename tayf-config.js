/* Tayf settings (see LAUNCH-GUIDE.md). Empty values make the app show "Keys go on sale soon".

   buyUrl      - where "Get a key" goes. Payhip's DIRECT CHECKOUT link (straight to the $10 payment page,
                 skipping the product page): 'https://payhip.com/buy?link=' + the product code.
                 The product page itself is https://payhip.com/b/Euva9
   keyCheckUrl - the Cloudflare Worker that checks keys (no slash at the end) */
window.TAYF_CONFIG = {
  buyUrl: 'https://payhip.com/buy?link=Euva9',
  keyCheckUrl: 'https://tayf-keys.attarpix2.workers.dev'
};
