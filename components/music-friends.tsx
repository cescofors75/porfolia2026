import { ArrowUpRight, Headphones, Music2, Radio, Users } from "lucide-react";
import type { Language } from "@/lib/translations";
import Image from "next/image";
import { EmbedFacade } from "@/components/embed-facade";

const copy = {
  es: { eyebrow: "Escucha compartida", title: "Music & Friends", intro: "La tecnología también se construye escuchando. Este espacio reúne música de amigos y artistas cercanos al laboratorio: trabajos para descubrir con tiempo, auriculares y curiosidad.", growing: "Una colección abierta", growingText: "Iremos añadiendo nuevas voces, sesiones y experimentos. Sin rankings ni algoritmos: solo música que merece circular.", listen: "Escuchar en", discover: "Descubrir", tap: "Toca para cargar el reproductor", noeron: "Experimento privado · 85 BPM · C major", lima: "Artista · catálogo completo", manel: "Productor y selector · perfil completo", none: "DJ y productor de Lloret de Mar, descubre su vocación a los ocho años a través de los Max Mix, los megamixes y la cultura musical que atravesaba su ciudad. Pionero del scratch y dinamizador de la electrónica en la Costa Brava desde mediados de los noventa, en 2003 encuentra en el minimal-techno una influencia decisiva. Hoy cruza música experimental, hip-hop y pulsión psico-minimalista en una investigación sonora abstracta y melancólica; como DJ puede viajar de los paisajes más cálidos a las psicofonías más insólitas.", replicante: "Electrónica mutante · perfil completo", encounters: "De las ventanas de Zoom a Sa Caleta", encountersText: "Primero disfrutamos de sus sesiones a distancia. Este año por fin coincidimos en persona en ON·OFF y la experiencia fue increíble: música, conversación y muy buen rollo. Bona gent!", francesc: "DJ y cofundador de Inkiet Lloret, la asociación que hace posible ON·OFF y abre espacio a la electrónica y la cultura alternativa local.", nuria: "DJ, productora y fundadora de BlueCube Records. Más de dos décadas llevando un techno hipnótico, elegante y lleno de alma por la escena internacional." },
  ca: { eyebrow: "Escolta compartida", title: "Music & Friends", intro: "La tecnologia també es construeix escoltant. Aquest espai reuneix música d'amics i artistes propers al laboratori: treballs per descobrir amb temps, auriculars i curiositat.", growing: "Una col·lecció oberta", growingText: "Hi anirem afegint noves veus, sessions i experiments. Sense rànquings ni algoritmes: només música que mereix circular.", listen: "Escoltar a", discover: "Descobrir", tap: "Toca per carregar el reproductor", noeron: "Experiment privat · 85 BPM · Do major", lima: "Artista · catàleg complet", manel: "Productor i selector · perfil complet", none: "DJ i productor de Lloret de Mar, descobreix la seva vocació als vuit anys a través dels Max Mix, els megamixes i la cultura musical que travessava la seva vila. Pioner de l'scratch i dinamitzador de l'electrònica a la Costa Brava des de mitjans dels noranta, el 2003 troba en el minimal-techno una influència decisiva. Avui creua música experimental, hip-hop i pulsió psico-minimalista en una recerca sonora abstracta i melancòlica; com a DJ pot viatjar dels paisatges més càlids a les psicofonies més insòlites.", replicante: "Electrònica mutant · perfil complet", encounters: "De les finestres de Zoom a Sa Caleta", encountersText: "Primer vam gaudir de les seves sessions a distància. Aquest any, per fi, vam coincidir en persona a l'ON·OFF i l'experiència va ser increïble: música, conversa i molt bon rotllo. Bona gent!", francesc: "DJ i cofundador d'Inkiet Lloret, l'associació que fa possible l'ON·OFF i obre espai a l'electrònica i la cultura alternativa local.", nuria: "DJ, productora i fundadora de BlueCube Records. Més de dues dècades portant un techno hipnòtic, elegant i ple d'ànima per l'escena internacional." },
  en: { eyebrow: "Shared listening", title: "Music & Friends", intro: "Technology is also built by listening. This space brings together music by friends and artists close to the lab: work to discover with time, headphones and curiosity.", growing: "An open collection", growingText: "More voices, sessions and experiments will be added over time. No rankings or algorithms—just music worth sharing.", listen: "Listen on", discover: "Discover", tap: "Tap to load the player", noeron: "Private experiment · 85 BPM · C major", lima: "Artist · full catalogue", manel: "Producer and selector · full profile", none: "A DJ and producer from Lloret de Mar, he discovered his calling at eight through Max Mix, megamixes and the musical culture flowing through his hometown. A scratch pioneer and driving force for electronic music on the Costa Brava since the mid-nineties, he found a defining influence in minimal techno in 2003. Today he blends experimental music, hip-hop and a psycho-minimalist pulse in abstract, melancholic sound research; as a DJ, he can travel from the warmest landscapes to the strangest psychophonies.", replicante: "Mutant electronics · full profile", encounters: "From Zoom windows to Sa Caleta", encountersText: "We first enjoyed their sessions from afar. This year we finally met in person at ON·OFF, and it was an incredible experience: music, conversation and wonderful energy. Bona gent!", francesc: "DJ and co-founder of Inkiet Lloret, the association behind ON·OFF that creates space for electronic music and local alternative culture.", nuria: "DJ, producer and founder of BlueCube Records. Over two decades bringing hypnotic, elegant and soulful techno to the international scene." },
  de: { eyebrow: "Gemeinsam hören", title: "Music & Friends", intro: "Technologie entsteht auch durch Zuhören. Dieser Raum versammelt Musik von Freunden und Künstlern aus dem Umfeld des Labors – zum Entdecken mit Zeit, Kopfhörern und Neugier.", growing: "Eine offene Sammlung", growingText: "Weitere Stimmen, Sessions und Experimente kommen dazu. Keine Rankings, keine Algorithmen – nur Musik, die gehört werden sollte.", listen: "Anhören auf", discover: "Entdecken", tap: "Zum Laden des Players tippen", noeron: "Privates Experiment · 85 BPM · C-Dur", lima: "Künstler · vollständiger Katalog", manel: "Produzent und Selector · vollständiges Profil", none: "Der DJ und Produzent aus Lloret de Mar entdeckte seine Leidenschaft mit acht Jahren durch Max Mix, Megamixes und die Musikkultur seiner Heimatstadt. Seit Mitte der Neunziger ist er Scratch-Pionier und Impulsgeber der elektronischen Szene an der Costa Brava; 2003 wurde Minimal Techno zu einem prägenden Einfluss. Heute verbindet er experimentelle Musik, Hip-Hop und einen psycho-minimalistischen Puls zu abstrakter, melancholischer Klangforschung – als DJ führt er von warmen Klanglandschaften bis zu den ungewöhnlichsten Psychophonien.", replicante: "Mutierte Elektronik · vollständiges Profil", encounters: "Von Zoom-Fenstern nach Sa Caleta", encountersText: "Zuerst erlebten wir ihre Sessions aus der Ferne. Dieses Jahr trafen wir uns endlich persönlich beim ON·OFF – eine unglaubliche Erfahrung voller Musik, Gespräche und guter Energie. Bona gent!", francesc: "DJ und Mitgründer von Inkiet Lloret, dem Verein hinter ON·OFF, der Raum für elektronische Musik und lokale Alternativkultur schafft.", nuria: "DJ, Produzentin und Gründerin von BlueCube Records. Seit über zwei Jahrzehnten bringt sie hypnotischen, eleganten und beseelten Techno auf internationale Bühnen." },
  fr: { eyebrow: "Écoute partagée", title: "Music & Friends", intro: "La technologie se construit aussi en écoutant. Cet espace rassemble la musique d'amis et d'artistes proches du laboratoire, à découvrir avec du temps, un casque et de la curiosité.", growing: "Une collection ouverte", growingText: "De nouvelles voix, sessions et expériences viendront s'ajouter. Sans classement ni algorithme : seulement de la musique qui mérite de circuler.", listen: "Écouter sur", discover: "Découvrir", tap: "Touchez pour charger le lecteur", noeron: "Expérience privée · 85 BPM · Do majeur", lima: "Artiste · catalogue complet", manel: "Producteur et selector · profil complet", none: "DJ et producteur originaire de Lloret de Mar, il découvre sa vocation à huit ans grâce aux Max Mix, aux mégamixes et à la culture musicale qui traverse sa ville. Pionnier du scratch et moteur de la scène électronique de la Costa Brava depuis le milieu des années 1990, il trouve en 2003 une influence décisive dans la minimal techno. Aujourd'hui, il croise musique expérimentale, hip-hop et pulsation psycho-minimaliste dans une recherche sonore abstraite et mélancolique ; comme DJ, il voyage des paysages les plus chaleureux aux psychophonies les plus insolites.", replicante: "Électronique mutante · profil complet", encounters: "Des fenêtres Zoom à Sa Caleta", encountersText: "Nous avons d'abord profité de leurs sessions à distance. Cette année, nous nous sommes enfin rencontrés à ON·OFF : une expérience incroyable, entre musique, conversations et très belles ondes. Bona gent !", francesc: "DJ et cofondateur d'Inkiet Lloret, l'association derrière ON·OFF qui ouvre un espace à la musique électronique et à la culture alternative locale.", nuria: "DJ, productrice et fondatrice de BlueCube Records. Plus de vingt ans de techno hypnotique, élégante et vibrante sur la scène internationale." },
} as const;

const tilloCopy = {
  es: "Pionero del turntablism, fundador de Skratch Comando y uno de los DJs más respetados de la escena hip-hop española. Técnica, humor y una vida entera haciendo magia con el vinilo.",
  ca: "Pioner del turntablism, fundador de Skratch Comando i un dels DJs més respectats de l'escena hip-hop espanyola. Tècnica, humor i tota una vida fent màgia amb el vinil.",
  en: "A turntablism pioneer, founder of Skratch Comando and one of the most respected DJs in Spain's hip-hop scene. Technique, humour and a lifetime of vinyl magic.",
  de: "Turntablism-Pionier, Gründer von Skratch Comando und einer der angesehensten DJs der spanischen Hip-Hop-Szene. Technik, Humor und ein Leben voller Vinyl-Magie.",
  fr: "Pionnier du turntablism, fondateur de Skratch Comando et l'un des DJs les plus respectés de la scène hip-hop espagnole. Technique, humour et toute une vie de magie sur vinyle.",
} as const;

const pandaCopy = {
  es: "DJ ligado a la memoria musical de Lloret de Mar. Su presencia está documentada en el Costa Brava Reggae Festival de 2008, una pista de una trayectoria conectada con la cultura urbana, el reggae y los sonidos de club.",
  ca: "DJ vinculat a la memòria musical de Lloret de Mar. La seva presència està documentada al Costa Brava Reggae Festival del 2008, una pista d'una trajectòria connectada amb la cultura urbana, el reggae i els sons de club.",
  en: "A DJ connected to Lloret de Mar's musical memory. His appearance at the 2008 Costa Brava Reggae Festival is documented, tracing a path through urban culture, reggae and club sounds.",
  de: "Ein DJ, der mit dem musikalischen Gedächtnis von Lloret de Mar verbunden ist. Sein Auftritt beim Costa Brava Reggae Festival 2008 ist dokumentiert und verweist auf eine Laufbahn zwischen urbaner Kultur, Reggae und Clubsound.",
  fr: "DJ lié à la mémoire musicale de Lloret de Mar. Sa présence au Costa Brava Reggae Festival 2008 est documentée, témoignant d'un parcours entre culture urbaine, reggae et sons de club.",
} as const;

const alexKlarCopy = {
  es: "Nombre habitual de la cabina de Zoom Club en Lloret de Mar entre 2007 y 2009, donde compartió sesiones con J.Rob, Bizzarre DJ y Javi Lara. También formó parte del circuito electrónico de Barcelona, vinculado a BeCool: un puente entre la noche de la Costa Brava y la escena house, minimal y techno de la ciudad.",
  ca: "Nom habitual de la cabina de Zoom Club a Lloret de Mar entre el 2007 i el 2009, on va compartir sessions amb J.Rob, Bizzarre DJ i Javi Lara. També va formar part del circuit electrònic de Barcelona, vinculat a BeCool: un pont entre la nit de la Costa Brava i l'escena house, minimal i techno de la ciutat.",
  en: "A familiar name in the Zoom Club booth in Lloret de Mar between 2007 and 2009, sharing sessions with J.Rob, Bizzarre DJ and Javi Lara. He was also part of Barcelona's electronic circuit through BeCool—a bridge between Costa Brava nightlife and the city's house, minimal and techno scene.",
  de: "Zwischen 2007 und 2009 war Alex Klar regelmäßig hinter den Decks des Zoom Club in Lloret de Mar zu erleben, gemeinsam mit J.Rob, Bizzarre DJ und Javi Lara. Über das BeCool gehörte er auch zum elektronischen Clubnetz Barcelonas – eine Brücke zwischen dem Nachtleben der Costa Brava und der House-, Minimal- und Techno-Szene der Stadt.",
  fr: "Présence régulière derrière les platines du Zoom Club à Lloret de Mar entre 2007 et 2009, il y partagea des sessions avec J.Rob, Bizzarre DJ et Javi Lara. Également lié au circuit électronique barcelonais via BeCool, il formait un pont entre les nuits de la Costa Brava et les scènes house, minimal et techno de la ville.",
} as const;

const maeCitricoCopy = {
  es: "Dúo inseparable de la escena electrónica gerundense de finales de los 2000 y parte de la memoria de las noches de Zoom Club. En 2009 aparecen en la Main Room compartiendo cartel con Marko Nastic, dentro del mismo circuito que conectaba Lloret y Girona. Sus sesiones se movían entre tech-house, minimal y electrónica de vanguardia.",
  ca: "Duo inseparable de l'escena electrònica gironina de finals dels 2000 i part de la memòria de les nits de Zoom Club. El 2009 apareixen a la Main Room compartint cartell amb Marko Nastic, dins el mateix circuit que connectava Lloret i Girona. Les seves sessions es movien entre tech-house, minimal i electrònica d'avantguarda.",
  en: "An inseparable duo from Girona's late-2000s electronic scene and part of the memory of Zoom Club nights. In 2009 they appeared in the Main Room alongside Marko Nastic, within the same circuit connecting Lloret and Girona. Their sets moved through tech house, minimal and forward-looking electronics.",
  de: "Ein unzertrennliches Duo der elektronischen Szene Gironas Ende der 2000er und Teil der Erinnerung an die Nächte im Zoom Club. 2009 standen sie in der Main Room gemeinsam mit Marko Nastic auf dem Programm – innerhalb jenes Clubnetzes, das Lloret und Girona verband. Ihre Sets bewegten sich zwischen Tech House, Minimal und zukunftsgerichteter Elektronik.",
  fr: "Duo indissociable de la scène électronique de Gérone à la fin des années 2000 et partie intégrante de la mémoire des nuits du Zoom Club. En 2009, ils apparaissent dans la Main Room aux côtés de Marko Nastic, au sein du même circuit reliant Lloret et Gérone. Leurs sets naviguaient entre tech-house, minimal et électronique d'avant-garde.",
} as const;

const sceneMemoryCopy = {
  es: "Escena, experimentación y memoria de club",
  ca: "Escena, experimentació i memòria de club",
  en: "Scene, experimentation and club memory",
  de: "Szene, Experiment und Clubkultur-Erinnerung",
  fr: "Scène, expérimentation et mémoire des clubs",
} as const;

const oriolCopy = {
  es: "Gran amigo y artista con un conocimiento profundo de la guitarra española, el flamenco y sus múltiples variantes. Actualmente explora también el taichí, uniendo música, respiración, movimiento y presencia.",
  ca: "Gran amic i artista amb un coneixement profund de la guitarra espanyola, el flamenc i les seves múltiples variants. Actualment explora també el taitxí, unint música, respiració, moviment i presència.",
  en: "A great friend and artist with deep knowledge of Spanish guitar, flamenco and its many variations. He is currently closely connected to tai chi, bringing music, breath, movement and presence together.",
  de: "Ein guter Freund und Künstler mit tiefem Wissen über die spanische Gitarre, den Flamenco und seine vielen Spielarten. Heute widmet er sich intensiv dem Tai-Chi und verbindet Musik, Atem, Bewegung und Präsenz.",
  fr: "Un grand ami et artiste doté d'une connaissance profonde de la guitare espagnole, du flamenco et de ses nombreuses variantes. Aujourd'hui très lié au tai-chi, il réunit musique, respiration, mouvement et présence.",
} as const;

const nicoCopy = {
  es: "Figura clave de la electrónica catalana y de la escena de clubes del norte del país. Fundador de Oráculo Records y cofundador de Ombra Festival, convirtió una trayectoria nacida en las cabinas en una plataforma internacional para la música oscura, analógica y alternativa. Tras cerrar etapas como Synths Versus Me y Almax und Forte, firma ahora como Estado de Bienestar: darkwave, EBM, breakbeat, industrial dub y jazz atravesados por una actitud punk.",
  ca: "Figura clau de l'electrònica catalana i de l'escena de clubs del nord del país. Fundador d'Oráculo Records i cofundador d'Ombra Festival, va convertir una trajectòria nascuda a les cabines en una plataforma internacional per a la música fosca, analògica i alternativa. Després de tancar etapes com Synths Versus Me i Almax und Forte, signa ara com a Estado de Bienestar: darkwave, EBM, breakbeat, industrial dub i jazz travessats per una actitud punk.",
  en: "A key figure in Catalan electronic music and the club scene in the north of the country. Founder of Oráculo Records and co-founder of Ombra Festival, he turned a path that began in DJ booths into an international platform for dark, analogue and alternative music. After closing chapters including Synths Versus Me and Almax und Forte, he now works as Estado de Bienestar: darkwave, EBM, breakbeat, industrial dub and jazz driven by a punk attitude.",
  de: "Eine Schlüsselfigur der katalanischen Elektronik- und Clubszene im Norden des Landes. Als Gründer von Oráculo Records und Mitgründer des Ombra Festival machte er aus einer Laufbahn hinter den Decks eine internationale Plattform für dunkle, analoge und alternative Musik. Nach Synths Versus Me und Almax und Forte arbeitet er heute als Estado de Bienestar: Darkwave, EBM, Breakbeat, Industrial Dub und Jazz mit Punk-Haltung.",
  fr: "Figure majeure de l'électronique catalane et de la scène club du nord du pays. Fondateur d'Oráculo Records et cofondateur d'Ombra Festival, il a transformé un parcours né derrière les platines en plateforme internationale pour les musiques sombres, analogiques et alternatives. Après Synths Versus Me et Almax und Forte, il crée aujourd'hui sous le nom Estado de Bienestar : darkwave, EBM, breakbeat, dub industriel et jazz traversés par une attitude punk.",
} as const;

const victorCopy = {
  es: "Músico, multiinstrumentista, compositor y productor artístico formado en guitarra clásica y armonía en el Conservatori del Liceu, y en música moderna y jazz en L'Aula de Barcelona. Fundador del proyecto electro-orgánico neXus, guitarrista, bajista, percusionista e intérprete de Chapman Stick, conecta música, vídeo, loops, teatro y danza. Vinculado a Clon Festival y Eyes Wide Open en Lloret, desde finales de 2004 desarrolla su trabajo entre Macao, Taiwán y Hong Kong como creador, director audiovisual y productor de espectáculos.",
  ca: "Músic, multiinstrumentista, compositor i productor artístic format en guitarra clàssica i harmonia al Conservatori del Liceu, i en música moderna i jazz a L'Aula de Barcelona. Fundador del projecte electro-orgànic neXus, guitarrista, baixista, percussionista i intèrpret de Chapman Stick, connecta música, vídeo, loops, teatre i dansa. Vinculat al Clon Festival i Eyes Wide Open de Lloret, des de finals del 2004 desenvolupa la seva feina entre Macau, Taiwan i Hong Kong com a creador, director audiovisual i productor d'espectacles.",
  en: "A musician, multi-instrumentalist, composer and artistic producer trained in classical guitar and harmony at Barcelona's Conservatori del Liceu, and in modern music and jazz at L'Aula. Founder of the electro-organic project neXus, he works across guitar, bass, percussion and Chapman Stick, connecting music, video, loops, theatre and dance. Linked to Clon Festival and Eyes Wide Open in Lloret, since late 2004 he has developed projects across Macao, Taiwan and Hong Kong as a creator, audiovisual director and performance producer.",
  de: "Musiker, Multiinstrumentalist, Komponist und künstlerischer Produzent, ausgebildet in klassischer Gitarre und Harmonielehre am Conservatori del Liceu sowie in moderner Musik und Jazz an der L'Aula in Barcelona. Als Gründer des elektro-organischen Projekts neXus verbindet der Gitarrist, Bassist, Perkussionist und Chapman-Stick-Spieler Musik, Video, Loops, Theater und Tanz. Nach seiner Arbeit mit dem Clon Festival und Eyes Wide Open in Lloret entwickelt er seit Ende 2004 Projekte zwischen Macau, Taiwan und Hongkong.",
  fr: "Musicien, multi-instrumentiste, compositeur et producteur artistique formé à la guitare classique et à l'harmonie au Conservatori del Liceu, puis aux musiques modernes et au jazz à L'Aula de Barcelone. Fondateur du projet électro-organique neXus, guitariste, bassiste, percussionniste et joueur de Chapman Stick, il relie musique, vidéo, boucles, théâtre et danse. Associé au Clon Festival et à Eyes Wide Open à Lloret, il développe depuis fin 2004 des projets entre Macao, Taïwan et Hong Kong.",
} as const;

const replicanteCopy = {
  es: "Productor de electro afincado en la escena de Barcelona, activo al menos desde 2004. Construye relatos de ciencia ficción con electrónica, ambient y breakbeat: escribe y produce en Electronic Hearts Studio y extiende cada trabajo hasta su universo visual. Su discografía incluye The Transformer, In My Mind y el conceptual Assaig H.C.334, publicado por Mars Frequency Records.",
  ca: "Productor d'electro vinculat a l'escena de Barcelona, actiu com a mínim des del 2004. Construeix relats de ciència-ficció amb electrònica, ambient i breakbeat: escriu i produeix a Electronic Hearts Studio i estén cada treball fins al seu univers visual. La seva discografia inclou The Transformer, In My Mind i el conceptual Assaig H.C.334, publicat per Mars Frequency Records.",
  en: "An electro producer rooted in Barcelona's scene and active since at least 2004. He builds science-fiction narratives from electronics, ambient and breakbeat, writing and producing at Electronic Hearts Studio and extending each release into its own visual universe. His catalogue includes The Transformer, In My Mind and the conceptual Assaig H.C.334 on Mars Frequency Records.",
  de: "Ein Electro-Produzent aus der Barcelona-Szene, aktiv seit mindestens 2004. Aus Elektronik, Ambient und Breakbeat entwickelt er Science-Fiction-Erzählungen, geschrieben und produziert im Electronic Hearts Studio und als eigenes visuelles Universum weitergedacht. Zu seiner Diskografie gehören The Transformer, In My Mind und das Konzeptwerk Assaig H.C.334 auf Mars Frequency Records.",
  fr: "Producteur electro ancré dans la scène barcelonaise et actif depuis au moins 2004. Il construit des récits de science-fiction à partir d'électronique, d'ambient et de breakbeat, écrits et produits à Electronic Hearts Studio puis prolongés dans un univers visuel. Sa discographie comprend The Transformer, In My Mind et le conceptuel Assaig H.C.334 sur Mars Frequency Records.",
} as const;

const memorialCopy = {
  es: {
    eyebrow: "In memoriam · La música permanece",
    title: "Para quienes siguen sonando en nosotros",
    intro: "Amigos, cabinas y noches que forman parte de nuestra historia. Este pequeño espacio celebra lo que compartimos y todo lo que su música todavía despierta.",
    rotten: "Amigo desde la juventud y explorador de estados profundos. Sus sesiones viajaban entre el trance y lo hipnótico, siempre buscando ese punto donde el ritmo cambia la percepción.",
    javi: "Amigo desde la juventud, DJ de oído abierto y carácter propio. Minimal techno, hip-hop y una forma muy personal de entender la pista.",
    jrob: "Figura fundamental del techno y el minimal, llegó desde Francia y dejó una huella profunda en la escena catalana y en Zoom Lloret. Desde 1986 defendió una electrónica atmosférica guiada por una palabra: respeto.",
    closing: "Por las sesiones, las conversaciones y todos los momentos que continúan dentro de la música.",
  },
  ca: {
    eyebrow: "In memoriam · La música roman",
    title: "Per als qui continuen sonant en nosaltres",
    intro: "Amics, cabines i nits que formen part de la nostra història. Aquest petit espai celebra el que vam compartir i tot el que la seva música encara desperta.",
    rotten: "Amic des de la joventut i explorador d'estats profunds. Les seves sessions viatjaven entre el trance i l'hipnòtic, sempre buscant aquell punt on el ritme transforma la percepció.",
    javi: "Amic des de la joventut, DJ d'oïda oberta i caràcter propi. Minimal techno, hip-hop i una manera molt personal d'entendre la pista.",
    jrob: "Figura fonamental del techno i el minimal, va arribar de França i va deixar una empremta profunda a l'escena catalana i a Zoom Lloret. Des del 1986 va defensar una electrònica atmosfèrica guiada per una paraula: respecte.",
    closing: "Per les sessions, les converses i tots els moments que continuen dins la música.",
  },
  en: {
    eyebrow: "In memoriam · The music remains",
    title: "For those who still resonate within us",
    intro: "Friends, booths and nights that belong to our story. This small space celebrates what we shared and everything their music continues to awaken.",
    rotten: "A friend since our youth and an explorer of deep states. His sets travelled between trance and hypnotic sound, always seeking the point where rhythm transforms perception.",
    javi: "A friend since our youth, an open-eared DJ with a voice of his own. Minimal techno, hip-hop and a deeply personal understanding of the dance floor.",
    jrob: "A key figure in techno and minimal, he came from France and left a deep mark on the Catalan scene and Zoom Lloret. From 1986 onwards, he championed atmospheric electronics guided by one word: respect.",
    closing: "For the sessions, the conversations and every moment that continues inside the music.",
  },
  de: {
    eyebrow: "In memoriam · Die Musik bleibt",
    title: "Für jene, die in uns weiterklingen",
    intro: "Freunde, DJ-Kanzeln und Nächte, die zu unserer Geschichte gehören. Dieser kleine Raum feiert, was wir geteilt haben und was ihre Musik bis heute in uns weckt.",
    rotten: "Ein Freund seit unserer Jugend und Entdecker tiefer Zustände. Seine Sets bewegten sich zwischen Trance und hypnotischem Klang – immer auf der Suche nach dem Moment, in dem Rhythmus die Wahrnehmung verändert.",
    javi: "Ein Freund seit unserer Jugend, ein offener DJ mit eigener Handschrift. Minimal Techno, Hip-Hop und ein sehr persönliches Verständnis des Dancefloors.",
    jrob: "Eine prägende Figur des Techno und Minimal. Aus Frankreich kommend, hinterließ er tiefe Spuren in der katalanischen Szene und im Zoom Lloret. Seit 1986 stand seine atmosphärische Elektronik unter einem Leitwort: Respekt.",
    closing: "Für die Sessions, die Gespräche und all die Momente, die in der Musik weiterleben.",
  },
  fr: {
    eyebrow: "In memoriam · La musique demeure",
    title: "Pour ceux qui résonnent encore en nous",
    intro: "Des amis, des cabines et des nuits qui appartiennent à notre histoire. Ce petit espace célèbre ce que nous avons partagé et tout ce que leur musique continue d'éveiller.",
    rotten: "Un ami depuis notre jeunesse et un explorateur des états profonds. Ses sets voyageaient entre trance et son hypnotique, toujours à la recherche du point où le rythme transforme la perception.",
    javi: "Un ami depuis notre jeunesse, DJ à l'écoute ouverte et à la personnalité singulière. Minimal techno, hip-hop et une façon très personnelle de comprendre le dancefloor.",
    jrob: "Figure essentielle de la techno et du minimal, venu de France, il a profondément marqué la scène catalane et le Zoom Lloret. Depuis 1986, il défendait une électronique atmosphérique guidée par un mot : respect.",
    closing: "Pour les sessions, les conversations et tous les moments qui continuent de vivre dans la musique.",
  },
} as const;

export function MusicFriends({ language }: { language: Language }) {
  const t = copy[language];
  return <article className="pt-32 pb-24 px-4 overflow-hidden"><div className="max-w-7xl mx-auto">
    <header className="mb-14 md:mb-20"><div className="flex gap-3 text-primary mb-6"><Headphones /><Users /><Music2 /></div><p className="text-xs uppercase tracking-[.22em] text-primary font-semibold mb-4">{t.eyebrow}</p><h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-7">{t.title}</h1><p className="max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed">{t.intro}</p></header>

    <div className="grid lg:grid-cols-2 gap-6 mb-8">
      <section className="rounded-3xl border border-orange-500/20 bg-card/30 overflow-hidden"><div className="relative aspect-[16/9]"><Image src="/music-friends/noeron.webp" alt="Noeron" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div><div className="p-6 md:p-8 flex items-start justify-between gap-4"><div><p className="text-xs uppercase tracking-widest text-orange-400 mb-2">SoundCloud</p><h2 className="font-display text-3xl font-bold">Noeron</h2><p className="text-sm text-muted-foreground mt-2">{t.noeron}</p></div><Radio className="text-orange-400" /></div><EmbedFacade title="Noeron - Xperiments [85 Cmaj]" height={300} label={t.tap} accentClass="border-orange-500/30 text-orange-400" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2131955805&show_artwork=true&secret_token=s-pXszaWe47eR" /><a href="https://soundcloud.com/noerondj/noeron-xperiments-85-cmaj/s-pXszaWe47eR" target="_blank" rel="noopener noreferrer" className="m-6 md:m-8 mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-400">{t.listen} SoundCloud <ArrowUpRight size={15} /></a></section>
      <section className="rounded-3xl border border-emerald-500/20 bg-card/30 overflow-hidden"><div className="relative aspect-[16/9]"><Image src="/music-friends/limabeatz.webp" alt="Limabeatz" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div><div className="p-6 md:p-8 flex items-start justify-between gap-4"><div><p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">Spotify</p><h2 className="font-display text-3xl font-bold">Limabeatz</h2><p className="text-sm text-muted-foreground mt-2">{t.lima}</p></div><Headphones className="text-emerald-400" /></div><div className="px-4 md:px-6"><EmbedFacade title="Limabeatz on Spotify" className="rounded-xl" height={300} label={t.tap} accentClass="border-emerald-500/30 text-emerald-400" src="https://open.spotify.com/embed/artist/4YfPlncfssK9STwd3lroil?utm_source=generator" /></div><a href="https://open.spotify.com/intl-es/artist/4YfPlncfssK9STwd3lroil" target="_blank" rel="noopener noreferrer" className="m-6 md:m-8 mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">{t.listen} Spotify <ArrowUpRight size={15} /></a></section>
    </div>

    <section className="rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-500/[.08] via-card/40 to-primary/[.06] overflow-hidden mb-8"><div className="p-7 md:p-12 border-b border-white/10"><p className="text-xs uppercase tracking-[.2em] text-rose-400 mb-4">ON·OFF · Music connects</p><h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">{t.encounters}</h2><p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">{t.encountersText}</p></div><div className="grid md:grid-cols-2"><div className="md:border-r border-white/10"><div className="relative aspect-[16/9] overflow-hidden"><Image src="/music-friends/francesc-ferrer-inkiet.webp" alt="Francesc Ferrer punxant en directe" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" /></div><div className="p-7 md:p-10"><p className="text-xs uppercase tracking-widest text-rose-400 mb-2">Inkiet Lloret · ON·OFF</p><h3 className="font-display text-3xl font-bold">Francesc Ferrer</h3><p className="mt-4 text-muted-foreground leading-relaxed">{t.francesc}</p><a href="https://onoffmusicfestival.com/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-rose-400">{t.discover} ON·OFF <ArrowUpRight size={15} /></a></div></div><div><div className="relative aspect-[16/9] overflow-hidden"><Image src="/music-friends/nuria-ghia.webp" alt="Núria Ghia" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div className="p-7 md:p-10"><p className="text-xs uppercase tracking-widest text-rose-400 mb-2">BlueCube Records · Techno</p><h3 className="font-display text-3xl font-bold">Núria Ghia</h3><p className="mt-4 text-muted-foreground leading-relaxed">{t.nuria}</p><EmbedFacade title="Núria Ghia on SoundCloud" className="mt-6 rounded-xl" height={166} label={t.tap} accentClass="border-rose-500/30 text-rose-400" src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fnuriaghia&color=%23fb7185&auto_play=false&show_artwork=true&show_user=true" /><div className="mt-7 flex flex-wrap gap-5"><a href="https://soundcloud.com/nuriaghia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400">{t.listen} SoundCloud <ArrowUpRight size={15} /></a><a href="https://nuriaghia.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400">{t.discover} Núria Ghia <ArrowUpRight size={15} /></a></div></div></div></div></section>

    <section className="rounded-3xl border border-sky-500/20 bg-card/30 overflow-hidden mb-8"><div className="grid lg:grid-cols-[.7fr_1.3fr] items-stretch"><div className="p-7 md:p-10 flex flex-col justify-center"><p className="text-xs uppercase tracking-widest text-sky-400 mb-2">SoundCloud</p><h2 className="font-display text-3xl md:text-4xl font-bold">Manel Alsina</h2><p className="text-muted-foreground mt-3 mb-6">{t.manel}</p><a href="https://soundcloud.com/manelalsina" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400">{t.listen} SoundCloud <ArrowUpRight size={15} /></a></div><div><div className="relative aspect-[16/8]"><Image src="/music-friends/manel-alsina.webp" alt="Manel Alsina" fill sizes="(max-width:1024px) 100vw, 65vw" className="object-cover" /></div><EmbedFacade title="Manel Alsina on SoundCloud" height={280} label={t.tap} accentClass="border-sky-500/30 text-sky-400" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F6441252&show_artwork=true" /></div></div></section>

    <section className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[.08] to-card/30 overflow-hidden mb-8"><div className="grid lg:grid-cols-2 items-stretch"><div className="relative min-h-80"><Image src="/music-friends/oriol-vilella.svg" alt="Silueta de Oriol Vilella tocando guitarra española" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div><div className="p-7 md:p-12 flex flex-col justify-center"><p className="text-xs uppercase tracking-[.2em] text-orange-400 mb-3">Guitarra española · Flamenco · Taichí</p><h2 className="font-display text-4xl md:text-5xl font-bold">Oriol Vilella</h2><p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{oriolCopy[language]}</p></div></div></section>

    <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[.09] via-card/40 to-red-500/[.05] overflow-hidden mb-8"><div className="grid lg:grid-cols-[.86fr_1.14fr] items-stretch"><div className="relative min-h-96 bg-[#0794bb]"><Image src="/music-friends/nico-cabanas.webp" alt="Estado de Bienestar, proyecto de Nico Cabañas" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" /><span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">Estado de Bienestar · Oráculo Records</span></div><div className="p-7 md:p-12 flex flex-col justify-center"><p className="text-xs uppercase tracking-[.2em] text-cyan-400 mb-3">Oráculo Records · Ombra Festival</p><h2 className="font-display text-4xl md:text-6xl font-bold">Nico Cabañas</h2><p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{nicoCopy[language]}</p><div className="mt-8 flex flex-wrap gap-5"><a href="https://www.keyimagazine.com/2025/05/24/estado-de-bienestar-oraculo-records/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">Estado de Bienestar <ArrowUpRight size={15} /></a><a href="https://oraculorecords.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">Oráculo Records <ArrowUpRight size={15} /></a><a href="https://ombrafestival.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">Ombra Festival <ArrowUpRight size={15} /></a></div></div></div></section>

    <div className="grid lg:grid-cols-2 gap-6 mb-8">
      <section className="rounded-3xl border border-fuchsia-500/20 bg-card/30 overflow-hidden flex flex-col"><div className="relative aspect-[16/9] overflow-hidden"><Image src="/music-friends/djnone.webp" alt="None actuant en directe" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-left" /></div><div className="p-7 md:p-9"><p className="text-xs uppercase tracking-widest text-fuchsia-400 mb-3">ElectroniKa · Lloret de Mar</p><h2 className="font-display text-4xl font-bold">None</h2><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full border border-fuchsia-500/25 bg-fuchsia-500/[.06] px-3 py-1 text-xs font-semibold tracking-wide text-fuchsia-300">ANDROPUNK RECORDS</span></div><p className="text-muted-foreground mt-6 leading-relaxed">{t.none}</p><EmbedFacade title="IVTGLTCH (closed cicles) by None" className="mt-6 rounded-xl border-0" height={340} label={t.tap} accentClass="border-fuchsia-500/30 text-fuchsia-400" src="https://bandcamp.com/EmbeddedPlayer/album=4205372340/size=large/bgcol=111111/linkcol=f0abfc/artwork=small/transparent=true/" /><div className="pt-7 flex flex-wrap gap-5"><a href="https://andropunkrecords.bandcamp.com/album/ivtgltch-closed-cicles" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-400">{t.listen} IVTGLTCH · Bandcamp <ArrowUpRight size={15} /></a><a href="https://modulardaybarcelona.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-400">{t.discover} Pauk + None <ArrowUpRight size={15} /></a></div></div></section>
      <section className="rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-500/[.07] to-card/30 overflow-hidden flex flex-col"><div className="relative aspect-[16/9]"><Image src="/music-friends/replicante-norman.webp" alt="Replicante Norman" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div><div className="p-7 md:p-9"><p className="text-xs uppercase tracking-widest text-violet-400 mb-2">Electro · Ambient · Breakbeat</p><h2 className="font-display text-4xl font-bold">Replicante Norman</h2><p className="text-muted-foreground mt-5 leading-relaxed">{replicanteCopy[language]}</p><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full border border-violet-500/25 px-3 py-1 text-xs text-violet-300">Electronic Hearts Studio</span><span className="rounded-full border border-violet-500/25 px-3 py-1 text-xs text-violet-300">Mars Frequency Records</span><span className="rounded-full border border-violet-500/25 px-3 py-1 text-xs text-violet-300">2004—</span></div></div><EmbedFacade title="Replicante Norman on SoundCloud" height={260} label={t.tap} accentClass="border-violet-500/30 text-violet-400" src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Freplicantenorman&color=%238b5cf6&auto_play=false&show_artwork=true&show_user=true" /><div className="m-7 md:m-9 mt-5 flex flex-wrap gap-5"><a href="https://soundcloud.com/replicantenorman" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400">{t.listen} SoundCloud <ArrowUpRight size={15} /></a><a href="https://replicantenorman.bandcamp.com/album/assaig-h-c-334" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400">Assaig H.C.334 · Bandcamp <ArrowUpRight size={15} /></a></div></section>
    </div>

    <section className="rounded-3xl border border-amber-500/20 bg-card/30 overflow-hidden mb-8"><div className="grid lg:grid-cols-[.72fr_1.28fr] items-stretch"><div className="p-7 md:p-10 flex flex-col"><p className="text-xs uppercase tracking-widest text-amber-400 mb-2">Turntablism · Skratch Comando</p><h2 className="font-display text-4xl font-bold">DJ Tillo</h2><p className="text-muted-foreground mt-5 leading-relaxed">{tilloCopy[language]}</p><a href="https://soundcloud.com/dj-tillo" target="_blank" rel="noopener noreferrer" className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">{t.listen} SoundCloud <ArrowUpRight size={15} /></a></div><div><div className="relative aspect-[16/8]"><Image src="/music-friends/dj-tillo.webp" alt="DJ Tillo" fill sizes="(max-width:1024px) 100vw, 65vw" className="object-cover" /></div><EmbedFacade title="DJ Tillo on SoundCloud" height={280} label={t.tap} accentClass="border-amber-500/30 text-amber-400" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fsoundcloud.com%2Fdj-tillo&color=%23f59e0b&auto_play=false&show_artwork=true&show_user=true" /></div></div></section>

    <section className="rounded-3xl border border-lime-500/20 bg-card/30 overflow-hidden mb-8">
      <div className="grid lg:grid-cols-[1.08fr_.92fr] items-stretch">
        <div className="relative min-h-72 lg:min-h-[430px] overflow-hidden">
          <Image src="/music-friends/djpanda.jpg" alt="DJ Panda" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/25" />
        </div>
        <div className="p-7 md:p-10 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-lime-400 mb-3">Lloret de Mar · Urban culture</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">DJ Panda</h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">{pandaCopy[language]}</p>
          <a href="https://www.cafeambllet.com/press/wp-content/uploads/web_183_final.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lime-400">Costa Brava Reggae Festival · 2008 <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>

    <section className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-card/30">
      <header className="border-b border-white/10 px-7 py-8 md:px-10">
        <p className="text-xs uppercase tracking-[.24em] text-white/45">Barcelona · Lloret · Girona · Macao</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{sceneMemoryCopy[language]}</h2>
      </header>
      <div className="grid lg:grid-cols-3">
        <article className="flex flex-col border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className="flex h-52 items-center justify-center bg-black/70 p-6">
            <div className="relative aspect-[4/3] h-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-xl">
              <Image src="/music-friends/victor-garnier.webp" alt="Víctor Garnier" fill sizes="(max-width:1024px) 70vw, 240px" className="object-cover [image-rendering:auto]" />
              <span className="absolute bottom-2 left-2 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[9px] uppercase tracking-widest text-white/70">Telenoika archive</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-7">
            <p className="text-xs uppercase tracking-widest text-emerald-400">Chapman Stick · neXus</p>
            <h3 className="mt-3 font-display text-4xl font-bold">Víctor Garnier</h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{victorCopy[language]}</p>
            <a href="https://telenoika.net/membre/victor-garnier/" target="_blank" rel="noopener noreferrer" className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">Perfil en Telenoika <ArrowUpRight size={15} /></a>
          </div>
        </article>

        <article className="relative flex flex-col overflow-hidden border-b border-white/10 bg-cyan-500/[.035] lg:border-b-0 lg:border-r">
          <div className="relative flex h-52 flex-col justify-between overflow-hidden p-7">
            <div className="absolute -right-5 -top-10 font-display text-[10rem] font-black leading-none text-white/[.035]" aria-hidden="true">AK</div>
            <p className="relative text-xs uppercase tracking-[.22em] text-cyan-400">Zoom Club · BeCool</p>
            <div className="relative"><p className="font-mono text-xs tracking-[.3em] text-white/35">2007—2009</p><h3 className="mt-2 font-display text-5xl font-bold tracking-tight">Alex Klar</h3></div>
          </div>
          <div className="flex flex-1 flex-col border-t border-white/10 p-7">
            <p className="text-xs uppercase tracking-widest text-cyan-400">House · Minimal · Techno</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{alexKlarCopy[language]}</p>
            <div className="mt-auto flex flex-col items-start gap-3 pt-7">
              <a href="https://ra.co/events/66362" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">Zoom Club · RA <ArrowUpRight size={15} /></a>
              <a href="https://www.vilaweb.cat/www/elpunt/noticia?p_idcmp=3536846" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">Alex Klar + Javi Lara · 2009 <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </article>

        <article className="flex flex-col bg-pink-500/[.025]">
          <div className="relative flex h-52 items-center justify-center overflow-hidden bg-pink-500/[.035]" aria-hidden="true">
            <div className="absolute h-40 w-40 rounded-full border border-pink-400/15" /><div className="absolute h-28 w-28 rounded-full border border-pink-400/25" /><div className="absolute h-16 w-16 rounded-full border border-pink-400/40" />
            <div className="relative font-display text-6xl font-black tracking-tighter text-white/90">M<span className="text-pink-400">&</span>C</div>
          </div>
          <div className="flex flex-1 flex-col border-t border-white/10 p-7">
            <p className="text-xs uppercase tracking-widest text-pink-400">Zoom Club orbit · Girona · 2009</p>
            <h3 className="mt-3 font-display text-4xl font-bold">Mae <span className="text-pink-400">&</span> Cítrico</h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{maeCitricoCopy[language]}</p>
            <div className="mt-auto flex flex-col items-start gap-3 pt-7">
              <a href="https://www.vilaweb.cat/www/elpunt/noticia?p_idcmp=3536846" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400">Main Room · 14.02.2009 <ArrowUpRight size={15} /></a>
              <a href="https://lloretonline.blogspot.com/2009/02/diumenge-15-de-febrer-del-2009-les.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400">Arxiu Lloret Online <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[.055] to-white/[.015] overflow-hidden mb-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <header className="px-7 py-10 md:px-12 md:py-14 border-b border-white/10">
        <p className="text-xs uppercase tracking-[.24em] text-white/55 mb-5">{memorialCopy[language].eyebrow}</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">{memorialCopy[language].title}</h2>
        <p className="mt-5 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">{memorialCopy[language].intro}</p>
      </header>
      <div className="grid md:grid-cols-3">
        {[
          { name: "Rotten", style: "Trance · Hypnotic", text: memorialCopy[language].rotten, image: "/music-friends/djrotten.jpg", video: null },
          { name: "Javi Lobato", style: "Minimal Techno · Hip-hop", text: memorialCopy[language].javi, image: null, video: "/music-friends/javilobato.mp4" },
          { name: "J.Rob", style: "Techno · Minimal · Atmospheric", text: memorialCopy[language].jrob, image: "/music-friends/jrob.jpg", video: null },
        ].map((artist, index) => (
          <article key={artist.name} className={`p-7 md:p-9 ${index < 2 ? "md:border-r border-white/10" : ""}`}>
            {artist.image && <div className="relative -mx-7 -mt-7 mb-8 aspect-[4/3] overflow-hidden md:-mx-9 md:-mt-9"><Image src={artist.image} alt={artist.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center grayscale-[20%]" /><div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" /></div>}
            {artist.video && <div className="relative -mx-7 -mt-7 mb-8 aspect-[4/3] overflow-hidden bg-black md:-mx-9 md:-mt-9"><video src={artist.video} aria-label={`Vídeo de ${artist.name}`} className="h-full w-full object-cover" autoPlay muted loop playsInline controls preload="metadata" /></div>}
            <div className="mb-8 flex items-center gap-3 text-white/35" aria-hidden="true"><span className="h-px w-8 bg-current" /><span className="text-xs tracking-[.3em]">0{index + 1}</span></div>
            <h3 className="font-display text-3xl font-bold">{artist.name}</h3>
            <p className="mt-2 text-[11px] uppercase tracking-[.18em] text-white/45">{artist.style}</p>
            <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">{artist.text}</p>
          </article>
        ))}
      </div>
      <p className="border-t border-white/10 px-7 py-7 md:px-12 text-sm italic text-white/45">{memorialCopy[language].closing}</p>
    </section>

    <div className="rounded-3xl border border-dashed border-primary/30 bg-primary/[.04] p-8 md:p-12 text-center"><Users className="mx-auto text-primary mb-5" size={30} /><h2 className="font-display text-3xl font-bold mb-4">{t.growing}</h2><p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">{t.growingText}</p></div>
  </div></article>;
}
