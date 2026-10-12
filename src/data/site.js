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

// Four service highlights, each backed by a real number.
export const highlights = [
  { mark: '4', title: 'Business days', text: 'From the clips you send to a finished video. You film. We handle the edit.' },
  { mark: '9:16', title: 'Vertical first', text: 'Built for Reels, TikTok and YouTube Shorts. Need another format? Just ask.' },
  { mark: '3', title: 'Rounds of changes', text: 'Dynamic cuts, captions and motion graphics in every edit, with 3 rounds of changes on each plan video.' },
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

export const plans = [
  {
    name: 'Sample edit',
    items: ['One 30-second video edited from your own footage, so you can judge our work before you pay. Changes start with a plan.'],
    price: 'Free',
  },
  {
    name: 'Visual Growth',
    items: [
      '8 edited videos a month',
      '10 graphics to promote your services, reviews and offers',
      'Ready-to-post captions',
      'A posting calendar, plus guidance on how to use each piece',
      '3 rounds of changes on each video before final delivery',
    ],
    price: '$360',
    per: '/month',
    note: '$45 per video. Month to month, cancel anytime.',
  },
  {
    name: 'Custom proposal',
    items: ['Need more videos or a different mix? We’ll put together a proposal for your business.'],
    price: 'Request a proposal',
    href: '#sample',
  },
];

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
    a: 'The 30-second sample edit is free. Visual Growth is $360 a month, which works out to $45 per video, plus 10 graphics. Need something different? Ask us for a custom proposal.',
  },
  {
    q: 'Do I have to sign a long contract?',
    a: 'No. Visual Growth is billed month to month, and you can cancel anytime before your next billing date. Every video we deliver is yours to keep.',
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
