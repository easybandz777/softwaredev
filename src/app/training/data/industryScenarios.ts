export interface IndustryPain {
    label: string;
    detail: string;
}

export interface IndustryObjection {
    obj: string;
    response: string;
}

export interface IndustryScenario {
    id: string;
    icon: string;
    title: string;
    tagline: string;
    profile: string;
    corePains: IndustryPain[];
    openerScript: string;
    discoveryQuestions: string[];
    whatToSell: string;
    retainerAngle: string;
    objections: IndustryObjection[];
}

export const industryScenarios: IndustryScenario[] = [
    {
        id: 'real-estate',
        icon: '🏠',
        title: 'Real Estate Agents & Brokerages',
        tagline: "They're paying for tools that commoditize them.",
        profile: "Real estate agents are entrepreneurial, competitive, and image-conscious. They spend $500–$2,000/mo on generic CRM software (Follow Up Boss, Chime, kvCORE) that doesn't match their brand, doesn't connect to their MLS cleanly, and forces them into the same funnel template as every other agent in their zip code. They live and die by leads, and they know their online presence matters — but they don't know how broken it actually is.",
        corePains: [
            {
                label: 'Platform dependency',
                detail: "Their leads come via Zillow and Realtor.com — platforms that own the customer relationship and actively sell those same leads to their competitors. Every inbound lead they get from Zillow has already been called by 5 other agents. They have zero first-party lead gen.",
            },
            {
                label: 'Speed to lead failure',
                detail: "Studies show 78% of leads go to the agent who responds first. Their current setup — a form that sends an email — can have a 4-6 hour response window. Their competitors have instant automated text follow-up. That lag is costing them closings every week.",
            },
            {
                label: 'Generic digital presence',
                detail: "Their IDX property pages load in 4+ seconds on mobile. Their brand is a stock WordPress template with their MLS photos. High-net-worth clients judge agents by their digital presence before they ever pick up the phone. An ugly, slow site pre-filters out the best listings.",
            },
        ],
        openerScript: `"Hey [Name], I was just on your site trying to figure out how a buyer would book a showing with you. I went through the whole flow — and honestly, the process loses people at the contact form. There's no instant scheduling, no follow-up confirmation text. I did a quick speed test and your listing pages are loading at 4.2 seconds on mobile. Google penalizes anything over 3. Are you tracking how many leads hit those pages and then bounce without ever reaching out?"`,
        discoveryQuestions: [
            "What percentage of your leads right now are coming organically versus from Zillow or paid platforms?",
            "When a new lead submits a form on your site, what happens in the next 60 seconds?",
            "What does your average client's first touchpoint with your brand look like — is it your site, your social, or a referral?",
            "If you could wave a magic wand and completely fix one part of your lead pipeline, what would it be?",
        ],
        whatToSell: "Custom IDX-integrated property search site with sub-2-second load times, branded to match their positioning. Automated lead capture with instant SMS confirmation and a drip sequence. A seller's net-sheet calculator embedded on the site that generates seller leads passively via SEO. A Calendly-alternative custom booking portal that matches their brand.",
        retainerAngle: `"We keep you on a monthly engineering partner plan because real estate tech changes fast — new MLS feeds, changing IDX regulations, Google algorithm updates. Your site is a revenue-generating asset, not a brochure. You need a team that keeps it razor sharp."`,
        objections: [
            {
                obj: `"I'm already using Zillow Premier Agent, it's working fine."`,
                response: `"Zillow is incredible for volume — but you're renting leads from a platform that sells those same leads to 5 of your competitors the moment they hit. Every dollar you spend on Zillow is renting someone else's audience. We build you owned infrastructure that generates leads you don't have to share with anyone. What would a 20% shift in your lead mix toward organic mean for your margins?"`,
            },
            {
                obj: `"My current website came with my brokerage."`,
                response: `"Brokerage sites are built to represent the brokerage, not you. They're designed so you're interchangeable with any other agent on the roster. High-producing agents who close $5M+ a year build their own brand infrastructure. Your name is your business — it deserves its own platform."`,
            },
            {
                obj: `"I'm not tech-savvy, I won't be able to manage it."`,
                response: `"You don't manage it — we do. Think of us as your dedicated tech department. You focus on relationships and closings, we make sure everything behind the scenes is working and converting. You'd have a direct line to us for anything. What does your current site provider do when something breaks?"`,
            },
        ],
    },
    {
        id: 'restaurants',
        icon: '🍽️',
        title: 'Restaurants & Hospitality',
        tagline: "Third-party platforms are eating their margins alive.",
        profile: "Restaurant owners are among the hardest-working, margin-squeezed operators in any market. They run on 3-9% net margins. They've been told that being on DoorDash and Uber Eats is non-negotiable for survival — but those platforms are quietly extracting 25-35% of every order. They have zero first-party customer data, no ability to retarget, and no loyalty mechanism. Most don't realize a direct-order system is even possible at their scale.",
        corePains: [
            {
                label: 'Third-party platform extraction',
                detail: "DoorDash and Uber Eats take 25-35% per order. On a $30 order, that's $7.50-$10.50 going to the platform, not the kitchen. On $40,000/mo in delivery revenue, they're handing $10,000-$14,000/mo to tech companies. They have no ownership of those customers — no emails, no phone numbers, nothing.",
            },
            {
                label: 'Zero customer data',
                detail: "Every customer who orders through a third-party platform is invisible to the restaurant. They cannot follow up, send promotions, build loyalty, or retarget. Their most loyal customers are strangers to them. Restaurants that own their customer list operate at a fundamentally different level.",
            },
            {
                label: 'No reservation/booking intelligence',
                detail: "Most mid-size restaurants use OpenTable, which charges $1-2.50 per cover plus a monthly fee, and again they don't own the customer relationship. Others have a basic 'call to reserve' that loses leads after hours. A custom reservation system with SMS confirmations and automated waitlist management is a gap they're bleeding from.",
            },
        ],
        openerScript: `"Hey [Name], I was looking at how your online ordering is set up. Right now you're running everything through DoorDash and UberEats — which is smart for reach, but they're taking 30 cents off every dollar you make. On a $30 order, you're clearing under $22. We build direct-order systems for restaurants so that 100% of that revenue stays in your pocket, plus you own every customer's contact info for marketing. How much volume are you doing on third-party platforms each month approximately?"`,
        discoveryQuestions: [
            "What percentage of your total order volume runs through DoorDash or Uber Eats versus direct?",
            "Do you currently have any way to reach out to past customers — an email list, SMS list, anything?",
            "When a loyal customer who orders from you twice a week disappears, do you have any way to know, or win them back?",
            "If you could contact your top 500 customers today with a special offer, how much extra revenue could you generate this week?",
        ],
        whatToSell: "Branded direct-ordering web portal (works on mobile, no app download required). Loyalty points system built in. SMS/email opt-in captured at checkout. Automated campaigns: 'You haven't ordered in 2 weeks, here's 15% off.' Custom reservation system with automated SMS confirmations, waitlist management, and no per-cover fees.",
        retainerAngle: `"We stay on as your monthly tech partner because your menu changes, your hours change, you run specials. Every one of those updates is a marketing moment. We keep your ordering system converting, send your promotions, and manage the tech stack so your team runs the restaurant, not the software."`,
        objections: [
            {
                obj: `"We can't risk leaving DoorDash, our customers expect it."`,
                response: `"I'm not saying leave DoorDash — I'm saying stop letting DoorDash be the only channel. We build your own direct-ordering system alongside whatever platforms you're on. Over time, you train your regulars to order direct with a simple incentive — 'Order direct and skip the service fees.' You keep DoorDash for discovery, you own the repeat customers. Best of both worlds."`,
            },
            {
                obj: `"We tried a loyalty app before and nobody used it."`,
                response: `"Loyalty apps fail because they require an app download — which kills adoption. What we build is web-based, zero download required. The customer orders, they're automatically enrolled. No friction. The data you collect is yours forever. What was the adoption rate on the one you tried before?"`,
            },
        ],
    },
    {
        id: 'gyms',
        icon: '🏋️',
        title: 'Gyms, Studios & Fitness Coaches',
        tagline: 'Massive social reach. Almost zero online conversion.',
        profile: "Gym owners and fitness coaches are passionate, community-oriented, and often technically overwhelmed. Their social media is frequently excellent — strong Instagram presence, consistent TikTok content. But the path from follower to paying member is completely broken. They rely on Mindbody, Glofox, or Acuity Scheduling — all generic, expensive, and brand-free. They also live in a nightmare world of no-shows, trial members who ghost, and churn they can't track.",
        corePains: [
            {
                label: 'Social-to-signup conversion black hole',
                detail: `An Instagram account with 8,000 followers sends traffic to a Linktree with 6 generic links. The link to "Book a Trial" goes to a third-party scheduling page with zero branding. The trust signal completely collapses. Most visitors bounce. A highly engaged social audience is being wasted because the funnel isn't built.`,
            },
            {
                label: 'No-shows and trial ghosting',
                detail: "Free trials book, then don't show. Members sign up, then stop coming, then cancel. There's no automated SMS reminder system, no re-engagement flow for members who haven't been in 2 weeks, and no automated win-back sequence. Every ghost costs them real money.",
            },
            {
                label: 'Platform lock-in and margin drain',
                detail: "Mindbody charges $139-$599/mo plus transaction fees, has a dated UI that members complain about, and the gym owner has no ability to customize the experience. They're paying for a commodity booking system when they could own a branded member experience for the same cost.",
            },
        ],
        openerScript: `"Hey [Name], your Instagram is honestly one of the best in your space locally — I can see why you have a following. But I clicked your bio link and it goes to a Linktree that sends me to a Mindbody booking page with zero branding. The trust signal completely breaks. I'd bet your Instagram gets 200+ link clicks a week and converts less than 3% into actual trial bookings. What does your current trial-to-member conversion rate look like?"`,
        discoveryQuestions: [
            "What's your current trial-to-paid-membership conversion rate?",
            "When someone books a free trial, what's the automated follow-up sequence before they actually show up?",
            "Do you know which of your social media posts drive the most actual bookings, or is that a black box?",
            "If a member hasn't checked in for 3 weeks, does anything automatically reach out to them, or does it only show up in churn at the end of the month?",
        ],
        whatToSell: "Custom branded landing page built specifically to convert Instagram/TikTok traffic to trial bookings. Automated SMS reminder sequence for trials (24hr, 2hr before). Re-engagement SMS flow for members who haven't checked in (day 10, day 21). Class booking integration with a beautiful branded experience. Monthly conversion reporting dashboard.",
        retainerAngle: `"Your membership rolls over every 30 days — so your business resets every 30 days. We watch the conversion data, optimize the booking flow, and keep the SMS sequences dialed in month over month. This isn't a one-time build; it's an ongoing conversion system."`,
        objections: [
            {
                obj: `"Our members are used to Mindbody, I don't want to confuse them."`,
                response: `"Your members are used to whatever experience you give them. Mindbody's UI has a 2.8-star review on the App Store — your members are tolerating it, not loving it. We design a transition where new members go through your branded experience, and we migrate existing bookings over a 30-day window. The UX is so much better that members thank you for it."`,
            },
            {
                obj: `"We don't have budget for this right now, we're seasonal."`,
                response: `"That's exactly when you should build it — in a slow month when you have time. Think about what one percentage point of improvement in trial conversion means for you. If you run 80 trials a month and move from 30% to 40% close rate, that's 8 extra members. At $80/mo avg membership, you do the math. The system pays for itself before peak season hits."`,
            },
        ],
    },
    {
        id: 'auto',
        icon: '🚗',
        title: 'Auto Dealerships & Detailers',
        tagline: "They're invisible where customers are actually searching.",
        profile: `Auto detailers and smaller independent dealerships are highly review-dependent businesses. Their customers make purchase decisions based almost entirely on Google search, Google reviews, and ease of booking. Yet most detailers have 40 reviews and a "call to book" setup while competitors have booking forms in Google Business Profile, 300+ reviews, and automated text follow-up. Dealerships are addicted to third-party lead platforms (Cars.com, AutoTrader) and own none of the customer data from those transactions.`,
        corePains: [
            {
                label: 'Google review gap',
                detail: "For local service businesses, Google reviews are the single highest-leverage asset. A detailer with 300 reviews beats one with 30 reviews on virtually every search. Yet most detailers have no system to automatically request reviews after each job. They're leaving their most powerful marketing asset sitting idle after every completed appointment.",
            },
            {
                label: 'No first-party lead system',
                detail: "Dealerships spend $3,000-$8,000/mo on Cars.com and AutoTrader leads. Those platforms own the customer relationship. The dealer gets a lead notification — but the platform already sold that same lead to 3-4 competitors. The dealer has no direct pipeline, no SEO presence, and no ability to retarget or follow up outside the platform's system.",
            },
            {
                label: 'Booking friction',
                detail: "A detailer's most time-sensitive customer is someone ready to book in the next 10 minutes. If that person can't find a real-time availability calendar and book instantly, they move to the next Google result. A 'call us to schedule' loses the most motivated buyers in the market.",
            },
        ],
        openerScript: `"Hey [Name], when someone Googles 'car detailer [your city]' you're showing up number four. The three businesses above you have 200+ reviews, and two of them have real-time booking right in the Google search result. Your listing shows 43 reviews and goes to a contact form. We help detailers close that review gap fast with automated review requests sent right after each job, and we build you a booking portal that works on mobile in under 30 seconds. How many jobs do you complete in an average week?"`,
        discoveryQuestions: [
            "After a job is done, do you have any automated process to ask the customer for a Google review?",
            "When someone lands on your site after a Google search, what's the fastest they can confirm a booking — in minutes?",
            "Do you have any visibility into how many people visit your site versus actually reach out?",
            "If your schedule gets quiet in November, do you have any way to proactively reach past customers with a promotion?",
        ],
        whatToSell: "Automated post-job SMS review request system (proven to 4x review velocity). Real-time booking calendar embedded on the website with deposit collection. Customer SMS follow-up after booking and 24hr appointment reminder. First-party CRM for all past customers with re-engagement campaign capability. For dealerships: custom SEO-optimized inventory site with lead capture, eliminating platform dependency.",
        retainerAngle: `"We keep you on monthly because Google constantly changes how local rankings work, your inventory or services change, and review management is ongoing — not a one-time fix. We manage it all so you focus on the bays."`,
        objections: [
            {
                obj: `"We get most of our business through word of mouth."`,
                response: `"Word of mouth is the best lead — and it's free. But what happens when someone gets a referral, Googles you, and sees 43 reviews against your competitor's 300? All that word-of-mouth trust evaporates at the search result. We make sure the digital proof matches the reputation you've already built organically."`,
            },
            {
                obj: `"Cars.com brings us plenty of leads."`,
                response: `"Cars.com sells the same lead to your competitors the moment it comes in. You're always in a race you didn't choose to enter. We build you a separate first-party pipeline — customers who found you directly, who aren't being called by 4 other dealers right now. Over time, that owned channel becomes your lowest-cost, highest-close lead source."`,
            },
        ],
    },
    {
        id: 'ecommerce',
        icon: '📦',
        title: 'E-Commerce & Product Brands',
        tagline: "They're burning ad spend on a leaky funnel.",
        profile: "DTC e-commerce brand owners are data-driven but often overconfident in their Shopify setup. They're spending $5k-$50k/mo on Meta and Google ads, watching their ROAS slowly decline, and blaming the platforms. The real problem is an unconverted storefront — slow mobile load times, a generic Shopify theme purchased for $299, a checkout flow with 6 steps, and zero post-purchase retention mechanics. They need to hear their revenue leak articulated in their own language: ROAS, CAC, AOV, LTV.",
        corePains: [
            {
                label: 'Slow storefront killing paid ROAS',
                detail: "Every second of page load time on mobile costs 7% in conversions (Google data). A 6-second load time on a product page means they've already lost nearly half their paid traffic before the page renders. They're spending $10k/mo on ads to fill a bucket with holes in it.",
            },
            {
                label: 'Cart abandonment with no recovery',
                detail: "Industry average cart abandonment is 70%. For a brand doing $100k/mo in revenue, that means $230k in carts started and never completed. Without an automated 3-email + 2-SMS recovery sequence, they're throwing away money that was seconds from converting.",
            },
            {
                label: 'No LTV mechanics',
                detail: "They're entirely acquisition-focused. No subscription upsell, no loyalty structure, no post-purchase nurture sequence. Their best customers — the ones who buy 4x a year — are being treated exactly the same as one-time buyers. LTV is the real profit driver in DTC, and it's completely unaddressed.",
            },
        ],
        openerScript: `"Hey [Name], I ran your site through a performance test. Your product pages are loading at 5.8 seconds on a 4G mobile connection. At anything over 3 seconds, you're losing roughly 50% of your mobile traffic before they see a single product image. Given that you're running paid traffic to these pages, that's ad dollars getting eaten before they have a chance to convert. What's your current mobile-to-desktop traffic split and what does your blended ROAS look like right now?"`,
        discoveryQuestions: [
            "What's your current add-to-cart to completed purchase conversion rate, and do you know your mobile vs desktop split?",
            "When someone abandons their cart, do you have an automated SMS or email recovery sequence?",
            "What percentage of your revenue comes from repeat customers versus first-time buyers?",
            "If you could increase your average order value by 15% without any additional ad spend, what would that mean for your margin?",
        ],
        whatToSell: "Performance-optimized custom Shopify build or headless storefront (sub-2-second LCP). 3-step cart abandonment flow (email + SMS). Post-purchase upsell sequences and subscription product integration. VIP customer segmentation with exclusive offer automations. Monthly performance reporting with ROAS, CVR, and LTV tracking.",
        retainerAngle: `"E-commerce is never done. Seasonal campaigns, new product launches, A/B testing landing pages, iOS attribution changes — it's a constantly moving target. You need a technical team embedded in your growth, not a one-time agency who disappears after launch."`,
        objections: [
            {
                obj: `"Our Shopify store is already built, we just need ads."`,
                response: `"Ads are a multiplier — they amplify whatever conversion rate you already have. If your store converts at 2%, better ads get you more 2% conversions. If we optimize your store to convert at 4%, the same ad budget generates double the revenue. You can scale ads on top of a fixed store forever, or you can fix the store and let ads finally perform the way you need them to."`,
            },
            {
                obj: `"We had a developer build it and it was supposed to be fast."`,
                response: `"Fast Shopify is genuinely hard — it's not about the initial build, it's about ongoing optimization as apps get added, images change, and Shopify updates its platform. Let me pull a real-time Lighthouse score right now and I'll show you exactly where the load time is being destroyed. This is a 5-minute diagnostic."`,
            },
        ],
    },
    {
        id: 'creatives',
        icon: '📐',
        title: 'Architects, Designers & Creative Firms',
        tagline: "Their work is world-class. Their website is not.",
        profile: "High-end creative professionals — architects, interior designers, branding agencies — are among the most visually sophisticated people you'll pitch. They price themselves at a premium ($15k-$200k projects) but their website often doesn't reflect that level. The misalignment between their actual work and their digital presence is pre-filtering out their ideal clients and attracting lower-budget inquiries.",
        corePains: [
            {
                label: 'Brand perception mismatch',
                detail: "A $150k renovation project begins with a client Googling the designer. If the designer's site loads slowly, has generic typography, and doesn't immediately command the room visually — that high-budget client qualifies them out in 8 seconds. The website is the first impression, and it's setting the wrong price expectation.",
            },
            {
                label: 'No qualifying mechanism',
                detail: "Their contact form asks for a name and email. They then get flooded with inquiries from clients who have $8,000 budgets for a $50,000 project. There's no discovery process built into the intake — no budget qualifier, no project scope selector, no aesthetic preference indicator. All leads are treated the same.",
            },
            {
                label: "Portfolio that doesn't sell",
                detail: "Their portfolio is often an image grid with no narrative. High-budget clients don't just want to see beautiful images — they want to understand the transformation. Before/after storytelling, client testimonials tied to specific projects, measurable outcomes ('tripled property value,' 'booked out 6 months after launch') are completely missing.",
            },
        ],
        openerScript: `"Hey [Name], I spent about 20 minutes in your portfolio and honestly the work is incredible. But the website itself doesn't give the work the stage it deserves. The font is a system default, the project pages load the images before I can even see the full composition, and there's no clear signal to a serious client about what your engagement process looks like or what it costs to work with you. Your portfolio is pre-filtering away the clients who could afford to hire you at your actual rates."`,
        discoveryQuestions: [
            "When a high-budget client lands on your site for the first time, what do you want them to feel in the first 10 seconds?",
            "What does your current intake process look like — do leads self-qualify in any way before they reach out to you?",
            "What's the best project you've ever done — and does your website tell that project's story in a way that makes a new client want to hire you for something similar?",
            "What percentage of your inbound inquiries are genuinely budget-qualified versus needing to be educated on range?",
        ],
        whatToSell: "Ultra-premium portfolio site with cinematic full-screen project showcases, custom typography, and before/after transformation storytelling. Lead qualification form built into the intake with budget ranges. Client testimonials integrated into specific project case studies. Project inquiry flow that mirrors their exact client onboarding language.",
        retainerAngle: `"You win new projects regularly, you need new work showcased immediately. Your portfolio is a living document. We maintain it on retainer so every major project gets showcased in a way that sells the next one — you send us the photos and the story, we design and publish it."`,
        objections: [
            {
                obj: `"My portfolio speaks for itself."`,
                response: `"It does — but only to clients who already know to look. The question is: does it speak to clients who are Googling designers they haven't met yet? A portfolio that speaks for itself in person doesn't automatically translate online. The way the work is presented, sequenced, and framed is a design decision as important as the work itself."`,
            },
            {
                obj: `"I get all my work through referrals, I don't need a website."`,
                response: `"Referrals are gold — and your website is what they're checking before they decide to reach out. Even a warm referral Googles you. If your site doesn't immediately reinforce what they've heard, you create doubt. Your website is the amplifier for your referral network, not a replacement for it."`,
            },
        ],
    },
    {
        id: 'coaches',
        icon: '🏫',
        title: 'Coaches, Consultants & Course Creators',
        tagline: 'Elite expertise. Zero trust infrastructure around it.',
        profile: "Coaches and consultants are selling transformations at $3k-$30k+ price points. They've usually built real expertise and a genuine following. But they're running on a Kajabi template or a basic landing page that looks identical to a hundred other coaches. Their sales infrastructure is weak: a Calendly link, a Facebook group, and a PDF opt-in. At their price point, buyers need to deeply trust the person before they book a call. That trust infrastructure — authority positioning, social proof, case studies, a premium discovery flow — is completely absent.",
        corePains: [
            {
                label: 'Generic infrastructure at premium prices',
                detail: "There's a fatal trust gap: they're charging $10,000 for a program but their sales page looks like it was built on a Sunday afternoon. Stripe data shows that the #1 reason prospects don't buy high-ticket programs is a perception of insufficient credibility. The infrastructure doesn't match the price tag.",
            },
            {
                label: 'Sales calls with no pre-sold prospects',
                detail: "They're hopping on 2-hour strategy calls with people who haven't been pre-sold by any automated sequence. The application form is basic, the confirmation page has no video, there's no nurture sequence. They're doing all the selling live, on the call, every time — because their system isn't doing any of it for them.",
            },
            {
                label: 'No case study architecture',
                detail: "They have client wins — but they're posted as casual Instagram screenshots or buried in testimonials. There's no structured case study showing: where the client started, what the transformation looked like, what the measurable outcome was. Without that architecture, they're asking prospects to believe in a result they can't yet see.",
            },
        ],
        openerScript: `"Hey [Name], your content is exceptional — I've watched probably 12 of your LinkedIn videos and you clearly know this space cold. But when someone gets excited by your content and actually clicks to learn more about your program, the landing page doesn't match the authority of what they just watched. It's a generic Kajabi template, the only social proof is text testimonials, and the application form is three fields. At your price point, you need an experience that continues the trust you've already built in the content. How long does it currently take for someone to go from discovering your content to getting on a sales call with you?"`,
        discoveryQuestions: [
            "When someone applies for your program, how much do they already know about your framework and your client results before they get on a call with you?",
            "What's your show rate on discovery calls — and do you know what percentage of leads drop off between seeing your content and actually submitting an application?",
            "Do you have a structured case study for at least 3 of your client transformations, broken down into Before/Process/After with real numbers?",
            "If your best piece of content went viral tomorrow, is your funnel ready to convert that attention into paying clients?",
        ],
        whatToSell: "Custom authority site built around their personal brand with case study architecture, transformation video integration, and a premium application funnel. Automated pre-call nurture sequence (3-part email/video series that pre-sells the program). Application form with built-in pre-qualification and immediate booking confirmation with a welcome video. Monthly analytics showing funnel performance from content click to booked call.",
        retainerAngle: `"Your program evolves, your case studies grow, new content needs to be integrated. Your authority site has to keep up with your authority. We stay on monthly to keep the system sharp, add new case studies, and optimize the funnel as you scale."`,
        objections: [
            {
                obj: `"Kajabi handles everything for me."`,
                response: `"Kajabi is an incredible course delivery platform — we're not touching that. What we build is the front-end authority layer: the site that converts cold traffic into applicants before someone even reaches your Kajabi checkout. Kajabi handles delivery, we handle the conversion. They work together perfectly."`,
            },
            {
                obj: `"I already have a funnel that's working."`,
                response: `"A working funnel is a great foundation. Let me ask — if your current funnel has a 3% opt-in to application rate, and we moved that to 6%, what would that mean for your revenue this quarter? We're not blowing up what works. We're identifying the exact conversion points that are quietly leaking."`,
            },
        ],
    },
    {
        id: 'medical',
        icon: '🏥',
        title: 'Medical Practices & Clinics',
        tagline: "Their patient experience starts online — and it's broken.",
        profile: "Medical practice owners (dentists, chiropractors, MedSpas, private clinics) are operationally excellent inside their practice but digitally neglected outside of it. They often have a website that hasn't been updated in 3-4 years, PDF intake forms that patients download and print, and a phone-only scheduling system. New patient acquisition is a constant pressure — and their digital onboarding flow is creating unnecessary friction at every step.",
        corePains: [
            {
                label: 'Broken patient intake flow',
                detail: "New patients are required to download PDF intake forms, print them, fill them out, and bring them in — or arrive 20 minutes early. This is a friction-filled process that creates negative first impressions, overloads front-desk staff, and causes appointment delays. Online intake is table stakes in 2025 and most private practices don't have it.",
            },
            {
                label: 'Phone-only booking',
                detail: "The majority of appointments are booked during business hours by calling the front desk. Any patient who wants to book at 9pm, on a weekend, or during a lunch break — their highest-intent moments — hits a wall. Online booking with real-time availability is a standard expectation that most private practices still haven't met.",
            },
            {
                label: 'No automated follow-up',
                detail: "No-shows and last-minute cancellations cost the average medical practice $150,000+ per year in lost revenue. Most practices send one email reminder. An automated flow — email at 48 hours, SMS at 24 hours, SMS at 2 hours — reduces no-shows dramatically and fills last-minute cancellations automatically from a waitlist.",
            },
        ],
        openerScript: `"Hey [Name], I tried to book a new patient appointment on your site last night and the experience kind of stopped me cold. The 'Book Now' button goes to a PDF intake form I have to print and bring in. And there's no online scheduling — it says to call during business hours. I know that's how a lot of practices still operate, but your competitors down the street have online booking with digital intake built in. Is your front desk currently spending significant time just handling appointment scheduling?"`,
        discoveryQuestions: [
            "What percentage of your new patient appointments are scheduled by phone versus any kind of online booking?",
            "How long does your front desk spend per day handling scheduling logistics versus actual patient care support?",
            "What's your current no-show rate, and do you have a waitlist system that fills cancellations automatically?",
            "If a potential patient Googles your practice at 10pm tonight, what's the best outcome they can get from your current website?",
        ],
        whatToSell: "Online booking system with real-time provider availability. Digital intake forms completed before arrival, delivered securely to whatever practice management software they use (Dentrix, Jane, Mindbody, etc). Automated appointment reminder sequence: email (48hr) + SMS (24hr) + SMS (2hr). Waitlist system that fills last-minute cancellations automatically via SMS.",
        retainerAngle: `"Healthcare regulations change, your staff changes, your service mix changes. We stay on monthly to keep your booking system current, add new providers, adjust intake forms, and make sure your online patient experience stays ahead of competing practices in your area."`,
        objections: [
            {
                obj: `"We use [Practice Software] for scheduling."`,
                response: `"Perfect — we don't replace it, we layer on top of it. Your staff keeps using exactly what they know. We build the patient-facing experience that feeds into your existing system cleanly. What's the new patient booking experience like right now for someone who finds you on Google for the first time?"`,
            },
            {
                obj: `"Our patients are older and not tech-savvy."`,
                response: `"We actually see higher adoption from older patients when the interface is simple and clearly branded. A large-button, three-step booking flow on mobile is often easier for older patients than calling, being put on hold, and navigating phone trees. And younger family members who book for their parents — they overwhelmingly prefer online. What's your patient age breakdown?"`,
            },
        ],
    },
];
