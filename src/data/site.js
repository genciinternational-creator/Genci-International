// Single source for contact facts, niche content, highlights, plans and FAQ.

const smsBody = encodeURIComponent('Hi GENCI, I’d like a free sample edit.');

export const contact = {
  phoneDisplay: '(510) 393-0881',
  phoneSchema: '+1-510-393-0881',
  tel: 'tel:+15103930881',
  // "?&body=" pre-fills the text on both iPhone and Android.
  sms: `sms:+15103930881?&body=${smsBody}`,
  email: 'contact@genciinternational.com',
  mailto: 'mailto:contact@genciinternational.com?subject=Free%20sample%20edit',
  areaServed: 'San Francisco Bay Area',
};

// "Who edits your videos" block. It renders only while both name and photo are set.
// photo: a square file in /public/brand/ (800x800 WebP).
export const founder = {
  name: 'Guilherme Camargo',
  role: 'Founder, GENCI',
  photo: '/brand/founder.webp',
  bio: 'Care in every detail.',
};

const clip = (file, title, duration) => ({ file, title, duration });

export const niches = [
  {
    id: 'house-cleaning',
    aliases: ['cleaning', 'house', 'maid'],
    tab: 'House cleaning',
    board: 'HOUSE CLEANING',
    line: 'Stovetops, tubs, move-out floors. We cut your clips down to the moments that make a homeowner book a cleaning.',
    clips: [
      clip('niche-house-cleaning-1', 'House cleaning: kitchens, bathrooms and floors', '0:39'),
    ],
  },
  {
    id: 'remodeling',
    aliases: ['construction', 'remodel', 'contractor'],
    tab: 'Remodeling',
    board: 'REMODELING',
    line: 'From demo day to the final walkthrough. Homeowners see your finished work before they ask for a quote.',
    clips: [
      clip('niche-construction-1', 'Bathroom remodel, start to finish', '0:34'),
    ],
  },
  {
    id: 'carpet-cleaning',
    aliases: ['carpet', 'upholstery'],
    tab: 'Carpet cleaning',
    board: 'CARPET CLEANING',
    line: 'The dirty lane next to the clean one. We lead with the shot that shows the difference.',
    clips: [
      clip('niche-carpet-cleaning-1', 'Carpet and upholstery deep cleaning', '0:42'),
      clip('niche-carpet-cleaning-2', 'Carpet cleaning before and after', '0:25'),
    ],
  },
  {
    id: 'more',
    aliases: ['junk-removal', 'junk', 'landscaping', 'roofing', 'pressure-washing', 'hvac', 'painting'],
    tab: 'More',
    board: 'MORE TRADES',
    line: 'Landscaping, roofing, pressure washing, HVAC, painting and junk removal. If the job looks different when you leave, it makes a good video.',
    clips: [
      clip('niche-more-1', 'Junk removal, before and after', '0:22'),
    ],
  },
];

// Four service highlights, each backed by a real fact.
export const highlights = [
  { mark: '4', title: 'Business days', text: 'From the clips you send to a finished video. You film. We handle the edit.' },
  { mark: '9:16', title: 'Vertical first', text: 'Built for Reels, TikTok and YouTube Shorts. Need another format? Just ask.' },
  { mark: 'Weekly', title: 'Ad check-ins', text: 'Every week we look at the numbers and replace the ad that isn’t working. Included in Lead Engine.' },
  { mark: '8', title: 'Videos a month', text: 'Ready to post or run as ads on Instagram, Facebook, TikTok, YouTube and Google. Included in Visual Growth.' },
];

export const included = [
  { label: 'Formats', text: 'The format you ask for: vertical for Reels, TikTok and Shorts, square or horizontal for Facebook and Google ads.' },
  { label: 'Captions', text: 'Captions on screen and in the post, with the language adapted to your customers.' },
  { label: 'Music', text: 'A track picked to fit the pace of the edit.' },
  { label: 'Branding', text: 'Your logo, phone number and service area on the closing frame.' },
  { label: 'Revisions', text: '3 rounds of changes on every plan video before final delivery.' },
  { label: 'Turnaround', text: '4 business days from your clips to the finished video.' },
];

// id: the plan's key in links (?plan=lead-engine) and on the form's plan field.
// service: what the plan sells, for the structured data in Base.astro.
export const plans = [
  {
    id: 'sample',
    name: 'Sample edit',
    service: 'Sample video edit',
    items: ['One 30-second video edited from your own footage.'],
    price: 'Free',
    cta: 'Get my free sample edit',
  },
  {
    id: 'visual-growth',
    name: 'Visual Growth',
    service: 'Short video editing',
    items: [
      '8 edited videos a month',
      '10 graphics',
      'Ready-to-post captions',
      'A posting calendar',
      '3 rounds of changes on each video',
    ],
    price: '$360',
    per: '/month',
    note: '$45 per video. Month to month.',
    cta: 'Choose Visual Growth',
  },
  {
    id: 'lead-engine',
    name: 'Lead Engine',
    service: 'Facebook and Instagram ad management',
    badge: 'Most complete',
    lead: 'Everything in Visual Growth, plus:',
    items: [
      'Facebook and Instagram ad setup and management',
      'Weekly testing',
      'Weak ads replaced with new versions',
      'A one-page monthly report in plain English',
    ],
    price: '$997',
    per: '/month',
    plus: '+ ad spend paid directly to Meta',
    note: 'Recommended ad spend from $900/month. One-time setup $297. Month to month.',
    cta: 'Choose Lead Engine',
  },
  {
    id: 'custom',
    name: 'Custom proposal',
    items: ['More videos, Google Ads or several service areas.'],
    cta: 'Request a proposal',
  },
];

// Strip above the prices. Switch `enabled` to true to show it, false to hide it.
export const foundingOffer = {
  enabled: false,
  label: 'Founding client offer',
  text: 'Lead Engine at $697/month for the first 90 days. Setup fee waived. Limited to 3 businesses.',
};

export const faq = [
  {
    q: 'Will this work for my kind of business?',
    a: 'If the job looks different when you leave, yes. That covers house cleaning, remodeling, carpet cleaning, landscaping, roofing, pressure washing, HVAC, painting and junk removal. Not sure about yours? Send one clip and we’ll tell you.',
  },
  {
    q: 'What footage do I need?',
    a: 'The clips already on your phone are enough. Hold the phone vertical, keep each shot steady for a few seconds, and film the before and the after from the same spot.',
  },
  {
    q: 'How fast do I get it back?',
    a: 'Your video is ready 4 business days after we get your clips. We answer new requests every day.',
  },
  {
    q: 'What if I don’t like it?',
    a: 'Tell us what to change and we’ll fix it. Each video in your plan gets 3 rounds of changes before final delivery. The free sample doesn’t include changes, but it costs nothing, so you see our work before you pay.',
  },
  {
    q: 'How much does it cost?',
    a: 'The 30-second sample edit is free. Visual Growth is $360 a month, which works out to $45 per video, plus 10 graphics. Lead Engine is $997 a month plus a one-time $297 setup. Ad spend is separate and goes straight to Meta. Need something different? Ask us for a custom proposal.',
  },
  {
    q: 'Is ad spend included?',
    a: 'No. You pay Facebook and Instagram directly with your own card, so you always see exactly what you spend. Our fee covers the videos and the management.',
  },
  {
    q: 'How much should I spend on ads?',
    a: 'We recommend starting at $900 to $1,500 a month. The minimum we work with is $600 a month.',
  },
  {
    q: 'Who owns the ad account?',
    a: 'You do. We work inside your account as a partner. If you cancel, the account, the ads and every video stay with you.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Facebook usually needs 2 to 4 weeks to learn who responds to your ads. We test from week one and tell you what we’re changing and why.',
  },
  {
    q: 'Do you guarantee leads?',
    a: 'No honest agency can guarantee a number. What we guarantee is the work: new videos every month, weekly checks and weak ads replaced with better versions.',
  },
  {
    q: 'Do I have to sign a contract?',
    a: 'No. Both plans are month to month. Cancel anytime before your next billing date.',
  },
  {
    q: 'Can the videos be in Spanish?',
    a: 'Yes. We adapt the language of the captions and on-screen text to the customers you want to reach.',
  },
];

export const businessTypes = [
  'House cleaning',
  'Construction or remodeling',
  'Carpet cleaning',
  'Landscaping',
  'Roofing',
  'Pressure washing',
  'HVAC',
  'Painting',
  'Junk removal',
  'Other',
];

// Form questions about ads. The values are what the Formspree email shows.
export const adsNowChoices = ['Yes', 'No', 'I tried before'];
export const adBudgetChoices = ['Not sure', 'Under $600', '$600 to $1,500', '$1,500+'];

// Plan field on the form: `id` matches plans[].id and ?plan= in links, `value` is what the email shows.
export const planChoices = [
  { id: 'sample', value: 'Sample edit', label: 'Free sample edit' },
  { id: 'visual-growth', value: 'Visual Growth', label: 'Visual Growth' },
  { id: 'lead-engine', value: 'Lead Engine', label: 'Lead Engine' },
  { id: 'custom', value: 'Custom', label: 'Custom proposal' },
];
