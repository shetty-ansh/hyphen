import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy & Data Protection Policy | hyphen.tcsnetwork.co.uk",
    description:
        "Privacy and data protection policy for hyphen.tcsnetwork.co.uk private members' community.",
};

const SECTIONS = [
    {
        id: "1",
        title: "1. Introduction",
        content: [
            'Hyphen ("Hyphen", "we", "us" or "our") respects your privacy and is committed to protecting your personal information.',
            "This Privacy & Data Protection Policy explains how we collect, use, store, disclose and protect personal information when you:",
        ],
        list: [
            "visit the Hyphen website;",
            "enquire about Hyphen or contact us;",
            "apply for or purchase a membership;",
            "attend our events, workshops, clinics or coworking sessions;",
            "purchase tickets or passes;",
            "join or participate in our member community;",
            "bring or register a guest;",
            "subscribe to communications from us;",
            "interact with Hyphen through third-party platforms; or",
            "otherwise engage with our services.",
        ],
        afterList: [
            "This policy also explains your rights under UK data protection law.",
            "For the purposes of UK data protection legislation, the data controller is:",
        ],
        extra: [
            "[INSERT LEGAL ENTITY OPERATING HYPHEN]",
            "Trading as hyphen.tcsnetwork.co.uk / Hyphen",
            "[INSERT REGISTERED OR BUSINESS ADDRESS]",
            "United Kingdom",
            "",
            "Privacy enquiries can be sent to: hello@tcsnetwork.co.uk",
            "If a different email address is established specifically for privacy enquiries, this section should be updated accordingly.",
        ],
    },
    {
        id: "2",
        title: "2. Laws that apply to us",
        content: [
            "Where applicable, we process personal information in accordance with UK data protection and privacy legislation, including:",
        ],
        list: [
            'the UK General Data Protection Regulation ("UK GDPR");',
            "the Data Protection Act 2018;",
            'the Privacy and Electronic Communications (EC Directive) Regulations 2003 ("PECR");',
            "the Data (Use and Access) Act 2025 and amendments made by it; and",
            "other applicable UK privacy and electronic communications legislation.",
        ],
    },
    {
        id: "3",
        title: "3. The personal information we may collect",
        content: [
            "The information we collect depends on how you interact with Hyphen.",
        ],
        subsections: [
            {
                title: "3.1 Identity and contact information",
                content: ["This may include:"],
                list: [
                    "full name;",
                    "email address;",
                    "telephone number;",
                    "social media or community username;",
                    "organisation or business name;",
                    "job title or profession;",
                    "postal or billing address; and",
                    "other contact information you voluntarily provide.",
                ],
            },
            {
                title: "3.2 Membership information",
                content: [
                    "When you enquire about, apply for or hold a Hyphen membership, we may collect:",
                ],
                list: [
                    "membership tier;",
                    "membership status;",
                    "membership start and end dates;",
                    "application information;",
                    "attendance or access information;",
                    "booking history;",
                    "membership preferences;",
                    "guest allocations;",
                    "member communications;",
                    "records relating to suspension or termination of membership; and",
                    "information reasonably required to administer your membership.",
                ],
                afterList: [
                    "Where membership applications are reviewed, we may also retain information necessary to record the outcome of an application.",
                ],
            },
            {
                title: "3.3 Event, workshop and booking information",
                content: [
                    "When you register for an event, workshop, clinic, coworking session or other Hyphen activity, we may process:",
                ],
                list: [
                    "your name;",
                    "contact details;",
                    "ticket or booking information;",
                    "event attendance;",
                    "waiting-list information;",
                    "booking status;",
                    "guest information;",
                    "accessibility information that you choose to provide;",
                    "communications about the event; and",
                    "information provided through our event-booking providers.",
                ],
                afterList: [
                    "Hyphen currently embeds event information through Luma. When you interact with Luma, Luma may collect information independently and may provide relevant registration information to us as the event organiser.",
                ],
            },
            {
                title: "3.4 Payment and transaction information",
                content: [
                    "Where you purchase a membership, ticket, day pass or other paid service, payment details may be processed by a third-party payment provider.",
                    "Depending on the payment arrangement, we may receive information such as:",
                ],
                list: [
                    "transaction amount;",
                    "payment status;",
                    "payment date;",
                    "billing name;",
                    "limited payment identifiers;",
                    "invoice details; and",
                    "refund or failed-payment information.",
                ],
                afterList: [
                    "Full payment-card or bank details may be processed directly by the relevant payment provider rather than by Hyphen.",
                ],
            },
            {
                title: "3.5 Community information",
                content: [
                    "Hyphen operates a private member community using third-party communication platforms.",
                    "Information processed in connection with the community may include:",
                ],
                list: [
                    "your username;",
                    "profile name;",
                    "profile photograph;",
                    "messages and posts;",
                    "reactions;",
                    "shared files or links;",
                    "community participation;",
                    "moderation information; and",
                    "information you voluntarily share with other members.",
                ],
                afterList: [
                    "Information you post to a community channel may be visible to other members of that community.",
                    "You should therefore avoid sharing sensitive or confidential information unless necessary and appropriate.",
                    "The third-party platform operating the community may also process your information independently under its own terms and privacy policy.",
                ],
            },
            {
                title: "3.6 Guest information",
                content: [
                    "Members may be permitted to bring guests to Hyphen.",
                    "Where necessary, we may collect a guest\u2019s:",
                ],
                list: [
                    "name;",
                    "contact information;",
                    "attendance details;",
                    "hosting member\u2019s identity; and",
                    "information reasonably necessary for security, capacity management or event administration.",
                ],
                afterList: [
                    "Members who provide information about a guest should ensure that they are entitled to provide that information and, where appropriate, make the guest aware of this policy.",
                ],
            },
            {
                title: "3.7 Communications",
                content: [
                    "If you contact Hyphen by email, social media, through a community platform or by another method, we may collect:",
                ],
                list: [
                    "your contact details;",
                    "the content of your communication;",
                    "correspondence history;",
                    "attachments you provide; and",
                    "information necessary to respond to your enquiry.",
                ],
            },
            {
                title: "3.8 Photographs, audio and video",
                content: [
                    "Photography or recording may take place during certain Hyphen events, sessions, workshops or community activities.",
                    "This may include:",
                ],
                list: [
                    "photographs;",
                    "video footage;",
                    "audio recordings; and",
                    "recordings of presentations or workshops.",
                ],
                afterList: [
                    "Where recording takes place, we will aim to provide appropriate notice.",
                    "Material may be used for legitimate operational, archival, community or promotional purposes where permitted by law.",
                    "Where consent is required, we will seek it separately.",
                    "If you have concerns about being photographed or recorded at an event, please speak to a member of the Hyphen team.",
                ],
            },
            {
                title: "3.9 Website and technical information",
                content: [
                    "When you visit our website, certain technical information may be processed automatically.",
                    "This can include:",
                ],
                list: [
                    "Internet Protocol (IP) address;",
                    "browser type;",
                    "device type;",
                    "operating system;",
                    "referring website;",
                    "pages visited;",
                    "date and time of access;",
                    "approximate location derived from technical information;",
                    "error logs;",
                    "security information; and",
                    "website interaction information.",
                ],
                afterList: [
                    "Some information may be processed by our website hosting and infrastructure providers.",
                ],
            },
            {
                title: "3.10 Marketing preferences",
                content: ["We may maintain information about:"],
                list: [
                    "whether you have agreed to receive marketing;",
                    "the communications you receive;",
                    "your communication preferences;",
                    "when and how consent was obtained where consent is used; and",
                    "whether you have unsubscribed or objected to marketing.",
                ],
            },
        ],
    },
    {
        id: "4",
        title: "4. Special category information",
        content: [
            "Certain information receives additional protection under UK data protection law.",
            "This includes information relating to matters such as:",
        ],
        list: [
            "health;",
            "racial or ethnic origin;",
            "religion or philosophical beliefs;",
            "political opinions;",
            "trade union membership;",
            "genetics or biometrics used for identification; or",
            "sex life or sexual orientation.",
        ],
        afterList: [
            "Hyphen does not ordinarily need to collect special category information as part of general membership administration.",
            "However, you may voluntarily provide limited information, for example an accessibility or health requirement relevant to attending an event.",
            "Where we process special category information, we will only do so where an appropriate legal basis and an additional condition under UK data protection law apply.",
            "Please do not provide special category information unless it is reasonably necessary.",
        ],
    },
    {
        id: "5",
        title: "5. Where we obtain information",
        content: ["We may receive personal information:"],
        subsections: [
            {
                title: "Directly from you",
                content: ["For example when you:"],
                list: [
                    "contact us;",
                    "apply for membership;",
                    "purchase a membership;",
                    "book an event;",
                    "join a community channel;",
                    "subscribe to communications;",
                    "register a guest;",
                    "attend an event; or",
                    "otherwise communicate with us.",
                ],
            },
            {
                title: "From third-party service providers",
                content: ["For example:"],
                list: [
                    "event registration providers;",
                    "payment providers;",
                    "community platforms;",
                    "email or newsletter providers; and",
                    "website infrastructure providers.",
                ],
            },
            {
                title: "From another member",
                content: [
                    "For example where a member registers you as their guest.",
                ],
            },
            {
                title: "From publicly available information",
                content: [
                    "In limited circumstances, we may obtain professional or business information from publicly available sources where reasonably necessary for legitimate business or community purposes and permitted by law.",
                ],
            },
        ],
    },
    {
        id: "6",
        title: "6. Why we use your information and our lawful bases",
        content: [
            "UK data protection legislation requires us to have a valid reason, known as a lawful basis, whenever we process personal information.",
            "Depending on the circumstances, we may rely upon the following bases.",
        ],
        subsections: [
            {
                title: "6.1 To administer membership",
                content: ["We use information to:"],
                list: [
                    "process membership applications;",
                    "establish and administer membership;",
                    "provide member benefits;",
                    "communicate about membership;",
                    "manage member access;",
                    "administer renewals;",
                    "handle cancellations;",
                    "manage membership payments; and",
                    "provide the services associated with your membership.",
                ],
                afterList: [
                    "Lawful basis: performance of a contract or taking steps at your request before entering into a contract.",
                ],
            },
            {
                title: "6.2 To manage events and bookings",
                content: ["We use information to:"],
                list: [
                    "register attendees;",
                    "issue booking confirmations;",
                    "manage capacity;",
                    "operate waiting lists;",
                    "administer tickets;",
                    "communicate event information;",
                    "check attendance; and",
                    "manage changes or cancellations.",
                ],
                afterList: [
                    "Lawful basis: performance of a contract and/or legitimate interests in operating Hyphen\u2019s events and community activities.",
                ],
            },
            {
                title: "6.3 To operate the Hyphen community",
                content: ["We may use personal information to:"],
                list: [
                    "provide member community access;",
                    "facilitate member interaction;",
                    "moderate the community;",
                    "respond to misconduct;",
                    "enforce community rules; and",
                    "protect members.",
                ],
                afterList: [
                    "Lawful basis: performance of our membership agreement and legitimate interests in operating a safe and useful private community.",
                ],
            },
            {
                title: "6.4 To respond to enquiries",
                content: [
                    "We process information to respond to questions, membership enquiries, partnership discussions and other communications.",
                    "Lawful basis: legitimate interests and, where the enquiry relates to a potential contract, taking steps before entering into a contract.",
                ],
            },
            {
                title: "6.5 To process payments and maintain financial records",
                content: ["We may process transaction information to:"],
                list: [
                    "collect fees;",
                    "manage invoices;",
                    "handle refunds;",
                    "reconcile accounts;",
                    "identify failed payments; and",
                    "comply with accounting and tax requirements.",
                ],
                afterList: [
                    "Lawful basis: performance of a contract and compliance with legal obligations.",
                ],
            },
            {
                title: "6.6 To protect Hyphen, our members and visitors",
                content: [
                    "We may process information where reasonably necessary to:",
                ],
                list: [
                    "protect the safety and security of our premises, members, guests and staff;",
                    "investigate suspected misconduct;",
                    "enforce membership terms;",
                    "prevent fraud;",
                    "protect legal rights;",
                    "respond to complaints; and",
                    "establish, exercise or defend legal claims.",
                ],
                afterList: [
                    "Lawful basis: legitimate interests and/or compliance with legal obligations.",
                ],
            },
            {
                title: "6.7 Photography and recordings",
                content: ["We may process photographs and recordings for:"],
                list: [
                    "documenting community activities;",
                    "operating events;",
                    "internal records;",
                    "promoting Hyphen and future events; and",
                    "communicating Hyphen\u2019s activities.",
                ],
                afterList: [
                    "Depending upon the circumstances, our lawful basis may be legitimate interests or consent.",
                    "We will take reasonable steps to make attendees aware when organised photography or recording is taking place.",
                ],
            },
            {
                title: "6.8 Website operation and security",
                content: ["Technical information may be processed to:"],
                list: [
                    "provide the website;",
                    "maintain website security;",
                    "diagnose technical problems;",
                    "prevent abuse;",
                    "understand website performance; and",
                    "improve the user experience.",
                ],
                afterList: [
                    "Lawful basis: legitimate interests in operating, securing and improving our website.",
                    "Where cookies or similar technologies require consent under PECR, we will rely upon consent before using them.",
                ],
            },
            {
                title: "6.9 Marketing",
                content: ["We may contact you about:"],
                list: [
                    "Hyphen events;",
                    "membership;",
                    "workshops;",
                    "community activities;",
                    "services;",
                    "announcements; and",
                    "other relevant opportunities.",
                ],
                afterList: [
                    'Where PECR requires consent, we will only send marketing communications where you have consented or where another applicable legal exception, such as the customer "soft opt-in", applies.',
                    "You can unsubscribe from marketing at any time.",
                    "Service communications that are necessary to administer your membership, booking or event attendance are not treated as marketing simply because they are sent electronically.",
                ],
            },
        ],
    },
    {
        id: "7",
        title: "7. Legitimate interests",
        content: [
            "Where we rely upon legitimate interests, those interests may include:",
        ],
        list: [
            "operating Hyphen effectively;",
            "maintaining a private membership community;",
            "improving our services;",
            "maintaining relationships with members;",
            "protecting members, guests and our premises;",
            "preventing misuse or fraud;",
            "promoting Hyphen where permitted;",
            "improving events and programming; and",
            "protecting our legal and commercial interests.",
        ],
        afterList: [
            "Before relying upon legitimate interests, we consider whether the processing is necessary and whether your rights and interests outweigh ours.",
        ],
    },
    {
        id: "8",
        title: "8. Marketing communications",
        content: [
            "We may send electronic marketing communications where permitted under UK law.",
            "Where consent is required, you will be given a clear opportunity to opt in.",
            "Where the UK customer soft opt-in applies, we may contact existing customers or members about our own similar products, services or events provided the legal requirements are satisfied.",
            "You can stop receiving marketing communications at any time by:",
        ],
        list: [
            "using an unsubscribe facility included in the communication;",
            "adjusting available communication preferences; or",
            "contacting us at hello@tcsnetwork.co.uk.",
        ],
        afterList: [
            "We may retain limited information on a suppression list after you unsubscribe so that we can respect your preference and avoid contacting you again accidentally.",
            "Opting out of marketing will not prevent us from sending essential communications relating to an active membership, booking, transaction or other service.",
        ],
    },
    {
        id: "9",
        title: "9. Cookies and similar technologies",
        content: [
            "Our website and third-party services embedded within it may use cookies, local storage or similar technologies.",
            "Cookies are small pieces of information stored on or accessed from your device.",
            "They may be used for purposes including:",
        ],
        subsections: [
            {
                title: "Strictly necessary technologies",
                content: [
                    "These are required for essential website functionality, security or services requested by you.",
                    "Consent may not be required for technologies that are strictly necessary.",
                ],
            },
            {
                title: "Functional technologies",
                content: [
                    "These may remember preferences or improve website functionality.",
                ],
            },
            {
                title: "Analytics technologies",
                content: [
                    "These may help us understand how visitors use our website and how the website performs.",
                ],
            },
            {
                title: "Third-party embedded services",
                content: [
                    "Content embedded from services such as event-booking providers may result in information being transferred to those providers.",
                ],
            },
        ],
        afterList: [
            "Where UK law requires consent before placing or accessing a non-essential cookie or similar technology, we will obtain consent before doing so.",
            "Simply continuing to browse the website will not be treated as consent where active consent is legally required.",
            "You should be provided with a mechanism to accept, reject or manage non-essential cookies where applicable.",
        ],
    },
    {
        id: "10",
        title: "10. Third-party websites and embedded services",
        content: [
            "Our website may contain links to or integrations with third-party services.",
            "These may include, depending upon the services in use:",
        ],
        list: [
            "Luma;",
            "Discord or another community communications provider;",
            "WhatsApp;",
            "Telegram;",
            "Instagram;",
            "Substack;",
            "payment providers;",
            "website hosting or infrastructure providers; and",
            "other service providers used to administer Hyphen.",
        ],
        afterList: [
            "Third-party providers may process personal information under their own privacy policies.",
            "Where we determine how and why personal information is processed, Hyphen remains responsible for complying with applicable data protection requirements.",
            "Where a third-party platform independently determines how it processes your information, it may act as a separate data controller.",
            "You should review the privacy information provided by third-party platforms before using them.",
        ],
    },
    {
        id: "11",
        title: "11. Luma and event bookings",
        content: [
            "Hyphen currently uses Luma to display or administer event information.",
            "When you register for a Hyphen event through Luma, information you provide may be processed by Luma and shared with Hyphen as the event organiser.",
            "This can include information such as your name, contact details and registration information.",
            "Luma may independently collect additional technical or account information in accordance with its own privacy policy.",
            "Where Hyphen receives information from Luma, we will use it for purposes such as:",
        ],
        list: [
            "administering the relevant event;",
            "communicating with attendees;",
            "managing event capacity;",
            "maintaining attendance records; and",
            "complying with legal or administrative requirements.",
        ],
        afterList: [
            "Registering for an event does not automatically mean that you have agreed to receive unrelated electronic marketing from Hyphen.",
        ],
    },
    {
        id: "12",
        title: "12. Community platforms",
        content: [
            "Membership may include access to an online member community hosted by a third-party platform.",
            "When you join such a service:",
        ],
        list: [
            "other members may be able to see your name, username, profile image and content you post;",
            "the platform provider may independently collect device, usage and account information;",
            "information may be hosted outside the United Kingdom; and",
            "your use of that platform will also be subject to the provider\u2019s own privacy policy and terms.",
        ],
        afterList: [
            "Do not share another member\u2019s contact information, posts or private community material outside the community without appropriate permission.",
            "Hyphen may retain limited moderation or conduct records where reasonably necessary to enforce its membership terms and protect the community.",
        ],
    },
    {
        id: "13",
        title: "13. Who we share personal information with",
        content: [
            "We do not sell personal information.",
            "We may disclose personal information where necessary to:",
        ],
        list: [
            "website hosting and infrastructure providers;",
            "event-registration and ticketing providers;",
            "payment processors;",
            "accounting and financial service providers;",
            "community platform providers;",
            "email and newsletter providers;",
            "professional advisers;",
            "contractors and suppliers supporting Hyphen;",
            "event venues or event partners where necessary;",
            "insurers;",
            "regulators;",
            "government authorities;",
            "law enforcement bodies;",
            "courts; or",
            "another organisation in connection with a restructuring, merger, acquisition or transfer of the Hyphen business.",
        ],
        afterList: [
            "We require service providers processing personal information on our behalf to protect information appropriately and only process it in accordance with lawful instructions and applicable agreements.",
        ],
    },
    {
        id: "14",
        title: "14. Information visible to other members",
        content: [
            "Hyphen is built around community interaction.",
            "Information you voluntarily disclose in a member community, workshop, networking event or public discussion may be seen by other attendees or members.",
            "Hyphen cannot control how another individual independently uses information that you choose to disclose to them.",
            "Members are nevertheless expected to respect other members\u2019 privacy and comply with Hyphen\u2019s applicable community rules.",
        ],
    },
    {
        id: "15",
        title: "15. International transfers",
        content: [
            "Some of our service providers may be based outside the United Kingdom or may store or access personal information from other countries.",
            "Countries outside the UK may not provide the same level of legal protection for personal information.",
            "Where UK data protection law requires safeguards for an international transfer, we will take appropriate measures. These may include:",
        ],
        list: [
            "transferring information to a country recognised by the UK as providing adequate protection;",
            "using approved contractual protections, such as the UK International Data Transfer Agreement or UK Addendum where applicable;",
            "relying upon an approved data transfer framework where legally available; or",
            "relying upon another lawful transfer mechanism.",
        ],
        afterList: [
            "You can contact us for further information about safeguards relevant to personal information we process.",
        ],
    },
    {
        id: "16",
        title: "16. How long we retain information",
        content: [
            "We keep personal information only for as long as reasonably necessary for the purposes for which it was collected, including legal, accounting and dispute-resolution requirements.",
            "Retention periods may vary depending on the information involved.",
            "As a general guide:",
        ],
        list: [
            "Membership information: retained during your membership and ordinarily for up to six years afterwards where reasonably required for contractual, tax, accounting or legal purposes.",
            "Transaction and financial records: ordinarily retained for up to six years or for another period required by applicable tax or accounting legislation.",
            "Event registration information: retained for as long as reasonably required to administer the event and deal with subsequent operational or legal matters.",
            "General enquiries: ordinarily retained for up to two years after the enquiry has been resolved unless there is a reason to retain the information for longer.",
            "Marketing records: retained while you remain subscribed or while we otherwise have a lawful basis to contact you.",
            "Marketing suppression information: limited information may be retained after an opt-out in order to ensure that your marketing preference continues to be respected.",
            "Community moderation or conduct records: retained for as long as reasonably necessary to protect the community, administer membership or deal with disputes.",
            "Photographs and promotional media: may be retained while reasonably useful for legitimate archival or promotional purposes unless removal is appropriate or required.",
        ],
        afterList: [
            "At the end of the applicable retention period, personal information will normally be deleted, anonymised or securely destroyed unless continued retention is legally required.",
        ],
    },
    {
        id: "17",
        title: "17. Security",
        content: [
            "We take reasonable technical and organisational measures designed to protect personal information from:",
        ],
        list: [
            "accidental or unlawful destruction;",
            "loss;",
            "alteration;",
            "unauthorised disclosure; and",
            "unauthorised access.",
        ],
        afterList: [
            "Measures may include appropriate access controls, secure systems, restricted permissions, authentication, data minimisation and appropriate arrangements with service providers.",
            "No internet-based service is completely secure, and we cannot guarantee that unauthorised access or disclosure will never occur.",
            "If we become aware of a personal data breach, we will assess and respond to it in accordance with applicable UK data protection requirements, including notification to the Information Commissioner\u2019s Office or affected individuals where required.",
        ],
    },
    {
        id: "18",
        title: "18. Your data protection rights",
        content: [
            "Depending on the circumstances, UK data protection law may give you the following rights.",
        ],
        subsections: [
            {
                title: "Right of access",
                content: [
                    "You can ask whether we process your personal information and request a copy of information we hold about you.",
                ],
            },
            {
                title: "Right to rectification",
                content: [
                    "You can ask us to correct personal information that is inaccurate or complete information that is incomplete.",
                ],
            },
            {
                title: "Right to erasure",
                content: [
                    "In certain circumstances, you can ask us to delete personal information.",
                    "This right is not absolute and does not require us to delete information that we must retain for legal or other permitted reasons.",
                ],
            },
            {
                title: "Right to restrict processing",
                content: [
                    "In certain circumstances, you can ask us to restrict how we use your information.",
                ],
            },
            {
                title: "Right to object",
                content: [
                    "You may have the right to object to processing based on legitimate interests.",
                    "You also have the right to object to the use of your personal information for direct marketing.",
                ],
            },
            {
                title: "Right to data portability",
                content: [
                    "Where applicable, you may be entitled to receive certain personal information you provided to us in a structured, commonly used and machine-readable format and have it transferred to another organisation.",
                ],
            },
            {
                title: "Rights relating to consent",
                content: [
                    "Where our processing is based upon consent, you may withdraw that consent at any time.",
                    "Withdrawal does not make processing that occurred before withdrawal unlawful.",
                ],
            },
            {
                title: "Rights relating to automated decision-making",
                content: [
                    "You may have rights where a decision with legal or similarly significant effects is made solely through automated processing.",
                    "Hyphen does not currently intend to make significant membership decisions solely through automated decision-making without appropriate human involvement.",
                ],
            },
        ],
    },
    {
        id: "19",
        title: "19. How to exercise your rights",
        content: [
            "To make a data protection request, contact: hello@tcsnetwork.co.uk",
            "Please state clearly what you are requesting.",
            "We may need to ask for information reasonably necessary to verify your identity before responding.",
            "There is normally no fee for exercising your data protection rights. However, UK data protection law allows fees or refusal in certain limited circumstances.",
            "We aim to respond within the time period required by applicable data protection legislation.",
        ],
    },
    {
        id: "20",
        title: "20. Complaints",
        content: [
            "If you are concerned about how we use your personal information, please contact us first so that we have an opportunity to investigate the matter.",
            "You also have the right to complain to the UK\u2019s independent data protection regulator:",
            "Information Commissioner\u2019s Office (ICO)",
            "Website: ico.org.uk",
            "You can contact the ICO directly through the contact and complaint methods published on its website.",
            "Your right to complain to the ICO is not affected by first contacting Hyphen.",
        ],
    },
    {
        id: "21",
        title: "21. Children",
        content: [
            "Hyphen is primarily designed as a professional and creative membership community.",
            "We do not knowingly seek to collect personal information from children where it is not necessary.",
            "If a particular event permits attendees under 18, additional information or consent requirements may apply depending upon the nature of the event and the age of the attendee.",
            "If you believe that personal information relating to a child has been provided to us inappropriately, please contact us.",
        ],
    },
    {
        id: "22",
        title: "22. Membership decisions and conduct",
        content: [
            "Hyphen may process information relating to membership applications, complaints, breaches of membership rules, suspensions or membership termination.",
            "Such processing may be necessary to:",
        ],
        list: [
            "administer the membership relationship;",
            "protect members and guests;",
            "maintain the standards of the private community;",
            "investigate complaints;",
            "enforce Hyphen\u2019s Terms and Conditions; or",
            "establish, exercise or defend legal rights.",
        ],
        afterList: [
            "Decisions involving membership may involve human judgement.",
            "Where personal information is relevant to a decision, we will process it in accordance with applicable UK data protection requirements.",
        ],
    },
    {
        id: "23",
        title: "23. Legal claims and regulatory disclosures",
        content: [
            "We may retain or disclose personal information where reasonably necessary to:",
        ],
        list: [
            "comply with law;",
            "respond to a court order;",
            "respond to law enforcement;",
            "comply with regulatory requirements;",
            "establish or defend legal claims;",
            "enforce agreements; or",
            "protect the rights, property or safety of Hyphen, our members, our guests or others.",
        ],
    },
    {
        id: "24",
        title: "24. Changes of ownership",
        content: [
            "If Hyphen or the organisation operating Hyphen is reorganised, acquired, merged or sells part or all of its business or assets, personal information may be disclosed to professional advisers and prospective or actual purchasers where reasonably necessary.",
            "Where responsibility for your personal information changes, appropriate steps will be taken to ensure that applicable data protection obligations continue to be met.",
        ],
    },
    {
        id: "25",
        title: "25. Changes to this Privacy Policy",
        content: [
            "We may update this Privacy Policy from time to time to reflect:",
        ],
        list: [
            "changes to our services;",
            "changes to the technology we use;",
            "changes to third-party providers;",
            "operational changes; or",
            "changes to applicable law or regulatory guidance.",
        ],
        afterList: [
            "The latest version will be published on the Hyphen website with the updated date shown at the beginning of the policy.",
            "Where a change materially affects how we use existing personal information, we will take reasonable steps to bring the change to the attention of affected individuals where required.",
        ],
    },
];

type Subsection = {
    title: string;
    content?: string[];
    list?: string[];
    afterList?: string[];
};

type Section = {
    id: string;
    title: string;
    content?: string[];
    list?: string[];
    afterList?: string[];
    extra?: string[];
    subsections?: Subsection[];
};

function SectionBlock({ section }: { section: Section }) {
    return (
        <section className="border-b border-foreground/10 pb-10">
            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wider mb-6 text-foreground">
                {section.title}
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
                {section.content?.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
                {section.list && (
                    <ul className="list-disc list-outside pl-6 space-y-1.5">
                        {section.list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                )}
                {section.afterList?.map((p, i) => (
                    <p key={`al-${i}`}>{p}</p>
                ))}
                {section.extra?.map((p, i) =>
                    p === "" ? (
                        <br key={`ex-${i}`} />
                    ) : (
                        <p key={`ex-${i}`} className="text-foreground/60 italic">
                            {p}
                        </p>
                    )
                )}
                {section.subsections?.map((sub, i) => (
                    <div key={i} className="mt-6 first:mt-2">
                        <h3 className="text-base sm:text-lg font-semibold tracking-wide text-foreground mb-3">
                            {sub.title}
                        </h3>
                        <div className="space-y-3">
                            {sub.content?.map((p, j) => (
                                <p key={j}>{p}</p>
                            ))}
                            {sub.list && (
                                <ul className="list-disc list-outside pl-6 space-y-1.5">
                                    {sub.list.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {sub.afterList?.map((p, j) => (
                                <p key={`sal-${j}`}>{p}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 px-6 sm:px-12">
                <div className="mx-auto max-w-4xl">
                    <header className="mb-16 border-b border-foreground/10 pb-12">
                        <div className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/60 mb-4">
                            hyphen.tcsnetwork.co.uk
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold uppercase leading-none tracking-tight mb-6">
                            Privacy &amp; Data Protection
                        </h1>
                        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                            This policy explains how we collect, use, store, disclose and
                            protect your personal information.
                        </p>
                        <p className="mt-4 text-sm text-foreground/50">
                            Last updated: 3 September 2026
                        </p>
                    </header>

                    <div className="space-y-12">
                        {SECTIONS.map((section) => (
                            <SectionBlock key={section.id} section={section} />
                        ))}

                        <section className="pb-10">
                            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wider mb-6 text-foreground">
                                26. Contact us
                            </h2>
                            <div className="space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
                                <p>
                                    Questions about this Privacy &amp; Data Protection Policy or
                                    how Hyphen uses personal information should be sent to:
                                </p>
                                <div className="text-foreground/60 italic space-y-1">
                                    <p>Hyphen / hyphen.tcsnetwork.co.uk</p>
                                    <p>[INSERT LEGAL ENTITY NAME]</p>
                                    <p>[INSERT REGISTERED OR BUSINESS ADDRESS]</p>
                                    <p>London, United Kingdom</p>
                                </div>
                                <p>
                                    Email:{" "}
                                    <a
                                        href="mailto:hello@tcsnetwork.co.uk"
                                        className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
                                    >
                                        hello@tcsnetwork.co.uk
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-16 pt-8 border-t border-foreground/10 text-center text-xs text-foreground/40 tracking-widest uppercase">
                        &copy; 2026 Hyphen. All rights reserved.
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
