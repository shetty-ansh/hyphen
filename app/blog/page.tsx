import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 px-6 sm:px-12">
                <div className="mx-auto max-w-3xl">
                    <header className="mb-16">
                        <Link href="/" className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors mb-8 inline-block">
                            ← Back
                        </Link>
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                            The Case for Becoming Several People
                        </h1>
                        <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed mb-6">
                            Why we are launching a Private Members Club for creatives
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 border-t border-foreground/10 pt-6">
                            <span>Mike Omoniyi and The Common Sense Network</span>
                            <span>•</span>
                            <span>Sep 04, 2026</span>
                        </div>
                    </header>

                    <article className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
                        <p>
                            Every official form you will ever complete contains a small box marked occupation, and it is always singular. One line, one answer, one self. Most of us have learned to shrink into that box without noticing that we are doing it, choosing the label that causes the least friction and quietly filing the rest of who we are under hobbies. The box is not a neutral piece of administration. It is a philosophy of the human person, it is roughly two hundred and fifty years old, and it is wrong.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Where the Box Came From</h2>
                        <p>
                            The idea that a person should be one thing has a birthday. When Adam Smith opened The Wealth of Nations in 1776 with his famous pin factory, he was making a case about productivity that turned out to be entirely correct. Ten men who each specialised in one operation could produce forty-eight thousand pins a day, where a single generalist attempting the whole process might manage twenty. Specialisation made us rich, and nobody who enjoys modern medicine or air travel should be sentimental about the world we left behind.
                        </p>
                        <p>
                            What gets quoted far less often is the warning Smith buried in Book V, hundreds of pages later. The man whose whole life is spent performing a few simple operations, he wrote, “has no occasion to exert his understanding or to exercise his invention in finding out expedients for removing difficulties which never occur.” Such a man loses the habit of exertion, Smith concluded, and “generally becomes as stupid and ignorant as it is possible for a human creature to become.” The founding text of market economics contains an unflinching account of what narrow specialisation does to a soul, and we built two centuries of schooling and career design on the first half of the argument while ignoring the second.
                        </p>
                        <p>
                            The institutions that shaped most of us were designed to sort. Choose your options at fourteen, narrow again at sixteen, narrow again at university, then select a lane and remain in it until retirement releases you into a hobby you no longer have the energy for. This machinery was built for an economy that needed reliable components, and it worked well enough while the problems were stable and the answers were known. That economy no longer exists, though the sorting machinery grinds on regardless.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Much Learning</h2>
                        <p>
                            The alternative tradition is older, and the word for it deserves more respect than the LinkedIn version affords it. Polymath comes down to us from the Greek polymathēs, meaning to have learned much, though the concept received its first serious treatment in 1603 when the German scholar Johann von Wowern defined polymathy as knowledge of various matters drawn from all kinds of studies, “ranging freely through all the fields of the disciplines.” The English word arrives in the 1620s. The idea it names had already been in circulation for two thousand years.
                        </p>
                        <img src="/images/article-image-1.webp" alt="Article image 1" className="w-full h-auto rounded-xl my-10" />
                        <p className="italic text-foreground/60 border-l-2 border-foreground/20 pl-4 my-8">
                            The polymath in the age of specialisation - Engelsberg ideas
                        </p>
                        <p>
                            It arrived with an objection attached, which is worth taking seriously. Heraclitus complained that much learning does not teach understanding, and he was pointing at something real. There is a version of range that is simply avoidance, a way of remaining permanently at the shallow end of every pool because the deep end demands something of you. Anyone who has met the man with nine unfinished projects and a new certification each quarter knows the type, and I have been him more than once.
                        </p>
                        <p>
                            The answer to Heraclitus was never an argument. It was a series of people who went out and demonstrated otherwise. Working in the eleventh century, Al-Bīrūnī produced original work in astronomy, geography, mathematics, pharmacology, mineralogy and comparative religion, and calculated the radius of the Earth with an accuracy that ought to embarrass anyone holding a smartphone. His contemporary Ibn Sīnā wrote a medical canon that European universities were still teaching five centuries later, while also doing serious philosophy, logic and astronomy. Neither man was a dabbler. Each went deep in several places and let the depths speak to one another.
                        </p>
                        <p>
                            Renaissance Europe turned that pattern into an ideal and named it the uomo universale, the universal man, resting on the conviction that a person could do all things if they truly willed it. That conviction is the radical part, more so than any individual achievement it produced. The prevailing assumption had been that a man was born into a station and would die in it, that his limits arrived with him at birth and were fixed by God or by blood. The polymaths did something more consequential than learning many subjects. They expanded the boundary of what a human being was permitted to become, and every freedom we now exercise casually was won by people who refused the ceiling they were handed.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Fox and the Hedgehog</h2>
                        <p>
                            There is a line from the Greek poet Archilochus that survives only as a fragment. The fox knows many things, the hedgehog knows one big thing. Isaiah Berlin borrowed it in 1953 to sort the great writers into two temperaments, and the distinction might have remained a literary parlour game had Philip Tetlock not decided to test it.
                        </p>
                        <p>
                            Tetlock spent roughly twenty years collecting political and economic forecasts from hundreds of experts, tens of thousands of predictions in total, then waited to see which came true. His results, published in Expert Political Judgment in 2005, embarrassed a good deal of the professional commentary class. The hedgehogs, who possessed one commanding theory and applied it everywhere, performed poorly, and the more famous they were the worse they tended to do. The foxes, who borrowed from several frameworks, held their conclusions loosely and tolerated contradiction, did measurably better. Range was not a charming personality quirk in that data. It was a predictor of being right.
                        </p>
                        <p>
                            This matters because of the kind of problem now sitting in front of us. In 1973 the design theorists Horst Rittel and Melvin Webber gave a name to problems that resist the standard method, calling them wicked. A wicked problem has no definitive formulation, no stopping rule that tells you when you are finished, no test that proves your solution correct, and every attempt to solve it changes the problem itself. Poverty is wicked. So is radicalisation, so is the design of a city, so is almost everything that actually determines the quality of human life.
                        </p>
                        <img src="/images/article-image-2.webp" alt="Article image 2" className="w-full h-auto rounded-xl my-10" />
                        <p className="italic text-foreground/60 border-l-2 border-foreground/20 pl-4 my-8">
                            Ten futuristic cities set to be built around the world
                        </p>
                        <p>
                            Consider the collapse of public trust in information, which is the problem I have given most of my working life to. It is a technology problem, in that the distribution systems reward outrage. It is an economics problem, in that the business model of attention makes careful work unprofitable. It is a psychology problem, a journalism problem, and underneath all of it a spiritual problem about what people believe they owe to one another and to the truth. A gifted engineer sees one face of it clearly. A gifted theologian sees another. Neither will see the whole, and the person who can hold several faces at once is not a nice addition to the team. That person is the only one doing the actual job.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Authenticity Is Built, Not Excavated</h2>
                        <p>
                            Here is where the popular language lets people down. The culture tells you to find your authentic self, as though it were an object buried in a field, complete and waiting, and the work consisted of locating it. That framing has produced a great deal of expensive misery, because people go looking for a finished self, fail to find one, and conclude that something has gone wrong with them.
                        </p>
                        <p>
                            Kierkegaard understood this better in 1849 than most of what has been written since. The self, he argued, is not a thing you possess. It is a relation, a task, something continuously being constructed through what you choose and what you commit to. Charles Taylor made the modern case in The Ethics of Authenticity, defending authenticity as a genuine moral ideal while dismantling the shallow version of it. A self worth having is formed in dialogue with other people and measured against a horizon of significance, meaning things that matter independently of whether you happen to want them.
                        </p>
                        <p>
                            Put plainly, your authentic self is not a secret. It is a construction project, and every skill you acquire, every discipline you submit to, every room you enter as the least qualified person present, adds material to it. This is why reinvention is not a betrayal of who you are. It is the mechanism by which who you are becomes real. The theological version of this is older still: we are made in the image of a God who creates, which suggests that the creative, generative, world-shaping part of a person is not decoration on top of the human being but the substance of one.
                        </p>
                        <img src="/images/article-image-3.jpg" alt="Article image 3" className="w-full h-auto rounded-xl my-10" />
                        <p>
                            My own life has followed this pattern roughly every few years, and none of it was planned. I went to Manchester on a sports scholarship, and the coaches there taught me things about repetition and discipline that no seminar room ever managed. Later I sang backing vocals for Grammy Award winners and made my own music, which gave me an ear for pacing and for the emotional architecture of a moment. That sounds abstract until you have to structure a documentary or hold a room of two thousand people, at which point it becomes the most practical training I ever received.
                        </p>
                        <p>
                            The websites came from poverty rather than ambition. I had a media company, a set of convictions the country needed to hear, and a quote from a designer that exceeded everything in my bank account, so I taught myself to build the thing. Video editing followed, then colour grading, then the whole unglamorous discipline of running a business. Each one began with a bill I could not pay, and each one turned out to be a way of thinking rather than merely a skill. Ways of thinking compound in a manner that individual skills never do.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Cost, Honestly</h2>
                        <p>
                            None of this is free, so I will not pretend otherwise. Reinvention means being a beginner in public at an age when you are supposed to have arrived. It means enduring the particular discomfort of people who met you as one thing and would prefer you remain it, which they will communicate sometimes gently and sometimes not at all gently. There is real grief in laying down a version of yourself that others loved, and I have felt it every single time.
                        </p>
                        <p>
                            There is also the risk Heraclitus named, which is worth guarding against properly. Range without depth is just noise, a way of being interesting at parties while contributing nothing. The discipline is to go far enough into each thing that it changes how you see, then let the disciplines argue with one another inside you. Al-Bīrūnī was not collecting subjects. He was building an instrument.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Get Out of the Boat</h2>
                        <p>
                            So learn the thing you have been circling for three years. Take the course you have been researching since January, buy the camera, write the terrible first draft, apply for the role you are underqualified for, sit in the room where you understand perhaps forty per cent of what is being said. Faith, in the practical sense, amounts to moving before you can see the whole staircase, and I have yet to regret a single step that frightened me.
                        </p>
                        <p>
                            The world is not short of specialists, and it is not short of opinions. What it lacks are people who can stand between disciplines and translate, who have enough range to see the shape of a wicked problem and enough depth to do something about it. Those people are not born. They are assembled, slowly, out of decisions that looked at the time like detours.
                        </p>
                        <p>
                            You are not finished, which is the best news available to you. The box on the form was always too small. Fill in whichever answer gets you through the afternoon, then go and become the rest of it.
                        </p>
                        <p className="mt-12 font-medium">
                            M.T Omoniyi
                        </p>
                    </article>

                    <div className="mt-16 pt-8 border-t border-foreground/10 text-center">
                        <a href="https://read.tcsnetwork.co.uk/p/the-case-for-becoming-several-people" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-[0.2em] hover:text-foreground/70 transition-colors inline-block">
                            Read Original Post →
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
