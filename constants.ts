import { FeatureItem, PricingTier, Testimonial } from './types';

export const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=436765538638&text=Hallo%2C+mein+Name+ist+...+.+Ich+habe+gro%C3%9Fes+Interesse+an+der+Erfolgsern%C3%A4hrung+und+w%C3%BCrde+mich+sehr+freuen%2C+wenn+ich+ein+pers%C3%B6nliches+Gespr%C3%A4ch+mit+dir+vereinbaren+k%C3%B6nnte.&app_absent=0";

export const FEATURES: FeatureItem[] = [
  {
    id: 'challenges',
    title: 'Herausforderungen & Gewohnheiten',
    headline: 'Tägliche Herausforderungen, die deine Struktur formen.',
    description: [
      'Veränderung ist kein Zufall. Sie ist das Ergebnis täglicher Entscheidungen.',
      'Challenges sind der stärkste Hebel für Verhaltensänderung.',
      'Erstelle, konfiguriere und tracke deine Erfolgsgewohnheiten direkt in der App.',
      'Kein Rätselraten mehr. Du weißt genau, was heute zählt.'
    ],
    imageSrc: 'Challenges Transparent.png', // Fallback provided in component
    imageAlt: 'Dashboard showing active challenges and habit tracking',
    reverseLayout: false
  },
  {
    id: 'nutrition',
    title: 'Ernährung – Klarheit statt Chaos',
    headline: 'Du weißt immer, was du essen kannst.',
    description: [
      'Empfohlene Makros, exakt auf deinen Tag berechnet.',
      'Eine automatisierte Einkaufsliste spart dir Zeit und Nerven.',
      'Über 180 Rezepte (Vegan, Vegetarisch, Mischkost).',
      'Präzise Anleitungen inklusive Kalorien, Proteine, Kohlenhydrate und Fette.'
    ],
    imageSrc: 'Mahlzeiten + Rezepte.png',
    imageAlt: 'Recipe overview and nutritional breakdown',
    reverseLayout: true
  },
  {
    id: 'timing',
    title: 'Mahlzeit-Timing & Training',
    headline: 'Timing ist ein Werkzeug. Kein Stressfaktor.',
    description: [
      'Der Timer führt dich durch den Tag. Struktur gibt Ruhe.',
      'Workouts sind nahtlos eingebunden.',
      'Zugriff auf eine umfangreiche Videobibliothek für korrekte Ausführung.',
      'Individuelle Empfehlungen basierend auf deinem Fortschritt.'
    ],
    imageSrc: 'Mahlzeit Timing + Training.png',
    imageAlt: 'Meal timing schedule and workout video integration',
    reverseLayout: false
  },
  {
    id: 'progress',
    title: 'Protokolle, Reflexion & Fortschritt',
    headline: 'Fortschritt ist sichtbar. Jeden Tag.',
    description: [
      'Tägliche Reflexion hält dich auf Kurs.',
      'Dokumentiere deine körperliche Veränderung mit Bildern.',
      'Messbare Entwicklung in übersichtlichen Dashboards.',
      'Motivation entsteht durch sichtbare Ergebnisse.'
    ],
    imageSrc: 'Protokoll groß.png',
    imageAlt: 'Progress tracking charts and photo documentation',
    reverseLayout: true
  },
  {
    id: 'knowledge',
    title: 'Notizen, Dokumente & Lexikon',
    headline: 'Alles Wissen an einem Ort.',
    description: [
      'Dein persönliches Ernährungslexikon.',
      'Speichere wichtige Notizen und Dokumente zentral.',
      'Kein Suchen mehr in Chatverläufen oder E-Mails.',
      'Wissen ist nur nützlich, wenn es griffbereit ist.'
    ],
    imageSrc: 'Notiz, Dokumente, Lexikon.png',
    imageAlt: 'Knowledge base and document storage interface',
    reverseLayout: false
  },
  {
    id: 'admin',
    title: 'Verwaltung – Coaching auf Expertenniveau',
    headline: 'Ein System, das mitdenkt.',
    description: [
      'Intelligente Push-Notifications zur richtigen Zeit.',
      'Umfassende Rezept- und Challenge-Verwaltung.',
      'Video-Integration für maximale Verständlichkeit.',
      'Automatisierte Anpassung der Ernährungstage.'
    ],
    imageSrc: 'Challenge Verwaltung (Desktop + App).png',
    imageAlt: 'Admin interface for managing content',
    reverseLayout: true
  }
];

export const PRICING: PricingTier[] = [
  {
    name: 'APP ZUGANG',
    price: '€94,00',
    period: 'alle 6 Monate',
    features: [
      'Vollständiger App Zugriff',
      'Über 180 Rezepte',
      'Makro-Tracking',
      'Trainingsbibliothek',
      'Self-Service Struktur'
    ],
    buttonText: 'Jetzt Zugang sichern',
    isPopular: false,
    link: 'https://buy.stripe.com/3cI7sL2MX8XW6lv8whgUM0j'
  },
  {
    name: '1:1 COACHING',
    price: '€1.319,29',
    period: 'alle 6 Monate',
    features: [
      'Alles im App Zugang',
      'Persönlicher Ansprechpartner',
      'Wöchentliche Check-ins',
      'Individuelle Anpassungen',
      'Direkter Chat Support'
    ],
    buttonText: 'Platz sichern',
    isPopular: true,
    link: 'https://buy.stripe.com/cNi00jafp6PO7pz9AlgUM0h'
  },
  {
    name: 'PLATIN PAKET',
    price: '€3.178,86',
    period: 'alle 6 Monate',
    features: [
      'Maximale Betreuung',
      'Tägliche Erreichbarkeit',
      'Deep-Dive Analysen',
      'Priorisierter Support',
      'Exklusive Inhalte'
    ],
    buttonText: 'Platz sichern',
    isPopular: false,
    link: 'https://buy.stripe.com/6oU9ATcnxfmkfW5aEpgUM0i'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Markus S.", rating: 5, text: "Endlich eine Struktur, die sich meinem Alltag anpasst und nicht umgekehrt. Die App nimmt mir das Denken ab, ich muss nur noch machen." },
  { id: 2, name: "Julia K.", rating: 5, text: "Die Rezepte sind genial. Schnell, einfach und passen perfekt in meine Makros. Kein Hungern, sondern bewusstes Essen." },
  { id: 3, name: "Thomas W.", rating: 5, text: "Das Challenge-Feature hat mein Mindset verändert. Kleine Haken setzen, große Wirkung spüren. Absolute Empfehlung." },
  { id: 4, name: "Sarah L.", rating: 5, text: "Ich habe schon viel probiert, aber hier stimmt das Gesamtpaket. Training, Ernährung und Kopf – alles an einem Ort." },
  { id: 5, name: "Michael B.", rating: 5, text: "Die Verwaltung im Hintergrund merkt man als User kaum, aber alles läuft flüssig. Sehr professionell aufgebaut." },
  { id: 6, name: "Lisa M.", rating: 5, text: "Das 1:1 Coaching in Kombination mit der App ist unschlagbar. Man fühlt sich nie allein gelassen." },
  { id: 7, name: "Daniel P.", rating: 5, text: "Struktur statt Chaos. Der Slogan trifft es zu 100%. Meine Leistung im Gym ist durch die Decke gegangen." }
];