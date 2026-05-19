const pageKey = document.body.dataset.page || "home";
const pageContentHost = document.querySelector("[data-page-content]");
const progressBar = document.getElementById("readingProgress");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

const profiles = {
  home: {
    title: "Kruti Dev to Unicode conversion for real workflows",
    audience: "coaching centers, form operators, schools, and office documentation teams",
    reality: "legacy text appears normal in one place and breaks in another",
    process: "source audit, controlled conversion, proofing, destination testing, and release log",
    result: "clean Unicode Hindi that remains readable and reusable"
  },
  about: {
    title: "why this site exists",
    audience: "teams that need practical guidance, not tool-only output",
    reality: "most conversion failures are process failures, not button failures",
    process: "publish role-based guidance, maintain update history, and keep examples tied to field incidents",
    result: "faster onboarding and fewer repeated mistakes"
  },
  guide: {
    title: "main conversion method",
    audience: "operators migrating active archives and recurring templates",
    reality: "one-time conversion without post-checks creates long-term quality debt",
    process: "sample-first conversion, batch QA, reviewer signoff, and rollback-safe release",
    result: "stable release quality with fewer escalations"
  },
  fontdownload: {
    title: "legacy font handling",
    audience: "teams opening old Kruti Dev files in current systems",
    reality: "font installation is display support, not structural conversion",
    process: "temporary legacy display, conversion, Unicode validation, and legacy sunset policy",
    result: "transition safety without permanent dependency"
  },
  mangal: {
    title: "Mangal implementation",
    audience: "organizations standardizing Unicode Hindi rendering",
    reality: "font consistency issues are often discovered late",
    process: "install baseline, validate across devices, approve stack, and monitor drift",
    result: "predictable Devanagari output"
  },
  typing: {
    title: "typing discipline",
    audience: "typists and editors handling frequent Hindi updates",
    reality: "small input mistakes multiply at proofreading stage",
    process: "two-pass typing, targeted review, and error taxonomy",
    result: "higher first-pass acceptance"
  },
  blog: {
    title: "article library",
    audience: "readers who need scenario-level guidance",
    reality: "generic tips do not solve field problems",
    process: "publish real workflow articles with checklists and context",
    result: "actionable knowledge base"
  },
  casestudies: {
    title: "case studies",
    audience: "decision-makers planning migration rollouts",
    reality: "same advice fails across different constraints",
    process: "document context, tradeoffs, and measured outcomes",
    result: "better planning confidence"
  },
  troubleshooting: {
    title: "symptom-based troubleshooting",
    audience: "support teams resolving active conversion incidents",
    reality: "trial-and-error wastes time",
    process: "symptom classification, root-cause isolation, and reproducible fix validation",
    result: "faster incident closure"
  },
  editorial: {
    title: "editorial standards and review policy",
    audience: "readers and contributors evaluating content reliability",
    reality: "without review policy, technical guidance drifts quickly",
    process: "author assignment, reviewer signoff, correction logging, and scheduled updates",
    result: "clear accountability and trust"
  },
  glossary: {
    title: "operational glossary",
    audience: "teams needing shared vocabulary",
    reality: "terminology mismatch causes process errors",
    process: "define terms with usage context and update notes",
    result: "cleaner team communication"
  },
  contact: {
    title: "support intake",
    audience: "users facing context-specific conversion issues",
    reality: "unclear tickets delay resolution",
    process: "structured issue intake, classification, and targeted response",
    result: "higher first-response quality"
  },
  privacy: {
    title: "privacy boundaries",
    audience: "users reviewing data handling expectations",
    reality: "vague policy language reduces confidence",
    process: "plain-language boundaries, use-cases, and update records",
    result: "clear and auditable policy communication"
  },
  terms: {
    title: "usage terms",
    audience: "all users applying this guidance in production",
    reality: "unclear scope creates expectation mismatch",
    process: "define use limits, responsibilities, and correction rights",
    result: "fair and transparent usage boundaries"
  },
  disclaimer: {
    title: "risk disclaimer",
    audience: "teams publishing high-impact Hindi content",
    reality: "automation output is often treated as final",
    process: "convert, proof, context-check, and release only after signoff",
    result: "reduced publication risk"
  },
  blog1: {
    title: "Kruti Dev vs Unicode",
    audience: "teams selecting long-term text standards",
    reality: "visible readability hides structural instability",
    process: "compare behavior, validate outputs, and enforce Unicode-first creation",
    result: "future-safe text operations"
  },
  blog2: {
    title: "Mangal installation workflow",
    audience: "ops teams standardizing Hindi font environments",
    reality: "install-only workflows miss validation defects",
    process: "setup, baseline sample test, approval, and change control",
    result: "stable rendering consistency"
  },
  blog3: {
    title: "Hindi typing mistakes",
    audience: "operators producing high-volume content",
    reality: "minor mistakes cause major rework",
    process: "mistake tracking, correction loops, and training updates",
    result: "better throughput quality"
  },
  blog4: {
    title: "Unicode SEO checklist",
    audience: "Hindi publishers optimizing discoverability",
    reality: "good content underperforms with weak structure",
    process: "intent mapping, metadata control, heading discipline, and audit cycle",
    result: "more stable indexing"
  },
  blog5: {
    title: "legacy migration playbook",
    audience: "archive and records teams",
    reality: "uncontrolled migration batches create defects",
    process: "inventory, priority batches, QA gates, and rollback readiness",
    result: "traceable migration quality"
  },
  blog6: {
    title: "government record migration",
    audience: "institutional record units",
    reality: "formal archives require audit-safe conversion",
    process: "classification, controlled conversion, audit logs, and reviewer approval",
    result: "compliant Unicode archives"
  },
  blog7: {
    title: "proofreading Unicode Hindi",
    audience: "editorial teams before final release",
    reality: "conversion output still needs human review",
    process: "structural review, language review, layout review, release check",
    result: "cleaner public-facing pages"
  },
  blog8: {
    title: "CPCS exam converter workflow",
    audience: "CPCS candidates and coaching content teams",
    reality: "legacy exam notes break in mobile revision apps and shared docs",
    process: "chapter-wise conversion, term-level proofing, and destination-device testing",
    result: "exam-ready Unicode study material"
  },
  blog9: {
    title: "government form submission workflow",
    audience: "applicants and support operators",
    reality: "legacy pasted text fails in preview or validation fields",
    process: "convert, sanitize, field-test, and save submitted snapshots",
    result: "clean submission-ready Hindi text"
  },
  resources: {
    title: "resource center",
    audience: "operators and teams building repeatable Hindi conversion systems",
    reality: "people need focused implementation pages, not one long mixed guide",
    process: "pick the exact sub-workflow page, apply checklist, validate output, and log issues",
    result: "faster decision making and cleaner handoffs"
  },
  reverseguide: {
    title: "Unicode to Kruti Dev reverse workflow",
    audience: "teams supporting legacy-consuming environments",
    reality: "some downstream systems still accept only legacy-formatted output",
    process: "prepare clean Unicode source, reverse map with controls, validate in destination app",
    result: "legacy-compatible output with lower defect risk"
  },
  remington: {
    title: "Remington Gail layout operations",
    audience: "typists and operators trained on Remington patterns",
    reality: "layout habits directly affect conversion quality and correction volume",
    process: "map key clusters, identify error hotspots, and standardize review patterns",
    result: "more predictable Hindi typing output"
  },
  inscript: {
    title: "InScript vs Remington selection",
    audience: "teams choosing one keyboard standard for long-term usage",
    reality: "mixed layouts in one team create inconsistent output quality",
    process: "compare learning cost, speed, compatibility, and QA impact",
    result: "standardized typing policy"
  },
  charmap: {
    title: "Kruti Dev character mapping",
    audience: "reviewers fixing wrong glyph conversion output",
    reality: "mapping issues often appear as valid-looking but incorrect words",
    process: "identify affected character groups, correct mapped sequence, revalidate context",
    result: "linguistically correct Unicode output"
  },
  cleanup: {
    title: "document cleanup before and after conversion",
    audience: "document teams handling mixed-source Hindi files",
    reality: "unclean source text multiplies defects after conversion",
    process: "sanitize source, normalize structure, convert, and run post-cleanup checks",
    result: "lower rejection and rework rate"
  },
  wordsetup: {
    title: "MS Word Hindi typing setup",
    audience: "office teams creating Hindi reports and official drafts",
    reality: "default Word settings often cause inconsistent Hindi rendering and spacing",
    process: "configure typing environment, set fonts, validate sample paragraphs, and lock template",
    result: "stable production typing setup"
  },
  cpcsnotes: {
    title: "CPCS Hindi notes standardization",
    audience: "coaching centers and exam preparation teams",
    reality: "mixed-source study notes lose clarity after copy, PDF export, or mobile sharing",
    process: "chapter conversion, terminology lock, template formatting, and exam-device validation",
    result: "consistent and revision-friendly Unicode study packs"
  },
  govdraft: {
    title: "government office Hindi drafting workflow",
    audience: "clerical operators and e-office drafting teams",
    reality: "legacy draft text often fails in modern portal fields and circulation formats",
    process: "draft normalization, controlled conversion, approval-ready formatting, and trace logging",
    result: "official drafts with fewer return cycles"
  },
  legaldocs: {
    title: "legal Hindi document conversion controls",
    audience: "legal clerks, advocates, and compliance documentation teams",
    reality: "small character-level defects in legal text can alter meaning and risk interpretation errors",
    process: "clause-level conversion, named-entity verification, citation check, and release signoff",
    result: "legible and defensible Unicode legal documents"
  },
  schoolrecords: {
    title: "school record Unicode migration",
    audience: "school admins managing admission registers, mark sheets, and certificates",
    reality: "legacy student records break during software upgrades and report export workflows",
    process: "batch migration by record type, identity-field verification, and print-preview QA",
    result: "stable student records across portals and print outputs"
  },
  ocrcleanup: {
    title: "PDF OCR Hindi cleanup for conversion",
    audience: "teams digitizing printed Hindi material for searchable use",
    reality: "OCR output introduces structural noise that amplifies conversion errors",
    process: "OCR text cleanup, paragraph normalization, conversion pass, and semantic proofreading",
    result: "clean Unicode text suitable for publishing and indexing"
  },
  bilingualforms: {
    title: "bilingual Hindi-English form drafting",
    audience: "service centers handling dual-language forms and notices",
    reality: "mixed Hindi-English entries create spacing and encoding drift across systems",
    process: "field policy definition, bilingual text block controls, preview testing, and validation logs",
    result: "clear bilingual output with lower rejection risk"
  }
};

const focusedSections = {
  home: [
    {
      title: "Where users actually struggle",
      paragraphs: [
        "Most visitors are not browsing casually. They are fixing active issues in forms, exam notes, district notices, school records, or office templates where legacy Hindi text no longer behaves reliably.",
        "A converter alone is useful, but teams still fail if they skip post-conversion checks. This site focuses on that missing middle layer: process discipline between conversion and publication.",
        "The practical objective is simple: make Unicode output stable enough for real usage, not just temporary visual success."
      ]
    },
    {
      title: "CPCS exam use-case",
      paragraphs: [
        "CPCS learners and coaching operators often hold legacy-format notes copied from old sources. These notes become unreadable or inconsistent in mobile apps, browsers, or PDF exports used for revision.",
        "Recommended model: preserve source, convert by chapter, run terminology proofing, then test in the exact reading environment used by candidates. Do not approve content based only on desktop preview.",
        "One reviewed Unicode master for each chapter prevents drift across WhatsApp forwards, shared docs, and print snapshots."
      ]
    },
    {
      title: "How to navigate this site",
      paragraphs: [
        "Use Main Guide for full conversion sequence. Use Troubleshooting for broken output symptoms. Use Typing Tips for upstream quality control. Use Case Studies for rollout planning.",
        "Need quick tools? Use <a class=\"hero-link-highlight\" href=\"https://krutidev-to-unicode.com/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>krutidev to unicode</strong></a> for instant conversion and practice with <a class=\"hero-link-highlight\" href=\"https://krutidev-to-unicode.com/online-hindi-typing-test-free/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>hindi typing test</strong></a>.",
        "The blog contains scenario-specific articles such as CPCS preparation and government form workflows so teams can apply methods quickly.",
        "This structure is intentional: each page exists to solve one decision type clearly."
      ]
    }
  ],
  guide: [
    {
      title: "Conversion sequence that works under pressure",
      paragraphs: [
        "Start with source classification, then run sample conversion before full rollout. Treat unknown source fragments as risk, not routine.",
        "After conversion, validate character behavior, punctuation consistency, and copy-paste integrity across multiple destinations.",
        "Approve release only after reviewer signoff and batch-level issue logging."
      ]
    },
    {
      title: "CPCS and recruitment preparation",
      paragraphs: [
        "For CPCS preparation material, verify readability in the exact app or platform where students revise. Exam workflows fail when teams validate in one editor only.",
        "For recruitment form content, sanitize text before pasting into final form fields. Some portals normalize punctuation or clip combined glyphs.",
        "Keep a reviewed Unicode phrase bank for repeated entries."
      ]
    },
    {
      title: "Release governance",
      paragraphs: [
        "Document who converted, who reviewed, and what was validated. This turns conversion into a controllable process instead of a one-off task.",
        "If incidents recur, use logs to identify weak stages quickly.",
        "Teams that maintain light governance usually reduce correction load over time."
      ]
    }
  ],
  blog8: [
    {
      title: "Why CPCS candidates need Unicode-clean notes",
      paragraphs: [
        "CPCS preparation frequently combines old printed notes, copied model answers, and coaching handouts. Legacy text in these sources often fails on modern reading surfaces.",
        "When candidates revise on phones, inconsistent rendering slows retention and creates avoidable confusion in key terms.",
        "Unicode-clean material improves readability, searchability, and revision speed."
      ]
    },
    {
      title: "Coaching center workflow",
      paragraphs: [
        "Convert chapter-wise, not full archive at once. Validate terms from syllabus-heavy sections first.",
        "Use one review template for headings, bullet structure, and answer-format consistency so every batch matches exam reading habits.",
        "Publish one approved master copy per chapter to avoid multiple drifting versions."
      ]
    },
    {
      title: "Operational checklist",
      paragraphs: [
        "Keep source and converted versions separately. Maintain issue notes for repeated defect types.",
        "Validate in browser, PDF, and mobile app before sharing with learners.",
        "Treat note quality as academic infrastructure, not formatting polish."
      ]
    }
  ],
  blog9: [
    {
      title: "Unicode Hindi in government form workflows",
      paragraphs: [
        "Applicants and operators often reuse text from old templates. If the text is not normalized properly, portal previews can break or truncate entries.",
        "Submission errors are usually discovered late because testing is skipped at field level.",
        "A pre-submission Unicode workflow reduces rejection and repeat effort."
      ]
    },
    {
      title: "Field-level risk controls",
      paragraphs: [
        "Paste into plain-text stage first, then into final form fields. Verify special characters and punctuation after preview.",
        "Capture acknowledgement screenshots and final submitted text snapshots for dispute-safe traceability.",
        "For support centers, build reusable reviewed text blocks for high-frequency fields."
      ]
    },
    {
      title: "Scale and quality",
      paragraphs: [
        "Standardized phrase banks outperform ad-hoc typing when volume increases.",
        "Assign one reviewer for final preview checks during high-load periods.",
        "Quality at submission stage is process-driven, not speed-driven."
      ]
    }
  ],
  resources: [
    {
      title: "How to use dedicated resources",
      paragraphs: [
        "The resource center is built for teams that need direct execution pages for specific tasks such as keyboard setup, character mapping, reverse conversion, and document cleanup.",
        "Instead of reading one broad guide repeatedly, users can enter the exact sub-problem page and apply a relevant checklist immediately.",
        "This reduces confusion, speeds onboarding, and improves consistency in team handoffs."
      ]
    },
    {
      title: "Priority usage order",
      paragraphs: [
        "If your team is new, start with MS Word setup and typing standards. If output is already unstable, use character mapping and cleanup checklist first.",
        "If your destination system still uses legacy format, use the reverse conversion guide with strict validation.",
        "Use troubleshooting page when symptoms remain unresolved after checklist application."
      ]
    },
    {
      title: "Governed implementation",
      paragraphs: [
        "Assign one implementation owner per page category and maintain a short revision note each time your team adjusts process rules.",
        "This makes knowledge durable even when contributors change.",
        "A resource center works best when each page is tied to one operational decision."
      ]
    }
  ],
  reverseguide: [
    {
      title: "When reverse conversion is justified",
      paragraphs: [
        "Reverse conversion from Unicode to Kruti Dev should only be used when a required legacy system cannot process Unicode input.",
        "Teams should avoid reverse conversion for new content creation because it reintroduces long-term compatibility debt.",
        "Always keep a Unicode master and generate legacy output as a controlled derivative."
      ]
    },
    {
      title: "Safe reverse workflow",
      paragraphs: [
        "Start with reviewed Unicode text. Convert in small batches. Validate output in the exact legacy destination software.",
        "Track known mapping risks for frequently broken terms and maintain a correction sheet.",
        "Never overwrite Unicode source with reverse-converted output."
      ]
    },
    {
      title: "Risk controls",
      paragraphs: [
        "Store source and legacy output in separate folders with version labels.",
        "Run random sample verification before release.",
        "If destination platform updates to Unicode support, sunset reverse workflow immediately."
      ]
    }
  ],
  remington: [
    {
      title: "Remington Gail in practical operations",
      paragraphs: [
        "Remington Gail remains common in many typing centers and legacy-trained teams.",
        "The key challenge is not speed but consistency when multiple operators follow slightly different habits.",
        "A defined Remington quality checklist improves output reliability significantly."
      ]
    },
    {
      title: "Error hotspots",
      paragraphs: [
        "Operators often repeat mistakes in punctuation-heavy lines, combined-character terms, and copied heading blocks.",
        "Maintain a small hotspot list and review those patterns first during QA.",
        "Focused review outperforms full random proofreading when time is limited."
      ]
    },
    {
      title: "Team-level standardization",
      paragraphs: [
        "Use one reference chart, one spacing policy, and one final reviewer checklist.",
        "Avoid personal formatting preferences in shared documents.",
        "Consistency is what makes Remington workflows scalable."
      ]
    }
  ],
  inscript: [
    {
      title: "Choosing between InScript and Remington",
      paragraphs: [
        "The right layout depends on team context: training background, system requirements, and long-term maintenance goals.",
        "InScript often aligns better with standardized keyboard logic, while Remington may suit legacy-trained operators.",
        "The key is to avoid mixed standards inside one workflow."
      ]
    },
    {
      title: "Decision framework",
      paragraphs: [
        "Evaluate four factors: learning cost, typing speed after training, output consistency, and reviewer effort.",
        "Pilot both layouts on the same sample tasks before final policy decision.",
        "Choose one standard and document exceptions clearly."
      ]
    },
    {
      title: "Implementation",
      paragraphs: [
        "Once selected, align onboarding, template usage, and QA checklist to the chosen layout.",
        "Do not allow ad-hoc layout switching in production documents.",
        "Stable layout policy is a conversion-quality multiplier."
      ]
    }
  ],
  charmap: [
    {
      title: "Why character mapping errors are dangerous",
      paragraphs: [
        "Mapping errors often look visually acceptable but change meaning. This is high risk in forms, notices, and exam material.",
        "Teams should classify frequent mapping defects and review them first after conversion.",
        "Context review is essential because identical glyph issues can impact different words differently."
      ]
    },
    {
      title: "Correction method",
      paragraphs: [
        "Identify wrong output cluster, trace likely source pattern, apply mapped correction, then validate full sentence context.",
        "Do not patch words in isolation if the same pattern appears repeatedly.",
        "Maintain a correction dictionary for recurring mappings."
      ]
    },
    {
      title: "Operational controls",
      paragraphs: [
        "Review high-impact terms first: names, policy words, syllabus terms, and legal phrases.",
        "Add a final linguistic reviewer for critical documents.",
        "Character map governance reduces silent semantic defects."
      ]
    }
  ],
  cleanup: [
    {
      title: "Pre-conversion cleanup",
      paragraphs: [
        "Remove hidden formatting artifacts, inconsistent line breaks, and copied fragments from mixed sources before conversion.",
        "Normalize heading levels and paragraph structure early.",
        "Cleaner input directly reduces conversion-side defects."
      ]
    },
    {
      title: "Post-conversion cleanup",
      paragraphs: [
        "After conversion, verify punctuation spacing, heading consistency, and paragraph rhythm.",
        "Check destination platform rendering before finalizing output.",
        "Treat this stage as release QA, not cosmetic editing."
      ]
    },
    {
      title: "Checklist governance",
      paragraphs: [
        "Use one shared cleanup checklist with yes/no checkpoints.",
        "Log recurring failures and update checklist monthly.",
        "Process maintenance is what keeps quality stable at scale."
      ]
    }
  ],
  wordsetup: [
    {
      title: "Word setup baseline",
      paragraphs: [
        "MS Word workflows fail when font settings, spacing defaults, and template behavior are left unmanaged.",
        "Define approved Hindi font stack, paragraph settings, and heading presets before active typing starts.",
        "A stable baseline prevents repeated formatting drift across contributors."
      ]
    },
    {
      title: "Typing and review inside Word",
      paragraphs: [
        "Use style-based structure instead of manual formatting. This improves consistency and conversion readiness.",
        "Run one quick preview pass after typing to catch spacing and punctuation anomalies.",
        "When exporting, compare Word and PDF output before release."
      ]
    },
    {
      title: "Team template policy",
      paragraphs: [
        "Create one official Word template for Hindi content and distribute only that file for production work.",
        "Lock key style settings where possible and document update ownership.",
        "Template discipline reduces downstream conversion surprises."
      ]
    }
  ],
  cpcsnotes: [
    {
      title: "Exam note quality is a performance factor",
      paragraphs: [
        "CPCS preparation content usually combines old coaching PDFs, classroom dictation, and archived handwritten conversions. Without standardization, key terms mutate across batches and reduce revision confidence.",
        "Students do not consume notes in one environment. They read on mobile, browser tabs, and low-cost printouts, so the same chapter must survive multiple rendering contexts.",
        "A dedicated note-standard page helps coaching teams turn conversion into an academic delivery process, not just a formatting exercise."
      ]
    },
    {
      title: "Chapter-first workflow for coaching teams",
      paragraphs: [
        "Convert and validate one chapter at a time. Freeze terminology for frequently repeated technical phrases before batch rollout.",
        "Maintain one approved heading hierarchy and answer-format pattern so learners can move from chapter to chapter without reading friction.",
        "Assign reviewer ownership per subject stream and keep a small issue register for recurring conversion defects."
      ]
    },
    {
      title: "Publication controls for learner-facing material",
      paragraphs: [
        "Test final notes in the same channels learners use, including WhatsApp PDFs and browser viewers.",
        "Version-label each released chapter and avoid uncontrolled edits in shared copies.",
        "When content quality is consistent, candidates spend more time revising concepts and less time decoding broken text."
      ]
    }
  ],
  govdraft: [
    {
      title: "Why office drafts fail after conversion",
      paragraphs: [
        "Government drafting desks often inherit text from old templates and circular copies. These fragments may look correct initially but fail in file movement, portal upload, or official print extraction.",
        "Failures commonly appear in headings, reference numbers, punctuation lines, and repeated designation blocks where formatting is copied between notes.",
        "A dedicated drafting workflow reduces return memos and improves approval speed in high-volume desks."
      ]
    },
    {
      title: "Draft-to-approval execution model",
      paragraphs: [
        "Begin with source normalization: remove uncontrolled spacing, mixed punctuation, and invisible artifacts before conversion.",
        "After conversion, run structural verification on memo format, subject lines, numbering, and department signature blocks.",
        "Store reviewed text blocks for recurring formats to reduce manual variability across operators."
      ]
    },
    {
      title: "Desk governance for consistent output",
      paragraphs: [
        "Define one formatting policy by office type and keep a short change record when format instructions are updated.",
        "Use two-stage review during high-load periods: language clarity check, then layout and submission check.",
        "Process discipline at drafting stage lowers escalation at dispatch stage."
      ]
    }
  ],
  legaldocs: [
    {
      title: "Legal text demands precision beyond readability",
      paragraphs: [
        "In legal workflows, visually similar words can carry different legal effect. Character mapping mistakes are therefore not cosmetic issues.",
        "Documents such as affidavits, petitions, notices, and order extracts require clause-level trust before filing or circulation.",
        "A legal conversion page helps teams separate acceptable format cleanup from unacceptable semantic drift."
      ]
    },
    {
      title: "Clause-level conversion and review",
      paragraphs: [
        "Convert in manageable clause batches and validate names, dates, section references, and location terms first.",
        "Do not approve a document based only on body text appearance; cross-check headings, annexure labels, and reference chains.",
        "Maintain a reviewer checklist that includes legal terms known to break during legacy-to-Unicode movement."
      ]
    },
    {
      title: "Release safety for legal teams",
      paragraphs: [
        "Archive source and converted versions with clear labels so amendments can be traced without confusion.",
        "For sensitive filings, require secondary review by a language-aware legal reviewer before release.",
        "The goal is not only clean text but predictable interpretive integrity."
      ]
    }
  ],
  schoolrecords: [
    {
      title: "School data migration has identity-risk hotspots",
      paragraphs: [
        "Admission registers, mark sheets, transfer certificates, and scholarship records frequently contain legacy Hindi fields copied over many years.",
        "If migration is rushed, student names, parent names, and locality fields can become inconsistent across reports and certificates.",
        "A dedicated school-record workflow protects identity consistency during software modernization."
      ]
    },
    {
      title: "Record-type batching strategy",
      paragraphs: [
        "Migrate by record type rather than by file age so reviewers can apply one validation logic per batch.",
        "For each batch, verify high-impact fields first: student identifiers, class labels, exam session tags, and certificate wording.",
        "Always test print output, because many schools still issue physical documents where rendering defects become public immediately."
      ]
    },
    {
      title: "Operational controls for school admins",
      paragraphs: [
        "Use a shared migration tracker with reviewer initials and exception notes.",
        "Lock approved templates once validation completes to prevent accidental style drift by operators.",
        "Reliable Unicode records reduce both reprint requests and parent-facing disputes."
      ]
    }
  ],
  ocrcleanup: [
    {
      title: "OCR noise is the hidden root of bad conversion",
      paragraphs: [
        "Teams digitizing printed material often convert OCR output directly, but OCR introduces broken line flow, merged words, and punctuation anomalies.",
        "When noisy text is fed into conversion without cleanup, defects compound and become expensive to correct later.",
        "A dedicated OCR cleanup workflow isolates structural fixes before conversion starts."
      ]
    },
    {
      title: "Pre-conversion cleanup method",
      paragraphs: [
        "Normalize paragraphs, remove duplicated headers/footers, and correct obvious OCR substitutions before any conversion pass.",
        "Separate headings, bullets, and body paragraphs so the downstream output keeps logical document rhythm.",
        "If a source has multiple scan qualities, split into smaller batches and apply custom correction rules per batch."
      ]
    },
    {
      title: "Validation and publishing readiness",
      paragraphs: [
        "After conversion, run semantic proofreading focused on names, numeric references, and policy terms.",
        "Compare web and PDF output for line-wrap breaks and spacing integrity.",
        "This approach converts OCR archives into reusable knowledge assets instead of one-time cleaned files."
      ]
    }
  ],
  bilingualforms: [
    {
      title: "Dual-language forms need explicit field policy",
      paragraphs: [
        "Service centers and public-facing offices frequently issue bilingual forms where Hindi and English text must coexist without overlap or drift.",
        "Without a field policy, teams mix languages inconsistently and trigger validation or readability issues across systems.",
        "A dedicated bilingual workflow ensures each field has clear language behavior before content entry begins."
      ]
    },
    {
      title: "Hindi-English drafting controls",
      paragraphs: [
        "Define which fields are Hindi-only, English-only, or mirrored bilingual. Keep approved phrase blocks for repeated instructions.",
        "Normalize punctuation and spacing rules for mixed-script lines to avoid visual imbalance in printed and digital copies.",
        "Use side-by-side preview checks to confirm both language versions preserve equivalent intent."
      ]
    },
    {
      title: "Submission reliability at scale",
      paragraphs: [
        "For recurring intake workflows, maintain bilingual master templates and restrict edits to authorized reviewers.",
        "Log rejected submissions by error type to refine field-level instructions for operators.",
        "A controlled bilingual drafting process improves clarity for citizens and reduces correction cycles for teams."
      ]
    }
  ]
};

const pageDetailMap = {
  home: {
    focus: "site-wide conversion quality operations",
    scenarioName: "first-time visitor onboarding across mixed Hindi sources",
    sourceExamples: "exam notes, office drafts, scanned circulars, and copied legacy snippets",
    destination: "browser editors, mobile screens, PDFs, and final print exports"
  },
  about: {
    focus: "editorial and operational trust architecture",
    scenarioName: "teams evaluating whether this guidance can be used in production",
    sourceExamples: "historical conversion incidents, reviewer notes, and update logs",
    destination: "documented policy pages, onboarding notes, and user support responses"
  },
  guide: {
    focus: "primary Kruti Dev to Unicode execution pipeline",
    scenarioName: "batch conversion under deadline pressure",
    sourceExamples: "legacy office files, shared coaching content, and hand-maintained templates",
    destination: "Unicode-ready assets for websites, documents, and form systems"
  },
  fontdownload: {
    focus: "legacy font dependency reduction",
    scenarioName: "teams opening old documents without reintroducing long-term font lock-in",
    sourceExamples: "Kruti Dev formatted text copied from archives and pen-drive bundles",
    destination: "Unicode text with temporary legacy display support where unavoidable"
  },
  mangal: {
    focus: "Mangal rendering stability governance",
    scenarioName: "mixed Windows and Android readers viewing the same Hindi report",
    sourceExamples: "MS Word drafts, PDF exports, and browser-based notice boards",
    destination: "consistent Devanagari rendering across all approved endpoints"
  },
  typing: {
    focus: "Hindi typing discipline and error prevention",
    scenarioName: "high-volume operators reducing proofreading loops",
    sourceExamples: "manual typing tasks, copied clauses, and repetitive heading blocks",
    destination: "clean first-pass Unicode output for review and publication"
  },
  blog: {
    focus: "scenario-driven knowledge delivery",
    scenarioName: "readers searching for practical workflows instead of generic theory",
    sourceExamples: "exam preparation, government forms, legal drafts, and school records",
    destination: "actionable step-by-step implementation knowledge"
  },
  casestudies: {
    focus: "migration planning with measurable outcomes",
    scenarioName: "decision-makers comparing rollout options before approving a plan",
    sourceExamples: "batch reports, defect trackers, and reviewer signoff histories",
    destination: "repeatable migration plans with transparent tradeoffs"
  },
  troubleshooting: {
    focus: "incident classification and recovery",
    scenarioName: "operators resolving broken output during active submission windows",
    sourceExamples: "failed form previews, spacing defects, and wrong character rendering",
    destination: "validated fixes that hold in destination environments"
  },
  editorial: {
    focus: "content review accountability and correction discipline",
    scenarioName: "maintaining technical accuracy as workflows and tools evolve",
    sourceExamples: "review checklists, correction records, and quarterly content refreshes",
    destination: "stable guidance pages with clear ownership"
  },
  glossary: {
    focus: "shared conversion terminology for teams",
    scenarioName: "cross-functional contributors misreading key process terms",
    sourceExamples: "support tickets, reviewer comments, and training handbooks",
    destination: "common language that reduces operational misalignment"
  },
  contact: {
    focus: "structured support intake and resolution handoff",
    scenarioName: "users submitting incomplete issue details during urgent deadlines",
    sourceExamples: "conversion samples, screenshots, and platform-specific error notes",
    destination: "faster triage and higher first-response quality"
  },
  privacy: {
    focus: "clear data handling boundaries",
    scenarioName: "users verifying whether sample text can be shared safely",
    sourceExamples: "support submissions, troubleshooting snippets, and metadata",
    destination: "transparent privacy expectations with plain language"
  },
  terms: {
    focus: "usage boundaries and responsibility model",
    scenarioName: "teams deploying guidance into high-stakes publication workflows",
    sourceExamples: "internal SOPs, external client projects, and educational use cases",
    destination: "clear legal-operational understanding before production use"
  },
  disclaimer: {
    focus: "risk communication for conversion outcomes",
    scenarioName: "automation output being treated as final without human review",
    sourceExamples: "bulk converted notes, official drafts, and public notices",
    destination: "review-first publishing discipline"
  },
  blog1: {
    focus: "Kruti Dev versus Unicode policy decision",
    scenarioName: "teams selecting long-term text standards",
    sourceExamples: "legacy typing workflows and Unicode-first content programs",
    destination: "future-safe Hindi publishing operations"
  },
  blog2: {
    focus: "Mangal deployment operations",
    scenarioName: "environment standardization for Hindi rendering",
    sourceExamples: "desktop labs, office templates, and print-preview workflows",
    destination: "predictable rendering outcomes"
  },
  blog3: {
    focus: "typing defect reduction in Hindi production",
    scenarioName: "operators losing time to repeated correction cycles",
    sourceExamples: "manual data entry, copied clauses, and fast-turnaround drafts",
    destination: "high acceptance on first review"
  },
  blog4: {
    focus: "Unicode Hindi publishing visibility",
    scenarioName: "quality content underperforming due to weak structure",
    sourceExamples: "article pages, headings, metadata, and internal links",
    destination: "strong discoverability with readable Hindi output"
  },
  blog5: {
    focus: "legacy archive migration strategy",
    scenarioName: "large backlogs with variable source quality",
    sourceExamples: "old office repositories, scanned bundles, and departmental templates",
    destination: "traceable migration with rollback safety"
  },
  blog6: {
    focus: "government record modernization",
    scenarioName: "institutional archives shifting to Unicode systems",
    sourceExamples: "file registers, historical notices, and compliance records",
    destination: "audit-safe Unicode records"
  },
  blog7: {
    focus: "post-conversion proofreading discipline",
    scenarioName: "documents that look correct but still contain semantic defects",
    sourceExamples: "converted paragraphs, headings, and legal or exam terms",
    destination: "publication-ready Hindi text"
  },
  blog8: {
    focus: "CPCS exam note conversion operations",
    scenarioName: "coaching teams publishing learner-ready Unicode study packs",
    sourceExamples: "chapter notes, model answers, and revision snippets",
    destination: "mobile-friendly and print-safe exam material"
  },
  blog9: {
    focus: "government form submission quality controls",
    scenarioName: "portal entries failing during preview and validation",
    sourceExamples: "legacy drafts pasted into field-level form inputs",
    destination: "submission-ready Unicode entries with lower rejection rate"
  },
  resources: {
    focus: "resource center navigation for execution teams",
    scenarioName: "users selecting the right dedicated page for each problem type",
    sourceExamples: "typing setup, character mapping, cleanup, and reverse conversion",
    destination: "faster implementation with less confusion"
  },
  reverseguide: {
    focus: "Unicode to Kruti Dev reverse compatibility",
    scenarioName: "downstream legacy-only systems still active",
    sourceExamples: "Unicode master drafts converted for old destination software",
    destination: "controlled legacy compatibility without source corruption"
  },
  remington: {
    focus: "Remington Gail typing consistency",
    scenarioName: "operators trained differently but sharing one output stream",
    sourceExamples: "typing center production files and recurring official templates",
    destination: "predictable quality from Remington-based operations"
  },
  inscript: {
    focus: "InScript versus Remington standardization",
    scenarioName: "organizations choosing one keyboard policy",
    sourceExamples: "pilot typing batches and reviewer effort tracking",
    destination: "single layout policy with stable output"
  },
  charmap: {
    focus: "character mapping defect control",
    scenarioName: "linguistically wrong words passing visual checks",
    sourceExamples: "converted terms with subtle glyph-level errors",
    destination: "semantically correct Unicode text"
  },
  cleanup: {
    focus: "pre and post conversion cleanup discipline",
    scenarioName: "mixed-source documents producing avoidable defects",
    sourceExamples: "copied text blocks, line-break noise, and formatting artifacts",
    destination: "clean conversion input and publishable output"
  },
  wordsetup: {
    focus: "MS Word Hindi environment standardization",
    scenarioName: "template drift and spacing inconsistency across contributors",
    sourceExamples: "office reports, circular drafts, and shared policy documents",
    destination: "stable Word-to-PDF Hindi output"
  },
  cpcsnotes: {
    focus: "CPCS note standardization",
    scenarioName: "coaching content drifting across batches",
    sourceExamples: "syllabus terms, chapter summaries, and revision sheets",
    destination: "consistent learner-facing Unicode notes"
  },
  govdraft: {
    focus: "government office drafting controls",
    scenarioName: "memos and notices returned due to formatting and text defects",
    sourceExamples: "departmental drafts, circulars, and subject-line templates",
    destination: "approval-ready official Hindi drafts"
  },
  legaldocs: {
    focus: "legal Hindi conversion reliability",
    scenarioName: "clause-level meaning risk after conversion",
    sourceExamples: "notices, affidavits, petitions, and extracted orders",
    destination: "defensible legal text quality"
  },
  schoolrecords: {
    focus: "school record Unicode migration",
    scenarioName: "student identity fields drifting across systems",
    sourceExamples: "admission registers, marksheets, and certificates",
    destination: "consistent academic records"
  },
  ocrcleanup: {
    focus: "OCR cleanup before conversion",
    scenarioName: "scan noise multiplying downstream defects",
    sourceExamples: "digitized PDFs, printed archives, and OCR text dumps",
    destination: "searchable Unicode documents"
  },
  bilingualforms: {
    focus: "Hindi-English dual language form control",
    scenarioName: "mixed-language entries failing validation or readability checks",
    sourceExamples: "citizen service forms, instructions, and acknowledgment text",
    destination: "stable bilingual submissions"
  }
};

function hashKey(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 33 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickVariant(list, index) {
  return list[index % list.length];
}

function countWords(sections) {
  const text = sections
    .map((section) => `${section.title} ${section.paragraphs.join(" ")}`)
    .join(" ")
    .trim();
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

function getDetail(profile, key) {
  const hash = hashKey(key);
  const mapped = pageDetailMap[key] || {};

  const riskPool = [
    "silent character corruption that appears only after submission",
    "layout drift between desktop preview and final mobile reading",
    "field-level failures during portal validation",
    "semantic changes caused by subtle mapping errors",
    "multi-operator inconsistency in repeated phrases"
  ];

  const reviewerPool = [
    "one technical reviewer and one language reviewer",
    "a rotating reviewer model with fixed checklist ownership",
    "subject reviewer first, formatting reviewer second",
    "batch reviewer for terms and final reviewer for release readiness",
    "desk lead reviewer supported by operator-level spot checks"
  ];

  const cadencePool = [
    "daily mini-reviews for active batches and weekly quality retrospectives",
    "per-batch signoff with monthly taxonomy updates for recurring defects",
    "release-window reviews followed by next-day incident analysis",
    "checkpoint validation at intake, conversion, and destination testing stages",
    "weekly governance sync with issue-priority reclassification"
  ];

  const checkPool = [
    "character integrity, punctuation consistency, and destination rendering behavior",
    "heading structure, spacing rhythm, and form-field acceptance",
    "term correctness, copy-paste behavior, and PDF export readability",
    "line-break stability, naming consistency, and reviewer signoff traceability",
    "source-cleanliness score, conversion defect log, and release checklist completion"
  ];

  const teamPool = [
    "operator, reviewer, release owner, and escalation owner with explicit boundaries",
    "intake owner, conversion owner, linguistic reviewer, and publication approver",
    "batch processor, quality checker, template custodian, and incident responder",
    "primary typist, verification partner, documentation lead, and audit coordinator",
    "desk operator, standards reviewer, publishing owner, and governance lead"
  ];

  const impactPool = [
    "reduces correction loops and protects publishing timelines",
    "improves confidence in high-stakes Hindi communication",
    "cuts downstream rework and prevents avoidable submission failures",
    "creates stable Unicode assets that remain reusable over time",
    "builds repeatable quality behavior across distributed teams"
  ];

  return {
    focus: mapped.focus || profile.title,
    scenarioName: mapped.scenarioName || `operational rollout for ${profile.title}`,
    sourceExamples: mapped.sourceExamples || profile.reality,
    destination: mapped.destination || profile.result,
    criticalChecks: mapped.criticalChecks || pickVariant(checkPool, hash + 1),
    reviewerPattern: mapped.reviewerPattern || pickVariant(reviewerPool, hash + 2),
    releaseCadence: mapped.releaseCadence || pickVariant(cadencePool, hash + 3),
    teamModel: mapped.teamModel || pickVariant(teamPool, hash + 4),
    artifactRisk: mapped.artifactRisk || pickVariant(riskPool, hash + 5),
    impactLine: mapped.impactLine || pickVariant(impactPool, hash + 6)
  };
}

function buildLongSections(profile, key, detail) {
  return [
    {
      title: `Operational Context: ${profile.title}`,
      paragraphs: [
        `This page treats ${detail.focus} as a production discipline, not as a one-click action. The intended audience is ${profile.audience}, and the practical pressure is that ${profile.reality}. Teams usually fail when they validate only the visual look of converted text and ignore how it behaves in actual destinations.`,
        `The current field scenario for this topic is ${detail.scenarioName}. In real environments, source material often arrives as ${detail.sourceExamples}. Each source introduces hidden inconsistencies, so process quality must be designed into intake, conversion, review, and publication rather than added at the end.`,
        `A reliable outcome requires a clear operating model: ${profile.process}. When the method is repeatable, the expected result becomes ${profile.result}, which directly improves business continuity and user trust.`
      ]
    },
    {
      title: `Source Intake Standard for ${profile.title}`,
      paragraphs: [
        "High-quality conversion starts with disciplined intake. Teams should classify incoming material by source quality, urgency, document type, and downstream destination before running any automated transformation. This prevents low-quality input from contaminating high-priority release batches.",
        `For this topic, intake typically includes ${detail.sourceExamples}. Each source should be checked for hidden spacing artifacts, copied formatting residue, inconsistent punctuation, and unresolved line breaks. If these issues are ignored at intake, correction effort multiplies later and review confidence drops quickly.`,
        `A practical intake checklist for this page should always include ${detail.criticalChecks}. Intake approval is not a bureaucratic step; it is the earliest chance to prevent ${detail.artifactRisk}.`
      ]
    },
    {
      title: `Execution Blueprint for ${profile.title}`,
      paragraphs: [
        `Execution should happen in controlled batches with explicit ownership. The recommended team model is ${detail.teamModel}. Clear ownership prevents untracked edits and makes issue attribution straightforward when defects appear under deadline pressure.`,
        "Instead of converting full repositories at once, start with representative sample batches, validate behavior in target environments, and then scale. This approach limits blast radius, preserves rollback options, and gives reviewers context about which source patterns are most unstable.",
        `At execution stage, teams should preserve a Unicode master copy and maintain version-labeled outputs for each batch. This structure is essential when supporting environments such as ${detail.destination}, where field-level behavior can differ from desktop previews.`
      ]
    },
    {
      title: `Review Controls for ${profile.title}`,
      paragraphs: [
        "Post-conversion review must evaluate both language integrity and document structure. Linguistic checks focus on meaning, term correctness, and phrase continuity, while structural checks verify headings, list rhythm, punctuation spacing, and section boundaries.",
        `A reviewer design that works well here is ${detail.reviewerPattern}. Two-role review reduces the risk that visual correctness masks semantic drift, especially in documents that appear clean but contain subtle word-level conversion defects.`,
        "Reviewers should always test copy-paste behavior between editor, browser form, and PDF export. Many defects are not visible in one environment but become critical in another. Review discipline converts fragile output into production-safe content."
      ]
    },
    {
      title: `Destination Validation for ${profile.title}`,
      paragraphs: [
        `Release criteria should be destination-aware. The relevant destination profile here is ${detail.destination}, and each destination can expose different rendering or validation behavior. Therefore, release testing must mirror the final usage context rather than rely on one editor preview.`,
        "Before release, teams should confirm line-wrap stability, form-field acceptance where applicable, and screenshot traceability for high-impact submissions. Destination testing is often skipped during rush windows, but that is exactly where late-stage failure becomes expensive.",
        `A release decision is production-safe only when ${detail.criticalChecks} are confirmed and logged. This step directly prevents ${detail.artifactRisk} and protects service reliability.`
      ]
    },
    {
      title: `Incident Patterns for ${profile.title}`,
      paragraphs: [
        "When failures occur, teams should classify symptoms before applying fixes. Typical classes include mapping defects, spacing defects, punctuation normalization failures, and destination-specific rendering failures. Symptom-first classification reduces random trial-and-error.",
        `For this page, a high-priority risk is ${detail.artifactRisk}. If this appears repeatedly, root cause usually sits in intake quality, inconsistent operator behavior, or missing destination tests. Escalation should target process stage, not just the visible defect.`,
        "Maintain a compact incident log with source reference, defect type, fix path, and final validation result. Over time, this log becomes a high-value operational asset that shortens future recovery cycles."
      ]
    },
    {
      title: `Role Clarity for ${profile.title}`,
      paragraphs: [
        `Sustained quality requires explicit role design. A workable model for this page is ${detail.teamModel}. Each role should own one decision boundary so that accountability remains clear even when workloads spike.`,
        "Handoffs should include three mandatory artifacts: source identifier, known-risk notes, and validation status. Without these handoff details, teams repeat earlier mistakes and spend reviewer time rediscovering already-known issues.",
        `Role clarity improves both speed and trust. It also supports predictable release cadence such as ${detail.releaseCadence}, which helps teams scale output without degrading quality.`
      ]
    },
    {
      title: `Field Scenario Playbook: ${profile.title}`,
      paragraphs: [
        `Consider this scenario: ${detail.scenarioName}. Teams begin with mixed source quality, urgent deadlines, and multiple stakeholders expecting immediate output.`,
        "In this situation, the highest-value move is to define a narrow first batch, run full validation in real destination channels, and document issue categories before broad rollout. This early discipline prevents large rework waves and avoids credibility loss with stakeholders.",
        `When the scenario is handled with controls, output quality becomes stable enough for repeat use. That is how ${detail.focus} transitions from ad-hoc execution into dependable operations.`
      ]
    },
    {
      title: `Governance for ${profile.title}`,
      paragraphs: [
        "Every production workflow should maintain lightweight documentation that is updated when process decisions change. Documentation does not need to be heavy; it must be accurate, accessible, and tied to current operating behavior.",
        `A strong governance rhythm for this topic is ${detail.releaseCadence}. The goal is to review defect trends, adjust checklists, and communicate updates before small inconsistencies become standard practice.`,
        "Policy drift is common when teams rely on memory instead of recorded standards. Governance turns hard-won lessons into reusable operating knowledge."
      ]
    },
    {
      title: `Training Framework for ${profile.title}`,
      paragraphs: [
        "New contributors should not learn critical workflows from fragmented chat history. Onboarding should include intake standards, conversion sequence, review checklist, and destination testing protocol with sample defects.",
        "Training works best when examples are realistic and tied to recurring failure patterns. Operators should practice on noisy source samples, not only on ideal text, so they learn to recognize hidden defects early.",
        `When onboarding mirrors real production conditions, teams build confidence faster and contribute to the same quality baseline. This supports long-term consistency in ${detail.focus}.`
      ]
    },
    {
      title: `Continuous Improvement for ${profile.title}`,
      paragraphs: [
        "A practical improvement roadmap should run in loops: measure current defect types, prioritize highest-impact failures, update controls, and re-measure release outcomes. Improvement is measurable when correction volume decreases and first-pass acceptance rises.",
        `For this page, the strategic objective is simple: build a workflow that ${detail.impactLine}. That objective is achieved through disciplined intake, transparent ownership, and destination-aware validation.`,
        `Teams that maintain this improvement loop convert fragile legacy behavior into stable Unicode operations. The end state is not only cleaner text, but a resilient process that keeps working as tools, teams, and publishing channels evolve.`
      ]
    }
  ];
}

function extendToTargetWordCount(sections, profile, detail) {
  const targetWords = 1750;
  const extended = [...sections];
  if (countWords(extended) >= targetWords) return extended;

  const extensionBank = [
    `Extended implementation note: In ${detail.focus}, teams should publish a short release note for each batch containing source range, reviewer initials, known limitations, and rollback pointer. This documentation habit supports faster investigation when stakeholders report defects after distribution.`,
    `Extended quality note: ${detail.criticalChecks} should be converted into a yes-no checkpoint form and attached to release records. Binary checklist evidence keeps quality conversations objective and reduces emotional debate during high-pressure delivery windows.`,
    `Extended governance note: ${detail.reviewerPattern} works best when review ownership is visible on a shared board. Visibility prevents hidden bottlenecks and allows managers to rebalance workload before deadlines are at risk.`,
    `Extended reliability note: because this topic often interacts with ${detail.destination}, validation should include at least one secondary device or environment check before closeout. Single-environment validation is a recurring source of late failures in Hindi publishing workflows.`,
    `Extended training note: create a defect library from real incidents, then use it in onboarding drills. New operators learn faster when they see authentic examples of ${detail.artifactRisk} and how to resolve it with controlled steps.`,
    `Extended operations note: align timeline planning with ${detail.releaseCadence}. Cadence discipline allows teams to ship continuously while still preserving review rigor, which is critical for high-impact Hindi documents.`
  ];

  const extensionSection = {
    title: "Extended Implementation Notes",
    paragraphs: []
  };

  let index = 0;
  while (countWords([...extended, extensionSection]) < targetWords && index < 40) {
    extensionSection.paragraphs.push(extensionBank[index % extensionBank.length]);
    index += 1;
  }

  if (extensionSection.paragraphs.length > 0) extended.push(extensionSection);
  return extended;
}

function buildSections(profile, key = pageKey) {
  const detail = getDetail(profile, key);
  const customSections = focusedSections[key] ? [...focusedSections[key]] : [];
  const longSections = buildLongSections(profile, key, detail);
  return extendToTargetWordCount([...customSections, ...longSections], profile, detail);
}

function renderContent(profile) {
  if (!pageContentHost || !profile) return;
  const sections = buildSections(profile, pageKey);

  pageContentHost.innerHTML = sections
    .map((section) => {
      const paragraphs = section.paragraphs.map((p) => `<p>${p}</p>`).join("");
      return `<section class="content-section"><h2>${section.title}</h2>${paragraphs}</section>`;
    })
    .join("");
}

const activeProfile = profiles[pageKey] || profiles.home;
renderContent(activeProfile);

function updateReadingProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.max(0, Math.min(progress, 100))}%`;
}
window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);
updateReadingProgress();

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => menu.classList.toggle("open"));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const delay = entry.target.dataset.delay || "0";
    entry.target.style.setProperty("--delay", `${delay}ms`);
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function initGsapAnimations() {
  if (!window.gsap) return;

  gsap.from(".site-header", { y: -22, opacity: 0, duration: 0.65, ease: "power3.out" });
  gsap.from(".hero-card", { y: 26, opacity: 0, duration: 0.85, delay: 0.08, ease: "power3.out" });
  gsap.from(".content-section", { y: 16, opacity: 0, duration: 0.55, stagger: 0.08, delay: 0.2, ease: "power2.out" });

  gsap.utils.toArray(".orb").forEach((orb, idx) => {
    gsap.to(orb, {
      x: idx % 2 === 0 ? 18 : -18,
      y: 14 + idx * 6,
      duration: 7 + idx * 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  gsap.utils.toArray(".blog-card, .panel").forEach((el, idx) => {
    gsap.from(el, { y: 18, opacity: 0, duration: 0.45, delay: 0.12 + idx * 0.03, ease: "power2.out" });
  });
}

window.addEventListener("load", initGsapAnimations);


