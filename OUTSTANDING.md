# Pepperfarm Website — Outstanding Changes

Tracking the change requests from *"Changes sought on Pepperfarm Website"* against the codebase.
Branch: `changes/pepperfarm-revisions`.

Legend: ✅ done · 🟡 partially done · ⏳ blocked on assets/info · ⬜ not started

---

## Slide 1 — Landing / Hero  ✅ (copy & logo) / ⏳ (carousel)
- ✅ Eyebrow "Farm to Table · Bangalore" → "Farm to Table"
- ✅ Headline → "Farm-Grown. Chef-Crafted. / Everyday food that actually loves you back."
- ✅ Removed centre "Chat on WhatsApp" button (floating one stays)
- ✅ Stat "24+ Rotating Recipes" → "∞ Recipes"
- ✅ Stat "₹250 Per Bowl / Sub" → "₹150 Per Bowl"
- ✅ Logo enlarged 72px → 144px (2×)
- ⏳ **Carousel → updated farm/kitchen photos** — final pics "to be shared separately"
- ❓ Confirm logo at 2× vs push to 3× (216px)
- ❓ Confirm "∞ Recipes" symbol vs literal text "Infinite"

## Slide 2 — Philosophy  ✅
- ✅ Intro paragraph rewritten ("You want to eat well…")
- ✅ Cards renamed: Cook From Scratch → Zero Shortcuts; Balance Over Extremes → Farm Fresh — Real Fuel, No Fads; Consistency Over Hype → Subscription Model (with new copy)
- ✅ Removed redundant "Chat on WhatsApp" button
- ✅ "Leave your details" → "Start your Subscription Journey" (→ Google Form)
- ❓ Heading kept as "Food is a system, not a product." (doc gave no replacement) — confirm

## Slide 3 — How It Works  ✅
- ✅ Heading → "Harvested at Sunrise. Served by Sunset."
- ✅ Intro paragraph rewritten
- ✅ Steps → Harvested in the Morning / Prepared the Same Afternoon / Delivered by Evening (with new copy)

## Slide 4 — Menu  ✅
- ✅ Removed "Healthy Daily Nutrition" label
- ✅ Removed "Subscription pricing · Min 10 deliveries" note
- ✅ Subhead → "Salads, cold-pressed juices, soups, and breads…"
- ✅ Per-product WhatsApp/email icon buttons removed (earlier PR)
- ✅ Parfait added beside Farmer's Veg Bowl (2×3 grid)
- ✅ Raw Cold-Pressed Juice → Cold-Pressed Juice
- ✅ Protein Smoothie → Smoothie
- ✅ Daily Artisan Soup → Soups and Kanji's (full 11-image soup/kanji set wired in)
- ✅ Removed "Can't decide?" dual-funnel CTA block

## Contact routing (cross-cutting)  ✅
- ✅ Every "Leave your details" → Google Form (Menu removed, Philosophy, Bakery, and the popup option)
- ✅ Popup retained for "Contact Us" and "Start your trial"

## Slide 5 — Bakery  🟡
- ✅ Removed "Artisan Slow-Bakery" label
- ✅ Removed all "+" buttons
- ✅ Removed bottom "Chat on WhatsApp / Leave your details" CTAs
- ⏳ **Different pricing options for the two single-price breads** — need sizes & prices:
  - *Whole Wheat Seeded Bread* (currently ₹155 / 450gms)
  - *Sourdough Loaf* (currently ₹160 / 500gms)
- ⏳ **Add Aloo & Tofu buns** — need names, descriptions, sizes/prices, AND photos (no aloo/tofu images found in the Bakery resources folder)

## Slide 6 — Trial Banner  ⬜
- ⬜ "Claim your trial" → "Start your trial" + redirect to Google Form

## Slide 7 — Subscriptions  ✅
- ✅ Section already removed from the page (doc marked DONE)

## Slide 8 — Gallery ("Fresh From the Source")  ⬜ / ⏳
- ⬜ Remove "Fresh From the Source" heading → "if it grows on our farm, we use it." / "We don't source; we grow."
- ⏳ Rotating carousel pictures to be updated (pics to be shared)

## Slide 9 — Testimonials  ⬜ / ⏳
- ⬜ "Real People. Real Routines" → "Real people. Real experiences."
- ⏳ Add legit testimonials — source from the `Reviews` resources folder

## Slide 10 — Promise / Nutrition stats  ⬜
- ⬜ Copy → "Our gold standard is simple: We only serve what we eat. No compromises, no shortcuts, just the best of our harvest."
- ⬜ "32g Avg. Protein / Bowl" → "80+ g protein"
- ⬜ "0% Artificial Additives" → "Vitamin daily requirement stats" (need the vitamin stat values)

## Slide 11 — Footer / final CTA  🟡
- ✅ Menu missing parfaits → added
- ⬜ Closing copy → "The Daily Nutrition System. Morning harvests, delivered by design for urban lives that demand more."
- ⬜ "Company" footer section → to be removed

## Footer — extras  ⬜ / ⏳
- ⬜ Add **Rate card** before FAQ (need rate-card content)
- ⬜ Remove "Manage Subscription"
- ⏳ Add embedded **Google Map** with pin on the kitchen (need kitchen address/coords)
- ⏳ **Delivery Zone** → pop-out dialog with delivery-charge data / heat map (need the data)
- ⬜ **Contact** → pop-out dialog with phone, address, email (need contact details)
- ⏳ **Instagram** icon → link to the IG page (need IG URL)
- ⬜ Remove **X / Twitter** icon
- ⬜ "Bangalore" → "Bengaluru"

---

## Blocked — waiting on assets / info from client
- Hero carousel photos (Slide 1) and Gallery carousel photos (Slide 8)
- Bakery: bread pricing tiers + Aloo/Tofu bun details & photos (Slide 5)
- Kitchen address/coords for the map; delivery-charge data; contact phone/email/address; IG URL (Footer)
- Vitamin daily-requirement stat values (Slide 10)
- Rate-card content (Footer)
- Testimonial content (Slide 9) — likely in the `Reviews` resources folder
