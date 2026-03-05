export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    body: string;
}

const unsplashBase = 'https://images.unsplash.com/';
const params = '?auto=format&fit=crop&w=1200&q=80&fm=webp';

export const blogPosts: BlogPost[] = [
    {
        slug: 'behind-the-scenes-tuscan-wedding',
        title: 'Behind the Scenes: A Tuscan Wedding Shoot',
        excerpt: 'Discover the magic of capturing love amid olive groves...',
        image: `${unsplashBase}photo-1519741497674-611481863552${params}`,
        date: 'October 15, 2023',
        body: `There is something undeniably magical about a Tuscan wedding. The rolling hills, the golden afternoon light filtering through ancient olive trees, and the intoxicating scent of lavender and rosemary that fills the warm Italian air—every element conspires to create a backdrop that no studio could ever replicate.

When the Rossi family approached me about documenting their daughter's wedding at a centuries-old villa outside Siena, I knew this would be a session unlike any other. The bride, Francesca, envisioned a celebration that honored tradition while embracing modern elegance—a philosophy that resonates deeply with my own approach to photography.

I arrived at the villa two days before the ceremony to scout locations. The property, nestled among rolling vineyards, offered countless vignettes: a crumbling stone wall draped in wisteria, a terrace overlooking the Val d'Orcia, and a candlelit chapel dating back to the fourteenth century. Each corner whispered stories of centuries past, and my task was to weave those stories into the narrative of this new beginning.

On the day itself, I began shooting before dawn. The soft blue light of early morning gave way to warm gold as the sun crested the hills. I captured Francesca in quiet moments of preparation—her mother fastening heirloom pearls, her sister adjusting a veil of handmade lace. These intimate instants, fleeting yet eternal, are what I live for as a photographer.

The ceremony itself was bathed in that incomparable Tuscan light. As vows were exchanged beneath an arch of white roses and olive branches, I positioned myself to catch the interplay of shadow and sunlight across their faces—those micro-expressions of love, relief, and pure joy that define the human experience.

The reception continued long into the starlit night. Under strings of Edison bulbs, guests danced on the ancient terrace while I documented the celebrations. Every frame was a love letter to Tuscany, to tradition, and to the timelessness of human connection.`,
    },
    {
        slug: 'editorial-fashion-florence',
        title: 'Editorial Fashion in Florence',
        excerpt: 'How Renaissance architecture and haute couture create a visual symphony...',
        image: `${unsplashBase}photo-1515886657613-9f3515b0c78f${params}`,
        date: 'September 8, 2023',
        body: `Florence has always been where art and beauty converge, and for our latest editorial collaboration with a leading Italian fashion house, we sought to capture that very intersection. The concept was ambitious: juxtapose cutting-edge haute couture against the timeless grandeur of Florentine Renaissance architecture.

We spent three weeks in pre-production, carefully selecting locations that would complement rather than compete with the garments. The Boboli Gardens provided lush, sculptural backdrops. The corridors of the Uffizi, shot at dawn with special permission, offered a dramatic interplay of light and shadow. And the Ponte Vecchio, emptied during the blue hour, became our urban runway.

Working with fashion is a study in precision and spontaneity. Each garment—from flowing silk gowns to architectural leather pieces—requires a specific quality of light to sing. We used predominantly natural light, supplemented by a single reflector, to maintain the organic, cinematic quality that defines my work.

The model, Valentina, brought a quiet intensity to every frame. Rather than conventional fashion poses, I encouraged movement—walking, turning, allowing fabric to catch the wind. The results feel less like a catalogue and more like a narrative film frozen in individual moments.

Post-production was deliberately minimal. I believe the photographer's primary work happens before the shutter clicks—in the composition, the light, the moment. Color grading was subtle: warm highlights, muted shadows, and the golden Florentine palette that has inspired artists for centuries.

The series was ultimately featured in Vogue Italia, a milestone that confirmed our shared vision. More than any single image, it is the story these photographs tell together—of a city, a craft, and the eternal dialogue between heritage and innovation—that makes me proud.`,
    },
    {
        slug: 'private-commissions-legacy-portraits',
        title: 'Private Commissions for Legacy Portraits',
        excerpt: 'Creating heirloom portraits that transcend generations...',
        image: `${unsplashBase}photo-1531746020798-e6953c6e8e04${params}`,
        date: 'August 22, 2023',
        body: `In an age of fleeting digital images, there is a growing desire among discerning families to create something permanent—a portrait that will hang in a study or salon for generations, quietly telling the story of a family at a particular moment in time.

Private commissions represent perhaps the most intimate work I do. Unlike editorial or wedding photography, where the energy is communal and dynamic, portrait sessions are deeply personal conversations between photographer and subject. My role is to see not just the face but the character behind it—the quiet authority of a patriarch, the warmth of a grandmother, the unguarded joy of children at play.

My process begins weeks before the session. I visit the family's home or estate, understanding the spaces they inhabit and the objects they treasure. A leather-bound book, a piano, a view from a favorite window—these details become compositional elements that root the portrait in the family's world.

On location, I work with natural light almost exclusively. Window light, dappled shade, the soft glow of late afternoon—these are the tools of classical portraiture, and they remain the most flattering, most honest form of illumination. I rarely use more than a single lens per session; this constraint forces me to be more intentional about distance, framing, and the relationship between subject and environment.

The resulting images are printed on museum-grade archival paper, hand-mounted, and presented in custom frames selected to complement the family's interior. Each print is a collaborative creation—part photography, part craftsmanship, wholly dedicated to preserving a legacy.

For me, these commissions are a reminder of why photography matters. Not as content, not as currency, but as a vessel for memory—a way of saying to future generations, "This is who we were, and we were beautiful."`,
    },
];
