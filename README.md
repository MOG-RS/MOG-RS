<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MOG-RS | European Multicenter Neurological Study</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-blue: #5aa4e4;
            --dark-blue: #003d6a;
            --accent-red: #c1272d;
            --light-gray: #f8f9fa;
            --dark-gray: #666;
            --white: #ffffff;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: var(--white);
        }

        .serif {
            font-family: Georgia, 'Times New Roman', serif;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--primary-blue) 100%);
            color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .logo {
            font-size: 2.5rem;
            font-weight: bold;
            letter-spacing: 2px;
        }

        .subtitle {
            font-size: 0.9rem;
            opacity: 0.9;
            margin-top: 0.5rem;
        }

        /* Language Selector */
        .language-selector {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .lang-btn {
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }

        .lang-btn:hover, .lang-btn.active {
            background: var(--accent-red);
            border-color: var(--accent-red);
            transform: translateY(-2px);
        }

        /* Navigation */
        .nav-container {
            background: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .nav-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .main-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .nav-item {
            position: relative;
        }

        .nav-link {
            text-decoration: none;
            color: var(--dark-blue);
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .nav-link:hover, .nav-link.active {
            background: var(--primary-blue);
            color: white;
            transform: translateY(-2px);
        }

        /* Mobile Menu */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--dark-blue);
            cursor: pointer;
        }

        /* Main Content */
        .main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            min-height: 60vh;
        }

        .section {
            display: none;
            animation: fadeIn 0.5s ease-in;
        }

        .section.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .section-title {
            font-size: 2.5rem;
            color: var(--dark-blue);
            margin-bottom: 1rem;
            border-bottom: 3px solid var(--accent-red);
            padding-bottom: 0.5rem;
        }

        .subsection {
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: var(--light-gray);
            border-radius: 10px;
            border-left: 5px solid var(--primary-blue);
        }

        .subsection-title {
            font-size: 1.5rem;
            color: var(--dark-blue);
            margin-bottom: 1rem;
        }

        .subsection-content {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--dark-gray);
        }

        /* Team Grid */
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .team-member {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }

        .team-member:hover {
            transform: translateY(-5px);
        }

        .member-name {
            font-size: 1.3rem;
            color: var(--dark-blue);
            margin-bottom: 0.5rem;
        }

        .member-role {
            color: var(--accent-red);
            font-weight: 500;
            margin-bottom: 1rem;
        }

        .member-contact {
            color: var(--dark-gray);
            font-size: 0.9rem;
        }

        /* CTA Buttons */
        .cta-button {
            background: linear-gradient(135deg, var(--accent-red) 0%, #a51d23 100%);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            margin: 1rem 0;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(193, 39, 45, 0.3);
        }

        /* Footer */
        .footer {
            background: var(--dark-blue);
            color: white;
            padding: 3rem 0 1rem;
            margin-top: 4rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            text-align: center;
        }

        .footer-logos {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .footer-logo {
            background: white;
            padding: 1rem;
            border-radius: 10px;
            font-weight: bold;
            color: var(--dark-blue);
            min-width: 120px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                text-align: center;
                gap: 1rem;
            de: {
                'nav-about': 'Über das Projekt',
                'nav-biomarker': 'Biomarker-Unterstudie',
                'nav-network': 'Teilnehmendes Netzwerk',
                'nav-team': 'Das Team kennenlernen',
                'nav-partner': 'Partner werden',
                'nav-support': 'Unterstützen Sie uns',
                'nav-contact': 'Kontakt',
                'about-title': 'Über das Projekt',
                'about-summary-title': 'Zusammenfassung',
                'about-project-title': 'Entwicklung und Validierung einer prädiktiven Skala für das Rückfallrisiko bei Myelin-Oligodendrozyten-Glykoprotein-Antikörper-assoziierter Erkrankung (MOGAD-RS)',
                'about-summary-text': 'Das MOG-RS-Projekt vereint Neurologie- und Kinderneurologie-Abteilungen aus ganz Europa zur Entwicklung einer prädiktiven Skala für das Rückfallrisiko bei MOGAD. Durch retrospektive multizentrische Zusammenarbeit zielt das Projekt darauf ab, klinische Entscheidungsfindung und Behandlungsstratifizierung zu optimieren.',
                'about-objectives-title': 'Ziele',
                'about-objectives-text': 'Frühzeitige Identifikation von Patienten mit hohem Rückfallrisiko zur Leitlinie für die Einleitung einer Erhaltungsimmunsuppressionstherapie.',
                'about-background-title': 'Hintergrund',
                'about-background-text': 'MOGAD ist eine demyelinisierende Erkrankung des zentralen Nervensystems mit verschiedenen Phänotypen (Optikusneuritis, Myelitis, Enzephalomyelitis) und einem häufig rückfälligen Verlauf. Obwohl bestimmte Risikofaktoren identifiziert wurden, gibt es derzeit kein validiertes prädiktives Instrument zur Leitlinie der Langzeitbehandlung. Eine Erhaltungsimmunsuppressionsbehandlung wird normalerweise erst nach einem bereits aufgetretenen Rückfall eingeführt, was oft zu erheblichen funktionellen Beeinträchtigungen führt.',
                'biomarker-title': 'Biomarker-Unterstudie',
                'biomarker-ev-title': 'Extrazelluläre Vesikel als Biomarker bei MOGAD',
                'biomarker-ev-text': 'Diese Unterstudie erforscht die Rolle extrazellulärer Vesikel (EVs) als aufkommende Biomarker, insbesondere bei seronegativem MOGAD. Sie baut auf experimenteller Arbeit auf, die von Gabriel Torres und Laura Otero geleitet wird.',
                'biomarker-highlight': 'Innovationsfokus: Fortgeschrittene Biomarker-Forschung zur Verbesserung der diagnostischen Präzision und Behandlungspersonalisierung bei MOGAD-Patienten.',
                'network-title': 'Teilnehmendes Netzwerk',
                'network-text': 'Das MOG-RS-Netzwerk expandiert stetig mit Beteiligung von erstklassigen akademischen Neurologie-Zentren in ganz Spanien und Europa.',
                'network-expansion': 'Unser kollaboratives Netzwerk repräsentiert die Zukunft der multizentrischen neurologischen Forschung und bringt führende Expertise verschiedener europäischer Institutionen zusammen, um das MOGAD-Verständnis und die Behandlung voranzutreiben.',
                'team-title': 'Das Team kennenlernen',
                'team-pi': 'Hauptprüfer',
                'team-researcher': 'Senior-Forscher',
                'team-advisor': 'Senior-Berater',
                'team-biomarker-lead': 'Leiter Biomarker-Unterstudie',
                'team-clinical-coord': 'Klinischer Koordinator',
                'team-biomarker-spec': 'Biomarker-Spezialist',
                'team-clinical-expert': 'Klinischer Experte',
                'team-data-analyst': 'Datenanalyst',
                'team-emeritus': 'Professor Emeritus',
                'partner-title': 'Partner werden',
                'partner-invitation': 'Interessierte Abteilungen können beantragen, dem MOG-RS-Konsortium beizutreten. Genehmigte Partner erhalten Zugang zur Studiendatenbank, erhalten Protokollmaterialien und nehmen an Publikationen aus dem Projekt teil.',
                'partner-benefits-title': 'Partnerschaftsvorteile:',
                'partner-benefits': [
                    'Zugang zur REDCap-Studiendatenbank',
                    'Vollständige Protokollmaterialien und Dokumentation',
                    'Co-Autorschaft-Möglichkeiten',
                    'Vollständige Anerkennung für teilnehmende Teams',
                    'Zugang zum kollaborativen Forschungsnetzwerk'
                ],
                'partner-cta': 'Beitritt beantragen',
                'support-title': 'Unterstützen Sie uns',
                'support-text': 'Die MOG-RS-Initiative begrüßt Unterstützung von Stiftungen, wissenschaftlichen Institutionen und privaten Partnern, um ihren Umfang und ihre Wirkung zu erweitern. Unterstützung kann durch Finanzierung, Verbreitung oder Technologie bereitgestellt werden.',
                'support-ways-title': 'Unterstützungsmöglichkeiten:',
                'support-ways': [
                    'Forschungsfinanzierung und Zuschüsse',
                    'Institutionelle Partnerschaften',
                    'Technologie und Infrastruktur',
                    'Wissenschaftliche Verbreitung',
                    'Bildungsinitiativen'
                ],
                'support-cta': 'Kontakt für Unterstützung',
                'contact-title': 'Kontakt',
                'contact-team-title': 'Kernteam-Kontakte',
                'contact-inquiries': 'Für alle Projektanfragen, Partnerschaftsanträge und Kooperationsmöglichkeiten wenden Sie sich bitte direkt an den Hauptprüfer.',
                'footer-text': '© 2025 MOG-RS-Konsortium. Europäische multizentrische neurologische Studie.'
            },
            it: {
                'nav-about': 'Sul Progetto',
                'nav-biomarker': 'Sottostudio Biomarcatori',
                'nav-network': 'Rete Partecipante',
                'nav-team': 'Conosci il Team',
                'nav-partner': 'Diventa Partner',
                'nav-support': 'Sostienici',
                'nav-contact': 'Contatto',
                'about-title': 'Sul Progetto',
                'about-summary-title': 'Riassunto',
                'about-project-title': 'Sviluppo e validazione di una scala predittiva per il rischio di ricaduta nella malattia associata agli anticorpi della glicoproteina oligodendrocitaria della mielina (MOGAD-RS)',
                'about-summary-text': 'Il progetto MOG-RS unisce dipartimenti di neurologia e neurologia pediatrica da tutta Europa per sviluppare una scala predittiva per il rischio di ricaduta in MOGAD. Attraverso la collaborazione multicentrica retrospettiva, il progetto cerca di ottimizzare il processo decisionale clinico e la stratificazione del trattamento.',
                'about-objectives-title': 'Obiettivi',
                'about-objectives-text': 'Identificare precocemente i pazienti ad alto rischio di ricaduta per guidare l\'inizio della terapia immunosoppressiva di mantenimento.',
                'about-background-title': 'Background',
                'about-background-text': 'MOGAD è una malattia demielinizzante del sistema nervoso centrale con fenotipi variati (neurite ottica, mielite, encefalomielite) e un decorso frequentemente recidivante. Sebbene siano stati identificati alcuni fattori di rischio, attualmente non esiste uno strumento predittivo validato per guidare la gestione a lungo termine. Il trattamento immunosoppressivo di mantenimento viene solitamente introdotto solo dopo che si è già verificata una ricaduta, spesso risultando in un significativo deterioramento funzionale.',
                'biomarker-title': 'Sottostudio Biomarcatori',
                'biomarker-ev-title': 'Vescicole Extracellulari come Biomarcatori in MOGAD',
                'biomarker-ev-text': 'Questo sottostudio indaga il ruolo delle vescicole extracellulari (VE) come biomarcatori emergenti, particolarmente in MOGAD sieronegativo. Si basa sul lavoro sperimentale guidato da Gabriel Torres e Laura Otero.',
                'biomarker-highlight': 'Focus Innovazione: Ricerca avanzata sui biomarcatori per migliorare la precisione diagnostica e la personalizzazione del trattamento nei pazienti MOGAD.',
                'network-title': 'Rete Partecipante',
                'network-text': 'La rete MOG-RS si sta espandendo costantemente, con la partecipazione di centri di neurologia accademici di alto livello in tutta la Spagna e in Europa.',
                'network-expansion': 'La nostra rete collaborativa rappresenta il futuro della ricerca neurologica multicentrica, riunendo competenze leader da diverse istituzioni europee per far progredire la comprensione e il trattamento di MOGAD.',
                'team-title': 'Conosci il Team',
                'team-pi': 'Investigatore Principale',
                'team-researcher': 'Ricercatore Senior',
                'team-advisor': 'Consulente Senior',
                'team-biomarker-lead': 'Responsabile Sottostudio Biomarcatori',
                'team-clinical-coord': 'Coordinatore Clinico',
                'team-biomarker-spec': 'Specialista Biomarcatori',
                'team-clinical-expert': 'Esperto Clinico',
                'team-data-analyst': 'Analista Dati',
                'team-emeritus': 'Professore Emerito',
                'partner-title': 'Diventa Partner',
                'partner-invitation': 'I dipartimenti interessati possono richiedere di unirsi al consorzio MOG-RS. I partner approvati avranno accesso al database dello studio, riceveranno materiali del protocollo e parteciperanno alle pubblicazioni derivanti dal progetto.',
                'partner-benefits-title': 'Vantaggi della Partnership:',
                'partner-benefits': [
                    'Accesso al database di studio REDCap',
                    'Materiali di protocollo completi e documentazione',
                    'Opportunità di co-autore',
                    'Credito completo per i team partecipanti',
                    'Accesso alla rete di ricerca collaborativa'
                ],
                'partner-cta': 'Richiedi di Unirti',
                'support-title': 'Sostienici',
                'support-text': 'L\'iniziativa MOG-RS accoglie il sostegno di fondazioni, istituzioni scientifiche e partner privati per aiutare ad espandere la sua portata e il suo impatto. Il sostegno può essere fornito attraverso finanziamenti, diffusione o tecnologia.',
                'support-ways-title': 'Modi per Sostenere:',
                'support-ways': [
                    'Finanziamento della ricerca e sovvenzioni',
                    'Partnership istituzionali',
                    'Tecnologia e infrastrutture',
                    'Diffusione scientifica',
                    'Iniziative educative'
                ],
                'support-cta': 'Contatto per Sostegno',
                'contact-title': 'Contatto',
                'contact-team-title': 'Contatti Team Principale',
                'contact-inquiries': 'Per tutte le richieste di progetto, richieste di partnership e opportunità di collaborazione, si prega di contattare direttamente l\'investigatore principale.',
                'footer-text': '© 2025 Consorzio MOG-RS. Studio Neurologico Multicentrico Europeo.'
            }

            .logo {
                font-size: 2rem;
            }

            .nav-menu {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                padding: 1rem 2rem;
            }

            .nav-menu.active {
                display: flex;
            }

            .mobile-menu-btn {
                display: block;
            }

            .section-title {
                font-size: 2rem;
            }

            .main-content {
                padding: 1rem;
            }
        }

        .highlight {
            background-color: rgba(90, 164, 228, 0.1);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--primary-blue);
            margin: 1rem 0;
        }

        .network-map {
            background: var(--light-gray);
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            margin: 2rem 0;
        }

        .network-text {
            font-size: 1.2rem;
            color: var(--dark-blue);
            font-style: italic;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <div>
                <h1 class="logo serif">MOG-RS</h1>
                <p class="subtitle">European Multicenter Neurological Study</p>
            </div>
            <div class="language-selector">
                <button class="lang-btn active" onclick="switchLanguage('en')">English</button>
                <button class="lang-btn" onclick="switchLanguage('es')">Español</button>
                <button class="lang-btn" onclick="switchLanguage('fr')">Français</button>
                <button class="lang-btn" onclick="switchLanguage('de')">Deutsch</button>
                <button class="lang-btn" onclick="switchLanguage('it')">Italiano</button>
            </div>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="nav-container">
        <div class="nav-content">
            <div class="main-nav">
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" onclick="showSection('about')">
                            <i class="fas fa-flask"></i>
                            <span data-lang="nav-about">About the Project</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" onclick="showSection('biomarker')">
                            <i class="fas fa-dna"></i>
                            <span data-lang="nav-biomarker">Biomarker Substudy</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" onclick="showSection('network')">
                            <i class="fas fa-hospital"></i>
                            <span data-lang="nav-network">Participating Network</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" onclick="showSection('team')">
                            <i class="fas fa-users"></i>
                            <span data-lang="nav-team">Meet the Team</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" onclick="showSection('partner')">
                            <i class="fas fa-handshake"></i>
                            <span data-lang="nav-partner">Become a Partner</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" onclick="showSection('support')">
                            <i class="fas fa-heart"></i>
                            <span data-lang="nav-support">Support Us</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" onclick="showSection('contact')">
                            <i class="fas fa-envelope"></i>
                            <span data-lang="nav-contact">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        <!-- About Section -->
        <section id="about" class="section active">
            <h2 class="section-title serif" data-lang="about-title">About the Project</h2>
            
            <div class="subsection">
                <h3 class="subsection-title serif" data-lang="about-summary-title">Summary</h3>
                <div class="subsection-content">
                    <p data-lang="about-project-title"><strong>Development and validation of a predictive scale for relapse risk in myelin oligodendrocyte glycoprotein antibody-associated disease (MOGAD-RS)</strong></p>
                    <p data-lang="about-summary-text">The MOG-RS project unites neurology and pediatric neurology departments from across Europe to develop a predictive scale for relapse risk in MOGAD. Through retrospective multicenter collaboration, the project seeks to optimize clinical decision-making and treatment stratification.</p>
                </div>
            </div>

            <div class="subsection">
                <h3 class="subsection-title serif" data-lang="about-objectives-title">Objectives</h3>
                <div class="subsection-content">
                    <p data-lang="about-objectives-text">Identify patients at high risk of relapse early to guide initiation of maintenance immunosuppressive therapy.</p>
                </div>
            </div>

            <div class="subsection">
                <h3 class="subsection-title serif" data-lang="about-background-title">Background</h3>
                <div class="subsection-content">
                    <p data-lang="about-background-text">Myelin oligodendrocyte glycoprotein antibody-associated disease (MOGAD) is an autoimmune demyelinating condition of the central nervous system that predominantly affects children and young adults. Unlike multiple sclerosis, MOGAD typically presents with a relapsing-remitting course but with distinct clinical and radiological features. The management of MOGAD remains challenging, particularly regarding the decision to initiate long-term immunosuppressive therapy to prevent relapses.</p>
                </div>
            </div>
        </section>

        <!-- Biomarker Section -->
        <section id="biomarker" class="section">
            <h2 class="section-title serif" data-lang="biomarker-title">Biomarker Substudy</h2>
            
            <div class="subsection">
                <h3 class="subsection-title serif" data-lang="biomarker-ev-title">Extracellular Vesicles as Biomarkers in MOGAD</h3>
                <div class="subsection-content">
                    <p data-lang="biomarker-ev-text">This substudy investigates the role of extracellular vesicles (EVs) as emerging biomarkers, particularly in seronegative MOGAD. It builds upon experimental work led by Gabriel Torres and Laura Otero.</p>
                </div>
            </div>

            <div class="highlight">
                <p data-lang="biomarker-highlight"><strong>Innovation Focus:</strong> Advanced biomarker research to improve diagnostic precision and treatment personalization in MOGAD patients.</p>
            </div>
        </section>

        <!-- Network Section -->
        <section id="network" class="section">
            <h2 class="section-title serif" data-lang="network-title">Participating Network</h2>
            
            <div class="network-map">
                <i class="fas fa-globe-europe" style="font-size: 4rem; color: var(--primary-blue); margin-bottom: 1rem;"></i>
                <p class="network-text" data-lang="network-text">The MOG-RS network is steadily expanding, with participation from top-level academic neurology centers throughout Spain and across Europe.</p>
            </div>

            <div class="subsection">
                <div class="subsection-content">
                    <p data-lang="network-expansion">Our collaborative network represents the future of multicenter neurological research, bringing together leading expertise from diverse European institutions to advance MOGAD understanding and treatment.</p>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section id="team" class="section">
            <h2 class="section-title serif" data-lang="team-title">Meet the Team</h2>
            
            <div class="team-grid">
                <div class="team-member">
                    <h3 class="member-name">Dr. Juan Granja López</h3>
                    <p class="member-role" data-lang="team-pi">Principal Investigator</p>
                    <p class="member-contact">Hospital Universitario La Paz</p>
                    <p class="member-contact">📧 juan.granja@salud.madrid.org</p>
                    <p class="member-contact">📧 juan.granja.lopez17@gmail.com</p>
                </div>
                
                <div class="team-member">
                    <h3 class="member-name">Dr. Gabriel Torres Iglesias</h3>
                    <p class="member-role" data-lang="team-researcher">Senior Researcher</p>
                    <p class="member-contact" data-lang="team-biomarker-lead">Biomarker Substudy Lead</p>
                </div>
                
                <div class="team-member">
                    <h3 class="member-name">Dra. Inmaculada Puertas</h3>
                    <p class="member-role" data-lang="team-researcher">Senior Researcher</p>
                    <p class="member-contact" data-lang="team-clinical-coord">Clinical Coordinator</p>
                </div>
                
                <div class="team-member">
                    <h3 class="member-name">Dra. Laura Otero Ortega</h3>
                    <p class="member-role" data-lang="team-researcher">Senior Researcher</p>
                    <p class="member-contact" data-lang="team-biomarker-spec">Biomarker Specialist</p>
                </div>
                
                <div class="team-member">
                    <h3 class="member-name">Dra. Mireya Fernández-Fournier</h3>
                    <p class="member-role" data-lang="team-researcher">Senior Researcher</p>
                    <p class="member-contact" data-lang="team-clinical-expert">Clinical Expert</p>
                </div>
                
                <div class="team-member">
                    <h3 class="member-name">Dra. Laura Lacruz</h3>
                    <p class="member-role" data-lang="team-researcher">Senior Researcher</p>
                    <p class="member-contact" data-lang="team-data-analyst">Data Analyst</p>
                </div>
                
                <div class="team-member">
                    <h3 class="member-name">Dr. Exuperio Díez Tejedor</h3>
                    <p class="member-role" data-lang="team-advisor">Senior Advisor</p>
                    <p class="member-contact" data-lang="team-emeritus">Professor Emeritus</p>
                </div>
            </div>
        </section>

        <!-- Partner Section -->
        <section id="partner" class="section">
            <h2 class="section-title serif" data-lang="partner-title">Become a Partner</h2>
            
            <div class="subsection">
                <div class="subsection-content">
                    <p data-lang="partner-invitation">Interested departments may request to join the MOG-RS consortium. Approved partners will gain access to the study database, receive protocol materials, and participate in publications arising from the project.</p>
                    
                    <div class="highlight">
                        <h4 data-lang="partner-benefits-title">Partnership Benefits:</h4>
                        <ul id="partner-benefits-list">
                            <li>Access to REDCap study database</li>
                            <li>Complete protocol materials and documentation</li>
                            <li>Co-authorship opportunities</li>
                            <li>Full credit for participating teams</li>
                            <li>Collaborative research network access</li>
                        </ul>
                    </div>
                    
                    <a href="#contact" class="cta-button" onclick="showSection('contact')" data-lang="partner-cta">Request to Join</a>
                </div>
            </div>
        </section>

        <!-- Support Section -->
        <section id="support" class="section">
            <h2 class="section-title serif" data-lang="support-title">Support Us</h2>
            
            <div class="subsection">
                <div class="subsection-content">
                    <p data-lang="support-text">The MOG-RS initiative welcomes support from foundations, scientific institutions, and private partners to help expand its scope and impact. Support may be provided through funding, dissemination, or technology.</p>
                    
                    <div class="highlight">
                        <h4 data-lang="support-ways-title">Ways to Support:</h4>
                        <ul id="support-ways-list">
                            <li>Research funding and grants</li>
                            <li>Institutional partnerships</li>
                            <li>Technology and infrastructure</li>
                            <li>Scientific dissemination</li>
                            <li>Educational initiatives</li>
                        </ul>
                    </div>
                    
                    <a href="#contact" class="cta-button" onclick="showSection('contact')" data-lang="support-cta">Contact for Support</a>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="section">
            <h2 class="section-title serif" data-lang="contact-title">Contact</h2>
            
            <div class="subsection">
                <h3 class="subsection-title serif" data-lang="contact-team-title">Core Team Contacts</h3>
                <div class="subsection-content">
                    <p><strong>Dr. Juan Granja López</strong> (Principal Investigator)</p>
                    <p>📧 juan.granja@salud.madrid.org</p>
                    <p>📧 juan.granja.lopez17@gmail.com</p>
                    <br>
                    <p data-lang="contact-inquiries"><strong>For all project inquiries, partnership requests, and collaboration opportunities, please contact the principal investigator directly.</strong></p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logos">
                <div class="footer-logo">HULP</div>
                <div class="footer-logo">IdiPAZ</div>
                <div class="footer-logo">UAM</div>
            </div>
            <p data-lang="footer-text">&copy; 2025 MOG-RS Consortium. European Multicenter Neurological Study.</p>
        </div>
    </footer>

    <script>
        const translations = {
            en: {
                'nav-about': 'About the Project',
                'nav-biomarker': 'Biomarker Substudy',
                'nav-network': 'Participating Network',
                'nav-team': 'Meet the Team',
                'nav-partner': 'Become a Partner',
                'nav-support': 'Support Us',
                'nav-contact': 'Contact',
                'about-title': 'About the Project',
                'about-summary-title': 'Summary',
                'about-project-title': 'Development and validation of a predictive scale for relapse risk in myelin oligodendrocyte glycoprotein antibody-associated disease (MOGAD-RS)',
                'about-summary-text': 'The MOG-RS project unites neurology and pediatric neurology departments from across Europe to develop a predictive scale for relapse risk in MOGAD. Through retrospective multicenter collaboration, the project seeks to optimize clinical decision-making and treatment stratification.',
                'about-objectives-title': 'Objectives',
                'about-objectives-text': 'Identify patients at high risk of relapse early to guide initiation of maintenance immunosuppressive therapy.',
                'about-background-title': 'Background',
                'about-background-text': 'MOGAD is a demyelinating disease of the central nervous system with varied phenotypes (optic neuritis, myelitis, encephalomyelitis) and a frequently relapsing course. Although certain risk factors have been identified, there is currently no validated predictive tool to guide long-term management. Maintenance immunosuppressive treatment is usually only introduced after a relapse has already occurred, often resulting in significant functional impairment.',
                'biomarker-title': 'Biomarker Substudy',
                'biomarker-ev-title': 'Extracellular Vesicles as Biomarkers in MOGAD',
                'biomarker-ev-text': 'This substudy investigates the role of extracellular vesicles (EVs) as emerging biomarkers, particularly in seronegative MOGAD. It builds upon experimental work led by Gabriel Torres and Laura Otero.',
                'biomarker-highlight': 'Innovation Focus: Advanced biomarker research to improve diagnostic precision and treatment personalization in MOGAD patients.',
                'network-title': 'Participating Network',
                'network-text': 'The MOG-RS network is steadily expanding, with participation from top-level academic neurology centers throughout Spain and across Europe.',
                'network-expansion': 'Our collaborative network represents the future of multicenter neurological research, bringing together leading expertise from diverse European institutions to advance MOGAD understanding and treatment.',
                'team-title': 'Meet the Team',
                'team-pi': 'Principal Investigator',
                'team-researcher': 'Senior Researcher',
                'team-advisor': 'Senior Advisor',
                'team-biomarker-lead': 'Biomarker Substudy Lead',
                'team-clinical-coord': 'Clinical Coordinator',
                'team-biomarker-spec': 'Biomarker Specialist',
                'team-clinical-expert': 'Clinical Expert',
                'team-data-analyst': 'Data Analyst',
                'team-emeritus': 'Professor Emeritus',
                'partner-title': 'Become a Partner',
                'partner-invitation': 'Interested departments may request to join the MOG-RS consortium. Approved partners will gain access to the study database, receive protocol materials, and participate in publications arising from the project.',
                'partner-benefits-title': 'Partnership Benefits:',
                'partner-benefits': [
                    'Access to REDCap study database',
                    'Complete protocol materials and documentation',
                    'Co-authorship opportunities',
                    'Full credit for participating teams',
                    'Collaborative research network access'
                ],
                'partner-cta': 'Request to Join',
                'support-title': 'Support Us',
                'support-text': 'The MOG-RS initiative welcomes support from foundations, scientific institutions, and private partners to help expand its scope and impact. Support may be provided through funding, dissemination, or technology.',
                'support-ways-title': 'Ways to Support:',
                'support-ways': [
                    'Research funding and grants',
                    'Institutional partnerships',
                    'Technology and infrastructure',
                    'Scientific dissemination',
                    'Educational initiatives'
                ],
                'support-cta': 'Contact for Support',
                'contact-title': 'Contact',
                'contact-team-title': 'Core Team Contacts',
                'contact-inquiries': 'For all project inquiries, partnership requests, and collaboration opportunities, please contact the principal investigator directly.',
                'footer-text': '© 2025 MOG-RS Consortium. European Multicenter Neurological Study.'
            },
            es: {
                'nav-about': 'Sobre el Proyecto',
                'nav-biomarker': 'Subestudio de Biomarcadores',
                'nav-network': 'Red Participante',
                'nav-team': 'Conoce al Equipo',
                'nav-partner': 'Convertirse en Socio',
                'nav-support': 'Apóyanos',
                'nav-contact': 'Contacto',
                'about-title': 'Sobre el Proyecto',
                'about-summary-title': 'Resumen',
                'about-project-title': 'Desarrollo y validación de una escala predictiva del riesgo de recaída en la enfermedad asociada a anticuerpos contra la glicoproteína oligodendrocítica de mielina (MOGAD-RS)',
                'about-summary-text': 'El proyecto MOG-RS une departamentos de neurología y neurología pediátrica de toda Europa para desarrollar una escala predictiva del riesgo de recaída en MOGAD. A través de la colaboración multicéntrica retrospectiva, el proyecto busca optimizar la toma de decisiones clínicas y la estratificación del tratamiento.',
                'about-objectives-title': 'Objetivos',
                'about-objectives-text': 'Identificar pacientes con alto riesgo de recaída tempranamente para guiar el inicio de terapia inmunosupresora de mantenimiento.',
                'about-background-title': 'Antecedentes',
                'biomarker-title': 'Subestudio de Biomarcadores',
                'biomarker-ev-title': 'Vesículas Extracelulares como Biomarcadores en MOGAD',
                'biomarker-ev-text': 'Este subestudio investiga el papel de las vesículas extracelulares (VE) como biomarcadores emergentes, particularmente en MOGAD seronegativo. Se basa en el trabajo experimental dirigido por Gabriel Torres y Laura Otero.',
                'biomarker-highlight': 'Enfoque de Innovación: Investigación avanzada de biomarcadores para mejorar la precisión diagnóstica y personalización del tratamiento en pacientes MOGAD.',
                'network-title': 'Red Participante',
                'network-text': 'La red MOG-RS se está expandiendo constantemente, con participación de centros de neurología académicos de alto nivel en toda España y Europa.',
                'network-expansion': 'Nuestra red colaborativa representa el futuro de la investigación neurológica multicéntrica, reuniendo experiencia líder de diversas instituciones europeas para avanzar en la comprensión y tratamiento de MOGAD.',
                'team-title': 'Conoce al Equipo',
                'team-pi': 'Investigador Principal',
                'team-researcher': 'Investigador Senior',
                'team-advisor': 'Asesor Senior',
                'team-biomarker-lead': 'Líder Subestudio Biomarcadores',
                'team-clinical-coord': 'Coordinador Clínico',
                'team-biomarker-spec': 'Especialista en Biomarcadores',
                'team-clinical-expert': 'Experto Clínico',
                'team-data-analyst': 'Analista de Datos',
                'team-emeritus': 'Profesor Emérito',
                'partner-title': 'Convertirse en Socio',
                'partner-invitation': 'Los departamentos interesados pueden solicitar unirse al consorcio MOG-RS. Los socios aprobados tendrán acceso a la base de datos del estudio, recibirán materiales del protocolo y participarán en publicaciones derivadas del proyecto.',
                'partner-benefits-title': 'Beneficios de la Asociación:',
                'partner-benefits': [
                    'Acceso a la base de datos del estudio REDCap',
                    'Materiales completos del protocolo y documentación',
                    'Oportunidades de coautoría',
                    'Crédito completo para equipos participantes',
                    'Acceso a la red de investigación colaborativa'
                ],
                'partner-cta': 'Solicitar Unirse',
                'support-title': 'Apóyanos',
                'support-text': 'La iniciativa MOG-RS recibe con beneplácito el apoyo de fundaciones, instituciones científicas y socios privados para ayudar a expandir su alcance e impacto. El apoyo puede proporcionarse a través de financiación, difusión o tecnología.',
                'support-ways-title': 'Formas de Apoyar:',
                'support-ways': [
                    'Financiación de investigación y subvenciones',
                    'Asociaciones institucionales',
                    'Tecnología e infraestructura',
                    'Difusión científica',
                    'Iniciativas educativas'
                ],
                'support-cta': 'Contacto para Apoyo',
                'contact-title': 'Contacto',
                'contact-team-title': 'Contactos del Equipo Principal',
                'contact-inquiries': 'Para todas las consultas del proyecto, solicitudes de asociación y oportunidades de colaboración, por favor contacte directamente al investigador principal.',
                'footer-text': '© 2025 Consorcio MOG-RS. Estudio Neurológico Multicéntrico Europeo.'
                'biomarker-title': 'Subestudio de Biomarcadores',
                'biomarker-ev-title
