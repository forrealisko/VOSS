// Gallery image data
export interface GalleryImage {
    id: number;
    src: string;
    title: string;
    category: 'weddings' | 'editorial' | 'private';
    alt: string;
}

const unsplashBase = 'https://images.unsplash.com/';
const params = '?auto=format&fit=crop&w=800&q=80&fm=webp';

export const galleryImages: GalleryImage[] = [
    // Weddings (15)
    { id: 1, src: `${unsplashBase}photo-1519741497674-611481863552${params}`, title: 'Tuscan Vineyard Vows', category: 'weddings', alt: 'Bride and groom at Tuscan vineyard wedding' },
    { id: 2, src: `${unsplashBase}photo-1606216794079-73f85bbd57d5${params}`, title: 'Golden Hour Embrace', category: 'weddings', alt: 'Wedding couple embracing at golden hour' },
    { id: 3, src: `${unsplashBase}photo-1583939003579-730e3918a45a${params}`, title: 'The First Dance', category: 'weddings', alt: 'Elegant first dance at luxury wedding' },
    { id: 4, src: `${unsplashBase}photo-1465495976277-4387d4b0b4c6${params}`, title: 'Villa Ceremony', category: 'weddings', alt: 'Wedding ceremony at Italian villa' },
    { id: 5, src: `${unsplashBase}photo-1511285560929-80b456fea0bc${params}`, title: 'Bridal Portrait', category: 'weddings', alt: 'Bridal portrait in natural light' },
    { id: 6, src: `${unsplashBase}photo-1591604466107-ec97de577aff${params}`, title: 'Ring Detail', category: 'weddings', alt: 'Close-up of wedding rings on olive branch' },
    { id: 7, src: `${unsplashBase}photo-1520854221256-17451cc331bf${params}`, title: 'Church of Light', category: 'weddings', alt: 'Wedding in historic Italian church' },
    { id: 8, src: `${unsplashBase}photo-1519225421980-715cb0215aed${params}`, title: 'Garden Reception', category: 'weddings', alt: 'Elegant garden wedding reception' },
    { id: 9, src: `${unsplashBase}photo-1507003211169-0a1dd7228f2d${params}`, title: 'The Groom', category: 'weddings', alt: 'Groom portrait in tailored suit' },
    { id: 10, src: `${unsplashBase}photo-1460978812857-470ed1c77af0${params}`, title: 'Floral Arch', category: 'weddings', alt: 'Wedding floral arch in Tuscany' },
    { id: 11, src: `${unsplashBase}photo-1522673607200-164d1b6ce486${params}`, title: 'Sunset Vows', category: 'weddings', alt: 'Sunset wedding ceremony in countryside' },
    { id: 12, src: `${unsplashBase}photo-1537633552985-df8429e8048b${params}`, title: 'Candlelit Dinner', category: 'weddings', alt: 'Candlelit wedding dinner table' },
    { id: 13, src: `${unsplashBase}photo-1544078751-58fee2d8a03b${params}`, title: 'Bridal Elegance', category: 'weddings', alt: 'Bride in elegant wedding dress' },
    { id: 14, src: `${unsplashBase}photo-1469371670807-013ccf25f16a${params}`, title: 'Countryside Love', category: 'weddings', alt: 'Wedding couple in Italian countryside' },
    { id: 15, src: `${unsplashBase}photo-1549417229-7686ac5595fd${params}`, title: 'Olive Grove', category: 'weddings', alt: 'Wedding portrait amid olive groves' },

    // Editorial (20)
    { id: 16, src: `${unsplashBase}photo-1509631179647-0177331693ae${params}`, title: 'Vogue Vision', category: 'editorial', alt: 'High fashion editorial portrait' },
    { id: 17, src: `${unsplashBase}photo-1469334031218-e382a71b716b${params}`, title: 'Runway Ready', category: 'editorial', alt: 'Fashion model in editorial pose' },
    { id: 18, src: `${unsplashBase}photo-1515886657613-9f3515b0c78f${params}`, title: 'Florentine Elegance', category: 'editorial', alt: 'Fashion shoot on Florence streets' },
    { id: 19, src: `${unsplashBase}photo-1496747611176-843222e1e57c${params}`, title: 'Silk & Shadow', category: 'editorial', alt: 'Model in silk dress with dramatic lighting' },
    { id: 20, src: `${unsplashBase}photo-1581044777550-4cfa60707998${params}`, title: 'Architectural Fashion', category: 'editorial', alt: 'Fashion model against architectural backdrop' },
    { id: 21, src: `${unsplashBase}photo-1534528741775-53994a69daeb${params}`, title: 'Natural Beauty', category: 'editorial', alt: 'Natural beauty portrait in soft light' },
    { id: 22, src: `${unsplashBase}photo-1492106087820-71f1a00d2b11${params}`, title: 'Urban Couture', category: 'editorial', alt: 'Fashion editorial in urban setting' },
    { id: 23, src: `${unsplashBase}photo-1504703395950-b89145a5425b${params}`, title: 'Haute Summer', category: 'editorial', alt: 'Summer fashion editorial shoot' },
    { id: 24, src: `${unsplashBase}photo-1529139574466-a303027c1d8b${params}`, title: 'Monochrome Grace', category: 'editorial', alt: 'Black and white fashion editorial' },
    { id: 25, src: `${unsplashBase}photo-1495385794356-15371f348c31${params}`, title: 'Golden Drape', category: 'editorial', alt: 'Model in golden draped fabric' },
    { id: 26, src: `${unsplashBase}photo-1517841905240-472988babdf9${params}`, title: 'Street Chic', category: 'editorial', alt: 'Street fashion editorial portrait' },
    { id: 27, src: `${unsplashBase}photo-1559563458-527698bf5295${params}`, title: 'Renaissance Revival', category: 'editorial', alt: 'Fashion inspired by Renaissance art' },
    { id: 28, src: `${unsplashBase}photo-1488426862026-3ee34a7d66df${params}`, title: 'Café Culture', category: 'editorial', alt: 'Fashion model at Italian café' },
    { id: 29, src: `${unsplashBase}photo-1524504388940-b1c1722653e1${params}`, title: 'Minimalist Luxe', category: 'editorial', alt: 'Minimalist luxury fashion portrait' },
    { id: 30, src: `${unsplashBase}photo-1544005313-94ddf0286df2${params}`, title: 'The Gaze', category: 'editorial', alt: 'Intense fashion portrait with direct gaze' },
    { id: 31, src: `${unsplashBase}photo-1502823403499-6ccfcf4fb453${params}`, title: 'Tuscan Light', category: 'editorial', alt: 'Fashion shoot in Tuscan natural light' },
    { id: 32, src: `${unsplashBase}photo-1539109136881-3be0616acf4b${params}`, title: 'Velvet Evening', category: 'editorial', alt: 'Evening fashion in velvet tones' },
    { id: 33, src: `${unsplashBase}photo-1506795660198-e95c77602c1e${params}`, title: 'Desert Rose', category: 'editorial', alt: 'Fashion editorial in desert landscape' },
    { id: 34, src: `${unsplashBase}photo-1485462537746-965f33f7f6a7${params}`, title: 'Winter Couture', category: 'editorial', alt: 'Winter fashion editorial' },
    { id: 35, src: `${unsplashBase}photo-1523359346063-d879354c0ea5${params}`, title: 'Studio Precision', category: 'editorial', alt: 'Precision studio fashion photography' },

    // Private Commissions (15)
    { id: 36, src: `${unsplashBase}photo-1531746020798-e6953c6e8e04${params}`, title: 'Family Legacy', category: 'private', alt: 'Elegant family portrait in estate' },
    { id: 37, src: `${unsplashBase}photo-1542596768-5d1d21f1cf98${params}`, title: 'Private Garden', category: 'private', alt: 'Portrait in private garden setting' },
    { id: 38, src: `${unsplashBase}photo-1552374196-c4e7ffc6e126${params}`, title: 'Gentleman\'s Portrait', category: 'private', alt: 'Sophisticated gentleman portrait' },
    { id: 39, src: `${unsplashBase}photo-1544723795-3fb6469f5b39${params}`, title: 'Heirloom Session', category: 'private', alt: 'Heirloom portrait session in villa' },
    { id: 40, src: `${unsplashBase}photo-1506863530036-1efeddceb993${params}`, title: 'Quiet Elegance', category: 'private', alt: 'Quiet elegant portrait at dusk' },
    { id: 41, src: `${unsplashBase}photo-1508341591423-4347099e1f19${params}`, title: 'Father & Son', category: 'private', alt: 'Father and son portrait in study' },
    { id: 42, src: `${unsplashBase}photo-1524504388940-b1c1722653e1${params}`, title: 'The Matriarch', category: 'private', alt: 'Distinguished portrait of family matriarch' },
    { id: 43, src: `${unsplashBase}photo-1519085360753-af0119f7cbe7${params}`, title: 'Generational', category: 'private', alt: 'Multi-generational family portrait' },
    { id: 44, src: `${unsplashBase}photo-1507003211169-0a1dd7228f2d${params}`, title: 'Distinguished', category: 'private', alt: 'Distinguished portrait in natural setting' },
    { id: 45, src: `${unsplashBase}photo-1500648767791-00dcc994a43e${params}`, title: 'Personal Narrative', category: 'private', alt: 'Personal narrative portrait series' },
    { id: 46, src: `${unsplashBase}photo-1438761681033-6461ffad8d80${params}`, title: 'Timeless Grace', category: 'private', alt: 'Timeless grace portrait in villa' },
    { id: 47, src: `${unsplashBase}photo-1475503572774-15a45e5d60b9${params}`, title: 'Estate Portrait', category: 'private', alt: 'Portrait at grand estate' },
    { id: 48, src: `${unsplashBase}photo-1557862921-37829c790f19${params}`, title: 'Heritage', category: 'private', alt: 'Heritage portrait in historic location' },
    { id: 49, src: `${unsplashBase}photo-1504257432389-52343af06ae3${params}`, title: 'Intimate Moment', category: 'private', alt: 'Intimate family moment captured' },
    { id: 50, src: `${unsplashBase}photo-1531123897727-8f129e1688ce${params}`, title: 'Modern Legacy', category: 'private', alt: 'Modern legacy portrait session' },
];

export const categoryLabels: Record<string, string> = {
    all: 'All',
    weddings: 'Weddings',
    editorial: 'Editorial',
    private: 'Private Commissions',
};
