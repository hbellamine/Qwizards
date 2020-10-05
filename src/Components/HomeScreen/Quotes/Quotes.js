const quotes = [
        {
            "Number": "0",
            "Quote": "“The Earth itself risking and flourishing by circling around a fierce ball of fire, and you are afraid of taking even small risks.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1",
            "Quote": "“Learn the rules and learn the game, before you start breaking the rules and changing the game. Your education, experience and understanding of what was and what is, will give you the best foundation to change what will be.” ― Loren Weisman, The Artist's Guide to Success in the Music Business: The “Who, What, When, Where, Why & How” of the Steps that Musicians & Bands Have to Take to Succeed in Music"
        },
        {
            "Number": "2",
            "Quote": "“My own business always bores me to death; I prefer other people's.” ― Oscar Wilde"
        },
        {
            "Number": "3",
            "Quote": "“Your customers are responsible for your company’s reason for existing.” ― Marilyn Suttle"
        },
        {
            "Number": "4",
            "Quote": "“Idiocy in the modern age isn't an all-encompassing, twenty-four-hour situation for most people. It's a condition that everybody slips into many times a day. Life is just too complicated to be smart all the time.” ― Scott Adams, The Dilbert Principle: A Cubicle's-Eye View of Bosses, Meetings, Management Fads & Other Workplace Afflictions"
        },
        {
            "Number": "5",
            "Quote": "“If leadership is the way forward, vision is its walking stick.” ― Nkem Paul"
        },
        {
            "Number": "6",
            "Quote": "“The Tech Humanist proposal is to ensure that business objectives and human objectives are as aligned as possible so that as automated experiences scale, they scale human values with them, and a sense of what is meaningful to humans surrounds us.” ― Kate O'Neill, Tech Humanist: How You Can Make Technology Better for Business and Better for Humans"
        },
        {
            "Number": "7",
            "Quote": "“As long as you feel comfortable losing, you will never win!” ― Mrs.Mignon T.Padilla"
        },
        {
            "Number": "8",
            "Quote": "“Customer Romance does not just happen; neither is it dependent on just providing product or service for customers, nor is it a puzzling set of practices. Rather, it occurs as a result of a deliberate, thoughtful plan of action. Companies that are known to provide the best customer experiences have philosophies that guide them to take actions their competitors do not even dream of.” ― J. N. HALM, CUSTOMER ROMANCE: A New Feel of Customer Service"
        },
        {
            "Number": "9",
            "Quote": "“Many business owners talk about their work in terms of features it offers, bit it's much more powerful to talk about the benefits customers receive. A feature is descriptive, a benefit is emotional.” ― Chris Guillebeau, The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future"
        },
        {
            "Number": "10",
            "Quote": "“This long-tail distribution of returns is why it's important to be bold. Big winners pay for so many experiments.” ― Derek Thompson, Hit Makers: Why Things Become Popular"
        },
        {
            "Number": "11",
            "Quote": "“If you take the approach of “earning” your customers’ business every day and treating them well, they’re less likely to try someone else.” ― Marilyn Suttle"
        },
        {
            "Number": "12",
            "Quote": "“If the sale of flesh could be made as easily as the sale of spiritual exemption, the prescience of a dedicated businessman might be well preserved.” ― Michelle Franklin, The Leaf Flute - A Marridon Novella"
        },
        {
            "Number": "13",
            "Quote": "“A bull doesn’t go wrong in predicting an upswing in a falling market. He goes wrong when he predicts a down swing in a rising market.” ― Vijay Kedia"
        },
        {
            "Number": "14",
            "Quote": "“To start anything, you must first be responsible.” ― Meir Ezra"
        },
        {
            "Number": "15",
            "Quote": "“If you are depressed, you are living in the past. If you are anxious, you are living in the future. If you are at peace, you are living in the present.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "16",
            "Quote": "“It has nothing to do with the time being right or wrong. Storms just happen.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "17",
            "Quote": "“There are no perfect decisions, only excellent applications.” ― Todd Stocker, Becoming The Fulfilled Leader"
        },
        {
            "Number": "18",
            "Quote": "“Every time you find fault in order to improve, you actually trap yourself. You think you need to show a person how wrong he is. You think you need to be less forgiving - stronger, tougher. It’s not how it works. You don’t fix people by showing them how broken they are. You fix people by showing them how perfect they are.” ― Meir Ezra"
        },
        {
            "Number": "19",
            "Quote": "“China is a political beast, with the Party at its heart, and the importance of political and regulatory due diligence cannot be overstated.” ― Jeremy Gordon, Risky Business In China. A Guide To Due Diligence"
        },
        {
            "Number": "20",
            "Quote": "“If you want to know how powerful you are, count the times you’ve been punched or whacked by life. This only happens to powerful people.” ― Meir Ezra"
        },
        {
            "Number": "21",
            "Quote": "“The only reason you don’t have something is because you are not willing to have that thing. If you don't have love, you're not willing to have love. If you don't have money, you're not willing to have money.” ― Meir Ezra"
        },
        {
            "Number": "22",
            "Quote": "“Customers are speaking to you implicitly via their behavior, captured in the footprints they leave behind in your systems.” ― Robert G. Thompson, Hooked on Customers: The Five Habits of Legendary Customer-Centric Companies"
        },
        {
            "Number": "23",
            "Quote": "“My passion is to keep my clients permanently satisfied with the quality of my work” ― Benjamin Kofi Quansah"
        },
        {
            "Number": "24",
            "Quote": "“We must always be mindful of who we are being while we are leading.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "25",
            "Quote": "“When kids come on the dance floor it’s time for elders to go to the bed.” ― Vijay Kedia"
        },
        {
            "Number": "26",
            "Quote": "“I’m telling you that responsibly applying time strategy and proactively leveraging your calendar is the dumb ol’ secret to seeing your dreams come true.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "27",
            "Quote": "“Do we really want to realize our greatest aspiration? If we truly want to accomplish our aspirations, then why would we go along a path that goes against them, and leaves us without enough energy to practice and help ourselves and others?” ― Thich Nhat Hanh, Fidelity: How to Create a Loving Relationship That Lasts"
        },
        {
            "Number": "28",
            "Quote": "“Человеческая жизнь разворачивается в соответствии с тем, к чему мы стремимся. Истинный успех достигается тогда, когда человек может полностью раскрыть свои таланты. ” ― Konosuke Matsushita, Not for Bread Alone"
        },
        {
            "Number": "29",
            "Quote": "“If you desire to end your life journey in prison, be greedy, if you desire to end it as a depressed man or woman, be greedy, even if yours it to end it as a fool, just be greedy.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "30",
            "Quote": "“Web design is not just about creating pretty layouts. It’s about understanding the marketing challenge behind your business.” ― Mohamed Saad"
        },
        {
            "Number": "31",
            "Quote": "“You can’t deliver the future, if you’re not in the future.” ― Mack Craft"
        },
        {
            "Number": "32",
            "Quote": "“Take the wrong route sometimes and make fool out of yourself. Laugh at your mess ups because it will all become a funny story one day.” ― Mahyar Mottahed"
        },
        {
            "Number": "33",
            "Quote": "“The choice of a partner is the single most important decision most people will ever make about their businesses. The essential elements of a successful partnership are: a good fit between the partners’ personalities, similar values, the ability to be a team player, compatible goals and clear expectations, and mutual trust and respect.” ― David Gage, The Partnership Charter: How To Start Out Right With Your New Business Partnership"
        },
        {
            "Number": "34",
            "Quote": "“Life doesn't walk away, we do.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "35",
            "Quote": "“A website should be designed such that a visitor should go the cart with confidence and not to your contact page with confusion.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "36",
            "Quote": "“There are three points I used to help a gourmet chocolatier increase sales 300% in a single month as well as a Midwest city to increase tourism guests 500% in 12 months.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "37",
            "Quote": "“Patience is a virtue not a vice.” ― Agu Jaachynma N.E."
        },
        {
            "Number": "38",
            "Quote": "“Selling is a game that requires so much more than the ability to play it.” ― Yuri van der Sluis"
        },
        {
            "Number": "39",
            "Quote": "“All feedback is relevant, even if it's not true.” ― Ford Taylor, Relactional Leadership: When Relationships Collide with Transactions"
        },
        {
            "Number": "40",
            "Quote": "“Business should never be merely transactional -it should be transformational” ― Rasheed Ogunlaru, Soul Trader: Putting the Heart Back into Your Business"
        },
        {
            "Number": "41",
            "Quote": "“In the past, I have bargained myself away, believing that price was more important than cost, quality, reliability, or reputation. In the past, I was clearly wrong.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "42",
            "Quote": "“The Business of Our Firm is Business\" -Donald W. Hudspeth from: \"The Business of America is Business\" -Calvin Coolidge” ― Calvin Coolidge"
        },
        {
            "Number": "43",
            "Quote": "“Damaging the long term health of the workers is not an acceptable business model.” ― Steven Magee"
        },
        {
            "Number": "44",
            "Quote": "“I see what I have to become and I recognise the time it will take.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "45",
            "Quote": "“Quality is the complex concept. Because it means different things to different people, it is highly context-dependent. Just as there is no one automobile to satisfy everyone's needs, so too there is no universal definition of quality. Thus, there can be no single simple measure of social equality acceptable to everyone. To assess or improve software quality in your organization, you must define the aspects of quality in which you are interested, then decide how you are going to measure them. by defining quality in a measurable way, you make it easier for other people to understand your viewpoint and relate your notions to their own. Ultimately, your notion of quality must be related to your business goals. Only you can determine if good software is good business.” ― Barbara Kitchenham"
        },
        {
            "Number": "46",
            "Quote": "“When you create a company culture, you are drawing your lines in the sand for you, first & then for anyone else who does business with you.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "47",
            "Quote": "“The revenue engine is a whole system. It encompasses a diverse set of integrated components, each doing its part to advance the system’s purpose. The engine is not just comprised of marketing and sales— it includes product, accounting, and the underlying technology and data infrastructure required to keep everything flowing. It involves people, tools, workflow, and metrics. Its purpose is to optimize reach, conversion, and expansion of customer spend.” ― Tom Mohr"
        },
        {
            "Number": "48",
            "Quote": "“success, sales, selling, business, successful living, success self improvement, success quotes, success strategies, success in business, success in life, sales effectiveness, sales advice, sales training, personal planning, doing, moving forward, arriving, achieving success, achieving dreams, achieving excellence, achieving mastery, achievement, achievements, achievement and attitude, achievement gap, presentation, reputation,” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "49",
            "Quote": "“I have noticed over the past three years that most African Christians depend on their pastor or preachers for directions in life than their lecturers, politicians and nurses. That tells why most people refuse certain medical priorities with regards to their pastor's messages. I think if every pastor should have entrepreneurial knowledge coupled with spiritual integrity, Africa will shake!” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "50",
            "Quote": "“If someone talks bad about us, we feel bad. If someone talks good about us we feel good. The question is ,Have we given our remote to others for the way we feel? Live your life in your way!!!!!!!!!!!!!!” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "51",
            "Quote": "“Doing business without advertising is like winking at a girl in the dark. You know what you are doing but nobody else does.” ― Steuart Henderson Britt, Marketing Management and Administrative Action"
        },
        {
            "Number": "52",
            "Quote": "“Don't look for the next opportunity. The one you have in hand is the opportunity.” ― Paul Arden, It's Not How Good You Are, It's How Good You Want To Be"
        },
        {
            "Number": "53",
            "Quote": "“Entrepreneur, if you're going to start up, make sure you start up with excellence in mind” ― Onyi Anyado"
        },
        {
            "Number": "54",
            "Quote": "“The marketer’s objective is to grab phone numbers, emails or eyeballs.” ― Trevor Carss"
        },
        {
            "Number": "55",
            "Quote": "“Like blood, money is a blessing that should be shared, but you must be a responsible giver.” ― Injap Sia, Life Principles"
        },
        {
            "Number": "56",
            "Quote": "“One best success comes after their greatest disappointments.” ― Henry Ward Beecher, Life Thoughts Gathered From the Extemporaneous Discourses of Henry Ward Beecher"
        },
        {
            "Number": "57",
            "Quote": "“When I sat down to write, my thought was to share the common issues and concerns that I have seen and experienced through my career. I wanted to then provide a true how-to guide for navigating these challenges.” ― Michael Andersen, A Culture of Predictable Sales: One Sales Manager's Journey"
        },
        {
            "Number": "58",
            "Quote": "“Marketers everywhere subtly reinforce your concerns and doubts – why do you fall for it?” ― Francis Shenstone, The Explorer's Mindset: Unlock Health Happiness and Success the Fun Way"
        },
        {
            "Number": "59",
            "Quote": "“Early to bed, early to rise, work like hell, and advertise” ― Ted Turner"
        },
        {
            "Number": "60",
            "Quote": "“When you fully commit to a goal, the focus of positive energy onto a desired result is like programming a missile to \"lock on\" to a moving target; the missile automatically pursues the target no matter how elusive it becomes. The act of commitment also attracts exciting, new opportunities to your doorstep, leading to dramatic changes in your life.” ― Toni Turner, A Beginner's Guide to Day Trading Online"
        },
        {
            "Number": "61",
            "Quote": "“A gentleman of ambition is aware of the people he wishes to be associated with both socially and commercially. He knows that moving through different levels of society is akin to stepping through different rooms in an enormous house, each door leading to a grander environment than the last. He may, of course, settle for the comfort of any room he reaches. Alternatively, he may continue through successive doors to surround himself with even greater fineries and riches.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "62",
            "Quote": "“When I won the League for the first time in 1993, I didn't want my team to slacken off. The thought appalled me. I was determined to keep advancing, to strengthen our hold on power. I told that 1993 side: 'Some people, when the have a holiday, just want to go to Saltcoats, twenty-five miles along the coast from Glasgow. Some people don't even want to do that. They're happy to stay at home or watch the birds and the ducks float by in the park. And some want to go to the moon.' 'It's about people's ambitions.” ― Alex Ferguson, Alex Ferguson: My Autobiography"
        },
        {
            "Number": "63",
            "Quote": "“Good leaders have vision and inspire others to help them turn vision into reality. Great leaders have vision, share vision, and inspire others to create their own.” ― Roy Bennett"
        },
        {
            "Number": "64",
            "Quote": "“In business, sport, entertainment and beyond an idea is worth next to nothing. The energy, effort, passion, talent, tenacity, strategy, resilience and resourcefulness to see it through and make something of it is worth everything.” ― Rasheed Ogunlaru"
        },
        {
            "Number": "65",
            "Quote": "“Strategy is the highest level of a plan” ― Fritz Shoemaker"
        },
        {
            "Number": "66",
            "Quote": "“Like the weather or bonds between lovers, transformations can never be predicted. All energy transmutes one day or another, in one way or another. Either in its form or composition, or in its position or disposition.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "67",
            "Quote": "“We cannot change what we are not aware of, and once we are aware, we cannot help but change.” ― Sheryl Sandberg, Lean In: Women, Work, and the Will to Lead"
        },
        {
            "Number": "68",
            "Quote": "“I feel like a failure.\" The expression comes so naturally that we forget it is a figure of speech: the language of business applied to the soul.” ― Scott A. Sandage, Born Losers: A History of Failure in America"
        },
        {
            "Number": "69",
            "Quote": "“A friend’s 14-year-old niece was asked by her teacher what she wanted to be when she finished school. The teacher asked her to think hard about it and then get back to him with an answer. She didn’t know what to say to her teacher. A friend, on hearing the girl’s predicament, said: ‘Tell your teacher that, perhaps, the thing you want to be when you leave school hasn’t been invented yet.” ― Ian Sanders, Mash-up!: How to Use Your Multiple Skills to Give You an Edge, Make Money and Be Happier"
        },
        {
            "Number": "70",
            "Quote": "“Continue to grow and consolidate core businesses.” ― Ashwin Muthiah, Chairman, AM International"
        },
        {
            "Number": "71",
            "Quote": "“The problem with your company is not the economy, it is not the lack of opportunity, it is not your team. The problem is you. That is the bad news. The good news is, if you're the problem, you're also the solution. You're the one person you can change the easiest. You can decide to grow. Grow your abilities, your character, your education, and your capacity. You can decide who you want to be and get about the business of becoming that person.” ― Dave Ramsey, EntreLeadership: 20 Years of Practical Business Wisdom from the Trenches"
        },
        {
            "Number": "72",
            "Quote": "“Social responsibility is a fundamentally subversive doctrine\" in a free society, and have said that in such a society, \"there is one and only one social responsibility of business–to use it resources and engage in activities designed to increase its profits so long as it stays within the rules of the game, which is to say, engages in open and free competition without deception or fraud.” ― Milton Friedman, The Ethics Of Competition And Other Essays"
        },
        {
            "Number": "73",
            "Quote": "“The devil is in the terms and conditions.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "74",
            "Quote": "“You don't need followers, you need supporters. Followers wait for you to make it happen. Supporters, see to it that you make it happen. - The Affidavit of Niedria Dionne Kenny” ― Niedria Dionne Kenny"
        },
        {
            "Number": "75",
            "Quote": "“If you try to steal the giant’s lunch, the giant is likely to eat you for lunch.” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "76",
            "Quote": "“No business is than better than the other” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "77",
            "Quote": "“Culture is the organization’s fingerprint.” ― Pearl Zhu, Digital Valley: Five Pearls of Wisdom to Make Profound Influence"
        },
        {
            "Number": "78",
            "Quote": "“Your ideal customer should be attracted to the brand that rests on the fabulous culture you created, but they don’t have to share your personal interests or have the same lifestyle you do.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "79",
            "Quote": "“I think forgiveness is a missing key to corporate success.” ― -Shandel Slaten"
        },
        {
            "Number": "80",
            "Quote": "“Ever since my school days I've always taken a scunner to businessmen. They'll do anything for money. They are, after all, what they used to be called in the good old days; the very dregs of society.\" My master, with a businessman right there in front of him, indulges in tactlessness. \"Oh, have a heart. They arent always like that. Admittedly there's a certain coarseness about them; for there's no point in even trying to be a businessman unless your love for money is so absolute that you're ready to accompany it on the walk to a double suicide. For money, believe you me, is a hard mistress and none of her lovers are let off lightly. As a matter of fact, I've just been visiting a businessman and according to him, the only way to succeed is to practice the 'triangle technique': try to escape your obligations, annihilate your kindly feelings, and geld yourself of the sense of shame. Try-an-geld. You get it? Jolly clever, don't you think?\" \"What awful fathead told you that?” ― Soseki Natsume"
        },
        {
            "Number": "81",
            "Quote": "“Business leaders cultivate vision to unify teams; the teams cultivate business to fulfill the vision.” ― Orrin Woodward"
        },
        {
            "Number": "82",
            "Quote": "“If you cannot explain how it is going to be useful to the customers than don’t bother them with your products? Attractive prices, quality, brand image, durability, etc., everything is secondary, the primary thing is to fit your product in the middle of their need.” ― Shahenshah Hafeez Khan"
        },
        {
            "Number": "83",
            "Quote": "“Stop minding other people's business. What they are thinking about you is their business. Don't mind it. Be focused.” ― Israelmore Ayivor, Let's go to the Next Level"
        },
        {
            "Number": "84",
            "Quote": "“Fear of failure is closely connected with the apprehension of failure in any field of life, such as career, business, education of private life” ― Sunday Adelaja"
        },
        {
            "Number": "85",
            "Quote": "“Happiness of employees is important for the health of any business.” ― Arshad Wahedna"
        },
        {
            "Number": "86",
            "Quote": "“Moves and countermoves are not quite strategic” ― Fritz Shoemaker"
        },
        {
            "Number": "87",
            "Quote": "“When we allow negative messages to fester in our head, they take on a life of their own.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "88",
            "Quote": "“Focus on your goals, work hard and finish what you have started.” ― Aurora Berill"
        },
        {
            "Number": "89",
            "Quote": "“Isn’t it obvious to an organization when a promise is becoming less meaningful to consumers? Couldn’t those organizations that did not successfully shift ahead see that consumers were losing interest? Sure, on Monday night everyone’s a professional quarterback and can tell you which of Sunday’s football plays were foolish, or made for the turning point in the game. Hindsight is always twenty-twenty. It’s foresight, seeing the red flags in advance of the risks, that makes the difference on the road to success. And, so before we get to anything else associated with the process of being able to shift ahead, we get to the red flags.” ― Allen Adamson, Shift Ahead: How the Best Companies Stay Relevant in a Fast-Changing World"
        },
        {
            "Number": "90",
            "Quote": "“In 2008, when almost every other investor got crushed, and even the Wall Street 'experts' were down by almost half, I was up 17 percent - beating the S&P Average by over 50 percent. Reminiscences of a Stock Market Flea” ― James J. Houts"
        },
        {
            "Number": "91",
            "Quote": "“Entrepreneurs are different beasts. Beasts who don’t give a damn, who kick ass when required, who stand up to a challenge, and who rise time and again with utter disregard to fear or failure. These are the beasts who run the world.” ― Vishwas Mudagal, Losing My Religion"
        },
        {
            "Number": "92",
            "Quote": "“CRM doesn't have to be hard, if you plan for how all the pieces will work together BEFORE you start your implementation.” ― Lars Helgeson"
        },
        {
            "Number": "93",
            "Quote": "“Every time you invite a candidate to interview, you should expect to be interviewed, too.” ― Stacy Feiner, Talent Mindset"
        },
        {
            "Number": "94",
            "Quote": "“I want you to start realising how far away you are from being able to listen professionally.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "95",
            "Quote": "“Ratios matter in Data Science. Dreams should be big and worries small.” ― Damian Mingle"
        },
        {
            "Number": "96",
            "Quote": "“[My parents] always seemed less like lovebirds than like amiable business partners, for whom I'm the sole product.” ― Gayle Forman, Just One Day"
        },
        {
            "Number": "97",
            "Quote": "“Currently, you are approaching each opportunity with a single possible outcome and when that doesn't happen you fool yourself that there was nothing more that you could have done.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "98",
            "Quote": "“If you want to sustain excellence over a long time, you'd better come up with a system that works well. Anyone can sprint for a little while, but you can't sprint for forty years.” ― Michael Dell"
        },
        {
            "Number": "99",
            "Quote": "“When you depersonalize abrasive behavior and see it as a call for help you become a catalyst for the best kind of change.” ― Marilyn Suttle"
        },
        {
            "Number": "100",
            "Quote": "“When I was a child, I used to wonder why markets in my locality were all situated near the main roads. I grew up a little to get the answer; \" that business minded people can meet there easily!\" Your dream must be situated where they can meet people!” ― Israelmore Ayivor"
        },
        {
            "Number": "101",
            "Quote": "“Wal-Mart is so large, its reach so great, that it has created an ecosystem in which its suppliers and competitors, and their suppliers and competitors, and their customers, all operate. Wal-Mart sets the metabolism, it sets the rules, of that ecosystem. Wal-Mart has inexorably changed our expectations as shoppers—and the Wal-Mart effect also extends to consumers who never shop at Wal-Mart. Likewise, Wal-Mart has reshaped the companies that supply it—and it has also reset the pace and the competitive landscape even for companies that try to do business outside the Wal-Mart ecosystem.” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "102",
            "Quote": "“The path to innovation begins with curiosity” ― Robert Iger, The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
        },
        {
            "Number": "103",
            "Quote": "“The trouble is that for too long, business has been run by the wrong sort of pirates” ― Sam Conniff Allende, Be More Pirate: Or How to Take On the World and Win"
        },
        {
            "Number": "104",
            "Quote": "“Pray GOD by HEART, Not by HABIT.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "105",
            "Quote": "“Success is nothing if you don't have the right people to share it with; you're just gonna end up Lonley.” ― selena gomez"
        },
        {
            "Number": "106",
            "Quote": "“The on-brand execution of best practices tailored to your unique audience is what leads to the best execution.” ― Chad White, Email Marketing Rules"
        },
        {
            "Number": "107",
            "Quote": "“A business is like an automobile. Its people its wheels, their passion its fuel.” ― Ajeet Sharma, Three Marketeers"
        },
        {
            "Number": "108",
            "Quote": "“Ah yes, the joys of free enterprise, which is never free of anything be it taxes, bills, or stress.” ― E.A. Bucchianeri, Vocation of a Gadfly"
        },
        {
            "Number": "109",
            "Quote": "“the prudent business mind must not only think of competing with the prevailing giants in the market but must also not be oblivious of the latent deft of the masses who are yet to dare” ― Ernest Agyemang Yeboah"
        },
        {
            "Number": "110",
            "Quote": "“An entrepreneur without funding is a musician without an instrument.” ― Robert A. Rice Jr."
        },
        {
            "Number": "111",
            "Quote": "“Only move forward with creating a product that will be \"above the bar.” ― Brian Lawley, Optimal Product Process"
        },
        {
            "Number": "112",
            "Quote": "“Confidence, like art, never comes from having all answers.It comes from being open to all questions.” ― Earl Gray Stevens"
        },
        {
            "Number": "113",
            "Quote": "“Social Media begins with a story - your story.” ― Germany Kent"
        },
        {
            "Number": "114",
            "Quote": "“To be honest, I’ve always made films and I never really stopped, starting with little stop-motion experiments using my dad’s Super 8 camera. In my mind, it’s all one big continuum of filmmaking and I’ve never changed.” ― Christopher J. Nolan"
        },
        {
            "Number": "115",
            "Quote": "“If the strategy is designed to attain breakthrough marketplace leadership, it can't merely anticipate and adapt to industry change. Instead, the strategy must be designed to drive and direct the process of change, a bold goal.” ― Liam Fahey, Learning from the Future: Competitive Foresight Scenarios"
        },
        {
            "Number": "116",
            "Quote": "“The more you engage and connect, the more engagement and connections you will have.” ― Loren Weisman"
        },
        {
            "Number": "117",
            "Quote": "“An entrepreneur in debt is an entrepreneur in business.” ― Duncan Bannatyne, Anyone Can Do It"
        },
        {
            "Number": "118",
            "Quote": "“Love wins when reflections win over reflexes.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "119",
            "Quote": "“When I see an arrogant man, I see one less competitor.” ― Amit Kalantri"
        },
        {
            "Number": "120",
            "Quote": "“The reason why you don´t have success is, because you don´t understand the difference between wasting and spending time.” ― Alin Sav"
        },
        {
            "Number": "121",
            "Quote": "“Delete, delegate, de-spec, and defer.” ― Shu Hattori, The McKinsey Edge: Success Principles from the World's Most Powerful Consulting Firm"
        },
        {
            "Number": "122",
            "Quote": "“Practice does not make perfect. Perfect practice makes perfect.” ― Vince Lombardi"
        },
        {
            "Number": "123",
            "Quote": "“To make a perfect Business Follow Up Email Check out some useful sample of emails made by Reply up it will definitely improve your sales or business.” ― Reply Up"
        },
        {
            "Number": "124",
            "Quote": "“Make sure that some aspects of your ideal day show up every day for you in business and in life.” ― David J. Greer, Wind In Your Sails"
        },
        {
            "Number": "125",
            "Quote": "“Your team comes first! It’s not your team’s job to adapt to you, it’s your job to adapt to them. You are as strong as the team you surround yourself with. They will be the reason you succeed, but they won’t be the reason you fail. -- Dr. Hitesh Tolani CEO AND FOUNDER, VIRTUDENT” ― Christina D. Warner, The Art of Healthcare Innovation: Interviews and Industry Insights from 35 Game-Changing Pioneers"
        },
        {
            "Number": "126",
            "Quote": "“In order to lose you must first have. ” ― Meir Ezra"
        },
        {
            "Number": "127",
            "Quote": "“ASSOCIATE WITH WINNERS Four groups of people will dramatically influence how your business evolves: » Customers » Employees » Vendors » Peers Line yourself up with the wrong people in each category and, like a poorly created bonsai tree, your business will grow up twisted and misshapen.” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "128",
            "Quote": "“Karma is the balance sheet of life which debits and credit all your deeds.YourWhich is audited by our creator and actions are based on what we accumulated in it.” ― Abhishek S, KARMA"
        },
        {
            "Number": "129",
            "Quote": "“God is never tired of bringing the sun out every morning, taking it in the evenings and bringing out the moon.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "130",
            "Quote": "“Business planning is better if a team of key stakeholders meets regularly to discuss and evaluate their marketplace assumptions.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "131",
            "Quote": "“Circular Strategy allows for betterment” ― Fritz Shoemaker"
        },
        {
            "Number": "132",
            "Quote": "“I’ve learned that the long-game is the shortcut.” ― Richie Norton"
        },
        {
            "Number": "133",
            "Quote": "“You need a formal business reinvention process. Put it in your calendar. Every three months, take your most trusted advisers, employees, backers, and even customers and get away from the phones for a little while. Start from scratch. “If we were starting over—no office, no employees, no customers—would we choose to be where we are today?” If the answer isnʼt, yes, then itʼs time to take a hard look at the path you took and the impact it has had on your business.” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "134",
            "Quote": "“So it comes down to scarcity, one product or service having qualities you won’t find everywhere or ideally, anywhere. It’s the job of every brand to seek that out as their standard, their stamp.” ― David Brier"
        },
        {
            "Number": "135",
            "Quote": "“There is no such thing as positive thinking. Thinking is a substitute for knowing and is always negative.” ― Meir Ezra"
        },
        {
            "Number": "136",
            "Quote": "“Because discipline is misunderstood or not as valued as it has been, the United States—and some might argue the world—is experiencing a cultural leadership crisis.” ― John Manning, The Disciplined Leader: Keeping the Focus on What Really Matters"
        },
        {
            "Number": "137",
            "Quote": "“Invite your Data Science team to ask questions and assume any system, rule, or way of doing things is open to further consideration.” ― Damian Mingle"
        },
        {
            "Number": "138",
            "Quote": "“Trying to think of startup ideas doesn't merely yield few good ideas; it yields bad ideas that sound plausible enough to fool you into working on them.” ― Paul Graham"
        },
        {
            "Number": "139",
            "Quote": "“The doors closed behind him, and Kelvin was swallowed into the elevator shaft that took him back down to the belly of his self-made monster.” ― Mandy Ashcraft, Small Orange Fruit"
        },
        {
            "Number": "140",
            "Quote": "“It might come a time to not follow your passion, so to speak, although it must be prioritized. It may be the case that your passion will serve as the medic, your peace of mind, alongside a higher calling, with your higher calling being the point man.” ― Criss Jami, Healology"
        },
        {
            "Number": "141",
            "Quote": "“Sales is not about selling anymore, but about building trust and educating.” ― Siva Devaki"
        },
        {
            "Number": "142",
            "Quote": "“Punishment demotivates when it comes from people rather than a system of well-defined rules” ― Yegor Bugayenko, Code Ahead: Volume 1"
        },
        {
            "Number": "143",
            "Quote": "“Những kẻ không độc quyền thường nói dối ngược lại: \"Chúng tôi đang trong cuộc chơi của chính mình\". Doanh nhân luôn bị định kiến là xem nhẹ quy mô sự cạnh tranh, nhưng đó chính là lỗi lớn nhất mà một doanh nghiệp khởi nghiệp mắc phải. Sai lầm chết người là xem thị trường của bạn cực hẹp để bạn có thể thống trị nó.” ― Peter Thiel, Zero to One: Notes on Startups, or How to Build the Future"
        },
        {
            "Number": "144",
            "Quote": "“Logic and reason are the naphthalene balls we use to pack them away into a sandook called 'Someday'. But when that day comes we are too old, too poor, too tired or too lazy.” ― Rashmi Bansal, Stay Hungry Stay Foolish"
        },
        {
            "Number": "145",
            "Quote": "“A great sense of commitment builds a hardworking spirit.” ― Wayne Chirisa"
        },
        {
            "Number": "146",
            "Quote": "“Sometimes disruptive innovation is just messy and doesn’t pan out as anticipated. It's nobody’s fault.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "147",
            "Quote": "“The pitch we used to convince companies to spend $50 million bucks for one of our planes was that it wasn't simply a means of transportation; oh no - it was 'a productivity tool'. It allowed an executive to make good use of his travel time and a relaxed and refreshed executive could seal the deal much more effectively than his travel-worn counterpart. Yeah, right. You can always justify any obscene luxury on the grounds of productivity...” ― Joseph Finder, Power Play"
        },
        {
            "Number": "148",
            "Quote": "“MARKETING is not just a department, It is a CULTURE” ― Laeeq Peeran"
        },
        {
            "Number": "149",
            "Quote": "“Your comfort zone is a place where you keep yourself in a self-illusion and nothing can grow there but your potentiality can grow only when you can think and grow out of that zone.” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "150",
            "Quote": "“When you can fully see another person’s viewpoint, you will never need to resist it.” ― Meir Ezra"
        },
        {
            "Number": "151",
            "Quote": "“Conform to the enemy's tactics until a favorable opportunity offers; then come forth and engage in a battle that shall prove decisive.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "152",
            "Quote": "“When You Aim for a Change, the Profits Follow & Therein Lies the Difference for a True Entrepreneur.” ― Dr. Mir Shahid Satar"
        },
        {
            "Number": "153",
            "Quote": "“In a sense, discouragement does not have to exist. Allow it to be rather the encouragement to honestly reconsider all the options, then, as necessary, shine on.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "154",
            "Quote": "“The current dynamic is a power struggle where brands and teams, leagues, coaches, and agents basically have the mindset that they are the saviors to athletes, instead of presenting themselves as they truly are; a springboard for athletes to showcase their abilities.” ― Michael McGinnis, GPS Guide for Athletes and Those Who Surround Them: How to Empower Your Sports Goals, Navigate the Process, and Steer Toward Success"
        },
        {
            "Number": "155",
            "Quote": "“Raise your hand if your calendar ever makes you feel the need for an oxygen mask!” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "156",
            "Quote": "“Your business values can make you soar above the competition.” ― Doris Perdue-Johnson"
        },
        {
            "Number": "157",
            "Quote": "“You’ve been brainwashed to only look at your losses.” ― Meir Ezra"
        },
        {
            "Number": "158",
            "Quote": "“Inspiring leadership communication is not about great oratory or great charisma; rather it is about getting others to believe in themselves and believe in your cause, and then achieve more than they thought was possible.” ― Kevin Murray"
        },
        {
            "Number": "159",
            "Quote": "“...[D]ivision of labor, in my mind, is one of the dangers of work-based technology. Modern IT infrastructure allows us to break projects into very small, discrete parts and assign each person to do only one of the many parts. In so doing, companies run the risk of taking away employees' sense of the big picture, purpose, and sense of completion.” ― Dan Ariely, The Upside of Irrationality: The Unexpected Benefits of Defying Logic at Work and at Home"
        },
        {
            "Number": "160",
            "Quote": "“It's weird that some people are famous overnight, and others have to wait several years.” ― Chris TDL"
        },
        {
            "Number": "161",
            "Quote": "“Failure is not an option but it is constantly a possibility. You manage your success by managing both the technical and the social risk.” ― Dr. Dragos, Engineering Success: The True Meaning of Leadership and Team Building"
        },
        {
            "Number": "162",
            "Quote": "“Another segment of society that has constructed a language of its own is business. People in business say that toner cartridges are in short supply, that they have updated the next shipment of these cartridges, and that they will finalize their recommendations at the next meeting of the board. They are speaking a language familiar and dear to them. Its portentous nouns and verbs invest ordinary events with high adventure; executives walk among toner cartridges, caparisoned like knights. We should tolerate them--every person of spirit wants to ride a white horse.” ― William Strunk Jr., The Elements of Style"
        },
        {
            "Number": "163",
            "Quote": "“Capitalize on charm by continually captivating your customer.” ― Ryan Lilly"
        },
        {
            "Number": "164",
            "Quote": "“In the end, you will realize most friendship is feigning, most loving mere folly.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "165",
            "Quote": "“People do not become entrepreneur; it is the matter of hustle they make physical, mental and social.” ― Deeksha Arora"
        },
        {
            "Number": "166",
            "Quote": "“Marketers are focused and sales people are scattered!” ― johd di lemme"
        },
        {
            "Number": "167",
            "Quote": "“You’ve got to get your team to not only understand your company brand, but also to understand their personal brand.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "168",
            "Quote": "“Worship is the marriage of two Spirits - the Spirit of God and the Spirit of man.” ― Jaachynma N.E. Agu"
        },
        {
            "Number": "169",
            "Quote": "“Even when the economy isn’t doing so well, people will still need good products and services. When you build a business around products and services that people will always need, then find innovative ways to let it run on autopilot while you grow it, then that’s a sure recipe for wealth.” ― Kevin J. Donaldson"
        },
        {
            "Number": "170",
            "Quote": "“Artists, as a rule, understand nothing about business, or, for some reason or other, they aren’t allowed to understand anything about it.” ― Robert Walser, The Walk"
        },
        {
            "Number": "171",
            "Quote": "“Businesspeople are like sharks, not just because we're gray and slightly oily, or because our teeth trail the innards of those we have eviscerated, but because we must move forward or die. ” ― Stanley Bing"
        },
        {
            "Number": "172",
            "Quote": "“Only a youth who does not know his or her worth will allow a politician to use him or her in a negative way.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "173",
            "Quote": "“Don't copy. Create.” ― Joe Calloway, Indispensable: How to Become the Company That Your Customers Can't Live Without"
        },
        {
            "Number": "174",
            "Quote": "“Of more angst to drivers are the customer ratings systems imposed by the app companies. While most drivers do not have a problem with the notion of being rated, they are concerned that they will receive poor marks for circumstances beyond their control. Customers can give even the most earnest drivers bad ratings for any reason such as bumpy rides over pothole strewn roads, traffic congestion and passengers underestimating how much time they need to reach their destinations. Miscommunication between passengers and drivers can occur because passengers cannot speak the local language, are drunk, or fall asleep and cannot direct the driver to their remote destinations. Perhaps some passengers just do not like the ethnic group to which some drivers appear to belong. Circumstances such as these are clearly the fault of passengers who may rate drivers poorly nonetheless. Drivers with low ratings can be expelled from on-demand taxi services. This unfairness is compounded to the extent that drivers make large investments in their cars, insurance and fuel. Making drivers, who basically invested in a franchise, vulnerable to expulsion from a system because of unfair ratings seems to me to be a potential source of dissention or even litigation. Another concern associated with the taxi app business model is that drivers only have 15 seconds to respond to notices of pick up opportunities. Drivers that fail to respond in such tight windows lose the business. Repeat failures to make timely responses can result in temporary suspensions. This pressure, and related distractions associated with interacting with handsets, is applied simultaneously with all of the challenges of navigating traffic in a variety of weather conditions. Foremost, this is a driving hazard that imperils everyone in the vicinity. It also ties in with the ratings systems because drivers are only rated on the rides they complete. Drivers who claim rides but abandon the customer if it looks like the pickup will be delayed have no ratings risk. Paradoxically, no ratings result in the worst customer service as passengers end up stranded.” ― David Wanetick, Business Model Validation"
        },
        {
            "Number": "175",
            "Quote": "“We’re starting to see a renaissance of investors embracing the idea that scientists can build businesses” ― Ryan Bethencourt"
        },
        {
            "Number": "176",
            "Quote": "“There is enough dough in the world to make bread for us all to eat together.” ― Habeeb Akande"
        },
        {
            "Number": "177",
            "Quote": "“If you can't say it to their face, don't say it behind their backs. Speaking \"in confidence\" has lost a great deal of \"confidence\" in that being true these days. With the ears and recording devices out there that are looking for you to... slip something out for them to use against you... share something you shouldn't... Say something that could be taken the wrong way... Or some one looking to get a sound byte that could bite you in the rear... It is good to keep those elements in mind as you are talking, texting, emailing, posting or sharing anything and everything. Think of it as preventative maintenance and crisis management to keep a crisis from happening.” ― Loren Weisman"
        },
        {
            "Number": "178",
            "Quote": "“You need to be doing fewer things for effect instead of doing more things with side effects” ― Gary Keller, The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results"
        },
        {
            "Number": "179",
            "Quote": "“An economist doesn't know how to make money, but he claims to know what to do with it once someone else makes money.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "180",
            "Quote": "“A good negotiator flatters the seller not the product.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "181",
            "Quote": "“Knowledge is power is time is money.” ― Robert Thier, Storm and Silence"
        },
        {
            "Number": "182",
            "Quote": "“Japanese universities have a chair system that is a fixed hierarchy. This has its merits when trying to work as a laboratory on one theme. But if you want to do original work you must start young, and young people are limited by the chair system. Even if students cannot become assistant professors at an early age they should be encouraged to do original work. ...Industry is more likely to put its research effort into its daily business. It is very difficult for it to become involved in pure chemistry. There is a need to encourage long-range research, even if we don't know its goal and if its application is unknown.” ― Kenichi Fukui"
        },
        {
            "Number": "183",
            "Quote": "“War is the most profitable business on earth” ― Kenneth Eade, Beyond All Recognition"
        },
        {
            "Number": "184",
            "Quote": "“There is a mistake technical and scientific people make. We think that if we have made a clever and thoughtful argument, based on data and smart analysis, then people will change their minds. This isn't true. If yoy want to change people's behavior, you need to touch their hearts, not just win the arguments. We call this the Oprah Winfrey rule.” ― Eric Schmidt"
        },
        {
            "Number": "185",
            "Quote": "“Knowing the man responsible for your success is in the mirror is a high that you can never buy” ― Desmond Ong, Against All Odds: Secrets Of Starting At 15, Achieving Million Dollars Sales & Financial Freedom Before 21"
        },
        {
            "Number": "186",
            "Quote": "“Everyone is either building an audience or being an audience these days. Someone, somewhere in the world is thinking up content that will appeal to you as you read this. You are someone’s target audience.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "187",
            "Quote": "“Don’t lose track of your actual goals while you focus on methods.” ― Vishal Ostwal, Pocket Productivity: A Simplified Guide to Getting More Outcomes from Your Hard Work and Giving Your Hustle a Meaning"
        },
        {
            "Number": "188",
            "Quote": "“Take advantage of losing your job by making it an opportunity to find a better one..” ― Hassan Choughari"
        },
        {
            "Number": "189",
            "Quote": "“If someone were to ask 'us', \"Have you incurred a loss this year?\" Then 'we' would answer, \"No sir, we have not incurred a loss, the business has incurred a loss!\" And when a profit is made, 'we' say, \"The business has made a profit.\" 'We' never have a profit or loss.” ― Dada Bhagwan"
        },
        {
            "Number": "190",
            "Quote": "“Year Zillion “What is your contribution to society?” “I mind my own business and I always know when to shut the fuck up.” **Gets Nobel Prize** If two people are happy together, just leave them alone.” ― Eyden I., Kiss Friendzone Goodbye"
        },
        {
            "Number": "191",
            "Quote": "“Too often entrepreneurs are reactive to the challenges inherent when building a company... the most successful founders are proactive.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "192",
            "Quote": "“Our role as business leaders is to understand the strategic implications of digital transformation, lead the way forward and implement our vision for the future of our businesses and their contribution to the communities we support through our activities.” ― António Belo Santos, Cyber Economics: Digital Resources are Changing the World"
        },
        {
            "Number": "193",
            "Quote": "“If your expenditure brings you poverty, then you may call yourself a poor but the world will call you a fool.” ― Amit Kalantri"
        },
        {
            "Number": "194",
            "Quote": "“Take the time to vet the source before you make it a resource.” ― Loren Weisman"
        },
        {
            "Number": "195",
            "Quote": "“If our condition were truly happy we should not need to divert ourselves from thinking about it. (12)” ― Blaise Pascal, Human Happiness"
        },
        {
            "Number": "196",
            "Quote": "“You can practice your grumpy face a million times, you can make a dog surf, you can explode in laughter like Chewbacca mom, and still not “go viral”. You can, however, secure incredibly valuable exposure by spending more time on distribution.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "197",
            "Quote": "“It's not what you do, but what you appear to do.” ― James Pritchert"
        },
        {
            "Number": "198",
            "Quote": "“Time, energy and money. These should never be compromised.” ― Dee Dee Artner"
        },
        {
            "Number": "199",
            "Quote": "“Exponential business growth comes from personal development.” ― Richie Norton"
        },
        {
            "Number": "200",
            "Quote": "“Strive not to be a success, but rather to be of value.” ― Albert Einstein"
        },
        {
            "Number": "201",
            "Quote": "“Live by design, not by default.” ― Aaron Sansoni"
        },
        {
            "Number": "202",
            "Quote": "“Bringing an idea to life isn’t easy. It requires passion, patience, and, most importantly, the ability to execute.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "203",
            "Quote": "“Whatsa mattah allee time talkee talk bear business? Me no savvee bear business. You no like this Gloddam show, you go somewhere else.” ― Charles G. Finney, The Circus of Dr. Lao"
        },
        {
            "Number": "204",
            "Quote": "“Don’t tell me you’re passionate about your job – show me that you’re passionate about helping people like me.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "205",
            "Quote": "“If you are scared to share your idea by thinking others will still it; then it might not be a good idea.” ― Surya Raj"
        },
        {
            "Number": "206",
            "Quote": "“Don't give in to FOMO. Wherever you are in your journey, own it, embrace it, and grow a life that you define.” ― Stayce Wagner"
        },
        {
            "Number": "207",
            "Quote": "“Our customers are not our competitors. We compete for them, not with them.” ― T Jay Taylor"
        },
        {
            "Number": "208",
            "Quote": "“Some people applaud my no nonsense approach to life. Others say my methods are “extreme”. Where I’m headed and how I get there is between me and my God. So, if you don’t know where I’m going, how can you suggest I’m taking things too far?” ― Carlos Wallace"
        },
        {
            "Number": "209",
            "Quote": "“When Opportunity meets Preparation she greets her with open arms and they both say in unison, \"Let's do this!” ― Sanjo Jendayi"
        },
        {
            "Number": "210",
            "Quote": "“This world is a place of business. What an infinite bustle! I am awaked almost every night by the panting of the locomotive. It interrupts my dreams. There is no sabbath. It would be glorious to see mankind at leisure for once. It is nothing but work, work, work. I cannot easily buy a blank-book to write thoughts in; they are commonly ruled for dollars and cents. An Irishman, seeing me making a minute in the fields, took it for granted that I was calculating my wages. If a man was tossed out of a window when an infant, and so made a cripple for life, or scared out of his wits by the Indians, it is regretted chiefly because he was thus incapacitated for—business! I think that there is nothing, not even crime, more opposed to poetry, to philosophy, ay, to life itself, than this incessant business.” ― Henry David Thoreau, Life Without Principle"
        },
        {
            "Number": "211",
            "Quote": "“Conversion of time has changed the stories of businesses” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "212",
            "Quote": "“It is easier for a camel to go through the eye of a needle than for the visibly impressed to conduct a profitable deal.” ― Yanko Tsvetkov, Sex, Drugs and Tales of Wonder"
        },
        {
            "Number": "213",
            "Quote": "“No matter how big a company is, one has to always look at business basics.” ― Tarun Sharma"
        },
        {
            "Number": "214",
            "Quote": "“Design is not really a way for me to express myself. Design is a product that we produce for a client.” ― Peleg Top"
        },
        {
            "Number": "215",
            "Quote": "“You cannot grant beingness to those things you are not communicating with, and so you become the effect of those things you are not in communication with.” ― Meir Ezra"
        },
        {
            "Number": "216",
            "Quote": "“... the language we use is insightful. When we say we are paying attention to something, we are recognizing that attention comes at a cost.” ― Kory Kogon, Adam Merrill & Leena Rinne"
        },
        {
            "Number": "217",
            "Quote": "“If your first reaction is to feel insulted & belittled by constructive criticism or the word no... you may not have the best foundation in place for starting or maintaining your own business. Constructive criticism can help more than you might realize... if you can put your ego aside and take the help from those that have the authority and knowledge to assist you.” ― Loren Weisman"
        },
        {
            "Number": "218",
            "Quote": "“Content sparks our connections with others, our own selves, and the world. What we decide to share is a powerful expression of where we stand and where we want to go. An essential part of the human spirit, this constant information sharing is what ultimately builds the bridges between us. Every image, text, sound, or video that you have released into the world carries a part of you that others can relate to. If actions reveal our priorities, the content we share explains them.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "219",
            "Quote": "“The bottom line was that it was an excellent Return on Human Capital Employed (RoHCE)” ― Fritz Shoemaker"
        },
        {
            "Number": "220",
            "Quote": "“Customers have a first moment when they discover your brand. If you were to look at it today with a fresh pair of eyes, in fact only through a pair of fresh customer eyes and witness your brand for the very first time, what would you see? What impression would make? Or fail to make? Would your brand blend in? Would it stand out? Would it be memorable, or the leading cause of amnesia amongst shoppers everywhere? Facing the truth of this and fixing it as needed will determine whether your brand thrives or merely stumbles along.” ― David Brier, Great Type & Lettering Designs"
        },
        {
            "Number": "221",
            "Quote": "“When success is your only option, positivity has to be your only choice.” ― Germany Kent"
        },
        {
            "Number": "222",
            "Quote": "“The truth is that as you are building your small business, still that small business needs to experience some form of increase and growth” ― Sunday Adelaja"
        },
        {
            "Number": "223",
            "Quote": "“My taste for life is different. And, it’s always been that way.” ― Jill Telford"
        },
        {
            "Number": "224",
            "Quote": "“You can't found a brand or business until after you lay your foundation first as it starts with your creative process that lays the foundation for your brand to be built on” ― James D. Wilson"
        },
        {
            "Number": "225",
            "Quote": "“Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "226",
            "Quote": "“Do not let FEAR stifle your growth!” ― Emily Horabik, Comfort Zone Correction: Unfiltered True Stories in Successful Selling"
        },
        {
            "Number": "227",
            "Quote": "“He has the power to render us happy or unhappy, to make our service light or burdensome, a pleasure or a toil. Say that his power lies in words and looks, in things so slight and insignificant that it is impossible to add and count 'em up; what then? The happiness he gives is quite as great as if it cost a fortune.” ― Charles Dickens, A Christmas Carol and Other Christmas Writings"
        },
        {
            "Number": "228",
            "Quote": "“Since money is the result of created ideas that people desire, and since ideas and desires are made in the mind, you will have as much as you control your mind.” ― Meir Ezra"
        },
        {
            "Number": "229",
            "Quote": "“Quando nosso propósito como marca está alinhado aos valores e sonhos de nossos clientes, a mágica acontece.” ― Cristiane Thiel, Como Definir a Identidade da Marca"
        },
        {
            "Number": "230",
            "Quote": "“Embrace the fundamentals like the closest of friends, for they will be the foundation of your future success.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "231",
            "Quote": "“Maybe you can't change the world, but you can change your world.” ― Milad Ghane"
        },
        {
            "Number": "232",
            "Quote": "“Believe it or not, we are all created equal but with varying abilities. It is how much we invest in ourselves and our abilities that determines how we are received.” ― Victor Kwegyir, Quotable Quotes for Business: Lessons for Success"
        },
        {
            "Number": "233",
            "Quote": "“Trust is a factor in all communications, and civility reflects back to understanding and respecting our differences.” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "234",
            "Quote": "“Service standards create the standard of expectation that you and all team members follow when interacting with customers.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "235",
            "Quote": "“Sir Gerald Moore: I was at dinner last evening, and halfway through the pudding, this four-year-old child came alone, dragging a little toy cart. And on the cart was a fresh turd. Her own, I suppose. The parents just shook their heads and smiled. I've made a big investment in you, Peter. Time and money, and it's not working. Now, I could just shake my head and smile. But in my house, when a turd appears, we throw it out. We dispose of it. We flush it away. We don't put it on the table and call it caviar.” ― Tom Wolfe, The Bonfire of the Vanities"
        },
        {
            "Number": "236",
            "Quote": "“Life is same for everyone. The difference is only that some are living by heart and some for only sake of living” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "237",
            "Quote": "“Entrepreneur, your message, mindset and mandate is connected to your brand, business and brain.” ― Onyi Anyado"
        },
        {
            "Number": "238",
            "Quote": "“As far as I can tell, kids are called bossy when they behave in a dictatorial and domineering fashion. They’re called bossy when they try to order people around and refuse to listen to authority figures. Here’s a suggestion: instead of telling us not to refer to them as bossy, why don’t we teach them not to be bossy? We concentrate so much on eradicating negative words while forgetting to address the behavior that the words describe.” ― Matt Walsh"
        },
        {
            "Number": "239",
            "Quote": "“Creating an ideal customer profile helps you understand who are you talking to through your marketing, and it helps you carry that message and vibe through to your customer experience.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "240",
            "Quote": "“Like an ant, I will find my way round any obstacle. Like a child, I will persevere with pinpoint focus.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "241",
            "Quote": "“Down with, \"Fake it, till you make it.\" Up with, \"Make it so you don't have to fake it!” ― Raju Mandhyan"
        },
        {
            "Number": "242",
            "Quote": "“To me, the conclusion that the public has the ultimate responsibility for the behavior of even the biggest businesses is empowering and hopeful, rather than disappointing. My conclusion is not a moralistic one about who is right or wrong, admirable or selfish, a good guy or a bad guy. My conclusion is instead a prediction, based on what I have seen happening in the past. Businesses have changed when the public came to expect and require different behavior, to reward businesses for behavior that the public wanted, and to make things difficult for businesses practicing behaviors that the public didn't want. I predict that in the future, just as in the past, changes in public attitudes will be essential for changes in businesses' environmental practices.” ― Jared Diamond, Collapse: How Societies Choose to Fail or Succeed"
        },
        {
            "Number": "243",
            "Quote": "“Customers are human and humans can view situations in unexpected ways.” ― Marilyn Suttle"
        },
        {
            "Number": "244",
            "Quote": "“A slave works the whole day for free and is offered a bed to sleep and food to eat. An employee works the whole day for money in order to pay for his own bed and food. Do you see any difference here?” ― Robin Sacredfire"
        },
        {
            "Number": "245",
            "Quote": "“Leadership Wisdom refers to authenticity, compassion, insight, discernment, selflessness, purpose-driven behavior, and making decisions for the greater good over the advancement of the self. We can only develop wisdom as we learn to let go of our defenses and act out of choice rather than defensiveness. Robertson, Susan . Real Leadership: Waken To Wisdom . The Books Factory. Kindle Edition.” ― Susan Robertson, Real Leaderhip: Waken to Wisdom"
        },
        {
            "Number": "246",
            "Quote": "“For all salespeople - Driving around and talking to people for a living, with no recognisable return for the time or money spent by your employer - is a job description that belongs in the past.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "247",
            "Quote": "“Delivering a project isn’t difficult. What’s difficult is delivering a project without first taking the time to plan properly” ― James Leal"
        },
        {
            "Number": "248",
            "Quote": "“If you want something which is beyond your reach, you will have to do something which is beyond your capacity.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "249",
            "Quote": "“History was once rewritten by the victors. Now we write our own immutable histories with every email, text, and post.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "250",
            "Quote": "“Frequent risk-takers have had their fair shares of failures and successes, hence, being confident in reaching their goals, they will usually seem insensitive to whether or not they look foolish or cool to other people.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "251",
            "Quote": "“Men love women who are courageous for it means they can go all the way with him in his pursuit of his good dreams and intentions.” ― Agu Jaachynma N.E."
        },
        {
            "Number": "252",
            "Quote": "“Yet in reality, the likelihood of reaching the pinnacle of capitalist society today is only marginally better than were the chances of being accepted into the French nobility four centuries ago, though at least an aristocratic age was franker, and therefore kinder, about the odds. It did not relentlessly play up the possibilities open to all those with a take on the future of the potato crisp, and so, in turn, did not cruelly equate an ordinary life with a failed one. Our era is perverse in passing off an exception as a rule.” ― Alain de Botton, The Pleasures and Sorrows of Work"
        },
        {
            "Number": "253",
            "Quote": "“Economics is not as simple as philosophy and not as complex as mathematics.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "254",
            "Quote": "“What we did at all times, in success and adversity, was make sure the training ground was sacrosanct. The work there, the concentration, and the standards we maintained never dropped. Eventually that consistency of effort will show itself on a Saturday. That way, when a United player has a couple of bad results, he will hate it. It becomes intolerable to him. Even the best players sometimes lose confidence. Even Cantona had bouts of self-doubt. But if the culture around the training ground was right, the players knew they could fall back on the group and the expertise of our staff.” ― Alex Ferguson, Alex Ferguson: My Autobiography"
        },
        {
            "Number": "255",
            "Quote": "“Marketing is the marriage of business and creativity. The relationship is enhanced by the occasional affair with science.” ― Trevor Carss"
        },
        {
            "Number": "256",
            "Quote": "“Besides, that MBA is a Masters of Business Administration, not a Masters of Business Leadership.” ― Dave Anderson, Becoming a Leader of Character: 6 Habits That Make or Break a Leader at Work and at Home"
        },
        {
            "Number": "257",
            "Quote": "“Tweet others the way you want to want to be tweeted.” ― Germany Kent"
        },
        {
            "Number": "258",
            "Quote": "“When you satisfy your clients, they will satisfy your business.” ― Awolumate Samuel"
        },
        {
            "Number": "259",
            "Quote": "“Getting honest with the self requires self-awareness, that elusive character trait that all want, most insist they have, and yet very few truly possess.” ― Peter Kozodoy, Honest to Greatness: How Today's Greatest Leaders Use Brutal Honesty to Achieve Massive Success"
        },
        {
            "Number": "260",
            "Quote": "“It’s your willingness and commitment which can set everything right for you more than anything else.” ― Vishal Ostwal, Pocket Productivity: A Simplified Guide to Getting More Outcomes from Your Hard Work and Giving Your Hustle a Meaning"
        },
        {
            "Number": "261",
            "Quote": "“What is rational in the practice of thoughtful medicine is impractical for the system.” ― Melissa Cady, Paindemic: A Practical and Holistic Look at Chronic Pain, the Medical System, and the antiPAIN Lifestyle"
        },
        {
            "Number": "262",
            "Quote": "“Fortune does favor the bold and you'll never know what you're capable of if you don't try.” ― Sheryl Sandberg, Lean In: Women, Work, and the Will to Lead"
        },
        {
            "Number": "263",
            "Quote": "“Every morning I look in the mirror and remind myself: \"No one owes you sh*t!\" In this way, I am never disappointed. Never placing blame.” ― Brandi L. Bates"
        },
        {
            "Number": "264",
            "Quote": "“What had once been my reason for being now felt like a job. During my months away, I did a lot of thinking about my personal “why.” I knew why I had started the company, and why people joined me in the early days. And I still believed in our mission and the impact we were making. But I was no longer sure why I wanted—or even if I did want—to continue driving the business forward.” ― Blake Mycoskie"
        },
        {
            "Number": "265",
            "Quote": "“Intuition is a sense of knowing how to act decisively without needing to know why.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "266",
            "Quote": "“The choices you make from this day forward will lead you, step by step, to the future you deserve.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "267",
            "Quote": "“We must practice consistent, reliable, predictable, effective, thoughtful, compassionate and even courteous communication every single day to successfully sustain, develop and grow our business.” ― Kip Tindell"
        },
        {
            "Number": "268",
            "Quote": "“Entrepreneur, take a bite out of Apple's innovation so in turn you can bear fruits of creativity.” ― Onyi Anyado"
        },
        {
            "Number": "269",
            "Quote": "“[L]ean start-ups are the small furry mammals competing with the large dinosaurs—meaning they're one asteroid strike away from world dominance. Exponential technology is that asteroid.” ― Peter H. Diamandis, Bold: How to Go Big, Create Wealth and Impact the World"
        },
        {
            "Number": "270",
            "Quote": "“Predictably irrational 1) the importance of having something for FREE when selling something. 2) the price we hear effects what we’re willing to pay. Known as arbitrary coherence. The basic idea of arbitrary coherence is this: Although initial prices can be \"arbitrary,\" once those prices are established in our minds, they will shape not only present prices but also future ones (thus making them \"coherent\"). Eg new tv on market we kook for an anchor price. Released at £1200. That’s the anchor 3) when we own something we over value it. The seller feels all the things they could do with it. The buyer feels what they could do with the money. 4) experiences are shaped by our expectations. Coke Pepsi test. Or example if we have heard a movie is good we will enjoy it more. 5) social norms and market norms. 6 ) most people are dishonest. Get people thinking about honesty. When people thought about the 10 commandments. 7) acknowledge your weakness and set your deadlines. Also set yourself short term awards when reaching long term goals. 8) try not to keep your options open. The Chinese war where he burned the boats so they couldn’t retreat. If you have your options open on two things close one of them so you can fully focus on one.” ― Dan Ariely, Predictably Irrational: The Hidden Forces That Shape Our Decisions"
        },
        {
            "Number": "271",
            "Quote": "“Entrepreneur, do you know you can actually start up before you start up?” ― Onyi Anyado"
        },
        {
            "Number": "272",
            "Quote": "“There is no failure, unless we fail to begin or we fail to continue.” ― Christopher Babson"
        },
        {
            "Number": "273",
            "Quote": "“Life's too short to wake up in the morning with regrets, So ... Love the people who treat you right and pray for the ones who don't. Life is 10% what you make it 90% how you take it.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "274",
            "Quote": "“Listen to people from your heart, as if your life depended on it, and you will find that in turn people will listen to you with all of theirs.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "275",
            "Quote": "“You don't need to go running from pillar to post looking for what God looks like.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "276",
            "Quote": "“Refusing to forgive never made anyone feel better about anything. All you are doing is holding on to feelings of upset, anger and jealousy and that can never be good. I once read that being angry and unforgiving towards someone else is like drinking poison and expecting the other person to die.” ― Nigel Cumberland, 100 Things Successful People Do: Little Exercises for Successful Living"
        },
        {
            "Number": "277",
            "Quote": "“For individuals and organizations alike, a reputation is far easier to destroy than it is to build.” ― Andrew Griffin, Crisis, Issues and Reputation Management: A Handbook for PR and Communications Professionals"
        },
        {
            "Number": "278",
            "Quote": "“For organisations to become truly sustainable we believe it is essential to create a new organisation model: a more cooperative leader, a new way for people to cooperate inside the organisation and a new way for organisations to be measured by society.” ― Miguel Reynolds Brandao, The Sustainable Organisation - a paradigm for a fairer society: Think about sustainability in an age of technological progress and rising inequality"
        },
        {
            "Number": "279",
            "Quote": "“Success is a journey. The best form of transport is Happiness.” ― Roy Smoothe, Success Lessons From Cool Entreprenuers"
        },
        {
            "Number": "280",
            "Quote": "“Shape your mindsets or your mindsets will shape you.” ― Mindy Hall, Leading with Intention: Every Moment Is a Choice"
        },
        {
            "Number": "281",
            "Quote": "“No one can mock your meagre achievements or inability to accomplish the simplest of tasks, if they remain figments of your imagination. You can revel, again and again, in the glory of a fairy tale doomed never to appear in reality.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "282",
            "Quote": "“It becomes a question of 'How do we convey our differentiation instantaneously?' and drive a wedge between any apparent (or assumed) sameness in the marketplace.” ― David Brier"
        },
        {
            "Number": "283",
            "Quote": "“Advertising is legalized lying.” ― H.G. Wells"
        },
        {
            "Number": "284",
            "Quote": "“And so it must be with the energy you muster for your own work. Get out there and convert the unconverted. Save them all from the charlatans and the nearly-men.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "285",
            "Quote": "“We must design how we wish to be perceived, and then we must work even harder to continuously recreate and re-evaluate that perception.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "286",
            "Quote": "“The time to market yourself is all of the time.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "287",
            "Quote": "“I never want to make screw-you money like the rest of the financial services industry.” ― Dan Price"
        },
        {
            "Number": "288",
            "Quote": "“YOU have to design your own Price tag for the world.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "289",
            "Quote": "“Some of us are happy with our African hair, thank you very much. I don't want some poor Indian girl's hair. And I wish to God I could buy black hair products from black people for once. How we going to make it in this country if we don't make our own business?” ― Zadie Smith, White Teeth"
        },
        {
            "Number": "290",
            "Quote": "“God does not have any business with irresponsible people.” ― Sunday Adelaja, The Mountain of Ignorance"
        },
        {
            "Number": "291",
            "Quote": "“Followers accept answers. Leaders ask questions.” ― Sharon Pearson, Disruptive Leadership: Four Simple Steps to Creating the Winning Team"
        },
        {
            "Number": "292",
            "Quote": "“Do not compromise on the quality and your customers will not negotiate on the price.” ― Amit Kalantri"
        },
        {
            "Number": "293",
            "Quote": "“If customers don’t trust you to help them at the beginning of the sales process, they certainly won’t trust you with their money at the end of it.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "294",
            "Quote": "“My view of the charity world is that compared with business, there is too much talk, way too many meetings and expert panels and blue-ribbon commissions, and not enough action. Or as an Australian friend of mine once opined: \"Sometimes you just have to have a go and get on with it, mate!\".” ― John Wood, Creating Room to Read"
        },
        {
            "Number": "295",
            "Quote": "“In today’s saturated marketplace, you’ll go nowhere selling a “bunch of features.” We are in the business of disrupting the market with brands that matter.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "296",
            "Quote": "“A bad attitude from a chronic complaining employee is like a cancer; it will only spread and infect others. This can take your business down in a nanosecond. You must cut out the cancer and invite them to seek employment elsewhere. Quickly.” ― Beth Ramsay, #Networking is people looking for people looking for people"
        },
        {
            "Number": "297",
            "Quote": "“Creation is ￼bringing into existence ￼￼without analysis, comparison and evaluation.” ― Amit Ambegaonkar, Your Profound Success: 7 Powerful Ways to Skyrocket Your Business Using the Internet"
        },
        {
            "Number": "298",
            "Quote": "“How will history judge us? Will our tales be sources of inspiration, or wells of caution?” ― Yunus D. Saleh, Crisis Management: The Art of Success and Failure"
        },
        {
            "Number": "299",
            "Quote": "“The problem that holds most teams back isn't failure - it's mediocrity.” ― Shawn Herbig, Frequency Matters: Be a Contributor, Not an Employee!"
        },
        {
            "Number": "300",
            "Quote": "“When you cry (being a victim) for a long time, you lose a lot of money. That’s because you are producing crying, not money.” ― Meir Ezra"
        },
        {
            "Number": "301",
            "Quote": "“Relationship Awareness: How do people interpret your business’s story” ― Fritz Shoemaker"
        },
        {
            "Number": "302",
            "Quote": "“An organization's proprietary, internal information is constrained only by an understanding that stake-holders will keep organizational matters within the organization.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "303",
            "Quote": "“See, happiness at work is an emotion. It comes from inside of you, and like all other emotions it is difficult to define, but inescapable once it’s present. Or not present. Can you define love? Poets have tried for thousands of years and aren’t getting much closer. But when you’re feeling love, you’re acutely aware of it, even though you have no formal definition.” ― Alexander Kjerulf, Happy Hour is 9 to 5"
        },
        {
            "Number": "304",
            "Quote": "“Entrepreneurs don’t ask for permission. They act per a mission.” ― Ryan Lilly"
        },
        {
            "Number": "305",
            "Quote": "“It’s not about the content we are creating but how much content our customers are creating for us.” ― Roger Hamilton"
        },
        {
            "Number": "306",
            "Quote": "“The most successful business in the history of mankind is religion, and it is the most cost effective in franchising its ideology through ignorance and spreading of hate…. Such business has exceeded any expectation, and if it would transcend itself into world trading, it would have been the most valuable stock in any market….ever.” ― Husam Wafaei"
        },
        {
            "Number": "307",
            "Quote": "“If I love you, what business is it of yours?” ― Johann wolfgang von Goethe"
        },
        {
            "Number": "308",
            "Quote": "“We designed Google to be the kind of place where the kind of people we wanted to work here would work for free. - Urs Hölzle” ― Steven Levy, In the Plex: How Google Thinks, Works, and Shapes Our Lives"
        },
        {
            "Number": "309",
            "Quote": "“Bagi beberapa orang, kematian adalah duka, perpisahan abadi. Tapi bagi orang-orang itu, kematian adalah bisnis.” ― Sidik Nugroho"
        },
        {
            "Number": "310",
            "Quote": "“In leadership, language is everything. Be careful not to use UNDERPerform when a team member MISperforms. One mistake is not under-performance” ― Janna Cachola, Lead by choice, not by checks"
        },
        {
            "Number": "311",
            "Quote": "“Opportunity comes to everyone it depends on you whether you take it or leave it. Learn to take risks and play hard because at the end you'd be thankful for your struggle.” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "312",
            "Quote": "“Don't compromise to make people comfortable. Be the example.” ― Sharon Pearson, Disruptive Leadership: Four Simple Steps to Creating the Winning Team"
        },
        {
            "Number": "313",
            "Quote": "“Do you have enough money in the bank to make it if everything goes wrong? If you do, congratulations. Go run your business with focus and with confidence. Stick with the high road and do the things you need to realize your business plan. If not, donʼt despair. You need an alternate plan. A plan that allows you to spend a percent- age of your time each week on low-risk revenue sources. A way to bring in freelance income while you build your core business.” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "314",
            "Quote": "“The indication of a willing person is that person will not try to make you wrong.” ― Meir Ezra"
        },
        {
            "Number": "315",
            "Quote": "“Leadership is a skill learned through many venues.” ― Todd Stocker, Leading From The Gut: 3 Power Principles of Effective Leaders"
        },
        {
            "Number": "316",
            "Quote": "“Although individuals need not be well-rounded, teams should be.” ― Tom Rath, Strengths Based Leadership: Great Leaders, Teams, and Why People Follow: A Landmark Study of Great Leaders, Teams, and the Reasons Why We Follow"
        },
        {
            "Number": "317",
            "Quote": "“Those who spend all they earn always end in penury.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "318",
            "Quote": "“In 2008, when almost every other investor got crushed, and even the Wall Street \"experts\" were down by almost half, I was up 17 percent - beating the S&P Average by over 50 percent. Reminiscences of a Stock Market Flea” ― James J. Houts"
        },
        {
            "Number": "319",
            "Quote": "“Seek for ways to do business better” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "320",
            "Quote": "“Sorry Houston, but failure is an option.” ― Bobby Darnell, Time For Dervin - Living Large In Geiggityville"
        },
        {
            "Number": "321",
            "Quote": "“Manager! Have brain - use it!” ― Gerry Geek"
        },
        {
            "Number": "322",
            "Quote": "“In short, the difference between you and your doctor is that he has a well-designed reputation and you do not.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "323",
            "Quote": "“Don’t blame others. it won’t make you a better person.” ― Lolly Daskal , The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "324",
            "Quote": "“Strategy is every employee, at all times” ― Fritz Shoemaker"
        },
        {
            "Number": "325",
            "Quote": "“Give yourself permission 2 evolve. Become a philosopher; come up with your own interpretation of life and stop accepting someone else's as your truth.” ― Germany Kent"
        },
        {
            "Number": "326",
            "Quote": "“In the world Market If a nation wants to be a superpower or wants to lead the world a nation needs to be an Inventor, Creator, and Producer. Buyer one is only has buying power, which is very much temporary!!!” ― Mohammed Zaki Ansari, \"Zaki's Gift Of Love\""
        },
        {
            "Number": "327",
            "Quote": "“A leaders job is to ELEVATE the team, not delegate the team. Elevate your team to take initiative.” ― Janna Cachola"
        },
        {
            "Number": "328",
            "Quote": "“Our number one objective is to make a profit so we can hit our number one priority - which is to help people be all they can be.” ― Zig Ziglar, Developing The Qualities of Success : How to Stay Motivated Volume One"
        },
        {
            "Number": "329",
            "Quote": "“Becoming a great leader doesn’t mean being perfect. it means living with your imperfections.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "330",
            "Quote": "“It’s one thing if a mistake occurs because of circumstance or a miscalculation or the unexpected or inexperience; it’s another if it’s part of a pattern of carelessness or ineptitude or laziness. Then it becomes a choice.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "331",
            "Quote": "“There are fundamental ways that meaning informs our lives and work, if we are conscious of it and recognize its shape. The shape meaning takes in marketing is empathy: All relevant customer understanding and communications flow from being aware of and aligned with the customer’s needs and motivations. In business in a broader sense, the shape meaning takes is strategy. It guides every decision and action. In technology and data science, meaning can drive the pursuit of applied knowledge toward that which improves our experiences and our lives. Creative work becomes more meaningful the more it conveys truth. And in our lives overall, an understanding of what is meaningful to us provides us with purpose, clarity, and intention.” ― Kate O'Neill, Pixels and Place: Connecting Human Experience Across Physical and Digital Spaces"
        },
        {
            "Number": "332",
            "Quote": "“To my shame, I had never thought to ask anything of the future, and yet woke each and every day embittered because it was never what I needed it to be.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "333",
            "Quote": "“Time converted, invested and maximized converts a startup business into a corporation” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "334",
            "Quote": "“Putting the customer in the drivers seat is not enough, he might crash.” ― Yuri van der Sluis"
        },
        {
            "Number": "335",
            "Quote": "“Those people who live in an Independent nation should know how important it is to support independence not only in the government but also in arts, literature, films, newspapers, and business. Innovation, growth, and self-motivation comes from independent artists, journalists, authors, and inventors; not from the Big What which has held 90% of the market since the 1900s. Encourage innovation by supporting the Indies. That's where new opportunities are found!” ― Kailin Gow"
        },
        {
            "Number": "336",
            "Quote": "“The truth no matter how hard it is to bear, must be accepted and confronted head on because it is real. Businesses and people who accept truth soar.” ― Germany Kent"
        },
        {
            "Number": "337",
            "Quote": "“A good manager instills staff with self-confidence, teaches them to believe in themselves and helps them to realise their brilliance. Do not ever treat your staff with disrespect. It is competent until proven incompetent; not incompetent til proven competent.” ― Miya Yamanouchi, Embrace Your Sexual Self: A Practical Guide for Women"
        },
        {
            "Number": "338",
            "Quote": "“I believe in our organisations, we can mix business with pleasure because as service extraordinaires it is always a pleasure to do business with our guests.” ― Janna Cachola"
        },
        {
            "Number": "339",
            "Quote": "“Your every positive action in your life will increase your self-esteem and this self-esteem will boost you for more positive action to take you on success” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "340",
            "Quote": "“I am in the process of demolishing the corrupt business model of high altitude astronomy with the bulldozer of science.” ― Steven Magee"
        },
        {
            "Number": "341",
            "Quote": "“Jesus Christ is the Master of the business we are doing. We are not the master” ― Sunday Adelaja"
        },
        {
            "Number": "342",
            "Quote": "“The lie behind a problem is, “I am not the creator.” You are just unwilling to admit you are the creator of your problem.” ― Meir Ezra"
        },
        {
            "Number": "343",
            "Quote": "“who wishes to fight must first count the cost” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "344",
            "Quote": "“If you find even the smallest way to make people smile, they’ll remember you more for that smile than for all your other fancy business-model stuff” ― Derek Sivers"
        },
        {
            "Number": "345",
            "Quote": "“Praise by name, criticize by category” ― Peter Bevelin, All I Want To Know Is Where I'm Going To Die So I'll Never Go There"
        },
        {
            "Number": "346",
            "Quote": "“We charge a lot of money and give advice. We charge a lot of money so you remember the advice.” ― Dmitry Dyatlov"
        },
        {
            "Number": "347",
            "Quote": "“I’m a fake fact factory. The things I make are the things I make up. Also, as a side business, I make love. Actually, I just made that up.” ― Dora J. Arod, Love quotes for the ages. And the ageless sages."
        },
        {
            "Number": "348",
            "Quote": "“For their never-ending endeavours to obtain or retain wealth, countries desperately need companies, because they—unlike most human beings—have the means of production, and human beings, because they—unlike all companies—have the means of reproduction.” ― Mokokoma Mokhonoana, The Use and Misuse of Children"
        },
        {
            "Number": "349",
            "Quote": "“The greater the loyalty of a group toward the group, the greater is the motivation among the members to achieve the goals of the group, and the greater the probability that the group will achieve its goals.” ― Rensis Likert"
        },
        {
            "Number": "350",
            "Quote": "“When you are willing you are YOU. You are able and feel young. When you are unwilling you are unable and feel old.” ― Meir Ezra"
        },
        {
            "Number": "351",
            "Quote": "“How you gather, manage and use intel in life determines whether you win or lose. That's the # 1 rule for the mavericks in business.” ― Ziad K. Abdelnour"
        },
        {
            "Number": "352",
            "Quote": "“Cater to your customers’ lifestyles. It will create instant rapport and a lasting sense of “I belong here.” ― Marilyn Suttle"
        },
        {
            "Number": "353",
            "Quote": "“Success is the only thing to change the behavior of others” ― thebuyspot.com"
        },
        {
            "Number": "354",
            "Quote": "“Boomers were the original Millennials.” ― Ted Rubin"
        },
        {
            "Number": "355",
            "Quote": "“I always knew what was most important to me. When I was growing up, nothing was more important than golf, but that’s the attitude of a young person who hasn’t a care in the world. Later on I figured it out. Family was first. Always. Then golf and business come after.” ― Arnold Palmer, A Life Well Played: My Stories"
        },
        {
            "Number": "356",
            "Quote": "“Life is made up of dots” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "357",
            "Quote": "“If you are going to complain, blame, or criticize, then do something about it... Feeling sorry for yourself, and your present condition, is not only a waste of energy but the worst habit you could possibly have.” ― Shu Hattori, The McKinsey Edge: Success Principles from the World's Most Powerful Consulting Firm"
        },
        {
            "Number": "358",
            "Quote": "“I choose to mind my own business. In order to improve my life & to be happy, Rather than focusing my energy on judging others on what they do or how they live their lives.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "359",
            "Quote": "“Lovable products, services, and companies are disrupting entire industries. They are changing the world.” ― Brian de Haaff, Lovability: How to Build a Business That People Love and Be Happy Doing It"
        },
        {
            "Number": "360",
            "Quote": "“Some creators shy away from systems because they seem overpowering and rigid. However, in reality, strong systems are the only way in which you will ever have time and space for flexibility. This is true for content production, business, and many other areas of life.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "361",
            "Quote": "“Financial literacy makes it okay for you to make small or big mistakes. On the other hand, being financially illiterate only makes those mistakes dire and regrettable.” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "362",
            "Quote": "“Business is a game, played for fantastic stakes, and you're in competition with experts. If you want to win, you have to learn to be a master of the game.” ― Sidney Sheldon, Master of the Game"
        },
        {
            "Number": "363",
            "Quote": "“Knowledge was scattered treasure, education organized it into art, commerce and science.” ― Amit Kalantri"
        },
        {
            "Number": "364",
            "Quote": "“Achievement must be made against the possibility of failure, against the risk of defeat. It is no achievement to walk a tightrope laid flat on the floor. Where there is no risk, there can be no pride in achievement and, consequently, no happiness.” ― Ray Kroc, Grinding It Out: The Making of McDonald's"
        },
        {
            "Number": "365",
            "Quote": "“Invest like a bull, sit like a bear and watch like an eagle. (mantra for long term investing)” ― Vijay Kedia"
        },
        {
            "Number": "366",
            "Quote": "“When you think there is nothing left to improve on, your business dies, for there is no shortage of innovators” ― Bangambiki Habyarimana, The Great Pearl of Wisdom"
        },
        {
            "Number": "367",
            "Quote": "“Simply minding one's own business is more offensive than being intrusive. Without ever saying a word one can make a person feel less-than.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "368",
            "Quote": "“The Prerequisite of any \"Success Story\" is the decision to commit in giving up your own soul to the Journey that you are about to start.” ― Hisham Fawzi"
        },
        {
            "Number": "369",
            "Quote": "“To find your way you must first take the steps” ― Martin Powell"
        },
        {
            "Number": "370",
            "Quote": "“I need a first-class reputation” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "371",
            "Quote": "“Business is an organization of systems working towards producing the same result.” ― Chinmai Swamy"
        },
        {
            "Number": "372",
            "Quote": "“Unwilling clients tell you that your product is no good. It’s not the product. The problem is unwillingness.” ― Meir Ezra"
        },
        {
            "Number": "373",
            "Quote": "“Instead of thinking outside the box,Get rid of the box.” ― Deepak Chopra, The Seven Spiritual Laws of Success: A Practical Guide to the Fulfillment of Your Dreams"
        },
        {
            "Number": "374",
            "Quote": "“Planning is deciding in advance what to do and how to do it. Planning bridges the gap between where we are and where we want to go. It makes it possible for things to occur which would not otherwise happen.” ― Harold Koontz, Essentials of Management"
        },
        {
            "Number": "375",
            "Quote": "“Strategy requires you to answer three questions: Where you are now, where do you want to go, and how you are going to get there.” ― abdul malik omar, Triumph: Unleash Your Inner Entrepreneur"
        },
        {
            "Number": "376",
            "Quote": "“Friends don't let friends become BossHoles! Or work for one either.” ― Greg L. Alston"
        },
        {
            "Number": "377",
            "Quote": "“There is only one way to get anybody to do anything do you know what it is? This is far from a trivial question. Business is, after all, the ability to motivate a group of individuals to move an idea from concept to reality; to take a theory and make it a practice; to gain the buy-in of your employees and colleagues; to encourage others to execute your plans” ― Keith Ferrazzi, Never Eat Alone: And Other Secrets to Success, One Relationship at a Time"
        },
        {
            "Number": "378",
            "Quote": "“We've all seen it. A #startup begins with a #dream, a #passion to do something others have missed or overlooked.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "379",
            "Quote": "“Professional men run the business started by the courageous men.” ― Amit Kalantri"
        },
        {
            "Number": "380",
            "Quote": "“Ignore the people who say that the sales industry needs to become professionalised: it already has.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "381",
            "Quote": "“You see continuous movement is the important thing here. Those who remain in one position and then lie to themselves about their progress are the ones in real trouble.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "382",
            "Quote": "“I built success in business when I stopped focusing on me and started focusing on helping others.” ― Sharon Pearson, Disruptive Leadership: Four Simple Steps to Creating the Winning Team"
        },
        {
            "Number": "383",
            "Quote": "“Launching a brand is not for those with thin skin. It takes courage, intelligence and foresight.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "384",
            "Quote": "“Those who do not study their businesses do not stay in business.” ― Orrin Woodward"
        },
        {
            "Number": "385",
            "Quote": "“Take this guinea then and use it, not to burn the house down, but to make its windows blaze. And let the daughters of uneducated women dance round the new house, the poor house, the house that stands in a narrow street where omnibuses pass and the street hawkers cry their wares, and let them sing, ‘We have done with war! We have done with tyranny!’ And their mothers will laugh from their graves, ‘It was for this that we suffered obloquy and contempt! Light up the windows of the new house, daughters! Let them blaze!” ― Virginia Woolf, Three Guineas"
        },
        {
            "Number": "386",
            "Quote": "“Sometimes Spiro missed the times when a troublesome worker was thrown out of a high window and that was the end of him. These days, if you threw someone out of a window, they'd phone their lawyer on the way down.” ― Eoin Colfer, The Eternity Code"
        },
        {
            "Number": "387",
            "Quote": "“After each customer interaction, notice if you gave them a “happy to see you” kind of experience.” ― Marilyn Suttle"
        },
        {
            "Number": "388",
            "Quote": "“I was out loving life instead of in some office hating it” ― Desmond Ong, Against All Odds: Secrets Of Starting At 15, Achieving Million Dollars Sales & Financial Freedom Before 21"
        },
        {
            "Number": "389",
            "Quote": "“A beverage of leisure is a serious business,” Shane Bowermaster was known to declare. “There can be no product of pleasure without the inverse on the end of the producer.” ― Jeff Phillips, Whiskey Pike: A Bedtime Story for the Drinking Mankind."
        },
        {
            "Number": "390",
            "Quote": "“You can't win if you don't play” ― Mark Manson. “The Subtle Art of Not Giving a F*ck.”"
        },
        {
            "Number": "391",
            "Quote": "“All you need in order to have money is: a. Create a desire, and b. Make it scarce. You don’t have money when the desire and scarcity is created for you.” ― Meir Ezra"
        },
        {
            "Number": "392",
            "Quote": "“Business success requires a winning strategy; there is no successful company that doesn’t have one.” ― Brad Chase, Strategy First: How Businesses Win Big"
        },
        {
            "Number": "393",
            "Quote": "“Sometimes the best way to get other people to give up their egos is for you to give up yours first.” ― Jane Ripley, Collaboration Begins with You: Be a Silo Buster"
        },
        {
            "Number": "394",
            "Quote": "“Those who are critical of my goals and dreams simply do not understand the higher purpose to which I have been called.” ― Andy Andrews"
        },
        {
            "Number": "395",
            "Quote": "“If you don't know what it is you're looking for you're NEVER going to find it. You have to be clear on what it is you're seeking.” ― Germany Kent"
        },
        {
            "Number": "396",
            "Quote": "“Every startup is a SME but every SME is not a startup.” ― Ookbee founder"
        },
        {
            "Number": "397",
            "Quote": "“Avoid selling to dumb customers, there aren't enough left!” ― Jasleen Kaur Gumber"
        },
        {
            "Number": "398",
            "Quote": "“Love is what makes two people sit in the middle of a bench when there is plenty of room at both ends. Love means nothing in tennis,But it's everything in life” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "399",
            "Quote": "“You don’t have to be a builder to be an architect.” ― Richie Norton"
        },
        {
            "Number": "400",
            "Quote": "“RULE #1 Market your business to the customer YOU WANT. Most beauty businesses try to be everything to everyone. It's exhausting and expensive promoting yourself to everyone. Most people simply give up. Focus on the customers you really want. What is your passion, what do you excel in? Who is your ideal customer? What would you ideally like to do every day in your business? Focus on what you want to do and the clients you want, and market directly to them and only them.” ― Jana Elston, RETAIL LEGENDS: How to have more CUSTOMERS coming through your door FAST, Beauty Salon Tips"
        },
        {
            "Number": "401",
            "Quote": "“We naturally assume that something that only does one thing is better than something that claims to do many things” ― Rory Sutherland, Alchemy: The Dark Art and Curious Science of Creating Magic in Brands, Business, and Life"
        },
        {
            "Number": "402",
            "Quote": "“Когда вы впервые загорелись новой идеей, очень важно не застопориться на трудностях. Стремление усложнять вещи — это ваш враг. Создать что-то сложное может каждый. Но трудно сделать что-то простое. Очень сложно мыслить простыми и ясными категориями. Для этого нужна концентрация, практика и самодисциплина.” ― Richard Branson"
        },
        {
            "Number": "403",
            "Quote": "“There’s not a chance we’ll reach our full potential until we stop blaming each other and start practicing personal accountability.” ― John G. Miller, QBQ! The Question Behind the Question: Practicing Personal Accountability in Work and in Life"
        },
        {
            "Number": "404",
            "Quote": "“Our need to be shown respect can override our appreciation for things like efficiency, simplicity, or even low cost.” ― Kate O'Neill, Pixels and Place: Connecting Human Experience Across Physical and Digital Spaces"
        },
        {
            "Number": "405",
            "Quote": "“Scratch the surface in a typical boardroom and we're all just cavemen with briefcases, hungry for a wise person to tell us stories.” ― Alan Kay"
        },
        {
            "Number": "406",
            "Quote": "“The rock and roll business is pretty absurd, but the world of serious music is much worse.” ― Frank Zappa"
        },
        {
            "Number": "407",
            "Quote": "“Some PR is about getting information about a great product or thingy out to the people who would enjoy it, while other PR is about creating a web of lies that conceals the fact that your company harnesses the energy produced by rape and uses it to make a chemical that kills forests for fun. Either way, you're going to need it.” ― Eugene Mirman, The Will to Whatevs: A Guide to Modern Life"
        },
        {
            "Number": "408",
            "Quote": "“Doing is often a subconscious escape from being.” ― Mokokoma Mokhonoana"
        },
        {
            "Number": "409",
            "Quote": "“That which is currently beyond your capabilities now, does not have to be so forever” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "410",
            "Quote": "“Life curses some poor people with the love of luxury, while it blesses some with the very same thing.” ― Mokokoma Mokhonoana"
        },
        {
            "Number": "411",
            "Quote": "“Forget \"six degrees of separation\" today it's \"six degrees of CONNECTION.” ― Morag Barrett, Cultivate: The Power of Winning Relationships"
        },
        {
            "Number": "412",
            "Quote": "“And while a brand is so much more than a company’s logo, the logo is one of the key ambassadors to any brand.” ― David Brier"
        },
        {
            "Number": "413",
            "Quote": "“A confident woman wears a smile and has this air of comfortability and pleasantness about her.” ― Agu Jaachynma N.E."
        },
        {
            "Number": "414",
            "Quote": "“To be truly successful you have to break away from the crowds, popularity and your ego for a while. Somewhere you can work towards achieving your goals, say no to distractions and concentrate on studying and practicing.” ― Francis Shenstone, The Explorer's Mindset: Unlock Health Happiness and Success the Fun Way"
        },
        {
            "Number": "415",
            "Quote": "“THE BEST SINGERS ARE THOSE WHO WERE TOLD BY \"LIFE\" THAT THEY DIDN'T HAVE A REASON TO SING OR REJOICE BUT THEY SANG ANYWAY -HOPENATION” ― Qwana M. \"BabyGirl\" Reynolds-Frasier, Friend In Your Pocket Conversations With M.I.N.I M.E. Class Is Now In Session"
        },
        {
            "Number": "416",
            "Quote": "“what you don't know will cost you.” ― Dee Dee Artner"
        },
        {
            "Number": "417",
            "Quote": "“It is a matter of life and death for us; for the lead we gain by day on ships and railways is lost each night.” ― Antoine de Saint-Exupéry, Night Flight"
        },
        {
            "Number": "418",
            "Quote": "“Living The Dream” ― Ms. Vues & Reviews"
        },
        {
            "Number": "419",
            "Quote": "“Corporate controlled governments are in the business of organized corruption.” ― Steven Magee"
        },
        {
            "Number": "420",
            "Quote": "“Sales is like courting, you just need more than a cocktail.” ― Yuri van der Sluis"
        },
        {
            "Number": "421",
            "Quote": "“Because you are not willing to lose, you are losing.” ― Meir Ezra"
        },
        {
            "Number": "422",
            "Quote": "“You can perhaps, in a number of circumstances, tell yourself that you can't have more than you have until you do better than you're doing, but by all means steer clear of its reverse, the creed of defeat, in saying that you can't do better than you're doing until you can have more than you have.” ― Criss Jami, Healology"
        },
        {
            "Number": "423",
            "Quote": "“It's unwise to pay too much, but it's worse to pay too little. When you pay too much, you lose a little money - that's all. When you pay too little, you sometimes lose everything, because the thing you bought was incapable of doing the thing it was bought to do. The common law of business balance prohibits paying a little and getting a lot - it can't be done. If you deal with the lowest bidder, it is well to add something for the risk you run, and if you do that you will have enough to pay for something better.” ― John Ruskin"
        },
        {
            "Number": "424",
            "Quote": "“What’s the best home-based business opportunity in the world today? Without a doubt, it’s network marketing. Like it or hate it, network marketing has created more millionaires than any other industry in history. There’s just one problem — it can be hard if you’re not used to it!” ― Kevin J. Donaldson"
        },
        {
            "Number": "425",
            "Quote": "“Commitment shows up before results do!” ― john di lemme"
        },
        {
            "Number": "426",
            "Quote": "“Competition works best in sports, but humans get addicted to stuff.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "427",
            "Quote": "“When water fountains start charging to drink, then you know we have a problem.” ― Anthony Liccione"
        },
        {
            "Number": "428",
            "Quote": "“Don’t confuse “strict confidentiality” with “keeping employees in the dark.” Private is useful. Secretive is deceptive.” ― Stacy Feiner, Talent Mindset"
        },
        {
            "Number": "429",
            "Quote": "“There are a wide range of people that are in the business of damaging public health. They call themselves governments and corporations.” ― Steven Magee"
        },
        {
            "Number": "430",
            "Quote": "“When it comes to money, ignorance is NOT bliss. What you don't know CAN hurt you.” ― Sandra S. Simmons, Unleash Your Cash Flow Mojo: The Business Owner's Guide to Predicting, Planning and Controlling Your Company's Cash Flow"
        },
        {
            "Number": "431",
            "Quote": "“Points of views that are expressed on Twitter don’t intend to offend, but rather defend and open the conversation up to everyone so that no one has to pretend.” ― Germany Kent"
        },
        {
            "Number": "432",
            "Quote": "“If your doctor told you that you needed immediate surgery could you perform it yourself?” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "433",
            "Quote": "“Life is too short to be anything but happy. So kiss slowly. Love deeply. Forgive quickly. Take chances and never have regrets. Forget the past but remember what it taught you.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "434",
            "Quote": "“When deliberating, think in campaigns and not battles; in wars and not campaigns; in ultimate conquest and not wars.” ― Steven Pressfield, The Virtues of War: A Novel of Alexander the Great"
        },
        {
            "Number": "435",
            "Quote": "“Whatever business you have, if you truly believe in what you’re doing, you’re capable of going any place and doing anything. Pursue Your Dreams!” ― Rachel A. Olsen, Shark Tank MOMpreneurs Take A Bite Out of Publicity: How 5 Inventors Leveraged Media to Build their Business + How YOU Can, Too"
        },
        {
            "Number": "436",
            "Quote": "“Your organization’s culture: It’s either an asset or a liability. At this very moment, your culture is helping business performance. Or hurting it.” ― Tanya Mann, Five Frequencies: Leadership Signals that turn Culture into Competitive Advantage"
        },
        {
            "Number": "437",
            "Quote": "“THE HANDS SHOULDN'T TAKE WHAT THE HEART REJECTS!” ― Qwana M. \"BabyGirl\" Reynolds-Frasier"
        },
        {
            "Number": "438",
            "Quote": "“Chase after money and the stuggering race will never end; but reach out for successful ideas and the sources of money will chase after you to fill your pockets.” ― Wayne Chirisa"
        },
        {
            "Number": "439",
            "Quote": "“Seek to improve your business and brand” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "440",
            "Quote": "“Remember, you will always fail in business if you don't try to open your own business.” ― Steven Ivy - Attorney Entrepreneur"
        },
        {
            "Number": "441",
            "Quote": "“Karma is a balance sheet of life which debits and credit all your deeds.YourWhich is audited by our creator and actions are based on what we accumulated in it.” ― Abhishek S, KARMA"
        },
        {
            "Number": "442",
            "Quote": "“How Explainer Videos Work For Your Business If you wonder how to take your business to the next level, then explainer videos could be your answer. A short, crisp, informative piece of explainer video is the ultimate key to reach your ideal business leads. Henceforth, you need not worry about keeping your profits high. All you have to do is to invest a part of your money in getting quality, professional explainer videos to boost up your rankings on search engines. Google’s algorithm for search engine rankings includes a part that quantifies the amount of time spent by the visitors to your website. The longer time they spent, the higher will be your ranking. This is why your site needs an explainer video to keep the clock ticking for you. These videos are great ways to get the attention of your visitors; it really keeps them engaged for a long time, provided the videos are interesting. It has been found out that a human brain is more attentive to visuals rather than mere phrases. As readers spend only a few seconds to minutes on each site, quality content with a catchy title would grab their attention, but not always. On the other hand, if they confront an interesting and funny video, they will be attracted and urged to watch the content. That is why explainer videos are smart marketing tools. According to top marketing firms, websites with explainer videos rank higher than others in Google universal searches. In a business, an explainer video offers you a smart platform to reach your ideal customers and introduce your services to them with the reasons for them to choose you over your competitors. What could it be? An explainer video could be anything. You can share your identity, ideas, concepts, issues, solutions, products, services and even arguments. You can bring them all up with videos in just a few seconds. How long could it be? The shorter, the better. Videos more than a 90 seconds could be boring to your visitors. Keeping them short and engaging is the trick to make the visitors stay on your page, which in turn fetches the ranking. Here are a few reasons to justify the need for explainer videos for your business. 1. Creates a virtual connection: The most important aspect of online marketing is to showcase your personality in a smart manner. Your customer is with little or no contact with you in online business. So it is crucial to build a trustworthy bond with your customer to maintain a strong relationship. Explainer videos do this job for you; they offer you an identity that is recognized by your customers which wins their trust. 2. Gains popularity: A good and attractive explainer video is extremely contagious. It is not restricted to your website alone and can be shared with other video hosting sites like YouTube. This means your site gains popularity. People share videos on a higher scale rather than sharing web pages. Moreover, free video hosting sites like YouTube can be accessed even on a Smart phone which is an added advantage. 3. Holds all in one: Website clutter is a serious mistake that directly affects the rankings of a website. With the intention to hike rankings and boost sales, many website owners clutter their site with loads of images, colorful fonts, flash pictures and pop boxes. This could only have adverse effects on the site. It increases the load time of the website and leaves the visitors confounded that they wonder what your site conveys. On the contrary, an explainer video is can be designed to comprise all such smart aspects squeezed into a single video. 4. Resurrects your identity: PPT slides and pop up ads are obsolete and they don’t belong to this era of online business marketing. A colorful, funny and informative video with great visuals can do the magic; it grabs the attention of the audience. This is particularly suitable for multifaceted businesses with multiple products and services. You can create customized videos for each product and” ― mahalingam"
        },
        {
            "Number": "443",
            "Quote": "“Sales and marketing alignment is about one shared goal: revenue that is delivered or over-delivered every quarter. There will always be tension, but that tension can be positive if there is a culture of clear expectations and communication.” ― Craig Rosenberg"
        },
        {
            "Number": "444",
            "Quote": "“In order to win as a contrarian, you need perfect timing and the perfect size.” ― Henrique M. Simões, Trading Course: How to Become a Consistently Winning Trader"
        },
        {
            "Number": "445",
            "Quote": "“To escape fear, you have to go through it, not around.” ― Richie Norton, Résumés Are Dead and What to Do About It"
        },
        {
            "Number": "446",
            "Quote": "“Stanley was passed from store to store doing free labor in exchange for an opportunity to learn the business. \"This way I decide which business I like well enough to set up for myself,\" he told me. \"You tell me what books to read and I’ll read them, but I don’t have time to waste in school unless I want to end up like the rest of these people, working for somebody else.\" After I heard that I couldn’t in good conscience keep him locked up. Could you? If you say yes, tell me why.” ― John Taylor Gatto, The Underground History of American Education: An Intimate Investigation Into the Prison of Modern Schooling"
        },
        {
            "Number": "447",
            "Quote": "“While the legalization of Cannabis is still new and being regulated for growing, packaging, distribution and sales, the IRS is old and has many regulations for businesses that can not be ignored, avoided or taken lightly. Shortcut this and things can get very taxing. If you are playing in this new field: Look to those with authority, expertise and knowledge that can not only help you with your taxes, but are also up to date with all of the rules, regulations, propositions, amendments and shifts in this exploding industry.” ― Loren Weisman"
        },
        {
            "Number": "448",
            "Quote": "“Move not unless you see an advantage; use not your troops unless there is something to be gained; fight not unless the position is critical.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "449",
            "Quote": "“Why is it there’s no aisle in a grocery or department in a store or menu on a website for “average stuff” or “beige products”? FACT: People never got passionate about mediocre and average. While consumers and clients can find “best deals” and “natural foods” and “artisan goods,” one doesn’t find an aisle or a website menu tab offering “average stuff” without excelling in something (which might explain that while vanilla is necessary for the ice cream sundae, it’s the hot fudge we all crave and talk about).” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "450",
            "Quote": "“A true democratic society is supposed to serve its people, not big businesses. The welfare of its citizens, not corporate pockets. But when you have corporations buying the seats of our political leaders, who do you think they will serve?” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "451",
            "Quote": "“Your mission statement outlines why your company exists. It doesn’t have to be all fancy-pants, just a clear statement of what you do.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "452",
            "Quote": "“If what you sell doesn’t help me then why are you knocking on my door?” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "453",
            "Quote": "“Don't build a team that will fuel your 'ego'. Build a team that has the skills, desire & passion for fueling the 'vision'.” ― Yvonne Pierre, The Day My Soul Cried: A Memoir"
        },
        {
            "Number": "454",
            "Quote": "“We may have suffered a lot because of our attachment to those things, but we don’t have the courage to release them; it doesn’t feel safe to do so. But it may be that we continue to suffer because of our attachment to those things. It may be a person, a material object, or a position in society, anything. We think that without that person or thing we will not be safe, and that is why we’re caught by it.” ― Thich Nhat Hanh, Fidelity: How to Create a Loving Relationship That Lasts"
        },
        {
            "Number": "455",
            "Quote": "“Nearly all rich an powerful people are not notably talented, educated, charming or good-looking. They become rich and powerful by wanting to be rich and powerful.” ― Paul Arden, It's Not How Good You Are, It's How Good You Want To Be"
        },
        {
            "Number": "456",
            "Quote": "“A website can make money for you while you are asleep.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "457",
            "Quote": "“Businesses frequently prioritize new feature releases over fixing technical debt. They choose to work on revenue-generating work instead of revenue-protection work. This rarely works out as the business hopes, particularly as problems discovered during the final stages of uncompleted projects drag engineers away from the newer projects.” ― Dominica Degrandis, Making Work Visible: Exposing Time Theft to Optimize Work & flow"
        },
        {
            "Number": "458",
            "Quote": "“Sometimes he would rather battle a demon from Hell than grapple with the bureaucracy of man.” ― E.A. Bucchianeri, Vocation of a Gadfly"
        },
        {
            "Number": "459",
            "Quote": "“We live in a society where every business has a huge scope. Even if you open a shop selling snakes people will buy it. Thinking they will direct them to their neighbors house.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "460",
            "Quote": "“The richest people in the world build networks and invest in people; everyone else looks for work and invests in survival.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "461",
            "Quote": "“D-Determination, Determination is the first step to greatness. R-Rate, Rate yourself or someone else will rate it for you. E-Elevator,two roles of an elevator; to lift you up or lift you down, be careful of the friends you choose. A-Attitude, Attitude defines how far you will go in life. M-Mind your own business, Learn to mind your own business.” ― Tshikororo Mash"
        },
        {
            "Number": "462",
            "Quote": "“Don’t set your own goals by what other people make important.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "463",
            "Quote": "“It can take a lifetime to build something worthwhile. Those who stick with it, build a legacy without regrets.” ― Trevor Carss"
        },
        {
            "Number": "464",
            "Quote": "“To me everything in business boils down to this: do you genuinely care about your customers - or just their cash?” ― Rasheed Ogunlaru, Soul Trader: Putting the Heart Back into Your Business"
        },
        {
            "Number": "465",
            "Quote": "“If you are in a competitive industry, great online reviews are not just nice to have, they are a requirement!” ― Tom Kenemore, Fans On Fire: How to Skyrocket Your Leads, Sales, and Reputation with The Most Trusted Form of Marketing"
        },
        {
            "Number": "466",
            "Quote": "“Social media allows us to behave in ways that we are hardwired for in the first place - as humans. We can get frank recommendations from other humans instead of from faceless companies.” ― Francois Gossieaux, The Hyper-Social Organization: Eclipse Your Competition by Leveraging Social Media"
        },
        {
            "Number": "467",
            "Quote": "“A church leadership that cannot provide members with business ideas should stop demanding tithe from them. Plant greatness in the members and they pay greatly; Plant zero in them and they pay in negatives!” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "468",
            "Quote": "“Until you take the first step forward, failure remains reassuringly impossible.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "469",
            "Quote": "“Entrepreneur, noun: someone who takes calculated risks to add value to wider society with the hope of making money and building wealth” ― M. James Airey"
        },
        {
            "Number": "470",
            "Quote": "“In an effort to eliminate the possibility of any rival growing up, some monopolists would sacrifice democracy itself.” ― Henry Wallace"
        },
        {
            "Number": "471",
            "Quote": "“If you are going to have, you need to be willing to lose.” ― Meir Ezra"
        },
        {
            "Number": "472",
            "Quote": "“The legacy I want to leave you with is that no matter who you are, what you have been doing, or where you would like to go, if you look at a situation from a problem-solving approach and put others first, you'll succeed at whatever you aspire to do.” ― Michael McGinnis, GPS Guide for Athletes and Those Who Surround Them: How to Empower Your Sports Goals, Navigate the Process, and Steer Toward Success"
        },
        {
            "Number": "473",
            "Quote": "“For linear-thinking companies, the six Ds of exponentials are the six horsemen of the apocalypse—no question about it.” ― Peter H. Diamandis, Bold: How to Go Big, Create Wealth and Impact the World"
        },
        {
            "Number": "474",
            "Quote": "“We focused our attention on the tall businessman. His rhetoric did not soar. Even his voice was gray; bleak like a dead possum in melting, muddy snow.” ― James Aura, The Cumberland Killers: A Kentucky Mystery"
        },
        {
            "Number": "475",
            "Quote": "“The outcome is not up to you. The outlook is.” ― Germany Kent"
        },
        {
            "Number": "476",
            "Quote": "“Human beings are complex information consumers: they have active needs, passions, and preferences. They lead different lifestyles — some that you will never be able to empathize with unless you dive deep in qualitative and quantitative data. And that is precisely the point of persona research.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "477",
            "Quote": "“The worst enemy of our humanity is our self-doubt.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "478",
            "Quote": "“Amplify with your authority instead of shouting publicity. A sell only goes so far. Your experience, knowledge and authenticity have the endurance to engage and sustain a connection.” ― Loren Weisman"
        },
        {
            "Number": "479",
            "Quote": "“The whole purpose of choosing to invest as a career is to let the management be constantly worried about his company and let yourself sip your wine; But the opposite happens.” ― Vijay Kedia"
        },
        {
            "Number": "480",
            "Quote": "“You have to shelf your excitement and be realistic about your internal and external strengths and weaknesses. (p.70)” ― Injap Sia, Life Principles"
        },
        {
            "Number": "481",
            "Quote": "“Doing a good thing it is hard and it will hurt you a little or for short period of time, but doing bad or wrong things it is easy, but it hurt you forever.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "482",
            "Quote": "“Contagiousness is an unexpected property of all kinds of things.” ― Malcolm Gladwell, The Tipping Point: How Little Things Can Make a Big Difference"
        },
        {
            "Number": "483",
            "Quote": "“True ambition is the desire to work harder for yourself than somebody else” ― Yuri van der sluis"
        },
        {
            "Number": "484",
            "Quote": "“Today, brands are not the preserve of marketing department. Brands are too important to be left to the marketing department - or any other 'department,' come to that. Organizational ghettoes do not create vibrant world-changing brands.” ― Thomas Gad"
        },
        {
            "Number": "485",
            "Quote": "“Sometimes life is like living in a chamber of Liquid Oxygen. Liquid don't allow you to live and Oxygen don't let you die.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "486",
            "Quote": "“Personally, I believe in tools that close the gap between professionals and beginners, understanding that — push comes to shove — this is a world of beginners.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "487",
            "Quote": "“Project stacking is the art of creating projects that multi-task for you, so you don’t have to.” ― Richie Norton"
        },
        {
            "Number": "488",
            "Quote": "“But you were always a good man of business, Jacob,' faltered Scrooge, who now began to apply this to himself. Business!' cried the Ghost, wringing its hands again. \"Mankind was my business; charity, mercy, forbearance, and benevolence, were, all, my business. The deals of my trade were but a drop of water in the comprehensive ocean of my business!” ― Charles Dickens, A Christmas Carol"
        },
        {
            "Number": "489",
            "Quote": "“If I have to justify or prove my friendship to you by liking or sharing a post, then we are not friends. People I call friends, don't use passive-aggressive approaches with their friends to bump up their likes, shares or connections online.” ― Loren Weisman"
        },
        {
            "Number": "490",
            "Quote": "“When making important decisions, seek multiple sources and authentic data points. Look at a scenario from different perspectives. The truth will emerge more readily.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "491",
            "Quote": "“Sensuality is the ultimate path to breaking through plateaus in business particularly for the new breed of women entrepreneurs.” ― Lebo Grand, Sensual Lifestyle"
        },
        {
            "Number": "492",
            "Quote": "“How much money do you have? You have the exact amount you are willing to have.” ― Meir Ezra"
        },
        {
            "Number": "493",
            "Quote": "“An entrepreneur with strong network makes money even when he is asleep.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "494",
            "Quote": "“Work hard, you can be Millionaire. Work hard and smart, you can be Billionaire. Trillionaire?? Get ready to beat capitalism in its own game. Create war among countries. Be merciless and cruel . But there is a problem ! Trillionaire doesn't know what happens after death ??” ― Chinmay Jangid"
        },
        {
            "Number": "495",
            "Quote": "“History is filled with inferior brands outselling superior ones thanks to better branding. Only superior branding has the power to overcome and reverse this (and superior products and services deserve superior branding).” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "496",
            "Quote": "“Part-time effort means part-tim results.” ― Tony Curl"
        },
        {
            "Number": "497",
            "Quote": "“They had not just slipped into that frigid pool, they lived there now. They didn't want a ladder.” ― Mandy Ashcraft, Small Orange Fruit"
        },
        {
            "Number": "498",
            "Quote": "“in a digitally enabled world, all businesses are global” ― Gyan Nagpal, The Future Ready Organization: How Dynamic Capability Management Is Reshaping the Modern Workplace"
        },
        {
            "Number": "499",
            "Quote": "“Your traditional EDUCATION is not going to CHANGE your life but the life you are experiencing that can change you. Choose a POSITIVE life STYLE with positive ATTITUDE which could bring you a life with HAPPINESS and WISDOM” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "500",
            "Quote": "“Products shouldn’t just work well, they must unfold well.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "501",
            "Quote": "“Even your most loyal customers always have a choice about where to take their business.” ― Marilyn Suttle, Who's Your Gladys?: How to Turn Even the Most Difficult Customer Into Your Biggest Fan"
        },
        {
            "Number": "502",
            "Quote": "“There can be no success in sales without tenacity.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "503",
            "Quote": "“Despite the modern equipment we sell, it's old money that funds it, and old money doesn't always have a modern brain attached to it.” ― Taylin Clavelli, Secret Of The Manor"
        },
        {
            "Number": "504",
            "Quote": "“There have been few things in my life which have had a more genial effect on my mind than the possession of a piece of land” ― Harriet Martineau"
        },
        {
            "Number": "505",
            "Quote": "“They desired effective change, not disruptive revolution.” ― Michael Schrage, The Innovator's Hypothesis: How Cheap Experiments Are Worth More than Good Ideas"
        },
        {
            "Number": "506",
            "Quote": "“Intentions do not insulate us from the consequences of our actions.” ― Jon D Harrison"
        },
        {
            "Number": "507",
            "Quote": "“Data Science is manipulating data, looking for patterns, and coming up with solutions to drive revenue, lower expenses, and thereby increase overall business profitability.” ― Ken Poirot"
        },
        {
            "Number": "508",
            "Quote": "“The foundational stone for any business, enterprise or project has to be wisdom.” ― Sunday Adelaja"
        },
        {
            "Number": "509",
            "Quote": "“A damaging email forwarded outside the organization is indicative of problems within the organization.” ― Kent Alan Robinson"
        },
        {
            "Number": "510",
            "Quote": "“If your opponent is of choleric temper, seek to irritate him. Pretend to be weak, that he may grow arrogant.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "511",
            "Quote": "“It's time to respect yourself and your dream, both truly deserve that respect. be the person you would do anything for. Be the person you will not let down.” ― Loren Weisman, The Artist's Guide to Success in the Music Business: The “Who, What, When, Where, Why & How” of the Steps that Musicians & Bands Have to Take to Succeed in Music"
        },
        {
            "Number": "512",
            "Quote": "“In this world there are those who enjoy giving people balloons and there are those who take great pleasure in popping them. And I wish to be remembered as being firmly in the first party.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "513",
            "Quote": "“Literacy rate tells us about the section of society who can read and write, but do we have a tool which can share the stats about out how many educated illiterates we have in our society.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "514",
            "Quote": "“The moment I entered the bright, buzzing lobby of Men’s House I was overcome by a sense of alienation and hostility … The lobby was the meeting place for various groups still caught up in the illusions that had just been boomeranged out of my head: college boys working to return to school down South; older advocates of racial progress with utopian schemes for building black business empires; preachers ordained by no authority except their own, without church or congregation, without bread or wine, body or blood; the community “leaders” without followers; old men of sixty or more still caught up in post-Civil War dreams of freedom within segregation; the pathetic ones who possessed noting beyond their dreams of being gentlemen, who held small jobs or drew small pensions, and all pretending to be engaged in some vast, though obscure, enterprise, who affected the pseudo-courtly manners of certain southern congressmen and bowed and nodded as they passed like senile old roosters in a barnyard; they younger crowd for whom I now felt a contempt such as only a disillusioned dreamer feels for those still unaware that they dream—the business students from southern colleges, for whom business was a vague, abstract game with rules as obsolete as Noah’s Ark but who yet were drunk on finance.” ― Ralph Ellison, Invisible Man"
        },
        {
            "Number": "515",
            "Quote": "“If you use a philosophy education well, you can get your foot in the door of any industry you please. Industries are like the blossoms on a tree while philosophy is the trunk - it holds the tree together, but it often goes unnoticed.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "516",
            "Quote": "“If your brand lacks sensuality, it has got no power.” ― Lebo Grand"
        },
        {
            "Number": "517",
            "Quote": "“Get in touch with your passion and put it to work at work.” ― Marilyn Suttle"
        },
        {
            "Number": "518",
            "Quote": "“People speak broken Swahili on purpose. Business people for instance will speak Sheng – a mixture of Swahili and English – because that’s what people want to hear. And what is the government doing? They speak broken Swahili most of the time. Swahili is getting lost and I am really sorry for the future generations.” ― Enock Maregesi"
        },
        {
            "Number": "519",
            "Quote": "“To use an analogy, the \"leadership is the answer to everything\" perspective is the modern equivalent of the, 'God is the answer to everything' perspective that held back our scientific understanding of the physical world in the Dark Ages. In the 1500's, people ascribed all events they didn't understand to God. Why did the crops fail? God did it. Why did we have an earthquake? God did it. What holds the planets in place? God. But with the Enlightenment, we began the search for a more scientific understanding - physics, chemistry, biology and so forth. Not that we become atheists, but we gained deeper understanding about how the universe ticks. Similarly, every time we attribute everything to 'Leadership,\" we're no different from the people in the 1500's. We're simply admitting our ignorance. Not that we should become leadership atheists (leadership does matter), but every time we throw our hands up in frustration - reverting back to \"well, the answer must be Leadership!\" - we prevent ourselves from gaining deeper, more scientific understanding about what makes great companies tick.” ― Jim Collins, Good to Great: Why Some Companies Make the Leap... and Others Don't"
        },
        {
            "Number": "520",
            "Quote": "“Make no mistake: if you want to make it as an entrepreneur, you simply can’t do it on your own. This is a nonnegotiable!” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "521",
            "Quote": "“...As marriage was woman's business, unmarried women, though doubtless unfortunate, must simply be considered as business failures: harsh, doubtless, but in tune with the sink-or-swim capitalist times.” ― Ruth Brandon, Governess: The Lives and Times of the Real Jane Eyres"
        },
        {
            "Number": "522",
            "Quote": "“Economics is a knack of managing unlimited demand with limited supply.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "523",
            "Quote": "“There is a difference between a hobby and a business. Define which one yours is and make it stand out.” ― Victor Kwegyir, Quotable Quotes for Business: Lessons for Success"
        },
        {
            "Number": "524",
            "Quote": "“I should become happier at what I do and leave others happier than before they’d met me.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "525",
            "Quote": "“Some people mistakenly refer to software defects as bugs. When called bugs, they seem like pesky things that should be swatted or even ignored. This trivializes a critical problem and fosters a wrong attitude. Thus, when an engineer says there are only a few bugs left in a program, the reaction is one of relief. *Supposed, however, that we called them time bombs instead of bugs.* Would you feel the same sense of relief if a programmer told you that he had thoroughly tested a program and there were only a few time bombs left in it? Just using a different term changes your attitude entirely.” ― Watts S. Humphrey, Reflections on Management: How to Manage Your Software Projects, Your Teams, Your Boss, and Yourself"
        },
        {
            "Number": "526",
            "Quote": "“In business, ruthlessness is righteousness. Seldom are there those, whom are ruthlessly righteous. Listen to these people, before the Earth repents of mankind.” ― Justin K. McFarlane Beau"
        },
        {
            "Number": "527",
            "Quote": "“It’s one thing to have the respect of your peers in the business. Their opinions are not always verbalized but if you are doing the right thing you don’t need validation.” ― Carlos Wallace"
        },
        {
            "Number": "528",
            "Quote": "“Conquer your customer as you would a woman” ― Bangambiki Habyarimana, The Great Pearl of Wisdom"
        },
        {
            "Number": "529",
            "Quote": "“Not all business is good business, and not every customer is a good customer.” ― Steve Woodruff, Clarity Wins: Get Heard. Get Referred."
        },
        {
            "Number": "530",
            "Quote": "“When a brand commits itself to its customer's journey, to helping resolve their internal, external and philosophical problems and then inspires them with an aspirational identity, they do more than sell products, they change lives.” ― Donald Miller, Building a StoryBrand: Clarify Your Message So Customers Will Listen"
        },
        {
            "Number": "531",
            "Quote": "“Your career is like a garden. It can hold an assortment of life's energy that yields a bounty for you. You do not just need to grow one thing in your garden. You can do more than one thing in your career; in fact, the more diverse your talents, the more successful you will be. Seek personal and professional development. Continuously learn and challenge yourself.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "532",
            "Quote": "“Business Plans: It's about the Process, Not the Product” ― Delvin R. Chatterson, The Complete Do-It-Yourself Guide to Business Plans: It's about the Process, Not the Product New, Revised and Expanded, Second Edition"
        },
        {
            "Number": "533",
            "Quote": "“Fire does get attention but remember it also burn things around.” ― Sanjeev Beekeeper"
        },
        {
            "Number": "534",
            "Quote": "“Immature product teams make the same mistake: They want users to understand their products but refuse to understand their users.” ― Mario Maruffi"
        },
        {
            "Number": "535",
            "Quote": "“Be prepared to go the extra mile; there is less competition there.” ― Mac Anderson, 212 Service: The 10 Rules for Creating a Service Culture"
        },
        {
            "Number": "536",
            "Quote": "“Your outlook upon life, your estimate of yourself, your estimate of your value are largely colored by your environment. Your whole career will be modified, shaped, molded by your surroundings, by the character of the people whom you come in contact everyday.” ― Orison Swett Marden"
        },
        {
            "Number": "537",
            "Quote": "“You can turn your business into a world renowned world” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "538",
            "Quote": "“I don’t like getting involved with other people’s business. I don’t have time for it. And yet here I am, listening to myself say four dooming words. “Leave everything to me.” ― Victoria Aveyard, Red Queen"
        },
        {
            "Number": "539",
            "Quote": "“Since the age of Socrates, social interaction has been continually scrutinized, leading to a constant change in guidelines and rules for social conduct. As a result, societal parameters do exist surrounding how society defines proper behaviors.” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "540",
            "Quote": "“The comeback need to always be more effective than the downfall!” ― Jonathan Anthony Burkett"
        },
        {
            "Number": "541",
            "Quote": "“It’s not about the amount of time you put in, it is the way you spend the time on the work you need to get done. Saying that you worked ten hours on something that went nowhere is not really anything to brag about.” ― Loren Weisman, The Artist's Guide to Success in the Music Business: The “Who, What, When, Where, Why & How” of the Steps that Musicians & Bands Have to Take to Succeed in Music"
        },
        {
            "Number": "542",
            "Quote": "“Data Scientists should refuse to be denied by someone else's vision of what's possible.” ― Damian Mingle"
        },
        {
            "Number": "543",
            "Quote": "“Destiny and fate are of one’s own making, and riches and happiness are rarely found at the end of an easily-traversed path.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "544",
            "Quote": "“Data Science takes the guesswork/emotions out of answering business questions by applying logic and mathematics to find better solutions.” ― Ken Poirot"
        },
        {
            "Number": "545",
            "Quote": "“Marketing without statistics is navigating without a map.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "546",
            "Quote": "“Principle 1 from The Most Important Lessons in Economics and Finance book: \"It can take a lifetime to build a solid business and moments to destroy it\" (Criniti, 2014, p. 32).” ― Anthony M. Criniti IV, The Most Important Lessons in Economics and Finance: A Comprehensive Collection of Time-Tested Principles of Wealth Management"
        },
        {
            "Number": "547",
            "Quote": "“If everyone has the same number of hours in a day, why do some people seem to get so much more done than others? How do they do more, achieve more, earn more, have more? If time is the currency of achievement, then why are some able to cash in their allotment for more chips than others? The answer is they make getting to the heart of things the heart of their approach. They go small.” ― Gary Keller, The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results"
        },
        {
            "Number": "548",
            "Quote": "“It’s not always what is said, but what is left on the plate, that tells the true story.” ― Sarah Pullen, Healthy Profits: How to promote healthy choices that grow your food business"
        },
        {
            "Number": "549",
            "Quote": "“Good business relationships build trust and create a way to exchange ideas openly without second-guessing the other person.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "550",
            "Quote": "“Leadership is an unlimited resource and as such, is a lifelong pursuit of learning. That learning must be to transform 'leader of position' to 'leadership with moral purpose'.” ― Hilarie Owen"
        },
        {
            "Number": "551",
            "Quote": "“It is time for a wealth creation revolution. And it starts with you.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "552",
            "Quote": "“Some business leaders think they’d rather have great execution than superior strategies, but the truth is you can’t have the first without the second.” ― Brad Chase , Strategy First: How Businesses Win Big"
        },
        {
            "Number": "553",
            "Quote": "“Professionalism is not about what work you do, it is about how well you do the work.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "554",
            "Quote": "“To impart a moral responsibility to exercise fairness in leadership builds greater leaders of strong character.” ― Wayne Chirisa"
        },
        {
            "Number": "555",
            "Quote": "“I had a vision and made it happen.- Christina Lari, Olivia & Owen” ― Holly Hurd, Venture Mom: From Idea to Income in Just 12 Weeks"
        },
        {
            "Number": "556",
            "Quote": "“Great customer service is not just one part of your business, it should be in every part of your business!” ― Tom Kenemore, Fans On Fire: How to Skyrocket Your Leads, Sales, and Reputation with The Most Trusted Form of Marketing"
        },
        {
            "Number": "557",
            "Quote": "“If your beliefs are not useful to you, or they are not bringing you peace and abundance, update them!” ― Kim Ha Campbell, Inner Peace Outer Abundance"
        },
        {
            "Number": "558",
            "Quote": "“We all desperately need brilliant sales professionals far more than ever before – to help us, guide us, keep us informed and stop us from making diabolically stupid buying decisions.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "559",
            "Quote": "“Live what you love and what you love will fill your life.” ― Jodi Livon"
        },
        {
            "Number": "560",
            "Quote": "“Whenever in doubt, always look for the financial incentive.\" Law of the Hired Gun” ― Robert Danger Workman"
        },
        {
            "Number": "561",
            "Quote": "“Running a business is like driving. Keep adjusting the steering wheel, because no road is straight until you hit the highway. Drift, make sharp turns, do whatever you can to keep moving and achieve your dream.” ― J.R. Rim"
        },
        {
            "Number": "562",
            "Quote": "“Providing “the answer” is not the answer... I prefer presenting clients and students with “approaches” – that is methods, tools, and frameworks that put greater power in their hands and minds. That's more sustainable.” ― Michael Schrage, The Innovator's Hypothesis: How Cheap Experiments Are Worth More Than Good Ideas"
        },
        {
            "Number": "563",
            "Quote": "“Every successful business (1) creates or provides something of value that (2) other people want or need (3) at a price they're willing to pay, in a way that (4) satisfies the purchaser's needs and expectations and (5) provides the business sufficient revenue to make it worthwhile for the owners to continue operation.” ― Josh Kaufman, The Personal MBA: A World-Class Business Education in a Single Volume"
        },
        {
            "Number": "564",
            "Quote": "“The kingdom of God works in all spheres of culture, whether church, family, education, government, arts, business, or media. It is time to stop operating under the mindset that these spheres ought to be separated into secular and Christian, hoarding all the ‘sanctified spheres’ into the church, thereby leaving the world struggling in a vacuum of death. When we suck all the living water into the church, the world is left to die of thirst.” ― Karla Perry, Back to the Future: Rebuilding America's Stability"
        },
        {
            "Number": "565",
            "Quote": "“Never lose sight of your vision and value. What others choose not to see shouldn't make you go blind. The pursuit of your vision will require a commitment of blood, sweat, and tears. People may try to imitate you but your super power is that there can only be one you. When you no longer get mad and shift your focus, you have unlocked the power in your value. Stay true to your vision until your vision becomes your reality.” ― Tasha McCray"
        },
        {
            "Number": "566",
            "Quote": "“Theres no competition in DESTINY. Run your own RACE and wish others WELL!!!” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "567",
            "Quote": "“Decide, commit, act, succeed, repeat. The one thing that all the greats have in common is they sweat the small stuff and they pay very close attention to every detail.” ― Cliff Hannold"
        },
        {
            "Number": "568",
            "Quote": "“A true businessman capitalizes off other people's failures & problems.” ― Keriza"
        },
        {
            "Number": "569",
            "Quote": "“Growing a company is a marathon that requires patience, dedication, knowledge, good decision-making, vision, and the ability to see the big picture.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "570",
            "Quote": "“You may not have connections, or an education, or wealth, but with enough passion and sweat, you can make anything happen.” ― Gary Vaynerchuk, Crush It!: Why Now Is the Time to Cash In on Your Passion"
        },
        {
            "Number": "571",
            "Quote": "“Business, you know, may bring money, but friendship hardly ever does.” ― Jane Austen, Emma"
        },
        {
            "Number": "572",
            "Quote": "“Why do all this? Because there are people out there who need you, and they will be more than willing to give you what you need so you can give them your best, but if you're busy pursuing everyone, or if you're so drained at the end of the day, you won't be able to be your best and give your best.” ― Osayi Emokpae Lasisi, Billionaire Mindset (for MoneyMaking Mommies): How to make your Billions and build your legacy"
        },
        {
            "Number": "573",
            "Quote": "“Keep in mind that pitching investors is a process that requires preparation, data, vision, and honesty. And even if an investor passes on this particular start-up, don’t burn the bridge.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "574",
            "Quote": "“It is very important to remember what other people tell you, not so much what you yourself already know.” ― John D. Rockefeller, Quotations by John D. Rockefeller"
        },
        {
            "Number": "575",
            "Quote": "“Good brands reflect the histories of the time and the group of people that made them. They can not be copied. They can not be recycled.” ― Richard Branson, Business Stripped Bare: Adventures of a Global Entrepreneur"
        },
        {
            "Number": "576",
            "Quote": "“Everyone that enters through Him is secured and the person shall find pastures for himself. Jesus really cares!” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "577",
            "Quote": "“Rome was not built in a day, but Hiroshima and Nagasaki were destroyed in a day.” ― Vijay Kedia"
        },
        {
            "Number": "578",
            "Quote": "“...certain business leaders mistakenly believe that time on-task equates with task completion and productivity. Even in the industrial era of rote factory work, this was untrue. It is a misguided fallacy, and an expensive one, too.” ― Matthew Walker, Why We Sleep: Unlocking the Power of Sleep and Dreams"
        },
        {
            "Number": "579",
            "Quote": "“The most important subject in the curriculum in the future years will be how to love ourselves and be content.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "580",
            "Quote": "“If we had borrowed we should not have been under the necessity of finding methods to cheapen production.” ― Henry Ford, My Life and Work"
        },
        {
            "Number": "581",
            "Quote": "“During my time in the military it was always preached that complacency could kill you, literally. Complacency - a feeling of smug or uncritical satisfaction with oneself or one's achievements. In your business and life complacency can kill as well, it can kill your aspirations, your goals, but more importantly it can kill your dreams. Take time to celebrate the wins, but keep moving forward, don't get complacent.” ― Fernando The SpartanGomez"
        },
        {
            "Number": "582",
            "Quote": "“The name given to that one dramatic moment in an epidemic when everything can change all at once is the Tipping Point.” ― Malcolm Gladwell"
        },
        {
            "Number": "583",
            "Quote": "“From today onward, you will learn how to become evangelical about the many ways you help people.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "584",
            "Quote": "“Follow your heart and realize that your dream is your dream for a reason.” ― Dori Roberts"
        },
        {
            "Number": "585",
            "Quote": "“A man with debt soon becomes a man with disturbance.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "586",
            "Quote": "“It's not only how much money you make. It's what you do with it that determines your financial condition.” ― Sandra S. Simmons, Unleash Your Cash Flow Mojo: The Business Owner's Guide to Predicting, Planning and Controlling Your Company's Cash Flow"
        },
        {
            "Number": "587",
            "Quote": "“We need to embrace change in order to sell change.” ― Yuri van der Sluis"
        },
        {
            "Number": "588",
            "Quote": "“When you are willing, you don’t need to confront anything. It’s you that puts the resistance and unwillingness there. Put willingness there and resistance melts away.” ― Meir Ezra"
        },
        {
            "Number": "589",
            "Quote": "“We can never fall short when it comes to recruiting, hiring, maintaining and growing our workforce. It is the employees who make our organization’s success a reality.” ― Vern Dosch, Wired Differently"
        },
        {
            "Number": "590",
            "Quote": "“We are often way too busy. Take the time to rest. Sleep when you should. Take a day to relax from time to time. Some people make this too high of a priority… some not so all.” ― Josh Hatcher"
        },
        {
            "Number": "591",
            "Quote": "“It is our business to restore the earth back to God through the principles of the Kingdom.” ― Sunday Adelaja, The Mountain of Ignorance"
        },
        {
            "Number": "592",
            "Quote": "“Being busy doesn't mean being productive.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "593",
            "Quote": "“What kind of impression are you leaving on people? Activate the ability for your first impression and last impression!” ― John Di Lemme , *57* Must Use Words in Every Piece of Marketing that You Do for Your Business"
        },
        {
            "Number": "594",
            "Quote": "“When your intuition is strong, follow it.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "595",
            "Quote": "“Police internal affairs are in the business of protecting corrupt and incompetent police officers from prosecution due to the extensive range of laws that they have blatantly broken.” ― Steven Magee"
        },
        {
            "Number": "596",
            "Quote": "“The difficulties of people should be our business.” ― Sunday Adelaja, The Mountain of Ignorance"
        },
        {
            "Number": "597",
            "Quote": "“Salespeople who think that it’s all about price aren’t required: If it can be sold on the internet at the lowest price, you can take the huge cost of a sales team out of the equation.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "598",
            "Quote": "“He is the only option for better living.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "599",
            "Quote": "“God wants you to begin to strategise, plan, draw out tactics, methodologies of how your business would take over that particular sphere of business where you are” ― Sunday Adelaja"
        },
        {
            "Number": "600",
            "Quote": "“Social Media Marketing is just one part within the Digital Marketing ecosystem and both enable you to share your brand story with the world.” ― Naomi Mc Laughlan, Brand Story Telling: Book #3 in the START-UPS ON A SHOESTRING BUDGET Series"
        },
        {
            "Number": "601",
            "Quote": "“Why do you think? Because you try not to know.” ― Meir Ezra"
        },
        {
            "Number": "602",
            "Quote": "“If your brand is a cliché, your brand is losing sales and growth. Why? If your brand is using clichés to promote itself, you’re promoting your “category,” not your unique, individual brand. Painful? Yes. Solvable? Absolutely.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "603",
            "Quote": "“There are more temptations in business than in any other sphere of the society” ― Sunday Adelaja"
        },
        {
            "Number": "604",
            "Quote": "“Young man, your problem and the reason so many like you fail, is simply because you allow yourself to give up far too early.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "605",
            "Quote": "“This is the music business. 'Five years is five hundred years' - your words.” ― Jennifer Egan, A Visit from the Goon Squad"
        },
        {
            "Number": "606",
            "Quote": "“For every dilemma, find at least three or four possible solutions. The creative process leads to better results.” ― Marilyn Suttle, Who's Your Gladys?: How to Turn Even the Most Difficult Customer Into Your Biggest Fan"
        },
        {
            "Number": "607",
            "Quote": "“The better you are at something, the less effort you apply in bringing the expected results.” ― Meir Ezra"
        },
        {
            "Number": "608",
            "Quote": "“You’ve got to be driven to become successful.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "609",
            "Quote": "“You are unlimited.” ― Meir Ezra"
        },
        {
            "Number": "610",
            "Quote": "“How you think and create your inner world that you gonna become in your outer world. Your inner believe manifest you in the outside” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "611",
            "Quote": "“I don’t believe it can be taught as if it were a recipe. There aren’t ingredients and techniques that will guarantee success. Parameters exist that, if followed, will ensure a business can continue, but you cannot clearly define our business success and then bottle it as you would a perfume. It’s not that simple: to be successful, you have to be out there, you have to hit the ground running; and, if you have a good team round you and more than your fair share of luck, you might make something happen. But you certainly can’t guarantee it just by following someone else’s formula. Business is a fluid, changing substance.” ― Richard Branson, Losing My Virginity: How I've Survived, Had Fun, and Made a Fortune Doing Business My Way"
        },
        {
            "Number": "612",
            "Quote": "“500 TB of data are created on an average chemical plant. Imagine what would happen, if you’d combine these data with process and experience data.” ― Pedro Ahlers"
        },
        {
            "Number": "613",
            "Quote": "“ENERGY IS DRIVEN BY THEM, THOSE WHO ARE INTO MARKET.” ― DHIRAJ BELANI"
        },
        {
            "Number": "614",
            "Quote": "“There were two elements to look for in any draft: one was the accuracy in reflecting the deal, and the other, its omissions. The difficult part was to find out what had been left out. Frank would start with \"what if\" and then go through the structure of the draft and see how it worked. . . . The process of asking questions was like playing pinball. He'd run the ball through the maze and see what lit up and what didn't. He would spend ten or fifteen balls through with me, and the agreement would start to take on shape, then three dimensions and life. When its inadequacies showed, he asked the inevitable question: Could we layer on another level of complexity to account for the omissions? Of course.” ― Lawrence Lederman, Tombstones: A Lawyer's Tales from the Takeover Decades"
        },
        {
            "Number": "615",
            "Quote": "“Opinions are the cheapest commodities on earth. Everyone has a flock of opinions ready to be wished upon anyone who will accept them. If you are influenced by \"opinions\" when you reach DECISIONS, you will not succeed in any undertaking.” ― Napoleon Hill, Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century"
        },
        {
            "Number": "616",
            "Quote": "“Of course, clothes don't make the man, but they make all of him except his hands and face during business hours, and that's a pretty considerable area of the human animal. A dirty shirt may hide a pure heart, but it seldom covers a clean skin. If you look as if you had slept in our clothes, most men will jump to the conclusion that you have, and you will never get to know them well enough to explain that your head is so full of noble thoughts that you haven't time to bother with the dandruff on your shoulders...Appearances are deceitful, I know, but so long as they are, there's nothing like having them deceive for us instead of against us.” ― George Horace Lorimer, Letters from a Self-Made Merchant to His Son"
        },
        {
            "Number": "617",
            "Quote": "“God has no business with irresponsible people.” ― Sunday Adelaja, The Mountain of Ignorance"
        },
        {
            "Number": "618",
            "Quote": "“Learning is about seeing things froma a different perspective. My role is to help people improve their vision” ― Bob Selden"
        },
        {
            "Number": "619",
            "Quote": "“Tenderhearted people are silent sufferers they just learn the art to fly with broken wings.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "620",
            "Quote": "“The value of an idea lies in the using of it. It's not about ideas, it's about making ideas happen. The mission of innovation is to lead to progress and implemented better ways.” ― Csaba Gabor"
        },
        {
            "Number": "621",
            "Quote": "“Don’t be afraid of failures it takes courage to try new things & only those who try create miracles.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "622",
            "Quote": "“Another way of remaining in intimacy with God is by remaining in His presence.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "623",
            "Quote": "“Business is about creating value for a specific group of people.” ― Hendrith Smith, Essays on Capitalism & the U.S. Economy"
        },
        {
            "Number": "624",
            "Quote": "“It doesn't make sense to hire smart people and then tell them what to to , We hire smart people so they can tell us what to do.” ― Steve Jobs, Steve Jobs: His Own Words and Wisdom"
        },
        {
            "Number": "625",
            "Quote": "“Talking is overrated. Showing the example is underrated.” ― Maxime Lagacé"
        },
        {
            "Number": "626",
            "Quote": "“Once poverty is gone, we'll need to build museums to display its horrors to future generations. They'll wonder why poverty continued so long in human society - how a few people could live in luxury while billions dwelt in misery, deprivation and despair.” ― Muhammad Yunus, Creating a World Without Poverty: Social Business and the Future of Capitalism"
        },
        {
            "Number": "627",
            "Quote": "“You can't deliver the future, if you are not in the future” ― Mack Craft"
        },
        {
            "Number": "628",
            "Quote": "“How we feel about those we give our business to is of vital importance.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "629",
            "Quote": "“The whole secret lies in confusing the enemy, so that he cannot fathom our real intent.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "630",
            "Quote": "“Navigating an enterprise requires a bit more skill specialization than a product manager inside of a smaller organization. Above all else, an enterprise product manager needs: communication, scope management, and business acumen.” ― Blair Reeves, Building Products for the Enterprise: Product Management in Enterprise Software"
        },
        {
            "Number": "631",
            "Quote": "“Make sure everyone, who works with you or for you, feels the need to tell others about the incredible experience.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "632",
            "Quote": "“If you want to succeed, simply be willing to experience every human reaction to what you create.” ― Meir Ezra"
        },
        {
            "Number": "633",
            "Quote": "“Our business model has been to partner with bigger firms and team on projects to gain experience. A bigger firm always enhances my smaller firm’s position.” ― Linda Rawson, The Minority and Woman-Owned Small Business Guide to Government Contracts: Everything You Need to Know to Get Started"
        },
        {
            "Number": "634",
            "Quote": "“Without breaking the rules sometimes, you won't achieve anything.” ― Yuri van der Sluis"
        },
        {
            "Number": "635",
            "Quote": "“The secret to success in business is synergy.” ― Farshad Asl"
        },
        {
            "Number": "636",
            "Quote": "“Stop hiding, stop pretending that you are not as powerful as you are. Stop lying to yourself.” ― Meir Ezra"
        },
        {
            "Number": "637",
            "Quote": "“MISUNDERSTANDING\" arises only when you see the things with Closed Eyes” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "638",
            "Quote": "“Being Wise & Being Smart are two different things anyone can be smart but those who master the art of knowing what to overlook in this journey called life deserves to be called Wise” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "639",
            "Quote": "“Don't ask creator to guide your footsteps if you're not willing to move your feet.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "640",
            "Quote": "“Much of publishing (and any business) is a matter of making the right connection with the right person at the right time at the right place. You can’t make that connection working alone in your office at your computer or curled up with your legal pad writing your story.” ― W. Terry Whalin, 10 Publishing Myths, Insights Every Author Needs to Succeed"
        },
        {
            "Number": "641",
            "Quote": "“We do not recognize that we are addicted to some negative psychological habit, some terribly self-destructive patterns of thinking...” ― Abhishek S, KARMA"
        },
        {
            "Number": "642",
            "Quote": "“Every vision needs a plan and every plan needs a vision” ― Tony Guarnaccia"
        },
        {
            "Number": "643",
            "Quote": "“To satisfy a want or a need, you must first go for it” ― Martin Powell"
        },
        {
            "Number": "644",
            "Quote": "“Get to the next level by learning the art of investing in people.” ― -Shandel Slaten"
        },
        {
            "Number": "645",
            "Quote": "“If you wait for the mango fruits to fall, you'd be wasting your time while others are learning how to climb the tree” ― Michael Bassey Johnson, The Book of Maxims, Poems and Anecdotes"
        },
        {
            "Number": "646",
            "Quote": "“If you are depressed, you are living in the past. If you are anxious, you are living in the future” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "647",
            "Quote": "“Entrepreneur, you don't need 20 years of experience in your industry but rather, you do need an idea that will bring disruption over the next 20 plus years. ~” ― Onyi Anyado, The Doorway to Distinction: 200 Quotes To Inspire You To Reach New Levels Of Excellence"
        },
        {
            "Number": "648",
            "Quote": "“Having a high ChEQ will allow businesses to achieve their strategic goals more easily” ― Fritz Shoemaker"
        },
        {
            "Number": "649",
            "Quote": "“You can be extremely productive and not make a profit. Gotta focus on profit-driven productivity if you want to earn money.” ― Richie Norton"
        },
        {
            "Number": "650",
            "Quote": "“Anyone can have the best product, people and team, but arrogance, ignorance and avoidance when it comes to communication will destroy any brand, concept or company.” ― Loren Weisman"
        },
        {
            "Number": "651",
            "Quote": "“Even the richest of brands are robbed by poor character.” ― Criss Jami, Healology"
        },
        {
            "Number": "652",
            "Quote": "“There is a bigger creation that follows a loss. And the new creation is because of the loss.” ― Meir Ezra"
        },
        {
            "Number": "653",
            "Quote": "“You recreate your world to your taste with God's Word in your mouth.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "654",
            "Quote": "“Don’t live like a CEO when you’re still a sandwich artist.” ― Sophia Amoruso, #Girlboss"
        },
        {
            "Number": "655",
            "Quote": "“Investments in greater email marketing sophistication often lead to even higher returns, not diminishing returns.” ― Chad White, Email Marketing Rules"
        },
        {
            "Number": "656",
            "Quote": "“The confidence felt, when dealing with genuine reputation, often outweighs the simplicity of price.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "657",
            "Quote": "“... all too often, a successful new business model becomes the business model for companies not creative enough to invent their own. [2002] p.46” ― Gary Hamel, Leading the Revolution: How to Thrive in Turbulent Times by Making Innovation a Way of Life"
        },
        {
            "Number": "658",
            "Quote": "“CRM is rather boring in itself. It's the fortunes you can build using CRM that makes it so interesting.” ― Michael McCafferty"
        },
        {
            "Number": "659",
            "Quote": "“During the gold rush its a good time to be in the pick and shovel business” ― Mark Twain"
        },
        {
            "Number": "660",
            "Quote": "“The potential of controlling and living a successful life according to your terms depends on how you think. Your perception is your world. You can create the life you want and in fact, you can even shape it the way you want it.” ― Dee Dee Artner"
        },
        {
            "Number": "661",
            "Quote": "“We have not noticed how fast the rest has risen. Most of the industrialized world--and a good part of the nonindustrialized world as well--has better cell phone service than the United States. Broadband is faster and cheaper across the industrial world, from Canada to France to Japan, and the United States now stands sixteenth in the world in broadband penetration per capita. Americans are constantly told by their politicians that the only thing we have to learn from other countries' health care systems is to be thankful for ours. Most Americans ignore the fact that a third of the country's public schools are totally dysfunctional (because their children go to the other two-thirds). The American litigation system is now routinely referred to as a huge cost to doing business, but no one dares propose any reform of it. Our mortgage deduction for housing costs a staggering $80 billion a year, and we are told it is crucial to support home ownership, except that Margaret Thatcher eliminated it in Britain, and yet that country has the same rate of home ownership as the United States. We rarely look around and notice other options and alternatives, convinced that \"we're number one.” ― Fareed Zakaria, The Post-American World"
        },
        {
            "Number": "662",
            "Quote": "“Poor people waste time, rich people save time. Poor people who invest time are no longer poor.” ― Alin Sav"
        },
        {
            "Number": "663",
            "Quote": "“What do you call a generic pitch sent out to hundreds of strangers hgoping that one will bite? Spam.” ― Jason Fried, Rework"
        },
        {
            "Number": "664",
            "Quote": "“In business, three things are necessary: knowledge, temper, and time.” ― Owen Felltham"
        },
        {
            "Number": "665",
            "Quote": "“In business, as in politics, the public is ever so tolerant of those who slime.” ― Christopher Moore, Practical Demonkeeping"
        },
        {
            "Number": "666",
            "Quote": "“If you choose the right vendors, your collective and sincere motives should establish both trust & grace on both sides of the relationship.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "667",
            "Quote": "“Seriously: Do you want to spend your working life simply being satisfied? When you look back on 50 years spent in business, do you want to be able to say, “Well, I was satisfied\"?? No! Make happiness your goal. As in, “Let’s make this a workplace where people are happy to work.\" As in, “I’ve been working for 50 years now, and it absolutely rocks! To me work is challenging, stimulating and just plain fun. ” ― Alexander Kjerulf, Happy Hour is 9 to 5"
        },
        {
            "Number": "668",
            "Quote": "“To grant beingness is more important than being somebody.” ― Meir Ezra"
        },
        {
            "Number": "669",
            "Quote": "“If you are in a position where you can reach people, then use your platform to stand up for a cause. HINT: social media is a platform.” ― Germany Kent"
        },
        {
            "Number": "670",
            "Quote": "“When the business people get done with the arts, all that’s left will be entertainment.” ― Daniel R. Thorne"
        },
        {
            "Number": "671",
            "Quote": "“Stay Calm, Stay Covered, Stay Considerate, Stay Cautious & Stay Caffeinated.” ― Loren Weisman"
        },
        {
            "Number": "672",
            "Quote": "“The Highest Reward for men and women 's devotion and dedication to excellence is not what one gets from it but what one he or she becomes through it.” ― Bill Britt"
        },
        {
            "Number": "673",
            "Quote": "“Tell your good news as an evangelist would. Do so with a passion driven by a need to help and solve problems that some people didn’t even know they had.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "674",
            "Quote": "“Imitating recent successes is a game that everybody knows how to play. But seeing the next big thing before anybody else sees it is far more valuable... It means being a little bit wrong at just the right time.” ― Derek Thompson, Hit Makers: The Science of Popularity in an Age of Distraction"
        },
        {
            "Number": "675",
            "Quote": "“If one had a capable subordinate, allowing them to take charge was a wise gesture; interference from an incompetent superior would only lead to tragedy.” ― Maruyama Kugane, The Men in the Kingdom Part II"
        },
        {
            "Number": "676",
            "Quote": "“The truth is that banks are the last feudal kingdoms, their rulers omnipotent, divine warlords. Their key lieutenants are 'ronin' (wandering mercenary samurai) who roam financial markets ready to ally themselves to any warlord for a share of plunder. This is not the place to apply the latest management theory.” ― Satyajit Das, Traders, Guns & Money: Knowns and Unknowns in the Dazzling World of Derivatives"
        },
        {
            "Number": "677",
            "Quote": "“Once a message has been sent electronically, the writer has ceded power not just to the recipient, but to whomever the recipient chooses to forward the information. To access electronic communication is to control it. The recipient, not the writer, has power over future dissemination of the writer’s words.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "678",
            "Quote": "“Time cannot be managed. It’s going to pass you by, whether or not you are trying to manage it.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "679",
            "Quote": "“Work was intended not to give a man a reason to live, but rather to give him a means to live.” ― Criss Jami, Healology"
        },
        {
            "Number": "680",
            "Quote": "“We all need salespeople who understand the problem and can deliver a solution that works brilliantly for both sides.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "681",
            "Quote": "“Put it this way, George,” he suggested, when he had savoured the night air for a moment. “You traveling on business, or for pleasure in this thing? Which is it? Smiley’s reply was also slow in coming, and as indirect: “I was never conscious of pleasure,” he said. “Or perhaps I mean: of the distinction.” ― John le Carré, Smiley's People"
        },
        {
            "Number": "682",
            "Quote": "“...бизнес и симпатии - две разные вещи. Самые милые люди становились твёрдыми и беспощадными, если этого требовали соображения дела.” ― Arthur Hailey, Отель. Аэропорт"
        },
        {
            "Number": "683",
            "Quote": "“say yes to synchronicity - a very important tool that has assisted me in reaching many business) goals and objectives.” ― Debra K. Adams, The Missing Piece in Business"
        },
        {
            "Number": "684",
            "Quote": "“A true professional not only follows but loves the processes, policies and principles set by his profession.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "685",
            "Quote": "“Nowadays… deals are transactional rather than personal. Instead of placing your faith in a person, you get lawyers to write safeguards into the contract. This is an historic shift from a trust economy to a risk economy. But trust is not a dispensable luxury. It is the very basis of our social life. Many scholars believe that capitalism had religious roots because people could trust other people who, feeling that they were answerable to God, could be relied on to be honest in business. A world without trust is a lonely and dangerous place.” ― Jonathan Sacks"
        },
        {
            "Number": "686",
            "Quote": "“If people are not told the are appreciated, they will assume the opposite” ― Aubrey C Daniels"
        },
        {
            "Number": "687",
            "Quote": "“It is not good management to take profits out of the workers or the buyers; make management produce the profits. Don't cheapen the product; don't cheapen the wage; don't overcharge the public. Put brains into the method, and more brains, and still more brains—do things better than ever before; and by this means all parties to business are served and benefited.” ― John Ford"
        },
        {
            "Number": "688",
            "Quote": "“Business is Ideas only not Rupees or Dollars” ― Aboobacker Amani"
        },
        {
            "Number": "689",
            "Quote": "“Business has no emotions, no cares.” ― Scarlet Jei Saoirse"
        },
        {
            "Number": "690",
            "Quote": "“Pool is a game of thinking, strategy and accuracy - just like in business.” ― Shay Mizrahi"
        },
        {
            "Number": "691",
            "Quote": "“A diversified economy is a central pillar of economic security.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "692",
            "Quote": "“When people support you when you have done something wrong. It doesnt mean you are right, but it means those people are promoting their hate , bad behavior or living their bad lives through you.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "693",
            "Quote": "“If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter.” ― John Gottman ("
        },
        {
            "Number": "694",
            "Quote": "“You can't get ahead without believing in yourself.” ― Aurora Berill"
        },
        {
            "Number": "695",
            "Quote": "“Today quiz: What could be changed in your life, your system, your business, your relationships that would get you to the REAL?” ― Nick Catricala"
        },
        {
            "Number": "696",
            "Quote": "“We have a leadership crisis in our world today. It is based on the reality that we have developed leaders who care more about what people think about them, or how they are seen than they care about those that follow them.” ― Ford Taylor, Relactional Leadership: When Relationships Collide with Transactions"
        },
        {
            "Number": "697",
            "Quote": "“Answers are free, mistakes are costly.” ― Danielle Tate, Elegant Entrepreneur: The Female Founders Guide to Starting & Growing Your First Company"
        },
        {
            "Number": "698",
            "Quote": "“I tell him his business, all business, is legalized throat-cutting, like marriage is legalized fornication.” ― Patricia Highsmith, Strangers on a Train"
        },
        {
            "Number": "699",
            "Quote": "“Meet your people where they are. They may not be as good as they can be, but they are as good as they believe they can be. They are waiting for you to lead them.” ― Susan C. Foster, It's Not Rocket Science: Leading, Motivating and Inspiring Your Team To Be Their Best"
        },
        {
            "Number": "700",
            "Quote": "“When things get tough, remember this mariner’s star. Bring to mind that everything external is designed as a challenge. A test sent to ensure you are actually worthy of acquiring your goal and reward. Recognise them as such and you will always find a way to go through, go round, or ignore them as required.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "701",
            "Quote": "“An online tax program is only as good as the information the person enters into it and the understanding of what is being asked by the program.” ― Jeffrey Schneider EA CTRS NTPIF, Now What? I Got a Tax Notice from the IRS. Help!: Defining and deconstructing the scary and confusing letters that land in your mailbox."
        },
        {
            "Number": "702",
            "Quote": "“Dreaming isn't bad for you but not doing anything to craft your dream is.” ― Mohith Agadi"
        },
        {
            "Number": "703",
            "Quote": "“In the meantime, I had to get dressed and go to work, because going to work in my pajamas was apparently the definition of unprofessional. Cookie's words. I looked it up though. She was wrong. Webster's mentioned nothing about pajamas.” ― Darynda Jones, The Curse of Tenth Grave"
        },
        {
            "Number": "704",
            "Quote": "“Sales is an outcome, not a goal. It’s a function of doing numerous things right, starting from the moment you target a potential prospect until you finalize the deal.” ― Jill Konrath"
        },
        {
            "Number": "705",
            "Quote": "“Do business with honesty irrespective of what happens, whatever happens thereafter is correct. But do not start any accounts (karma).” ― Dada Bhagwan"
        },
        {
            "Number": "706",
            "Quote": "“As a business owner anywhere on earth, if you fail to do the needful by putting the right structure and processes in place, you have used your own hands to open doors for thieves and rogues to come in.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "707",
            "Quote": "“Rob Wheeley received several awards throughout his eight-year-long career. One of the most notable awards was the Trooper of the Year in 2000.” ― Rob Wheeley"
        },
        {
            "Number": "708",
            "Quote": "“False advertising makes a lot of people a lot of money. Lying is big business.” ― Marty Rubin"
        },
        {
            "Number": "709",
            "Quote": "“If you're not called crazy when you launch something new, it means you're not thinking BIG enough.” ― Linda Rottenberg, Crazy Is a Compliment: The Power of Zigging When Everyone Else Zags"
        },
        {
            "Number": "710",
            "Quote": "“People must make make risks, must make mess in their life's. They must make make mistakes, they must think - This is the part of the proccess \"learning\"!” ― Deyth Banger"
        },
        {
            "Number": "711",
            "Quote": "“Don't be in the Money Making Business; be in the Business Making Money.” ― Kayambila Mpulamasaka"
        },
        {
            "Number": "712",
            "Quote": "“The government is in the business of ruining the lives of the majority of the disabled.” ― Steven Magee"
        },
        {
            "Number": "713",
            "Quote": "“You can not have and create; so when you have something, you don’t create.” ― Meir Ezra"
        },
        {
            "Number": "714",
            "Quote": "“Putting in place the most ambitious and daring objective isn't enough, it should be backed with an intricate plan and executed like hell, this is what i call the superiority framework, from proximity the dots might seem random and chaotic but from a strategist view these dots are so beautifully interconnected forming greatness in an absolute form” ― Ahmed Elkadi"
        },
        {
            "Number": "715",
            "Quote": "“In this day and age, it is the business that knows how to woo and win the hearts of its customers that will eventually win their pockets.” ― J. N. HALM, CUSTOMER ROMANCE: A New Feel of Customer Service"
        },
        {
            "Number": "716",
            "Quote": "“Entrepreneurship is a learnable skill—like reading and writing.” ― Richie Norton"
        },
        {
            "Number": "717",
            "Quote": "“To want to own a restaurant can be a strange and terrible affliction. What causes such a destructive urge in so many otherwise sensible people? Why would anyone who has worked hard, saved money, often been successful in other fields, want to pump their hard-earned cash down a hole that statistically, at least, will almost surely prove dry? Why venture into an industry with enormous fixed expenses (...), with a notoriously transient and unstable workforce, and highly perishable inventory of assets? The chances of ever seeing a return on your investment are about one in five. What insidious spongi-form bacteria so riddles the brains of men and women that they stand there on the tracks, watching the lights of the oncoming locomotive, knowing full well it will eventually run over them? After all these years in the business, I still don't know.” ― Anthony Bourdain, Kitchen Confidential: Adventures in the Culinary Underbelly"
        },
        {
            "Number": "718",
            "Quote": "“The secret of a high-ranking website is not its colors but its content.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "719",
            "Quote": "“As a business owner, you should think of each and every employee you hire as a fruit seed. You plant it in your ranks and water it regularly so that it may grow and blossom out to become a thriving member of your organization.” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "720",
            "Quote": "“Opponents don’t have to be enemies.” ― Frank Sonnenberg, Soul Food: Change Your Thinking, Change Your Life"
        },
        {
            "Number": "721",
            "Quote": "“Look at your own behaviors and ask yourself, “Would I want to be my friend???” ― Ted Rubin"
        },
        {
            "Number": "722",
            "Quote": "“For all those who say its a Man world. Respect Women Its their World we are just guest here” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "723",
            "Quote": "“Don't allow your imagination to colour events as lesser men would, and see movement in motionless things.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "724",
            "Quote": "“My intention was, only, ever to help you see the light shining brightly in front, and inside, of you.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "725",
            "Quote": "“The bottom-line is, that nothing should affect your bottom-line.” ― Mamur Mustapha"
        },
        {
            "Number": "726",
            "Quote": "“I speak the truth. Not everyone who says they are ready to hear it really are.” ― Monika Zands"
        },
        {
            "Number": "727",
            "Quote": "“Be creative while inventing ideas, but be disciplined while implementing them.” ― Amit Kalantri"
        },
        {
            "Number": "728",
            "Quote": "“The experience economy, also known as theatrical economy, offers 6 new types of charging for time entry fees, per-event fees, initiation fees, access fees and membership fees. Creating new ways for business to grow with the experiences with the transformations created. These are engaging events of multiple dimensions. This is a new area for growth and potential and leads to further research on how this will evolve and affect communications.” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "729",
            "Quote": "“Only you can create bold goals that attract success for your business as you use your God-given gifts to serve others.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "730",
            "Quote": "“As Harvard Business School professor Peter Bregman advises, 'Don't write a book, write a page...Don't expect to be a great manager in your first six months, just try to set expectations well.” ― Shawn Achor"
        },
        {
            "Number": "731",
            "Quote": "“Tact is the knack of keeping quiet at the right time; of being so agreeable yourself that no one can be disagreeable to you; of making inferiority feel like equality. A tactful man can pull the stinger from a bee without getting stung.” ― George Lorimer"
        },
        {
            "Number": "732",
            "Quote": "“There’s no easier way to cure foolishness than to give a man leave to be foolish. And the only way to show a fellow that he’s chosen the wrong business is to let him try it.” ― George Lorimer, Letters from a Self-Made Merchant to His Son"
        },
        {
            "Number": "733",
            "Quote": "“Working hard for something we do not care about is called stress, working hard for something we love is called passion.” ― Simon Sinek, Start with Why: How Great Leaders Inspire Everyone to Take Action"
        },
        {
            "Number": "734",
            "Quote": "“Treat your employees like you would want to be treated if you were an employee.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "735",
            "Quote": "“You are running too fast, in the false direction.” ― Abdullah Shawaf"
        },
        {
            "Number": "736",
            "Quote": "“A “Wait and See” approach to an external factor is not strategic” ― Fritz Shoemaker"
        },
        {
            "Number": "737",
            "Quote": "“Intelligent men never do a business; only a fool kills his own beautiful instincts for the sake of a word profit.” ― Thiruman Archunan"
        },
        {
            "Number": "738",
            "Quote": "“You can’t be happy at work every day. No matter how much you love your job, there are still going to be bad days. And that’s cool—it’s always OK to have a bad day at work.” ― Alexander Kjerulf, Happy Hour is 9 to 5"
        },
        {
            "Number": "739",
            "Quote": "“A firm's income statement may be, likened to a bikini-what it reveals is interesting but what it conceals is vital.” ― Burton G. Malkiel"
        },
        {
            "Number": "740",
            "Quote": "“Successful people don´t make noise.” ― Alin Sav"
        },
        {
            "Number": "741",
            "Quote": "“I FOUND MYSELF LIVING FOR THE ONES WHO LOST THEIR LIVES” ― Qwana M. Reynolds-Frasier, Friend In Your Pocket Conversations With M.I.N.I M.E. Class Is Now In Session"
        },
        {
            "Number": "742",
            "Quote": "“In our age, the problems that needs to be solved are growing in number and business of life is overpowering” ― Sunday Adelaja"
        },
        {
            "Number": "743",
            "Quote": "“Sustainable business practices are the key to future proof current businesses.” ― Ashwin Muthiah, Chairman, AM International"
        },
        {
            "Number": "744",
            "Quote": "“Purpose drives the process by which we become what we are capable of being.” ― Lolly Daskal"
        },
        {
            "Number": "745",
            "Quote": "“A website is a window through which your business says hello to the world.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "746",
            "Quote": "“There is no counter-intention other than what you put there.” ― Meir Ezra"
        },
        {
            "Number": "747",
            "Quote": "“If you think you're unable to be on the cover of Time magazine, make your business to be there.” ― Paul Arden, It's Not How Good You Are, It's How Good You Want To Be"
        },
        {
            "Number": "748",
            "Quote": "“When a person tells you that someone or something is senior to you, they are trying to cage you. They are your enemy. They are not your friend.” ― Meir Ezra"
        },
        {
            "Number": "749",
            "Quote": "“Validating is validating a willingness.” ― Meir Ezra"
        },
        {
            "Number": "750",
            "Quote": "“In the end all the puzzles of your life will be solved ,until then... laugh at the scepticism, live for the moment and remember everything happens for a reason.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "751",
            "Quote": "“While there may be various tips, pointers, ingredients, and strategies to success, there is no one formula that always guarantees it other than to keep learning from failure itself.” ― Criss Jami, Healology"
        },
        {
            "Number": "752",
            "Quote": "“The most important question is, “How can I increase the effort I exert every day?” ― Meir Ezra"
        },
        {
            "Number": "753",
            "Quote": "“Financing is not the finish line for success. It means you are ready to start the marathon with the backing of fiscal endurance. Failure is still an option if you do not spend wisely, allocate correctly and continue to budget effectively.” ― Loren Weisman"
        },
        {
            "Number": "754",
            "Quote": "“If you would not spend time looking at it, do not ship it. One of the best quality assurance rules of thumb is to avoid publishing content that you would not consume. Simple, yet so hard to execute on. My audience deserves my very best. Repeat that to yourself every single day.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "755",
            "Quote": "“Business is win-win, everything else shades into crime.” ― Stefan Emunds"
        },
        {
            "Number": "756",
            "Quote": "“The interest of [businessmen] is always in some respects different from, and even opposite to, that of the public ... The proposal of any new law or regulation of commerce which comes from this order ... ought never to be adopted, till after having been long and carefully examined ... with the most suspicious attention. It comes from an order of men ... who have generally an interest to deceive and even oppress the public” ― Adam Smith, An Inquiry Into the Nature and Causes of the Wealth of Nations. Volume 1 of 2"
        },
        {
            "Number": "757",
            "Quote": "“If you don’t envision your business growing one hundred times in size, your start-up probably won’t generate much interest [from venture capitalist]” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "758",
            "Quote": "“Creating a Best Place to Work begins with you.” ― Deb Boelkes, The WOW Factor Workplace: How to Create a Best Place to Work Culture"
        },
        {
            "Number": "759",
            "Quote": "“It is your duty to save these prospects from that disappointment. Every potential customer, who misses out on what you have to offer, due to your lack of zeal or passion, every prospect who ends up with an excuse of an alternative from your lacklustre competition, should rest heavy on your conscience.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "760",
            "Quote": "“The decision must be made between Judaism and Christianity, between business and culture, between male and female, between the race and the individual, between unworhtiness and worth, between the earthly and the higher life, between negation and God-like. Mankind has the choice to make. There are only two poles, and there is no middle way.” ― Otto Weininger, Sex and Character: An Investigation of Fundamental Principles"
        },
        {
            "Number": "761",
            "Quote": "“Compassion is a lifetime business. You can't say something like, \"I will have compassion on Monday, Thursdays and Fridays only. But for the rest, I will be cruel\". That is hypocrisy.” ― Israelmore Ayivor"
        },
        {
            "Number": "762",
            "Quote": "“A better model of leadership means more effective leadership and better business results.” ― Bob Anderson, Mastering Leadership: An Integrated Framework for Breakthrough Performance and Extraordinary Business Results"
        },
        {
            "Number": "763",
            "Quote": "“Exercise is like defragmenting your hard drive. The scattered pieces of yourself become whole again. We become strong and successful.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "764",
            "Quote": "“Before you jump back up on that horse that threw you off, take a minute to figure out why you got tossed in the first place.” ― Loren Weisman"
        },
        {
            "Number": "765",
            "Quote": "“What does a customer need? Ask him “What keeps you busy now?” and think about how to help the customer avoid doing what he does now. A customer does not want to keep doing what he currently does. A customer needs something that allows him to avoid a current activity.” ― Anatoly Agulyansky"
        },
        {
            "Number": "766",
            "Quote": "“This is an industry to not only look at but become a part of for the future, right now in the present. It can create wealth, amplify health and help to save, sustain and grow economies while reducing our footprint. With the farm bill making it legal, again; it’s time to return to #hemp.” ― Loren Weisman"
        },
        {
            "Number": "767",
            "Quote": "“The Tech Humanist mindset is about aligning your business goals with broader human goals so that the more you succeed, the more you bring humanity with you.” ― Kate O'Neill, Tech Humanist: How You Can Make Technology Better for Business and Better for Humans"
        },
        {
            "Number": "768",
            "Quote": "“When you have to be the only one – to be right – you are in a jail of your own creation.” ― Meir Ezra"
        },
        {
            "Number": "769",
            "Quote": "“Each looked at the process [of drafting an agreement] as drawing a series of concentric circles to circumscribe the risks, with the issues in the inner rings being the most likely risks. They tried to draw as many circles as reasonably necessary, without burdening the deal with too much complexity. Frank's structures were often elliptical, covering issues in the outer rings while sometimes leaving others reasonably near the center uncovered. Marshall's deals were more symmetrical and less complex, unlikely to cover remote or novel risks not in the center (although possibly a problem in time), since he proceeded from precedent.” ― Lawrence Lederman, Tombstones: A Lawyer's Tales from the Takeover Decades"
        },
        {
            "Number": "770",
            "Quote": "“If you are going to be in business, you must learn about money: how it works, how it flows, and how to put it to work for you.” ― Idowu Koyenikan, Wealth for All: Living a Life of Success at the Edge of Your Ability"
        },
        {
            "Number": "771",
            "Quote": "“Your friends can be double-edged knife thy can either nurture you or destroy you. Choose them Wisely......” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "772",
            "Quote": "“All I had done was to improve on their strategy, and it was the beginning of a very important lesson in life - that anytime you find someone more successful than you are, especially when you're both engaged in the same business - you know they're doing something that you aren't.” ― Malcolm X, The Autobiography of Malcolm X"
        },
        {
            "Number": "773",
            "Quote": "“Scientific fraud is a business.” ― Steven Magee"
        },
        {
            "Number": "774",
            "Quote": "“You can’t change the world if the world doesn’t know who you are.” ― Francis Shenstone, The Explorer's Mindset: Unlock Health Happiness and Success the Fun Way"
        },
        {
            "Number": "775",
            "Quote": "“Where he comes from, the education he has received, his family history, his wealth, they matter not a jot, but the perception he conveys - that my, boy, is the key. If they believe he belongs - that he is part of the room - then he does, he is. And whichever room he is about to step into, then that is who he must become.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "776",
            "Quote": "“Wal-mart has done such a superb job of austerity, from start to finish, that austerity is all that's left.” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "777",
            "Quote": "“People who fail in life. Who fail to manage their lives. Who fail to put their lives together. They are always involving themselves in other people lives. They are always paying attention to others not themselves. They always mind other people business and are always talking bad about others.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "778",
            "Quote": "“Those who invest the most, get the greatest success.” ― Jeanette Coron"
        },
        {
            "Number": "779",
            "Quote": "“In Networking never underestimate anyones connection potential. Sometimes even a small office helper can connect you to the Business Owner !” ― Sampath K. Iyengar"
        },
        {
            "Number": "780",
            "Quote": "“A high-performing culture allows mistakes. Learning from mistakes keeps teams together and makes them grow.” ― Mario Maruffi"
        },
        {
            "Number": "781",
            "Quote": "“You don't get paid for hours or effort; you get paid for value created. To create value you need time, but you need a special kind of time -- you need interruption-free blocks of your best time.” ― David Finkel"
        },
        {
            "Number": "782",
            "Quote": "“Social Media= Business. Period.” ― Gary Vaynerchuk, Crush It!: Why Now Is the Time to Cash In on Your Passion"
        },
        {
            "Number": "783",
            "Quote": "“When you make something, when you improve something, when you deliver something, when you add some new thing or service to the lives of strangers, making them happier or healthier, or safer, or better, and when you do it all crisply efficiently, smartly, the way everything should be done but so seldom is – you’re participating more fully in the whole grand human drama. More than simply alive, you’re helping others to live more fully, and if that’s business, all right, call me a businessman.” ― Phil Knight, Shoe Dog: A Memoir by the Creator of NIKE"
        },
        {
            "Number": "784",
            "Quote": "“You are more likely to be successful if you worry about providing value instead of being successful.” ― Yuri van der Sluis"
        },
        {
            "Number": "785",
            "Quote": "“Le guerre sono belle, ma tendono a interferire con faccende più importanti.” ― David Eddings, Crystal Gorge"
        },
        {
            "Number": "786",
            "Quote": "“Most people don't know what they want. Some people kind of know what they want. Successful people know what they want and don't take no for an answer.” ― Colleen Ferrary Bader"
        },
        {
            "Number": "787",
            "Quote": "“You are only rejected when you think the game is over.” ― Yuri van der Sluis"
        },
        {
            "Number": "788",
            "Quote": "“When you treat your business or dream like a living, breathing baby… You’ll make better decisions and wiser choices. Stop, shortcutting, second guessing and buying into the unproven hype. Your dreams deserve more.” ― loren weisman"
        },
        {
            "Number": "789",
            "Quote": "“We all have this perfect little image of who we want to be, but it is unnecessary. Throw the image away. You're already you just be the best version of yourself.” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "790",
            "Quote": "“Making meaningful connections and growing relationships happens before you even meet someone.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "791",
            "Quote": "“Don't try to follow trends. Create them.” ― Simon Zingerman, We All Need Heroes: Stories of the Brave and Foolish"
        },
        {
            "Number": "792",
            "Quote": "“Developing strong interpersonal relationships by creating lasting connections instead of just passing acquaintances will take your business to a new level.” ― Farshad Asl, The \"No Excuses\" Mindset: A Life of Purpose, Passion, and Clarity"
        },
        {
            "Number": "793",
            "Quote": "“3 qualities of a good management; Honest Hungry & Smart.” ― Vijay Kedia"
        },
        {
            "Number": "794",
            "Quote": "“Able hands' are more favorable to business than 'adorable hearts'.” ― Amit Kalantri"
        },
        {
            "Number": "795",
            "Quote": "“Minding your own business is a good business to own. Anybody busy with creativity will not have time for the frivolity of busybody.” ― Vincent Okay Nwachukwu, Weighty 'n' Worthy African Proverbs - Volume 1"
        },
        {
            "Number": "796",
            "Quote": "“If you are the effect of it, you will lose it.” ― Meir Ezra"
        },
        {
            "Number": "797",
            "Quote": "“There is more to business and life than meets the eye.” ― Filip Dedi"
        },
        {
            "Number": "798",
            "Quote": "“Competition in business is a blessing, for without it, we wouldn’t be motivated to improve.” ― Nabil N. Jamal"
        },
        {
            "Number": "799",
            "Quote": "“The lesson of the California Roll is simple - people don't want something truly new, they want familiar done differently.” ― Nir Eyal"
        },
        {
            "Number": "800",
            "Quote": "“The best advertisement you can have is a happy customer with a big mouth. The worst advertisement you can have is an unhappy customer with a big mouth.” ― Larry Winget, It's Called Work for a Reason!: Your Success Is Your Own Damn Fault"
        },
        {
            "Number": "801",
            "Quote": "“Smiling is not a choice It’s a Lifestyle Pass it on” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "802",
            "Quote": "“We wrote Shift Ahead to document how the smartest companies and organizations shift their strategies in order to stay relevant in the face of swift and exponential changes in everything from technology to the forces of globalization, from politics and culture, from consumer tastes to human behavior. We wanted to find out how they shift ahead – how they stayed ahead of the curve, the competition, and the evolving requirements of their customers – given the barrage of evolving challenges.” ― Allen Adamson, Shift Ahead: How the Best Companies Stay Relevant in a Fast-Changing World"
        },
        {
            "Number": "803",
            "Quote": "“If someone is trying to sell you with only past credentials and older accolades without including present examples and up to date proof, you might be dealing with someone that is sharing expired information and does not have the up to date knowledge to help you.” ― Loren Weisman"
        },
        {
            "Number": "804",
            "Quote": "“Your purpose is God’s success. You can’t pay for what God want to be done. It’s God’s business; it’s his farmland, so when he said he’ll provide the rain, don’t doubt it!” ― Israelmore Ayivor, Daily Drive 365"
        },
        {
            "Number": "805",
            "Quote": "“When you put yourself in the customer’s shoes and begin your dialog from there, an immediate connection develops that stems beyond basic commerce and encourages loyalty.” ― Steve Maraboli"
        },
        {
            "Number": "806",
            "Quote": "“Unsere Führungskräfte von heute brauchen die Philosophie von gestern gepaart mit der Wissenschaft und der Technologie von morgen.” ― Anders Indset, Wild Knowledge: Outthink the Revolution"
        },
        {
            "Number": "807",
            "Quote": "“Just maintain such an intent, 'It will be great if customers come!' Thereafter, do not strain yourself in vain. To maintain regularity and to not spoil your intent is considered relative effort. If customers do not come, then you should not get upset and if someday they come by the truck load, then you should satisfy everyone.” ― Dada Bhagwan, Anger"
        },
        {
            "Number": "808",
            "Quote": "“You need to be careful about interacting with corporate controlled governments, as killing people is part of their business model.” ― Steven Magee"
        },
        {
            "Number": "809",
            "Quote": "“If your customers love you, they will not only remain fiercely loyal but become your most powerful marketing asset. Lovability is the greatest predictor of business success.” ― Brian de Haaff, Lovability: How to Build a Business That People Love and Be Happy Doing It"
        },
        {
            "Number": "810",
            "Quote": "“Accountants are in the past, managers are in the present, and leaders are in the future.” ― Paul Orfalea, Copy This!: Lessons from a Hyperactive Dyslexic who Turned a Bright Idea Into One of America's Best Companies"
        },
        {
            "Number": "811",
            "Quote": "“Ask open ended questions. Pull out the pain and the hurt your prospect is experiencing.” ― Timi Nadela, Get To The Top"
        },
        {
            "Number": "812",
            "Quote": "“Have and show motivation to do and learn. That's the key for a good career. Everything else is an extrapolation of that.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "813",
            "Quote": "“Adopt the positive in everything you do, for there will always be positivity there to find, if that is what you seek.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "814",
            "Quote": "“Look at every ‘revolutionary’ brand or category killer, it had an app, or a feature, or a functionality, or a user experience nobody else at that point could offer. I refer to this as ‘the Killer App’ principle.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "815",
            "Quote": "“The key to human-centric digital transformation is knowing your business purpose so you can fulfill it more meaningfully at scale.” ― Kate O'Neill, Tech Humanist: How You Can Make Technology Better for Business and Better for Humans"
        },
        {
            "Number": "816",
            "Quote": "“Who Do You Want Your Customers to Become was published... in 2012. Its essential insight is that innovation is an investment in the human capital, capabilities, and competencies of customers and clients. Business history gives great credence to this “human capital” model of innovation. For example, George Eastman didn't just invent cheap cameras and film; he created photographers. Steve Jobs didn't merely “reinvent” personal computing and mobile telephony; he reinvented how people physically touched and talked with their technologies. Successful innovators have a “vision of the customer future” that matters every bit as much as their product or service vision. By treating innovation as an investment in customer futures, organizations can make their customers more valuable. In other words, “Making Customers Better Makes Better Customers.” ― Michael Schrage, The Innovator's Hypothesis: How Cheap Experiments Are Worth More Than Good Ideas"
        },
        {
            "Number": "817",
            "Quote": "“Results with the absence of effort is the indication of professionalism.” ― Meir Ezra"
        },
        {
            "Number": "818",
            "Quote": "“All the nut eaters and food faddists I have ever known, died early after a long period of senile decay - Winston Churchill” ― Stuart Finlay, What Churchill Would Do"
        },
        {
            "Number": "819",
            "Quote": "“Darwin's Theory Survival of the Fittest, also applies into Business. Companies which consistently innovate, keep itself updated with customer's needs, market trends, check out their competition and accordingly make the strategy to evolve and keep them ahead of competition are the ones which are best suited for survival in Business Environment Evolution” ― Ashu Gaur"
        },
        {
            "Number": "820",
            "Quote": "“TO BE AN ENTREPRENEUR, BE A DOER FIRST. IT TAKES “YOU” TO BE THAT!” ― PRIYANSHU JOSHI"
        },
        {
            "Number": "821",
            "Quote": "“God desires your increase in your leadership, stewardship, relationship, and business” ― Sunday Adelaja"
        },
        {
            "Number": "822",
            "Quote": "“I would love to tell you that being a content manager is easy. Straightforward. That you will be able to focus on what is most important and leave everything else aside. But a lot of it is learning to create something compelling in the middle of an absolute whirlwind. Learning to use a huge list of tools that need to be sharpened every day. It is about zooming out when you need big picture thinking, and zooming in when the details need to be ironed out. Managing content, business expectations, and human beings: all at once.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "823",
            "Quote": "“QUIT = Quickly Uphold Important Things” ― Richie Norton"
        },
        {
            "Number": "824",
            "Quote": "“You don't want to meet me...but many of you will.” ― domenic aversa, Corporate Undertaker: Business Lessons from the Dead and Dying"
        },
        {
            "Number": "825",
            "Quote": "“That's the positive aspect of trade I suppose. The world gets stirred up together. That's about as much as I have to say for it.” ― Isabel Hoving, The Dream Merchant"
        },
        {
            "Number": "826",
            "Quote": "“I can’t control who follows me, but I can control who I follow.[Social Media]” ― Germany Kent"
        },
        {
            "Number": "827",
            "Quote": "“Dunia dagang adalah dunia keras dan kejam, lebih keji daripada medan pertempuran tentara, ya kecuali kalau dunia angkatan perang sudah menjadi dunia bisnis, nah, itu terkecuali. Kata yang berlaku dalam dunia kami bukan kesetiaan, tetapi efektif dan efisien, paling tidak, produktif, nilai tambah, penggaetan kesempatan, pembelian fasilitas, dan itu sering berarti spionase usaha dan hasil pihak lawan, kalau mungkin ya menyerobot penemuan paten, hak cipta, dan kelihaian pengacara penasihat hukum untuk menerobos lubang-lubang di antara pasal-pasal hukum perdata maupun pidana. Lalu apa fungsi kesetiaan dalam dunia kami? (Anggraini)” ― Y.B. Mangunwijaya, Burung-Burung Rantau"
        },
        {
            "Number": "828",
            "Quote": "“[The directors] were proud, sensible business people who realized that their reputations were at stake and that, while they were a jury for the moment, they in turn would be judged.” ― Lawrence Lederman, Tombstones: A Lawyer's Tales from the Takeover Decades"
        },
        {
            "Number": "829",
            "Quote": "“The best businesses use the most imagination and the least capital.” ― Trevor Carss"
        },
        {
            "Number": "830",
            "Quote": "“Over all, it appeared to be some sort of drug or money laundering front that was having a terribly difficult time of not coming across as both.” ― Mandy Ashcraft, Small Orange Fruit"
        },
        {
            "Number": "831",
            "Quote": "“Customers, like spouses, can be at your beck and call if you give them what they need, when they need it and how they need it. Massage their ego and you have them by the heart.” ― J. N. HALM, CUSTOMER ROMANCE: A New Feel of Customer Service"
        },
        {
            "Number": "832",
            "Quote": "“Havingness is not a problem of doingness but a problem of willingness! And hence: success is not a result but a mindset.” ― Meir Ezra"
        },
        {
            "Number": "833",
            "Quote": "“Don't run away from the fight, run away from the beating.” ― Serhat Beyaz KÖROĞLU"
        },
        {
            "Number": "834",
            "Quote": "“I love the word 'dream.' For some, it’s something that’s completely unattainable, yet for others, completely attainable. Choose your definition wisely.” ― Colleen Ferrary Bader"
        },
        {
            "Number": "835",
            "Quote": "“Contrary finding: The best leaders we studied did not have a visionary ability to predict the future. They observed what worked, figured out why it worked, and built upon proven foundations. They were not more risk taking, more bold, more visionary, and more creative than the comparisons. They were more disciplined, more empirical, and more paranoid. ………. Entrenched myth: A threat filled world favors the speedy; you’re either the quick or the dead. Contrary finding: The idea that leading in a “fast world” always requires “fast decisions” and “fast action”—and that we should embrace an overall ethos of “Fast! Fast! Fast!”—is a good way to get killed. 10X leaders figure out when to go fast, and when not to. Entrenched myth: Radical change on the outside requires radical change on the inside. Contrary finding: The 10X cases changed less in reaction to their changing world than the comparison cases. Just because your environment is rocked by dramatic change does not mean that you should inflict radical change upon yourself.” ― Jim Collins"
        },
        {
            "Number": "836",
            "Quote": "“Business is boss, politics is servant.” ― Amit Kalantri"
        },
        {
            "Number": "837",
            "Quote": "“I have come to realise that customers love companies that make them feel good about themselves—companies that reflect what they, the customers, believe about themselves. Customers fall in love with the company that says to them, \"You are unique. You are great. We are the only ones who can make you feel that way. Fall in love with us and we will continue to make you feel great.” ― J. N. HALM, CUSTOMER ROMANCE: A New Feel of Customer Service"
        },
        {
            "Number": "838",
            "Quote": "“I have begun to publicly declare that the only thing that will enable the poor to emerge from poverty is a decent job. And the primary creators of decent jobs are businesspeople who believe deeply in the free-enterprise system.” ― Robert D. Lupton, Charity Detox: What Charity Would Look Like If We Cared About Results"
        },
        {
            "Number": "839",
            "Quote": "“P.172: Trên tất cả, đừng dấn vào cuộc chiến những phúc lợi đi kèm cho nhân viên... Chỉ cần mang lại những thứ căn bản như bảo hiểm y tế và sau đó hứa những điều mà không ai có thể làm giống: cơ hội làm những công việc không thể thay thế nhằm giải quyết một vấn đề độc đáo với những con người tuyệt vời\" P.168: \"Văn hóa công ty\" không thể tách rời bản thân công ty đó: chẳng có công ty nào CÓ một văn hóa cả, mà mỗi công ty CHÍNH LÀ văn hóa.” ― PeterThiel"
        },
        {
            "Number": "840",
            "Quote": "“COVID-19 is bad for business.” ― Steven Magee"
        },
        {
            "Number": "841",
            "Quote": "“Pixel of Quantity makes the big picture of Quality” ― Kudretullah Sak"
        },
        {
            "Number": "842",
            "Quote": "“**New business concepts are always, always the product of lucky foresight.** That's right - the essential insight doesn't come out of any dirigiste planning process; it comes form some cocktail of happenstance, desire, curiosity, ambition and need. But at the end of the day, there has to be a degree of foresight -- a sense of where new riches lie. So radical innovation is always one part fortuity and one part clearheaded vision. [first-line bold by author] [2002] p.23” ― Gary Hamel, Leading the Revolution: How to Thrive in Turbulent Times by Making Innovation a Way of Life"
        },
        {
            "Number": "843",
            "Quote": "“Sometimes it's better not to ask-or to listen-when tell you something can't be done. I didn't ask for permission or approval. I just went ahead and did it.” ― Michael Dell, Direct from Dell: Strategies that Revolutionized an Industry"
        },
        {
            "Number": "844",
            "Quote": "“When you recruit new members, offer them the same empathy you would like to receive.” ― Mario Maruffi"
        },
        {
            "Number": "845",
            "Quote": "“Become a maniac on a mission: How to succeed in any venture or business .” ― Phillip Gary Smith, Harmonizing: Keys to Living in the Song of Life"
        },
        {
            "Number": "846",
            "Quote": "“The worst thing you can do is face reality. The best thing you can do is create reality.” ― Meir Ezra"
        },
        {
            "Number": "847",
            "Quote": "“Innovation serves as the engine that powers our infrastructures and institutions” ― Mmanti Umoh"
        },
        {
            "Number": "848",
            "Quote": "“The maximum of what can happen to you is nothing. Never be careful.” ― Meir Ezra"
        },
        {
            "Number": "849",
            "Quote": "“Unnecessary spending makes another man rich and another man poor.” ― Cyc Jouzy"
        },
        {
            "Number": "850",
            "Quote": "“Decisions should be based on a pragmatic approach to find a solution rather than on emotional feelings.” ― Arshad Wahedna"
        },
        {
            "Number": "851",
            "Quote": "“You can't go wrong by investing in the youths, youths are game changers, and creative thinkers.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "852",
            "Quote": "“Everyone thinks money is the capital needed to start up a business or any project of choice. I, however, disagree with that ideology. Money is not the capital that you need. Time is the real capital that anyone needs to start up any project.” ― Sunday Adelaja, How To Become Great Through Time Conversion: Are you wasting time, spending time or investing time?"
        },
        {
            "Number": "853",
            "Quote": "“Remember: when you walk into a DIY store to buy a drill, you don’t want the drill. Your end goal is to make a hole and, in order to achieve this, you have to buy the drill.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "854",
            "Quote": "“Better to lose money in a good company rather than making money in a bad one.” ― Vijay Kedia"
        },
        {
            "Number": "855",
            "Quote": "“I was so sure that I knew what they needed and what I wanted to sell them that I never stopped long enough to find out what it was they wanted to buy.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "856",
            "Quote": "“No amount of VC money or good marketing can save a bad product. Period.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "857",
            "Quote": "“Chronic indecision is not only inefficient and counterproductive, but it is deeply corrosive to morale.” ― Robert Iger, The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
        },
        {
            "Number": "858",
            "Quote": "“Life is not about receiving. It's about giving, knowing that someone might learn, understand or grow that little bit from the experience.” ― Peter E"
        },
        {
            "Number": "859",
            "Quote": "“Partner with everyone and you become no one.” ― Santosh Kalwar"
        },
        {
            "Number": "860",
            "Quote": "“Ingredients to success: know what you do well, know what to do well, and know someone who's swell.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "861",
            "Quote": "“The more deference there is, the narrower the band of judgements on which organisations rely. Deference acts like the fatty deposits that build up in arteries, restricting the flow of fresh, oxygen-enriched blood across the system.” ― Robin Ryde, Never Mind the Bosses: Hastening the Death of Deference for Business Success"
        },
        {
            "Number": "862",
            "Quote": "“My point is that this Potter business has legs. It will run and run, and we must be utterly mad, as a country, to leave it to the Americans to make money from a great British invention. I appeal to the children of this country and to their Potter-fiend parents to write to Warner Bros and Universal, and perhaps, even, to the great J K herself. Bring Harry home to Britain—and if you want a site with less rainfall than Rome, with excellent public transport, and strong connections to Harry Potter, I have just the place.” ― Boris Johnson"
        },
        {
            "Number": "863",
            "Quote": "“As long as you don't ask for commitment you won't hear the possible objections.” ― Yuri van der Sluis"
        },
        {
            "Number": "864",
            "Quote": "“If today your company doesn’t know what its ONE Thing is, then the company’s ONE Thing is to find out.” ― Gary Keller, The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results"
        },
        {
            "Number": "865",
            "Quote": "“When nations grow old the Arts grow cold And commerce settles on every tree” ― William Blake"
        },
        {
            "Number": "866",
            "Quote": "“The effort to be right is the basic problem.” ― Meir Ezra"
        },
        {
            "Number": "867",
            "Quote": "“What seems like the right thing to do could also be the hardest thing you have ever done in your life” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "868",
            "Quote": "“Never make a sales pitch as the way you introduce yourself. What you CAN say is how you help people and businesses.” ― Beth Ramsay, #Networking is people looking for people looking for people"
        },
        {
            "Number": "869",
            "Quote": "“Children are no longer being parented, but are raised. Thats why they don't have morals, ethics,humanity and manners, because their parents neglected them. We now live in a society that doesnt care about right or wrong.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "870",
            "Quote": "“The reward is the effort.” ― Meir Ezra"
        },
        {
            "Number": "871",
            "Quote": "“IF you want to be a winner than follow one simple rule and feed it in your mind. Take each task and work as \" Do it yourself project.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "872",
            "Quote": "“Not every single broke and unemployed person needs a job; some need customers.” ― Mokokoma Mokhonoana"
        },
        {
            "Number": "873",
            "Quote": "“You are not permitted to live and die as a non-entity because you have encountered the greatness that is associated with Christ.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "874",
            "Quote": "“Persistence to achieve a dream is as important as dreaming to achieve.” ― Arshad Wahedna"
        },
        {
            "Number": "875",
            "Quote": "“Book sense makes sense because someone has gone through it before and able to share it with you. Your job is to listen and discern.” ― Germany Kent"
        },
        {
            "Number": "876",
            "Quote": "“All powerful messages must contain an element of absurdity, illogicality, costliness, disproportion, inefficiency, scarcity, difficulty or extravagance – because rational behaviour and talk, for all their strengths, convey no meaning.[...] Meaning is conveyed by the things we do that are not in our own short-term self-interest – by the costs that we incur and the risks we take.” ― Rory Sutherland, Alchemy: The Dark Art and Curious Science of Creating Magic in Brands, Business, and Life"
        },
        {
            "Number": "877",
            "Quote": "“Everyone has a business idea. But few have a team... and very few a vision.” ― Alin Sav"
        },
        {
            "Number": "878",
            "Quote": "“Everything would have been for nothing just because I simply didn’t listen.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "879",
            "Quote": "“Electronic communication has transmuted conversations into durable and accessible records. Revisionist history has gone the way of the phone booth.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "880",
            "Quote": "“Strong people don't put others down. They lift them up and slam them on the ground for maximum damage.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "881",
            "Quote": "“You won't become a billionaire if you're always afraid. You may become a thousandier or even a hundred thousandier but you won't enjoy the money anyway.” ― Osayi Emokpae Lasisi, Billionaire Mindset (for MoneyMaking Mommies): How to make your Billions and build your legacy"
        },
        {
            "Number": "882",
            "Quote": "“Too many companies are afraid of openness, with the right people this isn’t an issue” ― Fritz Shoemaker"
        },
        {
            "Number": "883",
            "Quote": "“Executing the solution means gaining customer commitment and delivering on your promises” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "884",
            "Quote": "“Who are we, and how do we relate this idea in a way that’s meaningful to our customers and the values they hold dear? In other words, one must define something meaningful. To do that, one must identify to whom this must be meaningful.” ― David Brier"
        },
        {
            "Number": "885",
            "Quote": "“the talent alone isn’t special. It is the matching of the talent with the role that is special. As with the performing arts, the secret to great performances is all in the casting.” ― Marcus Buckingham & Curt Coffman"
        },
        {
            "Number": "886",
            "Quote": "“In one study investigating employee experiences with speaking up, 85% of respondents reported at least one occasion when they felt unable to raise a concern with their bosses, even though they believed the issue was important.” ― Amy C. Edmondson"
        },
        {
            "Number": "887",
            "Quote": "“I am yet to meet the idiot at whose door success arrived as a direct result of his refusal to invest in the enterprise that made him rich.” ― Jonathan Wutawunashe, Fulfill Your Threats"
        },
        {
            "Number": "888",
            "Quote": "“In the information age, build a website before you build a workplace.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "889",
            "Quote": "“In the business people with expertise, experience and evidence will make more profitable decisions than people with instinct, intuition and imagination.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "890",
            "Quote": "“Weigh whatever you are about to say; what will it do to your hearer - encouragement, edification, disappointment or fear? What will it do to your life - glorify, edify, beautify or weigh you down? Speak well and things will go well.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "891",
            "Quote": "“Perhaps the sorrow was not, after all, emanating from the attic, but from her.” ― Christina Dodd, Tongue In Chic"
        },
        {
            "Number": "892",
            "Quote": "“We are all prone to stress, excitement, sadness, or anger; it's called being human. Give yourself a break, and give others a break.” ― Michael McGinnis, GPS Guide for Athletes and Those Who Surround Them: How to Empower Your Sports Goals, Navigate the Process, and Steer Toward Success"
        },
        {
            "Number": "893",
            "Quote": "“Life is not enjoyed by being busy over everything in general, but being passionate about one thing in particular. Always focus on that one thing; dream it and live it!” ― Israelmore Ayivor, Daily Drive 365"
        },
        {
            "Number": "894",
            "Quote": "“To be an ethical leader is indeed to be different. This kind of leader acknowledges the complexity of running a responsible business, yet tries to do it anyway.” ― Andrew Leigh, Ethical Leadership: Creating and Sustaining an Ethical Business Culture"
        },
        {
            "Number": "895",
            "Quote": "“Spread your brand like a virus” ― Hetwik"
        },
        {
            "Number": "896",
            "Quote": "“Do you want to talk to the man in charge or the people running the place? Because I am just the man in charge.” ― Fritz Shoemaker"
        },
        {
            "Number": "897",
            "Quote": "“The typical industry approach is [retailers] to treat vendors like the enemy... If vendors can't make a profit then they don't have money to invest in research and development, which in turn means that the products they bring to the market will be less inspiring to customers, which in turn detriments the retailer's business because customers aren't inspired to buy. People want to cut costs and negotiate aggressively because there's a limited amount of profit to be shared by both sides. As a result of this \"death spiral\", most retailers fail.” ― Tony Hsieh"
        },
        {
            "Number": "898",
            "Quote": "“Taking risk will have its consequences, so does not taking any risk.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "899",
            "Quote": "“Competition is simply an unestablished paternship.” ― Tyler Wagner"
        },
        {
            "Number": "900",
            "Quote": "“Like it or not, we are all in business and the products we are selling is our unique selves.” ― Ifeanyi Enoch Onuoha"
        },
        {
            "Number": "901",
            "Quote": "“Being an entrepreneur is not for the faint of heart. Before you raise your first dollar in capital or make your first sales call, the odds are already against you.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "902",
            "Quote": "“Brands play in an exciting sandbox of symbolic meanings.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "903",
            "Quote": "“Successful people are willing to work very, very hard.” ― Meir Ezra"
        },
        {
            "Number": "904",
            "Quote": "“Being broke is part of the journey. Staying broke is a fucking choice.” ― Jaymin Shah"
        },
        {
            "Number": "905",
            "Quote": "“If you run a business, you know that every moment 365*24*7 people want to F*** with your business.” ― Pushkar Saraf"
        },
        {
            "Number": "906",
            "Quote": "“If you run a business, please don’t sell to family members or friends on credit. Friends and family members are number on the list of people that can ruin your business. Set very clear boundaries. Do you want to be nice and poor, or do you want to be rich and wicked?” ― Olawale Daniel, 10 Ways to Sponsor More Downlines in Your Network Marketing Business"
        },
        {
            "Number": "907",
            "Quote": "“For me, I can not be right in anything unless there is no counter thoughts that contradict my wrong, in this case my thoughts will be right.” ― Hisham Fawzi"
        },
        {
            "Number": "908",
            "Quote": "“The purpose of business is to create and keep a customer.” ― Peter Drucker"
        },
        {
            "Number": "909",
            "Quote": "“The requisite of an empire are the dreams & ambitions build on the boundaries of trust. Borders, stretched across lolyalty & belief. Roots cracked through depths of pain, fear and grief. Relinquishes space & destiny, beings into the state godlike divinity.” ― K.SAK"
        },
        {
            "Number": "910",
            "Quote": "“The oldest sibling always knows things that the younger ones don't.” ― Mike Mills"
        },
        {
            "Number": "911",
            "Quote": "“Creating a plan to bring in more business in a way that does not ultimately support your annual goals is fighting against yourself.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "912",
            "Quote": "“Into the hands of every individual is given a marvelous power for good or evil---the silent, unconscious, unseen influence of his life. This is simply the radiation of what man really is, not what he pretends to be.” ― William George Jordan"
        },
        {
            "Number": "913",
            "Quote": "“Social media is about connecting with people, not collecting people.” ― Karen Clark, Social Media for Direct Selling Representatives: Ethical and Effective Online Marketing"
        },
        {
            "Number": "914",
            "Quote": "“The problem with most strategic planning processes is they are not designed to create strategy. They are designed to create consistency and predictability.” ― Kaihan Krippendorff"
        },
        {
            "Number": "915",
            "Quote": "“EWI: Emailing While Intoxicated” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "916",
            "Quote": "“All suffering is caused by one belief....the belief in separation” ― Vivian Amis, The Lotus - Realization of Oneness"
        },
        {
            "Number": "917",
            "Quote": "“A car crash at seventy-five miles an hour results in glass and steel strewn about the roadway. Emergency workers attend to the injured drivers, passengers and bystanders, and remove the wreckage. An electronic communication wreck lacks the visual drama, but imparts damage just as real and just as permanent. A momentary lapse in judgment may prove catastrophic for the writer, their family, coworkers, and stakeholders.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "918",
            "Quote": "“In business (and in life), it's important to use tasteful words. You may have to eat them some day.” ― Bob Musial, Soft Skills. Hard Returns.: Communicate. Persuade. Win."
        },
        {
            "Number": "919",
            "Quote": "“Taking risk may not give you the conquest but it will certainly give you the confidence.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "920",
            "Quote": "“A 3% budget increase is a timid goal in a business environment where timidity/ irresoluteness loses” ― Fritz Shoemaker"
        },
        {
            "Number": "921",
            "Quote": "“REAL trumps PERFECT... because REAL creates TRUST.” ― Ted Rubin"
        },
        {
            "Number": "922",
            "Quote": "“I believe there are only three businesses: my business, other people's business, and God's business.” ― Tobe Hanson, The Four Seasons Way of Life:: Ancient Wisdom for Healing and Personal Growth"
        },
        {
            "Number": "923",
            "Quote": "“if you believe in something, you've got to be in it to the ends of your toes. Taking reasonable risks in part of the challenge. It;s the fun.” ― Ray Kroc, Grinding It Out: The Making of McDonald's"
        },
        {
            "Number": "924",
            "Quote": "“When you make something, when you improve something, when you deliver something, when you add some new thing or service to the lives of strangers, making them happier or healthier or safer or better, and when you do it all crisply and efficiently, smartly, the way everything should be done but so seldom is — you’re participating more full in the whole grand human drama.” ― Phil Knight, Shoe Dog: A Memoir by the Creator of NIKE"
        },
        {
            "Number": "925",
            "Quote": "“A person with good heart is always happy. However its a myth because most of the time his heart is full of wounds as it except only good thing from others still he love the people who treat it right & pray for the ones who don't” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "926",
            "Quote": "“Rainmakers create growth through commitment.” ― Jonas Caino"
        },
        {
            "Number": "927",
            "Quote": "“A company’s revenue engine is a critical success factor. I had seen from my own direct experience how easy it was to get caught in silos: marketing people would just think of marketing, salespeople would just think of sales, and accounting wouldn’t think of itself as part of the revenue engine at all. Furthermore, product and the revenue engine were too often thought of completely independent of each other. The need for a more integrated approach was on my mind from the beginning. The revenue engine is a whole system. It encompasses a diverse set of integrated components, each doing its part to advance the system’s purpose. The engine is not just comprised of marketing and sales— it includes product, accounting, and the underlying technology and data infrastructure required to keep everything flowing. It involves people, tools, workflow, and metrics. Its purpose is to optimize reach, conversion, and expansion of customer spend. I call my revenue engine model “the bowtie schema.” It was the product of continuous iteration. As I interacted with marketing and sales practitioners and waded through the research, the model slowly emerged. The final model conveys not just the product and customer journey across the bowtie, but also the foundational layers that support that journey-- the interaction between people tools, workflow, and metrics that make it all happen. The most basic question a CEO must answer is whether the product has achieved a value breakthrough. Without that, the revenue engine is irrelevant. Once product-market fit is confirmed, the next step is to clearly identify your ideal customer profile (ICP) and your business model. This includes the lifetime value (LTV) profile of your company. Assuming a strong product, a clear ICP, and a solid understanding of the constraints composed by your unit economics, the path forward is clear. Then, the focus will turn to uplifting the maturity of your revenue engine and scaling it efficiently.” ― Tom Mohr"
        },
        {
            "Number": "928",
            "Quote": "“Mens formalwear is not conducive to such un-refined things as cowering in an office corner, or curling up in the fetal position on a desk.” ― Mandy Ashcraft, Small Orange Fruit"
        },
        {
            "Number": "929",
            "Quote": "“The ongoing success... reflects two fundamental shifts that have transformed my teaching, consulting, and advisory work since 'Serious Play'. The first is transitioning from the practice of selling solutions to the promise of providing an effective approach. The second is moving from the “transmission of expertise” toward the “cultivation of capability.” ― Michael Schrage, The Innovator's Hypothesis: How Cheap Experiments Are Worth More Than Good Ideas"
        },
        {
            "Number": "930",
            "Quote": "“When you are designing your plan, think not in terms of what you need to do, think in term of what you need to achieve.” ― T. Jay Taylor"
        },
        {
            "Number": "931",
            "Quote": "“Kitalifa ni utiifu kamili, woga, umbali (kwa maana ya kuwa mbali na biashara ya mamafia wengine mpaka kwa makubaliano maalumu) na nidhamu ya kutoshirikiana na mamlaka zote za serikali. Ukishtakiwa kwa kosa la madawa au ujambazi ambalo hukufanya, utatumikia kifungo mpaka mwisho bila kushirikiana na polisi (kwa maana ya kutaja aliyehusika au waliohusika na uhalifu huo) hata kama aliyehusika au waliohusika hana au hawana uhusiano wowote na Kolonia Santita. Falsafa ya Kitalifa ni Sheria ya Kitalifa ya Kiapo cha Swastika cha Kolonia Santita. Na adhabu ya kuvunja sheria hiyo ni kifo.” ― Enock Maregesi"
        },
        {
            "Number": "932",
            "Quote": "“It is the sweat of the servants that make their squire look smart.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "933",
            "Quote": "“Be armed with purpose, persistence and intention and the enemy called defeat will choose another to battle.” ― Daisy Gallagher, How To Succeed In A Testosterone World Without Losing Estrogen"
        },
        {
            "Number": "934",
            "Quote": "“In looking at waste as an entirely modern, man-made idea, I stopped viewing garbage as garbage and instead slowly started to see it as a commodity.” ― Tom Szaky, Revolution in a Bottle: How TerraCycle Is Redefining Green Business"
        },
        {
            "Number": "935",
            "Quote": "“Resilience is based on the ability to embrace the extremes -- while no becoming an extremist. ... **Most companies don't do paradox very well.** (emphasis by author) [2002] p.25f” ― Gary Hamel, Leading the Revolution: How to Thrive in Turbulent Times by Making Innovation a Way of Life"
        },
        {
            "Number": "936",
            "Quote": "“What differentiates sellers today is their ability to bring fresh ideas.” ― Jill Konrath"
        },
        {
            "Number": "937",
            "Quote": "“What's a crook, only a businessman without a shop.” ― Brendan Behan, The Quare Fellow: A Comedy-Drama"
        },
        {
            "Number": "938",
            "Quote": "“Every action or perceived inaction shapes credibility.” ― Mindy Hall, Leading with Intention: Every Moment Is a Choice"
        },
        {
            "Number": "939",
            "Quote": "“If the iPhone gained traction, RIM’s senior executives believed, it would be with consumers who cared more about YouTube and other Internet escapes than efficiency and security. RIM’s core business customers valued BlackBerry’s secure and efficient communication systems. Offering mobile access to broader Internet content, says Mr. Conlee, “was not a space where we parked our business.” ― Sean Silcoff, Losing the Signal: The Untold Story Behind the Extraordinary Rise and Spectacular Fall of BlackBerry"
        },
        {
            "Number": "940",
            "Quote": "“When I was bartering to gain clients, I was self-sabotaging my business. I wasn’t making money, and the promised “exchange of advertising” wasn’t helping to grow my business.” ― Kim Beasley, The Creative Introverted Entrepreneur: Learn To Be SEEN So That You Can SELL Online To Your Target Customers"
        },
        {
            "Number": "941",
            "Quote": "“The path to happiness at work starts with a simple decision: You must want to be happy. If you don’t commit to being happy at work, you won’t be. You won’t make the choices that make you happy. You won’t take the actions needed to get there. You won’t change the things that need to change.” ― Alexander Kjerulf, Happy Hour is 9 to 5"
        },
        {
            "Number": "942",
            "Quote": "“As soon as we open our eyes in the morning, what we want most is to matter, to live a life and to do a work that has meaning. We have evolved to feel this way. Man's first thought was 'I AM'.” ― Bernadette Jiwa, Difference: The one-page method for reimagining your business and reinventing your marketing"
        },
        {
            "Number": "943",
            "Quote": "“If you’re not paying for a service then you are the product, and you also are being used as a guinea pig.” ― Orge Castellano"
        },
        {
            "Number": "944",
            "Quote": "“To make technical decisions, a result-oriented team needs a strong architect and a decision making process, not meetings.” ― Yegor Bugayenko, Code Ahead: Volume 1"
        },
        {
            "Number": "945",
            "Quote": "“Be bold in pursuing what others believe is unrealistic because this will achieve more than being bland and unimaginative.” ― Janna Cachola"
        },
        {
            "Number": "946",
            "Quote": "“All these ships are currently safe at anchor but that is not what they were designed for is it? Your job is not to remain anchored and safe. Your job is to move closer to your destination at every attempt.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "947",
            "Quote": "“Just preaching \"you are blessed\" to a congregation is like giving them a big fertile land. They need the seeds to plant on it; they need business ideas, a little of which is enough!” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "948",
            "Quote": "“When your pipeline is full – with business coming out of your ears – the notion of people asking for a discount will sound hilarious, because you’ll already be at capacity” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "949",
            "Quote": "“Interns are like not-cut diamonds; They have flaws, some of them are totally worthless, but once you cut them well, they can become something great one day, And that's what I'm doing, I'm cutting diamonds...” ― Barney Baszuro"
        },
        {
            "Number": "950",
            "Quote": "“There are two types of employees. Those who do the work and those who do the time. Those who do the work, make sure they complete all their tasks and projects. Those who do the time, make sure they complete their 8-5 hours and are looking forward to knock off.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "951",
            "Quote": "“LESS fabrication, MORE facilitation” ― Ted Rubin"
        },
        {
            "Number": "952",
            "Quote": "“Because the bulk of a platform's value is created by its community of users, the platform business must shift its focus from internal activities to external activities. In the process the firm inverts-it turns inside out, with functions from marketing to information technology to operations to strategy all increasingly centering on people, resources, and functions that exist outside the business, complementing or replacing those that exists inside a traditional business.” ― Geoffrey G. Parker, Platform Revolution: How Networked Markets Are Transforming the Economy--and How to Make Them Work for You"
        },
        {
            "Number": "953",
            "Quote": "“People do business with people they like.” ― Michelle Tillis Lederman, 11 Laws of Likability"
        },
        {
            "Number": "954",
            "Quote": "“Money is like lust. When you don’t have enough of it, you want more. When you satisfy it, you still thirst for more.” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "955",
            "Quote": "“You'll never wish you were more of a bastard. Treat everyone you encounter with respect, and they'll respect you and your business. Even more than respect, compassion goes a low way. -- Carl Natenstedt, CEO Z5 Inventory” ― Christina D. Warner, The Art of Healthcare Innovation: Interviews and Industry Insights from 35 Game-Changing Pioneers"
        },
        {
            "Number": "956",
            "Quote": "“There is no direct correlation between national and business development” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "957",
            "Quote": "“Making someone else important is your biggest ability.” ― Meir Ezra"
        },
        {
            "Number": "958",
            "Quote": "“Convictions in our ideas is dangerous not only because it leaves us vulnerable to false positives, but also because it stops us from generating the requisite variety to reach our creative potential.” ― Adam Grant, Originals"
        },
        {
            "Number": "959",
            "Quote": "“If price is what you communicate, don’t complain about lack of margins.” ― Yuri van der Sluis"
        },
        {
            "Number": "960",
            "Quote": "“Are you the fruit of redemption? If yes, then make a delightful noise unto Him.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "961",
            "Quote": "“Achieving the intended perception of a business, venture or vision, while aligning the brand, messaging and content distribution is crucial for broader market visibility and endurance engagement.” ― Create Wealth Communities"
        },
        {
            "Number": "962",
            "Quote": "“sejak bekerja di majalah, kami mengerti Valentine adalah momen dagang....Korbannya tentu remaja-remaja naif, orang-orang melankolis, yang tidak sadar uangnya dirampok siang-siang.” ― Syahmedi Dean"
        },
        {
            "Number": "963",
            "Quote": "“You MUST know You to do YOU!” ― Anne Thomas"
        },
        {
            "Number": "964",
            "Quote": "“There are no keys to success - only tools.” ― Criss Jami, Healology"
        },
        {
            "Number": "965",
            "Quote": "“True efficiency is taking some time to be fully first thing in the morning. Rushing isn’t always efficient.” ― Waylon H. Lewis"
        },
        {
            "Number": "966",
            "Quote": "“Willingness results in results.” ― Meir Ezra"
        },
        {
            "Number": "967",
            "Quote": "“See everything right in life and it will be right. See everything wrong in life and it will be wrong. ” ― Meir Ezra"
        },
        {
            "Number": "968",
            "Quote": "“If you don't appreciate your customers, someone else will.” ― Jason Langella"
        },
        {
            "Number": "969",
            "Quote": "“Listen for “Moments” — and Make it Personal” ― Ted Rubin"
        },
        {
            "Number": "970",
            "Quote": "“One cannot be successful as an architect without thinking of not only what to do, but how to get it done within an organization, which requires knowing why it should matter to someone who isn’t a technologist.” ― Eben Hewitt, Technology Strategy Patterns: Architecture as Strategy"
        },
        {
            "Number": "971",
            "Quote": "“It is easy to spend a ton of money and a ton of time on a business and the advertising of it. Many do. Consider putting the money and the time into the educating, building and protecting of a business to allow for the right results, with the smallest costs and the least amount of time.” ― Create Wealth Communities"
        },
        {
            "Number": "972",
            "Quote": "“Business is based on the well-known principle of supply and demand. You want something, the other man has it. The only thing left to settle is the price.” ― Agatha Christie"
        },
        {
            "Number": "973",
            "Quote": "“Business is war and your past clients and customer’s great online reviews are your elite soldiers in battle.” ― Tom Kenemore, Fans On Fire: How to Skyrocket Your Leads, Sales, and Reputation with The Most Trusted Form of Marketing"
        },
        {
            "Number": "974",
            "Quote": "“You have the right to remain silent. Anything you say can and will be used against you in a court of law...Do you understand the rights I have just read to you? With these rights in mind, do you wish to speak to me?” Most Americans adults have heard the Miranda rights from countless television and movie crime drams. The first statement of the Miranda rights is a simple but powerful declarative sentence. “You have the right to remain silent.” Not speaking will not be held against you, but the suspect is told that any words spoken “can and will be used against you in a court of law.” U.S. law provides the opportunity for reflection and protection against self-incrimination with the last sentence asking, “Do you wish to speak to me?” Reflect and ask yourself, it is wise to post or send an email containing that information?” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "975",
            "Quote": "“Be a surfer. Watch the ocean. Figure out where the big waves are breaking and adjust accordingly.” ― 37Signals, Getting Real: The Smarter, Faster, Easier Way to Build a Web Application"
        },
        {
            "Number": "976",
            "Quote": "“You will be as good as others see you as good. Others will be as good as you see them as good.” ― Meir Ezra"
        },
        {
            "Number": "977",
            "Quote": "“If the result doesn't meet your business standard, lowering the standard might not me the solution.” ― Pedro Ahlers"
        },
        {
            "Number": "978",
            "Quote": "“Empathy and face are intertwined. You can’t really have one without the other.” ― Maya Hu-Chan, Saving Face: How to Preserve Dignity and Build Trust"
        },
        {
            "Number": "979",
            "Quote": "“Don’t let any situation intimidate you, defeat you, or conquer you. you are stronger and smarter than anything that challenges you.” ― Lolly Daskal"
        },
        {
            "Number": "980",
            "Quote": "“Decades from now, Americans will look back at this time, when Data Science was at its infancy, and liken its societal impact to that of the Industrial and Technological Revolutions.” ― Ken Poirot"
        },
        {
            "Number": "981",
            "Quote": "“Before you can decide on your brand fonts, colors or imagery, let alone your messaging, you need to know who you're trying to attract first.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "982",
            "Quote": "“If everyone could see it, then it wouldn't be a Vision” ― Tony Guarnaccia, Big Fish Results: How to Use the 'Net' for a Bigger Catch"
        },
        {
            "Number": "983",
            "Quote": "“The biggest secret about money is… there is no secret!” ― Meir Ezra"
        },
        {
            "Number": "984",
            "Quote": "“Later film shoots’ casting calls would advertise that they’re “fun shoots” and a “good way to get exposure”—but working in entertainment is not entertaining, even though it is not what’s traditionally thought of as “work.” You know what’s fun, indie filmmakers? Being paid for your time.” ― J. Richard Singleton, Background Guy"
        },
        {
            "Number": "985",
            "Quote": "“Great things in business are never done by one person. They're done by a team of people.” ― Steve Jobs"
        },
        {
            "Number": "986",
            "Quote": "“Salesmanship dawns when customers deny.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "987",
            "Quote": "“Being in present time is the ability to put the next second there.” ― Meir Ezra"
        },
        {
            "Number": "988",
            "Quote": "“Van Gogh, Modigliani, Hiroshige, etc., didn’t know merde about yachts, 8-star hotels, infinite pools, private jets...” ― Alexander Akyna, 101 iD€A$ for CONT€MPORAR¥ ARTI$T$"
        },
        {
            "Number": "989",
            "Quote": "“Lovability — the capacity to earn genuine, heartfelt love and loyalty from customers — is the secret ingredient that propels a select few organizations ahead and leads not only to consistent growth and profitability but sustainable happiness for everyone involved.” ― Brian de Haaff, Lovability: How to Build a Business That People Love and Be Happy Doing It"
        },
        {
            "Number": "990",
            "Quote": "“Never take lightly that becoming an employer puts another person’s ability to provide for their life in your hands.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "991",
            "Quote": "“Business is not about negotations, its about mutually finding a point of balance where both parties find their objectives meeting.” ― Sukant Ratnakar, Open the Windows"
        },
        {
            "Number": "992",
            "Quote": "“The idea of receiving a letter from the IRS is not a pleasant one for anyone. What makes it worse is the confusion, the fear, the assumptions and the thoughts of all the worst-case scenarios that can make you feel like you have a tidal wave of stress.” ― Jeffrey Schneider EA CTRS NTPIF, Now What? I Got a Tax Notice from the IRS. Help!: Defining and deconstructing the scary and confusing letters that land in your mailbox."
        },
        {
            "Number": "993",
            "Quote": "“You may have an overall target to achieve with each prospect, but if you are going to have an ideal outcome for each call, should you not also have a tolerable outcome to fall back on? Something you are willing to put up with if things don't go completely to plan, but something that still moves things forward ever so slightly?” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "994",
            "Quote": "“God wants all man's attention, thoughts and focus to be on Him.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "995",
            "Quote": "“I’m not here to say that analytics are bad. I’m here to say that analytics are human. Or at least, they represent the real needs and genuine interests of actual human beings; they’re proxies for people. And as such, we are honor bound to be respectful with them, to consider them with nuance and care, to let them guide us toward creating experiences of delight or at least outcomes that fulfill mutual needs, not to use them, manipulate them, and exploit them.” ― Kate O'Neill, Pixels and Place: Connecting Human Experience Across Physical and Digital Spaces"
        },
        {
            "Number": "996",
            "Quote": "“10/20/30 Rule in my book can level the playing field for a retail forex trader to trade alongside big banks and hedge funds.” ― Ramesh Selvarajoo, Trade Forex with Confidence: The 10/20/30 Rule for Unconventional Success"
        },
        {
            "Number": "997",
            "Quote": "“As a Shark, I’ve been in the tank with these entrepreneurs and I can tell you Rachel gets right to the heart of how they succeeded,” said Barbara Corcoran in her endorsement of the book. “‘Shark Tank MOMpreneurs’ is a must read for anyone looking to learn the inside secrets of getting on ‘Shark Tank’ and landing a deal, or getting the publicity that’s essential for any successful business.” ― Rachel A. Olsen, Shark Tank MOMpreneurs Take A Bite Out of Publicity: How 5 Inventors Leveraged Media to Build their Business + How YOU Can, Too"
        },
        {
            "Number": "998",
            "Quote": "“Business?! Mankind [should have been] my business. The common welfare [should have been] my business; charity, mercy, forbearance and benevolence, were [supposed to have been], all, my business. The dealings of my trade were but a drop of water in the comprehensive ocean of my business! ~~Jacob Marley’s ghost to Ebenezer Scrooge in A Christmas Carol by Charles Dickens” ― Charles Dickens"
        },
        {
            "Number": "999",
            "Quote": "“A man under debt not only loses the peace but also the people.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1000",
            "Quote": "“Culture is the heartbeat of the organization and our society.” ― Pearl Zhu, Digital Valley: Five Pearls of Wisdom to Make Profound Influence"
        },
        {
            "Number": "1001",
            "Quote": "“The fear of being poor or broke is a blessing, if you are a successful entrepreneur; but is a curse, if you want to be an entrepreneur.” ― Mokokoma Mokhonoana"
        },
        {
            "Number": "1002",
            "Quote": "“There's all kinds of phantom work! Unreal values assigned to most of the jobs on Earth! The entire transnational executive class does nothing a computer couldn't do, and there are whole categories of parasitical jobs that add nothing to the system by an ecologic accounting. Advertising, stock brokerage, the whole apparatus for making money only from the manipulation of money--that is not only wasteful but corrupting, as all meaningful money values get distorted in such manipulation.\" She waved her hand in disgust.” ― Kim Stanley Robinson, Red Mars"
        },
        {
            "Number": "1003",
            "Quote": "“Microsoft no longer employs people, people employ Microsoft.... I know we are on the right track when I hear a colleague express an insight that could only come from empathy.....” ― Satya Nadella, Hit Refresh"
        },
        {
            "Number": "1004",
            "Quote": "“The written word imparts a gravitas the spoken word lacks. The underlying assumption is that time and thought has been expended on what was written, even if that is not the case.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "1005",
            "Quote": "“With a strong personal brand, you become the only option in the eyes of your ideal customer.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1006",
            "Quote": "“Good managers don't set a goal to increase efficiency, but rather an implementation of business process improvements that result in higher efficiency as well.” ― Eraldo Banovac"
        },
        {
            "Number": "1007",
            "Quote": "“If an opportunity isn't effectively qualified, the sales rep will operate under the mistaken impression that the deal is theirs to win.” ― Dave Stein"
        },
        {
            "Number": "1008",
            "Quote": "“Cooperation given with punctuality and professionalism is feels like a charity to the receiver.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1009",
            "Quote": "“Listening with intent to learn holds true for a positive outcome for each economy.” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "1010",
            "Quote": "“Do your best in the day, for the day, and then work on tomorrow when it comes. Show yourself grace and laugh at yourself.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1011",
            "Quote": "“Collaboration is a business strategy that integrates innovative partners seeking blue oceans.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "1012",
            "Quote": "“You cannot fail when you are certain.” ― Meir Ezra"
        },
        {
            "Number": "1013",
            "Quote": "“To be successful, one has to be one of three bees - the queen bee, the hardest working bee, or the bee that does not fit in. One success is inherited, and the the next one is earned. While the last one is self-sought, self-served, and happens on its own terms.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "1014",
            "Quote": "“Difficulties & Challenges become our strength when we focus the goal.” ― Gaurav GRV Sharma"
        },
        {
            "Number": "1015",
            "Quote": "“The simple fact is that neither an efficiently successful HOW nor a compelling persuasive WHY is sufficient on its own..without the other to bring about impactful sustainable improvement.” ― Robert M. Olsen"
        },
        {
            "Number": "1016",
            "Quote": "“If you are scared to share your idea by thinking others will steal it; then it might not be a good idea.” ― Suryakanta Mangaraj"
        },
        {
            "Number": "1017",
            "Quote": "“If people don´t trust you, maybe you´ve told them the wrong story” ― Alin Sav"
        },
        {
            "Number": "1018",
            "Quote": "“Yes please” sounds powerful and concise. It’s a response and a request. It is not about being a good girl; it is about being a real woman. It’s also a title I can tell my kids. I like when they say “Yes please” because most people are rude and nice manners are the secret keys to the universe.” ― Amy Poehler, Yes Please"
        },
        {
            "Number": "1019",
            "Quote": "“Nothing tells you more about an organization than the way it makes decisions.” ― Dennis Bakke"
        },
        {
            "Number": "1020",
            "Quote": "“Statistics surpasses sentiments.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1021",
            "Quote": "“I like businesses economy… if you Damn good at this job you can rob people in a legal manner and way.” ― Deyth Banger, Dead Equation"
        },
        {
            "Number": "1022",
            "Quote": "“Don't deal bitterly with the enemy you see. Deal with the greater enemy that sent your enemy to you. If you focus on dealing with the \"retailer\", remember that the \"producer\" can employ more \"retailers\" and what that means is that your life business will redefine you as \"dealer of enemies\". Satan is behind the plot!” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "1023",
            "Quote": "“I call my revenue engine model “the bowtie schema.” It was the product of continuous iteration. As I interacted with marketing and sales practitioners and waded through the research, the model slowly emerged. The final model conveys not just the product and customer journey across the bowtie, but also the foundational layers that support that journey-- the interaction between people tools, workflow, and metrics that make it all happen.” ― Tom Mohr, Scaling the Revenue Engine"
        },
        {
            "Number": "1024",
            "Quote": "“Life is a do-it-yourself project.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1025",
            "Quote": "“To set yourself up for success, you need to be real about what you can commit to consistently.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1026",
            "Quote": "“If you delegate tasks, you create followers, if you delegate authority , you create leaders” ― Craig Groeschel"
        },
        {
            "Number": "1027",
            "Quote": "“That Seigo could go into geisha houses, accept luncheon invitations, drop in at the Club, see people off at Shimabashi, meet them at Yokohama, run out to Oiso to humor the elders—that he could put in his appearance at large gatherings from morning to evening without seeming either triumphant or dejected—this must be because he was thoroughly accustomed to this kind of life, thought Daisuke; it was probably like the jellyfish's floating in the sea and not finding it salty.” ― Natsume Sōseki, And Then"
        },
        {
            "Number": "1028",
            "Quote": "“Execution strategies: do / buy / delegate / forget.” ― Gerry Geek, Ice Breakers for Project Managers: Jokes, Quotes, and Brainteasers"
        },
        {
            "Number": "1029",
            "Quote": "“Brand growth and dominance is created by having the highest brand value, not the lowest price tag.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "1030",
            "Quote": "“Success Is A Choice” ― Rick Pitino, Success Is a Choice: Ten Steps to Overachieving in Business and Life"
        },
        {
            "Number": "1031",
            "Quote": "“Consistency matters. You must learn that giving people a consistent high-quality product is of importance, like building trust across your brand. This build relational wealth - people want to know what they are about to step into and with whom.” ― Nicole Dominique Le Maire"
        },
        {
            "Number": "1032",
            "Quote": "“10% of my Life is out of my control. I am responsible for 90% only.” ― Muhammad Zahid Iqbal"
        },
        {
            "Number": "1033",
            "Quote": "“I don't know how to do it today, but I will know how to do it tomorrow and do it.” ― Shu Hattori, The McKinsey Edge: Success Principles from the World's Most Powerful Consulting Firm"
        },
        {
            "Number": "1034",
            "Quote": "“There are three basic flavours of incentive: economic, social and moral.” ― Steven D. Levitt, Freakonomics: A Rogue Economist Explores the Hidden Side of Everything"
        },
        {
            "Number": "1035",
            "Quote": "“No man's advice can change you unless you speak to yourself. Bible school or seminars can't change you, going to church can't change you except you decide to change. Psalm 139:23 - 24” ― Patience Johnson, Why Does an Orderly God Allow Disorder"
        },
        {
            "Number": "1036",
            "Quote": "“If you lie about money you will not have money. If you don’t have money, you lied about money.” ― Meir Ezra"
        },
        {
            "Number": "1037",
            "Quote": "“Hello! FROM THE STABLE OF DESIRE DATING ORGANIZATION, WE BRING TO YOU THE BEST SUGAR MUMMY/DADDY HOOK-UP CONNECTION IN THE WHOLE OF AFRICA. MR. AKINTOLA +2348107613765 FACEBOOK CONTACT: BAYO ERNEST AKINTOLA. THE SOCIETY DOESN'T THINK OLDER WOMEN EXIST ANYMORE, NOBODY THINKS THEY FEEL ANYTHING. THE PEOPLE AROUND OLD WOMEN NEVER REALIZE THEY ARE GOING THROUGH A TURMOIL, NOBODY CARE ABOUT THEM. SO WHAT I AM TRYING TO PORTRAY IS THAT IT'S NOT OVER UNTIL IT'S OVER.THAT AN OLD WOMAN IS STILL ALIVE IN MORE WAYS THAN ONE, THEY STILL HAVE SEXUAL URGES, PEOPLE FORGET THAT AN OLD WOMAN IS STILL HUMAN. AN OLD WOMAN ENJOYS HER SEXUAL LIFE MORE WHEN SHE NO LONGER THINKS ABOUT CHILDREN'S SCHOOL FEES, WHEN THE CHILDREN HAVE ALL GONE TO THEIR HUSBAND'S HOUSE OR IN SOME CASES THE BOYS HAVE MARRIED AND IT REMAINS ONLY THE OLD WOMAN AND HER HUSBAND. IT NEVER CROSSES OUR MIND THAT THESE OLD PARENTS CAN STILL GET ON WHENEVER THEY LIKE. DO YOU KNOW THAT WHEN AN OLD MAN REALIZE HE IS FREE FROM CHILDREN BEARING, HE BECOMES PROMISCUOUS AND THEY ARE SUSCEPTIBLE TO ALL KINDS OF DISEASES. BUT THE OLD WOMAN IS CONFINED TO A CORNER IN THE HOUSE, SO THEY PAY MORE MONEY TO WHO SO EVER IS READY TO MINGLE WITH THEM. HAVE YOU BEEN SEARCHING FOR SUGAR MUMMIES/DADDIES GAY/LESBIAN PARTNERS? SEARCH NO MORE BECAUSE ITS NOW CLOSE TO YOUR DOOR STEP IN EVERY PART OF THE FOLLOWING COUNTRIES; NIGERIA UNITED KINGDOM ZIMBABWE LIBYA GHANA SOUTH AFRICA TOGO AND MANY MORE... HERE COMES THE OPPORTUNITY FOR YOU TO MEET PEOPLE THAT MATTER'S IN YOUR SOCIETY , SO GRAB THIS OPPORTUNITY AND MEET WITH YOUR RICH AND INFLUENTIAL SUGAR MUMMY, DADDY, GAY, AND LESBIAN IN YOUR AREA TODAY AS EASY/FAST AS NEVER BEFORE.WE GIVE THE BEST BECAUSE WE ARE THE BEST AGENCY IN AND ACROSS THE GLOBE. EVERY NECESSARY CHECKUP WE NEED TO KNOW ABOUT OUR LADIES/MEN THAT WE HAVE HAS BEEN MADE, AND WE GUARANTY YOU SUCCESS AND MAXIMUM SECURITY. GRAB A SUGAR MUMMY/DADDY AND BE THE BIG BOY/GIRL YOU WANT TO BE. CORPORATE AFFAIRS COMMISSION (C.A.C) APPROVED. (RC: 127561) FOR FURTHER INFORMATION/DETAILS, KINDLY CONTACT THE P.R.O OF DESIRE DATING AGENCY (MR. BAYO AKINTOLA; +2348107613765). IF YOU WANT US TO GET IN-TOUCH WITH YOU, KINDLY PROVIDE THE INFORMATION BELOW AND TEXT IT TO MR. BAYO AKINTOLA +2348107613765, YOUR NAME............... YOUR AGE................ YOUR OCCUPATION......... YOUR LOCATION........... REGARDS, MR, AKINTOLA +2348107613765” ― Desirina Boskovich, 2084"
        },
        {
            "Number": "1038",
            "Quote": "“Tapping into likability doesn't mean you have to be constantly perky and bright. It's about productive and authentic energy.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "1039",
            "Quote": "“In the past, work was defined primarily by putting in time, and secondarily on getting results. \"We need to flip that model,” Ressler told me. “No matter what kind of business you’re in, it’s time to throw away the tardy slips, time clocks and outdated, industrial-age thinking.” ― Daniel H. Pink, Drive: The Surprising Truth About What Motivates Us"
        },
        {
            "Number": "1040",
            "Quote": "“Please give credit where credit is due. Are you up to code? With your content creation conduct? Honor the creators if you are going to use their content to promote yourself or your business to your audience.” ― Loren Weisman"
        },
        {
            "Number": "1041",
            "Quote": "“Greed is an invitation to destruction, the unsinkable canoe that will help greedy people in conveying destruction to their own doorstep.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "1042",
            "Quote": "“Happiness is a good business these days, more you talk crap about happiness the large number of crowd you will gather.” ― Santosh Kalwar"
        },
        {
            "Number": "1043",
            "Quote": "“Being an entrepreneur is a mental job... It takes patients! YOU are doing more motivation to yourself than anyone on this planet.” ― Dee Williams"
        },
        {
            "Number": "1044",
            "Quote": "“People have within their own hands the tools to fashion their own destiny.” ― Murray D. Lincoln, Vice President in Charge of Revolution"
        },
        {
            "Number": "1045",
            "Quote": "“The only time you have is the where and when of right now. There will always be good times, bad times, hard times, and complete disasters. However, there is no other option but to be where you are, when you are. That is a universal truth for everyone. The important thing is how you respond, what you decide to do, and when you decide to do it.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1046",
            "Quote": "“In any case where someone is hurt within himself because of a mere jealousy over your success expedition, that is none of your business.You don’t bring yourself low in order to please those who envy you.” ― Israelmore Ayivor, Dream Big!: See Your Bigger Picture!"
        },
        {
            "Number": "1047",
            "Quote": "“It is the leader’s job to lead by example and enforce the values and the behaviors to set the culture for any company or work group. Show me a company in rapid decline, and I will show you someone in charge who doesn’t give a _____.” ― Beth Ramsay, #Networking is people looking for people looking for people"
        },
        {
            "Number": "1048",
            "Quote": "“Good and perfect are not the enemy. Perfect is formed by the combination of many good. 365 good days make 1 perfect year.” ― Serhat Beyaz KÖROĞLU"
        },
        {
            "Number": "1049",
            "Quote": "“Would you produce, create and bring value to the world if it weren't for money? Or would you veg out? The necessity of money keeps people relevant and active. The paradox is that people who stay relevant and active make money.” ― Richie Norton"
        },
        {
            "Number": "1050",
            "Quote": "“For some, I realize, business is the all-out pursuit of profits, period, full stop, but for us business was no more about making money than being human is about making blood.” ― Phil Knight, Shoe Dog: A Memoir by the Creator of NIKE"
        },
        {
            "Number": "1051",
            "Quote": "“Be a Flea, not a Bull or a Bear. Don't delay, retire anyway. Trading is NOT a four letter word. Buy carefully, sell aggressively. Don't mark duds while drinking. When your plan fails, change it. Don't be slow, don't be greedy. Don't be obtuse with a machine gun pointed at you. There's still time to build wealth and retire well. The Stock Market Flea: Lessons from the Front” ― James J. Houts, The Stock Market Flea: Lessons from the Front"
        },
        {
            "Number": "1052",
            "Quote": "“SIMPLICITY IS THE MOST COMPLEX THING IN THE 21ST CENTURY” ― Anders Indset, Wild Knowledge: Outthink the Revolution"
        },
        {
            "Number": "1053",
            "Quote": "“The goal of having a strategic document is very un-strategic” ― Fritz Shoemaker"
        },
        {
            "Number": "1054",
            "Quote": "“Profit isn’t and shouldn’t be the mission of business. The mission of business is to help people. To help your customers, your co-workers, your employees, and your partners. Success is not a number — it’s not X dollars or Y customers — it’s a measurement of VALUE.” ― Fran Tarkenton"
        },
        {
            "Number": "1055",
            "Quote": "“Brands are either built on reruns or coming attractions. The future has no road map while the past does. Creating a brand that blazes new trails can sometimes be bumpy but will also allow you to be the first to discover something new, something meaningful and something that makes others ask, “Why didn’t we think of that?” Be very scared of “old tricks” and build a spirit of innovation. It’s the “old tricks” that have the highest risk, not doing something bold.” ― David Brier"
        },
        {
            "Number": "1056",
            "Quote": "“We live in a world where we will share everything about celebrities on social media but our friend's business posts are invisible.” ― Sanjo Jendayi"
        },
        {
            "Number": "1057",
            "Quote": "“I have a head for business and a body for sin. Unfortunately, the sin appears to be gluttony.” ― Jenny Colgan, Meet Me at the Cupcake Café"
        },
        {
            "Number": "1058",
            "Quote": "“A bull market is very much like being in love. You don’t realise its value till it’s gone.” ― Vijay Kedia"
        },
        {
            "Number": "1059",
            "Quote": "“Time invested converts a pauper into a business man” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "1060",
            "Quote": "“You can't do it better without teamwork.” ― Ogwo David Emenike"
        },
        {
            "Number": "1061",
            "Quote": "“Don't find customer for your products, find products for your customers.” ― Hyacil Han, Dropshipping Ultimate Guide: The Expeditive and Accessible Scheme to Earn a Substantial Revenue at Home"
        },
        {
            "Number": "1062",
            "Quote": "“Emails, texts and social media promise the writer the power to be heard…In a society where relinquishing control is viewed as weakness, power is relinquished through every message sent without forethought to the potential consequences.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "1063",
            "Quote": "“YOU MUST USE ANY AND EVERY CHANCE TO BE SEEN AND HEARD, by creating as many digital marketing touchpoints as possible, to get KNOWN, LIKED AND TRUSTED!” ― Naomi Mc Laughlan, Digital Marketing: Book #1 in the START-UPS ON A SHOESTRING BUDGET Series"
        },
        {
            "Number": "1064",
            "Quote": "“Any idiot can point out a problem. So, bosses do.” ― Gerry Geek"
        },
        {
            "Number": "1065",
            "Quote": "“You are perfect.” ― Meir Ezra"
        },
        {
            "Number": "1066",
            "Quote": "“Investing is like Yoga. Body, mind and soul have to be aligned.” ― Vijay Kedia"
        },
        {
            "Number": "1067",
            "Quote": "“Circular Strategy is comprehensive active management of strategy in a business” ― Fritz Shoemaker"
        },
        {
            "Number": "1068",
            "Quote": "“Carrying someone else’s weight is only going to weigh down on you and add stress, frustration, and pain. Choose who you work with and play with wisely.” ― Loren Weisman, The Artist's Guide to Success in the Music Business: The “Who, What, When, Where, Why & How” of the Steps that Musicians & Bands Have to Take to Succeed in Music"
        },
        {
            "Number": "1069",
            "Quote": "“Mark my words. Perception is reality and how someone perceives you is their reality.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1070",
            "Quote": "“Write like you speak with the 'rhythms of human speech,' as William Zinsser said, and in as few words as possible. Use action verbs to carry water.” ― Sandra E. Lamb"
        },
        {
            "Number": "1071",
            "Quote": "“Businesses need to be more alert. Sometimes the problem is not the customer service, it is the product.” ― Janna Cachola"
        },
        {
            "Number": "1072",
            "Quote": "“Without an introduction, a business handshake is a missed opportunity.” ― Stayce Wagner"
        },
        {
            "Number": "1073",
            "Quote": "“Always stay 100 steps ahead of your competition. You can't deliver the future, if you are not in the future.” ― Mack Craft"
        },
        {
            "Number": "1074",
            "Quote": "“That's the problem with large organizations. They create roles and constraints, and sometimes people forget why they're there. (Quoting Joichi Ito, Director, MIT Media Lab)” ― Lisa Bodell, Kill the Company: End the Status Quo, Start an Innovation Revolution"
        },
        {
            "Number": "1075",
            "Quote": "“We're interested in the mass-merchandising of anything. If there was a market in mass-produced portable nuclear weapons, we'd market them too” ― Alan Sugar"
        },
        {
            "Number": "1076",
            "Quote": "“You have to be adroit and also patient to make others agree to your terms.” ― Mohith Agadi"
        },
        {
            "Number": "1077",
            "Quote": "“People are accustomed to thinking of accounting as dry and boring, a necessary evil used primarily to prepare financial reports and survive audits, but that is because accounting is something that has become taken for granted.” ― Eric Ries, The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
        },
        {
            "Number": "1078",
            "Quote": "“Sustained growth is required, particularly in the poorest regions, to catch up with decent living standards and to live a life of dignity, opportunity and hope.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "1079",
            "Quote": "“If you KNOW that you’re FUCKED Then you’re NOT If you think that you’re NOT THEN YOU ARE! Isn’t that lovely? Iambic pentangle?” ― Martin Atkins, Welcome to the Music Business: You're F**ked!"
        },
        {
            "Number": "1080",
            "Quote": "“You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out.” ― Steve Jobs"
        },
        {
            "Number": "1081",
            "Quote": "“These women, these Shark Tank Mompreneurs are so passionate about what they created and what they are doing, and that just shines through. That's a major reason why they nailed their audition.” ― Rachel A. Olsen, Shark Tank MOMpreneurs Take A Bite Out of Publicity: How 5 Inventors Leveraged Media to Build their Business + How YOU Can, Too"
        },
        {
            "Number": "1082",
            "Quote": "“Even the richest person, provided the riches comes from mutually beneficial exchange, does not need to give anything \"back\" to the community, because this person took nothing out of the community. Indeed, the reverse is true: Enterprises give to the community. Their owners take huge risks, and front the money for investment, precisely with the goal of serving others. Their riches are signs that they have achieved their aims.” ― Jeffrey Tucker"
        },
        {
            "Number": "1083",
            "Quote": "“More you know, better advice you give. Less you know, more advice you give.” ― Gerry Geek, Ice Breakers for Project Managers: Jokes, Quotes, and Brainteasers"
        },
        {
            "Number": "1084",
            "Quote": "“All human aspirations are opportunities for brands to build relationships.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "1085",
            "Quote": "“I call them (international school clerics) international humanists. The survival of the world is dependent on such decent people. In Turkey, it was with faith that we helped stop the spread of communism. In Afghanistan, it was the believers who stopped the Soviets. Anyway, supporting those schools is good for business.” ― Mustafa Barutçuoğlu"
        },
        {
            "Number": "1086",
            "Quote": "“Truth builds trust.” ― Marilyn Suttle"
        },
        {
            "Number": "1087",
            "Quote": "“Saving face requires having the other person’s best interest in mind, understanding their perspective, and delivering constructive feedback.” ― Maya Hu-Chan, Saving Face: How to Preserve Dignity and Build Trust"
        },
        {
            "Number": "1088",
            "Quote": "“We don't try to change people. It doesn't work well... We accept people the way they are” ― Peter Bevelin, All I Want To Know Is Where I'm Going To Die So I'll Never Go There"
        },
        {
            "Number": "1089",
            "Quote": "“If we all work together there is no telling how we can change the world through the impact of promoting positivity online.” ― Germany Kent"
        },
        {
            "Number": "1090",
            "Quote": "“In the end it's up to you - it's about what you see, it's about what you are looking for. If you're expecting Chaos, then you will see chaos, if you're expecting to make money then you will find ways to make money. But you need to be clear about your thoughts.” ― Osayi Emokpae Lasisi, Billionaire Mindset (for MoneyMaking Mommies): How to make your Billions and build your legacy"
        },
        {
            "Number": "1091",
            "Quote": "“If what you did 5 years ago still greatly excites you, you probably aren't growing.” ― John C. Maxwell"
        },
        {
            "Number": "1092",
            "Quote": "“Another way of building trust is to authentically delegate. Don't assign someone work and then constantly monitor their progress and ignore their ideas.” ― Scott Sonenshein, Joy at Work: Organizing Your Professional Life"
        },
        {
            "Number": "1093",
            "Quote": "“There is only now.” ― Meir Ezra"
        },
        {
            "Number": "1094",
            "Quote": "“Business success requires Strategy First!” ― Brad Chase , Strategy First: How Businesses Win Big"
        },
        {
            "Number": "1095",
            "Quote": "“I was never really about the money. Every business I've ever started has been more of a curiosity and a kind of \"What if...” ― Blake Mycoskie"
        },
        {
            "Number": "1096",
            "Quote": "“Life is a university, you will keep learning new things all the time. The tombstone will be your degree.Make sure it's worth a fortune for those who admire you.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "1097",
            "Quote": "“Your mouth is not given to you for feeding alone; it is given to you to programme events and circumstance around you.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1098",
            "Quote": "“. . . you worked for Harry King, they said, because a broken leg was bad for business, and Harry King was all about business.” ― Terry Pratchett, Making Money"
        },
        {
            "Number": "1099",
            "Quote": "“Business as usual is no longer acceptable.” ― Steven Magee"
        },
        {
            "Number": "1100",
            "Quote": "“The only way to be content in life is to make sure your NEED don't become GREED.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1101",
            "Quote": "“Present your product and service simple and direct. Eliminate senseless small talk that takes up valuable time.” ― Timi Nadela"
        },
        {
            "Number": "1102",
            "Quote": "“Great partnerships should benefit us all” ― Marcel Fuursted"
        },
        {
            "Number": "1103",
            "Quote": "“If we try to see something positive in everything we do, life won't necessarily become easier but it becomes more valuable.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "1104",
            "Quote": "“Done is better than perfect.” ― Sheryl Sandberg, Lean In: Women, Work, and the Will to Lead"
        },
        {
            "Number": "1105",
            "Quote": "“To say that Bittersweet Café was her happy place was perhaps an understatement. In the last two years, Rachel had left behind her high-pressure executive chef job and Melody her dead-end position in a chain bakery, then decided to open their dream restaurant together. The way all the details had come together was downright magical; nowhere in Denver's history had a functional café and bakery materialized in under four months. But Ana had no doubt there had been a healthy measure of divine intervention in the situation. She could feel it in the mood and the atmosphere of this place. Light, welcoming, refreshing. It was no wonder they'd quickly developed a devoted following. They were already in the middle of plans to take over the vacant space in the strip mall beside them and expand to meet their ever-growing demand. Ana couldn't be prouder. If she were truthful, she was also a little jealous. She might be good at her job, and she was certainly well paid, but there was an allure to the idea of working with her best friends, being surrounded by delicious food and baked goods. Too bad she had absolutely no culinary talent. Her mom had made sure she could cook rice properly and prepare Filipino dishes like adobong manok and kaldereta, but her skills stopped there. Considering the fat and calorie content of those foods, she'd left her childhood meals behind in favor of an endless stream of grilled chicken or fish over salad.” ― Carla Laureano, The Solid Grounds Coffee Company"
        },
        {
            "Number": "1106",
            "Quote": "“Part time effort means part time results” ― Tony Curl"
        },
        {
            "Number": "1107",
            "Quote": "“Nodding your head, saying yeah, yeah and pretending to know things you don't is right up there with one of the worst things you can do when you hire someone to help you and your career.” ― Loren Weisman"
        },
        {
            "Number": "1108",
            "Quote": "“People relate to people, and if your brand feels like people, they’ll relate to you, too.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "1109",
            "Quote": "“A good idea is worse than a bad idea because you spend money on a good idea” ― Fritz Shoemaker"
        },
        {
            "Number": "1110",
            "Quote": "“The world is being run by savages wearing corporate business suits.” ― Steven Magee"
        },
        {
            "Number": "1111",
            "Quote": "“Some business coaches may disagree with me, but I wholeheartedly teach my community to start businesses around what you love doing.” ― Kevin J. Donaldson"
        },
        {
            "Number": "1112",
            "Quote": "“Focus on how far you have come in life rather than looking at the accomplishments of others.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "1113",
            "Quote": "“Everyone is watching you. If you don’t believe it, just pretend to fail and you’ll see many mockers. For this reason, work hard as if you are doing everyone’s business!” ― Israelmore Ayivor, Daily Drive 365"
        },
        {
            "Number": "1114",
            "Quote": "“While others were dreaming about it - I was getting it done.” ― Nathan W. Morris"
        },
        {
            "Number": "1115",
            "Quote": "“What could you do if you valued yourself more? Whatever you think your worth in life and business, double it. Then double it again.” ― Richie Norton"
        },
        {
            "Number": "1116",
            "Quote": "“You discover or re-discover yourself only through travel, and unplanned travel is the most exhilarating experience. I truly believe that not all those who wander are lost. But for the ones who are lost, wandering is the only way to find themselves.” ― Vishwas Mudagal"
        },
        {
            "Number": "1117",
            "Quote": "“And finally have fun with it. If you’re not having fun, your speakers won’t have fun, and your participants won’t have fun. No matter what happens, remember that marketing should be fun, and life should be enjoyed.” ― Osayi Emokpae Lasisi, Your First Virtual Summit: Everything you need to know to create your first successful Virtual Summit"
        },
        {
            "Number": "1118",
            "Quote": "“Make your customers comfortable and they will give you their lives.” ― Paul Orfalea, Copy This!: Lessons from a Hyperactive Dyslexic who Turned a Bright Idea Into One of America's Best Companies"
        },
        {
            "Number": "1119",
            "Quote": "“Most business meetings involve one party elaborately suppressing a wish to shout at the other: 'just give us the money'.” ― Alain de Botton"
        },
        {
            "Number": "1120",
            "Quote": "“A good businessman must have nose for business the same way a journalist has nose for news. In places where people see a lot of obstacles, I see a lot of opportunities. A good businessman sees where others don’t see.” ― Orji Uzor Kalu"
        },
        {
            "Number": "1121",
            "Quote": "“Personal connection builds trust;connection to the task builds energy.” ― Emily M. Axelrod, Let's Stop Meeting Like This: Tools to Save Time and Get More Done"
        },
        {
            "Number": "1122",
            "Quote": "“The higher you go in the corporate structure, the smaller your balls become.” ― Santosh Kalwar"
        },
        {
            "Number": "1123",
            "Quote": "“That is why enemies can be great motivators. They serve as fuel for your fire.” ― Simon Zingerman, We All Need Heroes: Stories of the Brave and Foolish"
        },
        {
            "Number": "1124",
            "Quote": "“Let them ask who you are but do not let others dictate who you should be.” ― Hockson Floin"
        },
        {
            "Number": "1125",
            "Quote": "“You should feel so driven to help the world that it would weigh you down if a single person received anything but the best.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1126",
            "Quote": "“Don't die without fulfilling your purpose.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1127",
            "Quote": "“Great leaders inspire greatness in others.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "1128",
            "Quote": "“In the midst of battle, you need something versatile to keep your focus” ― Isaiah Hankel"
        },
        {
            "Number": "1129",
            "Quote": "“An average man is egoistic, proud and has strong self esteem. They always require partners who massage their ego not those who will drag their ego to the mud.” ― Agu Jaachynma N.E."
        },
        {
            "Number": "1130",
            "Quote": "“You want how you do business to be consistent among all team members, including partners, management, employees, and even vendors.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1131",
            "Quote": "“We (McDonald's) are not technically in the food business. We are in the real estate business. The only reason we sell fifteen-cent hamburgers is because they are the greatest producer of revenue, from which our tenants can pay us our rent.” ― Harry J. Sonneborn"
        },
        {
            "Number": "1132",
            "Quote": "“It's not how good you are, it's how good you want to be.” ― Paul Arden, It's Not How Good You Are, It's How Good You Want To Be"
        },
        {
            "Number": "1133",
            "Quote": "“Don’t worry, I’m not quitting. I’ve decided I’m going to stay and make his life a living hell while I run his business into the ground. --Kim to Abe” ― Devon Rhodes, Silver and Gold"
        },
        {
            "Number": "1134",
            "Quote": "“If you can not do great things, Do small things in a great way.” ― Napoleon Hill"
        },
        {
            "Number": "1135",
            "Quote": "“The model of business success in the millennial era is that of dismantling social structures to suck up cash from whatever corners of life can still be exploited.” ― Jia Tolentino, Trick Mirror: Reflections on Self-Delusion"
        },
        {
            "Number": "1136",
            "Quote": "“If you are in the business of revenge, then you better dig two graves.” ― Chinese Proverb"
        },
        {
            "Number": "1137",
            "Quote": "“and I had spent a few days debating whether or not Michael was actually gay or just English. With the advent of metrosexuals and Europeans running around Manhattan, one never knows.” ― Polly Courtney, Poles Apart"
        },
        {
            "Number": "1138",
            "Quote": "“When You Aim for a Change, the Profits Follow & Therein Lies the Difference!” ― Dr. Mir Shahid Satar"
        },
        {
            "Number": "1139",
            "Quote": "“I am Donna Julia. I like business related books. I like forex trading and have started trading with a group related to trading. you may visit” ― A Trader"
        },
        {
            "Number": "1140",
            "Quote": "“Innovation is the specific instrument of entrepreneurship...the act that endows resources with a new capacity to create wealth.” ― Peter Drucker"
        },
        {
            "Number": "1141",
            "Quote": "“The intention to be right - insisting on being right - is the basic wrongness.” ― Meir Ezra"
        },
        {
            "Number": "1142",
            "Quote": "“In the last decade our attention span has dropped from 13 seconds to 8. To put that in comparison a goldfish has an attention span of 9 seconds. Don't be a goldfish.” ― Candice Galek"
        },
        {
            "Number": "1143",
            "Quote": "“A consultant: someone brought in to build a one-handled wheelbarrow.” ― Fennel Hudson, A Writer's Year - Fennel's Journal - No. 3"
        },
        {
            "Number": "1144",
            "Quote": "“You can run a business any way you like, but you'll run it better if you build it around your strengths.” ― Duncan Bannatyne, Anyone Can Do It"
        },
        {
            "Number": "1145",
            "Quote": "“Instead of complaining about adapting for millennials, it’s imperative for leaders and managers to acknowledge the role of millennial behavior as an indication of the needs of the modern workplace to attract, leverage, and retain modern talent.” ― Crystal Kadakia, The Millennial Myth: Transforming Misunderstanding Into Workplace Breakthroughs"
        },
        {
            "Number": "1146",
            "Quote": "“You cannot win while you are unwilling.” ― Meir Ezra"
        },
        {
            "Number": "1147",
            "Quote": "“If you give customers a chance, they’ll communicate with you in many ways.” ― Robert G. Thompson, Hooked on Customers: The Five Habits of Legendary Customer-Centric Companies"
        },
        {
            "Number": "1148",
            "Quote": "“I can always tell about the health of a culture of an organization by how much gossiping is happening” ― Brené Brown, The Power of Vulnerability: Teachings of Authenticity, Connections and Courage"
        },
        {
            "Number": "1149",
            "Quote": "“Look for the failures in your successes and the successes in your failures.” ― Bob Sutton"
        },
        {
            "Number": "1150",
            "Quote": "“Realize that something will happen. What will happen is what you say will happen.” ― Meir Ezra"
        },
        {
            "Number": "1151",
            "Quote": "“Your target market are more bothered about whether what you sell will get them promoted, sacked, recognised, accepted, praised or laid.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1152",
            "Quote": "“Marketers and executives are very different from the average consumer, so your instincts may mislead you.” ― Chad White, Email Marketing Rules"
        },
        {
            "Number": "1153",
            "Quote": "“I cannot stress this enough: content creators need to stop comparing their work with that of total strangers. Furthermore, we need to stop seeing ourselves as content consumers and realize that, as producers, we need time and distance from what is already out there in order to create truly innovative work. If you are always exposing your mind to others’ work, when will you gain the strength to create your own? Find a balance between inspiration and creation, and make sure that the first is indeed inspiring. What might start as a journey to gather ideas can quickly become a shortcut to discouragement. Know when to stop.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "1154",
            "Quote": "“Sometimes quietly taking the credit can advertise you and your ability in a much louder way than telling everyone that you were the one that did it.” ― Loren Weisman"
        },
        {
            "Number": "1155",
            "Quote": "“Any problem you have has a lie in it” ― Meir Ezra"
        },
        {
            "Number": "1156",
            "Quote": "“The easiest way to come up with a business idea is to look for a problem to solve. And if it matches up with your passion, skill set or experience, that is even better.” ― Victor Kwegyir, Pitch Your Business Like a Pro: Mastering The Art of Winning Investor Support For Business Success: Six Key Steps"
        },
        {
            "Number": "1157",
            "Quote": "“In business and in politics a man must carve and maul his way through men to get to be King of the Mountain. Once there, he can be great and kind--but he must get there first.” ― John Steinbeck, The Winter of Our Discontent"
        },
        {
            "Number": "1158",
            "Quote": "“What you deserve will be down to you, and you alone.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1159",
            "Quote": "“Some women think being arrogant, selfish, bitter and looking down on others are qualities of being an Independent, strong, powerful and successful business women. No matter how high you are in life. Never look down on others and never forget humanity.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "1160",
            "Quote": "“Be cohesive in your dealings. Trust built on and from mutual support, facilitating communication and encouraging coordination can be rewarding.” ― Ogwo David Emenike"
        },
        {
            "Number": "1161",
            "Quote": "“Management or not, no matter what the next-level role is or what your organization calls it, it is a step into a higher degree of leadership. That’s the first lesson. To be promotable, you must be seen as a leader. Period. Full stop.” ― Damaris Patterson Price, Unlock Your Leadership: Secrets Straight Answers on Standing Out, Moving Up, and Getting Ahead as the Leader You Really Are"
        },
        {
            "Number": "1162",
            "Quote": "“Either you run the business, or the business will run you” ― Fritz Shoemaker"
        },
        {
            "Number": "1163",
            "Quote": "“When you decide to put your business online it is a little bet tricky step for novice computer users because they want to keep data safe & secure. This problem developed from companies which did not take security seriously” ― Mohamed Saad"
        },
        {
            "Number": "1164",
            "Quote": "“In business and in life, at times it becomes a must to just drop the burden.” ― Abhishek Ratna, small wins BIG SUCCESS: A handbook for exemplary success in post Covid19 Outbreak Era"
        },
        {
            "Number": "1165",
            "Quote": "“If you want to break through to higher levels of performance, you must allow yourself to be restructured.” ― William A. Adams, Mastering Leadership: An Integrated Framework for Breakthrough Performance and Extraordinary Business Results"
        },
        {
            "Number": "1166",
            "Quote": "“Before joining any organization, attend at least 3 times on different days to see how members behave. If you are uncomfortable, hassled, coerced or threatened, do not return for any more counter cultural pressure. Be safe; be smart.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "1167",
            "Quote": "“Being trustworthy requires: Doing the right thing. And doing things right.” ― Don Peppers"
        },
        {
            "Number": "1168",
            "Quote": "“Understanding the concept of value, leverages the ability to strategically maximize on the gains from the right resources.” ― Wayne Chirisa"
        },
        {
            "Number": "1169",
            "Quote": "“Instead of freaking out about these constraints, embrace them. Let them guide you. Constraints drive innovation and force focus. Instead of trying to remove them, use them to your advantage.” ― 37Signals, Getting Real: The Smarter, Faster, Easier Way to Build a Web Application"
        },
        {
            "Number": "1170",
            "Quote": "“Desires and Karma are the worst enemies living in the same soul together. It depends on us whom we choose and feed.” ― Abhishek S, KARMA"
        },
        {
            "Number": "1171",
            "Quote": "“Leadership is influence” ― John C. Maxwell, Developing the Leader Within You"
        },
        {
            "Number": "1172",
            "Quote": "“One dollar managed by government returns about thirty cents after bureaucracy costs. Government managed services are up to three times more expensive than what could be expected from a competitive market.” ― Kyle Gimpl"
        },
        {
            "Number": "1173",
            "Quote": "“Let your motto then always be 'Excelsior', for by living up to it there is no such word as fail.” ― P T Barnum, The Art of Money Getting"
        },
        {
            "Number": "1174",
            "Quote": "“As a child, I used to wonder why markets in my locality were all situated near the main roads. I grew up a little to get the answer; \" that business minded people can meet there easily!\" Your dream must be situated where they can meet people!” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "1175",
            "Quote": "“The strength of the team is each individual member. The strength of each member is the team.” ― Phil Jackson"
        },
        {
            "Number": "1176",
            "Quote": "“The average artist has a naïve, unrealistic, and disconnected view of what the music industry is, how it works, what is involved in “making it”, and what actually is happening behind the scenes. Too many artists take at face value what they see on some TV documentary or read in a fan magazine. Whether you are working with others in a band, looking to connect with a manager, an agent, a label, or an investor, or you just want to work in the industry, it is more crucial than ever to know what you are working for and toward.” ― Loren Weisman, The Artist's Guide to Success in the Music Business: The “Who, What, When, Where, Why & How” of the Steps that Musicians & Bands Have to Take to Succeed in Music"
        },
        {
            "Number": "1177",
            "Quote": "“Treat Your Business like a Romance \"With Passion” ― Cindy Derbyshire"
        },
        {
            "Number": "1178",
            "Quote": "“Time is a deterioration of willingness.” ― Meir Ezra"
        },
        {
            "Number": "1179",
            "Quote": "“It's not about adopting technology for the sake of adopting it. Technology is only one of the stepping stones to achieve the desired outcomes by businesses and revamp traditional organisations to compete in the digital age. Technological innovation is only a supporting element to realising value and goals.” ― Csaba Gabor"
        },
        {
            "Number": "1180",
            "Quote": "“Không ai trong chúng ta có thể giỏi bằng tất cả chúng ta gộp lại” ― Ray Kroc"
        },
        {
            "Number": "1181",
            "Quote": "“Conman, fake pastors or prophets and fraudsters they all have the same target of people. They target people who want things without paying a fair price for them or people who want things for free without paying a price at all. In life , you have to put in some work and doing some sacrifices in order for you to make it. That is the price you pay for success.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "1182",
            "Quote": "“In regards to life goals, you need to think about where you are now, and plot out where you want to be a year from now, two years from now, and then five years from now.” ― Auliq Ice"
        },
        {
            "Number": "1183",
            "Quote": "“Somebody who is focused on money, doesn´t care about man. Somebody who cares about man, isn´t focused on money.” ― Alin Sav"
        },
        {
            "Number": "1184",
            "Quote": "“Implementing a CRM system will do absolutely nothing for your business. However, the continued and effective use of it will.” ― Bobby Darnell, Time For Dervin - Living Large In Geiggityville"
        },
        {
            "Number": "1185",
            "Quote": "“Don’t be afraid of failures it takes courage to try new things & only those who try create History.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1186",
            "Quote": "“Your company culture is the internal foundation on which everything in your business builds.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1187",
            "Quote": "“The most important thing in business is a persona, Nico,' he was fond of saying. 'People want to know immediately what they're dealing with. And when they think about you, you've got to stand out in their minds--like one of those characters in a novel.” ― Candace Bushnell, Lipstick Jungle"
        },
        {
            "Number": "1188",
            "Quote": "“20 percent customers give you 80 percent of the business? Are you focusing on them?” ― Azim Jamal & Brian Tracy"
        },
        {
            "Number": "1189",
            "Quote": "“Where there is a risk, there is a wealth.” ― Auliq Ice"
        },
        {
            "Number": "1190",
            "Quote": "“Self-observation is simply the observation of an internal state and an external event. It is pure awareness, which gives one the ability to choose one's actions. Only by having the choice can one perform what is right.” ― Abhishek S"
        },
        {
            "Number": "1191",
            "Quote": "“Understand this: If you pay attention to the client, he will pay attention to your product.” ― Alin Sav"
        },
        {
            "Number": "1192",
            "Quote": "“Our hesitancy to take credit for our accomplishments results in a loss of power, influence, and political capital in the workplace.” ― Bonnie Marcus, The Politics of Promotion: How High-Achieving Women Get Ahead and Stay Ahead"
        },
        {
            "Number": "1193",
            "Quote": "“Business Development is a 'contact' sport.” ― Bobby Darnell, Time For Dervin - Living Large In Geiggityville"
        },
        {
            "Number": "1194",
            "Quote": "“Showing off or bragging does not showcase authority or ability. Sharing your knowledge and experience without trying to sell yourself sends a greater message of engagement and authenticity.” ― Create Wealth Communities"
        },
        {
            "Number": "1195",
            "Quote": "“You will never change a prospective customer’s mind, my boy. There is a chance that he might make a new decision if enough reliable evidence comes his way, but to do that he has to want to listen - to hear it - and that requires trust and respect.” ― Chris Murray"
        },
        {
            "Number": "1196",
            "Quote": "“The moment you feel like you need to prove yourself, is the moment you need to be silent and walk away.” ― Rachel Wolchin"
        },
        {
            "Number": "1197",
            "Quote": "“Bad business should be done without guilt if it is a source of income.” ― Michael Bassey Johnson, Classic Quotations From The Otherworlds"
        },
        {
            "Number": "1198",
            "Quote": "“Be your own boss. If you're aiming for true wealth and freedom consider starting your own business.” ― Timi Nadela, Get To The Top"
        },
        {
            "Number": "1199",
            "Quote": "“Chicken + Egg Branding Dilemma What comes first - The brand or the clients?” ― Laura Beauparlant"
        },
        {
            "Number": "1200",
            "Quote": "“Convenience will put you out of business!” ― John Di Lemme, *57* Must Use Words in Every Piece of Marketing that You Do for Your Business"
        },
        {
            "Number": "1201",
            "Quote": "“The atmosphere you create influence the reception the other person will give you.” ― Unarine Ramaru"
        },
        {
            "Number": "1202",
            "Quote": "“Most people have one viewpoint - and it isn’t even theirs” ― Meir Ezra"
        },
        {
            "Number": "1203",
            "Quote": "“In the business world, there is no gray. Either you are black, or you are white-washed.” ― Sameer Kamat (Author), Business Doctors: Management Consulting Gone Wild"
        },
        {
            "Number": "1204",
            "Quote": "“Your mission statement, vision statement, core values, and service standards provide a clear focus for all while keeping your team humble and hungry. It creates that family environment in which your employees enjoy coming to work and dealing with the challenges they face each day.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1205",
            "Quote": "“In life and in business, your word must have value. Integrity is a priceless asset. Remember, a check is only as good as the person writing it. If their credibility is questionable, you may want to invest your time elsewhere.” ― Carlos Wallace"
        },
        {
            "Number": "1206",
            "Quote": "“Maturity involves turning an insult into a feedback.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "1207",
            "Quote": "“What's Management up to?\" I whispered to Bennett. \"My guess is a new acronym,\" he whispered. \"Departmental Unification Management Business.\" He wrote down the ltters on his legal pad. \"D.U.M.B.” ― Connie Willis, Bellwether"
        },
        {
            "Number": "1208",
            "Quote": "“I want to reach the top with it all--business, family and faith!” ― Joy Harris"
        },
        {
            "Number": "1209",
            "Quote": "“There is no room for emotion in business.” ― Kenneth Eade, Unwanted"
        },
        {
            "Number": "1210",
            "Quote": "“Self-awareness is the key to find our uniqueness. The latter increases our chance to succeed in our personal, career, and business lives...” ― Assegid Habtewold, The 9 Cardinal Building Blocks: For continued success in leadership"
        },
        {
            "Number": "1211",
            "Quote": "“I would give up, but that will teach my kids that it's okay to be a failure and I refuse to ruin their lives like that!” ― Mrs.Mignon T.Padilla"
        },
        {
            "Number": "1212",
            "Quote": "“If one can call anticipation of enemy reactions based on a lifetime of professional training and on thinking and application \"intuition,\" he had it ... He was a professional soldier, a student of history” ― William Duggan, Napoleon's Glance: The Secret of Strategy"
        },
        {
            "Number": "1213",
            "Quote": "“The Shoes Should fit! you can't build a business that is not yours.” ― Hockson Floin"
        },
        {
            "Number": "1214",
            "Quote": "“I only regret that I have but one business life to lose to my state hacks” ― Kevin Kolenda"
        },
        {
            "Number": "1215",
            "Quote": "“Price is what you pay. Value is what you get.” ― Warren Buffett"
        },
        {
            "Number": "1216",
            "Quote": "“Starting a business is one of the most exhilarating, and frightening, things you can do in a lifetime.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "1217",
            "Quote": "“REJECTION is kind of your negative ILLUSION which has no value but it’s give you a CLUE to go for next level of your ACTION.” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "1218",
            "Quote": "“You must have realised by now that when one really cares, really tries to help, the other party recognises the fact and, therefore, easily sees the logic in working together for the greater good, for the mutual benefit of both.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1219",
            "Quote": "“Most people think that sensuality is just a term reserved for bikini models, erotic novels and sex related businesses. But truth is, sensuality is there mainly to serve as a TOOL to developing one’s CONFIDENCE for both personal and professional success.” ― Lebo Grand"
        },
        {
            "Number": "1220",
            "Quote": "“The glass is either half empty or half full, and remember that whatever your perspective, it is entirely your choice.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "1221",
            "Quote": "“The business should come to realize that the secret of Data Science is to remove all ideas, all concepts, in order for the truth to have a chance to reveal itself.” ― Damian Mingle"
        },
        {
            "Number": "1222",
            "Quote": "“People who don't accept or realize that they have a problem are very dangerous individuals. ” ― Germany Kent"
        },
        {
            "Number": "1223",
            "Quote": "“Imagine the economic and social impact if the talents of people age 50-plus were unleashed via entrepreneurship. I'm just trying to do my bit to help that happen with \"Workarounds.” ― Douglas Freeman, Workarounds: 50+ insider tactics for age 50+ entrepreneurs"
        },
        {
            "Number": "1224",
            "Quote": "“These factory farmers calculate how close to death they can keep the animals without killing them. That's the business model. How quickly can they be made to grow, how tightly can they be packed, how much or how little can they eat, how sick can they get without dying.” ― Jonathan Safran Foer, Eating Animals"
        },
        {
            "Number": "1225",
            "Quote": "“The focus of gap analysis should be getting to the other side. If you bend-over to analyze a gap too long, you'll probably fall into it.” ― Ryan Lilly, Write like no one is reading"
        },
        {
            "Number": "1226",
            "Quote": "“Spreadsheets are more important to marketing than pretty pictures these days.” ― Trevor Carss"
        },
        {
            "Number": "1227",
            "Quote": "“People who are here for rewards, fame and money will ultimately fail. People who are here for love, meaning and people will ultimately win.” ― Maxime Lagacé"
        },
        {
            "Number": "1228",
            "Quote": "“A successful business requires one simple thing: PASSION.” ― Teresa Collins, Live LIFE in All Caps: The Teresa Collins Story"
        },
        {
            "Number": "1229",
            "Quote": "“Lean brands are the result of continually testing assumptions.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "1230",
            "Quote": "“Be a worthy worker and work will come.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1231",
            "Quote": "“Every time you see the Wal-Mart smiley face, whistling and knocking down the prices, somewhere there's a factory worker being kicked in the stomach. - Sherrie Ford” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "1232",
            "Quote": "“Being a solution and not a problem proves progression.” ― Unarine Ramaru"
        },
        {
            "Number": "1233",
            "Quote": "“The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "1234",
            "Quote": "“All told, over the period 1932-1980, nearly half a century, the top federal income tax rate in the United States averaged 81 percent.” ― Thomas Piketty, Capital in the Twenty-First Century"
        },
        {
            "Number": "1235",
            "Quote": "“Universal Basic Income is a net transfer, so the true cost is lower than most people describe it. If you gave £1,000 a month to everyone in the country for a few months, the cost would still be in a similar ballpark to the bailout during the financial crisis and rather than bailing out the banks we would be bailing out people and small businesses, which is quite compelling.” ― Fuad Alakbarov"
        },
        {
            "Number": "1236",
            "Quote": "“Walk a mile in your customers’ stilettos or loafers. Try to understand where they are in the moment.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1237",
            "Quote": "“The story is the heart of the sale.” ― Matthew Pollard, The Introvert's Edge: How the Quiet and Shy Can Outsell Anyone"
        },
        {
            "Number": "1238",
            "Quote": "“A business has to be involving, it has to be fun, and it has to exercise your creative instincts.” ― Richard Branson"
        },
        {
            "Number": "1239",
            "Quote": "“Let’s form a committee tasked with exploring why committees are so ineffective. Then we’ll stand-back and watch it argue and self-destruct.” ― Ryan Lilly"
        },
        {
            "Number": "1240",
            "Quote": "“Who better than Wal-Mart, after all, to make a kilowatt of electricity go twice as far, or a gallon of fuel move our trucks move three times the distance?\" -Wal-Mart ad” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "1241",
            "Quote": "“Adversity turns into advantage With the use of our will Don't wish for less challenge But for more skill” ― BJ Klock"
        },
        {
            "Number": "1242",
            "Quote": "“When starting a relationship in Business or Personal Be in it to win it.Be present,be consistent and remind YOUR focus of your desire.~bns” ― Bluenscottish"
        },
        {
            "Number": "1243",
            "Quote": "“Create your own path.Don't blindly follow the massess... because most of the time the \"M\" is silent.” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "1244",
            "Quote": "“Know your biggest WHY? Why do you joined network marketing business. Why do you want to change your life? It is your WHY that pushes you and edges you towards the crown of glory in the industry. Discover your why and get things done quickly,” ― Olawale Daniel"
        },
        {
            "Number": "1245",
            "Quote": "“Look for the positive qualities in your client's negative behavior.” ― Marilyn Suttle"
        },
        {
            "Number": "1246",
            "Quote": "“The large office had been deliberately designed so that the two sub-terranian levels were just the tiniest bit smaller, so that the building was proudly 51% conducting honest and open business, and only 49% not. Inkle and Kelvin had felt a boost of confidence from their manufactured technicality, similar to the comfort that survey results can provide when carefully polling groups more likely to give you comforting numbers.” ― Mandy Ashcraft, Small Orange Fruit"
        },
        {
            "Number": "1247",
            "Quote": "“If your content is good, your career just started.” ― Alin Sav"
        },
        {
            "Number": "1248",
            "Quote": "“If your website makes customers wait, their money is going to make you wait.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1249",
            "Quote": "“You are cause pretending to be effect. ” ― Meir Ezra"
        },
        {
            "Number": "1250",
            "Quote": "“Movement - Success of your business depends on your speed of movement in all areas - clients, invoices, accounting, content, marketing, ideas, website, etc.” ― Chinmai Swamy"
        },
        {
            "Number": "1251",
            "Quote": "“In regards to the price of commodities, the rise of wages operates as simple interest does, the rise of profit operates like compound interest. Our merchants and masters complain much of the bad effects of high wages in raising the price and lessening the sale of goods. They say nothing concerning the bad effects of high profits. They are silent with regard to the pernicious effects of their own gains. They complain only of those of other people.” ― Adam Smith, An Inquiry into the Nature and Causes of the Wealth of Nations"
        },
        {
            "Number": "1252",
            "Quote": "“To become successful, one must put themselves in the paths of giants!” ― Lillian Cauldwell"
        },
        {
            "Number": "1253",
            "Quote": "“Respect is reverence out of love, Fear is reverence out of hate.Choose Wisely” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "1254",
            "Quote": "“If you stop fighting for what you want, what you don't want will automatically take over” ― Gordon Attard"
        },
        {
            "Number": "1255",
            "Quote": "“Many people spend more time looking at their failures than focusing on their successes.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "1256",
            "Quote": "“Maintenance will keep us where we are, growth will put us where we are going” ― Dave Allred, The 21 Laws of Owning and Running a Bar: The Irrefutable Laws That the Most Successful Owners Use to Drive Traffic, Inspire Their Staff, Cut Costs and Skyrocket Their Profits"
        },
        {
            "Number": "1257",
            "Quote": "“When [what you are deeply passionate about, what you can be best in the world at and what drives your economic engine] come together, not only does your work move toward greatness, but so does your life. For, in the end, it is impossible to have a great life unless it is a meaningful life. And it is very difficult to have a meaningful life without meaningful work. Perhaps, then, you might gain that rare tranquility that comes from knowing that you’ve had a hand in creating something of intrinsic excellence that makes a contribution. Indeed, you might even gain that deepest of all satisfactions: knowing that your short time here on this earth has been well spent, and that it mattered.” ― Jim Collins, Good to Great: Why Some Companies Make the Leap... and Others Don't"
        },
        {
            "Number": "1258",
            "Quote": "“You cannot be certain while you are unwilling.” ― Meir Ezra"
        },
        {
            "Number": "1259",
            "Quote": "“When it comes to politics, most things can be resolved with a kind word, a simple smile and a solid handshake. And if these won't do, there's always business. For business is great for peace. And peace is great for business.” ― Mister Maximus"
        },
        {
            "Number": "1260",
            "Quote": "“How Ironic, when you do business you create exceptions to create new opportunities, when you write code (do a job) you handle exception to make it clean.” ― Pushkar Saraf"
        },
        {
            "Number": "1261",
            "Quote": "“The worst mistake a boss can make is not to say 'Well done'.” ― John Ashcroft"
        },
        {
            "Number": "1262",
            "Quote": "“Life is about the moments you create,that you can keep with you forever.After everything is over,That is what we have or what we are left with.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "1263",
            "Quote": "“Sometime in the future, when business slumps and there appears to be no solution in sight, you will hear others moaning about and blaming the things that are completely out of their control, wasting hour after hour on elements, which cannot be changed. Meanwhile, you, my boy, you will be focusing your efforts on the only thing that matters. The response which ensures you reach your destination.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1264",
            "Quote": "“The known is finite, the unknown infinite; intellectually we stand on an islet in the midst of an illimitable ocean of inexplicability. Our business in every generation is to reclaim a little more land, to add something to the extent and the solidity of our possessions. And even a cursory glance at the history of the biological sciences during the last quarter of a century is sufficient to justify the assertion, that the most potent instrument for the extension of the realm of natural knowledge which has come into men's hands, since the publication of Newton's ‘Principia’, is Darwin's ‘Origin of Species.” ― Thomas Henry Huxley"
        },
        {
            "Number": "1265",
            "Quote": "“Digital Marketing is like Feelings It keeps on changing” ― Laeeq Peeran"
        },
        {
            "Number": "1266",
            "Quote": "“An author who gives a manager or publisher any rights in his work except those immediately and specifically required for its publication or performance is for business purposes an imbecile.” ― George Bernard Shaw"
        },
        {
            "Number": "1267",
            "Quote": "“The most effective global leaders are style shifters with an uncanny ability to adapt to diverse people and climates.” ― Maya Hu-Chan, Saving Face: How to Preserve Dignity and Build Trust"
        },
        {
            "Number": "1268",
            "Quote": "“When you do it, you are not another dreamer” ― Hockson Floin"
        },
        {
            "Number": "1269",
            "Quote": "“In the twentieth century the women who wanted to be on their own were some of the best, the honest ones, those who instinctively rejected the trash. But here came a tragical dilemma. If they accepted Business and served it, they served the very thing from which they fled, and at best became imitation men. If they rejected Business and lived on allowances or incomes, they were in the anomalous position of hunting with the industrial hounds and running with the agricultural hare. An instinctive sense of this made many of them turn \"artist.\" And so Europe was cluttered up with incompetent women \"artists\" -- not that a woman is incapable of being an artist, but because the assumed role provided an escape. Either situation was impossible, and the solution is not yet found.” ― Richard Aldington, Women Must Work"
        },
        {
            "Number": "1270",
            "Quote": "“I think my mission is to be in business so I can create a positive impact that will uplift the others around me. (p. 78)” ― Injap Sia, Life Principles"
        },
        {
            "Number": "1271",
            "Quote": "“Simple, genuine goodness is the best capital to found the business of this life upon. It lasts when fame and money fail, and is the only riches we can take out of this world with us.” ― Louisa May Alcott, Little Men"
        },
        {
            "Number": "1272",
            "Quote": "“Business is as creative as the fine arts. You can be as unconventional, unique, and quirky as you want. A business is a reflection of the creator.” ― Derek Sivers, Anything You Want"
        },
        {
            "Number": "1273",
            "Quote": "“I faced people from all walks of business who fully disregarded design (though they were completely influenced by it). I also met fine artists who drowned in their own work and the dense creative universe in their minds. Then I met designers. And instantly fell in love. Let me tell you why. Designers are familiar with critiques. They not only tolerate them but actively look out for them. They honestly believe in iterations and learn to edit down their work. They embrace simplicity and create beauty based on requirements other than their own. Design education teaches you to run away from assumptions and to have the stomach to scrap your work often. I’m bringing this up because it’s time to bridge the gap between design and business.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "1274",
            "Quote": "“Look around you.. What do you understand? A million billion composition of life itself. Don't you see the reason? Straw is not gold, up is not down, white is not black. A only equates to A.” ― Kudretullah Sak"
        },
        {
            "Number": "1275",
            "Quote": "“Your customers will always be human, always have an empathic approach in how you treat guests. You will profit more on relatability than just revenue.” ― Janna Cachola"
        },
        {
            "Number": "1276",
            "Quote": "“You are as rich as the riches you create” ― Sandeep Sahajpal, The Twelfth Preamble: To all the authors to be!"
        },
        {
            "Number": "1277",
            "Quote": "“When taking on a leadership role in business remember it's about relationships. If your people (aka employees) are taken care of then they will respect you and return the favor.” ― Michael A. Contés II"
        },
        {
            "Number": "1278",
            "Quote": "“Every second of life reminds you that you are going to lose. So you decide that it’s better not to have to begin with. ” ― Meir Ezra"
        },
        {
            "Number": "1279",
            "Quote": "“Don't expect others to hand success to you. Create it - with heart, energy and enterprise - and you'll make it come true” ― Rasheed Ogunlaru"
        },
        {
            "Number": "1280",
            "Quote": "“Business does not need planning anymore. It demands out-of-the-box thinking.” ― Haresh Sippy"
        },
        {
            "Number": "1281",
            "Quote": "“Just as layoffs were making a mockery of the team concept, employees were urged to find camaraderie and a sense of collective purpose at the microlevel of the \"team\". And the less teamlike the overall organization became with the threat of continuous downsizing, the more management insisted on individual devotion to these largely fictional units.” ― Barbara Ehrenreich, Bright-Sided: How the Relentless Promotion of Positive Thinking Has Undermined America"
        },
        {
            "Number": "1282",
            "Quote": "“If it doesn't feel right to receive what you're sending, don't send it.” ― Trevor Carss"
        },
        {
            "Number": "1283",
            "Quote": "“Mother Nature continues in motion while your mind is segmented with probabilities. Remembering your night dreams shows exactly this - fleeting scenes of experience with nothing in between. Dee-anne Hayes” ― Dee-Anne Hayes, Simultaneous Minds: Reinventing Yourself for Globalisation Change to Achieve Enlightenment of Purpose"
        },
        {
            "Number": "1284",
            "Quote": "“Don't run away from the fight, run away the beating.” ― Serhat Beyaz KÖROĞLU"
        },
        {
            "Number": "1285",
            "Quote": "“Life is all about exploring yourself, discovering yourself and grooming yourself, then you will surely stop negative thinking.” ― Ehabib"
        },
        {
            "Number": "1286",
            "Quote": "“Like the evangelist, I will shine with the light I have been shown, recognise that I have the ultimate solution for all my prospects, nurture that feeling deep within, and repeat the words to myself every day, until there is no doubt in my mind that keeping such good news hidden would be the very worst type of sin.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1287",
            "Quote": "“The symbol of the Lotus flower gives a precious teaching that can inspire us to deal with life in the best possible way. Its roots take nourishment from muddy waters and yet bloom in full delicacy and beauty on the surface. Similarly, to have a positive mindset is a beautiful quality; nonetheless to be transformational it needs to be rooted firmly in reality to then blossom with the value which can be created from the muddy problem(s)” ― Dorotea Brandin, Heart to heart(s) Communication @ work.Universal values of Buddhism to inspire open, compassionate and effective communication"
        },
        {
            "Number": "1288",
            "Quote": "“Success is math; not magic. It is the sum of a behavioral equation… not the spontaneous fruition of wishful thinking.” ― Steve Maraboli"
        },
        {
            "Number": "1289",
            "Quote": "“You cannot give what has not been created. Your first action is always to create something.” ― Meir Ezra"
        },
        {
            "Number": "1290",
            "Quote": "“Anyone who likes or hates Dana White should take a look at this.” ― June White, Dana White, King of MMA"
        },
        {
            "Number": "1291",
            "Quote": "“Don't treat your business website like logistics, treat it like an employee.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1292",
            "Quote": "“A lot of things I choose not to ask about since they only lead to worrying about things I can do nothing about and are not my business anyway. Staying focused!” ― Jeffrey G. Duarte"
        },
        {
            "Number": "1293",
            "Quote": "“If you cannot tie your marketing efforts to actual dollars that the electric company will accept, it’s time to adjust your plan.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1294",
            "Quote": "“The best lesson from the myths of Newton and Archimedes is to work passionately but to take breaks. Sitting under trees and relaxing in baths lets the mind wander and frees the subconscious to do work on our behalf. Freeman Dyson, a world-class physi- cist and author, agrees: “I think it’s very important to be idle...people who keep themselves busy all the time are generally not creative. So I am not ashamed of being idle.” ― Scott Berkun, The Myths of Innovation"
        },
        {
            "Number": "1295",
            "Quote": "“There is no such thing as weak competition; it grows all the time.” ― Nabil N. Jamal"
        },
        {
            "Number": "1296",
            "Quote": "“You are never old nor too late to do what you love , because there is no age limit in being happy.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "1297",
            "Quote": "“could act like a CEO or I could really be a CEO, which means doing whatever I need to do (including asking obvious questions) to make the best decision for my company. No matter where you are in life, you’ll save a lot of time by not worrying too much about what other people think about you.” ― Sophia Amoruso, #Girlboss"
        },
        {
            "Number": "1298",
            "Quote": "“REDO THE MISSION STATEMENT AND THE BUSINESS PLAN EVERY THREE MONTHS” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "1299",
            "Quote": "“Perubahan pada bisnis harus dilakukan terus menerus, begitu juga dengan pemilik bisnis tersebut” ― IMNIGROUP"
        },
        {
            "Number": "1300",
            "Quote": "“I think it’s important to present yourself as a professional. While writing a good book is critical, nothing will cancel that out faster than behaving like an amateur. I cringe every time I see an author arguing with a reader who left a poor review, or fighting with their friends on Facebook … or publicly bashing their agents or publishers.” ― Alistair Cross"
        },
        {
            "Number": "1301",
            "Quote": "“People do business with people, and it’s essential that entrepreneurs understand this going into any venture.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "1302",
            "Quote": "“Budget for better business operations to avoid basement-bargaining another's skill and brilliance...that's a dead end detour toward business excellence.” ― Tracey Bond"
        },
        {
            "Number": "1303",
            "Quote": "“The way I look at debt is that you are taking something which does not belong to you. The person who you took it from expects you to give it back, plus a whole lot more compared to what you received in the first place, whether you like it or not.” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "1304",
            "Quote": "“Every second of life is reminding you that you are going to lose. So you decide that it’s better not to have.” ― Meir Ezra"
        },
        {
            "Number": "1305",
            "Quote": "“The highest human ability is to grant beingness.” ― Meir Ezra"
        },
        {
            "Number": "1306",
            "Quote": "“Multibagger mantra; find companies which are small in size: Medium in experience Large in aspiration & having an extra large market potential.” ― Vijay Kedia"
        },
        {
            "Number": "1307",
            "Quote": "“We all need salespeople who help people with the same enthusiasm shown by a small child describing the best Christmas present EVER” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1308",
            "Quote": "“At the age of twenty‐six, I was dead broke and ready to give up on my life goal of being an entrepreneur. At twenty‐nine, I was a million‐ aire and running one of the fastest‐growing companies in America. Two years later, I sold my company and my mind was ruined.” ― John Roa, A Practical Way to Get Rich . . . and Die Trying: A Memoir about Risking It All"
        },
        {
            "Number": "1309",
            "Quote": "“When you’re busy, avoid taking the quickest action. Instead make the extra effort to truly serve the customer.” ― Marilyn Suttle"
        },
        {
            "Number": "1310",
            "Quote": "“Wal-Mart benefits from the impression that globalization is some kind of unmanageable economic weather system out of the control of everyone, affecting all players with indifference, benefiting those who happened to be properly prepared.” ― Charles Fishman"
        },
        {
            "Number": "1311",
            "Quote": "“Money without meaning is meaningless” ― Josh Bezoni"
        },
        {
            "Number": "1312",
            "Quote": "“The customer that wants to defraud me is not right.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "1313",
            "Quote": "“Each segment of the worm is directly reproduced as a whole worm, just as each cell of the American CEO can produce a new CEO.” ― Jean Baudrillard, Simulacra and Simulation"
        },
        {
            "Number": "1314",
            "Quote": "“Look inward for solutions to your greatest challenges.” ― Omer Soker, The Future of Associations"
        },
        {
            "Number": "1315",
            "Quote": "“The accumulation of non-obvious, ineffective, or misapplied actions leads to low productivity.” ― Chris Behnke"
        },
        {
            "Number": "1316",
            "Quote": "“Evidently, one thing seems to have more value in direct proportion to whether or not we feel we have the freedoms, joys or conveniences of that thing.” ― David Brier"
        },
        {
            "Number": "1317",
            "Quote": "“People act in ways to maximize their self-interest within a company, so create incentives that align employee's objectives with the organization's mission statement. Reward compliance with core values as much as profitability, especially in the face of competitive pressures.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "1318",
            "Quote": "“You look green, immature. A young boy playing at business, dressing up in the manner in which he believes an actual grown-up would. Your viewpoint of business attire is one of wide-eyed wonder from the nursery door.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1319",
            "Quote": "“The only way to help someone is when you know they cannot return you back. Anything else is just business.” ― Manoj Arora, Happiness Unlimited: How to be happy always"
        },
        {
            "Number": "1320",
            "Quote": "“Feet on the ground, head in the clouds. That's how giants walk.” ― Andrea Pomelli"
        },
        {
            "Number": "1321",
            "Quote": "“Developing and having a positive outlook is never a coincidence; it’s a choice. You can choose to look horrible or admirable; that is no business of another person. The mind is the distillery, where all choices are brewed.” ― Israelmore Ayivor, Dream Big!: See Your Bigger Picture!"
        },
        {
            "Number": "1322",
            "Quote": "“Just because someone emailed you does not make it an invitation to add them to your email list. Show a greater respect to those connected with you to grow greater engaged numbers. And the excuse of 'they can just unsubscribe' is pretty petty & awfully unprofessional.” ― Loren Weisman"
        },
        {
            "Number": "1323",
            "Quote": "“What's very dangerous is not to evolve” ― Jeff Bezos"
        },
        {
            "Number": "1324",
            "Quote": "“Productivity refers to both the action and the result of a process that centres on assessing one’s priorities and then acting on them.” ― Melissa Steginus, Self Care at Work: How to Reduce Stress, Boost Productivity, and Do More of What Matters"
        },
        {
            "Number": "1325",
            "Quote": "“In business as well as in everything else, you're in business to spread love. Your agency should spread love, your screenplay should spread love, your store should spread love, your life should spread love. The key to a successful career is realizing that it s not separate from the rest of your life, but is rather an extension of your most basic self and your most basic self is love.” ― Marianne Williamson, A Return to Love: Reflections on the Principles of \"A Course in Miracles\""
        },
        {
            "Number": "1326",
            "Quote": "“The technical developments of almost every form of wealth [e.g., oil, minerals] are the forebears of Big Business; and Big Business, directly or indirectly, is the immediate cause of War.” ― Aleister Crowley, Magick Without Tears"
        },
        {
            "Number": "1327",
            "Quote": "“Fuck all your feelings cause business is business, it's strictly financial.” ― Moosa Rahat"
        },
        {
            "Number": "1328",
            "Quote": "“SMART Goal-setting will kill your dreams and your Mission!” ― Simeon Ivanov, 0.1%: Join The Club of The Richest, Healthiest, Happiest"
        },
        {
            "Number": "1329",
            "Quote": "“... I believe that he will prosper most whose mode of acting best adapts itself to the character of the times; and conversely that he will be unprosperous, with whose mode of acting the times do not accord.” ― Niccolò Machiavelli, The Prince"
        },
        {
            "Number": "1330",
            "Quote": "“Most people think that money and love aren’t related topics. But allow me explain this to you in a realistic way. When someone criticizes you but doesn’t see your value, this person is trying to bargain your happiness. When someone doesn’t invest in a relationship, but instead complains about her needs and wants, this person is overpricing herself. When a woman invests more in her outer beautify than inner beauty, she is focusing on her brand, and not quality. When the cost of a relationship exceeds the quality of what you get, you are being cheated. And there’s no such thing as cost for quality, because very often the nicest people you find are also the easiest to hang out with, and the kindest. They make you feel like your life is easy despite any challenges along the way, and that you haven’t lost anything but instead gained a lot. When someone adds value to your life, well then, that person proves to be a great investment. And great investments are worth a lifetime. They require little to be maintained but give you plenty in return. You should never let go a good opportunity, in love and wealth. And if you’re smart enough to understand this, you can be in a fantastic relationship and wealthy at the same time. If you can’t, you probably undervalued yourself.” ― Robin Sacredfire"
        },
        {
            "Number": "1331",
            "Quote": "“There is no actual scarcity other than the scarcity you create in the mind of others.” ― Meir Ezra"
        },
        {
            "Number": "1332",
            "Quote": "“LIFE - Death's Very Emissary” ― Abhishek S, KARMA"
        },
        {
            "Number": "1333",
            "Quote": "“When you are willing to be everything that you are, you become an infinitely creative source for everything in your life - including money.” ― Simone Milasas, Getting Out of Debt Joyfully"
        },
        {
            "Number": "1334",
            "Quote": "“Some people will hate you for pursuing what you love. Make sure you don't love them more.” ― Harsh Snehanshu, Because Shit Happened"
        },
        {
            "Number": "1335",
            "Quote": "“It is not good management to take profits out of the workers or the buyers; make management produce the profits. Don't cheapen the product; don't cheapen the wage; don't overcharge the public. Put brains into the method, and more brains, and still more brains—do things better than ever before; and by this means all parties to business are served and benefited.” ― Henry Ford, My Life and Work"
        },
        {
            "Number": "1336",
            "Quote": "“But while my inner voice was clearly telling me I was at my core an entrepreneur, it's inconvenient to decide at twenty-three that you can't really work for other people.” ― Kelly Cutrone, If You Have to Cry, Go Outside: And Other Things Your Mother Never Told You"
        },
        {
            "Number": "1337",
            "Quote": "“The basic intention of a person is to be in communication. When you lose, you consider there is a separation and a distance, and you have lost the ability to communicate. ” ― Meir Ezra"
        },
        {
            "Number": "1338",
            "Quote": "“The only unreachable dream is the one you don’t reach for.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1339",
            "Quote": "“Scout out competitors’ websites. Everything your competitors think is important or relevant usually exists on their website.” ― John Manning, The Disciplined Leader: Keeping the Focus on What Really Matters"
        },
        {
            "Number": "1340",
            "Quote": "“Make sure your business is creating a service experience so good that it demands loyalty.” ― Steve Maraboli"
        },
        {
            "Number": "1341",
            "Quote": "“Your business changes when you move away from negative people.” ― Alan Maiccon"
        },
        {
            "Number": "1342",
            "Quote": "“Emails are viewed as an essential historical record of an organization. A record that cannot be expunged must be created with care or not created at all.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "1343",
            "Quote": "“Start wherever you are! Low hanging fruit really tastes as good as the high stuff.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1344",
            "Quote": "“An entrepreneur tends to bite off a little more than he can chew hoping he’ll quickly learn how to chew it.” ― Jeff Stoller"
        },
        {
            "Number": "1345",
            "Quote": "“If you don’t actively admire those around you at least 100x more than you think you have to, you are making them wrong and will bring about a decline. ” ― Meir Ezra"
        },
        {
            "Number": "1346",
            "Quote": "“At a career peak, there is certainly the specter of competition from below, but just as importantly, there’s the risk that if we aren’t on a curve that satisfies us emotionally, we may be the cause of our own undoing.” ― Whitney Johnson, Disrupt Yourself: Putting the Power of Disruptive Innovation to Work"
        },
        {
            "Number": "1347",
            "Quote": "“You cannot be a modern association without a contemporary board.” ― Omer Soker, The Future of Associations"
        },
        {
            "Number": "1348",
            "Quote": "“Release your need for approval. Feel liberated being the authentic person you were designed to be.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "1349",
            "Quote": "“Who would be willing to put up with less than the desired result, if they could afford to have it done properly?” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1350",
            "Quote": "“American business at this point is really about developing an idea, making it profitable, selling it while it's profitable and then getting out or diversifying. It's just about sucking everything up. My idea was: Enjoy baking, sell your bread, people like it, sell more. Keep the bakery going because you're making good food and people are happy.” ― Ian Mackaye"
        },
        {
            "Number": "1351",
            "Quote": "“Results never lie.” ― Alin Sav"
        },
        {
            "Number": "1352",
            "Quote": "“The purpose of bureaucracy is to compensate for incompetence and lack of discipline.” ― Jim Collins, Good to Great: Why Some Companies Make the Leap... and Others Don't"
        },
        {
            "Number": "1353",
            "Quote": "“What is the “Once upon a time” of your brand story? Ask yourself this: “How does what I’m building help consumers close the gap between who they are today and who they want to be tomorrow?” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "1354",
            "Quote": "“It’s not important if your past is true or not (good or bad). There is only now.” ― Meir Ezra"
        },
        {
            "Number": "1355",
            "Quote": "“All of the failures of the Negro business, however, are not due to troubles from without...He learns how richer men of other races waste money. He builds a finer home than anybody else in the community, and in his social program he does not provide for much contact with the very people upon whom he must depend for patronage...so far outdistances his competitors in society that they often set to work in child-like fashion to bring him down to their level.” ― Carter G. Woodson, Black American Classics: 11 books in a single file (Samizdat Edition with Active Table of Contents), improved 2/27/2011"
        },
        {
            "Number": "1356",
            "Quote": "“A good golfer’s métier is his or her golfing skill. A great golfer’s métier is his or her golfing skill, coupled with the mastery of good sportsmanship, rendering him or her an ambassador for the sport.” ― Lorii Myers, Targeting Success, Develop the Right Business Attitude to be Successful in the Workplace"
        },
        {
            "Number": "1357",
            "Quote": "“Your Potential can far exceed your expectations” ― Cody McLain"
        },
        {
            "Number": "1358",
            "Quote": "“At the end of the day, we all live in this world together and to practice bringing peace onto Twitter is a huge step into bringing peace into our world.” ― Germany Kent"
        },
        {
            "Number": "1359",
            "Quote": "“Most startups actually start down and only go up if they catch the winds of market demand.” ― Ryan Lilly"
        },
        {
            "Number": "1360",
            "Quote": "“We are in the era whereby problems can easily be solved by making use of Artificial Intelligence and Machine Leaning.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "1361",
            "Quote": "“Create and communicate absolute clarity of purpose.” ― Omer Soker, The Future of Associations"
        },
        {
            "Number": "1362",
            "Quote": "“Businesses are great structures for managing big projects. It’s like trying to develop the ability to walk without developing a skeleton. Once in a blue moon, you get an octopus, but for the most part, you get skeletons. Skeletons are good shit.” ― Cory Doctorow, Makers"
        },
        {
            "Number": "1363",
            "Quote": "“Growing older doesn't mean that you are more mature than everyone who is younger than you. Maturity is a lot of things, and age has nothing to do with it.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1364",
            "Quote": "“I'm a businessman. And I wat you to be a businessman. And whenever you go to these meetings, I want you to think for yourself, and I want you to think about promoting your own interests no matter what. All these people both the Japanese and the Koreans - are fucked because they keep thinking about the group. But here's the truth: There's no such thing as a benevolent leader. I protect you because you work for me.” ― Min Jin Lee, Pachinko"
        },
        {
            "Number": "1365",
            "Quote": "“Money results from production and nothing else. Production is a result of a decision. Decisions are the results of your viewpoint. So, money is entirely the result of the viewpoint you take.” ― Meir Ezra"
        },
        {
            "Number": "1366",
            "Quote": "“Money Can make things better but a perfect relationship makes your life complete.” ― Hockson Floin"
        },
        {
            "Number": "1367",
            "Quote": "“Working cross-culturally is a lot like driving in a foreign country for the first time. Go on autopilot too quickly and you can easily crash and burn, too.” ― Maya Hu-Chan, Saving Face: How to Preserve Dignity and Build Trust"
        },
        {
            "Number": "1368",
            "Quote": "“The focus of the entrepreneur must always be on exchanging products or services for money, and anything that distracts from that like actually running a business, should be avoided where possible.” ― John Winterson Richards"
        },
        {
            "Number": "1369",
            "Quote": "“He who gives back at first repulse and without striking the second blow, despairs success, has never been, is not, and never will be, a hero in love, war or business. - Frederick Tudor” ― Gavin Weightman, The Frozen Water Trade"
        },
        {
            "Number": "1370",
            "Quote": "“If you really want to dominate the competition and make big bucks, you’ve got to be the best. Do that, be that, and no one will be able to touch you. With one exception. Someone with less passion and talent and poorer content can totally beat you if they’re willing to work longer and harder than you are. Hustle is it.” ― Gary Vaynerchuk, Crush It!: Why Now Is the Time to Cash In on Your Passion"
        },
        {
            "Number": "1371",
            "Quote": "“How you think matters. How you act matters more.” ― James Woosley, Conquer the Entrepreneur's Kryptonite: Simple Strategic Planning for You and Your Business"
        },
        {
            "Number": "1372",
            "Quote": "“Having a me-too brand is a death sentence.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "1373",
            "Quote": "“Culture is what happens when the managers are not around.” ― Pearl Zhu, Digital Valley: Five Pearls of Wisdom to Make Profound Influence"
        },
        {
            "Number": "1374",
            "Quote": "“We are living a fantasy life in our heads, and our real life is passing by, moment by moment.Life is only lived in moments: anything else is a fantasy, a lie, an illusion.” ― Abhishek S, KARMA"
        },
        {
            "Number": "1375",
            "Quote": "“Don't refuse to risk, if you succeed you will be pleased, if you fail you will be prudent.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1376",
            "Quote": "“You can't dominate a network with old-style leadership. But, you can emerge, with the network's consent, as one of its leaders, regardless of your formal position or job title.” ― Phil Dourado, The 60 Second Leader: Everything You Need to Know about Leadership, in One Minute Bites"
        },
        {
            "Number": "1377",
            "Quote": "“We need to move from comparative advantage to perpetual advantage...” ― Max McKeown, The Strategy Book"
        },
        {
            "Number": "1378",
            "Quote": "“A man who tells you to follow him, will turn his followers into his company. While a true leader who does not tell you to follow him, will sit in the company of his followers. -- Suzy Kassem” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "1379",
            "Quote": "“Design is your silent storyteller. The visual aesthetic you share with the world tells a story about the values you uphold. When your audience is not ready or willing to listen, a strong visual can capture even the most evasive of minds. Design is not ornamental or secondary: it can propel your stories far beyond the spaces you initially planned for.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "1380",
            "Quote": "“Nếu bạn có thể nhận ra cạnh tranh chỉ làm tổn hại hơn là mang lại giá trị thì bạn sẽ cảm thấy sảng khoái hơn nhiều so với số đông.” ― Peter Thiel, Zero to One: Notes on Startups, or How to Build the Future"
        },
        {
            "Number": "1381",
            "Quote": "“When a man finds this kind of woman, he will go all out for her knowing that she will not be a letdown.” ― Agu Jaachynma N.E."
        },
        {
            "Number": "1382",
            "Quote": "“Explain the value and justify the cost - People don’t mind paying; they just don’t like to overpay.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1383",
            "Quote": "“Marketing is a contest, a sale is its prize.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1384",
            "Quote": "“Smartass Disciple: Master, you keep preaching the truth. They don't listen. Master of Stupidity: Oh that's not bad. That attitude keeps us in the business.” ― Toba Beta, Master of Stupidity"
        },
        {
            "Number": "1385",
            "Quote": "“Where we fall are the stepping-stones for our journey.” ― Lolly Daskal, Thoughts Spoken From The Heart"
        },
        {
            "Number": "1386",
            "Quote": "“I don’t buy or sell relationships, so let’s talk business.” ― Sukant Ratnakar, Open the Windows"
        },
        {
            "Number": "1387",
            "Quote": "“YOU CAN’T DO TODAY’S BUSINESS WITH YESTERDAY’S METHODS AND BE IN BUSINESS TOMORROW” ― Pedro Ahlers"
        },
        {
            "Number": "1388",
            "Quote": "“Are you afraid from Burglar and want a tight security at low cost,Centex Security in Miami perfect for the business security which is wireless and easy to handle.” ― Centex Security"
        },
        {
            "Number": "1389",
            "Quote": "“Most companies that win don't have a unique strategy; quite the opposite, they are doing what everyone else is doing but have figured out how to execute better.” ― Robert G. Thompson, Hooked on Customers: The Five Habits of Legendary Customer-Centric Companies"
        },
        {
            "Number": "1390",
            "Quote": "“Innovation, probably is the most controversially discussed term. In digitalization, innovation often is not being driven with the relevant business impact. As a result, businesses get stuck in old patterns and known issues which leads to more of the same.” ― Pedro Ahlers"
        },
        {
            "Number": "1391",
            "Quote": "“Unfortunately, the worst part of a product/service is the seller.” ― Alin Sav"
        },
        {
            "Number": "1392",
            "Quote": "“When you gain, they (banks) gain. When you lose, they’re indifferent.” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "1393",
            "Quote": "“During the day I negotiated buying mom and pop companies and incorporating them into our larger network. Sometimes we let the original owners stay on as consultants. Rarely, actually, if I’m being honest and, even when we did, it never usually lasted for very long. Mostly, those once proud owners would see the box store makeover of their businesses and decide that retirement in some warm locale really did seem the better option. Did I ever feel guilty looking at these hardworking people and taking everything they’d assembled? Not even a little. Would you feel guilty handing someone hundreds of thousands or, in some cases, millions of dollars to go do whatever tickles their fancy?” ― Mandy Nachampassack-Maloney"
        },
        {
            "Number": "1394",
            "Quote": "“To be REAL means waking up. Waking up to the inner-truth of who we are and what drives us. It requires an honest look in the mirror to acknowledge that we are not perfect. Waking up means we are willing to transform ourselves from fear-based mindsets and behaviors to become a better person than who we are today. Becoming a REAL leader requires authenticity, humility, caring, transparency, and discernment. Robertson, Susan. Real Leadership: Waken To Wisdom. The Books Factory. Kindle Edition.” ― Susan Robertson, Real Leadership: Waken To Wisdom"
        },
        {
            "Number": "1395",
            "Quote": "“The most successful businesses have leaders that see the correlation between customer service and sales… not as separate departments, but as complimentary components for growth.” ― Steve Maraboli"
        },
        {
            "Number": "1396",
            "Quote": "“Entrepreneurs juggle multiple responsibilities every day.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "1397",
            "Quote": "“Social Entrepreneurship is more of a mind-shift task, rest is the entrepreneurship itself''.” ― Dr. Mir Shahid Satar"
        },
        {
            "Number": "1398",
            "Quote": "“So rich a client having suffered such a messy death was an unsettling embarrassment to Captain Harald Biscay. It was bad for business. He had the murder hushed up immediately, his security staff investigating the matter covertly but thoroughly. Five and a half thousand souls onboard. Five and a half thousand suspects. Three days. So far, nothing. Now it would be taken further by the planetary authorities on the colony world below. A forensic team (cunningly disguised as a cleaning crew) was now rummaging through Smiffs apartment, examining every single particle. He had a feeling -- a strong feeling, about what they were going to find. Somehow, Biscay was of the opinion that this was going to be another contender for the Unsolved Murders show.” ― Christina Engela, Dead Man's Hammer"
        },
        {
            "Number": "1399",
            "Quote": "“Stop entertaining two faced people. You know the ones who have split personalities and untrustworthy habits. Nine times out of ten if they telling you stuff about another person, they're going to tell your business to other people. If they say, \"You know I heard.........\" More than likely it's in their character to share false information. Beware of your box, circle, square! Whatever you want to call it.” ― Amaka Imani Nkosazana, Sweet Destiny"
        },
        {
            "Number": "1400",
            "Quote": "“Invest in yourself so others can invest in you.” ― Neo Shamon"
        },
        {
            "Number": "1401",
            "Quote": "“A friend with seed (capital), is a business-man in deed.” ― Vikrmn, Guru with Guitar"
        },
        {
            "Number": "1402",
            "Quote": "“Success seems to be connected to action. Successful people keep moving. They make mistakes, but they don’t quit.” ― Conrad Hilton"
        },
        {
            "Number": "1403",
            "Quote": "“Why do customers (and that includes you and me) find it so difficult to recall more than a couple of occasions when they felt that they were treated exceptionally by the salespeople who dealt with them?” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1404",
            "Quote": "“Never trust a person that tries to sell you by how righteous they are. I'm telling your right now, it's a scam.” ― Richie Norton"
        },
        {
            "Number": "1405",
            "Quote": "“Stop letting other people hijack your day.” ― Frank Sonnenberg, Soul Food: Change Your Thinking, Change Your Life"
        },
        {
            "Number": "1406",
            "Quote": "“When people think you're crazy, it's just because they don't have the courage to do what you're doing.” ― Ryan Serhant, Sell It Like Serhant: How to Sell More, Earn More, and Become the Ultimate Sales Machine"
        },
        {
            "Number": "1407",
            "Quote": "“People try to control people by creating losses.” ― Meir Ezra"
        },
        {
            "Number": "1408",
            "Quote": "“We’re all somebody’s prospect; we’re all somebody’s customer.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1409",
            "Quote": "“...treasure what it means to do a day's work. It's our one and only chance to do something productive today, and it's certainly not available to someone merely because he is the high bidder. A day's work is your chance to do art, to create a gift, to do something that matters. As your work gets better and your art becomes more important, competition for your gifts will increase and you'll discover that you can be choosier about whom you give them to.” ― Seth Godin, Linchpin: Are You Indispensable?"
        },
        {
            "Number": "1410",
            "Quote": "“It doesn't matter how many people you have on social networking sites. What matters is how you benefited them and how you benefited from them” ― Nash"
        },
        {
            "Number": "1411",
            "Quote": "“Commerce does not have to be a ruthless, brutal enterprise that damages people’s lives. It can be a source of happiness, healing, and hope.” ― Brian de Haaff, Lovability: How to Build a Business That People Love and Be Happy Doing It"
        },
        {
            "Number": "1412",
            "Quote": "“See the good in the person and see the bad. That’s him. That’s all.” ― Meir Ezra"
        },
        {
            "Number": "1413",
            "Quote": "“If you’re creative, if you can think independently, if you can articulate passion, if you can override the fear of being wrong, then your company needs you more than it ever did. And now your company can no longer afford to pretend that isn’t the case. So dust off your horn and start tooting.” ― Hugh MacLeod, Ignore Everybody: and 39 Other Keys to Creativity"
        },
        {
            "Number": "1414",
            "Quote": "“Do extremely difficult work. That seems obvious, right? If you do something that's valued but scarce because it's difficult, you're more likely to be in demand and to be compensated fairly for what you do. The implication is stunning, though: When designing a project or developing a skill, seek out the most difficult parts to master and contribute. If it's easy, it's not for you.” ― Seth Godin"
        },
        {
            "Number": "1415",
            "Quote": "“When you notice you are unwilling, you are no longer the creator. Someone else is the creator.” ― Meir Ezra"
        },
        {
            "Number": "1416",
            "Quote": "“When actively engaged consumers understand why and where they spend their dollars, they will influence the world on a larger scale.” ― Michael McGinnis, GPS Guide for Athletes and Those Who Surround Them: How to Empower Your Sports Goals, Navigate the Process, and Steer Toward Success"
        },
        {
            "Number": "1417",
            "Quote": "“How you think about your customers influences how you respond to them.” ― Marilyn Suttle"
        },
        {
            "Number": "1418",
            "Quote": "“To succeed as a youth, you must be focused, and be determined not to be a tool in the hands of rogues and desperate politicians.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "1419",
            "Quote": "“Our fight is a fundamental fight against both of the old corrupt party machines, for both are under the dominion of the plunder league of the professional politicians who are controlled and sustained by the great beneficiaries of privilege and reaction.” ― Theodore Roosevelt"
        },
        {
            "Number": "1420",
            "Quote": "“The last trillion-dollar industry was built on a code of 1s and 0s. The next will be built on our own genetic code.” ― Alec J. Ross, The Industries of the Future"
        },
        {
            "Number": "1421",
            "Quote": "“Always follow your dreams with confidence and conviction, don’t fall for the trap of dream killers” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1422",
            "Quote": "“If commitment is required to start, it is deeply important to persist to reach the end. All the path is done walking, where there are obstacles, go around them, where there are falls, get up, where you feel tired, rest, but never stop until you reach the destination. Tania Tome (C)” ― Tania Tome"
        },
        {
            "Number": "1423",
            "Quote": "“Although some organizations today may survive and prosper because they have intu- itive geniuses managing them, most are not so fortunate. Most organizations can benefit from strategic management, which is based upon integrating intuition and analysis in decision making. Choosing an intuitive or analytic approach to decision making is not an either–or proposition. Managers at all levels in an organization inject their intuition and judgment into strategic-management analyses. Analytical thinking and intuitive thinking complement each other. Operating from the I’ve-already-made-up-my-mind-don’t-bother-me-with-the-facts mode is not management by intuition; it is management by ignorance. Drucker says, “I believe in intuition only if you discipline it. ‘Hunch’ artists, who make a diagnosis but don’t check it out with the facts, are the ones in medicine who kill people, and in management kill businesses.” ― Fred R. David, Strategic Management: Concepts and Cases, Instructor Review Copy"
        },
        {
            "Number": "1424",
            "Quote": "“I am going to destroy your toxic business model with scientific discovery.” ― Steven Magee"
        },
        {
            "Number": "1425",
            "Quote": "“No matter what goals you set to accomplish always remember there is a thing known as Life which you should never forget to live and enjoy” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1426",
            "Quote": "“There is nothing wrong with the physical universe if you know you are creating it. ” ― Meir Ezra"
        },
        {
            "Number": "1427",
            "Quote": "“In business, do not take anything that does not rightfully belong to you. The day you end up taking anything that is not rightfully yours, from that day your business will not prosper.” ― Dada Bhagwan, Worries"
        },
        {
            "Number": "1428",
            "Quote": "“In business, we are captive to the power of institutions and multinational corporations. In art, we are criticized for providing alternate views on culture. In life, our steps are easily traced by the state.” ― Koosha Azim"
        },
        {
            "Number": "1429",
            "Quote": "“Seeking those elusive individuals is like mining for rare gems. It will take hard work, patience, and a persistent attitude. To find that rich seam of colourful stones, you will have to chip through dirt and rock. You will have to learn how to hold rubble in your hands and see the fortune inside.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1430",
            "Quote": "“Haji Ali taught me to...slow down and make building relationships as important as building projects.” ― Greg Mortenson, Three Cups of Tea: One Man's Mission to Promote Peace ... One School at a Time"
        },
        {
            "Number": "1431",
            "Quote": "“Be yourself! Fill yourself up with light and fly!” ― Jodi Livon, The Happy Medium: Awakening to Your Natural Intuition"
        },
        {
            "Number": "1432",
            "Quote": "“If only employees knew this...there is no hand out just because you got a degree. You still gotta make $ for the biz (employer), if you choose not to make $ for yourself (freelancer / ent).” ― Richie Norton"
        },
        {
            "Number": "1433",
            "Quote": "“If you have to repeatedly chase after someone when you have a great opportunity, don't bother, if they aren't responsive, they aren't the type of person who'll succeed at it anyway.” ― Rob Liano"
        },
        {
            "Number": "1434",
            "Quote": "“What you say in your marketing and what your company actually does has to line up if you want to be trustworthy and your messages be perceived as authentic by your employees, prospects, and customers.” ― Miles Anthony Smith"
        },
        {
            "Number": "1435",
            "Quote": "“I suffered,I learned,I changed” ― Ashraf Haggag, No Place To Stand Alone: Historical Mergers and Acquisitions in Different Corporate Markets"
        },
        {
            "Number": "1436",
            "Quote": "“Good leaders train and invest in other people to become leaders. Bad leaders hold on to power until they die. They want to die in the positions they are having.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "1437",
            "Quote": "“You Can't sell something until you get permission!” ― Robert Kinch, Sales Made Easy for Entrepreneurs"
        },
        {
            "Number": "1438",
            "Quote": "“Wherever there is abuse there is also corruption. Politics, philosophy, theology, science, industry, any field with the potential to affect the well-being of others can be destroyed by abuse and saved by good will.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "1439",
            "Quote": "“More importantly, our software worked. I don't just mean that it didn't bump, or that it performed according to the written specifications, or that it was efficient in producing reports. It really worked” ― Eliyahu M. Goldratt, The Goal: A Process of Ongoing Improvement"
        },
        {
            "Number": "1440",
            "Quote": "“Every posting, message, or email creates an impression, a public persona, from which other people make judgments. We make judgments about others, but how often do we turn that critical analysis on ourselves?” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "1441",
            "Quote": "“A nation is safer and progressive when the citizens own or are involved in healthy businesses that can aid them enjoy good livelihood without any fear for tomorrow.” ― Ifeanyi Enoch Onuoha"
        },
        {
            "Number": "1442",
            "Quote": "“Nobody cares about you as a person, but they care about you as a customer. That’s how business works.” ― Abdallah Shawaf"
        },
        {
            "Number": "1443",
            "Quote": "“Loyalty and honesty are the most important yet often ignored qualities in business. Long term success depends on these qualities.” ― Arshad Wahedna"
        },
        {
            "Number": "1444",
            "Quote": "“When you are stressed and challenged by hardships just smile through it as frowning won’t help in changing the situation” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "1445",
            "Quote": "“I strongly believe that we need to embrace Artificial Intelligence and Machine Learning for maximum growth in our day to day activities in order to excel and succeed.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "1446",
            "Quote": "“If your women are strong and fierce warriors, just think how the men are! - Kailin Gow” ― Kailin Gow"
        },
        {
            "Number": "1447",
            "Quote": "“If you think training is expensive, try ignorance.” ― Peter Dricler"
        },
        {
            "Number": "1448",
            "Quote": "“The lows may be the highs in disguise.” ― Haresh Sippy"
        },
        {
            "Number": "1449",
            "Quote": "“Steve si myslí, že většina lidí nemá to, co je potřebné, aby se stali podnikateli nebo produktovými manažery. Mluvil o tom, když se pokoušel úspěšně rozjet NeXT. \"Mnoho lidí,\" prohlásil, \"ke mně přichází a říká, 'chci se stát podnikatelem'.\" Když se jich zeptám: \"Jakou máte představu?\", odpovídají: \"Ještě žádnou nemám.\" Takovým lidem Steve doporučuje: \"Myslím, že byste si měl najít práci sběrače nádobí nebo něco podobného, než si uvědomíte, pro co jste opravdu zapálen.” ― Walter Isaacson, Steve Jobs"
        },
        {
            "Number": "1450",
            "Quote": "“It really matters when the work we are doing doesn't.” ― Scott Mautz, Make It Matter: How Managers Can Motivate by Creating Meaning"
        },
        {
            "Number": "1451",
            "Quote": "“I am love and light in action.” ― Jodi Livon"
        },
        {
            "Number": "1452",
            "Quote": "“I will design myself a reputation, in which prospects can place their trust, and customers return to and recommend.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1453",
            "Quote": "“Are you the creator or not? That’s what determines whether it is good or bad for you.” ― Meir Ezra"
        },
        {
            "Number": "1454",
            "Quote": "“Creating a business that doesn't require a sacrifice of your happiness and family is no joke. Choose lifestyle over business. Create a lifestyle business.” ― Richie Norton"
        },
        {
            "Number": "1455",
            "Quote": "“Defects are completed in love, but it's not the same in business.” ― Alan Maiccon"
        },
        {
            "Number": "1456",
            "Quote": "“Business is love made visible, membangun bisnis adalah perwujudan cinta yang sebenarnya; cinta kepada sesama manusia; cinta terhadap alam semesta dan penciptanya. Business profit doesn’t result from what we get, but from what we give. Keuntungan bisnis bukan berasal dari apa yang kita peroleh, tapi dari apa yang telah kita berikan. Ini tak hanya berlaku dalam dunia bisnis, tapi juga merefleksikan sisi terbaik manusia. Ya, seni terindah dari sisi kemanusiaan adalah kedermawaan hati, yang tak menuntut ditilik manusia lain. (244)” ― Hanum Salsabiela Rais"
        },
        {
            "Number": "1457",
            "Quote": "“When I ask entrepreneurs their major problems, many just quickly say; LACK OF FINANCIAL CAPITAL. Yes, this is a problem for some but not a problem for many who think it is a problem. What most ENTREPRENEURS need are business MENTORS, COACHES AND COUNSELORS.” ― Marilyn Oma Anona"
        },
        {
            "Number": "1458",
            "Quote": "“It's time to calculate your risks make amends to reduce errors and increase your successes” ― Martin lst Powell"
        },
        {
            "Number": "1459",
            "Quote": "“Mentor Me: ...the crossroads and convergence of where science, metaphysics, religion, and utopian society intersect.” ― Ken Poirot, Mentor Me: GA=T+E—A Formula to Fulfill Your Greatest Achievement"
        },
        {
            "Number": "1460",
            "Quote": "“to be successful, you have to be out there, you have to hit the ground running” ― Richard Branson, Losing My Virginity: How I've Survived, Had Fun, and Made a Fortune Doing Business My Way"
        },
        {
            "Number": "1461",
            "Quote": "“No one is indispensable; but a dependable person is never expendable.” ― Kayambila Mpulamasaka"
        },
        {
            "Number": "1462",
            "Quote": "“The one who hugs a debt also shakes hand with a danger.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1463",
            "Quote": "“Our Leaders of today need the philosophy of the past, paired with the scientific knowledge and technology of tomorrow.” ― Anders Indset"
        },
        {
            "Number": "1464",
            "Quote": "“You are willing when you are able to assume any viewpoint.” ― Meir Ezra"
        },
        {
            "Number": "1465",
            "Quote": "“Keep the momentum while you are moving to guarantee additional motion and momentum.” ― Loren Weisman, The Artist's Guide to Success in the Music Business: The “Who, What, When, Where, Why & How” of the Steps that Musicians & Bands Have to Take to Succeed in Music"
        },
        {
            "Number": "1466",
            "Quote": "“The more details, depth and thought you put into your ideas the more valuable they become.” ― Simon Zingerman, We All Need Heroes: Stories of the Brave and Foolish"
        },
        {
            "Number": "1467",
            "Quote": "“When we step into positions of leadership, we make a whole set of promises we may not know we are making.” ― Bob Anderson, Mastering Leadership: An Integrated Framework for Breakthrough Performance and Extraordinary Business Results"
        },
        {
            "Number": "1468",
            "Quote": "“People are bad at looking at seeds and guessing what size tree will grow out of them. The way you’ll get big ideas in, say, health care is by starting out with small ideas. If you try to do some big thing, you don’t just need it to be big; you need it to be good. And it’s really hard to do big and good simultaneously. So, what that means is you can either do something small and good and then gradually make it bigger, or do something big and bad and gradually make it better. And you know what? Empirically, starting big just does not work. That’s the way the government does things. They do something really big that’s really bad, and they think, Well, we’ll make it better, and then it never gets better”. Building Fast Companies for Growth, Inc. September 2013” ― Paul Graham"
        },
        {
            "Number": "1469",
            "Quote": "“I think it’s important to present yourself as a professional. While writing a good book is critical, nothing will cancel that out faster than behaving like an amatuer. I cringe every time I see an author arguing with a reader who left a poor review, or fighting with their friends on Facebook … or publicly bashing their agents or publishers.” ― Alistair Cross"
        },
        {
            "Number": "1470",
            "Quote": "“There's nothing wrong with staying small. You can do big things with a small team.” ― Jason Fried"
        },
        {
            "Number": "1471",
            "Quote": "“The bottom line is a learning curve.” ― Michael Schrage, The Innovator's Hypothesis: How Cheap Experiments Are Worth More Than Good Ideas"
        },
        {
            "Number": "1472",
            "Quote": "“You put the value into things” ― Meir Ezra"
        },
        {
            "Number": "1473",
            "Quote": "“Always remember this, Henri. Men trade for profit. They are driven by greed. But debt is about fear, and fear is stronger than greed. The true power, the weapon that defeats all others, is debt. Fools search for gold. The wise man studies debt. That is the key to all business.” ― Edward Rutherfurd, London"
        },
        {
            "Number": "1474",
            "Quote": "“As marketing converges with customer service and sales, marketing today is more about helping and less about hyping.” ― Joel Book"
        },
        {
            "Number": "1475",
            "Quote": "“A Christian Entrepreneur's Prayer: Dear Lord, Thank you for the freedom to use the gifts you have given me, the wisdom to give them back to you for your glory, and the opportunity to serve you in the marketplace. Today, I ask for strength to persevere through challenges that may come my way. Help me to rest knowing that you have fought and won every battle on my behalf. I ask for provision so that my business would be a sustainable source of income for those that are connected to it. I ask for fresh inspiration and creativity so that I can positively impact and change lives. Help me to run my business with integrity, diligence and compassion so that I can be a lighthouse in my industry and community. I pray that you would turn the hardships into testimonies of beauty and that favor would follow me everywhere that I go. Where I am lacking in faith, Father, help my unbelief. I thank you for the confidence that I can have knowing you hear my prayers and that you will bring me to an expected end. In Jesus’ name. Amen.” ― Andrena Sawyer"
        },
        {
            "Number": "1476",
            "Quote": "“We should responsibly carry out the business that God has assigned for us to do” ― Sunday Adelaja"
        },
        {
            "Number": "1477",
            "Quote": "“It's better to do small job with big motivation rather than a big job with small motivation” ― Mohsen Ali"
        },
        {
            "Number": "1478",
            "Quote": "“Online Faxing - A tool that does one thing and it does it well\" -ifaxapp” ― Andy Fax"
        },
        {
            "Number": "1479",
            "Quote": "“Whilst I could not think of any man whose spirit was, or needed to be, more enlarged than the spirit of a genuine merchant. What a thing it is to see the order which prevails throughout his business! By means of this he can at any time survey the general whole, without needing to perplex himself in the details. What advantages does he derive from the system of book-keeping by double entry? It is among the finest inventions of the human mind; every prudent master of a house should introduce it into his economy.” ― Goethe"
        },
        {
            "Number": "1480",
            "Quote": "“Autumn is a momentum of the natures golden beauty…, so the same it’s time to find your momentum of life” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "1481",
            "Quote": "“Effort is an indication of professionalism. Professionals succeed without effort.” ― Meir Ezra"
        },
        {
            "Number": "1482",
            "Quote": "“The presence of the Lord destroys a life of struggle. You will struggle until you encounter His presence.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1483",
            "Quote": "“An entrepreneur is a broker between ideas and resources. This is not confined to business; it is at least as much at home in academia. Faculty members write their dreams of undiscovered truths in research proposals addressed persuasively to foundations and government agencies.” ― Herbert A. Simon, Models of My Life"
        },
        {
            "Number": "1484",
            "Quote": "“Nobody wants a sales pitch. So instead of trying a hard sell, focus on telling a story that captivates your audience by painting a vivid picture of your vision. When you get good at storytelling, people want to be part of that story, and they’ll want to help others become part of that story too.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "1485",
            "Quote": "“A powerful process automatically takes care of progress, productivity and profits.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1486",
            "Quote": "“Consistent and limitless learning is the minimum requirement for being a money-making entrepreneur.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1487",
            "Quote": "“When it comes to branding and the ever-changing social media phenomenon, you’re not a mushroom. In other words, you shouldn’t be kept in the dark and fed a pile of...well, you get the idea.” ― David Brier"
        },
        {
            "Number": "1488",
            "Quote": "“In my father's last letter he said that the world is run by those willing to take the responsibility for the running of it. If it is life that you feel you are missing I can tell you where to find it. In the law courts, in business, in government. There is nothing occurring in the streets. Nothing but a dumbshow composed of the helpless and the impotent.” ― Cormac McCarthy, Suttree"
        },
        {
            "Number": "1489",
            "Quote": "“You put your attention on the good in a thing or the bad in a thing. What do you want to look at?” ― Meir Ezra"
        },
        {
            "Number": "1490",
            "Quote": "“[Performance with purpose is] basically PepsiCo saying that companies can no longer perform and toss costs to society. We believe that the new future is public-private partnerships, where companies feel responsible for society at large.” ― Indra Nooyi"
        },
        {
            "Number": "1491",
            "Quote": "“The world is now being dominated by few Giant organizations that influence and dectate our consuming behavior.” ― Ashraf Haggag, No Place To Stand Alone: Historical Mergers and Acquisitions in Different Corporate Markets"
        },
        {
            "Number": "1492",
            "Quote": "“I don,t just want success for my self ,I want my success to benefit others . Osman Gulum” ― Osman Gulum, How to start your first business"
        },
        {
            "Number": "1493",
            "Quote": "“Each step of your current journey will take you to new and interesting worlds of opportunity and as every intrepid explorer knows, when one visits strange new lands one must be aware of their customs.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1494",
            "Quote": "“Businesses around the world should begin to think of using Artificial Intelligence and Machine Learning to run and manage their businesses effectively.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "1495",
            "Quote": "“It is easier to define whether or not you can afford something than whether you need it in the first place.” ― Michael F. Bruyn, The Philosopher's Toolbox for Entrepreneurs"
        },
        {
            "Number": "1496",
            "Quote": "“Your status has changed. Your Name is changed! You are a new creation.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1497",
            "Quote": "“I find that the harder I work , the more luck I seem to have.” ― Thomas Jefferson"
        },
        {
            "Number": "1498",
            "Quote": "“If you believe that you're doing will positive results, it will - even if it's not immediately obvious.” ― Sophia Amoruso, #Girlboss"
        },
        {
            "Number": "1499",
            "Quote": "“First of all, the word “newspaper” doesn’t really exist anymore, because the first part, “news,” is gone from it. What’s left is only “paper.” ― Maxim Behar, The Global PR Revolution: How Thought Leaders Succeed in the Transformed World of PR"
        },
        {
            "Number": "1500",
            "Quote": "“Last month we had to sit through a presentation on eliminating redundancy, and it was a bunch of Power Point slides, plus a guy reading out what was on the slides, and then he gave us all hard copies. I don’t understand these things.” ― Max Barry, Company"
        },
        {
            "Number": "1501",
            "Quote": "“THE ORGANIC FOODS MYTH A few decades ago, a woman tried to sue a butter company that had printed the word 'LITE' on its product's packaging. She claimed to have gained so much weight from eating the butter, even though it was labeled as being 'LITE'. In court, the lawyer representing the butter company simply held up the container of butter and said to the judge, \"My client did not lie. The container is indeed 'light in weight'. The woman lost the case. In a marketing class in college, we were assigned this case study to show us that 'puffery' is legal. This means that you can deceptively use words with double meanings to sell a product, even though they could mislead customers into thinking your words mean something different. I am using this example to touch upon the myth of organic foods. If I was a lawyer representing a company that had labeled its oranges as being organic, and a man was suing my client because he found out that the oranges were being sprayed with toxins, my defense opening statement would be very simple: \"If it's not plastic or metallic, it's organic.\" Most products labeled as being organic are not really organic. This is the truth. You pay premium prices for products you think are grown without chemicals, but most products are. If an apple is labeled as being organic, it could mean two things. Either the apple tree itself is free from chemicals, or just the soil. One or the other, but rarely both. The truth is, the word 'organic' can mean many things, and taking a farmer to court would be difficult if you found out his fruits were indeed sprayed with pesticides. After all, all organisms on earth are scientifically labeled as being organic, unless they are made of plastic or metal. The word 'organic' comes from the word 'organism', meaning something that is, or once was, living and breathing air, water and sunlight. So, the next time you stroll through your local supermarket and see brown pears that are labeled as being organic, know that they could have been third-rate fare sourced from the last day of a weekend market, and have been re-labeled to be sold to a gullible crowd for a premium price. I have a friend who thinks that organic foods have to look beat up and deformed because the use of chemicals is what makes them look perfect and flawless. This is not true. Chemical-free foods can look perfect if grown in your backyard. If you go to jungles or forests untouched by man, you will see fruit and vegetables that look like they sprouted from trees from Heaven. So be cautious the next time you buy anything labeled as 'organic'. Unless you personally know the farmer or the company selling the products, don't trust what you read. You, me, and everything on land and sea are organic. Suzy Kassem, Truth Is Crying” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "1502",
            "Quote": "“No matter how great your idea, it’s not a business until you build it into one.” ― Victor Kwegyir, You've Been Fired! Now What?: Seize the opportunity, creatively turn it into a successful reality"
        },
        {
            "Number": "1503",
            "Quote": "“I am not in it for the success, I am in it for the victory...nothing less.” ― Amin Amin"
        },
        {
            "Number": "1504",
            "Quote": "“If the management has not performed well in their bad times in the past, chances are they will not perform well in their good times in the future too.” ― Vijay Kedia"
        },
        {
            "Number": "1505",
            "Quote": "“Creativity is a renewable resource. Challenge yourself every day. Be as creative as you like, as often as you want, because you can never run out. Experience and curiosity drive us to make unexpected, offbeat connections. It is these nonlinear steps that often lead to the greatest work.” ― Biz Stone, Things a Little Bird Told Me: Confessions of the Creative Mind"
        },
        {
            "Number": "1506",
            "Quote": "“When you were making excuses someone else was making enterprise.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1507",
            "Quote": "“Make better use of funds in building core businesses.” ― Ashwin Muthiah, Chairman, AM International"
        },
        {
            "Number": "1508",
            "Quote": "“Customer service is all about FEELINGS! I am of the opinion that customer service is actually FEELINGS MANAGEMENT.” ― J. N. HALM, CUSTOMER ROMANCE: A New Feel of Customer Service"
        },
        {
            "Number": "1509",
            "Quote": "“Don’t buy into the campaign that people don’t like change. We are built for it.” ― Stacy Feiner, Talent Mindset"
        },
        {
            "Number": "1510",
            "Quote": "“Two powerful factors which creates difference between destroying your relationship and deepening it are EGO and Attitude” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1511",
            "Quote": "“In business, non-challenging goals lead us to non-creative solutions. Our goals need to be challenging enough to get us thinking creatively.” ― Abhishek Ratna, small wins BIG SUCCESS: A handbook for exemplary success in post Covid19 Outbreak Era"
        },
        {
            "Number": "1512",
            "Quote": "“A real businessman value his partners like friends and his partnership like friendship.” ― Amit Kalantri"
        },
        {
            "Number": "1513",
            "Quote": "“Diplomacy is the art of getting what you want without offending anyone too badly.” ― Christopher Nutall"
        },
        {
            "Number": "1514",
            "Quote": "“If you don’t earn their trust at the beginning, they sure as hell won’t trust you with their money at the end.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1515",
            "Quote": "“Successful business people became successful because they took risks. The biggest risk is that once successful, they stop taking risks.” ― G.R. Gopinath"
        },
        {
            "Number": "1516",
            "Quote": "“If you can 'hire tough,' you can 'manage easy.” ― Sue Tetzlaff, The Employee Experience: A Capstone Guide to Peak Performance"
        },
        {
            "Number": "1517",
            "Quote": "“The most reliable friend you have is your shadow.” ― Matshona Dhliwayo"
        },
        {
            "Number": "1518",
            "Quote": "“To delete the mistakes of the past you just need to create.” ― Meir Ezra"
        },
        {
            "Number": "1519",
            "Quote": "“Most men have professions, yet few act like professionals.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1520",
            "Quote": "“BUILDING A SUCCESSFUL BRAND IS CONVINCING THE FULL BELLY THAT IT IS STILL HUNGRY AND HAS ROOM FOR MORE. BE, THE MORE THAT THEY WANT! -HOPENATION” ― Qwana M. \"BabyGirl\" Reynolds-Frasier, Friend In Your Pocket Conversations With M.I.N.I M.E. Class Is Now In Session"
        },
        {
            "Number": "1521",
            "Quote": "“Contrary to popular belief, productivity isn’t about how much you can do. It’s about whether or not you’re doing the right things—the things that matter to your work and to you. And that means starting small with what you know matters to you.” ― Melissa Steginus, Self Care at Work: How to Reduce Stress, Boost Productivity, and Do More of What Matters"
        },
        {
            "Number": "1522",
            "Quote": "“The greatest leaders have the ability to have one eye on the prize and the other in the moment. When either one is lost they both will fail.” ― Ford Taylor, Relactional Leadership: When Relationships Collide with Transactions"
        },
        {
            "Number": "1523",
            "Quote": "“... o líder espiritualizado - mais do que aquele que fica fazendo meditações e orações - é aquele capaz de olhar o outro como o outro, de inspirar, de elevar a obra, em vez de rebaixar as pessoas.” ― Mario Sergio Cortella"
        },
        {
            "Number": "1524",
            "Quote": "“The easiest thing to sell is truth.” ― Daymond John, The Power of Broke: How Empty Pockets, a Tight Budget, and a Hunger for Success Can Become Your Greatest Competitive Advantage"
        },
        {
            "Number": "1525",
            "Quote": "“The simple truth is that technology is still a poor substitute for human interaction.” ― Robert G. Thompson, Hooked on Customers: The Five Habits of Legendary Customer-Centric Companies"
        },
        {
            "Number": "1526",
            "Quote": "“If you’re on a mission to make a name for yourself, to better your own business or workplace, or to contribute to a more responsible and equitable society [then you are a supermaker].” ― Jaime Schmidt, Supermaker: Crafting Business on Your Own Terms"
        },
        {
            "Number": "1527",
            "Quote": "“Exercise is like defragmenting your hard drive. The scattered pieces of your life become whole again. You become stronger and more successful.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "1528",
            "Quote": "“People are no longer working for just a paycheck. They are working towards a dream – their dream. - The Magnetic Advantage” ― Pascha Kelley"
        },
        {
            "Number": "1529",
            "Quote": "“How many companies can say that the amount of customers who use their services second most often, and spend the second most amount of money with them, are “very negative”?” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "1530",
            "Quote": "“We need to reimagine business around new ideas of value, and to understand what value means when it’s about an integrated you in an integrated world.” ― Kate O'Neill, Tech Humanist: How You Can Make Technology Better for Business and Better for Humans"
        },
        {
            "Number": "1531",
            "Quote": "“Going to work every day was like my hair was on fire and all I had to put it out was a hammer.” ― Bethany McLean"
        },
        {
            "Number": "1532",
            "Quote": "“What is my business in this? Oh yea, it is my business. It is not just my business, it is my calling.” ― Sunday Adelaja"
        },
        {
            "Number": "1533",
            "Quote": "“Having the understanding of God, God’s ambassadors are able to bring a country out of crisis, change politics, business and economy” ― Sunday Adelaja"
        },
        {
            "Number": "1534",
            "Quote": "“A true generous heart can never revolve majorly with monetary skills nor business acumen nor cunning mind.” ― Angelica Hopes"
        },
        {
            "Number": "1535",
            "Quote": "“As a child, I used to wonder why markets in my locality were all situated near the main roads. I grew up a little to get the answer; “that business minded people can meet there easily!\" Your dream must be situated where they can meet people!” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "1536",
            "Quote": "“More and more companies and organizations worldwide discover the power of the heart on the work floor. Schools, hospitals, factories, commercial companies, agricultural institutions, charities, large or small, exchange more and more the power structure of the traditional pyramid with the power structure of self-organized teams, built upon a foundation of authenticity and purpose.” ― Ivo Valkenburg, Pure Life: A Plea for Love as Legal Tender"
        },
        {
            "Number": "1537",
            "Quote": "“Dare to be different. Represent your maker well and you will forever abide in the beautiful embrace of his loving arms.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1538",
            "Quote": "“My 11 #books come without pomp n frills, for all seeking #true #meaning & unafraid of overcoming past conditioning. #Rewards are infinite” ― Michael Levy"
        },
        {
            "Number": "1539",
            "Quote": "“When in doubt, vary, change, solve the problem, seize the opportunity, experiment, try something new (consistent, of course, with the core ideology)—even if you can’t predict precisely how things will turn out. Do something. If one thing fails, try another. Fix. Try. Do. Adjust. Move. Act. No matter what, don’t sit still.” ― Jim Collins, Built to Last"
        },
        {
            "Number": "1540",
            "Quote": "“Sometimes cheap is inexpensive. Sometimes it's cheap.” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "1541",
            "Quote": "“Anything you cannot grant beingness to, you are the effect of. ” ― Meir Ezra"
        },
        {
            "Number": "1542",
            "Quote": "“In business, it is better to be consistently bad than inconsistent.” ― Len Peters"
        },
        {
            "Number": "1543",
            "Quote": "“You will try to improve me, Captain, but I tell you it cannot be done. I am resigned to moral apathy and corporeal decrepitude, and have done with projections. No, Captain,” with a pining sigh, “I think I will simply sit in the shade and wait for either a customer or death, the latter I might prefer, at such a point.” ― Michelle Franklin"
        },
        {
            "Number": "1544",
            "Quote": "“Strive for balance in your life. You are the heart and soul of your business so take care of yourself.” ― Joey A. Concepcion, GO NEGOSYO: Joey Concepcion's 55 Inspiring Stories of Women Entrepreneurs"
        },
        {
            "Number": "1545",
            "Quote": "“Today, thanks to the social media revolution, clients actually own media and consequently a platform to express themselves.” ― Maxim Behar, The Global PR Revolution: How Thought Leaders Succeed in the Transformed World of PR"
        },
        {
            "Number": "1546",
            "Quote": "“Create wow moments for your prospects and watch you online sentiment increase.” ― Stacey Kehoe"
        },
        {
            "Number": "1547",
            "Quote": "“By directing without assumption and validating with fact… By avoiding the hype and digging into the proof of concept… and by vetting and double checking for the facts and fiction… You can move past the false messaging to find the authentic routes for your vision.” ― Create Wealth Communities"
        },
        {
            "Number": "1548",
            "Quote": "“Building a business is like creating a picture & striving to be picture perfect in everything you do.” ― Ziad K. Abdelnour, Economic Warfare: Secrets of Wealth Creation in the Age of Welfare Politics"
        },
        {
            "Number": "1549",
            "Quote": "“To be successful in life , Plan, Implement, Revise, Update, and Build on Change.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1550",
            "Quote": "“If you aren't going out for business, you may go out of business.” ― Robert Braathe"
        },
        {
            "Number": "1551",
            "Quote": "“If you want to save time, invest in a team.” ― Alin Sav"
        },
        {
            "Number": "1552",
            "Quote": "“The price of inaction is far greater than the cost of a mistake” ― Meg Whitman"
        },
        {
            "Number": "1553",
            "Quote": "“Patience is the virtue that we need to achieve greater things than the average person can.” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "1554",
            "Quote": "“You won't see or know the people who hate you , until you become successful. The more successful you become. The more their hate.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "1555",
            "Quote": "“My men are my money.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1556",
            "Quote": "“Tweet others the way you want to be tweeted.” ― Germany Kent, You Are What You Tweet: Harness the Power of Twitter to Create a Happier, Healthier Life"
        },
        {
            "Number": "1557",
            "Quote": "“During rough time in a Business, a Leader should act like a ship captain. His first and foremost priority should be to put his employees to security before thinking of his own welfare.” ― Indy Bissessur"
        },
        {
            "Number": "1558",
            "Quote": "“Time is the friend of the wonderful business, the enemy of the mediocre.” ― Rusty solomon"
        },
        {
            "Number": "1559",
            "Quote": "“Media companies can be divided into two broad categories: the few who create waves, and the many who ride them - or drown.” ― Ken Auletta, Googled: The End of the World as We Know It"
        },
        {
            "Number": "1560",
            "Quote": "“Give yourself a great self-respect to know who you are then your confidence will shine on you” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "1561",
            "Quote": "“If you have time to whine then you have time to find solution.” ― Dee Dee Artner"
        },
        {
            "Number": "1562",
            "Quote": "“Things that you don’t love, control you.” ― Amit Ambegaonkar, Your Profound Success: 7 Powerful Ways to Skyrocket Your Business Using the Internet"
        },
        {
            "Number": "1563",
            "Quote": "“We first become salesmen as children in the confession booths of our parents.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "1564",
            "Quote": "“Leadership is not in the position you are in but in the values you stand for, the principles you live by and how you conduct yourself, both privately and publicly.” ― Victor Kwegyir, Business 365: Daily Inspiration for Creativity, Innovation and Business Success"
        },
        {
            "Number": "1565",
            "Quote": "“Manners are the lubricating oil of an organization. It is a law of nature that two moving bodies in contact with each other create friction. This is as true for human beings as it is for inanimate objects. Manners- simple things like saying 'please' and 'thank you' and knowing a person’s name or asking after her family enable two people to work together whether they like each other or not. Bright people, especially bright young people, often do not understand this. If analysis shows that someone’s brilliant work fails again and again as soon as cooperation from others is required, it probably indicates a lack of courtesy – that is, a lack of manners.” ― Peter Drucker"
        },
        {
            "Number": "1566",
            "Quote": "“No company has a culture, every company is a culture” ― Peter Thiel, Zero to One: Notes on Startups, or How to Build the Future"
        },
        {
            "Number": "1567",
            "Quote": "“An entrepreneur is more useful and valuable to the economy than an economist.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1568",
            "Quote": "“You got worse… you deteriorated only when you refused to grant beingness to others.” ― Meir Ezra"
        },
        {
            "Number": "1569",
            "Quote": "“Be honest. Be truthful. If you tell lies, you lose your credibility.” ― Timi Nadela"
        },
        {
            "Number": "1570",
            "Quote": "“The salesperson you’d ideally like to be and the salesperson you’d like to encounter as a customer should roughly be the same, shouldn’t they?” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1571",
            "Quote": "“To dream is necessary, but it is even more important to act to make it come true. Do not stop dreaming, or acting, thats the only way you could exist in your life. Tania Tome (C)” ― Tania Tome"
        },
        {
            "Number": "1572",
            "Quote": "“In business, the size of our success is partly attributable to the fear of failure that has prevented some people from being our competitors.” ― Mokokoma Mokhonoana"
        },
        {
            "Number": "1573",
            "Quote": "“What's on your billboard?” ― Monika Zands"
        },
        {
            "Number": "1574",
            "Quote": "“This is not new: people do business with people they like, know and trust. Taking that axiom in to account, would YOU trust YOU?” ― Beth Ramsay, #Networking is people looking for people looking for people"
        },
        {
            "Number": "1575",
            "Quote": "“If two men on the same job agree all the time, then one is useless. If they disagree all the time, both are useless.” ― Darryl F. Zanuck"
        },
        {
            "Number": "1576",
            "Quote": "“The pluses of life come with its minuses. ” ― Meir Ezra"
        },
        {
            "Number": "1577",
            "Quote": "“It doesn't matter to me that my leaving will cost you money. It doesn't matter that my space will take time to fill. What matters is that I'm happy and if you're not willing to invest in me, then I'm willing to cost you money.” ― Osayi Emokpae Lasisi, Invest in people, invest in profits"
        },
        {
            "Number": "1578",
            "Quote": "“The future is dependent on the decisions you make today.” ― Omer Soker, The Future of Associations"
        },
        {
            "Number": "1579",
            "Quote": "“If you can't share your story, you can't sell your product.” ― Alin Sav"
        },
        {
            "Number": "1580",
            "Quote": "“All middle men are bad.” ― Syd Barrett"
        },
        {
            "Number": "1581",
            "Quote": "“First make your business itself a brand and then every product you create will be accepted as a brand.” ― Amit Kalantri"
        },
        {
            "Number": "1582",
            "Quote": "“His belief is so passionate that it fills him with the burning desire to share his fabulous news with anyone who will listen. He is concerned that it is us that might be missing out, not him. His faith in a single road to salvation and paradise is so intense, that it would be ungodly not to share the good news with all those who are not aware.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1583",
            "Quote": "“A team member is first a person, secondly an employee. Treat them as a valued person and they'll value their employers.” ― Janna Cachola"
        },
        {
            "Number": "1584",
            "Quote": "“The biggest benefit of being humble is that you're comfortable with yourself, and you aren't putting unnecessary pressure on yourself. By being humble, you're accepting yourself and realizing you're flawed, but you're also great.” ― Michael McGinnis, GPS Guide for Athletes and Those Who Surround Them: How to Empower Your Sports Goals, Navigate the Process, and Steer Toward Success"
        },
        {
            "Number": "1585",
            "Quote": "“I think it’s important to be attentive to opportunities that might unexpectedly arise—and be prepared to take them. Practically, this means having broad interests, interacting with people from different professional backgrounds, and building a generalizable skillset that can be applied to different problems. -- Dennis Grishin, Cofounder and CSO Nebula Genomics” ― Christina D. Warner, The Art of Healthcare Innovation: Interviews and Industry Insights from 35 Game-Changing Pioneers"
        },
        {
            "Number": "1586",
            "Quote": "“He told me that if you had a plan in place, every situation was winnable.” ― Katherine Garbera, Her Texas Ex"
        },
        {
            "Number": "1587",
            "Quote": "“I have a business appointment that I am anxious... to miss.” ― Oscar Wilde, The Importance of Being Earnest"
        },
        {
            "Number": "1588",
            "Quote": "“There is no elevator to success to have to take the stairs.” ― Hyacil Han, Dropshipping Ultimate Guide: The Expeditive and Accessible Scheme to Earn a Substantial Revenue at Home"
        },
        {
            "Number": "1589",
            "Quote": "“And what I didn't understand...was that maybe other brokers only say yes to the easy deals. Maybe that's why I was struggling while other brokers seemed to be moving through deals with little effort.” ― Ryan Serhant, Sell It Like Serhant: How to Sell More, Earn More, and Become the Ultimate Sales Machine"
        },
        {
            "Number": "1590",
            "Quote": "“I take from the poor and give to the rich. They just happen to be the same individuals. Poor and stupid before they learn from me and pay with their time and money, but rich and successful after they do. The truly miserable, however, don't know how poor they are, and I want nothing from them.” ― Robin Sacredfire"
        },
        {
            "Number": "1591",
            "Quote": "“Our business should be beyond just innovating through products, it should be innovating in leadership too. Without our people, what we provide won't reach our customers effectively.” ― Janna Cachola, Lead by choice, not by checks"
        },
        {
            "Number": "1592",
            "Quote": "“Fight your fear, your laziness, your ignorance before you worry about fighting the competition.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1593",
            "Quote": "“The result of big risk is bigger reward.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1594",
            "Quote": "“Living like this is a full-time business.” ― Irvine Welsh, Trainspotting"
        },
        {
            "Number": "1595",
            "Quote": "“In the long run managements stressing accounting appearance over economic substance usually achieve little of either.” ― Warren Buffett"
        },
        {
            "Number": "1596",
            "Quote": "“What would you choose if you knew you couldn't fail?” ― Simone Milasas, Joy of Business"
        },
        {
            "Number": "1597",
            "Quote": "“Organizations, companies or individuals without core values are exactly like a boat without an anchor; it can be easy tossed to and fro following any direction the wind blows.” ― Dr. Lucas D. Shallua"
        },
        {
            "Number": "1598",
            "Quote": "“Success is the only thing to change the behaviors of others” ― thebuyspot"
        },
        {
            "Number": "1599",
            "Quote": "“These days, every trillion counts.” ― Kotlikoff Laurence J Burns Scott, The Clash of Generations: Saving Ourselves, Our Kids, and Our Economy"
        },
        {
            "Number": "1600",
            "Quote": "“Kelvin could request favors within the administration easily, as those marionette strings looked remarkably like lines of ink that read 'Pay to the Order of'.” ― Mandy Ashcraft, Small Orange Fruit"
        },
        {
            "Number": "1601",
            "Quote": "“If input exceeds output you better enjoy it.” ― Yuri van der Sluis"
        },
        {
            "Number": "1602",
            "Quote": "“Your inability to direct or control something is proportional to the level of resistance you apply.” ― Meir Ezra"
        },
        {
            "Number": "1603",
            "Quote": "“Let your customers and prospects recommend you to each other and let you competition wish they were you. That is our mission.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1604",
            "Quote": "“The movers & shakers of the world are not imbued with special powers. Once you realize that, you too can attain your rightful mantle.” ― Mario J. Lucero"
        },
        {
            "Number": "1605",
            "Quote": "“Everything and everyone represents at least one brand. Therefore, to brand or not to brand is not even a question.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "1606",
            "Quote": "“Perception number one, how you want people to think about you when you arrive and perception number two, how you want them to talk about you once you have left.” ― Chris Murray"
        },
        {
            "Number": "1607",
            "Quote": "“When I was 15, a well off man told me the secret to success was golf. It took me until I became 30 to realize it was the true. Today, you couldn't convince me otherwise.” ― Colleen Ferrary Bader"
        },
        {
            "Number": "1608",
            "Quote": "“Today's partners can be your competitors tomorrow. And today's competitors can be your partners tomorrow.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "1609",
            "Quote": "“If you will look about you (which most people won't do),\" says Sergeant Cuff, \"you will see that the nature of a man's tastes is, most times, as opposite as possible to the nature of a man's business.” ― Wilkie Collins, The Moonstone"
        },
        {
            "Number": "1610",
            "Quote": "“Get up in the morning on a mission to save prospective clients from the shabby, ill-fitting, overpriced and worthless alternatives that those charlatans - who are your competition - are trying to get away with flogging them.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1611",
            "Quote": "“It’s not about the content we are creating but how much content our customers are creating for us.” ― Roger James Hamilton"
        },
        {
            "Number": "1612",
            "Quote": "“A pickpocket is obviously a champion of private enterprise. But it would perhaps be an exaggeration to say that a pickpocket is a champion of private property. The point about Capitalism and Commercialism, as conducted of late, is that they have really preached the extension of business rather than the preservation of belongings; and have at best tried to disguise the pickpocket with some of the virtues of the pirate.” ― G.K. Chesterton, The Outline of Sanity"
        },
        {
            "Number": "1613",
            "Quote": "“Twitter is not just for Journalists. You don’t have to be a writer to Tweet.[Social Media]” ― Germany Kent"
        },
        {
            "Number": "1614",
            "Quote": "“The authenticity in your story, the authority in your delivery and the personalization of your presentation will make you that much more real and able to reach that many more people in your real estate business.” ― Loren Weisman"
        },
        {
            "Number": "1615",
            "Quote": "“When work isn’t done properly, it ruins all the energy and effort put into it. Improper work doesn’t bring any outcomes. If any, mostly the bad ones.” ― Vishal Ostwal, Pocket Productivity: A Simplified Guide to Getting More Outcomes from Your Hard Work and Giving Your Hustle a Meaning"
        },
        {
            "Number": "1616",
            "Quote": "“With all the changes in business, many of the global standard operating procedures of yesterday no longer apply to today’s modern business world.” ― Create Wealth Communities"
        },
        {
            "Number": "1617",
            "Quote": "“Beware of those who love to give advice, but never want to receive it!” ― Mrs.Mignon T.Padilla"
        },
        {
            "Number": "1618",
            "Quote": "“Technology is the answer, but what was the question?” ― Cedric Price"
        },
        {
            "Number": "1619",
            "Quote": "“Resources are hired to give results, not reasons.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1620",
            "Quote": "“We had all opted to take City's financial reporting course work, which, in theory, meant we wanted to write about stock prices and corporate takeovers. That, of course, was a joke. No one still in their twenties, and broke, goes into journalism to write about money—a subject in which they still have zero practical experience.” ― Chris Ayres, War Reporting for Cowards"
        },
        {
            "Number": "1621",
            "Quote": "“Sometimes, we have to mix things up with our marketing; we’ve got to do something shocking that gets people out of their normal thought patterns, wakes them up, and connects their perception to reality.” ― Miles Anthony Smith"
        },
        {
            "Number": "1622",
            "Quote": "“Cookie cutters are for baking, not branding.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "1623",
            "Quote": "“When you slander someone [talk negatively about people], you earn a debit in your account and that person will earn a credit. Who would do these kinds of business?” ― Dada Bhagwan"
        },
        {
            "Number": "1624",
            "Quote": "“We all need salespeople with humility, honesty, integrity, empathy and an old-fashioned work ethic that ensures the job gets done.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1625",
            "Quote": "“Unvalidated design assumptions are risky design solutions.” ― Mario Maruffi"
        },
        {
            "Number": "1626",
            "Quote": "“It's a deeply entrenched process that nobody really wants to change because all the major players, except athletes, have a stake in the monetary gain. Everyone bends to the will of the brand, and only accepts the check they can receive from the brand, instead of holistically solving the problems and thinking about what is best for each individual.” ― Michael McGinnis, GPS Guide for Athletes and Those Who Surround Them: How to Empower Your Sports Goals, Navigate the Process, and Steer Toward Success"
        },
        {
            "Number": "1627",
            "Quote": "“Brand before liftoff. For the best launch, the farthest reach, and the most results, build the brand foundation and fuel it while it is still on the launching pad. Designing a brand after you take off is like fueling a rocket after its lifted off.” ― Loren Weisman"
        },
        {
            "Number": "1628",
            "Quote": "“Plan in Analog — spend time in analog before jumping to digital” ― Carmine Gallo, The Presentation Secrets of Steve Jobs"
        },
        {
            "Number": "1629",
            "Quote": "“...the ideal legal form being, it goes without saying, the one in which the least taxes are paid and the company is least vulnerable to any official prying.” ― Marianne Fritz, The Weight of Things"
        },
        {
            "Number": "1630",
            "Quote": "“How can you get mentors/inventors ? Be the person that you would want to be a mentor. Be a person you would invest in” ― Tai Lopez, 67 Steps Program"
        },
        {
            "Number": "1631",
            "Quote": "“I've finally decided to write about profit for a change But before I really started I already started to feel lame Baby what's it to a beast who manely to money remains untamed” ― Criss Jami, Killosophy"
        },
        {
            "Number": "1632",
            "Quote": "“Startups don't just die, they commit suicide” ― Takudzwa Razemba"
        },
        {
            "Number": "1633",
            "Quote": "“Your decision not to join the crowd may be what God is waiting for to grant you revelation on how to deliver your family, your country, business, profession or even your church!” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1634",
            "Quote": "“Clients don't pay you to try. Their least expectation is to at least get from you value for their money. However, your aim should be to wow them.” ― Allan Amanyire"
        },
        {
            "Number": "1635",
            "Quote": "“Partially undermining the manufacturer's ability to assert that its work constituted a meaningful contribution to mankind was the frivolous way in which it went about marketing its products. Grief was the only rational response to the news that an employee had spent three months devising a supermarket promotion based on an offer of free stickers of cartoon characters called the Fimbles. Why had the grown-ups so churlishly abdicated their responsibilities? Were there not more important ambitions to be met before Death showed himself on the horizon in his hooded black cloak, his scythe slung over his shoulder?” ― Alain de Botton, The Pleasures and Sorrows of Work"
        },
        {
            "Number": "1636",
            "Quote": "“Technology and technology-driven change has virtually nothing to do with igniting a transformation from good to great” ― Jim Collins, Good to Great by Jim Collins: Key Takeaways, Analysis & Review"
        },
        {
            "Number": "1637",
            "Quote": "“Developing a business depends on many factors. But you should basically understand the exchange between value. In other words, you must provide value to receive equal value. If you look at single people, you can see that they can’t provide any value – they don’t smile, dress, talk or behave in a way that makes others want to spend time, much less a life, with them. Relationships and Business are not much different. In a business, people know that appearance and the way you talk to a costumer is as important as the value of your product, and that’s why brands sell, even when their products have no quality. For example, in shopping malls you can see shops packed with people buying clothes that have no value and will be ruined or out of fashion very soon, because the brand is selling an image, not quality anymore. China, on the other hand, managed to compete in the world markets by reducing price over quality, and is now paying the price of a very bad reputation, as most people don’t trust Chinese brands anymore. This is already impacting the economy, so I don’t know what will happen in the next years. It’s all in the hands of the politicians and the internationalization of the companies. Actually, that’s why this Chinese government sends its companies to other countries. And yet, I just said this to explain the relation between value and product. But here’s another. I tried to share what I know about Learning with Teachers, Parents and Psychologists, and nobody cared. Besides, what I earned in helping children with learning disabilities was a very low payment, and I had to quit that as I couldn’t afford to pay an apartment and daily expenses with such job. However, there are people making thousands of dollars with drugs that have no effect, toilets for cats and pet-rocks. In other words, is never about what the world needs but what the world wants.” ― Samuel River"
        },
        {
            "Number": "1638",
            "Quote": "“Think of the challenges in your business like driving down a road with a deep ditch running parallel. You can seek advice on how to avoid the ditch or you can seek advice on how to get out of the ditch” ― Bobby Darnell, Time For Dervin - Living Large In Geiggityville"
        },
        {
            "Number": "1639",
            "Quote": "“For every opinion, there is an equal and opposite opinion.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "1640",
            "Quote": "“There are roads which must not be followed, armies which must not be attacked, towns which must not be besieged, positions which must not be contested, commands of the sovereign which must not be obeyed.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "1641",
            "Quote": "“e-Commerce makes it easy to spend money. Netiquette makes you aware hidden fees. NetworkEtiquette.net” ― David Chiles"
        },
        {
            "Number": "1642",
            "Quote": "“Great results, can be achieved with small forces.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "1643",
            "Quote": "“The choice is yours. Don't let your pronouncements destroy your destiny rather let them build your future up!” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1644",
            "Quote": "“The more careful you are, the less you have.” ― Meir Ezra"
        },
        {
            "Number": "1645",
            "Quote": "“Purpose of Life: Understand Who You Are Believe In Yourself.” ― Ian Jackson"
        },
        {
            "Number": "1646",
            "Quote": "“The key to success for Sony, and to everything in business, science and technology for that matter, is never to follow the others.” ― Masaru Ibuka"
        },
        {
            "Number": "1647",
            "Quote": "“Champions know the emotions you want to feel and help you feel them by remaining genuine to a noble intention.” ― Thomas Le Hoang"
        },
        {
            "Number": "1648",
            "Quote": "“People who don't venture will keep working for the people who ventured.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1649",
            "Quote": "“A predictable plan from older white men that, over their careers, have had the life sucked out of them through a wicked one-two punch of trying to meet the needs of their investors combined with the stress of hiding their extramarital affairs.” ― Joe Pulizzi, The Will to Die: A Novel of Suspense (Murder in a Small Town), a Thriller"
        },
        {
            "Number": "1650",
            "Quote": "“Don’t spend your time or money on being boring.” ― Candice Galek"
        },
        {
            "Number": "1651",
            "Quote": "“Do everything in your power to make customers go confidently in the direction of their purchase intention.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "1652",
            "Quote": "“Innovation and disruption are ideas that originated in the arena of business but which have since been applied to arenas whose values and goals are remote from the values and goals of business. People aren’t disk drives. Public schools, colleges and universities, churches, museums, and many hospitals, all of which have been subjected to disruptive innovation, have revenues and expenses and infrastructures, but they aren’t industries in the same way that manufacturers of hard-disk drives or truck engines or drygoods are industries. Journalism isn’t an industry in that sense, either. Doctors have obligations to their patients, teachers to their students, pastors to their congregations, curators to the public, and journalists to their readers--obligations that lie outside the realm of earnings, and are fundamentally different from the obligations that a business executive has to employees, partners, and investors. Historically, institutions like museums, hospitals, schools, and universities have been supported by patronage, donations made by individuals or funding from church or state. The press has generally supported itself by charging subscribers and selling advertising. (Underwriting by corporations and foundations is a funding source of more recent vintage.) Charging for admission, membership, subscriptions and, for some, earning profits are similarities these institutions have with businesses. Still, that doesn’t make them industries, which turn things into commodities and sell them for gain.” ― Jill Lepore"
        },
        {
            "Number": "1653",
            "Quote": "“Earn the Right - Ensure you put this chunk of Sales Tetris in place first and all the other pieces just take their own positions naturally.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1654",
            "Quote": "“Using your talent, hobby or profession in a way that makes you contribute with something good to this world is truly the way to go.” ― Simon Zingerman, We All Need Heroes: Stories of the Brave and Foolish"
        },
        {
            "Number": "1655",
            "Quote": "“Branding is the art of differentiation” ― David Brier"
        },
        {
            "Number": "1656",
            "Quote": "“You are the only one who can grant beingness to you.” ― Meir Ezra"
        },
        {
            "Number": "1657",
            "Quote": "“The system you work in does not tell you who you get to be; you decide who you get to be.” ― Mindy Hall, Leading with Intention: Every Moment Is a Choice"
        },
        {
            "Number": "1658",
            "Quote": "“The government will tell you that 5G wireless radiation is not connected to COVID-19 because its biologically toxic business model relies on 5G.” ― Steven Magee"
        },
        {
            "Number": "1659",
            "Quote": "“After a partnership dispute, most of the partners will leave the alliance but not their arrogance.” ― amit kalantri, Wealth of Words"
        },
        {
            "Number": "1660",
            "Quote": "“Research on the human brain has shown it is predisposed to think in the terms of a story.36 This predisposition is continuously reinforced and strengthened throughout the life of your brain. Imaging studies have shown only a small, quarter-sized region of your brain lights up when someone tells you a series of facts. However, when someone tells you a story laced with those facts, or those facts in action, your entire brain lights up. Not only can you program your mind with a story — you can program someone else’s mind.” ― Isaiah Hankel, Black Hole Focus: How Intelligent People Can Create a Powerful Purpose for Their Lives"
        },
        {
            "Number": "1661",
            "Quote": "“Sceptics are persuaded by a good reputation, for it is an unspoken statement of proof.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1662",
            "Quote": "“There was a product which seemed attractive, expensive, portable, beautiful and simple. Everybody talked about its beauty but they bought it for it's simplicity.” ― Amit Kalantri"
        },
        {
            "Number": "1663",
            "Quote": "“It is not always a bad thing for you to be challenged by life and to struggle; however, as you go through these times, you have to be careful not to lose yourself in the process.” ― Meghan Wier, Confessions of an Introvert: The Shy Girl's Guide to Career, Networking and Getting the Most Out of Life"
        },
        {
            "Number": "1664",
            "Quote": "“It is not your fans or your customers’ job to market you. Stop treating them like it is.” ― Loren Weisman"
        },
        {
            "Number": "1665",
            "Quote": "“With honest and straightforward business principles, close and careful attention to details, and the ability to take advantage of favourable opportunities and circumstances, there is a scope for success.” ― Jamsetji Tata"
        },
        {
            "Number": "1666",
            "Quote": "“If you are unwilling, you will not grant beingness.” ― Meir Ezra"
        },
        {
            "Number": "1667",
            "Quote": "“As [William] Valentiner noted in his uncompleted memoirs Remembering Artists, [Diego] Rivera’s [Detroit Industry] murals rooted the Detroit Institute of Arts to the many-faceted jewel of its central court because of the harmonious, fertile relationship between \"the industrialist\" and \"the artist.\" Rivera remarked to Valentiner how especially struck he was that \"Edsel had none of the characteristics of the exploiting capitalist, that he had the simplicity and directness of a workman in his won factories and was like one of the best of them.\" Their relationship was like the murals themselves, a superb expression of pluralism, toleration, and empathy for the other, and of a cosmopolitan sense of all the Americas, not just of the United States of America or Detroit alone.” ― John Dean"
        },
        {
            "Number": "1668",
            "Quote": "“Being able to pick and read good waves is almost more important than surfing well.” ― Shane Snow, Smartcuts: How Hackers, Innovators, and Icons Accelerate Success"
        },
        {
            "Number": "1669",
            "Quote": "“Resistance is the manifestation of unwillingness.” ― Meir Ezra"
        },
        {
            "Number": "1670",
            "Quote": "“In business, people get stuck on commodity level selling—transactional. The money is in transformational experiences.” ― Richie Norton"
        },
        {
            "Number": "1671",
            "Quote": "“One seeing one's own faults is the manifestation of self-realizing how great one is; and so the only way to change a person is by ignoring his faults and intensifying his greatness.” ― Meir Ezra"
        },
        {
            "Number": "1672",
            "Quote": "“I don't know where we should take this company, but I do know that if I start with the right people, ask them the right questions, and engage them in vigorous debate, we will find a way to make this company great.” ― Jim Collins"
        },
        {
            "Number": "1673",
            "Quote": "“Believe you can and you will be halfway there.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "1674",
            "Quote": "“The number one way culture is shaped is by what leaders model.” ― Mindy Hall, Leading with Intention: Every Moment Is a Choice"
        },
        {
            "Number": "1675",
            "Quote": "“Embrace your possibilities, not your potential failures. You get what you expect.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "1676",
            "Quote": "“No one is going to walk up to you and hand you a sale.” ― Emily Horabik, Comfort Zone Correction: Unfiltered True Stories in Successful Selling"
        },
        {
            "Number": "1677",
            "Quote": "“The mobile phone acts as a cursor to connect the digital and physical.” ― Marissa Mayer"
        },
        {
            "Number": "1678",
            "Quote": "“There are strong people and there are people who claim to be strong. Strong people can conquer and survive anything , but people who claim to be strong lose and suffer in everything they do. The reason is people who claim to be strong don’t know that being strong it doesn’t mean you should not accept help or ask for help when needed. For them being strong Is faking doing well, holding pain and not crying and doing everything on their own. You are only strong when you admit your situation and on what’s really happening and find ways to deal with it. Sometimes might mean asking for help.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "1679",
            "Quote": "“Profits don't always prove that you're doing it, passion does.” ― Goitsemang Mvula"
        },
        {
            "Number": "1680",
            "Quote": "“Never underestimate the staying power of a bad idea.” ― RC Longworth"
        },
        {
            "Number": "1681",
            "Quote": "“People are busy creating families, building businesses, working from morning until night but they don’t know what it is to live a full life” ― Sunday Adelaja"
        },
        {
            "Number": "1682",
            "Quote": "“You are responsible for everything you post and everything you post will be a reflection of you. [Social Media]” ― Germany Kent"
        },
        {
            "Number": "1683",
            "Quote": "“A bull market is like sex. It feels best just before it ends” ― Peter Bevelin, All I Want To Know Is Where I'm Going To Die So I'll Never Go There"
        },
        {
            "Number": "1684",
            "Quote": "“By digitizing a traditionally analog business model or process, we're effectively turning it into bits and atoms and enabling an infinite variety of possibilities.” ― Nicholas D. Evans, Mastering Digital Business: How powerful combinations of disruptive technologies are enabling the next wave of digital transformation"
        },
        {
            "Number": "1685",
            "Quote": "“Figure out the WHY you want it and turn it into a desire and then and obsession!” ― Darren D.O. Connell"
        },
        {
            "Number": "1686",
            "Quote": "“It has been my philosophy of life that difficulties vanish when faced boldly.” ― Isaac Asimov"
        },
        {
            "Number": "1687",
            "Quote": "“If there is disturbance in the camp, the general's authority is weak. ” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "1688",
            "Quote": "“You may create a inspirational & visually resplendent strategy map but without accountability its value is specious” ― Paul R. Niven, Balanced Scorecard Step-By-Step: Maximizing Performance and Maintaining Results"
        },
        {
            "Number": "1689",
            "Quote": "“You create your willingness.” ― Meir Ezra"
        },
        {
            "Number": "1690",
            "Quote": "“Customers get exactly what they need, while you hit your sales targets and become incredibly successful – fair deal.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1691",
            "Quote": "“Sales professional is a profession deals with people, it's a people business not a selling job.” ― Sivaprakash Sidhu"
        },
        {
            "Number": "1692",
            "Quote": "“Time matters; if you cannot do everything on your own, stick to your strengths, outsource the rest, and focus on customers’ ease of doing business.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "1693",
            "Quote": "“Businesses around the world are reaching the edges of incremental change. For future success, constant small improvements may no longer be enough. This is the time to re-create!” ― Abhishek Ratna, small wins BIG SUCCESS: A handbook for exemplary success in post Covid19 Outbreak Era"
        },
        {
            "Number": "1694",
            "Quote": "“Falling has become far more terrifying to me than rising.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1695",
            "Quote": "“Providing employment is the best form of social service, as it serves you, others, your country, your world - the entire society.” ― Amit Kalantri"
        },
        {
            "Number": "1696",
            "Quote": "“Sales is a constant state of information gathering and analysis. There are numerous factors that will affect your sale – from market position, to manufacturing capacity, to a seemingly harmless tidbit of information received over lunch. The more quality information you have, the better your analysis, and the better your sales results will be.” ― Timo Aijo"
        },
        {
            "Number": "1697",
            "Quote": "“For a happy life,it's best we should ignore &overlook things,people,incidents,affairs & matters.It is not necessary that we show a reaction to everything. Step back & ask yourself if the matter is really worth responding to.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "1698",
            "Quote": "“Every prosperous business was first a courageous decision to begin and then a constant determination to continue.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1699",
            "Quote": "“Humans are like an ever flowing river of fresh water. We stagnate if we stop progressing.” ― Arshad Wahedna"
        },
        {
            "Number": "1700",
            "Quote": "“Delegating your accountabilities is abdication” ― Michael E. Gerber"
        },
        {
            "Number": "1701",
            "Quote": "“You don't feel thirty percent smarter when the stock goes up by thirty percent so when the stock goes down you shouldn't feel thirty percent dumber\" Jeff Bezos” ― Brad Stone, The Everything Store: Jeff Bezos and the Age of Amazon"
        },
        {
            "Number": "1702",
            "Quote": "“You can either learn to live with your Kryptonite or you can conquer it. Do what others don’t and you will have a distinct strategic advantage.” ― James Woosley, Conquer the Entrepreneur's Kryptonite: Simple Strategic Planning for You and Your Business"
        },
        {
            "Number": "1703",
            "Quote": "“Branding is a lot of things, but one thing it's not is soft. When you brand, rebrand or brand-diggity, ask yourself one thing to do it right: how will my brand create buyers? If you’re in business, that’s the goal. Buyers. Branding done well creates both long term loyalty and timely purchases.” ― Richie Norton"
        },
        {
            "Number": "1704",
            "Quote": "“Bureaucracy develops the more perfectly, the more it is 'dehumanized', the more completely it succeeds in eliminating from business love, hatred, and all purely personal, irrational, and emotional elements which escape calculation.” ― Max Weber"
        },
        {
            "Number": "1705",
            "Quote": "“Thank your customer for complaining and mean it. Most will never bother to complain. They'll just walk away.” ― Marilyn Suttle"
        },
        {
            "Number": "1706",
            "Quote": "“When truth and honesty is successfully intertwined into the business world of a nation, the result is a boost in commerce.” ― Sunday Adelaja"
        },
        {
            "Number": "1707",
            "Quote": "“God has nothing to do with church business.” ― Ross Victory, Views from the Cockpit: The Journey of a Son"
        },
        {
            "Number": "1708",
            "Quote": "“basic rule of negotiation is to know what you want, what you need to walk away with in order to be whole.” ― Phil Knight"
        },
        {
            "Number": "1709",
            "Quote": "“Don't set your goals by what other people deem important.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1710",
            "Quote": "“Success is the sum of all validated improvements. You don’t need to validate yourself. You only need to validate the improvements - and others' improvements are much more important to validate than yours.” ― Meir Ezra"
        },
        {
            "Number": "1711",
            "Quote": "“Plans are easy to make, dreams are easy to dream. But putting your back into it? A little bit of hard graft and discipline? That is just too scary and far too much effort for the masses” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1712",
            "Quote": "“Both political parties have moved to the right during the neoliberal period. Today’s New Democrats are pretty much what used to be called “moderate Republicans.” The “political revolution” that Bernie Sanders called for, rightly, would not have greatly surprised Dwight Eisenhower. The fate of the minimum wage illustrates what has been happening. Through the periods of high and egalitarian growth in the ‘50s and ‘60s, the minimum wage—which sets a floor for other wages—tracked productivity. That ended with the onset of neoliberal doctrine. Since then, the minimum wage has stagnated (in real value). Had it continued as before, it would probably be close to $20 per hour. Today, it is considered a political revolution to raise it to $15.” ― Noam Chomsky"
        },
        {
            "Number": "1713",
            "Quote": "“Unlike sport in business the win-win is the best possible score” ― Rasheed Ogunlaru, Soul Trader: Putting the Heart Back Into Your Business"
        },
        {
            "Number": "1714",
            "Quote": "“Stop drinking from the firehose of a global Gen Z demographic. Focus on knowing your brand’s core audience, and aligning with the youth culture segments that matter most. In today’s world markets, niche audiences drive mass consumption.” ― Gregg L. Witt, The Gen Z Frequency: How Brands Tune in and Build Credibility"
        },
        {
            "Number": "1715",
            "Quote": "“Surround yourself with people who are better than you in each individual area of business.” ― Graham Speechley"
        },
        {
            "Number": "1716",
            "Quote": "“Businesses grow when they are well loved!” ― Blaze Lazarony"
        },
        {
            "Number": "1717",
            "Quote": "“Do not confuse location with direction. Location is where you are, direction is where you are going.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "1718",
            "Quote": "“If BlackHat people can monetize an opportunity (that is, convert it to money), and especially if they can scale it (that is, make money from a big mass of people), then they will do it—happily so—and even create their own sub-markets to serve that BlackHat opportunity.” ― Frederic Haddad, The BlackHat Way"
        },
        {
            "Number": "1719",
            "Quote": "“Selling is a sacred trust between buyer and seller.” ― Richie Norton"
        },
        {
            "Number": "1720",
            "Quote": "“Running a business is a serious thing.” ― Auliq Ice"
        },
        {
            "Number": "1721",
            "Quote": "“You should never have to feel inauthentic or deceptive to succeed in business” ― Matthew Pollard, The Introvert's Edge: How the Quiet and Shy Can Outsell Anyone"
        },
        {
            "Number": "1722",
            "Quote": "“Like life, revenge can be a messy business... And both would be much simpler if only our heads could figure out which way our hearts will go. But the heart has its reasons, of which reason cannot know.” ― Emily Thorne"
        },
        {
            "Number": "1723",
            "Quote": "“Business is no more about making money than the human body is about making blood. Yes you need to make the stuff, but only to serve your higher aims.” ― Phil Knight, Shoe Dog: A Memoir by the Creator of NIKE"
        },
        {
            "Number": "1724",
            "Quote": "“Great experience is made up of challenges.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "1725",
            "Quote": "“The U.S. stock market was now a class system, rooted in speed, of haves and have-nots. The haves paid for nanoseconds; the have-nots had no idea that nanoseconds had value. The haves enjoyed a perfect view of the market; the have-nots never saw the market at all.” ― Michael Lewis, Flash Boys: A Wall Street Revolt"
        },
        {
            "Number": "1726",
            "Quote": "“Every interaction is an opportunity to learn, Only if we are interested in improving rather than proving.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "1727",
            "Quote": "“If a business is underperforming, then the assumptions are wrong” ― Fritz Shoemaker"
        },
        {
            "Number": "1728",
            "Quote": "“The goal is to create a “chit,” or IOU, so that, assuming you continue to perform well, the organization feels like it owes you the next time.” ― Carla Harris, Expect to Win: Proven Strategies for Success from a Wall Street Vet"
        },
        {
            "Number": "1729",
            "Quote": "“I have always believed that a trademark is the life of an enterprise and that it must be protected boldly. A trademark and a company name are not just clever gimmicks-they carry responsibility and guarantee the quality of the product. If someone tries to get a free ride on the reputation and the ability of another who has worked to build up public trust, it is nothing short of thievery. We were not flattered by this theft of our name.” ― Akio Morita"
        },
        {
            "Number": "1730",
            "Quote": "“A business is not being competitive if it undertakes the same activities and grows at the same pace as its competitors. It must create something new, and this is why strategic intuition is needed.” ― Paul A. Sacco, Strategy Quest: The Executive Guide to Finding Business Opportunities"
        },
        {
            "Number": "1731",
            "Quote": "“You can’t stay in a Blackberry mindset and become an Apple!” ― John Di Lemme, *57* Must Use Words in Every Piece of Marketing that You Do for Your Business"
        },
        {
            "Number": "1732",
            "Quote": "“Cartello Capehart provides search engine marketing, content promotion, influencer marketing, content automated, strategy marketing, and e-commerce marketing.” ― Cartello Capehart"
        },
        {
            "Number": "1733",
            "Quote": "“Competition may help us create better products and services but in the end competition really seeks to destroy the opponent. To put him out of the power to compete against you.” ― Bangambiki Habyarimana, The Great Pearl of Wisdom"
        },
        {
            "Number": "1734",
            "Quote": "“I can do full commercial role also (external or internal) if you needed. I can be fitted into any role at this situation. Think if you needing me somewhere then I will be always there.” ― company notes"
        },
        {
            "Number": "1735",
            "Quote": "“Everybody needs to be good-natured with a good heart, because in this way we can solve our own problems as well as those of others, and we can make our human life meaningful.” ― Abhishek S, KARMA"
        },
        {
            "Number": "1736",
            "Quote": "“Niemand wird müde, seinen Nutzen zu suchen; Nutzen aber gewährt eine naturgemäße Tätigkeit. Werde also nicht müde, deinen Nutzen zu suchen, indem du anderen Nutzen gewährst!” ― Marc Aurel, Wege zu sich selbst"
        },
        {
            "Number": "1737",
            "Quote": "“OSHA is in the business of fabricating reasons that it cannot uphold whistleblower’s legal rights.” ― Steven Magee"
        },
        {
            "Number": "1738",
            "Quote": "“We cannot prevail by our own might or strength, we need to plug on to the source of our strength so that we will remain resourceful always.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1739",
            "Quote": "“one of the most important things you can do for yourself is have a strong sense of your own greatness... because many things and people will misjudge you and count you at what they thing you are or can achieve. Their limits are not true... yours are” ― Marsha Wright, The Secret Collaborative Economy: More Clients, More Exposure, More Profit, Faster!"
        },
        {
            "Number": "1740",
            "Quote": "“Values are the measuring stick for how you make decisions in business: goal setting, employee conduct, recognition, discipline—everything.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1741",
            "Quote": "“Who Do You Want Your Customers to Become' was published... in 2012. Its essential insight is that innovation is an investment in the human capital, capabilities, and competencies of customers and clients. Business history gives great credence to this “human capital” model of innovation. For example, George Eastman didn't just invent cheap cameras and film; he created photographers. Steve Jobs didn't merely “reinvent” personal computing and mobile telephony; he reinvented how people physically touched and talked with their technologies. Successful innovators have a “vision of the customer future” that matters every bit as much as their product or service vision. By treating innovation as an investment in customer futures, organizations can make their customers more valuable. In other words, “Making Customers Better Makes Better Customers\".” ― Michael Schrage, The Innovator's Hypothesis: How Cheap Experiments Are Worth More Than Good Ideas"
        },
        {
            "Number": "1742",
            "Quote": "“It is our business to proffer solution to the problem of the society.” ― Sunday Adelaja, The Mountain of Ignorance"
        },
        {
            "Number": "1743",
            "Quote": "“Every great brand goes back to a courageous individual who dared to say 'NO' to the status quo.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "1744",
            "Quote": "“Beside them, little pot-bellied men in light suits and panama hats; clean, pink men with puzzled, worried eyes, with restless eyes. Worried because formulas do not work out; hungry for security and yet sensing its disappearance from the earth. In their lapels the insignia of lodges and service clubs, places where they can go and, by a weight of numbers of little worried men, reassure themselves that business is noble and not the curious ritualized thievery they know it is; that business men are intelligent in spite of the records of their stupidity; that they are kind and charitable in spite of the principles of sound business; that their lives are rich instead of the thin tiresome routines they know; and that a time is coming when they will not be afraid any more.” ― John Steinbeck, The Grapes of Wrath"
        },
        {
            "Number": "1745",
            "Quote": "“Earning the Right is a commitment to be the sales professional that your customer really needs” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1746",
            "Quote": "“The corporate controlled government is in the business of misinformation of the masses in order to boost the profits of toxic corporations.” ― Steven Magee"
        },
        {
            "Number": "1747",
            "Quote": "“The efficient execution of industrial and administrative activities by the people promises an enduring economy for the province.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1748",
            "Quote": "“We humans instinctively want to build community and look for social proof to guide and reinforce our beliefs and decisions. Few leaders are brave enough to admit how easily they can fall into the trap of herd mentality.” ― Peter Kozodoy, Honest to Greatness: How Today's Greatest Leaders Use Brutal Honesty to Achieve Massive Success"
        },
        {
            "Number": "1749",
            "Quote": "“Sometimes, as in a game of chess, we must strategically regress so that we might progress toward our ultimate objective.” ― Crystal Woods, Write like no one is reading 2"
        },
        {
            "Number": "1750",
            "Quote": "“Conceal your dispositions, and your condition will remain secret, which leads to victory; show your dispositions, and your condition will become patent, which leads to defeat.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "1751",
            "Quote": "“It is much more rewarding to get to the top of the mountain and share your experience with others than to show up by yourself, exausted.” ― -Shandel Slaten"
        },
        {
            "Number": "1752",
            "Quote": "“Deciding to put my energy and experience into building a business at the time I did it felt perfectly natural; but when I started to look around I realised that I was in a very small minority of women around my age, leading business.” ― Sheila Holt, Trust is the New Currency: How to build trust, attract the right partners and create wealth through business and investments"
        },
        {
            "Number": "1753",
            "Quote": "“In the end, every startup is different. But in the beginning every startup is the same.” ― Richie Norton"
        },
        {
            "Number": "1754",
            "Quote": "“If you can dream it, then you can achieve it. You will get all you want in life if you help enough other people get what they want. ” ― Zig Ziglar"
        },
        {
            "Number": "1755",
            "Quote": "“A business that is not in love with its customers, but only the money they bring, should not expect love back.” ― J. N. HALM"
        },
        {
            "Number": "1756",
            "Quote": "“You are not permitted to suffer what others suffer, you are not permitted to fail or die young.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1757",
            "Quote": "“I can honestly say that I have never gone into any business purely to make money. If that is the sole motive then I believe you are better off not doing it. A business has to be involving, it has to be fun, and it has to exercise your creative instincts.” ― Richard Branson, Losing My Virginity: How I've Survived, Had Fun, and Made a Fortune Doing Business My Way"
        },
        {
            "Number": "1758",
            "Quote": "“Ty Inc.'s 1989 catalog had this on the back cover: \"Warning: If anyone dare copy our creative designs and patents without written permission, ownership of your eternal soul passes to us and we have the right to negotiate the sale of said soul. Furthermore, our attorneys will see to it that life on Earth, as you know it, is not worth living.” ― Zac Bissonnette, The Great Beanie Baby Bubble: Mass Delusion and the Dark Side of Cute"
        },
        {
            "Number": "1759",
            "Quote": "“We hear that people are assets but people are not assets. Only good people are assets, all others are liabilities.” ― Rushabh Soni"
        },
        {
            "Number": "1760",
            "Quote": "“In many instances, the words “sell” and “influence” are completely interchangeable.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1761",
            "Quote": "“Your lack of attention to detail is why no one is paying attention to you. Professionalism, communication and follow through builds real success.” ― Loren Weisman"
        },
        {
            "Number": "1762",
            "Quote": "“Gossip is the biggest hindrance to building trust and productivity in organizations across America.” ― Ford Taylor, Relactional Leadership: When Relationships Collide with Transactions"
        },
        {
            "Number": "1763",
            "Quote": "“One of the most common mistakes that start-ups make is not focusing on building a brand starting on day one.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "1764",
            "Quote": "“But developing relationships with coworkers—your peers, superiors, and subordinates—is incredibly important, perhaps even the most important thing you’ll do at work, and this is completely dependent on your communication skills.” ― Scribendi, Effective Business Communication"
        },
        {
            "Number": "1765",
            "Quote": "“Leveraging existing resources is innovation’s sweetest play.” ― Richie Norton"
        },
        {
            "Number": "1766",
            "Quote": "“Developing individualized operation and communication plans that are rooted in the authority and authenticity of the people, the story and the product allow for better creativity, production and engagement.” ― Create Wealth Communities"
        },
        {
            "Number": "1767",
            "Quote": "“You wouldn’t get in a car and drive around aimlessly, hoping to eventually arrive at a pleasant destination. So why would you even consider doing this for your business?” ― Koos Kruger, Business Exit Companion: An Owner's Guide to Exit Planning and Unlocking Value"
        },
        {
            "Number": "1768",
            "Quote": "“Great things in business are never done by one person,They are done by a team of people” ― Steve Jobs, Steve Jobs: His Own Words and Wisdom"
        },
        {
            "Number": "1769",
            "Quote": "“FAKE IT TIL YOU BECOME IT!” ― Qwana M. \"BabyGirl\" Reynolds-Frasier"
        },
        {
            "Number": "1770",
            "Quote": "“In partnership disputes, most of the partners will leave the alliance but not their arrogance” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1771",
            "Quote": "“You will reach success if you move forward, staying still only makes your journey longer.” ― Milad Ghane"
        },
        {
            "Number": "1772",
            "Quote": "“Remember that businesses are made up of humans like you. They aren’t going to be perfect and they will need encouragement, clarification, and correction to deliver their best.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1773",
            "Quote": "“Improvement is not enough, you also need innovation.” ― Amit Kalantri"
        },
        {
            "Number": "1774",
            "Quote": "“The presence of God is so important in the life of believers. There is abundance of all you need to make your life comfortable in His presence.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1775",
            "Quote": "“If you have influence on other people. Dont be influenced by their hate, money, jealousy, anger and popularity .” ― De philosopher DJ Kyos"
        },
        {
            "Number": "1776",
            "Quote": "“Strategy requires you to answer three questions: Where you are now, where do you want to go, and how you are going to go there.” ― Abdul Malik Omar, Triumph: Unleash Your Inner Entrepreneur"
        },
        {
            "Number": "1777",
            "Quote": "“If you love to write, start a blog. If you love to talk, start a podcast. If you love to solve problems, start a business. If you love freedom, do what you love.” ― Maxime Lagacé"
        },
        {
            "Number": "1778",
            "Quote": "“It is not enough to fall in love with an idea and pursue it. It is critical to always put it to the ‘economic viability test’ first.” ― Victor Kwegyir, Opportunities in the New Economy and Beyond: Birthing Entrepreneurs in a Pandemic Economy to Create Successful Businesses and New Wealth"
        },
        {
            "Number": "1779",
            "Quote": "“You need three things to create a successful startup: to start with good people, to make something customers actually want, and to spend as little money as possible. Most startups that fail do it because they fail at one of these. A startup that does all three will probably succeed.' [Paul Graham]” ― Alexis Ohanian, Without Their Permission: How the 21st Century Will Be Made, Not Managed"
        },
        {
            "Number": "1780",
            "Quote": "“The web is an opportunity for those who understand that the web is a threat.” ― Massimo Moruzzi, 15 Questions About Online Advertising"
        },
        {
            "Number": "1781",
            "Quote": "“Without trust don’t give the benefit of the doubt, but the doubt of the benefit.” ― Yuri van der Sluis"
        },
        {
            "Number": "1782",
            "Quote": "“You don’t need an MBA from an elite Ivy League school to find funding and be successful, but you do need to understand the start-up ecosystem.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "1783",
            "Quote": "“Only those deals get closed which you deserve.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1784",
            "Quote": "“The highway behind gives me courage to move into the future. I desire to see the first light of tomorrow.” ― John E. Quinlan, Tau Bada The Quest and Memoir of a Vulnerable Man"
        },
        {
            "Number": "1785",
            "Quote": "“Learning new systems and processes is not mandatory...but neither is staying in business” ― Bobby Darnell, Time For Dervin - Living Large In Geiggityville"
        },
        {
            "Number": "1786",
            "Quote": "“The type of person you are is usually reflected in your business. To improve your business, first improve yourself.” ― Idowu Koyenikan, Wealth for All: Living a Life of Success at the Edge of Your Ability"
        },
        {
            "Number": "1787",
            "Quote": "“But in spite of its bent toward self-interest, even with its excesses and inequalities, capitalism has a historic opportunity to create shared wealth that can benefit every person on the globe. I am convinced that our best hope for moving the poverty needle toward financial wellness once and for all lies with the best practices of the free market.” ― Robert D. Lupton"
        },
        {
            "Number": "1788",
            "Quote": "“The only enemy which stands between the talent you posses and success you achieve is known as \"EGO\" in our Society” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1789",
            "Quote": "“If you cant sell it to yourself, you cant sell it to someone else.” ― Yuri van der Sluis"
        },
        {
            "Number": "1790",
            "Quote": "“I apologise, your Highness. Murder can be a painful business.” ― Joe Abercrombie, Best Served Cold"
        },
        {
            "Number": "1791",
            "Quote": "“Having the right mindset is paramount for success.” ― Francis Shenstone, The Explorer's Mindset: Unlock Health Happiness and Success the Fun Way"
        },
        {
            "Number": "1792",
            "Quote": "“Publishers are businesses and I don’t blame them for that. If they didn’t make money by publishing books, there wouldn’t be any books.” ― Johnny Rich"
        },
        {
            "Number": "1793",
            "Quote": "“A future that will require Corporate held Emotional Intelligence” ― Fritz Shoemaker"
        },
        {
            "Number": "1794",
            "Quote": "“The worst sin you can ever commit to yourself is to sit and wait for someone to give you money” ― Mac Duke The Strategist"
        },
        {
            "Number": "1795",
            "Quote": "“Wall Street never changes. The pockets change, the suckers change, the stocks change, but Wall Street never changes because human nature never changes” ― Peter Bevelin, All I Want To Know Is Where I'm Going To Die So I'll Never Go There"
        },
        {
            "Number": "1796",
            "Quote": "“It remains, as ever, an axiom of conventional wisdom that the use of propaganda as a means of social and ideological control is distinctive of totalitarian regimes. Yet the most minimal exercise of common sense would suggest a different view: that propaganda is likely to play at least as important a part in democratic societies (where the existing distribution of power and privilege is vulnerable to quite limited changes in popular opinion) as in authoritarian societies (where it is not). It is arguable that the success of business propaganda in persuading us, for so long, that we are free from propaganda is one of the most significant propaganda achievements of the twentieth century.” ― Alex Carey, Taking the Risk Out of Democracy: Corporate Propaganda versus Freedom and Liberty"
        },
        {
            "Number": "1797",
            "Quote": "“The business, as respected three-star chef Scott Bryan explains it, attracts 'fringe elements', people for whom something in their lives has gone terribly wrong.” ― Anthony Bourdain, Kitchen Confidential: Adventures in the Culinary Underbelly"
        },
        {
            "Number": "1798",
            "Quote": "“My New book will be released May 1,2020. I cannot envision a quick rebound for the U.S. economy, which has already suffered more than 16 million job losses in the past three weeks. Im releasing my new book 6 months earlier than scheduled to help those looking to create a new business or piviot an existing business. The entrepreneurs mindset is all about adapting and adjusting for success.” ― Reginald Grant"
        },
        {
            "Number": "1799",
            "Quote": "“Between the Great Depression and the 1970s, private business was viewed with suspicion even in most capitalist economies. Businesses were, so the story goes, seen as anti-social agents whose profit-seeking needed to be restrained for other, supposedly loftier, goals, such as justice, social harmony, protection of the weak and even national glory.” ― Ha-Joon Chang, 23 Things They Don't Tell You about Capitalism"
        },
        {
            "Number": "1800",
            "Quote": "“You want to build a big business? Start with your character.” ― Alin Sav"
        },
        {
            "Number": "1801",
            "Quote": "“Avis named her business Paradise Pastry because she imagined cathedrals. She thought about the stonemasons, glassblowers, sculptors- who gave lifetimes to the creation of beauty. Every sugar crust she rolled, every simple 'tarte Tatin' was a bit of a church. She consecrated herself to it: later, it became her tribute to her daughter and the unknown into which she'd disappeared. She had her cathedral to enter, to console her. Her friend Jean-Francoise, chef at La Petit Choux, said that her pastries would be transcendent, if only she wasn't American.” ― Diana Abu-Jaber, Birds of Paradise"
        },
        {
            "Number": "1802",
            "Quote": "“There is no better teacher than history in determining the future... There are answers worth billions of dollars in 30$ history book.” ― Charles T. Munger, Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger"
        },
        {
            "Number": "1803",
            "Quote": "“Social media isn’t a brand strategy. Social media is a channel. While it’s important for a brand to develop something to say, it’s more important to create something that will be heard.” ― David Brier"
        },
        {
            "Number": "1804",
            "Quote": "“You cannot control the past but you have control over the life you build going forward.” ― Nancy D. Butler, Above All Else, Success in Life and Business"
        },
        {
            "Number": "1805",
            "Quote": "“Any good business person applies financial discipline to everything they do. The movie business is and should be no different; I don't believe you have to sacrifice creativity to have business success. To the contrary, great art requires discipline.” ― Paula Wagner"
        },
        {
            "Number": "1806",
            "Quote": "“The best way to engage honestly with the marketplace via Twitter is to never use the words \"engage,\" \"honestly,\" or \"marketplace.” ― Jeffrey Zeldman"
        },
        {
            "Number": "1807",
            "Quote": "“Whether in an advantageous position or a disadvantageous one, the opposite state should be always present to your mind.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "1808",
            "Quote": "“Companies may never come up with a better office communication program than a lunch break.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1809",
            "Quote": "“God is not a thief. That which steals, kills and destroys is the devil - not God!” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1810",
            "Quote": "“The brand I bought represents a company with a higher IQ but a lower EQ” ― Fritz Shoemaker"
        },
        {
            "Number": "1811",
            "Quote": "“International business, once allowed to stalk uncontrolled, killed the local, the small, the quirky.” ― Alexander McCall Smith, Love Over Scotland"
        },
        {
            "Number": "1812",
            "Quote": "“Because you reckoned money is everything, you regrettably died doing everything for money.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1813",
            "Quote": "“Sourcing has become a commodity. We changed the game. We bring strategy, business skills and end to end fulfillment from prototyping to manufacturing to shipping to warehousing to your customer’s door PLUS strategy and tactics so you actually make real money. We (PROUDUCT) brought value back to sourcing.” ― Richie Norton"
        },
        {
            "Number": "1814",
            "Quote": "“Throughout history, the life of a businessperson always involves some risk; the higher the risk, the greater the reward. On the other hand, the life of an employee in any workforce involves minimal to no risk at all, resulting in a lifetime full of steadiness with little to no accomplishments during this lifetime. However, there is a crucial factor which can also be considered as a trait or characteristic that made many remarkable men and women throughout history reach high levels of their career paths, which is considered to be “success” in our modern world: Audacity.” ― Anas O Hamshari B Sc, Bringing the World of Super Luxury to Kuwait: 2014 Dissertation by Anas O. H. Hamshari, from the European School of Economics in Florence, Italy"
        },
        {
            "Number": "1815",
            "Quote": "“Great ideas don’t die in the market, they die in the shower. People are too scared to pursue them because they appear crazy.” ― Kaihan Krippendorff"
        },
        {
            "Number": "1816",
            "Quote": "“You cannot run a multimillion-dollar business like you would a lemonade stand.” ― Mark Miller, Chess, Not Checkers: Elevate Your Leadership Game"
        },
        {
            "Number": "1817",
            "Quote": "“My take is that smart financiers wait until aha before they climb aboard the bandwagon. Entrepreneurs need to bridge the capital gap from idea to aha with expertise, not capital or sophisticated market research.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "1818",
            "Quote": "“When plan doesn't work do not change the goal, Change the plan ! #beingemployee” ― Stella Morey"
        },
        {
            "Number": "1819",
            "Quote": "“For many people, money is an index of how successful one is. And so they fear competition and attach themselves to their shadows. Such path drives one towards materialism rather than spiritualism. So what’s the difference between such individuals and those that work in the hope of quitting their job? Well, the main difference is that materialist people separate the two realities in the hope they can earn money from the work they love and then quit the work they don’t like. And by creating such division they remain there, in the middle, trapped. They think that by following what they love to do, step by step, they’ll be guided towards the right direction. But if their thoughts were clear, they would know they’re diving themselves and perpetuating their fate, rather than solving it. They neglect the mental barriers stopping them from achieving their goal. And anyone is responsible for determining the result that one holds in his thoughts. In other words, if you had not made such division in the first place, and instead accepted the lack of duality, you would achieve your result much faster. That is why almost all entrepreneurs rather work hard and be poor when starting a business than waiting for the right time to quit their job. There’s not such thing as the right time, or a shift from one reality unto another, because you create both things, your fortune and your unfortunate, and you own your luck and results, all the time. Whatever you believe in present time, perpetuates that same present time.” ― Robin Sacredfire"
        },
        {
            "Number": "1820",
            "Quote": "“... we can say that it takes generations for a firm to understand value before they can adapt to it.” ― Anas O Hamshari B Sc, Bringing the World of Super Luxury to Kuwait: 2014 Dissertation by Anas O. H. Hamshari, from the European School of Economics in Florence, Italy"
        },
        {
            "Number": "1821",
            "Quote": "“What I don't get about \"traditional publishing\" is that an author creates a work that they think is good enough to be published. They then have to spend their valuable time begging others to exploit them to point where they end up with a 5% stake in THEIR business. What kind of a screwed of business model is that?” ― David Nicol"
        },
        {
            "Number": "1822",
            "Quote": "“Stop Blaming. Take responsibility for your thoughts and your actions.” ― Dee Dee Artner"
        },
        {
            "Number": "1823",
            "Quote": "“You should be suspicious of a medical profession that is in the business of treatments, not cures.” ― Steven Magee"
        },
        {
            "Number": "1824",
            "Quote": "“Most of the masses still believe in magic, you know. Spells. Potions. It's a big business, I am told.” ― Philip K. Dick"
        },
        {
            "Number": "1825",
            "Quote": "“22% of current business-to-business salespeople will be replaced by search engines within the next five years.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1826",
            "Quote": "“Training and Development is an never ending process” ― Peter Smith, Cooperation in the Multi-Ethnic Classroom (1994): The Impact of Cooperative Group Work on Social Relationships in Middle Schools"
        },
        {
            "Number": "1827",
            "Quote": "“In business, build a runway. Make sure it's long enough to build enough momentum to lift off and fly. Put the right team in place to get it done.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "1828",
            "Quote": "“Advances in technology can be empowering, progressive and enriching. History has shown this across civilisations and societies. But it has also shown, and the present and future will continue to show, that it is foolish, risky, flawed and folly without us raising our individual and collective consciousness and mindfulness to accompany it - to ensure we use it shrewdly, kindly and wisely.” ― Rasheed Ogunlaru"
        },
        {
            "Number": "1829",
            "Quote": "“If everything you do needs to work on a three-year time horizon, then you’re competing against a lot of people. But if you’re willing to invest on a seven-year time horizon, you’re now competing against a fraction of those people… Just by lengthening the time horizon, you can engage in endeavors that you could never otherwise pursue” ― Jeff Bezos"
        },
        {
            "Number": "1830",
            "Quote": "“Business has two ‘children’. One is called ‘loss’ and the other ‘profit’. No one likes the one called ‘loss’, but both are indeed there. They are born together.” ― Dada Bhagwan"
        },
        {
            "Number": "1831",
            "Quote": "“You listen like an amateur and fool yourself into believing it is enough when it is not.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1832",
            "Quote": "“Some people get a lot of pleasure from sharing their success with those who were adamant that they would not or would never succeed, but get very little or even no pleasure from sharing their success with those who have supported them.” ― Mokokoma Mokhonoana"
        },
        {
            "Number": "1833",
            "Quote": "“When building a business, seek multiple yet complementary revenue streams. This will help you survive the ups & downs of the economy.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "1834",
            "Quote": "“If your culture is how you do business internally, your brand is what people believe about you externally.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1835",
            "Quote": "“Sensuality is the new Soul of Enterprise.” ― Lebo Grand"
        },
        {
            "Number": "1836",
            "Quote": "“Richness is achieving peace of mind and finding joy working with business partners who are honest, reliable, balanced and trustworthy.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "1837",
            "Quote": "“Today I get 100 times more done with 100 times less effort. What’s my secret? I learned to stop being a cadet and start being a general.” ― Joshua Dorkin, How to Invest in Real Estate: The Ultimate Beginner's Guide to Getting Started"
        },
        {
            "Number": "1838",
            "Quote": "“An economy where even a few people cannot afford a snack, shelter, and survival is a failed economy.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1839",
            "Quote": "“A business without sales is just ego masturb*tion.” ― Dan Meredith, How To Be F*cking Awesome"
        },
        {
            "Number": "1840",
            "Quote": "“The best way to help your consumers with your business is to treat your employees right so they give better customer service, empower them so they can provide faster solutions, and to treat your vendors and partners fairly and with respect so they can continually provide the best product and services to their ability. - Strong by Kailin Gow” ― Kailin Gow"
        },
        {
            "Number": "1841",
            "Quote": "“For all the folks whose job it was to be ready for [Hurricane] Katrina, but who weren't, from the Oval Office, right down the chain of command to the New Orleans police department, Wal-Mart was a vivid reproach.” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "1842",
            "Quote": "“Let your words glorify God and edify your hearers and then beautify your life.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1843",
            "Quote": "“Its going to be a rocky relationship you are going to have with your business, don’t marry it if you don’t like it! Its going to be ruff sometimes but you can create life to something beautiful!” ― Jenaitre Farquharson"
        },
        {
            "Number": "1844",
            "Quote": "“Any investment in sales training is an investment in your own gross profits.” ― Roy H. Williams, The Wizard of Ads"
        },
        {
            "Number": "1845",
            "Quote": "“On the least eventful days, this job requires an ability to constantly adapt and re-adapt. You go from plotting growth strategy with investors, to looking at the design of a giant new theme-park attraction with Imagineers, to giving notes on the rough cut of a film, to discussing security measures and board governance and ticket pricing and pay scale. The days are challenging and dynamic, but they're also a never-ending exercise in compartmentalization.” ― Robert Iger, The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
        },
        {
            "Number": "1846",
            "Quote": "“I’ve never been motivated by money – it doesn’t drive Me.” ― Germany Kent"
        },
        {
            "Number": "1847",
            "Quote": "“A businessman is someone who buys at ten and is happy to get out at twelve. The other kind of man buys at ten, sees it rise to eighteen and does nothing. He is waiting for it to get to twenty. The beauty of numbers. When it drops to ten again he waits for it to get back to eighteen. When it drops to two he waits for it to get back to ten. Well, it gets back there. But he has wasted a quarter of his life. And all he's got out of his money is a little mathematical excitement.” ― V.S. Naipaul, A Bend in the River"
        },
        {
            "Number": "1848",
            "Quote": "“In somebody’s mind, some upper-level suit that was looking at the bottom line and all those red numbers, it made more sense to unload five employees who collectively made a hundred thousand a year and ruin five lives, than it did to get rid of one job-redundant, mid-level manager earning the same amount.” ― Erica Larsen, Bad Boy Nice Guy"
        },
        {
            "Number": "1849",
            "Quote": "“Entrepreneurs pay the price of a road less traveled, while everyone else takes the freeway and perpetually misses their own exit.” ― Ryan Lilly"
        },
        {
            "Number": "1850",
            "Quote": "“When you have a strong company culture it will shine through your brand and you can authentically say, “This is what our brand is about.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1851",
            "Quote": "“In our ever-expanding world of style and image experts, one problem that often arises is the question of what differentiates one image consultant from another.” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "1852",
            "Quote": "“Spend your time designing the greatest reputation a man could possess.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1853",
            "Quote": "“My advice was to start a policy of making reversible decisions before anyone left the meeting or the office. In a startup, it doesn’t matter if you’re 100 percent right 100 percent of the time. What matters is having forward momentum and a tight fact-based data/metrics feedback loop to help you quickly recognize and reverse any incorrect decisions. That’s why startups are agile. By the time a big company gets the committee to organize the subcommittee to pick a meeting date, your startup could have made 20 decisions, reversed five of them and implemented the fifteen that worked.” ― Steven Gary Blank, The Four Steps to the Epiphany: Successful Strategies for Startups That Win"
        },
        {
            "Number": "1854",
            "Quote": "“The biggest thread of innovation are ideas, as they are like rabbits. You get a couple and you learn how to handle them to pretty soon be confronted with a dozen of them.” ― Pedro Ahlers"
        },
        {
            "Number": "1855",
            "Quote": "“PR is everything and everywhere. PR is the King and the Slave, the Game Changer and the Boss, the revolution! Indeed, the Global PR Revolution!” ― Maxim Behar , The Global PR Revolution: How Thought Leaders Succeed in the Transformed World of PR"
        },
        {
            "Number": "1856",
            "Quote": "“either on a competitive or a cartel basis.” ― George W. Stocking, Cartels in Action: Case Studies in International Business Diplomacy"
        },
        {
            "Number": "1857",
            "Quote": "“I used to believe that culture was “soft,” and had little bearing on our bottom line. What I believe today is that our culture has everything to do with our bottom line, now and into the future.” ― Vern Dosch, Wired Differently"
        },
        {
            "Number": "1858",
            "Quote": "“What separates those who build exceptional lives from others, is the way they use their time.” ― Paul Oberschneider, Why Sell Tacos in Africa?: 16 life-changing business strategies you can use anywhere, from the man who turned $400 into $200 million"
        },
        {
            "Number": "1859",
            "Quote": "“You are not your brain. You are not your thoughts. You are not your feelings. You are not your money. You are not your home. You are not your team. You are not your body. You are not your strength. You are not your intelligence. You are not your business. You are not your work. You are not your posts. You are not your likes. You are not your views. You are not your subs. You are much better than that. Repeat.” ― Richie Norton"
        },
        {
            "Number": "1860",
            "Quote": "“In the process of acquiring what you don't have, ensure you don't lose what you have.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1861",
            "Quote": "“Stop explaining to others, people will only understand from their level of discernment.” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "1862",
            "Quote": "“When one thing, the right thing, is set in motion, it can topple many things.” ― Gary Keller, The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results"
        },
        {
            "Number": "1863",
            "Quote": "“You cannot be rich and right. To be rich, you must be in control. Control brings income. When you insist on being right, you give up control.” ― Meir Ezra"
        },
        {
            "Number": "1864",
            "Quote": "“Independent trekking guides, like Bhadra Shrestha, are vital to Nepal's struggling economy since all of their income goes directly back into the local system, unlike the larger and internationally owned and runned companies.” ― Andrew James Pritchard"
        },
        {
            "Number": "1865",
            "Quote": "“You can ensure the safety of your defense if you only hold positions that cannot be attacked.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "1866",
            "Quote": "“There is a shady business scheme behind every move that Trump makes as President.” ― Ed Krassenstein"
        },
        {
            "Number": "1867",
            "Quote": "“Being authentic, and being perceived as such by your audience, relies on your ability to ensure that every decision you make when it comes to your business is rooted in being true to yourself.” ― Gary Vaynerchuk, Crush It!: Why Now Is the Time to Cash In on Your Passion"
        },
        {
            "Number": "1868",
            "Quote": "“Fear is the most prodigious enemy of our soul” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "1869",
            "Quote": "“These days he was like a zombie, all grim business, just another jerk with an erection.” ― Tom Perrotta, The Leftovers"
        },
        {
            "Number": "1870",
            "Quote": "“One of the reasons the rich get richer, the poor get poorer, and the middle class struggles in debt is because the subject of money is taught at home, not in school. Most of us learn about money from our parents. So what can a poor parent tell their child about money? They simply say \"Stay in school and study hard.\" The child may graduate with excellent grades but with a poor person's financial programming and mind-set. It was learned while the child was young.” ― Robert Kiyosaki, Rich Daddy Series: A Rich Daddy and A Poor Daddy (A Comic Version)/ A Series of A Rich Daddy"
        },
        {
            "Number": "1871",
            "Quote": "“Credentials are like potential energy, the compliments of a name on paper, in documents, word of mouth, but faith is like kinetic energy, the motion and the force that which is witnessed. Hence in the end it is the faith rather than the credentials that really takes you places.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "1872",
            "Quote": "“You remain a follower for life when you pay for what people do while nobody pays you for what you do. Do something impressive and become a leader!” ― Israelmore Ayivor, Leaders' Watchwords"
        },
        {
            "Number": "1873",
            "Quote": "“Tidy your business by looking at your product offerings and categorize them by putting them into value grade buckets.” ― Richie Norton"
        },
        {
            "Number": "1874",
            "Quote": "“There is no reaction when a fresh idea is presented. What follows is a deluge of excuses for why the idea would not work. (From futurethink 2011 Corporate Culture Study participant, describing the experience of presenting new ideas)” ― Lisa Bodell, Kill the Company: End the Status Quo, Start an Innovation Revolution"
        },
        {
            "Number": "1875",
            "Quote": "“If you are opportunist, then you are already one step closer to achieve your target!” ― PRIYANSHU JOSHI"
        },
        {
            "Number": "1876",
            "Quote": "“Your work style is describe You” ― MA Chohan"
        },
        {
            "Number": "1877",
            "Quote": "“To really change the world, we have to help people change the way they see things.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "1878",
            "Quote": "“She’s such a bitch,” Tina says, which I find a little contradictory, but overall quite true. “She’s got to be in charge of everything.” I sit next to her. “Well, I guess. But in business, that’s leadership.” Tina stares at me for a second. “I can’t believe you consider that a positive trait. How about her inability to accept other points of view? Is it good leadership to be narrow, too?” “Focus,” I say. “They call that focus.” Tina stares at me. “Her paranoia?” “Business savvy.” “Compulsive need to have everything just how she wants it?” “Organizational skills.” “Aggressiveness?” “Aggressiveness,” I say, “is already a good thing.” “Jesus Christ,” Tina says, her eyebrow ring glinting in the morning sun. “Sometimes I worry about this country.” ― Max Barry, Syrup"
        },
        {
            "Number": "1879",
            "Quote": "“You first have something and then nothing.” ― Meir Ezra"
        },
        {
            "Number": "1880",
            "Quote": "“Success may require a lot of days. But progress only requires one.” ― T. Jay Taylor"
        },
        {
            "Number": "1881",
            "Quote": "“Reputation is an outcome; but it is also a valuable, strategic asset.” ― Andrew Griffin, Crisis, Issues and Reputation Management: A Handbook for PR and Communications Professionals"
        },
        {
            "Number": "1882",
            "Quote": "“Anything that forwards you toward certainty can be considered good.” ― Meir Ezra"
        },
        {
            "Number": "1883",
            "Quote": "“Perfect balance in sales is combining sense of urgency to close deals with great patience to listen, understand and act in a customer's best interest.” ― Yuri van der Sluis"
        },
        {
            "Number": "1884",
            "Quote": "“To be a success you need to have persistence of drive, persistence of vision, and persistence of action. You will be doing yourself a disservice by not staying resilient.” ― Meghan Wier, Confessions of an Introvert: The Shy Girl's Guide to Career, Networking and Getting the Most Out of Life"
        },
        {
            "Number": "1885",
            "Quote": "“There are times when the world is rearranging itself that the right person can change the world.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "1886",
            "Quote": "“Worldly relationships are not true [are not real]; it is a ‘business arrangement’.” ― Dada Bhagwan"
        },
        {
            "Number": "1887",
            "Quote": "“Most entrepreneurs donʼt think about money too much when they decide to start a business. Whenʼs the last time you asked someone at a cocktail party what he does, and he responded, “Every month, I generate more cash than I spend”?” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "1888",
            "Quote": "“A woman with vision is unstoppable, a woman who is always increasing her skills multiplies. Along with passion this woman is undeniable.” ― Janna Cachola"
        },
        {
            "Number": "1889",
            "Quote": "“Money flows where attention goes.” ― Steven Aitchison"
        },
        {
            "Number": "1890",
            "Quote": "“Just because you may be a Genious, does not mean you are Smart.” ― Mark W. Boyer"
        },
        {
            "Number": "1891",
            "Quote": "“If you don’t have (what you want), you are simply not willing to have (it).” ― Meir Ezra"
        },
        {
            "Number": "1892",
            "Quote": "“People who succeed in business aren't afraid to hear feedback from their customers -- they actually thrive from it.” ― Adam Smith"
        },
        {
            "Number": "1893",
            "Quote": "“Small Business Loans up to $500,000. Get funded in 24 Hours. We Say Yes When Banks Say No. All Industries Accepted, Lowest Rates, Poor Credit OK. Apply Now! ww.fundingeasily.com” ― John Smith"
        },
        {
            "Number": "1894",
            "Quote": "“When you're confident in what you bring to the table, you don't have to chase and beg anyone to sit down and eat.” ― Stephan Labossiere"
        },
        {
            "Number": "1895",
            "Quote": "“Dominate in your domain; You can do it.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1896",
            "Quote": "“Principle 135 from The Most Important Lessons in Economics and Finance book: \"Money is not the root of all evil and good\" (Criniti, 2014, p. 167).” ― Anthony M. Criniti IV, The Most Important Lessons in Economics and Finance: A Comprehensive Collection of Time-Tested Principles of Wealth Management"
        },
        {
            "Number": "1897",
            "Quote": "“At least half the job of CEO is communication - because of human nature. People fear what they don't know. If the board wasn't hearing that things were going well, they assumed that things must be going badly.” ― Biz Stone, Things a Little Bird Told Me: Confessions of the Creative Mind"
        },
        {
            "Number": "1898",
            "Quote": "“The crash did not cause the Depression: that was part of a far broader malaise. What it did was expose the weaknesses that underpinned the confidence and optimism of the 1920s - poor distribution of income, a weak banking structure and insufficient regulations, the economy's dependence on new consumer goods, the over-extension of industry and the Government's blind belief that promoting business interests would make America uniformly prosperous.” ― Lucy Moore, Anything Goes: A Biography of the Roaring Twenties"
        },
        {
            "Number": "1899",
            "Quote": "“Stop Pitching Product, Sell your Value!” ― Robert Kinch, Sales Made Easy for Entrepreneurs"
        },
        {
            "Number": "1900",
            "Quote": "“The physical universe grabs all your attention and gives nothing back. It’s like a sponge. ” ― Meir Ezra"
        },
        {
            "Number": "1901",
            "Quote": "“If you are deliberately trying to create a future that feels safe, you will willfully ignore the future that is likely.” ― Seth Godin, Linchpin: Are You Indispensable?"
        },
        {
            "Number": "1902",
            "Quote": "“Think about it: if someone had found a way to manipulate human choice and free will – if someone actually had that kind of power – wouldn’t it be a tad surprising if they then decided to share their secret with the masses in a book for $20? Not to mention how it would be just very slightly unethical.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1903",
            "Quote": "“Instead of blaming yourself for what others think, you should focus on what truly matters to you and how minding your own business helps you create your best self.” ― Dr Prem Jagyasi"
        },
        {
            "Number": "1904",
            "Quote": "“Profit is not the legitimate purpose of business. The legitimate purpose of business is to provide a product or service that people need and do it so well that it's profitable.” ― James Rouse"
        },
        {
            "Number": "1905",
            "Quote": "“Be wary of the man who does not offer water, charges too much for water, asks for too much water, and the one who makes water his business.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "1906",
            "Quote": "“An opportunist will pick the fruit, but won't water the plants\".” ― Yuri van der Sluis"
        },
        {
            "Number": "1907",
            "Quote": "“Do you mean Y2K? The Enron Scandal? In devastation there is opportunity, you know!” ― Rebecca McNutt, Bittersweet Symphony"
        },
        {
            "Number": "1908",
            "Quote": "“Creating value for others is the best way to receive value from others.” ― Vinay Katiyar"
        },
        {
            "Number": "1909",
            "Quote": "“If you did not create it, you cannot be the effect of it.” ― Meir Ezra"
        },
        {
            "Number": "1910",
            "Quote": "“The problem of money is not a problem in having money but a problem in accepting money. If you try to protect it, save it, you don’t have it.” ― Meir Ezra"
        },
        {
            "Number": "1911",
            "Quote": "“Risk is renamed as opportunity so people would be comfortable to take it.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1912",
            "Quote": "“But just understand the difference between a man like Reardon and a man like me. He is the old type of unpractical artist; I am the literary man of 1882. He won't make concessions, or rather, he can't make them; he can't supply the market. I--well, you may say that at present, I do nothing; but that's a great mistake, I am learning my business. Literature nowadays is a trade. Putting aside men of genius, who may succeed by mere cosmic force, your successful man of letters is your skilful tradesman. He thinks first and foremost of the markets; when one kind of goods begins to go off slackly, he is ready with something new and appetising. He knows perfectly all the possible sources of income. Whatever he has to sell, he'll get payment for it from all sorts of various quarters; none of your unpractical selling for a lump sum to a middleman who will make six distinct profits.” ― George Gissing, New Grub Street"
        },
        {
            "Number": "1913",
            "Quote": "“Be as very careful in love as you would be in business.” ― F.M. Sogamiah"
        },
        {
            "Number": "1914",
            "Quote": "“Find answers in your weakness and surprise in your strength and always remember the golden rule every failure has HOPES” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1915",
            "Quote": "“Seven seconds. That’s all the time you have to make an impression. Is your business making a good one?” ― Laura Beauparlant"
        },
        {
            "Number": "1916",
            "Quote": "“Some of these tasks are interesting. Tinkering with machines is fun. Marketing decisions, especially how to manage the Web site and AdWords, are an intellectual challenge. Some are unpleasant but lead to a satisfying conclusion, like nagging customers for past-due payments. (They've always paid me, eventually.) Some are frightening, I can change an employee's life with my decisions about pay rates and whether to hire and fire. And many are just aggravating: the taxes, insurance purchases, legal issues, and some of the employee interactions. Each layer of government, each enormous and indifferent private bureaucracy, requires its own special knowledge: the right form filled out the correct way and filed at the right time. Learning how to complete on type of tax filing tells you nothing whatsoever about how to fill out the next form. One health insurer presents a quote one way, another in an entirely different way, and both require extensive study to determine the best choice. It's like stepping back to an old, old world where every tree, every rock, every stream is inhabited by its own resident spirit, and each needs to be mollified in the correct manner. Or very bad things happen. I didn't start my company to do any of this. I had no idea, when I decided that I would make furniture in exchange for money, that this was in my future. And the strange universe of administration expands as the company grows.” ― Paul Downs"
        },
        {
            "Number": "1917",
            "Quote": "“If it isn't written down it doesn't exist.” ― Les Trachtman"
        },
        {
            "Number": "1918",
            "Quote": "“It is easy to launch a project if you have no clue about the cost and schedule.” ― Gerry Geek, Ice Breakers for Project Managers: Jokes, Quotes, and Brainteasers"
        },
        {
            "Number": "1919",
            "Quote": "“Chase the story behind the stock, not the money on the table. Money will make you rich, but the story will make you wealthy.” ― Vijay Kedia"
        },
        {
            "Number": "1920",
            "Quote": "“One of Lyle's best assets was also his biggest downfall--he was a big dick.” ― Tonya D. Floyd, The Sun Hasn't Set"
        },
        {
            "Number": "1921",
            "Quote": "“Every great athlete, artist and aspiring being has a great team to help them flourish and succeed - personally and professionally. Even the so-called 'solo star' has a strong supporting cast helping them shine, thrive and take flight.” ― Rasheed Ogunlaru"
        },
        {
            "Number": "1922",
            "Quote": "“We all know sex sells, but sexy does not always translate to authority. Be aware and beware of those only presenting the sexy imagery that entices without the skilled expertise to back it up.” ― Loren Weisman"
        },
        {
            "Number": "1923",
            "Quote": "“Quality is not for compromise.” ― Dee Dee Artner"
        },
        {
            "Number": "1924",
            "Quote": "“I'd like to run away from you, but if you didn't come and find me.... I would die.” ― Anna Fraser"
        },
        {
            "Number": "1925",
            "Quote": "“People who work in an environment where doing their best is recognized have a better chance of feeling good about their work.” ― Marilyn Suttle"
        },
        {
            "Number": "1926",
            "Quote": "“If an unexecuted idea still lingering on in your mind, the idea must be worth taking the risk.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1927",
            "Quote": "“When you work on something that only has the capacity to make you 5 dollars, it does not matter how much harder you work – the most you will make is 5 dollars.” ― idowu koyenikan, Wealth for All: Living a Life of Success at the Edge of Your Ability"
        },
        {
            "Number": "1928",
            "Quote": "“It's not about money or connections. It's the willingness to outwork and outlearn everyone.” ― Mark Cuban"
        },
        {
            "Number": "1929",
            "Quote": "“People are effective because they say no.” ― Peter Drucker"
        },
        {
            "Number": "1930",
            "Quote": "“Your words are powerful so what you say goes a long way to either establish or destroy you; this is why you should say things that God has said concerning you, not things that situations or circumstances say.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "1931",
            "Quote": "“You get to decide your company culture.” ― Osayi Emokpae Lasisi, Invest in people, invest in profits"
        },
        {
            "Number": "1932",
            "Quote": "“The ability to close sales effectively has never been confined to the last few moments of the conversation.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1933",
            "Quote": "“Everything is wrong with the physical universe if you don’t know you are creating it.” ― Meir Ezra"
        },
        {
            "Number": "1934",
            "Quote": "“The business of lying is transacted in the abode of the gullible.” ― Michael Bassey Johnson"
        },
        {
            "Number": "1935",
            "Quote": "“Apparently, sir you Chinese are far ahead of us in every respect, except that you don’t have entrepreneurs. And our nation, though it has no drinking water, electricity, sewage system, public transportation, sense of hygiene, discipline, courtesy, or punctuality, ‘’does’’ have entrepreneurs. Thousands and thousands of them. Especially in the field of technology. And these entrepreneurs—\"we\" entrepreneurs—have set up all these outsourcing companies that virtually run America now.” ― Aravind Adiga, The White Tiger"
        },
        {
            "Number": "1936",
            "Quote": "“All businesses begin and end with their company culture.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1937",
            "Quote": "“Train your new employee properly. Sounds so obvious, and yet it often doesn’t happen.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1938",
            "Quote": "“We create karma by all kinds of selfish actions.The first thing we must understand is that we are psychologically asleep.It is very difficult for us to be conscious of ourselves. We are not very aware. We must come to recognize that we do not pay attention.” ― Abhishek S, KARMA"
        },
        {
            "Number": "1939",
            "Quote": "“They have to say SOMETHING. Maria Bartiromo can't exactly look into the camera and say that the Dow is down half a percent today because of random Brownian motion.” ― Phil Rosenzweig, The Halo Effect: ... and the Eight Other Business Delusions That Deceive Managers"
        },
        {
            "Number": "1940",
            "Quote": "“Learn from the past, prepare for the future, and perform in the moment.\" (Moments: Making Your Life Count For What Matters Most, Mike Van Hoozer)” ― Mike Van Hoozer"
        },
        {
            "Number": "1941",
            "Quote": "“Happiness at work is not about eliminating all the bad stuff from your job. It’s about being happy at work even though some of these bad things are present. It’s about building your skills and your energy to fix the problems, and to create more and more positive experiences at work.” ― Alexander Kjerulf, Happy Hour is 9 to 5"
        },
        {
            "Number": "1942",
            "Quote": "“Small thinking keeps small businesses small” ― Mac Duke The Strategist"
        },
        {
            "Number": "1943",
            "Quote": "“Blaming others is an act of refusing to take responsibility. When a person can’t accept the fact or the reality, they blamed another person or the situation instead of taking accountability.” ― Dee Dee Artner"
        },
        {
            "Number": "1944",
            "Quote": "“In business, as in life, it all comes down to your passion.” ― Arshad Wahedna"
        },
        {
            "Number": "1945",
            "Quote": "“He will win who, prepared himself, waits to take the enemy unprepared.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "1946",
            "Quote": "“Willingness is an indication of where you are emotionally.” ― Meir Ezra"
        },
        {
            "Number": "1947",
            "Quote": "“You don´t need a million dollar business, you just need a million dollar team.” ― Alin Sav"
        },
        {
            "Number": "1948",
            "Quote": "“In business, people negotiate to win. They negotiate to get what they want. Maybe you're too used to that. Love is different. Love is when you are as concerned about someone else's situation as you are about your own.” ― Mitch Albom, Tuesdays with Morrie"
        },
        {
            "Number": "1949",
            "Quote": "“As economies change, so do communication skills. From these changes, a need arises for new ways to incorporate a healthy social compass into our lives.” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "1950",
            "Quote": "“Spring Of Rhythm is the best event management company from Mumbai.We have the team of Dedicated,Honest,Hard working,Creative and Well Experienced Staff.We have been consistently delevering our best result towards the flawless execution of events.We manage events across in india and abroad.We are here to fulfill your each and every requirement according to your expectation and budget.At Spring Of Rhythm your time and money are important to us and we try to go our extra mile to make you happy and full satisfied.Spring Of Rhythm is proficient in converting spectacular event plans into reality and its unmatched expertise in organizing magnificent event.Our portfolio is the strongest evidence of our capability,dedication and competence in event management.We at Spring Of Rhythm not only sign business deal but also build strong bonds with our clients.We believe that business is all about customer satisfaction and not just a mean of earning money.We as a team pride ourselves with our levels of commitment,dedication and attention to detail,taking great satisfaction with the end result.Spring Of Rhythm has distinguished itself by bringing innotive ideas in event management industry like wedding ceremony,celebrity management,musical nights,ghazal nights,classical nights,corporate events,new year bash,birthday bash,decoration and catering etc” ― Aman Jha, All About Yoga: Details of yoga with 10 types Of yoga forms and fifteen yoga asana with pictures"
        },
        {
            "Number": "1951",
            "Quote": "“In a gold rush you make the easy money selling shovels” ― Anonymous"
        },
        {
            "Number": "1952",
            "Quote": "“The commitment gap is the massive distance between “yes” and “maybe” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "1953",
            "Quote": "“The whole business is built on ego,vanity,self-satisfaction , and its total crap to pretend its not” ― George Michael, George Michael - Unplugged"
        },
        {
            "Number": "1954",
            "Quote": "“A personal brand, once local and temporal, is now global and forever. That’s the blessing and the curse of the internet with regards to your reputation.” ― Ryan Lilly, #Networking is people looking for people looking for people"
        },
        {
            "Number": "1955",
            "Quote": "“Don’t waste time worrying about work/life balance, or looking for your best self, sham “secrets” or any other snake oil being pushed by sloppy hippies who have never built a business, let alone a bankroll, or you will wake up 20 years from now poor, pissed off and primed for a midlife crisis.” ― Ari Gold, The Gold Standard: Rules to Rule By"
        },
        {
            "Number": "1956",
            "Quote": "“Time change - Moments don't.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "1957",
            "Quote": "“The goal of management is to remove obstacles.” ― Paul Orfalea, Copy This!: Lessons from a Hyperactive Dyslexic who Turned a Bright Idea Into One of America's Best Companies"
        },
        {
            "Number": "1958",
            "Quote": "“Selling without purpose is as empty as a body without a soul.” ― Yuri van der Sluis"
        },
        {
            "Number": "1959",
            "Quote": "“We can be competitive and aim to destroy our opponent or competition, but we can still respect our rivals and even be friends.” ― Ben Tolosa, Masterplan Your Success"
        },
        {
            "Number": "1960",
            "Quote": "“Although we live in a civilised society, the business world remains a jungle.” ― Mohammed Bin Rashid Al Maktoum"
        },
        {
            "Number": "1961",
            "Quote": "“Your Twitter Profile is your business card.” ― Germany Kent"
        },
        {
            "Number": "1962",
            "Quote": "“What are you doing to serve your customers a little more every day?” ― John Di Lemme, *57* Must Use Words in Every Piece of Marketing that You Do for Your Business"
        },
        {
            "Number": "1963",
            "Quote": "“He’s a businessman and sees this as the prefect chance to make a few bucks.” ― Alyson Serena Stone, Storytime"
        },
        {
            "Number": "1964",
            "Quote": "“I'm not a businessman, I'm a business, man!” ― Jay-Z"
        },
        {
            "Number": "1965",
            "Quote": "“The most radical and far-reaching solutions often need rethinking of processes and deep questioning of the status quo-and these are hard.” ― Bill Price, The Best Service Is No Service: How to Liberate Your Customers from Customer Service, Keep Them Happy, and Control Costs"
        },
        {
            "Number": "1966",
            "Quote": "“I grind in spite of your hatred, insecurity, jealousy, or fear that I might move forward. That...is what winners do.” ― Chriscinthia Blount, Making My Own Rainbows: Poems of love, life, and lamentation"
        },
        {
            "Number": "1967",
            "Quote": "“If you are not good at innovating, be smart in investing.” ― Rifhi Siddiq"
        },
        {
            "Number": "1968",
            "Quote": "“The trick is learning to frame your new ideas as tweaks of old ideas, to mix a little fluency with a little disfluency—to make your audience see the familiarity behind the surprise.” ― Derek Thompson, Hit Makers: The Science of Popularity in an Age of Distraction"
        },
        {
            "Number": "1969",
            "Quote": "“Once true passion hits you, you can recognize all the times in your life you were chasing the wrong dream. And after you've experienced that sustained fulfillment, you'll never want to settle for anything less.” ― Biz Stone, Things a Little Bird Told Me: Confessions of the Creative Mind"
        },
        {
            "Number": "1970",
            "Quote": "“SOME OF THE WEALTHIEST PEOPLE ARE THE BROKEST PEOPLE ON EARTH!” ― Qwana M. \"BabyGirl\" Reynolds-Frasier"
        },
        {
            "Number": "1971",
            "Quote": "“Trust is money.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "1972",
            "Quote": "“Even if you delegate that responsibility, ultimately you are the one responsible for how your brand is portrayed.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1973",
            "Quote": "“Business is fluid and you can always improve and progress as your time and financial resources allow, and as your learning curve shortens.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "1974",
            "Quote": "“I thought buying at the local market would be an excellent way to build positive relationships with the local villagers.” ― Eric Greitens, The Heart and the Fist: The Education of a Humanitarian, the Making of a Navy SEAL"
        },
        {
            "Number": "1975",
            "Quote": "“The reward is the ability to extract effort. ” ― Meir Ezra"
        },
        {
            "Number": "1976",
            "Quote": "“No matter what business you’re in, what your goals are, or what obstacles confront you, honesty must come first.” ― Peter Kozodoy, Honest to Greatness: How Today's Greatest Leaders Use Brutal Honesty to Achieve Massive Success"
        },
        {
            "Number": "1977",
            "Quote": "“Respect Others For Peace” ― Md. Yousuf Ali"
        },
        {
            "Number": "1978",
            "Quote": "“God is the God of multiplication and a careless attitude toward the business of the kingdom bring regret to Him” ― Sunday Adelaja"
        },
        {
            "Number": "1979",
            "Quote": "“An intelligent woman is a goldmine! She has the ability to learn, reason and understand things better and faster than her contemporaries. She is competent, alert and can reason out stuffs easily.” ― Agu Jaachynma N.E."
        },
        {
            "Number": "1980",
            "Quote": "“The most hurting response you can give to a client is \"I tried\".” ― Allan Amanyire"
        },
        {
            "Number": "1981",
            "Quote": "“the key to human development is building on who you already are” ― Tom Rath, Strengths Finder 2.0"
        },
        {
            "Number": "1982",
            "Quote": "“Success is waiting for you if you believe in your abilities to achieve it.” ― Aurora Berill"
        },
        {
            "Number": "1983",
            "Quote": "“CHOAM is business and business follows profits.” ― Frank Herbert, Dune Messiah"
        },
        {
            "Number": "1984",
            "Quote": "“Proper research into organization of interest is a step to getting there.” ― Chidi Prosper Agbugba"
        },
        {
            "Number": "1985",
            "Quote": "“How long you will live in your dreams? The time is now, it's better to go and follow them..” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "1986",
            "Quote": "“Formal business situations are likely to be the least revealing because these are the times when all of us are most likely to have our ‘game faces' on.” ― Abhishek Ratna, No Parking. No Halt. Success Non Stop!"
        },
        {
            "Number": "1987",
            "Quote": "“How you do ONE thing is how you DO everything. To achieve successful in life and business, the quickest way is to FIRST be successful of being YOU. That means you stop betraying yourself because someone told you so.” ― nick catricala"
        },
        {
            "Number": "1988",
            "Quote": "“And by making that plan you have differentiated yourself from more than ninety percent of the population. You are one of the few, who has a clear direction, a decisive plan of action.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "1989",
            "Quote": "“Worrying about the competition, is like worrying about an impending train. You can either watch in terror as the train runs over you or you can proactively step out of the way.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "1990",
            "Quote": "“Too much profit is being made at the expense of unsuspecting patients.” ― Melissa Cady, Paindemic: A Practical and Holistic Look at Chronic Pain, the Medical System, and the antiPAIN Lifestyle"
        },
        {
            "Number": "1991",
            "Quote": "“Given the choice between building a thriving, profitable business with a niche and a really boring product and putting your life savings into an intensely competitive business where youʼre likely to fail but the product is cool, the experienced bootstrapper will pick the former every time. If you find an industry filled with wannabe entrepreneurs with a dollar and a dream, run away and look for something else!” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "1992",
            "Quote": "“Good decisions can turn into disasters when communicated poorly.” ― Dianna Booher, What More Can I Say?: Why Communication Fails and What to Do about It"
        },
        {
            "Number": "1993",
            "Quote": "“The objective of a website is to bring a visitor who brings another visitor.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "1994",
            "Quote": "“Pesa ina thamani pale unapokuwa nayo, si pale unapokuwa huna, hivyo iweke mahali unapoweza kuiona: katika nyumba, katika shamba au katika elimu. Badala ya kumpa mtu pesa ili ajenge nyumba, mpe nyumba. Badala ya kumpa mtu pesa ili afanye biashara, mpe biashara. Halafu, mpe elimu afanye maamuzi ya biashara yake. Pesa ina laana na Mungu pekee ndiye anayeweza kuiondoa laana hiyo. Ni rahisi kwa tajiri kupata baraka ya pesa kwa sababu ana pesa na ana uwezo mkubwa wa kusaidia maskini. Ni vigumu kwa maskini kupata baraka ya pesa kwa sababu hana au ana uwezo mdogo wa kusaidia maskini. Mungu anaweza kuondoa laana ya pesa kupitia hisani kwa maskini, kitu ambacho aghalabu hufanywa na matajiri wenye uwezo mkubwa. Heri kutoa kitu au huduma au elimu kwa maskini kuliko pesa.” ― Enock Maregesi"
        },
        {
            "Number": "1995",
            "Quote": "“You shrink if you think good is good enough.” ― Yuri van der Sluis"
        },
        {
            "Number": "1996",
            "Quote": "“Dreams are less influential than actions and actions are less influential than results.” ― Bobby Darnell"
        },
        {
            "Number": "1997",
            "Quote": "“What would you do if you weren't afraid?” ― Sheryl Sandberg, Lean In: Women, Work, and the Will to Lead"
        },
        {
            "Number": "1998",
            "Quote": "“A great workspace is like a \"Toddler Playpen\" for entrepreneur. It allows us accomplish our dreams in a safe environment and without any major hazard or concerns...” ― Serge Pamphile"
        },
        {
            "Number": "1999",
            "Quote": "“For nearly four years you have had an Administration which instead of twirling its thumbs has rolled up its sleeves. We will keep our sleeves rolled up. We had to struggle with the old enemies of peace--business and financial monopoly, speculation, reckless banking, class antagonism, sectionalism, war profiteering. They had begun to consider the Government of the United States as a mere appendage to their own affairs. We know now that Government by organized money is just as dangerous as Government by organized mob.” ― Franklin D. Roosevelt"
        },
        {
            "Number": "2000",
            "Quote": "“Busyness does not make you money, business do. Are you running a busyness or a business?” ― Saji Ijiyemi"
        },
        {
            "Number": "2001",
            "Quote": "“You don't need permission to move on.” ― Thebe Kegomoditswe"
        },
        {
            "Number": "2002",
            "Quote": "“I hear you're a conspiracy nut. Well, this is the conspiracy, kid. It ain't ancient gods an' aliens an' coded shit on the dollar bill. It ain't even a secret, it's somthin' ordinary folks do for a livin' every day of the week. It's business.” ― Garth Ennis, The Boys, Volume 3: Good For The Soul"
        },
        {
            "Number": "2003",
            "Quote": "“Conflict is just another chance for agreement.” ― Ken Poirot, Mentor Me: GA=T+E—A Formula to Fulfill Your Greatest Achievement"
        },
        {
            "Number": "2004",
            "Quote": "“Entrepreneurship is not a theory, it is an experiment.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2005",
            "Quote": "“Feed Hansel and Gretel one breadcrumb at a time. Don't present the witch and the oven in one go.” ― Trevor Carss"
        },
        {
            "Number": "2006",
            "Quote": "“If you think you are going to be brain washed, then let me shock you, I was brain washed too and I became a multi millionaire. The question is, wouldn't you rather join the league of the brainwashed or stay put?” ― Olawale Daniel"
        },
        {
            "Number": "2007",
            "Quote": "“Earn your stripes.” ― Llewellyn Devereaux, The Mastery Code"
        },
        {
            "Number": "2008",
            "Quote": "“Validate the willingness not the action.” ― Meir Ezra"
        },
        {
            "Number": "2009",
            "Quote": "“Quotes = Success Music = Success Failure = Success Loyalty = Success Books = Success Mistakes = Success ... These are the lessons for today, try to put them in your bag and start using them one by one!” ― Deyth Banger"
        },
        {
            "Number": "2010",
            "Quote": "“Social context and NOT individual abilities drives performance, success or failure of a team or a project.” ― Dr. Dragos, Engineering Success: The True Meaning of Leadership and Team Building"
        },
        {
            "Number": "2011",
            "Quote": "“What drives winning? Attitude? Vision? Persistence? Hard work? Discipline? Or is it a combination of above and more.” ― Arshad Wahedna"
        },
        {
            "Number": "2012",
            "Quote": "“The ultimate goal is the goal to succeed.” ― Arshad Wahedna"
        },
        {
            "Number": "2013",
            "Quote": "“No matter how good we get at solving environmental problems, it’s not enough to create a truly sustainable economy unless we address the social challenges that imperil sustainability. Foremost among those challenges are inequality and poverty.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "2014",
            "Quote": "“I want to say right here that the easiest way in the world to make enemies is to hire friends.” ― George Lorimer, Letters from a Self-Made Merchant to His Son"
        },
        {
            "Number": "2015",
            "Quote": "“Because words have deep meaning, Tweets have power.” ― Germany Kent"
        },
        {
            "Number": "2016",
            "Quote": "“Understanding who isn’t your ideal customer sometimes helps you better clarify who is.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2017",
            "Quote": "“At the heart of excessive individualism is a broken heart” ― Robert Holden, Success Intelligence"
        },
        {
            "Number": "2018",
            "Quote": "“Nobody fails as often as an economist, a meteorologist, and a fortuneteller.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2019",
            "Quote": "“In life, most short cuts end up taking longer than taking the longer route.” ― Suzy Kassem"
        },
        {
            "Number": "2020",
            "Quote": "“Mma Ramotswe tucked the cheque safely away in her bodice. Modern business methods were all very well, she thought, but when it came to the safeguarding of money there were some places which had yet to be bettered.” ― Alexander McCall Smith, Morality for Beautiful Girls"
        },
        {
            "Number": "2021",
            "Quote": "“If you are not EXCITED enough at your present life its mean your future is not EXITING. Excitement will give you ENTHUSIASM and enthusiasm will give you a positive energetic LIFE STYLE which could give you a successful exiting life…” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "2022",
            "Quote": "“Verslo reikaluose neapsimoka įsižeisti.” ― Herbjørg Wassmo, Karnas arv"
        },
        {
            "Number": "2023",
            "Quote": "“You can build a business, or you can run it, but there’s only two ways it can be run, you can run it straight, or you can run it into the ground.” ― John Adrian Robinson"
        },
        {
            "Number": "2024",
            "Quote": "“To paraphrase Einstein, insanity is expecting employees to do one thing while rewarding them for doing something else.” ― Robert G. Thompson, Hooked on Customers: The Five Habits of Legendary Customer-Centric Companies"
        },
        {
            "Number": "2025",
            "Quote": "“Your busyness cannot stop God's business to save his children.” ― tirumala"
        },
        {
            "Number": "2026",
            "Quote": "“I will not let those, who cannot recognise how I can be of service, dissuade me from showing them how I can help.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2027",
            "Quote": "“Improvement is not enough, you also needs innovation.” ― Amit Kalantri"
        },
        {
            "Number": "2028",
            "Quote": "“If someone gives you something, you can lose. If you can create it, you can never lose.” ― Meir Ezra"
        },
        {
            "Number": "2029",
            "Quote": "“The thing about Web companies is there's always something severely fucked-up. There is always an outage, always lost data, always compromised customer information, always a server going offline. You work with these clugey internal tools and patch together work-arounds to compensate for the half-assed, rushed development, and after a while the fucked-upness of the whole enterprise becomes the status quo. VPs insecure that they're not as in touch as they need to be with conditions on the ground insert themselves into projects midstream and you get serious scope creep. You present to the world this image that you're a buttoned-down tech company with everything in its right place but once you're on the other side of the firewall it looks like triage time in an emergency room, 24/7. Systems break down, laptops go into the blue screen of death, developers miskey a line of code, error messages appear that mean absolutely nothing. The instantaneousness with which you can fix stuff creates a culture that works by the seat of its pants. I swear the whole Web was built by virtue of developers fixing one mistake after another, constantly forced to compensate for the bugginess of their code.” ― Ryan Boudinot, Blueprints of the Afterlife"
        },
        {
            "Number": "2030",
            "Quote": "“In the midst of chaos, there is also opportunity” ― Sun-Tzu, A Arte da Guerra"
        },
        {
            "Number": "2031",
            "Quote": "“Everyone is selling something, if you can't see what people are selling, maybe you're the cart.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "2032",
            "Quote": "“If you don't understand the principles of giving, money will make you poor.” ― Alin Sav"
        },
        {
            "Number": "2033",
            "Quote": "“Not everyone understand everything.” ― Dee Dee Artner"
        },
        {
            "Number": "2034",
            "Quote": "“People are hungry for success without work.” ― Alin Sav"
        },
        {
            "Number": "2035",
            "Quote": "“Entertainment is business: the business of fucking art in the face.” ― Eugene Mirman, The Will to Whatevs: A Guide to Modern Life"
        },
        {
            "Number": "2036",
            "Quote": "“To turn hours into minutes, turn your employment into enthusiasm.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2037",
            "Quote": "“The freedom of speech is the mother of all those freedoms in the modern democracy. This freedom has completely conquered the new communication technologies.” ― Maxim Behar, The Global PR Revolution: How Thought Leaders Succeed in the Transformed World of PR"
        },
        {
            "Number": "2038",
            "Quote": "“The smaller fry disappears while the bigger one still rules in the business world and also in other areas like politics.” ― Girdhar Joshi, Some Mistakes Have No Pardon"
        },
        {
            "Number": "2039",
            "Quote": "“You are as alive as you can give and receive…” ― Meir Ezra"
        },
        {
            "Number": "2040",
            "Quote": "“bonuses don't really motivate workers. Once they reach a certain baseline salary, money is no longer the main driver. They need something more. Reams have been written about the Millennial generation's hunter for impact and meaning at work. In one way, I think Millennials (and Generation Z) are not so different from the rest of us. They just voice the desires the rest of us have learned to keep quiet.” ― Jacob Morgan, The Employee Experience Advantage: How to Win the War for Talent by Giving Employees the Workspaces They Want, the Tools They Need, and a Culture They Can Celebrate"
        },
        {
            "Number": "2041",
            "Quote": "“Realize that employees and the customers both have to be engaged, at the same time, to move your business forward for sustainable success.” ― Robert G. Thompson, Hooked on Customers: The Five Habits of Legendary Customer-Centric Companies"
        },
        {
            "Number": "2042",
            "Quote": "“Both terrorism and insurance sell fear -- and business is business” ― Liam McCurry, Terminal Policy"
        },
        {
            "Number": "2043",
            "Quote": "“A well-written article does not make what was written factual or something to subscribe to. Fiction does not become fact because it looks good. Fiction does not become fact because you wish it were true. Fiction does not become fact because it has turned into popular opinion. Remember this before reading the news, views, opinions or commentary.” ― Loren Weisman"
        },
        {
            "Number": "2044",
            "Quote": "“Businesses around the world can only thrive more by making use of Artificial Intelligence and Machine Learning in order to make more profit and satisfy their customers’ needs.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "2045",
            "Quote": "“Don’t learn literature from a history teacher.” ― Vijay Kedia"
        },
        {
            "Number": "2046",
            "Quote": "“It was actually very difficult., especially during the first five years of the start-up stage, when all the odds seemed to be against us—this is probably true for most entrepreneurs. To succeed, you really have to put your heart and soul into it. (p. 71)” ― Injap Sia, Life Principles"
        },
        {
            "Number": "2047",
            "Quote": "“Neither inherently good nor evil, electronic communication platforms are 100 percent dependent on user input.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "2048",
            "Quote": "“Sometimes, if you get too close to a subject you can miss what’s most important.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2049",
            "Quote": "“Know Yourself: Grow Your Wealth” ― Cindy Ann Peterson, My Style, My Way: Top Experts Reveal How to Create Yours Today"
        },
        {
            "Number": "2050",
            "Quote": "“Harness your curiosity to initiate conversations and open avenues of dialogue.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "2051",
            "Quote": "“We make and create riches and wealth to give 'em all away .... before we expire” ― H.Emma"
        },
        {
            "Number": "2052",
            "Quote": "“It is clear that both at home and abroad producers have been unwilling to trust their fortunes entirely to the unrestricted play of competition. Both in world and domestic markets businessmen have sought security by substituting collective controls for the free play of market forces.” ― George W. Stocking, Cartels in Action: Case Studies in International Business Diplomacy"
        },
        {
            "Number": "2053",
            "Quote": "“Why do some brands grow explosively when others (that could be thriving) die a lonely and forgettable death?” ― David Brier"
        },
        {
            "Number": "2054",
            "Quote": "“You can win in business by playing checkers until someone sneaks in one night after you’ve closed for the day and flips the board.” ― Mark Miller, Chess, Not Checkers: Elevate Your Leadership Game"
        },
        {
            "Number": "2055",
            "Quote": "“This meant that Alexander's side business was actually the revenge business. Though to be completely honest, he had just the one customer, himself.” ― Cynthia Hand, My Plain Jane"
        },
        {
            "Number": "2056",
            "Quote": "“My business is to forgive others.” ― sir kristian goldmund aumann"
        },
        {
            "Number": "2057",
            "Quote": "“Human TOUCH: · T - treat people with love and respect · O - over-deliver and under promise · U -understand first, respond later · C - connect through open communication · H - humbly serve others” ― Farshad Asl"
        },
        {
            "Number": "2058",
            "Quote": "“When you frame your actions around what you fear and what you think you can't do, those are the results you'll achieve.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "2059",
            "Quote": "“You may not attain the highest height with one leap but my dear; you will reach your destination.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2060",
            "Quote": "“Where there is a dirt - we can clean! Yes true but none cleans garbage dumps!!” ― V Narayanan"
        },
        {
            "Number": "2061",
            "Quote": "“Be the kind of person who catches the shit before it hits the fan, not the one who scrapes it off afterwards.” ― Jonas Eriksson, The Wake-Up Call"
        },
        {
            "Number": "2062",
            "Quote": "“They call it \"business\" because it does not become successful by a person's \"idleness\". Go get busy if you want to do business; but be busy for the right reasons!” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "2063",
            "Quote": "“If we only have great companies, we will merely have a prosperous society, not a great one. Economic growth and power are the means, not the definition, of a great nation.” ― Jim Collins, Good to Great and the Social Sectors: A Monograph to Accompany Good to Great"
        },
        {
            "Number": "2064",
            "Quote": "“One needs to have tremendous courage to do business. If courage is lost, then the businesss will fail.” ― Dada Bhagwan, Aptavani 05 & 06"
        },
        {
            "Number": "2065",
            "Quote": "“If you don’t know your tendencies and can’t analyze when you are most effective, then how can you get the most done in the least amount of time with the best results?” ― Loren Weisman, The Artist's Guide to Success in the Music Business: The “Who, What, When, Where, Why & How” of the Steps that Musicians & Bands Have to Take to Succeed in Music"
        },
        {
            "Number": "2066",
            "Quote": "“20% of management theories are responsible for 80% of results. That’s assuming the Pareto Principle makes the cut.” ― Ryan Lilly"
        },
        {
            "Number": "2067",
            "Quote": "“A Bombshell’s constant struggle is living up to her God given potential while also battling in her mind the difference between her expectations and the world’s expectations.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2068",
            "Quote": "“I may not be the smartest fellow in the world, but I can sure pick the smartest people to do business with and size them up very fast.” ― Ziad K. Abdelnour, Economic Warfare: Secrets of Wealth Creation in the Age of Welfare Politics"
        },
        {
            "Number": "2069",
            "Quote": "“Memories of the past are what drive us, whether to a life of beauty or a life of insanity is up to us.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "2070",
            "Quote": "“Smart Entrepreneurs Are Adopting Artificial Intelligence Swiftly to Keep Booming” ― ONPASSIVE"
        },
        {
            "Number": "2071",
            "Quote": "“If you believe that business is driven wholly by the people within it, then you’ll agree that getting brutally honest with and about the people in your workplace is critical to achieving your goals.” ― Peter Kozodoy, Honest to Greatness: How Today's Greatest Leaders Use Brutal Honesty to Achieve Massive Success"
        },
        {
            "Number": "2072",
            "Quote": "“You are afraid your problem will go away and expose the lie that there are no problems.” ― Meir Ezra"
        },
        {
            "Number": "2073",
            "Quote": "“You can sponsor more people to your network marketing business if you say the truth.” ― Olawale Daniel, 10 Ways to Sponsor More Downlines in Your Network Marketing Business"
        },
        {
            "Number": "2074",
            "Quote": "“Practice takes practice.” ― Sharon Rowe, The Magic of Tiny Business: You Don't Have to Go Big to Make a Great Living"
        },
        {
            "Number": "2075",
            "Quote": "“Suppose you want something very much. You think that if you don’t get that something, happiness won’t be possible. You get caught in that idea. But, in reality, there are people who have that thing who are miserable, and there people who don’t have that thing who are perfectly happy.” ― Thich Nhat Hanh, Fidelity: How to Create a Loving Relationship That Lasts"
        },
        {
            "Number": "2076",
            "Quote": "“If the whole team isn't winning, then you're not winning.” ― Cliff Hannold"
        },
        {
            "Number": "2077",
            "Quote": "“A business absolutely devoted to service will have only one worry about profits. They will be embarrassingly large.” ― Henry Ford"
        },
        {
            "Number": "2078",
            "Quote": "“if we want to eliminate terrorism we have to destroy the business model of fear and weapon” ― Mohammed Zaki Ansari, \"Zaki's Gift Of Love\""
        },
        {
            "Number": "2079",
            "Quote": "“Instead of selling to your customers, help them buy.” ― Mahyar Mottahed"
        },
        {
            "Number": "2080",
            "Quote": "“The businessman is only tolerable so long as his gains can be held to bear some relation to what, roughly and in some sense, his activities have contributed to society.” ― John Maynard Keynes"
        },
        {
            "Number": "2081",
            "Quote": "“Everybody sells something to somebody every day, whether it’s a product, a service or just a case of making sure that they get their own way.” ― Chris Murray"
        },
        {
            "Number": "2082",
            "Quote": "“We have to remember that making money is essentially exchanging one form of energy for another form of energy - we are exchanging our ideas, our creativity, our passions, for money...we are asking people to take money out of their bank accounts and put into ours because our ideas and our creativity is more valuable to them than their money.” ― Osayi Emokpae Lasisi, Billionaire Mindset (for MoneyMaking Mommies): How to make your Billions and build your legacy"
        },
        {
            "Number": "2083",
            "Quote": "“One plus one makes two but two monologues do not make a dialogue. Of all the traits, characteristics, attributes and habits of today’s customers, the one that has serious consequences for businesses is this—today’s customer does not want to be just spoken to. She wants to be engaged in a dialogue. Today’s consumer expects to be part of the conversation about the product and/or service on offer. Today’s customer does not want to be fed with advertisements. Collaboration is what excites today’s customer.” ― J. N. HALM, CUSTOMER ROMANCE: A New Feel of Customer Service"
        },
        {
            "Number": "2084",
            "Quote": "“Those who think that you have no BOSS in your own business! Indeed, you have many bosses, “ THE CLIENTS” ― Dr Rafiq Dar"
        },
        {
            "Number": "2085",
            "Quote": "“One competent go-getter is worth One Hundred incompetent do-nothings. - Kailin Gow, On Hiring a Winning Team” ― Kailin Gow"
        },
        {
            "Number": "2086",
            "Quote": "“Regardless of how the PR business may have developed over the years, we always used to be a transmission, a sort of bridge, between our clients and their clients.” ― Maxim Behar, The Global PR Revolution: How Thought Leaders Succeed in the Transformed World of PR"
        },
        {
            "Number": "2087",
            "Quote": "“Change is not always easy when patterns in our lives have existed so long.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "2088",
            "Quote": "“If you work hard, and become successful, it does not necessarily mean you are successful because you worked hard, just as if you are tall with long hair it doesn't mean that you would be a midget if you were bald.” ― Lemony Snicket"
        },
        {
            "Number": "2089",
            "Quote": "“We are always waiting for the perfect brief from the perfect client. It almost never happens [...] Whatever is on your desk right now, that's the one. Make it the best you possibly can.” ― Paul Arden"
        },
        {
            "Number": "2090",
            "Quote": "“When only one party makes a profit that's robbery when all parties make profit that's business.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2091",
            "Quote": "“People have marveled at the fact that I didn’t start McDonald’s until I was fifty-two years old, and then I became a success overnight. But I was just like a lot of show business personalities who work away quietly at their craft for years, and then, suddenly, they get the right break and make it big. I was an overnight success all right, but thirty years is a long, long night.” ― Ray Kroc, Grinding It Out: The Making of McDonald's"
        },
        {
            "Number": "2092",
            "Quote": "“Integrity is not just a smart and moral way to navigate your personal life. It’s also part of your professional branding, and it will inevitably affect your business success.” ― Joe M. Turner"
        },
        {
            "Number": "2093",
            "Quote": "“You have a competitor, the moment you see the competition” ― Kudretullah Sak"
        },
        {
            "Number": "2094",
            "Quote": "“While some qualities are born within a person, others need to be made.” ― Anas O Hamshari B Sc, Bringing the World of Super Luxury to Kuwait: 2014 Dissertation by Anas O. H. Hamshari, from the European School of Economics in Florence, Italy"
        },
        {
            "Number": "2095",
            "Quote": "“Discipline with balance conquers the world.” ― Ben Tolosa, Masterplan Your Success"
        },
        {
            "Number": "2096",
            "Quote": "“If you sound like a contestant from The Apprentice or if the customer believes that they are being sold AT, you have already failed.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2097",
            "Quote": "“Want to clear that people like me are always looking for the worth not for salaries. Beside from your all good things, I found the mismatch of salary & worth pair, so I decided to move on. But frankly I missed you, I have said already. If you remember I said you that I can come there on maintenance day (on Friday) n can help you in any work without any expectation. That option could be better for me & you too. Anyway, I got the point about recovery management now. If you don’t have any problem, then you can send more information about the same (externalwork30@yahoo.com). I would like to work for the employer like you. Side by side I’ll get another experience. Let’s hope for the best if you don’t have any problem.” ― Ex-employee"
        },
        {
            "Number": "2098",
            "Quote": "“People don't buy what you do, they buy why you do it.” ― Simon Sinek, Start with Why: How Great Leaders Inspire Everyone to Take Action"
        },
        {
            "Number": "2099",
            "Quote": "“The entrepreneur is comfortable raising money, hiring and firing, renting more office space than she needs right now. The entrepreneur must dream big and persuade others to share her dream. The freelancer, on the other hand, can focus on craft. She can most easily build her business by doing great work, consistently.” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "2100",
            "Quote": "“When you run a business, your business is totally different from others. This means your lifestyle, your routine and what you make out of your business is totally different. You lead a different life compared to those in your neighborhood and the people you knew around your business circle.” ― Dee Dee Artner"
        },
        {
            "Number": "2101",
            "Quote": "“If the people in an organization think the company is small, they will act that way. If they think the company is big, they will act that way.” ― David J. Greer, Wind In Your Sails"
        },
        {
            "Number": "2102",
            "Quote": "“Copy cats may seem good at what they are doing, but they will never find a spot at the top.” ― Cyc Jouzy"
        },
        {
            "Number": "2103",
            "Quote": "“Being an affirming person and building an affirming culture in your organization will literally shift your organization into a whole new place and onto a whole new level.” ― Ford Taylor, Relactional Leadership: When Relationships Collide with Transactions"
        },
        {
            "Number": "2104",
            "Quote": "“If you net a profit, reward the \"producers.\" Allocate a portion to innovation & future growth. Place a portion in cash reserves to weather storms.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "2105",
            "Quote": "“Building winning strategies is the leadership success imperative.” ― Brad Chase, Strategy First: How Businesses Win Big"
        },
        {
            "Number": "2106",
            "Quote": "“Research conquers doubt. It aligns everyone around the incontestable. Research is the key to clarity—in startups, enterprises, and life itself.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "2107",
            "Quote": "“Find your hidden talents, your hidden potentials, your hidden purposes and convert them into a better business for the benefit of the entire world.” ― Israelmore Ayivor, Dream Big!: See Your Bigger Picture!"
        },
        {
            "Number": "2108",
            "Quote": "“Origins should never be a barrier to success. A modest start in life can be a help more than a hindrance. If you're examining successful people, look at their mother and father, study what they did, for clues about energy and motivation.” ― Alex Ferguson, Alex Ferguson: My Autobiography"
        },
        {
            "Number": "2109",
            "Quote": "“The concept of “work-life balance” is a fleeting idea for a Bombshell. Instead, a focus on work-life success—where her time and energy shifts based on the rotating demands of each area of her life—is far more realistic.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2110",
            "Quote": "“Passive Income: It's not just about real estate” ― Chris Guillebeau, The Money Tree: A Story about Finding the Fortune in Your Own Backyard"
        },
        {
            "Number": "2111",
            "Quote": "“Practice holding labels lightly as leaders so you have greater range in your behaviors and are more adaptable and effective in a greater range of situations.” ― Henna Inam, Wired for Authenticity: Seven Practices to Inspire, Adapt, & Lead"
        },
        {
            "Number": "2112",
            "Quote": "“Whilst people have answered questions, I have only heard my own voice thinking of the next question.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2113",
            "Quote": "“Having an understanding of the 'why' will help with having an understanding of the 'how'.” ― Bobby Darnell, Time For Dervin - Living Large In Geiggityville"
        },
        {
            "Number": "2114",
            "Quote": "“Fail soon so that you can succeed sooner.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2115",
            "Quote": "“I have never seen anything more fertile than courage in life.” ― Serhat Beyaz KÖROĞLU"
        },
        {
            "Number": "2116",
            "Quote": "“Mom has the Touch. She knows what flowers go with what occasions, what hors d'oeuvres work with what people. She believes passionately in the power of food to heal, restore, and stimulate relationships, and she has built a following of loyal customers who really hope she's right. If she's wrong, says Sonia, no one wants to know.” ― Joan Bauer, Thwonk"
        },
        {
            "Number": "2117",
            "Quote": "“Now,\" said Benjy mouse, \"to business.\" Ford and Zaphod clinked their glasses together. \"To business!\" they said. \"I beg your pardon?\" said Benjy. Ford looked round. \"Sorry, I thought you were proposing a toast,\" he said.” ― Douglas Adams, The Hitchhiker's Guide to the Galaxy"
        },
        {
            "Number": "2118",
            "Quote": "“Love is the surprising emotion that company builders cannot ignore.” ― Brian de Haaff, Lovability: How to Build a Business That People Love and Be Happy Doing It"
        },
        {
            "Number": "2119",
            "Quote": "“Back up your claims with the proof to highlight the authority in them. This helps you stand out over the false hype that so many claim and never back up.” ― Loren Weisman"
        },
        {
            "Number": "2120",
            "Quote": "“Ready? No one is ever ready, my boy. But some do what they plan to do and some never will. The difference between the two is that the first group understand that they need to start somewhere, so they do so. Straight away” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2121",
            "Quote": "“The government is in the business of misinformation of the masses.” ― Steven Magee"
        },
        {
            "Number": "2122",
            "Quote": "“We all need salespeople who deliver value that wasn’t there before they arrived.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2123",
            "Quote": "“There is no alternative way, so far discovered, of improving the lot of the ordinary people that can hold a candle to the productive activities that are unleashed by a free enterprise system...” ― Milton Friedman"
        },
        {
            "Number": "2124",
            "Quote": "“Some activities may look attractive, but you don’t have any business dating them, else they break you up. It may be good, but not right. Flee from good things and do right things!” ― Israelmore Ayivor, Daily Drive 365"
        },
        {
            "Number": "2125",
            "Quote": "“Shame on the misguided, the blinded, the distracted and the divided. Shame. You have allowed deceptive men to corrupt and desensitize your hearts and minds to unethically fuel their greed.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "2126",
            "Quote": "“Dance with the one that brought you” ― Hannah Hart"
        },
        {
            "Number": "2127",
            "Quote": "“You know you're doing something right when you've haters around every corner.” ― Cliff Hannold"
        },
        {
            "Number": "2128",
            "Quote": "“No nation can prosper in anything without the input and the ideas from its youths.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "2129",
            "Quote": "“Money amplifies what type of person you are in the world.” ― Sam Joseph Haim"
        },
        {
            "Number": "2130",
            "Quote": "“when you become addict in to MATERIAL things in life then the TRUE natural life start to run away from you, YES! it's can give you certain pleasure in the society but in the same time it will sabotage your true HAPPINESS of life which we could have simply with GRATITUDE and FORGIVENESS” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "2131",
            "Quote": "“What is the true cost of a purchasing decision that goes wrong?” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2132",
            "Quote": "“Would you rather have a smaller portion of something large or the whole portion of a business that is not going anywhere” ― Fritz Shoemaker"
        },
        {
            "Number": "2133",
            "Quote": "“It takes healthy, resilient leaders and employees to achieve great results.” ― Sue Tetzlaff, The Employee Experience: A Capstone Guide to Peak Performance"
        },
        {
            "Number": "2134",
            "Quote": "“Greatness means setting out to make some difference somewhere to someone in someplace.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "2135",
            "Quote": "“People often ask if I pay my speakers to speak. No I don’t. If you are able to explain the benefits of the virtual summit to the speaker (which we address in chapter 5) then it will be easy for you to get the caliber of speakers you want.” ― Osayi Emokpae Lasisi, Your First Virtual Summit: Everything you need to know to create your first successful Virtual Summit"
        },
        {
            "Number": "2136",
            "Quote": "“Never allow your current circumstances dictate your level of happiness! Remember that this too shall pass! Rejoice always!” ― Mrs.Mignon T.Padilla"
        },
        {
            "Number": "2137",
            "Quote": "“Our instruments of communication have changed, our ways of communication have changed, and, most important, the ownership of media has changed—because now we all own media.” ― Maxim Behar"
        },
        {
            "Number": "2138",
            "Quote": "“It saddens me to note that there will always be con artists and charlatans in the world. Men who aim to fool the public by clothing themselves in the robes of experts.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2139",
            "Quote": "“As Waterman has noted: In today’s business environment, more than in any preceding era, the only constant is change. Successful organizations effectively manage change, continuously adapting their bureaucracies, strategies, systems, products, and cultures to survive the shocks and prosper from the forces that decimate the competition.” ― Fred David, Strategic Management:Concepts and Cases, Global Edition"
        },
        {
            "Number": "2140",
            "Quote": "“By presenting yourself in the best way you can, you can relieve yourself from worrying about how other people perceive you” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "2141",
            "Quote": "“This is how you must be. You must become as evangelical about your promised outcome as he is about his. You must believe that you, and you alone, have the solution to your prospects problems. Even if they do not recognise those problems themselves.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2142",
            "Quote": "“When the base of a brand and the story is rooted in a foundation of authenticity, authority, and respect, all other elements and aspects become streamlined” ― Create Wealth Communities"
        },
        {
            "Number": "2143",
            "Quote": "“Time management is reactive, whereas time strategy is proactive.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2144",
            "Quote": "“What I realized much later, paradoxically, is that by trying to fit in, I was strengthening the culture that made me feel like I didn’t fit in.” ― Melinda Gates, The Moment of Lift: How Empowering Women Changes the World"
        },
        {
            "Number": "2145",
            "Quote": "“There Are No Secrets of Success, It Is The Result of Preparation, Hard Work And Learning From Failures...” ― Axay D. Bhisikar"
        },
        {
            "Number": "2146",
            "Quote": "“What strengthens my résumé is more responsibility — not a bigger title.” ― Ron Caoua"
        },
        {
            "Number": "2147",
            "Quote": "“It's alright to keep and open mind, but at a certain point—once you have thoroughly completed your homework—you have to learn how to stop and focus on intensely and passionately executing these goals step by step. You have to repel the distractions.” ― Injap Sia, Life Principles"
        },
        {
            "Number": "2148",
            "Quote": "“In order to produce, you must first be ethical. ” ― Meir Ezra"
        },
        {
            "Number": "2149",
            "Quote": "“The more time you spend judging others, the less time you spend building your dream.” ― henri nyakarundi, My African Dream: One Man's Journey Back Home"
        },
        {
            "Number": "2150",
            "Quote": "“I pick my technology like I picked my husband. It has to complement, not complicate, my life.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2151",
            "Quote": "“Regret is a lifestyle disease of equity investing.” ― Vijay Kedia"
        },
        {
            "Number": "2152",
            "Quote": "“Truthfulness is the golden thread that binds good lives, good relationships, and our very legacy.” ― John Manning, The Disciplined Leader: Keeping the Focus on What Really Matters"
        },
        {
            "Number": "2153",
            "Quote": "“People are going out to earn when circumstances are not favourable. Actually, that is when they should do devotional worship (bhakti).” ― Dada Bhagwan, Avoid Clashes!"
        },
        {
            "Number": "2154",
            "Quote": "“If you put fences around people, you get sheep.” ― William L. McKnight"
        },
        {
            "Number": "2155",
            "Quote": "“Be the person you would do anything for. Be the person you will not let down. It’s time to respect yourself and your dream; both truly deserve that respect.” ― Loren Weisman"
        },
        {
            "Number": "2156",
            "Quote": "“If you are... saying the same things as everyone else… sharing the same links as everyone else… posting the same quotes as everyone else… and putting up the same pictures as everyone else… Why should anyone think you are any different than everyone else?” ― Loren Weisman"
        },
        {
            "Number": "2157",
            "Quote": "“Someone may have all the technical knowledge, scientific intellect and business know-how but when he/she decides to choose laziness, excuses, procrastination, complaining and other bad attitudes, his/her relevance is meaningless.” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "2158",
            "Quote": "“The fate of your company is in the hands of your people. Train them well.” ― Roy H. Williams, The Wizard of Ads"
        },
        {
            "Number": "2159",
            "Quote": "“Metrics, and especially averages, encourage you to focus on the middle of a market, but innovation happens at the extremes.” ― Rory Sutherland, Alchemy: The Dark Art and Curious Science of Creating Magic in Brands, Business, and Life"
        },
        {
            "Number": "2160",
            "Quote": "“There's a story behind every \"I don't believe in love\" \"Period” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "2161",
            "Quote": "“While a mission statement speaks to why a company exists, a vision statement communicates what you want to accomplish in the future.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2162",
            "Quote": "“There’s enough money to be made in the centre of the court, why mess around the edges” ― Fritz Shoemaker"
        },
        {
            "Number": "2163",
            "Quote": "“You have enemies the moment you have success. Our job is finding a way to do business with them. Everyone wants something.” ― J.M. Lawler, The River and the Ravages"
        },
        {
            "Number": "2164",
            "Quote": "“You begins with 'Y'-so ask, observe, and listen.” ― Ken Poirot, Mentor Me: GA=T+E—A Formula to Fulfill Your Greatest Achievement"
        },
        {
            "Number": "2165",
            "Quote": "“Unhealthy habits and lifestyles reduce your productivity, cost your business (which, if you’re self-employed, is costing you), and create cyclical patterns of dysfunction and general dissatisfaction.” ― Melissa Steginus, Self Care at Work: How to Reduce Stress, Boost Productivity, and Do More of What Matters"
        },
        {
            "Number": "2166",
            "Quote": "“Do you understand that ‘soft skills’ are now the hard money answers?” ― Fritz Shoemaker"
        },
        {
            "Number": "2167",
            "Quote": "“Caring and a sense of purpose evoke better performance than pressure and fear. The idea that only obsessive egomaniacs can produce breakthroughs is nonsense.” ― Brian de Haaff, Lovability: How to Build a Business That People Love and Be Happy Doing It"
        },
        {
            "Number": "2168",
            "Quote": "“Successful business is always almost dishonest” ― Bangambiki Habyarimana, The Great Pearl of Wisdom"
        },
        {
            "Number": "2169",
            "Quote": "“without the mind the body is not capable of delivering anything beyond an average performance.” ― David Amerland, The Sniper Mind: Eliminate Fear, Deal with Uncertainty, and Make Better Decisions"
        },
        {
            "Number": "2170",
            "Quote": "“Disrupting yourself is critical to avoiding stagnation, being overtaken by low-end entrants (i.e., younger, smarter, faster workers), and fast-tracking your personal and career growth.” ― Whitney Johnson, Disrupt Yourself: Putting the Power of Disruptive Innovation to Work"
        },
        {
            "Number": "2171",
            "Quote": "“A decision is only as strong as the belief standing behind it” ― Isaiah Hankel, Black Hole Focus: How Intelligent People Can Create a Powerful Purpose for Their Lives"
        },
        {
            "Number": "2172",
            "Quote": "“The only principle of Success in Life :\"You must be present to win.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2173",
            "Quote": "“Managing to follow through for a day is good. But, managing to follow through every day, for days, weeks and months creates authentic and consistent results.” ― Loren Weisman"
        },
        {
            "Number": "2174",
            "Quote": "“A combination of more convenience, better service, aggressive pricing, and better results will make you irresistible to some people. It wonʼt work for everyone. Some folks may never switch. But thatʼs okay. You donʼt need everyone. Just enough to keep you busy and the cash flowing!” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "2175",
            "Quote": "“Automation is cost cutting by tightening the corners and not cutting them.” ― Haresh Sippy"
        },
        {
            "Number": "2176",
            "Quote": "“Yes, I think it's okay to abandon the big, established, stuck tribe. It's okay to say to them, \"You're not going where I need to go, and there's no way I'm going to persuade all of you to follow me. So rather than standing here watching the opportunities fade away, I'm heading off. I'm betting some of you, the best of you, will follow me.” ― Seth Godin, Tribes: We Need You to Lead Us"
        },
        {
            "Number": "2177",
            "Quote": "“I always have my own opinion before my boss says his.” ― Gerry Geek"
        },
        {
            "Number": "2178",
            "Quote": "“Nothing happens to a business growth until someone sells its product.” ― David W. Wang, Cash in on Cloud Computing"
        },
        {
            "Number": "2179",
            "Quote": "“You are an immortal being. ” ― Meir Ezra"
        },
        {
            "Number": "2180",
            "Quote": "“When he is dissected after his death,\" a disrespectful interpreter said of a foreign dignitary, \"a million predicates will be found in his stomach: those he swallowed in the past decades without saying them.” ― Kató Lomb"
        },
        {
            "Number": "2181",
            "Quote": "“It is essential for a sustainable economy to see natural resources as an asset, and wasteful or harmful use of those resources as risks.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "2182",
            "Quote": "“Note to the wise: whenever someone insists that he wants to buy something from you, but tells you there’s no real value in it yet, two things are happening: he’s lying, and you’re being taken.” ― Michael A. Stackpole"
        },
        {
            "Number": "2183",
            "Quote": "“A person can’t have enough money or more than that for as long as he can’t imagine having it all and losing it all at will. It is the fear of losing money that maintains an individual in a perpetual state of losing it. And this, as much as the desire to accumulate money without the capacity to duplicate the state of having it, maintains one in a repetitive loop imprisoning him in his present condition, and in which the world around one will deceive him into thinking the reasons for his misfortune are outwards.” ― Robin Sacredfire"
        },
        {
            "Number": "2184",
            "Quote": "“You can't force creatives into a box. If you try, they'll no longer be creative. And no one will want your box.” ― Ryan Lilly"
        },
        {
            "Number": "2185",
            "Quote": "“Best practices are those practices that generally produce the best results or minimize risk.” ― Chad White, Email Marketing Rules"
        },
        {
            "Number": "2186",
            "Quote": "“Businesses built upon an idea of providing service will run longer than businesses built upon an idea of earning profit.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2187",
            "Quote": "“No body is a looser either he is a Winner or a Learner” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2188",
            "Quote": "“Every Day is Canada Day for new Canadians” ― Maureen Haddock"
        },
        {
            "Number": "2189",
            "Quote": "“Faking your way through isnʼt going to work. Hoping that the sales process will go away wonʼt help either. As a bootstrapper you must sell yourself and your business. Otherwise, no business.” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "2190",
            "Quote": "“We do not claim to be more unselfish, more generous or more philanthropic than other people. But we think we started on sound and straightforward business principles, considering the interests of the shareholders our own, and the health and welfare of the employees, the sure foundation of our success.” ― Jamsetji Tata"
        },
        {
            "Number": "2191",
            "Quote": "“When you promote and market yourself, your service, your product - it cannot be from a script or textbook - it must be from the heart.” ― Joseph C. Kunz Jr."
        },
        {
            "Number": "2192",
            "Quote": "“Which do you want to be: a proficient manager or a Leader of Character? The first creates compliant employees. The second leads committed followers!” ― Dave Anderson, Becoming a Leader of Character: 6 Habits That Make or Break a Leader at Work and at Home"
        },
        {
            "Number": "2193",
            "Quote": "“Make it a habit to ask for business referrals. There's nothing pushy about it. People won't give you referrals unless you deserve them.” ― Timi Nadela, Get To The Top"
        },
        {
            "Number": "2194",
            "Quote": "“Captivate the attention of your customer by oozing credibility.” ― Stacey Kehoe"
        },
        {
            "Number": "2195",
            "Quote": "“Nobody makes it alone. Nobody has made it alone. And we are all mentors to people even when we do not know it. Oprah Winfrey You can find the e-book inspired from this quote at Amazon KDP The e-book name: Inspired by Oprah Show” ― https://www.amazon.co.uk/dp/B0824WL4ZW"
        },
        {
            "Number": "2196",
            "Quote": "“No matter how much struggle you face in your journey towards success, someday you will look back and realize your struggles changed your life for the better.” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "2197",
            "Quote": "“Fun is at the core of the way I like to do business and it has been key to everything I've done from the outset. More than any other element, fun is the secret of Virgin's success. I am aware that the ideas of business as being fun and creative goes right against the grain of convention, and it's certainly not how the they teach it at some of those business schools, where business means hard grind and lots of 'discounted cash flows' and net' present values'.” ― Richard Branson, Losing My Virginity: How I've Survived, Had Fun, and Made a Fortune Doing Business My Way"
        },
        {
            "Number": "2198",
            "Quote": "“People are not like a business. You can’t buy and sell them like so much property. You can’t lock them up in a vault and expect them to appreciate it.” ― Harold Robbins, Never Leave Me"
        },
        {
            "Number": "2199",
            "Quote": "“management is telling people what to do; leadership is inspiring them to want to do it.” ― Allen Filson, Belief-In-Others: More than just a Leadership book"
        },
        {
            "Number": "2200",
            "Quote": "“Persistence. Perfection. Patience. Power. Prioritize your passion. It keeps you sane.” ― Criss Jami, Killosophy"
        },
        {
            "Number": "2201",
            "Quote": "“If all the businesses in town are run like country businesses, You are going to have a country town” ― William Faulkner, The Sound and the Fury"
        },
        {
            "Number": "2202",
            "Quote": "“Pictures of people with influencers doesn’t make them a person of influence or an influencer. Be drawn to those showcasing and sharing authenticity, authority, experience and knowledge. Be less concerned with who someone is standing next to.” ― Loren Weisman"
        },
        {
            "Number": "2203",
            "Quote": "“A good entrepreneur is a good teacher.” ― Edward D. Hess"
        },
        {
            "Number": "2204",
            "Quote": "“Your culture is the birthplace of your brand.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2205",
            "Quote": "“Cream always rises to the top...so do good leaders\".” ― John Paul Warren"
        },
        {
            "Number": "2206",
            "Quote": "“Today's opponents can be your allies tomorrow. And today's allies can be tomorrow's opponents.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "2207",
            "Quote": "“When you have your revenue streams set up the right way, you can be confident the dollars are rolling in no matter what” ― Desmond Ong, Against All Odds: Secrets Of Starting At 15, Achieving Million Dollars Sales & Financial Freedom Before 21"
        },
        {
            "Number": "2208",
            "Quote": "“... From want of foresight men make changes which relishing well at first do not betray their hidden venom, as I have already observed respecting hectic fever. Nevertheless, the ruler is not truly wise who cannot discern evils before they develop themselves, and this is a faculty given to few.” ― Niccolò Machiavelli"
        },
        {
            "Number": "2209",
            "Quote": "“A major reason so many start-ups fail is the flawed assumption that if the product is good enough, consumers will find it, the Field of Dreams philosophy of Build it and they will come. Except a lot of times, they don’t. Founders can be overly optimistic when it comes to acquiring customers instead of better preparing for what is usually a time consuming and expensive aspect of growing a business.” ― Ziad Abdelnour- Start-Up Saboteurs How Incompetence, Ego, and Small Thinking Prevent Wealth"
        },
        {
            "Number": "2210",
            "Quote": "“The corporate controlled government is in the business of making money for their political sponsors at the expense of the common people.” ― Steven Magee"
        },
        {
            "Number": "2211",
            "Quote": "“The thing that erodes trust in an organization faster than anything else is when employees feel that they're being treated unfairly.” ― Laurie Buchanan, PhD"
        },
        {
            "Number": "2212",
            "Quote": "“If you understand your why, your purpose in life, what you want to obtain in this life, and what you want to accomplish in this life, that's the first piece. And after the why, it's the what. How will you bring that passion, that purpose to life?” ― Michael McGinnis, GPS Guide for Athletes and Those Who Surround Them: How to Empower Your Sports Goals, Navigate the Process, and Steer Toward Success"
        },
        {
            "Number": "2213",
            "Quote": "“Human Nature is not a problem that can be fixed by rules and regulations. All solutions to the existing problems must be based on how people behave, not on how we think they should behave.” ― Kirk Chisholm"
        },
        {
            "Number": "2214",
            "Quote": "“We thrive when we are pulled by the future, not pushed by the past.” ― Crystal Kadakia, The Millennial Myth: Transforming Misunderstanding Into Workplace Breakthroughs"
        },
        {
            "Number": "2215",
            "Quote": "“The government is in the business of sending large numbers of the disabled into extreme poverty.” ― Steven Magee"
        },
        {
            "Number": "2216",
            "Quote": "“Stop drowning your dreams by jumping into waters that you are unable to swim in.” ― Loren Weisman"
        },
        {
            "Number": "2217",
            "Quote": "“Education is my occupation, not my business; we are sailing in the same ocean but in the opposite direction” ― P.S. Jagadeesh Kumar"
        },
        {
            "Number": "2218",
            "Quote": "“A #GIRLBOSS knows when to throw punches and when to roll with them.” ― Sophia Amoruso, #Girlboss"
        },
        {
            "Number": "2219",
            "Quote": "“People who take unnecessary risks are those who do not take necessary risks” ― Venkat Kumaresan"
        },
        {
            "Number": "2220",
            "Quote": "“When you are designing your plan, think not in terms of what you need to do, think in terms of what you need to achieve.” ― T. Jay Taylor"
        },
        {
            "Number": "2221",
            "Quote": "“A small profit it better than a big loss” ― Ron Rash, Serena"
        },
        {
            "Number": "2222",
            "Quote": "“You become what you think about” ― Napoleon Hill, Success Through a Positive Mental Attitude"
        },
        {
            "Number": "2223",
            "Quote": "“On athleticism, God knows no favor. It seems rather he is in the business of teaching winners how to lose and losers how to win.” ― Criss Jami, Healology"
        },
        {
            "Number": "2224",
            "Quote": "“Great companies know that customer relationships in these times call for more than just having a great product (or service) backed by a great sales team. Customers have to be wooed until they fall so deeply in love with your offering that they will ward off advances from potential suitors. No matter how well you perform as a business, there are little things that can cause the relationship with your customers to suffer. The companies, products and/or services that we love are those that “touch” us in the right places at the right times. After all, that is what “romancing” the customer is all about—feeing your way to the customer’s heart.” ― J. N. HALM, CUSTOMER ROMANCE: A New Feel of Customer Service"
        },
        {
            "Number": "2225",
            "Quote": "“You are the creator if what you have has zero and ultimate value for you.” ― Meir Ezra"
        },
        {
            "Number": "2226",
            "Quote": "“Is idleness indeed so black a crime? What are the Busy doing, half their time?” ― William Allingham, Blackberries"
        },
        {
            "Number": "2227",
            "Quote": "“We had a policy of \"no looking back\". Once a decision was made, all members of our team were expected to stop talking about obstacles and instead focus intensely on solutions. \"Don't tell us all the reasons this might not work. Tell us all the ways it could work.” ― John Wood"
        },
        {
            "Number": "2228",
            "Quote": "“Sales people produce their own fruits. They should own them, whether they taste great or horrible!” ― Yuri van der Sluis"
        },
        {
            "Number": "2229",
            "Quote": "“In modern time slowness is new sickness.” ― Amit Kalantri"
        },
        {
            "Number": "2230",
            "Quote": "“After the monkeys came down from the trees and learned to hurl sharp objects, they had had to move into caves for protection--not only from the big predatory cats but, as they began to lose their monkey fur, from the elements. Eventually, they started transposing their hunting fantasies onto cave walls in the form of pictures, first as an attempt at practical magic and later for the strange, unexpected pleasure they discovered in artistic creation. Time passed. Art came off the walls and turned into ritual. Ritual became religion. Religion spawned science. Science led to big business. And big business, if it continues on its present mindless, voracious trajectory, could land those of us lucky enough to survive its ultimate legacy back into caves again.” ― Tom Robbins, Villa Incognito"
        },
        {
            "Number": "2231",
            "Quote": "“God is looking for sons to send to the world of business to manage it for him.” ― Sunday Adelaja"
        },
        {
            "Number": "2232",
            "Quote": "“We want clean air, clean water, good living conditions, the best health care in the world. Yet we aren't willing to pay for anything manufactured under those restrictions.” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "2233",
            "Quote": "“You know you are the creator when what you’ve created has zero and ultimate value.” ― Meir Ezra"
        },
        {
            "Number": "2234",
            "Quote": "“The Prince came to give life unto those whose lives were almost being snuffed out by the devil via the cares of this world.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2235",
            "Quote": "“People before Profit.” ― Mac Canoza"
        },
        {
            "Number": "2236",
            "Quote": "“Exceptional customer service proactively manages your brand and reactively can turn upset customers into raving fans based on how you handled their complaint.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2237",
            "Quote": "“The world doesn't need more complains, the world needs more solutions and people who could turn ideas into reality. Don't wait for someone or miracles, be the one and create your own miracle.” ― Edmerce"
        },
        {
            "Number": "2238",
            "Quote": "“In Data Science if you want to help individuals, be empathetic and ask questions; that way, you can begin to understand their journey, too.” ― Damian Mingle"
        },
        {
            "Number": "2239",
            "Quote": "“Make sure you test your brand story’s recipe with whomever you’re cooking it for.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "2240",
            "Quote": "“Yes, Pilcher was a money-man. They were a type. It was easy to spot them. You could always tell one by that cold fire in his eyes. It was not the hot fire of the man who would never interrupt a dream to calculate the risk, but the cold fire of the man whose mind was geared to the rules of the money game. It was a game that was played with numbers on pieces of paper … common into preferred, preferred into debentures, debentures into dollars, dollars into long-term capital gains. It was the net dollars after tax that were important. They were the numbers on the scoreboard, the runs that crossed the plate, the touchdowns, the goals. Net dollars were the score markers of the money-man’s game. Nothing else mattered. A factory wasn’t a living, breathing organism. It was only a dollar sign and a row of numbers after the Plant & Equipment item on the balance sheet. Their guts didn’t tighten when they heard a big Number Nine bandsaw sink its whining teeth into hard maple. Their nostrils didn’t widen to the rich musk of walnut or the sharply pungent blast from the finishing room. When they saw a production line they looked with blind eyes, not feeling the counterpoint beat of their hearts or the pulsing flow of hot blood or the trigger-set tenseness of lungs that were poised to miss a breath with every lost beat on the line” ― Cameron Hawley, Executive Suite"
        },
        {
            "Number": "2241",
            "Quote": "“If it was my business, I wouldn't talk about it. It is very vulgar to talk about one's business. Only people like stockbroker's do that, and then merely at dinner parties.” ― Oscar Wilde, The Importance of Being Earnest"
        },
        {
            "Number": "2242",
            "Quote": "“I call dealing with your calendar the “calendar boogie” because you seriously have to dance around to pull it all together.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2243",
            "Quote": "“The only goal in life is to be happy, genuinely, intensely and consistently , regardless of what it looks like to others.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2244",
            "Quote": "“Use your passion and expertise to provide long term value and innovative solutions for your clients” ― Benjamin Kofi Quansah"
        },
        {
            "Number": "2245",
            "Quote": "“Productivity is purposeful doing. It is paying attention to your intention to ensure that what you’re doing is worth your time and energy. Will the outcome be worth your investment?” ― Melissa Steginus, Self Care at Work: How to Reduce Stress, Boost Productivity, and Do More of What Matters"
        },
        {
            "Number": "2246",
            "Quote": "“The biggest secret in this universe is that there is no secret.” ― Meir Ezra"
        },
        {
            "Number": "2247",
            "Quote": "“The problem with capitalism is that \"we have a global theology without morality, without a Bible.\" And that's dangerous, he warns - \"we're not going to be able to exist in a global context if we are the bastards of our business.” ― Joel Bakan, The Corporation: The Pathological Pursuit of Profit and Power"
        },
        {
            "Number": "2248",
            "Quote": "“This is what happens: the sensitive and honest man opens his heart, and the business man listens and takes it all in, so that he can swallow up the honest fellow.” ― Fyodor Dostoyevsky, Crime and Punishment"
        },
        {
            "Number": "2249",
            "Quote": "“Exercise is like defragmenting your hard drive. You become strong and successful.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "2250",
            "Quote": "“If you keep looking at your business wishes as delusional dreams you will end up running just another one of them. If you get inspired by your business wishes then plan to find a way and people to make it happen, you will end up mastering a second to none organization.” ― Sameh Elsayed"
        },
        {
            "Number": "2251",
            "Quote": "“Only nothing can create something.” ― Meir Ezra"
        },
        {
            "Number": "2252",
            "Quote": "“I dont celebrate any friendship that was build on hate, because we share the common enemy.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "2253",
            "Quote": "“Attack is the secret of defense; defense is the planning of an attack.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "2254",
            "Quote": "“The lesson here is clear: If you want people to understand that you value their contributions and that they are important, the recognition and praise you provide must have meaning that is specific to each individual.” ― Tom Rath, How Full Is Your Bucket?"
        },
        {
            "Number": "2255",
            "Quote": "“Be willing and you will be winning.” ― Meir Ezra"
        },
        {
            "Number": "2256",
            "Quote": "“Disruption is, at its core, a really powerful idea.” ― Clayton M. Christensen"
        },
        {
            "Number": "2257",
            "Quote": "“Learning how to become better communicators and better listeners will help us enter this new age of the experience economy and walk, talk and grow with civility as our foundation.” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "2258",
            "Quote": "“Copy cats may seem good at what they are doing, but they will never find a spot at the top.” ― Thebe Kegomoditswe"
        },
        {
            "Number": "2259",
            "Quote": "“Business as usual at the Mauna Kea Observatories in Hawaii is no longer acceptable.” ― Steven Magee"
        },
        {
            "Number": "2260",
            "Quote": "“The best alternative to hope is to set up multiple backup plans.” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "2261",
            "Quote": "“If you lose money in business, you can still cover up the loss. If you lose time, the only thing you have by your side is wreckage.” ― Ajeet Sharma, Three Marketeers"
        },
        {
            "Number": "2262",
            "Quote": "“A little deed done very well is better than a mighty plan kept on paper, undone. Wishes don't change the world; it's actions that do this business!” ― Israelmore Ayivor, Daily Drive 365"
        },
        {
            "Number": "2263",
            "Quote": "“A strong brand is essential to every business, not just the Coca-Colas and Walmarts of the world.” ― Laura Beauparlant"
        },
        {
            "Number": "2264",
            "Quote": "“If the reason of your sleeplessness is competition, then you will make a successful businessman.” ― Amit Kalantri"
        },
        {
            "Number": "2265",
            "Quote": "“If your plan is not working, pivot. If it is working, do more of it!” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2266",
            "Quote": "“What if business was the adventure of living?” ― Simone Milasas, Joy of Business"
        },
        {
            "Number": "2267",
            "Quote": "“A* search for the certain puzzle that fits your mind. A certain quality out of matrix, an emerge of reality and divine. Persistent sustained look and fixed mind is the rebirth, the start of sanity, the start of rise.” ― Kudretullah Sak"
        },
        {
            "Number": "2268",
            "Quote": "“I started the business with a simple question: How can we make the process of buying a computer better? The answer was: Sell computers directly to the end customer. Eliminate the reseller's markup and pass those savings on to the customer.” ― Michael Dell, Direct from Dell: Strategies that Revolutionized an Industry"
        },
        {
            "Number": "2269",
            "Quote": "“Never let your fear of the unknown and things being too difficult make your choices for you in life. One of the saddest lessons in life is finding out that your fear made the situation worse than what it was and a braver person stole the dream you gave up on.” ― Shannon L. Alder"
        },
        {
            "Number": "2270",
            "Quote": "“Having an asset-generated income will make it easier for parents to spend more time raising their children” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "2271",
            "Quote": "“Proper business models include human flourishing.” ― Richie Norton"
        },
        {
            "Number": "2272",
            "Quote": "“Never depend on single income. Make investment to create a second source.” ― Warren Buffett"
        },
        {
            "Number": "2273",
            "Quote": "“Rouse him, and learn the principle of his activity or inactivity. Force him to reveal himself, so as to find out his vulnerable spots.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "2274",
            "Quote": "“Pastor Face Your Business” When people say this they mean that I must just stay behind the pulpit and preach” ― Sunday Adelaja"
        },
        {
            "Number": "2275",
            "Quote": "“I never truly believed that human business was some serious thing.” ― Albert Camus, The Fall"
        },
        {
            "Number": "2276",
            "Quote": "“A Bombshell wants it all, yet she is beginning to see she can’t have it all at once.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2277",
            "Quote": "“If you aim to be the best then it's essential to evolve constantly, learn from past mistakes, look for new opportunities and have the flexibility to implement improved processes and solutions along the way.” ― Mark Gallagher"
        },
        {
            "Number": "2278",
            "Quote": "“Value is often associated with how much you want something. If you really want it, you are more inclined to place a higher value on it. The opposite equally applies.” ― Victor Kwegyir, Business 365: Daily Inspiration for Creativity, Innovation and Business Success"
        },
        {
            "Number": "2279",
            "Quote": "“Theory of Evolution (Summary) First, there were some amoebas. Deviant amoebas adapted better to the environment, thus becoming monkeys. Then came Total Quality Management.” ― Scott Adams, The Dilbert Principle: A Cubicle's-Eye View of Bosses, Meetings, Management Fads & Other Workplace Afflictions"
        },
        {
            "Number": "2280",
            "Quote": "“If you keep taking calculated risks, you will keep getting considerable rewards.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2281",
            "Quote": "“All businesses could use a garden where Data Scientists plant seeds of possibility and water them with collaboration.” ― Damian Mingle"
        },
        {
            "Number": "2282",
            "Quote": "“Choose to make your own choices and learn from them. If you don’t. You will never experience a gift of life the way you should. You will always follow other people experiences and will try to fit them in your life. You will forever ask people what to do, Instead of knowing what to do and asking them what do you want or what is good for you.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "2283",
            "Quote": "“The most effective brand messaging strategy is not to create the messaging that makes the most sense to you. It is creating the brand messaging that makes you, your brand and your products make the most sense to others.” ― Loren Weisman"
        },
        {
            "Number": "2284",
            "Quote": "“In our own lives, we will try something new and, finding that it isn't easy for us, we conclude we don't have a talent for it.” ― Geoff Colvin"
        },
        {
            "Number": "2285",
            "Quote": "“Setting a goal is like to set your destination point in your life GPS which could take you to your desire position as you dreamed about...” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "2286",
            "Quote": "“A willing person will not try to make you wrong.” ― Meir Ezra"
        },
        {
            "Number": "2287",
            "Quote": "“Entrepreneur, become so strategic that procrastination has no choice but to focus. ~” ― Onyi Anyado"
        },
        {
            "Number": "2288",
            "Quote": "“As an entrepreneur you own your business, you expand your brand, you increase your impact, you live with no excuses, and you enjoy your intentional growth daily.” ― Farshad Asl"
        },
        {
            "Number": "2289",
            "Quote": "“Starting a business without a well-thought-out, realistic, highly-detailed business plan that factors in all aspects of rollout is a recipe for disaster.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "2290",
            "Quote": "“Netiquette makes being a 'goody goody' online cool for everyone because we all have to get along. NetworkEtiquette.net” ― David Chiles"
        },
        {
            "Number": "2291",
            "Quote": "“Shop Blindness: I always wonder, if the dining room is that dirty, what is the kitchen like” ― Fritz Shoemaker"
        },
        {
            "Number": "2292",
            "Quote": "“Without (the knowledge and application of) administration, you will waste your days. ” ― Meir Ezra"
        },
        {
            "Number": "2293",
            "Quote": "“Be intentional when you leverage your network.” ― Germany Kent"
        },
        {
            "Number": "2294",
            "Quote": "“The ordinary man gets motivation from power and fame. The superior finds motivation in meaning and work itself.” ― Maxime Lagacé"
        },
        {
            "Number": "2295",
            "Quote": "“The best way to predict your future is to create it” ― Peter Drucker"
        },
        {
            "Number": "2296",
            "Quote": "“A person's right to a job is as specious as his boss' right to success in business. There is no right to a minimum wage, just as there is no right to success in self-employment.” ― Rex Curry"
        },
        {
            "Number": "2297",
            "Quote": "“Solutioning is the art of understanding the current problem faced by the customer and giving them a product that will create bigger problems for them so that they ignore the previous one- the Tiger balm technology. Once you apply it, it starts burning and then you forget the headache that you had” ― Nipun Varma, Adventures of an Indian Techie"
        },
        {
            "Number": "2298",
            "Quote": "“The world has enough resources to sustain all lives quite beautifully, yet the disgusting intensity of inequality is only increasing. Because the humans are always looking for gratifications outside their innate self. And to fulfill this primitive urge for instant gratification, more and more businesses are being founded with no valuable principle at their core. Their principle is to provide instant gratifications to the countless privileged neurotics of the world. These neurotics can have the luxury to desire for condom of a specific flavor, while at the same time, in some other corner of the world, countless innocent lives are either surviving on one hard-earned meal a day or dying from starvation.” ― Abhijit Naskar, Let The Poor Be Your God"
        },
        {
            "Number": "2299",
            "Quote": "“The money that many think they are saving by not creating correct branding NOW, ends up costing them tenfold or more in the marketing and advertising LATER. A marketing plan without the right #brand blueprint will always cost more, take longer and tend to deliver subpar results compared to a well branded business. Build the foundation strong so that everything placed on top of it can be supported and set up to thrive and succeed.” ― Loren Weisman"
        },
        {
            "Number": "2300",
            "Quote": "“In America, Amazon competes with yahoo and Google by competing with a gas station. Imagine if every price in QT was the same, but had a for sale sign beside higher prices, and you'll have either Amazon or Craiglist.” ― Anonymous"
        },
        {
            "Number": "2301",
            "Quote": "“Your personal growth, how you show up, and the ways you lead ultimately determine the success of your business and your life.” ― David J. Greer, Wind In Your Sails"
        },
        {
            "Number": "2302",
            "Quote": "“Entrepreneur, your last 20 tweets has to be about your brain, brand and business.” ― Onyi Anyado"
        },
        {
            "Number": "2303",
            "Quote": "“Peculiar I say, how so often the smallest, most seemingly insignificant details later unveil their faces as vital means for progression.” ― Criss Jami, Healology"
        },
        {
            "Number": "2304",
            "Quote": "“Today it was commerce that Europe valued and it was the businessmen who, having exploited what the scientists and thechnologits had done for the world, now reaped the rewards.” ― Stephen Fry, Making History"
        },
        {
            "Number": "2305",
            "Quote": "“A lot of pain that we are dealing with are really only THOUGHTS.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "2306",
            "Quote": "“...the higher the expectations about unselected alternatives, the lower the level of satisfaction with the chosen good.” ― Michael R. Solomon, Consumer Behaviour: A European Perspective"
        },
        {
            "Number": "2307",
            "Quote": "“[Team player vs team builder] Players focus on the wins and the loses. Builders focus on the team and future of the vision. Let's move our members from team player to team builder.” ― Janna Cachola"
        },
        {
            "Number": "2308",
            "Quote": "“Invest In Who You Are Becoming” ― Dr. Sonia Kennedy, Supernaturally Made"
        },
        {
            "Number": "2309",
            "Quote": "“If You... say the same things as everyone else… share the same links as everyone else… post the same quotes as everyone else… and put up the same pictures as everyone else… Why should anyone think you are any different than everyone else? You have your own creativity. You have your own story. Stop trying to tell another person’s story and start engaging people with yours.” ― Loren Weisman"
        },
        {
            "Number": "2310",
            "Quote": "“Innovate or die, and there's no innovation if you operate out of fear of the new or untested.” ― Robert Iger, The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
        },
        {
            "Number": "2311",
            "Quote": "“Age did not have to prohibit or inhibit a woman’s ability to make money or a living. Age did not diminish a woman’s usefulness as a self-employed person or entrepreneur. Age did not limit the ways in which a woman made money through self-employment or entrepreneurship.” ― Robin Caldwell, When Women Become Business Owners"
        },
        {
            "Number": "2312",
            "Quote": "“I would rather earn 1% off a 100 people's efforts than 100% of my own efforts.” ― John D. Rockefeller"
        },
        {
            "Number": "2313",
            "Quote": "“Everything around you says, “Be the only one!” But the right way is to be everyone.” ― Meir Ezra"
        },
        {
            "Number": "2314",
            "Quote": "“Customer service is bad because we allow it to be bad. What do you do when you get bad service? Tell the truth. If you aren’t willing to speak up, then you are an accessory to the crime. You can’t ignore bad service and expect it to get better. Behavior that is ignored will be repeated. Next time you get bad service, speak up. Remember: it’s your money you are defending – money you worked hard for. Tell the company and others. Use the internet and social media. That’s how customer service will improve for all of us.” ― Larry Winget"
        },
        {
            "Number": "2315",
            "Quote": "“Your brand is a combination of a customer’s experiences with your business at every touchpoint. Each memory, thought, impression, website visit, story, sales letter, social media post, event, phone call, and transaction contribute to your company’s brand reputation.” ― Elaine Fogel, Beyond Your LOGO: 7 Brand Ideas That Matter Most for Small Business Success"
        },
        {
            "Number": "2316",
            "Quote": "“Some salesmen think that selling is like eating—to satisfy an existing appetite; but a good salesman is like a good cook—he can create an appetite when the buyer isn't hungry.” ― George Lorimer, Letters from a Self-Made Merchant to His Son"
        },
        {
            "Number": "2317",
            "Quote": "“What should happen and what actually happens... Seems so true for small organisations business.. Initially the promoters make their associates dream of the trickle down once business grows and assign a glass of hope but later the size of upper cup grows to kill the trickle down effects.. #ProfitMaximization and #Greed of business growth is killing small businesses..” ― Talees Rizvi, 21 Day Target and Achievement Planner [Use Only Printed Work Book: LIFE IS SIMPLE HENCE SIMPLE WORKBOOK"
        },
        {
            "Number": "2318",
            "Quote": "“You cannot evaluate the effectiveness of an objective, if you cannot comprehend the blueprint of the vision.” ― Wayne Chirisa"
        },
        {
            "Number": "2319",
            "Quote": "“If your story is not inspiring you, it’s time to change it.” ― Isaiah Hankel, Black Hole Focus: How Intelligent People Can Create a Powerful Purpose for Their Lives"
        },
        {
            "Number": "2320",
            "Quote": "“Don't do politics in education and don't do business with education” ― Sir P.S. Jagadeesh Kumar"
        },
        {
            "Number": "2321",
            "Quote": "“As you move from job seeker to job creator, you move from wages to wealth.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2322",
            "Quote": "“He or she who gets hired is not necessarily the one who can do that job best; but, the one who knows the most about how to get hired.” ― Richard Lathrop"
        },
        {
            "Number": "2323",
            "Quote": "“Trustworthy is earned not bought.” ― Dee Dee Artner"
        },
        {
            "Number": "2324",
            "Quote": "“If you truly want answers to questions and if you truly want to know what the research says, then conduct your own inside your organization. That's the only way to make business decisions, especially those that pertain to your people.” ― Jacob Morgan"
        },
        {
            "Number": "2325",
            "Quote": "“Unwittingly, I have sailed through my entire life, so far, with neither direction nor destination. I had a vague instinct to reach dry land every once in a while for supplies, but never anything more than that.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2326",
            "Quote": "“If you had to identify, in one word, the reason why the human race has not achieved, and never will achieve, its full potential, that word would be 'meetings.” ― Dave Barry"
        },
        {
            "Number": "2327",
            "Quote": "“We all have that bully that appears on our shoulders, whispering nasty self-thoughts into our ears. On the opposite shoulder sits the cheerleader, the one who believes in our worth and reminds us of our successes, strengths, and goals.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "2328",
            "Quote": "“We all talk to ourselves, and when we keep telling ourselves something we eventually begin to believe it.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "2329",
            "Quote": "“Trust your instincts, know what you want, and believe in your ability to achieve it. Rules and conventions are important for schools, businesses, and society in general, but you should never follow them blindly.” ― Biz Stone, Things a Little Bird Told Me: Confessions of the Creative Mind"
        },
        {
            "Number": "2330",
            "Quote": "“The thing about our choices is that after we have made them, they turn around and make us.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2331",
            "Quote": "“Maintain your reputation by referring only those that you would stake your reputation on.” ― Loren Weisman"
        },
        {
            "Number": "2332",
            "Quote": "“So cheer up Beloved; for your God is able, He is the maker of all things.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2333",
            "Quote": "“Time is the greatest capital for any business” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "2334",
            "Quote": "“Uncontrolled emotions make money flow.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "2335",
            "Quote": "“Posting dramatic charts or funny pictures is good and giving people smart reasons to believe what they already think is great.” ― Derek Thompson, Hit Makers: The Science of Popularity in an Age of Distraction"
        },
        {
            "Number": "2336",
            "Quote": "“In our modern civilization, to struggle financially means to struggle in every aspect of life.” ― Anthony Criniti"
        },
        {
            "Number": "2337",
            "Quote": "“Maybe you are in the Abyss of Emotional Bankruptcy looking for a way out, looking for the next rung in the ladder on your climb to the Peak of Happiness, or you may even be at the Peak of Happiness already, looking for a way to stay there. Wherever you are in life, this book is designed to give you the tools necessary to help you achieve your goals.” ― Ken Poirot, Mentor Me: GA=T+E—A Formula to Fulfill Your Greatest Achievement"
        },
        {
            "Number": "2338",
            "Quote": "“If you honestly know how you help people, then you should become passionate about sharing it, spread the good news, give everyone a chance to share in the solutions that you can provide.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2339",
            "Quote": "“If you don’t have enough money you need to change your mind about money. It is not your actions. It is not saving. It is not spending. It is not anything else other than how you think about money.” ― Meir Ezra"
        },
        {
            "Number": "2340",
            "Quote": "“We are the spark, that will light the fire that'll burn the bloody tool discussion.” ― Pedro Ahlers"
        },
        {
            "Number": "2341",
            "Quote": "“If you don’t mind your business, who will mind it for you? ~Nkwachukwu Ogbuagu” ― Nkwachukwu Ogbuagu"
        },
        {
            "Number": "2342",
            "Quote": "“If you don't like something don't protest from a far. Work within it to change it. Otherwise, you'll just be one voice of many rather than a trusted voice of influence.” ― Isabella Poretsis"
        },
        {
            "Number": "2343",
            "Quote": "“The efforts of a leader will be emulated. Depending on the quality of appointed leadership, this can be medicine or poison to a living business.” ― Steve Maraboli"
        },
        {
            "Number": "2344",
            "Quote": "“Rejection is an opportunity for your selection.” ― Bernard Branson"
        },
        {
            "Number": "2345",
            "Quote": "“As soon as I can find the courage to put my plans to action, I will turn from being a “maybe man” into someone whose future success lies completely in his own hands.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2346",
            "Quote": "“Luck is unpredictable possibilities.” ― Serhat Beyaz KÖROĞLU"
        },
        {
            "Number": "2347",
            "Quote": "“As long as politics is the shadow of big business, the attenuation of the shadow will not change the substance.” ― John Dewey"
        },
        {
            "Number": "2348",
            "Quote": "“The PC principle is to always treat your employees exactly as you want them to treat your best customers.” ― Stephen R. Covey, The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change"
        },
        {
            "Number": "2349",
            "Quote": "“You cannot observe what you did not create.” ― Meir Ezra"
        },
        {
            "Number": "2350",
            "Quote": "“The opposite of value is a commodity item with little or no perceived value — which means people are not seeking it out and when they do, it’s merely one of the many choices (so very likely the cheapest offering will get the sale).” ― David Brier"
        },
        {
            "Number": "2351",
            "Quote": "“If you think implementing CRM costs too much...you are doing it wrong.” ― Bobby Darnell, Time For Dervin - Living Large In Geiggityville"
        },
        {
            "Number": "2352",
            "Quote": "“His ship sank. They were all on his side.” ― Ljupka Cvetanova, The New Land"
        },
        {
            "Number": "2353",
            "Quote": "“Your VISION and your self-willingness is the MOST powerful elements to conquer your goal” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "2354",
            "Quote": "“We would pay the bills. We would pretend to be high-class. This was compromise. This, I guessed, was business.” ― Aryn Kyle, The God of Animals"
        },
        {
            "Number": "2355",
            "Quote": "“Listen to your customers, not your competitors.” ― Joel Spolsky"
        },
        {
            "Number": "2356",
            "Quote": "“Seek advice on taking risk from a capitalist and not from a gambler.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2357",
            "Quote": "“I insist on a lot of time being spent, almost every day, to just sit and think. That is very uncommon in American business. I read and think. So I do more reading and thinking, and make less impulse decisions than most people in business. I do it because I like this kind of life.” ― Warren Buffett"
        },
        {
            "Number": "2358",
            "Quote": "“Being busy is different from taking action.” ― Keshni Kashyap, Tina's Mouth: An Existential Comic Diary"
        },
        {
            "Number": "2359",
            "Quote": "“If those who are sent to draw water begin by drinking themselves, the army is suffering from thirst. [One may know the condition of a whole army from the behavior of a single man.]” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "2360",
            "Quote": "“You can make a lot of money with a good cat.\" -Ty Warner” ― Zac Bissonnette, The Great Beanie Baby Bubble: Mass Delusion and the Dark Side of Cute"
        },
        {
            "Number": "2361",
            "Quote": "“Like any other tool for facilitating the completion of a questionable task, rewards offer a \"how\" answer to what is really a \"why\" question.” ― Alfie Kohn, Punished by Rewards: The Trouble with Gold Stars, Incentive Plans, A's, Praise and Other Bribes"
        },
        {
            "Number": "2362",
            "Quote": "“Ben Franklin said: \"Early to bed and early to rise Make a man healthy wealthy and wise\" Lately I have read the advice given to William Randolph Hearst, when a young man, by his father: \"Go downtown at noon and rob the other fellows of what they have made during the morning.” ― E. Haldeman-Julius"
        },
        {
            "Number": "2363",
            "Quote": "“When I stopped to take a breath, I noticed I had wings.” ― Jodi Livon"
        },
        {
            "Number": "2364",
            "Quote": "“If you woke before dawn one morning with the formula for a vaccine, which would cure the most ghastly disease currently known to man, releasing millions from an agonising death, would you roll over and resume sleeping until daylight?” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2365",
            "Quote": "“God does not interfere in business at all. In business, only these two will be helpful: your expertise and your ethical standards. With unethical standards, you may get a good return for a year or two, but after that you will incur a loss. If you eventually feel remorse when something wrong happens, even then you will become free (from bondage of karma).” ― Dada Bhagwan, Simple & Effective Science for Self Realization"
        },
        {
            "Number": "2366",
            "Quote": "“In a company where tech decisions were still ultracentralized, the repercussions of a distracted CEO had to be damaging.” ― Paul G Allen, Idea Man"
        },
        {
            "Number": "2367",
            "Quote": "“There is large cap, mid cap, small cap. There is also a “BHANGAAR CAP”. More than 4000 out of 6000 companies fit in that category. They show up only in the good times. Be careful” ― Vijay Kedia"
        },
        {
            "Number": "2368",
            "Quote": "“You are more likely to be successful if you worry about providing value instead of being successful.” ― Yuri van der Sluis"
        },
        {
            "Number": "2369",
            "Quote": "“Latecomer deserves little, latecomer gets losses and leftovers.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2370",
            "Quote": "“The real winners in life are the people who look at every situation with an expectation that they can make it work ot make it better.” ― Barbra Pletcher"
        },
        {
            "Number": "2371",
            "Quote": "“Self-assurance reassures others and reassures yourself.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "2372",
            "Quote": "“If you have a few options which satisfy all your requirements, avoid the urge of trying out the rest of them.” ― Vishal Ostwal, Pocket Productivity: A Simplified Guide to Getting More Outcomes from Your Hard Work and Giving Your Hustle a Meaning"
        },
        {
            "Number": "2373",
            "Quote": "“The wealthiest Person on earth is one who is free from the love of Money” ― Andrew Darrah"
        },
        {
            "Number": "2374",
            "Quote": "“Ones best success comes after their greatest disappointments.” ― Henry Ward Beecher, Life Thoughts Gathered From the Extemporaneous Discourses of Henry Ward Beecher"
        },
        {
            "Number": "2375",
            "Quote": "“Success is only rented, and you pay the rent daily.” ― Francis Shenstone, The Explorer's Mindset: Unlock Health Happiness and Success the Fun Way"
        },
        {
            "Number": "2376",
            "Quote": "“The market doesn´t care about titles.” ― Alin Sav"
        },
        {
            "Number": "2377",
            "Quote": "“Never mind your intentions. Communication is about what others hear with your words.” ― Dianna Booher, What More Can I Say?: Why Communication Fails and What to Do about It"
        },
        {
            "Number": "2378",
            "Quote": "“Failure doesn't means falling down; it means hiding somewhere to safeguard own interest.” ― Ashish Patel"
        },
        {
            "Number": "2379",
            "Quote": "“Change is for sure. Growth is the option.” ― Minter Dial, Futureproof - How To Get Your Business Ready For The Next Disruption"
        },
        {
            "Number": "2380",
            "Quote": "“What you hold in your consciousness tends to manifest—the inner game runs the outer game.” ― William A. Adams, Mastering Leadership: An Integrated Framework for Breakthrough Performance and Extraordinary Business Results"
        },
        {
            "Number": "2381",
            "Quote": "“The more ethical and honest your business is, the harder it is to make money. And you have to understand this going in: when you start a business, being good and moral and ethical and, you know, legal… means you will make less money than someone who simply does not give a fuck. If you’re wondering where all this is going, the point to all this is to hammer into your skull the blunt reality that you and your new business are indistinguishable from the worst examples of the industry, and nobody cares.” ― Caliban Darklock"
        },
        {
            "Number": "2382",
            "Quote": "“In devastation there is opportunity.” ― Rebecca McNutt, Bittersweet Symphony"
        },
        {
            "Number": "2383",
            "Quote": "“Recession is the best time to start a business. Before you begin, seek the kingdom of God first. Ask God if this is the right business for you. \"But seek first the kingdom of God and His righteousness, and all these things shall be added to you. Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble.\" - Matthew 6:33–34” ― Timi Nadela, Get To The Top"
        },
        {
            "Number": "2384",
            "Quote": "“Is always easier to go along with what others have said, “burn bridges”, burning bridges is only easier and that is why so many adopt to just burn bridges… did we every thought that once burned, it is not as easy to build one? If possible, we should ALWAYS keep the bridge standing, take care and maintain it, because in the long run, bridges are what we all need to improve and thrive in everything from health, relationships, business to spirituality. _nickc” ― nick catricala"
        },
        {
            "Number": "2385",
            "Quote": "“The future is a fabulous place to bury your success.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2386",
            "Quote": "“Trading is injurious to your wealth. If you are smoking you may die in 20-30 years whereas by trading, this may happen the very next day.” ― Vijay Kedia"
        },
        {
            "Number": "2387",
            "Quote": "“Creating a company culture is the first operational step in becoming a bold, brave fempreneur. It creates certainty, a road map and stability.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2388",
            "Quote": "“Market rewards you as per your perception.” ― Vijay Kedia"
        },
        {
            "Number": "2389",
            "Quote": "“Listening is a discipline. It’s all about being present at that moment in time.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2390",
            "Quote": "“Those I call are very different from Orphans in that they’re absolutely convinced they’re some sort of social wit. Without a doubt they’re intelligent, and most likely very wealthy, although their wealth will come from a business they were set up in by others from their ‘school.’ They’ll have had no need to go to university. Rich people will have set them up in business, possibly Public Relations or something like that, they’ll have helped them write a business plan, loaned them money, and provided advice and guidance at every step of the way. As I say, money would have been forthcoming from investors until the business was able to run itself. And then Horace will swan about as if he did it all himself.” ― Karl Wiggins, Wrong Planet - Searching for your Tribe"
        },
        {
            "Number": "2391",
            "Quote": "“A company’s revenue engine is a critical success factor. I had seen from my own direct experience how easy it was to get caught in silos: marketing people would just think of marketing, salespeople would just think of sales, and accounting wouldn’t think of itself as part of the revenue engine at all. Furthermore, product and the revenue engine were too often thought of completely independent of each other. The need for a more integrated approach was on my mind from the beginning.” ― Tom Mohr"
        },
        {
            "Number": "2392",
            "Quote": "“A loss means something was separated from you.” ― Meir Ezra"
        },
        {
            "Number": "2393",
            "Quote": "“Don't tell me what you think: just tell me what's in your portfolio.” ― Nassim Nicholas Taleb, Skin in the Game: The Hidden Asymmetries in Daily Life"
        },
        {
            "Number": "2394",
            "Quote": "“Seven Ways To Get Ahead in Business: 1. Be forward thinking 2. Be inventive, and daring 3. Do the right thing 4. Be honest and straight forward 5. Be willing to change, to learn, to grow 6. Work hard and be yourself 7. Lead by example” ― Germany Kent"
        },
        {
            "Number": "2395",
            "Quote": "“Of course, everything is about context. No one who is attending your virtual meeting on being a software developer, or lawn mower repairman, or a big wave surfer at Nazaré, is likely to expect you to appear in a suit. The point is to give some serious consideration to how people normally dress in your profession.” ― Cindy Ann Peterson, My Style, My Way: Top Experts Reveal How to Create Yours Today"
        },
        {
            "Number": "2396",
            "Quote": "“You will become impressive the day to stop trying. You will become successful the day you stop being busy.” ― Maxime Lagacé"
        },
        {
            "Number": "2397",
            "Quote": "“Make your move before you are ready.” ― Linsey Mills, Your Business Venture: The Prep. The Pitch. The Funding."
        },
        {
            "Number": "2398",
            "Quote": "“Regardless of where you are in your career, listening is a skill that you must continue to work on.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "2399",
            "Quote": "“The only difference between success and failure is Lack of Vision” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2400",
            "Quote": "“Have the courage to walk away from a fantastic deal, if the person on the other side is disprepectful or trying to pull a smart one on you.' Temptation should never rule a deal, the value should, fairplay should and acceptance on either side that the deal is being made for the value being created for both!” ― Abha Maryada Banerjee, Nucleus: Power Women: Lead from the Core"
        },
        {
            "Number": "2401",
            "Quote": "“Progression is the lesson, elevation is the direction, and evolution is the solution proven through ones contribution.” ― Capies Pitts"
        },
        {
            "Number": "2402",
            "Quote": "“Love what you sell and master how you sell it.” ― Yuri van der Sluis"
        },
        {
            "Number": "2403",
            "Quote": "“When you begin to relinquish your ego, you will no longer feel compelled to prove to people how busy you are in an attempt to validate your sense of worth.” ― Miya Yamanouchi , Embrace Your Sexual Self: A Practical Guide for Women"
        },
        {
            "Number": "2404",
            "Quote": "“I’d tell men and women in their midtwenties not to settle for a job or a profession or even a career. Seek a calling. Even if you don’t know what that means, seek it. If you’re following your calling, the fatigue will be easier to bear, the disappointment will be fuel, the highs will be like nothing you’ve ever felt.” ― Phil Knight, Shoe Dog: A Memoir by the Creator of NIKE"
        },
        {
            "Number": "2405",
            "Quote": "“Unlearn your knowledge about what WAS working to understand what is working NOW” ― Roger James Hamilton"
        },
        {
            "Number": "2406",
            "Quote": "“You don't need a million dollar to start a business. You just need a simple idea to make Billions” ― Mushfiqur Rahman"
        },
        {
            "Number": "2407",
            "Quote": "“Understand why you are different and how you help, recognise your target market, and give them something they might not even realise they are missing.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2408",
            "Quote": "“It is impossible to think big without thinking complex.” ― Duncan Bannatyne, Anyone Can Do It"
        },
        {
            "Number": "2409",
            "Quote": "“Any loss is a guarantee that something is being created.” ― Meir Ezra"
        },
        {
            "Number": "2410",
            "Quote": "“Any man of reasonable intelligence can make money if that's what he wants. Mostly it's women or clothes or admiration he really wants and they deflect him.” ― John Steinbeck, The Winter of Our Discontent"
        },
        {
            "Number": "2411",
            "Quote": "“When what we have mastered becomes mundane, we feel pain. The antidote is pursuit.” ― Kelsey Ramsden, Success Hangover: Ignite Your Next Act. Screw Your Status Quo. Feel Alive Again."
        },
        {
            "Number": "2412",
            "Quote": "“Don’t always trust what you see. In a bull market even a duck looks like a swan.” ― Vijay Kedia"
        },
        {
            "Number": "2413",
            "Quote": "“All companies are built as hierarchies, no matter what that holacracy adepts are saying now. It's always a boss on the top and then people who report to him down to the lowest level. Staying on the lowest level is what I always try to avoid. Not only because I have some dignity, but mostly because I am lazy. The lower you are in the hierarchy, the more work you have to do and the less money you get for it. This is how the division of labor works, not only in the software industry.” ― Yegor Bugayenko, Code Ahead: Volume 1"
        },
        {
            "Number": "2414",
            "Quote": "“Whatever you conclude you become: I am weak, you will be weak; I am smart, you will be smart; he is bad, he will be bad. The moment you stop concluding your wife is beautiful, she will not be beautiful. ” ― Meir Ezra"
        },
        {
            "Number": "2415",
            "Quote": "“When we are right, we earn. When we are wrong, we learn.” ― Vijay Kedia"
        },
        {
            "Number": "2416",
            "Quote": "“There was money to be made giving all these people what they thought they wanted.” ― George Akerlof, Robert Shiller"
        },
        {
            "Number": "2417",
            "Quote": "“Willingness melts resistance.” ― Meir Ezra"
        },
        {
            "Number": "2418",
            "Quote": "“Defeated? Learn from it. Move forward. You're stronger now. Reach out for help. No shame, only learning. Seek out those you can learn from.” ― Waylon H. Lewis"
        },
        {
            "Number": "2419",
            "Quote": "“The most important principle for self discovery and to taste success is rather than changing other's attitude changes your own. And always remember same sun which melts the butter also hardens the clay” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2420",
            "Quote": "“If you are working yourself to death, how can any investor feel safe, confident and secure investing in you?” ― Loren Weisman"
        },
        {
            "Number": "2421",
            "Quote": "“A photograph shouldn't be just a picture, it should be a philosophy.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2422",
            "Quote": "“Your greatness is revealed not by the lights that shine upon you but by the light that shines within.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "2423",
            "Quote": "“The only principle which will make you more content, less bitter is to live a life that has \"Less excuses, more results. Less distraction, more focus. Less me, more we. Live with \"Gratitude\" not with \"Greytitude” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "2424",
            "Quote": "“Của cho không bằng cách cho” ― Adrian Gostick, The 24-Carrot Manager"
        },
        {
            "Number": "2425",
            "Quote": "“Vision is the culmination of thought.” ― Utkarsh Sharma"
        },
        {
            "Number": "2426",
            "Quote": "“If you know how You do not need to know where...” ― Петър Кръстев Petur Krustev"
        },
        {
            "Number": "2427",
            "Quote": "“An entrepreneur is one who turns a business opportunity into a successful achievement.” ― Kamal Khanzada (Ahmed Kamal Khan)"
        },
        {
            "Number": "2428",
            "Quote": "“The purpose of a profession is to fulfil the personal wishes of a prospect.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2429",
            "Quote": "“Any family without an entrepreneur has a limited hope.” ― Auliq Ice"
        },
        {
            "Number": "2430",
            "Quote": "“Get focused and make your business your priority. When you sacrifice time and energy for something you want, sooner or later, you will be rewarded for your efforts.” ― Germany Kent"
        },
        {
            "Number": "2431",
            "Quote": "“The world of business is becoming one of the great cathedrals of spirit. Businesses are becoming places in which meaning can be created, in which mutuality begins to happen. Business is the force in the world that is fulfilling every major value of the great spiritual traditions: intimacy, trust, a shared vision, cooperation, collaboration, friendship, and ultimately love. After all, what is love at its core? It is the movement of evolution to higher and higher levels of mutuality, recognition, union and embrace.” ― Marc Gafni"
        },
        {
            "Number": "2432",
            "Quote": "“Analytics are people. And relevance, in terms of offering targeted messages and experiences, is a form of showing respect for your customer’s time and interests. So is discretion regarding their privacy.” ― Kate O'Neill, Pixels and Place: Connecting Human Experience Across Physical and Digital Spaces"
        },
        {
            "Number": "2433",
            "Quote": "“The more customers you keep, the fewer customers you have to find.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2434",
            "Quote": "“If you are only focused on the Money... You risk completely overlooking the People.” ― Ted Rubin"
        },
        {
            "Number": "2435",
            "Quote": "“From The Necessity of Finance book: \"In our modern civilization, to struggle financially means to struggle in every aspect of life (Criniti, 2013, p. 21).” ― Anthony M. Criniti IV, The Necessity of Finance: An Overview of the Science of Management of Wealth for an Individual, a Group, or an Organization"
        },
        {
            "Number": "2436",
            "Quote": "“An approach seeking to minimise variance or minimise downsides often involves behaviour that seems nonsensical to those who don’t understand what the actor is trying to do.” ― Rory Sutherland, Alchemy: The Dark Art and Curious Science of Creating Magic in Brands, Business, and Life"
        },
        {
            "Number": "2437",
            "Quote": "“Salespeople need to “Earn the right” to become suppliers more than they ever did before.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2438",
            "Quote": "“Getting rid of human judgments altogether—even those from highly experienced and credentialed people—and relying solely on numbers plugged into formulas, often yields better results.” ― Andrew McAfee, Machine, Platform, Crowd: Harnessing Our Digital Future"
        },
        {
            "Number": "2439",
            "Quote": "“If some musicians put half as much effort in to the business side as they do their outer look and appearances, they could be twice as far.” ― Loren Weisman"
        },
        {
            "Number": "2440",
            "Quote": "“A great sports car that goes from 0-60 in 3.9 seconds is just a fact. To the wrong audience, it’s irrelevant. But to the right audience, it’s a passion.” ― David Brier"
        },
        {
            "Number": "2441",
            "Quote": "“Your investment belongs to the market and your profits belong to you.” ― Vijay Kedia"
        },
        {
            "Number": "2442",
            "Quote": "“The most basic question a CEO must answer is whether the product has achieved a value breakthrough. Without that, the revenue engine is irrelevant. Once product-market fit is confirmed, the next step is to clearly identify your ideal customer profile (ICP) and your business model. This includes the lifetime value (LTV) profile of your company. Assuming a strong product, a clear ICP, and a solid understanding of the constraints composed by your unit economics, the path forward is clear. Then, the focus will turn to uplifting the maturity of your revenue engine and scaling it efficiently.” ― Tom Mohr, Scaling the Revenue Engine"
        },
        {
            "Number": "2443",
            "Quote": "“In good organizations, people can focus on their work and have confidence that if they get their work done, good things will happen for both the company and them personally. It is a true pleasure to work in an organization such as this. Every person can wake up knowing that the work they do will be efficient, effective, and make a difference for the organization and themselves. These things make their jobs both motivating and fulfilling. “In a poor organization, on the other hand, people spend much of their time fighting organizational boundaries, infighting, and broken processes. They are not even clear on what their jobs are, so there is no way to know if they are getting the job done or not. In the miracle case that they work ridiculous hours and get the job done, they have no idea what it means for the company or their careers. To make it all much worse and rub salt in the wound, when they finally work up the courage to tell management how fucked-up their situation is, management denies there is a problem, then defends the status quo, then ignores the problem.” ― Ben Horowitz, The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers"
        },
        {
            "Number": "2444",
            "Quote": "“For the most part, the best opportunities now lie where your competitors have yet to establish themselves, not where they're already entrenched. Microsoft is struggling to adapt to that new reality.” ― Paul G Allen, Idea Man"
        },
        {
            "Number": "2445",
            "Quote": "“Willingness eliminates stupidity.” ― Meir Ezra"
        },
        {
            "Number": "2446",
            "Quote": "“Englisch lernen mit Englisch Sprachkurs für Anfänger & Fortgeschrittene, sowie für Business-Englisch in Frankfurt, Hamburg, Berlin. Du suchst den passenden Englisch Sprachkurs, um endlich Deine Englischfähigkeiten zu verbessern? Hier finden Sie alle Infos zum Thema Sprachkurs, Gruppenkurse, High Intense Kurse, 60 Plus Gruppenkurse , Firmenkurse. Sie haben die freie Wahl des Kursortes! Lernen Sie Englisch an 62 Kursorten in Deutschland und verschiedenen Kursorten auf Mallorca, in Frankreich und Italien. Oder entscheiden Sie sich für unsere Inhouse-Trainings mit freier Termin- und Standortwahl. Mit unseren einzigartigen Englischkursen können Sie bis zu 900 englische Vokabeln in nur 3-6 Tagen lernen oder perfektionieren: 1. Besonders effektive und intensive Englischkurse 2. Geeignet für jedes Sprachlevel und jedes Alter 3. Einzigartige Erfolgsmethode: Englischkurs mit Spaß 4. Staatlich anerkannte Englischkurse mit Zertifikat 5. Offizielle Bildungsprämien und -zuschüsse 6. Sprachkurs mit Zufriedenheits- und Lerngarantie www fremdsprache.de” ― AlphaGroup"
        },
        {
            "Number": "2447",
            "Quote": "“Customer service has everything to do with consistency, systems, training, and the habits you and your team create.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2448",
            "Quote": "“When you are on top of your game you don’t have to talk about it, the world will do that for you.” ― Dorethia Kelly"
        },
        {
            "Number": "2449",
            "Quote": "“Make something people want and sell that, or be someone people need and sell you.” ― Ryan Lilly"
        },
        {
            "Number": "2450",
            "Quote": "“If you spend your life trying to be good at everything, you will never be great at anything.” ― Tom Rath, Strengths Based Leadership: Great Leaders, Teams, and Why People Follow: A Landmark Study of Great Leaders, Teams, and the Reasons Why We Follow"
        },
        {
            "Number": "2451",
            "Quote": "“The point of school, after all, isn’t to do homework. The point of school is to learn. It was a mistake to assume that teachers—or anyone else, for that matter—automatically knew what was best for me. Rules are there to help us—to create a culture, to streamline productivity, and to promote success. But we’re not computers that need to be programmed. If you approach your bosses or colleagues with respect, and your goals are in alignment, there’s often room for a little customization and flexibility. And on the other side, those in positions of power shouldn’t force people to adhere to a plan for the sake of protocol. The solution, always, is to listen carefully—to your own needs and to those of the people around you.” ― Biz Stone"
        },
        {
            "Number": "2452",
            "Quote": "“Investing is a business, investment is a project and investor is a promoter.” ― Vijay Kedia"
        },
        {
            "Number": "2453",
            "Quote": "“If you have a fixed viewpoint that you cannot change, it’s not you – if it was your viewpoint, you could change it.” ― Meir Ezra"
        },
        {
            "Number": "2454",
            "Quote": "“Damage my health and I will return with scientific discovery to demolish your toxic business model.” ― Steven Magee"
        },
        {
            "Number": "2455",
            "Quote": "“The reward for living my life in this manner? An existence like that of a seagull picking up scraps from the back of a fishing boat. Surviving day to day. Nothing left for tomorrow and no idea what tomorrow should be.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2456",
            "Quote": "“Life is not about receiving. It is about giving, knowing that someone might learn, understand or grow that little bit from the experience” ― Peter Ellis"
        },
        {
            "Number": "2457",
            "Quote": "“Business is about creating VALUE for people. And earning money is the OUTCOME of creating value for people!” ― Kevin J. Donaldson, 10 Secrets of the New Rich: How To Join The World's New Breed Of Millionaires"
        },
        {
            "Number": "2458",
            "Quote": "“Your company culture is made up of the family rules of your business that establish consistent expectations among all.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2459",
            "Quote": "“Treat others with respect. Carry yourself with an air of humility. Nobody likes to work with someone who is arrogant, egotistical or a “know-it-all.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "2460",
            "Quote": "“The best way to become essential for the companies that buy your products is to help them grow their business (i.e., to produce meaningful ROI) in unique ways. That is what solving customer problems is all about, and it’s as neat an encapsulation of the difference between enterprise and consumer software as we can offer.” ― Blair Reeves, Building Products for the Enterprise: Product Management in Enterprise Software"
        },
        {
            "Number": "2461",
            "Quote": "“Youths are the hope of today, and the joy of tomorrow.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "2462",
            "Quote": "“Collective leadership effectiveness drives business performance.” ― William A. Adams, Mastering Leadership: An Integrated Framework for Breakthrough Performance and Extraordinary Business Results"
        },
        {
            "Number": "2463",
            "Quote": "“Reputation is the panacea for those who lack confidence in their own decisions.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2464",
            "Quote": "“You would be surprised at how many corporations \"none of your business\" applies to!” ― Steven Magee"
        },
        {
            "Number": "2465",
            "Quote": "“Interest in such organizations is too often linked to the fringe and marginal or thought to be little more than conspiracy theories. While such a critique is not entirely incorrect, we will see that hidden organizations are far more common, more important, and more consequential than we have typically allowed ourselves to admit. As a result, they also need to be better integrated into thinking about organizations by scholars, policymakers, and everyday citizens.” ― Craig Scott, Anonymous Agencies, Backstreet Businesses, and Covert Collectives: Rethinking Organizations in the 21st Century"
        },
        {
            "Number": "2466",
            "Quote": "“If one person in an organization decides to be responsible, the whole organization will be responsible.” ― Meir Ezra"
        },
        {
            "Number": "2467",
            "Quote": "“The numerous choices you have around yourself are often superficial; they don’t matter. The art lies in doing more with less. Minimal requirements, more work.” ― Vishal Ostwal, Pocket Productivity: A Simplified Guide to Getting More Outcomes from Your Hard Work and Giving Your Hustle a Meaning"
        },
        {
            "Number": "2468",
            "Quote": "“If you're not a smart worker, it's about how hard you work double the amount from the heart; if you're not a hard worker, it's about how smart you work but times two from the brain.” ― Criss Jami, Healology"
        },
        {
            "Number": "2469",
            "Quote": "“Batching or “bucketing” your tasks is ripping the Band- Aid off whenever you have to deal with ongoing activities.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2470",
            "Quote": "“When Warren was a little boy fingerprinting nuns and collecting bottle caps, he had no knowledge of what he would someday become. Yet as he rode his bike through Spring Valley, flinging papers day after day, and raced through the halls of The Westchester, pulse pounding, trying to make his deliveries on time, if you had asked him if he wanted to be the richest man on earth—with his whole heart, he would have said, Yes. That passion had led him to study a universe of thousands of stocks. It made him burrow into libraries and basements for records nobody else troubled to get. He sat up nights studying hundreds of thousands of numbers that would glaze anyone else’s eyes. He read every word of several newspapers each morning and sucked down the Wall Street Journal like his morning Pepsi, then Coke. He dropped in on companies, spending hours talking about barrels with the woman who ran an outpost of Greif Bros. Cooperage or auto insurance with Lorimer Davidson. He read magazines like the Progressive Grocer to learn how to stock a meat department. He stuffed the backseat of his car with Moody’s Manuals and ledgers on his honeymoon. He spent months reading old newspapers dating back a century to learn the cycles of business, the history of Wall Street, the history of capitalism, the history of the modern corporation. He followed the world of politics intensely and recognized how it affected business. He analyzed economic statistics until he had a deep understanding of what they signified. Since childhood, he had read every biography he could find of people he admired, looking for the lessons he could learn from their lives. He attached himself to everyone who could help him and coattailed anyone he could find who was smart. He ruled out paying attention to almost anything but business—art, literature, science, travel, architecture—so that he could focus on his passion. He defined a circle of competence to avoid making mistakes. To limit risk he never used any significant amount of debt. He never stopped thinking about business: what made a good business, what made a bad business, how they competed, what made customers loyal to one versus another. He had an unusual way of turning problems around in his head, which gave him insights nobody else had. He developed a network of people who—for the sake of his friendship as well as his sagacity—not only helped him but also stayed out of his way when he wanted them to. In hard times or easy, he never stopped thinking about ways to make money. And all of this energy and intensity became the motor that powered his innate intelligence, temperament, and skills.” ― Alice Schroeder, The Snowball: Warren Buffett and the Business of Life"
        },
        {
            "Number": "2471",
            "Quote": "“Keep an eye on the idiot in your team, if you don't see one, its you.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2472",
            "Quote": "“I have discovered fallen trees across my path and have possessed neither the strength to move them nor the patience or tenacity to find an alternative way round. I have simply returned to where I came from, and told myself there had been no other choice.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2473",
            "Quote": "“Our new reality calls for different, evidence-based approaches to developing leaders. The transformation and well-being of organisations, communities, nations and the world at large depend on it.” ― Ruby Campbell, Scientists in Every Boardroom: Harnessing the Power of Stemm Leaders in an Irrational World"
        },
        {
            "Number": "2474",
            "Quote": "“Love is the reflection of a broken heart in a shattered mirror...” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2475",
            "Quote": "“Worst Decision is Better Than No Decision!” ― Maxim Behar, 111 rules How to Make It"
        },
        {
            "Number": "2476",
            "Quote": "“Never justify someones wrong action, without them apologizing first & admitting their wrongs. If you do. You are not making them better, but you are making them worse on the bad things they do.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "2477",
            "Quote": "“In business, everyone has a different weight.” ― Nabil N. Jamal"
        },
        {
            "Number": "2478",
            "Quote": "“The Tech Humanist approach is an attempt to make the world better by making technology better—better for business and better for humans.” ― Kate O'Neill, Tech Humanist: How You Can Make Technology Better for Business and Better for Humans"
        },
        {
            "Number": "2479",
            "Quote": "“You create willingness.” ― Meir Ezra"
        },
        {
            "Number": "2480",
            "Quote": "“Quality is the best business plan.” ― Hyacil Han, Dropshipping Ultimate Guide: The Expeditive and Accessible Scheme to Earn a Substantial Revenue at Home"
        },
        {
            "Number": "2481",
            "Quote": "“The term cartel was virtually unknown to the American language a generation ago. Like most borrowed words, when first taken over it meant different things to different persons. Time was required to crystallize its meaning. In this country it now commonly refers to international marketing arrangements. In a companion study we have defined such a cartel as an arrangement among, or on behalf of, producers engaged in the same line of business designed to limit or eliminate competition among them.” ― George W. Stocking, Cartels in Action: Case Studies in International Business Diplomacy"
        },
        {
            "Number": "2482",
            "Quote": "“The rapid growth of Message- combined with an outpouring of florists offering consultations in the language of flowers to the streams of brides Marlena and I turned away- caused a subtle but concrete shift in the Bay Area flower industry. Marlena reported that peony, marigold, and lavender lingered in their plastic buckets at the flower market while tulips, lilac, and passionflower sold out before the sun rose. For the first time anyone could remember, jonquil became available long after its natural bloom season had ended. By the end of July, bold brides carried ceramic bowls of strawberries or fragrant clusters of fennel, and no one questioned their aesthetics but rather marveled at the simplicity of their desire. If the trajectory continued, I realized, Message would alter the quantities of anger, grief, and mistrust growing in the earth on a massive scale. Farmers would uproot fields of foxglove to plant yarrow, the soft clusters of pink, yellow, and cream the cure to a broken heart. The prices of sage, ranunculus, and stock would steadily increase. Plum trees would be planted for the sole purpose of harvesting their delicate, clustered blossoms and sunflowers would fall permanently out of fashion, disappearing from flower stands, craft stores, and country kitchens. Thistle would be cleared compulsively from empty lots and overgrown gardens.” ― Vanessa Diffenbaugh, The Language of Flowers"
        },
        {
            "Number": "2483",
            "Quote": "“Business analyst is the one who is adept in confusing the customer, developer and testers simultaneously” ― Nipun Varma, Adventures of an Indian Techie"
        },
        {
            "Number": "2484",
            "Quote": "“To gain your share of the market, you must show how your company is different and how your culture produces a unique experience for your customers, leaving no room for competition. And that, Bombshell, is your brand.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2485",
            "Quote": "“I hate those m***f***z Who make friendship for business purpose....” ― Sajal Ahmed"
        },
        {
            "Number": "2486",
            "Quote": "“How you perceive others is your reality about them, and the same is true for them of you.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "2487",
            "Quote": "“Miss Climpson,\" said Lord Peter, \"is a manifestation of the wasteful way in which this country is run. Look at electricity, Look at water-power. Look at the tides. Look at the sun. Millions of power units being given off into space every minute. Thousands of old maids, simply bursting with useful energy, forced by our stupid social system into hydros and hotels and communities and hostels and posts as companions, where their magnificent gossip-powers and units of inquisitiveness are allowed to dissipate themselves or even become harmful to the community, while the ratepayers' money is spent on getting work for which these women are providentially fitted, inefficiently carried out by ill-equipped policemen like you.” ― Dorothy L. Sayers, Unnatural Death"
        },
        {
            "Number": "2488",
            "Quote": "“Competition in business is a blessing, for without it, we wouldn't be motivated to improve.” ― Nabil N. Jamal"
        },
        {
            "Number": "2489",
            "Quote": "“The world will be a better place when everyone becomes a leader; when everyone finds what he/she was sent to do and does it like no other man’s business.” ― Israelmore Ayivor, Leaders' Watchwords"
        },
        {
            "Number": "2490",
            "Quote": "“Branding is a key communication tool and technique, which provides both consumers and manufactures with a way of differentiating their product or service.” ― Naomi Mc Laughlan, Brand Story Telling: Book #3 in the START-UPS ON A SHOESTRING BUDGET Series"
        },
        {
            "Number": "2491",
            "Quote": "“Only when you can see the good, can you have courage.” ― Meir Ezra"
        },
        {
            "Number": "2492",
            "Quote": "“When you trust your own abilities and those of the people around you, you overcome fear. And when the people you lead trust themselves and you - that you have their best interests at heart and are authentic - is when you and they will achieve the most.” ― Phil Dourado, The 60 Second Leader: Everything You Need to Know about Leadership, in One Minute Bites"
        },
        {
            "Number": "2493",
            "Quote": "“Why is face so important? Face represents one’s self-esteem, reputation, status, and dignity. Face is social currency.” ― Maya Hu-Chan, Saving Face: How to Preserve Dignity and Build Trust"
        },
        {
            "Number": "2494",
            "Quote": "“Vision without action is a daydream, but action without vision is a nightmare.” ― Kaihan Krippendorff"
        },
        {
            "Number": "2495",
            "Quote": "“Your brand exists to differentiate. “Same crap, different day” won’t do it. A day that goes by without breaking some sacred branding rule is a day a brand has lost to rise above the status quo. By breaking those rules with insight, intelligent and innovation, your brand can get heard in a world that’s simply too busy to listen.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "2496",
            "Quote": "“Every leader is different. Every bench is different. Every business is different. So while the complexities change, the work of coaching stays the same keep your clients at the center of the work, push them to use their strengths more and to temper their weaknesses, and illuminate blind spots because these are what really get in the way.” ― Stacy Feiner, Talent Mindset"
        },
        {
            "Number": "2497",
            "Quote": "“In all my experience in both startups and large companies, including and especially at Facebook, I would always prefer - a hundred times prefer - being subject to the rigors of the market, the fickleness of luck, and the whims of users than to navigate the popularity-contest politics of a large company, surrounded by the mediocre duffers who've succeeded in life through nothing more than guile and appearances.” ― Antonio Garcia Martinez, Chaos Monkeys: Obscene Fortune and Random Failure in Silicon Valley"
        },
        {
            "Number": "2498",
            "Quote": "“Your manager wants to believe that you enjoy your job, or at least you won't spit in her coffee when she looks away. At the office, attitude counts for a lot.” ― Terri Tierney Clark, Learn, Work, Lead- Things Your Mentor Won't Tell You"
        },
        {
            "Number": "2499",
            "Quote": "“A few will say no, but many will say yes…remember that every No will get you closer to the many yeses as long as you have a system that works for you.” ― Osayi Emokpae Lasisi, Your First Virtual Summit: Everything you need to know to create your first successful Virtual Summit"
        },
        {
            "Number": "2500",
            "Quote": "“Steve Jobs gave a small private presentation about the iTunes Music Store to some independent record label people. My favorite line of the day was when people kept raising their hand saying, \"Does it do [x]?\", \"Do you plan to add [y]?\". Finally Jobs said, \"Wait wait — put your hands down. Listen: I know you have a thousand ideas for all the cool features iTunes could have. So do we. But we don't want a thousand features. That would be ugly. Innovation is not about saying yes to everything. It's about saying NO to all but the most crucial features.” ― Derek Sivers"
        },
        {
            "Number": "2501",
            "Quote": "“Creativity is that special something. It can take you from good to great, from want to need, from admiration to infatuation. It is intangible, emotional, and premium-worthy. It’s honest. It’s simple. It’s generous. It’s beautiful to watch and effortless to enjoy. Once you get in touch with your creativity, nothing else is ever the same. It is an energy deep within, one that connects us all.” ― Alan Philips, The Age of Ideas: Unlock Your Creative Potential"
        },
        {
            "Number": "2502",
            "Quote": "“Too much entrepreneurial attitude and too little humane accountability, that's the problem with today's world.” ― Abhijit Naskar, Ain't Enough to Look Human"
        },
        {
            "Number": "2503",
            "Quote": "“Think about your future in a positive way and you will move towards your goals.” ― Aurora Berill"
        },
        {
            "Number": "2504",
            "Quote": "“Civility is crucial to all our interactions, from face-to-face to the ever-changing global digital frontier” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "2505",
            "Quote": "“Business is all about solving people's problems - at a profit.” ― Paul Marsden"
        },
        {
            "Number": "2506",
            "Quote": "“I built them what they wanted and I made a profit off of it. Now they call me a god...What fools these mortals be.” ― Benjamin R. Smith, Atlas"
        },
        {
            "Number": "2507",
            "Quote": "“Great selling involves helping people to make great buying decisions.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2508",
            "Quote": "“Very often managers are just a noise, while the real boss is the project, which we work for and which pays us.” ― Yegor Bugayenko, Code Ahead: Volume 1"
        },
        {
            "Number": "2509",
            "Quote": "“Then, in the 1980's, came the paroxysm of downsizing, and the very nature of the corporation was thrown into doubt. In what began almost as a fad and quickly matured into an unshakable habit, companies were 'restructuring,' 'reengineering,' and generally cutting as many jobs as possible, white collar as well as blue . . . The New York Times captured the new corporate order succintly in 1987, reporting that it 'eschews loyalty to workers, products, corporate structures, businesses, factories, communities, even the nation. All such allegiances are viewed as expendable under the new rules. With survival at stake, only market leadership, strong profits and a high stock price can be allowed to matter'.” ― Barbara Ehrenreich, Bright-Sided: How the Relentless Promotion of Positive Thinking Has Undermined America"
        },
        {
            "Number": "2510",
            "Quote": "“Where we've been defines where we'll go. You can't allow your past to define you, but you can leverage it to create a better future!” ― Colleen Ferrary Bader"
        },
        {
            "Number": "2511",
            "Quote": "“Focusing on Earning the Right will have an incredible effect on the success of every single sales call that you will make from this day on.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2512",
            "Quote": "“If you think training is expensive, try ignorance.” ― Peter Drucker"
        },
        {
            "Number": "2513",
            "Quote": "“Not much in the world ends up being the same as it started out, unless of course it had a very short life cycle.” ― Lorii Myers, Targeting Success, Develop the Right Business Attitude to be Successful in the Workplace"
        },
        {
            "Number": "2514",
            "Quote": "“Finding happiness by delivering it.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2515",
            "Quote": "“If you don´t have enough money, you might have too many excuses.” ― Alin Sav"
        },
        {
            "Number": "2516",
            "Quote": "“Most of the things that stop us aren’t things that we can’t do, but things we refuse to learn.” ― James Woosley, Conquer the Entrepreneur's Kryptonite: Simple Strategic Planning for You and Your Business"
        },
        {
            "Number": "2517",
            "Quote": "“Your dreams can earn you money and provision when you don’t only have fans, but customers.” ― Israelmore Ayivor, Shaping the dream"
        },
        {
            "Number": "2518",
            "Quote": "“Hookers, Hondas and Hollywood all approach customers with a different mindset than the rest of the business world. Whereas most businesses talk about the importance of \"customer service,\" agents, mechanics and people of the night talk about \"servicing customers.\" It is an important distinction, as customer service is generally a reactive process in which professionals and businesses respond to the needs of their clients, while servicing customers involves exploration to discover what the customer needs in order to start firing all the cylinders.” ― Ari Gold, The Gold Standard: Rules to Rule By"
        },
        {
            "Number": "2519",
            "Quote": "“Time is your most valuable currency!” ― John Di Lemme"
        },
        {
            "Number": "2520",
            "Quote": "“Stay open to the possibility that a relationship may evolve over time. Have Patience.” ― Michelle Lederman, 11 Laws of Likability"
        },
        {
            "Number": "2521",
            "Quote": "“To be relevant as a nation in this twenty first century, youths must be empowered in such a way that no obstacle can stand on their ways.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "2522",
            "Quote": "“In Business, you don't get what you deserve, you get what you negotiate.” ― annonymous"
        },
        {
            "Number": "2523",
            "Quote": "“Business people don’t actually realize they are using military language, they are just confused as to why they are so angry.” ― Richie Norton"
        },
        {
            "Number": "2524",
            "Quote": "“I can’t and won’t promise you magic sales fairy dust or the Jedi Mind Trick for salespeople – they simply don’t exist.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2525",
            "Quote": "“Smile, ask, listen, provide, thank\" then \"take time out to have fun & renew yourself\" but \"always dream up more questions\". - Julia Woodman” ― Jay Woodman"
        },
        {
            "Number": "2526",
            "Quote": "“So, you don’t have money to invest in your brand? You do have money for damage control, right? Here’s the thing: anyone can make your brand inferior in your absence.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "2527",
            "Quote": "“True innovation and disruption happens outside of the accepted playing field, outside of the court, outside of the battleground. Disrupruption breaches the field and changes the game.” ― Tony Curl"
        },
        {
            "Number": "2528",
            "Quote": "“A lie near to truth is always difficult to catch” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2529",
            "Quote": "“Whether you're a bride or a birthday boy, your options are much the same. Cake comes in chocolate, yellow, or white. Frosting comes in chocolate or vanilla buttercream, or you can opt for whipped cream. Fillings are either chocolate or vanilla custard, fresh bananas, or strawberries or raspberries in season. For birthday cakes, you can have either flowers or balloons in your choice of colors. For wedding cakes, you can add either fondant or marzipan covering, or either smooth or basket-weave buttercream, in white or ivory, with either pearl-like dots or ribbony swags made of frosting, and fondant faux flowers are extra.” ― Stacey Ballis, Wedding Girl"
        },
        {
            "Number": "2530",
            "Quote": "“The difference between impossible and possible is a willing heart.” ― Lolly Daskal, Thoughts Spoken From The Heart"
        },
        {
            "Number": "2531",
            "Quote": "“A wise man is someone who knows how to convert obstacles into resources.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2532",
            "Quote": "“We’re women. Not girls. I am a twenty-seven-year-old pioneer in the wellness space who reincorporated her company as a B-corp without needing to hire a lawyer. Would you refer to my male equivalent as a boy?” ― Jessica Knoll, The Favorite Sister"
        },
        {
            "Number": "2533",
            "Quote": "“The biggest challenge in business isn’t your competition, it's what goes on inside your own head.” ― Barbara Corcoran"
        },
        {
            "Number": "2534",
            "Quote": "“No secrecy, no business.” ― Toba Beta, Master of Stupidity"
        },
        {
            "Number": "2535",
            "Quote": "“free citizenship may be less safe, in the long run, in the keeping of big business than in that of the representatives of the people. . . . Vested interests, in other words, may become a harder taskmaster than democratic governments.” ― Hilda Matheson, Broadcasting"
        },
        {
            "Number": "2536",
            "Quote": "“Its easier to start a global business than a local one, make your business one where you can work from anywhere in the world” ― Roger James Hamilton"
        },
        {
            "Number": "2537",
            "Quote": "“What you of the CHOAM directorate seem unable to understand is that you seldom find real loyalties in commerce ... Men must want to do things of their own innermost drives. People, not commercial organisations or chains of command, are what make great civilizations work, every civilization depends upon the quality of the individuals it produces. If you overorganize humans, over-legalize them, suppress their urge to greatness — they cannot work and their civilization collapses.” ― Frank Herbert, Children of Dune"
        },
        {
            "Number": "2538",
            "Quote": "“You can’t tax business. Business doesn’t pay taxes. It collects taxes.” ― Ronald Reagan"
        },
        {
            "Number": "2539",
            "Quote": "“Scale yourself. Go beyond what you can do and what you know. Look at your content machine and make it work nonstop, seamlessly, and at scale with or without you.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "2540",
            "Quote": "“If you mean business, then spend your money on the business, not on expensive meals.” ― Sophie Kinsella, I Owe You One"
        },
        {
            "Number": "2541",
            "Quote": "“I don't ever recall any ears going deaf from too much communication, but I've witnessed many mouths fall silent due to a lack of communication.” ― Kerry Brown, Warrior Leadership: A Transformation of Mind, Body & Spirit for Everyday Life and the Workplace"
        },
        {
            "Number": "2542",
            "Quote": "“When used correctly, data is not the enemy of Intuitive Creative Thinkers; it is a powerful friend.” ― Leena Patel, Raise Your Innovation IQ: 21 Ways to Think Differently During Times of Change"
        },
        {
            "Number": "2543",
            "Quote": "“Every day is a training day and every event is a training event.” ― James Pritchert"
        },
        {
            "Number": "2544",
            "Quote": "“Sales can never be done with 'good' skills or 'good' communication or 'thorough' product knowledge.. It can only be done with PASSION and U gotta be a people loving person, to be alive in sales...” ― honeya"
        },
        {
            "Number": "2545",
            "Quote": "“I was excited to do something, even if I didn't know what it was. I think you need that feeling—that excitement, that fire—to make your dreams a reality. (p.59)” ― Injap Sia, Life Principles"
        },
        {
            "Number": "2546",
            "Quote": "“I'm not doing this for a check. I'm doing it to dent the fucking universe.” ― Cody Higdem"
        },
        {
            "Number": "2547",
            "Quote": "“Do an evening review at the end of the day to reflect on what went well, and what you'd do differently next time.” ― Marilyn Suttle"
        },
        {
            "Number": "2548",
            "Quote": "“Only Boiled Seeds are afraid of failure.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2549",
            "Quote": "“It’s not the customer’s duty to be loyal to you; it’s your duty to be loyal to your customers. Focus on quality, relevancy, and the BEST customer service possible. Make sure your business is creating a service experience so good that it inspires loyalty.” ― Steve Maraboli"
        },
        {
            "Number": "2550",
            "Quote": "“It has been my experience that, even when a man has a sense of humor, it only really carries him to the point where he will join in a laugh at the expense of the other fellow.” ― George Lorimer, Letters from a Self-Made Merchant to His Son"
        },
        {
            "Number": "2551",
            "Quote": "“I would prefer a sword to fight duel, but a pen to plan a war.” ― Robert Thier, Storm and Silence"
        },
        {
            "Number": "2552",
            "Quote": "“Lately...the Peter Principle has given way to the \"Dilbert Principle.\" The basic concept of the Dilbert Principle is that the most ineffective workers are systematically moved to the place where they can do the least damage: management.” ― Scott Adams, The Dilbert Principle: A Cubicle's-Eye View of Bosses, Meetings, Management Fads & Other Workplace Afflictions"
        },
        {
            "Number": "2553",
            "Quote": "“Your brand is what your customers and potential customers think about you; your culture is who you say you are and how you do business.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2554",
            "Quote": "“Every telecomm company is as big a corporate welfare bum as you could ask for. Try to imagine what it would cost at market rates to go around to every house in every town in every country and pay for the right to block traffic and dig up roads and erect poles and string wires and pierce every home with cabling. The regulatory fiat that allows these companies to get their networks up and running is worth hundreds of billions, if not trillions, of dollars. If phone companies want to operate in the “free market,” then let them: the FCC could give them 60 days to get all their rotten copper out of our dirt, or we’ll buy it from them at the going scrappage rates. Then, let’s hold an auction for the right to be the next big telecomm company, on one condition: in exchange for using the public’s rights-of-way, you have to agree to connect us to the people we want to talk to, and vice-versa, as quickly and efficiently as you can.” ― Cory Doctorow, Context: Further Selected Essays on Productivity, Creativity, Parenting, and Politics in the 21st Century"
        },
        {
            "Number": "2555",
            "Quote": "“Kill the weeds.” ― Adrienne Posey"
        },
        {
            "Number": "2556",
            "Quote": "“World's biggest bluff acts happen inside boardrooms” ― Nipun Varma, Adventures of an Indian Techie"
        },
        {
            "Number": "2557",
            "Quote": "“Opportunities pass by frequently, but people don’t always see them. Taking risks grants you an invisible set of glasses that reveal the many opportunities which surround you.” ― Anas Hamshari, Businessman With An Affliction"
        },
        {
            "Number": "2558",
            "Quote": "“I found a new breed of people, 'Facebook Man' - Comments on anything, but don't even have a single own Status post!!!” ― G S Sreekiran"
        },
        {
            "Number": "2559",
            "Quote": "“Do not worry about the weeds and bushes around your lawn. Those can be taken care of any time. The real issue is, bringing out the quality in the green grass....” ― DEBABRATA SATPATHY"
        },
        {
            "Number": "2560",
            "Quote": "“Your business is your life. And your life is your business.” ― Hrishikesh Agnihotri"
        },
        {
            "Number": "2561",
            "Quote": "“Bucketing your time or your tasks keeps you in the zone.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2562",
            "Quote": "“I have heard Silvius, an excellent physician of Paris, say that lest the digestive faculties of the stomach should grow idle, it were not amiss once a month to rouse them by this excess, and to spur them lest they should grow dull and rusty; and one author tells us that the Persians used to consult about their most important affairs after being well warmed with wine.” ― Michel de Montaigne, The Complete Essays"
        },
        {
            "Number": "2563",
            "Quote": "“Bad news is bad news because it drops your willingness to carry on.” ― Meir Ezra"
        },
        {
            "Number": "2564",
            "Quote": "“The future of humanity depends not on benevolent robots but on benevolent businesses.” ― Kate O'Neill, Tech Humanist: How You Can Make Technology Better for Business and Better for Humans"
        },
        {
            "Number": "2565",
            "Quote": "“When we are able to see the choices we make through the eyes of self-acceptance, we are transformed.” ― Jodi Livon"
        },
        {
            "Number": "2566",
            "Quote": "“My view on marketing is, it is the art of is identifying a market and choosing what to do with it.” ― DON SANTO"
        },
        {
            "Number": "2567",
            "Quote": "“God rewards every act of obedience to His Will.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2568",
            "Quote": "“You have only so much time and energy, so when you spread yourself out, you end up spread thin. You want your achievements to add up, but that actually takes subtraction, not addition: You need to be doing fewer things for more effect instead of doing more things with side effects.” ― Gary Keller, The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results"
        },
        {
            "Number": "2569",
            "Quote": "“Because you're always learning, the chief lesson remains: you still know nothing.” ― Criss Jami, Healology"
        },
        {
            "Number": "2570",
            "Quote": "“67% of all shoppers intend to return home with the item they are shopping for, but that only 24% actually do so.” ― Roy H. Williams, The Wizard of Ads"
        },
        {
            "Number": "2571",
            "Quote": "“Use your profession to fund your passion.” ― Habeeb Akande"
        },
        {
            "Number": "2572",
            "Quote": "“Business success is 80% psychology and 20% mechanics.” ― Tony Robbins"
        },
        {
            "Number": "2573",
            "Quote": "“Money makes a poor for few days rich. Education makes people rich without asking for money.” ― Alin Sav"
        },
        {
            "Number": "2574",
            "Quote": "“If everything is a priority, nothing is.” ― Yuri van der Sluis"
        },
        {
            "Number": "2575",
            "Quote": "“I was not so insane as to attempt to bend events to conform to my policies. On the contrary, I bent my policies to accord with the unforeseen shape of the events.” ― William Duggan, Napoleon's Glance: The Secret of Strategy"
        },
        {
            "Number": "2576",
            "Quote": "“When you put your attention on things, you become a thing — dead. When you focus on your ideas and you create… you are alive. ” ― Meir Ezra"
        },
        {
            "Number": "2577",
            "Quote": "“Think Ahead!! You can't deliver the future, if you are not in the future.” ― Mack Craft"
        },
        {
            "Number": "2578",
            "Quote": "“Don’t keep those people in your life who are completely negative in approach. Eventually these people will stress you out and be the source of your downfall.” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "2579",
            "Quote": "“Personally, I believe that spending heavily on the decorations and display designs makes new clients out of random window shoppers” ― Anas O Hamshari B Sc, Bringing the World of Super Luxury to Kuwait: 2014 Dissertation by Anas O. H. Hamshari, from the European School of Economics in Florence, Italy"
        },
        {
            "Number": "2580",
            "Quote": "“As long as we have MEMORIES, yesterday REMAINS and as long as we have HOPE, tomorrow AWAITS...” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2581",
            "Quote": "“If truth be told, the easy road is nothing more than an armchair in clever disguise. And if you look around, it seems that there are a whole lot of people in the furniture business.” ― Craig D. Lounsbrough"
        },
        {
            "Number": "2582",
            "Quote": "“To 'wow' a client is to win a client.” ― Richie Norton"
        },
        {
            "Number": "2583",
            "Quote": "“The more you get done now, the less you'd have to do later!” ― John Price, Buying a Shop"
        },
        {
            "Number": "2584",
            "Quote": "“Love should be treated like a business deal, but every business deal has its own terms and its own currency. And in love, the currency is virtue. You love people not for what you do for them or what they do for you. You love them for the values, the virtues, which they have achieved in their own character.” ― Ayn Rand"
        },
        {
            "Number": "2585",
            "Quote": "“It may be of interest to future generals to realize that one makes plans to fit circumstances stances and does not create circumstances to fit plans. That way danger lies.” ― William Duggan, Napoleon's Glance: The Secret of Strategy"
        },
        {
            "Number": "2586",
            "Quote": "“Every action has an impact; choose wisely the impact you want to have.” ― Mindy Hall, Leading with Intention: Every Moment Is a Choice"
        },
        {
            "Number": "2587",
            "Quote": "“All selling should spring from service” ― Rasheed Ogunlaru, Soul Trader: Putting the Heart Back into Your Business"
        },
        {
            "Number": "2588",
            "Quote": "“It's not enough to hire to fill a job. It's not even enough to hire on the basis of one's talents. You have to hire based upon a candidate's potential to grow and develop.” ― Michael Dell"
        },
        {
            "Number": "2589",
            "Quote": "“My model for business is The Beatles. They were four guys who kept each other kind of negative tendencies in check. They balanced each other and the total was greater than the sum of the parts. That's how I see business: great things in business are never done by one person, they're done by a team of people.” ― Steve Jobs"
        },
        {
            "Number": "2590",
            "Quote": "“The payroll department was the only organized department they had, carefully and tediously ensuring no one was ever overpaid.” ― Mandy Ashcraft, Small Orange Fruit"
        },
        {
            "Number": "2591",
            "Quote": "“I will look the part. I will act the part. I will deliver that which I have promised to deliver.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2592",
            "Quote": "“In the business world, everyone is paid in two coins: cash and experience. Take the experience first; the cash will come later.” ― Harold Geneen"
        },
        {
            "Number": "2593",
            "Quote": "“Children imitate their parents, employees their managers.” ― Amit Kalantri"
        },
        {
            "Number": "2594",
            "Quote": "“Catch a customer with emotion and you will have a customer for a day; but, capture a customer with value and you will keep a customer for a lifetime. I truly believe in good, old-fashioned values when it comes to business. That is what timelessness is made of! At the end of the day, the question is, “Do you want to build a good hut for a day or do you want to build a good fortress for a lifetime?” Quality, value, understanding the needs of your clientele— that’s how you build a legacy. Connect with people, because you can never underestimate just how many people out there are yearning for any form of good interpersonal connection that they can find and when you can provide that as a brand name, you can allow the person behind your business to shine through. That’s how timelessness is created. It’s not created by luring people into a myth; it’s created by making connections, by remembering people’s names, by being genuinely interested in everybody.” ― C. JoyBell C."
        },
        {
            "Number": "2595",
            "Quote": "“Người ta thường có ảo tưởng rằng có thể công nghiệp hóa một quốc gia bằng cách xây dựng các nhà. Không phải. Bạn công nghiệp hoá bằng cách xây dựng các thị trường.” ― Philip Kotler"
        },
        {
            "Number": "2596",
            "Quote": "“Your business and your life are happening at the same time. Don't separate them. Integrate them.” ― David Taylor-Klaus"
        },
        {
            "Number": "2597",
            "Quote": "“this book is so interesting” ― matbangchothue"
        },
        {
            "Number": "2598",
            "Quote": "“In order to become a better innovator, you're going to learn how to write songs.” ― Cliff Goldmacher, The Reason for the Rhymes: Mastering the Seven Essential Skills of Innovation by Learning to Write Songs"
        },
        {
            "Number": "2599",
            "Quote": "“Living your life is a task so difficult it has never been attempted before.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2600",
            "Quote": "“It’s been said that legends are those who shape change into greatness; shaping change is one of the hallmarks of genius.” ― Julian Pencilliah, The Jetstream : The Rio Carnival"
        },
        {
            "Number": "2601",
            "Quote": "“I used to use business to make money. But I've learned that business is a tool. You can use it to support what you believe in.” ― Po Bronson, What Should I Do with My Life?: The True Story of People Who Answered the Ultimate Question"
        },
        {
            "Number": "2602",
            "Quote": "“One can always sell something by offering the lowest price. But this does not create loyalty to your brand. Never did and never will. It only creates “loyalty” to that price point. As soon as your guest or visitor is offered a better price, he or she will jump ship, leaving you like a scorned lover in the middle of the night.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "2603",
            "Quote": "“If you believe in something, you've got to be in it to the ends of your toes. Taking reasonable risks in part of the challenge, It's the fun.” ― Ray Kroc"
        },
        {
            "Number": "2604",
            "Quote": "“...the pleasures of the world are chiefly folly, and the business of it mostly knavery, and both nothing better than vanity; the men of pleasure tearing one another to pieces from the emulation of spending money, and the men of business from envy in getting it.” ― Henry Fielding, Joseph Andrews"
        },
        {
            "Number": "2605",
            "Quote": "“In a free enterprise, the community is not just another stakeholder in business, but is in fact the very purpose of its existence.” ― Jamsetji Tata"
        },
        {
            "Number": "2606",
            "Quote": "“Make what you have to offer desired and scarce to make it valuable.” ― Meir Ezra"
        },
        {
            "Number": "2607",
            "Quote": "“We, newbies and young programmers, don't like chaos because it makes us dependent on experts. We have to beg for information and feel bad” ― Yegor Bugayenko, Code Ahead: Volume 1"
        },
        {
            "Number": "2608",
            "Quote": "“It's about \"Moments,\" not Milestones.” ― Ted Rubin"
        },
        {
            "Number": "2609",
            "Quote": "“Hungry people always win.” ― Alin Sav"
        },
        {
            "Number": "2610",
            "Quote": "“Associations must evolve if they are to survive into the future.” ― Omer Soker, The Future of Associations"
        },
        {
            "Number": "2611",
            "Quote": "“Quite rapidly Etta became acquainted with the realities of poverty in one of its loneliest forms -- that of the poor middle-class girl looking for a job. Only youth can engage in this struggle and survive as a vital human entity. For the other ones it is death, death of the spirit, because the pittance, the bit of bread and drink, the wisp of clothing, the flicker of fire must be begged of Business, not even as charity, but as a gracious boon in exchange for the best waking hours. It is always your money _and_ your life. Not that Business is intelligently ruthless, don't think it. Business is like a huge cretin, scuffing its great feet over the flower-beds of life while it thinks itself the most wonderful puffing billy, self-invented into the bargain.” ― Richard Aldington, Women Must Work"
        },
        {
            "Number": "2612",
            "Quote": "“Bravery without forethought, causes a man to fight blindly and desperately like a mad bull. Such an opponent, must not be encountered with brute force, but may be lured into an ambush and slain.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "2613",
            "Quote": "“Let's face it. We live in a command-based system, where we have been programmed since our earliest school years to become followers, not individuals. We have been conditioned to embrace teams, the herd, the masses, popular opinion -- and to reject what is different, eccentric or stands alone. We are so programmed that all it takes for any business or authority to condition our minds to follow or buy something is to simply repeat a statement more than three or four times until we repeat it ourselves and follow it as truth or the best trendiest thing. This is called \"programming\" -- the frequent repetition of words to condition us how to think, what to like or dislike, and who to follow.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "2614",
            "Quote": "“A social network everyone said they hated but no one could stop logging in to went public at a valuation of one-hundred-odd billion dollars, its grinning founder ringing the opening bell over video chat, a death knell for affordable rent in San Francisco.” ― Anna Wiener, Uncanny Valley"
        },
        {
            "Number": "2615",
            "Quote": "“The job of human resources is to make sure that resources come to work with their hearts and go back to their homes with happiness.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2616",
            "Quote": "“Wal-Mart's business in the United States is stagnating, growing only because the company continues to relentlessly open new stores. But if Wal-Mart takes environmental responsibility seriously, if its stores become models for energy conservation and for doing minimal environmental harm (they are known for the opposite right now), that will be pioneering, and it might also be attractive to some Americans who have avoided Wal-Mart. If those stores are filled with products made by factory workers who are treated in a civilized fashion, products that do not damage the environment in the course of being made, products made in sustainable ways with minimal packaging, that will represent a pivot point, not just for Wal-Mart, or for retailing, but for capitalism. Nothing could do more to jump-start Wal-Mart's business than for Wal-Mart to find its soul. And of course, Wal-Mart's scale means that if it starts to take the design of its buildings and the impact of its products seriously, all its competitors will have no choice but to do the same. The virtuous Wal-Mart effect would ripple widely. It would ripple around the world.” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "2617",
            "Quote": "“Loss means separateness.” ― Meir Ezra"
        },
        {
            "Number": "2618",
            "Quote": "“Have an attitude of positive expectation.” ― Germany Kent"
        },
        {
            "Number": "2619",
            "Quote": "“If there's one lesson I can pass along to people in situations like mine, it's that the best way to see a program through -- and it took me a long time to learn this -- is simply to accept the help, cooperate, and let others do what they think is worthwhile. In the meantime, continue racing to the finish line.” ― Joe Sutter"
        },
        {
            "Number": "2620",
            "Quote": "“...After all, the chief business of the American people is business. They are profoundly concerned with producing, buying, selling, investing and prospering in the world. I am strongly of the opinion that the great majority of people will always find these are the moving impulses of our life. But it is only those who do not understand our people, who believe that our national life is entirely absorbed by material motives. We make no concealment of the fact that we want wealth, but there are many other things that we want much more. We want peace and honor, and that charity which is so strong an element of all civilization. The chief ideal of the American people is idealism.” ― Calvin Coolidge"
        },
        {
            "Number": "2621",
            "Quote": "“Don't focus all your time and effort on creating the templates & perfecting the documents. Answering key product questions is more critical.” ― Brian Lawley, Optimal Product Process"
        },
        {
            "Number": "2622",
            "Quote": "“The only reason you can lose or fail is insisting on being right or wrong.” ― Meir Ezra"
        },
        {
            "Number": "2623",
            "Quote": "“Many companies expect loyal customers without providing loyal service. This has been the visionary failure of countless corporations.” ― Steve Maraboli"
        },
        {
            "Number": "2624",
            "Quote": "“It’s all about “Priorities” There's No Such Thing as \"Busy” ― Abhishek Shukla"
        },
        {
            "Number": "2625",
            "Quote": "“If you didn’t go into business to make money then you’re either lying or you have a hobby, not a business. And yes I know all about delivering value, changing the world, etc. but how much of that are you going to do if you’re broke? How many people can you help?” ― Allan Dib, The 1-Page Marketing Plan: Get New Customers, Make More Money, And Stand out From The Crowd"
        },
        {
            "Number": "2626",
            "Quote": "“In organizations where employees are happy you find two things present: trust and respect.” ― Laurie Buchanan, PhD"
        },
        {
            "Number": "2627",
            "Quote": "“An average trader loses money, so in this profession, you need to be way above average to make consistent money trading the markets.” ― Henrique M. Simões, Trading Course: How to Become a Consistently Winning Trader"
        },
        {
            "Number": "2628",
            "Quote": "“In the past, I have all too often listened without hearing, asking questions when I had no intention of hearing the answer or understand my customer’s requirements.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2629",
            "Quote": "“Some consumers buy products not because they are ‘better” in any way, but simply because they are popular. What they’re buying is not just a product, but also a piece of popularity itself.” ― Derek Thompson, Hit Makers: The Science of Popularity in an Age of Distraction"
        },
        {
            "Number": "2630",
            "Quote": "“If they can't figure out what pricing should be, they shouldn't be in their jobs. But if we believe they should be in their jobs, then they should be in charge or pricing.” ― Robert Iger, The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
        },
        {
            "Number": "2631",
            "Quote": "“Nothing can hurt you while you are willing.” ― Meir Ezra"
        },
        {
            "Number": "2632",
            "Quote": "“The world is a busy place filled with many busy businesses, both the Godly and the ungodly. It means before you go on to accept any activity or event that comes into the world, you must weigh its Values, examine the Virtues, listen to Views and then you give your Verdict. Satan is not wise; he is just crafty!” ― Israelmore Ayivor"
        },
        {
            "Number": "2633",
            "Quote": "“Asking the appropriate questions means understanding exactly what your customer is trying to achieve” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2634",
            "Quote": "“Fools work while the wise play.” ― Maxime Lagacé"
        },
        {
            "Number": "2635",
            "Quote": "“Best practices are particularly valuable to those who are unfamiliar with email’s unique, often confusing rules.” ― Chad White, Email Marketing Rules"
        },
        {
            "Number": "2636",
            "Quote": "“ROR: Return on Relationship™, #RonR… simply put the value that is accrued by a person or brand due to nurturing a relationship. ROI is simple $’s and cents. ROR is the value (both perceived and real) that will accrue over time through connection, trust, loyalty, recommendations and sharing.” ― Ted Rubin"
        },
        {
            "Number": "2637",
            "Quote": "“Whatever achievements and successes I've had didn't happen overnight. It is all a product of guidance, hard work, careful planning, and intense, passionate execution over many years. (p. 69)” ― Injap Sia, Life Principles"
        },
        {
            "Number": "2638",
            "Quote": "“Don't be afraid if your idea is crazy, because good things come from crazy ideas. (p. 96)” ― Injap Sia, Life Principles"
        },
        {
            "Number": "2639",
            "Quote": "“Poor practices are blunting email marketing’s effectiveness and keeping its ROI from being truly awesome.” ― Chad White, Email Marketing Rules"
        },
        {
            "Number": "2640",
            "Quote": "“When we are connected to the source, we will not be afraid of any task set before us.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2641",
            "Quote": "“A business owner who is not willing to invest in their business is a business owner who shouldn't be in business.” ― Victoria Barnes"
        },
        {
            "Number": "2642",
            "Quote": "“In business, sir, one has no friends, only correspondents. ” ― Alexandre Dumas"
        },
        {
            "Number": "2643",
            "Quote": "“Fear in the absence of knowledge breeds irrationality. We should always seek knowledge, even in the face of fear.” ― Biz Stone, Things a Little Bird Told Me: Confessions of the Creative Mind"
        },
        {
            "Number": "2644",
            "Quote": "“Don't say negative things about your spouse and children.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2645",
            "Quote": "“It's not everyone that likes RnB, Hippop or Hiplife. However, each of them has their fans. Meaning not everyone will like you as a person, your ideologies or your business. But if you persist and strategically position yourself, then you will attract a segment of the market that loves everything about you.” ― Oscar Bimpong"
        },
        {
            "Number": "2646",
            "Quote": "“Respect, wealth, property, friendship, even love. Did I expect to simply fall over each of them as I strolled aimlessly through the years? Was I expecting my whole life to be some form of lucky accident?” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2647",
            "Quote": "“Sometimes even a \"Yes\" can be fatal for our Souls” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "2648",
            "Quote": "“In MLM 10 people sign up and 11 leave.” ― Alin Sav"
        },
        {
            "Number": "2649",
            "Quote": "“Speakers are very busy people, with their own lives. Once you remember that sentence then it’s easy to know how to treat them and attract them.” ― Osayi Emokpae Lasisi, Your First Virtual Summit: Everything you need to know to create your first successful Virtual Summit"
        },
        {
            "Number": "2650",
            "Quote": "“If you want to make others feel good, start by feeling good yourself.” ― Michelle Tillis Lederman, The 11 Laws of Likability: Relationship Networking . . . Because People Do Business with People They Like"
        },
        {
            "Number": "2651",
            "Quote": "“The business would do good to understand that success or failure is not final in Data Science. For this reason, the business should develop a persistent spirit.” ― Damian Mingle"
        },
        {
            "Number": "2652",
            "Quote": "“The term 'networking' is simply another way to think about how to start a relationship. Our relationships are our network.” ― Michelle Tillis Lederman, 11 Laws of Likability"
        },
        {
            "Number": "2653",
            "Quote": "“Millionaires don't play the blame game but the gain game.” ― Dee Dee Artner"
        },
        {
            "Number": "2654",
            "Quote": "“Most startups eventually pivot to adjust to what the market is telling them.” ― Alejandro Cremades, The Art of Startup Fundraising"
        },
        {
            "Number": "2655",
            "Quote": "“Stagnancy will suffocate a business… Leadership must be dynamic and evolving to ensure successful growth, enhancement, and longevity.” ― Steve Maraboli"
        },
        {
            "Number": "2656",
            "Quote": "“The Subjectivity of Value: Value is determined by individual buyers and sellers and not by government. There is no product or service which has a fixed or definite value. Because circumstances, scenarios, and objectives vary indefinitely, value also varies indefinitely. Value is subjective in the same way that needs are subjective.” ― Hendrith Vanlon Smith Jr"
        },
        {
            "Number": "2657",
            "Quote": "“One of the really tough things is figuring out what questions to ask. Once you figure out the question, then the answer is relatively easy.” ― Ashlee Vance"
        },
        {
            "Number": "2658",
            "Quote": "“Learn how to lead, with your body and actions, not words.” ― Francis Shenstone, The Explorer's Mindset: Unlock Health Happiness and Success the Fun Way"
        },
        {
            "Number": "2659",
            "Quote": "“The potential of controlling and living a successful life according to your terms depends on how you think. Your perception is your world. You can create the life you want and in fact, you can even shape the way you want it.” ― Dee Dee Artner"
        },
        {
            "Number": "2660",
            "Quote": "“Character counts. A lot. The right leadership can be more important than the right idea, the right team, or even the right business model.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "2661",
            "Quote": "“Hug your customers but also offer handshake to your competitors.” ― Amit Kalantri"
        },
        {
            "Number": "2662",
            "Quote": "“Avoiding Chargebacks \"Depending on the type of business, the frequency of charge backs will be higher for some businesses and more difficult to defend. Learning15 the proper way to handle a customer chargeback will help the owner and reduce the frequency. Having to pay charge backs can be very costly to the business owner resulting in losses. It could also be very discouraging to a new business owner knowing that he has to pay a penalty, as well as refund services rendered. It would be a good idea to be aware of the things about which your customers complain frequently and make it a goal to correct, improve, or remove it. It would be very unfortunate to learn of a damaging remark about your operation made on the Internet, rather than face- to- face. Make it a point to inquire of your customer whether he was dissatisfied. Make conversation with your customer and if the customer has a complaint, make every effort to resolve it as soon as possible. Charge backs could get very costly and sometimes settling the dispute with the customer could save you money. However, there will be times when the refund should not be given or attempts to settle this on the spot should not be made. The business owner will have to use his own judgment. Jesus counsels us to “Love your enemies, do good to them which hate you, Luke 6:27, (KJV).” No doubt some business owners will have difficulty doing this when the occasion arises, and some may have learned that this is the way to go. But, I encourage you to try this. As you do more and more business, you will find this to be a very necessary way for you to resolve conflicts in your business. It will be easier to do this than to resist, as Jesus said in Matthew 5:25 (KJV), “Agree with thine adversary quickly whilst thou art in the way with him.; lest at any time the adversary deliver thee to the judge, and the judge deliver thee to the officer, and thou be cast into prison.” Being cast into prison may be an extreme outcome, but we can avoid further conflicts if we would just humble ourselves and strive to resolve our conflicts. If it is any consolation, there are rewards for acting with love. Luke 6:35 says, “But love thee your enemies and do good and lend, hoping for nothing again; and your reward shall be great, and ye shall be the children of the Highest: for he is kind unto the unthankful and to the evil.” As one can see, business owners have a higher degree of responsibility because of the number of people with whom he/she interacts.” ― Gail Cavanaugh, Retailers Guide to Merchant Services"
        },
        {
            "Number": "2663",
            "Quote": "“Confidence believes you are able. Competence knows you are able.” ― Lolly Daskal"
        },
        {
            "Number": "2664",
            "Quote": "“If you're in the business of making something, be in the business of making something great” ― Robert Iger, The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
        },
        {
            "Number": "2665",
            "Quote": "“To have money all you need to do is change your mind about money. How much you have right now is entirely monitored by your viewpoint on money.” ― Meir Ezra"
        },
        {
            "Number": "2666",
            "Quote": "“Don't let any situation intimidate you anymore, don't accept defeat anymore.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2667",
            "Quote": "“Just finished [Capitalist in North Korea]—fascinating! What an experience. Wow.\" —Justin Rohrlich, Emmy Award Winner, Head Writer, Minyanville's World In Review” ― Felix Abt"
        },
        {
            "Number": "2668",
            "Quote": "“It is the consumers who make poor people rich and rich people poor.” ― Ludwig von Mises"
        },
        {
            "Number": "2669",
            "Quote": "“Consumers today have become a cynical mob of buyers who believe the reviews and ratings of complete strangers much more readily than your brand's promises and distinctions.” ― David Brier"
        },
        {
            "Number": "2670",
            "Quote": "“The virtues of free enterprise can become distorted by greed & delusion.” ― Allan Lokos, Patience: The Art of Peaceful Living"
        },
        {
            "Number": "2671",
            "Quote": "“Our eyes reveal a great deal about ourselves and others. Eyes reveal love, happiness, sadness, bitterness, hatred, amusement, sincerity, trust, distrust; in fact, the whole range of human emotions. So let's be aware of what our eyes are telling others.” ― Kathleen Harvey Harshberger, Etiquette Still Matters"
        },
        {
            "Number": "2672",
            "Quote": "“If you keep trying to hit a four but you keep on getting only one run. Then chances are when you will hit a six you will get caught.” ― Vijay Kedia"
        },
        {
            "Number": "2673",
            "Quote": "“Effective operational activities are refined through process development.” ― Wayne Chirisa"
        },
        {
            "Number": "2674",
            "Quote": "“Procrastination at the start and sometimes during the project meant there wasn’t time to execute the plans well enough.” ― Graham Speechley"
        },
        {
            "Number": "2675",
            "Quote": "“Your day job funds your dream job.” ― Ken Coleman"
        },
        {
            "Number": "2676",
            "Quote": "“Every crossroad in life has four options – quit, adapt, proceed, or accept, but quitting is a dead-end.” ― Sharon Nir, The Opposite of Comfortable"
        },
        {
            "Number": "2677",
            "Quote": "“Fear is an effort not to lose.” ― Meir Ezra"
        },
        {
            "Number": "2678",
            "Quote": "“CONFIDENCE is not showing off your VANITY, it’s about to be HUMBLED and KIND to others what are you truly SKILLED and PROFESSIONAL about…” ― Rashedur Ryan Rahman"
        },
        {
            "Number": "2679",
            "Quote": "“The time to develop a multiple income source strategy is not when you run out of money. Then it will be too late.” ― Seth Godin, The Bootstrapper's Bible: How to Start and Build a Business with a Great Idea and (Almost) No Money"
        },
        {
            "Number": "2680",
            "Quote": "“If I had a dollar for every time someone asked, “What do you think about this logo?” I’d be rich.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2681",
            "Quote": "“You never lose until you think you can.” ― Meir Ezra"
        },
        {
            "Number": "2682",
            "Quote": "“We create competition when we create scarcity.” ― Aniekee Tochukwu Ezekiel"
        },
        {
            "Number": "2683",
            "Quote": "“The most frequent cause of failures in business is not people who answered the right questions incorrectly, but people who answered the wrong questions correctly. I have seen many companies “incrementalize” themselves into a corner, through a series of small—what appeared optimal—decisions, often based on erroneous assumptions.” ― Marvin Bower"
        },
        {
            "Number": "2684",
            "Quote": "“Innovative ideas are the golden wealth of a growing business” ― Wayne Chirisa"
        },
        {
            "Number": "2685",
            "Quote": "“Show me a youth without hope, and I will show you a youth without future.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "2686",
            "Quote": "“You didn’t warn us about this, Readier,’ said Stowley resentfully. Gilt waved his hands. ‘We must speculate to accumulate!’ he said. ‘The Post Office? Trickery and sleight of hand. Oh, von Lipwig is an ideas man, but that’s all he is. He’s made a splash, but he’s not got the stamina for the long haul. Yet as it turns out he will do us a favour. Perhaps we have been . . . a little smug, a little lax, but we have learned our lesson! Spurred by the competition we are investing several hundred thousand dollars—’ ‘Several hundred?’ said Greenyham. Gilt waved him into silence, and continued: ‘—several hundred thousand dollars in a challenging, relevant and exciting systemic overhaul of our entire organization, focusing on our core competencies while maintaining full and listening co-operation with the communities we are proud to serve. We fully realize that our energetic attempts to mobilize the flawed infrastructure we inherited have been less than totally satisfactory, and hope and trust that our valued and loyal customers will bear with us in the coming months as we interact synergistically with change management in our striving for excellence. That is our mission.’ An awed silence followed.” ― Terry Pratchett, Going Postal"
        },
        {
            "Number": "2687",
            "Quote": "“Ego is a double-edged sword. On one hand it is vital...But too much of a good thing can be dangerous.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "2688",
            "Quote": "“Think upon the numbers I have been sharing with you. Of your competitors, five out of ten will do little more than take their customer's money immorally. A further three out of ten will leave them dissatisfied.” ― Chris Murray"
        },
        {
            "Number": "2689",
            "Quote": "“Simply thinking creatively is not the same as being innovative, and only those who risk breaking out of their comfort zone by putting thought into action will discover the profusion of opportunity that exists.” ― Michael Lum Y.M."
        },
        {
            "Number": "2690",
            "Quote": "“These actions all led me to create a simple Theory of Business Motivation” ― Fritz Shoemaker"
        },
        {
            "Number": "2691",
            "Quote": "“There's no luck in business. There's only drive, determination, and more drive.” ― Sophie Kinsella, Shopaholic Takes Manhattan"
        },
        {
            "Number": "2692",
            "Quote": "“Regulation-writers find it much easier to address safety than health hazards. The former are technically easier to find, describe, assess, and control than the latter. A worker falls from a platform. The cause is clear - no railing. The effect is clear - a broken leg. The cost is easily calculated - so many days in the hospital, so many days of lost wages, so much to build a railing. The directive is easy to write: \"Install railings on platforms.\" But if a worker develops cancer fifteen years after starting work in a chemical plant, the cause of the cancer will be uncertain and controversial. The cost of the disease will be hard to calculate. The solution will be hard to specify:” ― James Q. Wilson, Bureaucracy: What Government Agencies Do and Why They Do It"
        },
        {
            "Number": "2693",
            "Quote": "“Rewards for good service should not be deferred a single day.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "2694",
            "Quote": "“Trust me. In a very short time, you will become sought out by those in your network. Initially for your sound advice, but soon after as a provider of service. Few people seek advice about a subject that doesn’t require a solution.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2695",
            "Quote": "“Time is a process of robbing you of your willingness.” ― Meir Ezra"
        },
        {
            "Number": "2696",
            "Quote": "“You must take the time to do something that brings you joy. If you are saying to yourself, “I can’t do that because I have to pick up the kids, and run my business, and … and … who’s got time for fun? Are you insane?” If you don’t have time for fun, you’ll be forced to take time for illness. Then what?” ― Beth Ramsay, #Networking is people looking for people looking for people"
        },
        {
            "Number": "2697",
            "Quote": "“Economics qualifies the test of education but fails the test of emotions.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2698",
            "Quote": "“When telling a story you can utilize numerous ways to create an attractive narrative that will enchant your audience aka ideal customers and clients.” ― Naomi Mc Laughlan, Brand Story Telling: Book #3 in the START-UPS ON A SHOESTRING BUDGET Series"
        },
        {
            "Number": "2699",
            "Quote": "“Do not allow your inner doubts to keep you from achieving what you can do.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "2700",
            "Quote": "“The value of a company can be derived from adding the value of all future dividends written down to net present value. Therefore, a reasoned view of the future is essential.” ― Stephen Asbury, Health & Safety, Environment and Quality Audits"
        },
        {
            "Number": "2701",
            "Quote": "“Feast or famine — the choice is yours.” ― Richie Norton"
        },
        {
            "Number": "2702",
            "Quote": "“Relationship is like money, Hard to earn and easy lose.” ― skumarsinha"
        },
        {
            "Number": "2703",
            "Quote": "“Abandon anything in your life and habits that might be holding you back.” ― Sophia Amoruso, #Girlboss"
        },
        {
            "Number": "2704",
            "Quote": "“You understand the clever man at the beginning, the smart man at the end.” ― Serhat Beyaz KÖROĞLU"
        },
        {
            "Number": "2705",
            "Quote": "“We know there are thousands of ways to solve any branding problem a company faces, yet the only valuable solutions are the effective ones. Doing something ineffective in half the time–or “more efficiently” or “more economically”–isn’t progress, but is instead bad business. Very bad business.” ― David Brier, The Lucky Brand"
        },
        {
            "Number": "2706",
            "Quote": "“The greatest way to ensure your company’s failure is to appoint leaders who see a divide between themselves and the team; who are more fixated on their elevated role than on the act of leading.” ― Steve Maraboli"
        },
        {
            "Number": "2707",
            "Quote": "“He looked at business the way a grand master might look at a chessboard: \"There's nothing you can do about where the pieces are, it's only your next move that matters\".” ― Lawrence Levy, To Pixar and Beyond: My Unlikely Journey with Steve Jobs to Make Entertainment History"
        },
        {
            "Number": "2708",
            "Quote": "“The joy that exists in taking massive action is far beyond the short-term comfort of inaction.” ― Farshad Asl"
        },
        {
            "Number": "2709",
            "Quote": "“A sin is anything without proper exchange (giving too much or taking too much without giving or receiving in the correct amount).” ― Meir Ezra"
        },
        {
            "Number": "2710",
            "Quote": "“Whenever you see a successful business, someone once made a courageous decision.” ― Peter F. Drucker"
        },
        {
            "Number": "2711",
            "Quote": "“All data has its beauty, but not everyone sees it.” ― Damian Mingle"
        },
        {
            "Number": "2712",
            "Quote": "“An entrepreneur is someone who will jump off a cliff and assemble an airplane on the way down.” ― Reid Hoffman"
        },
        {
            "Number": "2713",
            "Quote": "“There is no silver bullet that’s going to fix that. No, we are going to have to use a lot of lead bullets.” ― Ben Horowitz, The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers"
        },
        {
            "Number": "2714",
            "Quote": "“There are many things you can successfully fake in business…but a good golf swing isn’t one of them.” ― Bobby Darnell, Time For Dervin - Living Large In Geiggityville"
        },
        {
            "Number": "2715",
            "Quote": "“Communication and a clear mutual understanding between two people or more can help to build the best route to success in any venture.” ― Loren Weisman"
        },
        {
            "Number": "2716",
            "Quote": "“Don't be in the business of playing it safe. Be in the business of creating possibilities of greatness” ― Robert Iger, The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
        },
        {
            "Number": "2717",
            "Quote": "“As more women lean in to their careers, more men need to lean in to their families. We need to encourage men to be more ambitious in their homes.” ― Sheryl Sandberg"
        },
        {
            "Number": "2718",
            "Quote": "“Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others” ― Peter Bevelin, All I Want To Know Is Where I'm Going To Die So I'll Never Go There"
        },
        {
            "Number": "2719",
            "Quote": "“There is nothing more fascinating than the fusion between power and mystery in our great, little treasure: the human brain.” ― Hajar Charkaoui"
        },
        {
            "Number": "2720",
            "Quote": "“I'll need to be a tiger if I want to have my own global business.” ― Stacey Lee, Outrun the Moon"
        },
        {
            "Number": "2721",
            "Quote": "“Studies consistently show that happy companies are way more productive, creative and service-oriented than unhappy ones. Therefore, the happy companies will beat the pants off the unhappy ones in the market place. The future of business is happy! It’s inevitable.” ― Alexander Kjerulf, Happy Hour is 9 to 5"
        },
        {
            "Number": "2722",
            "Quote": "“Life is always business as usual, until you do the unusual” ― Constance Friday Elias"
        },
        {
            "Number": "2723",
            "Quote": "“In the end it's all about the Zeroes you make” ― Iftekhar Ahmed - iftiSEO"
        },
        {
            "Number": "2724",
            "Quote": "“The biggest mistake brands make are trying to “sell their stuff” rather than clarifying what people are actually buying.” ― David Brier"
        },
        {
            "Number": "2725",
            "Quote": "“Great leaders are great listeners. Leadership is no shallow business, it's about acquisition of knowledge on the go, every moment.” ― Krishna Saagar Rao"
        },
        {
            "Number": "2726",
            "Quote": "“When we build on our strengths and daily successes — instead of focusing on failures — we simply learn more.” ― Tom Rath, Wellbeing: The Five Essential Elements"
        },
        {
            "Number": "2727",
            "Quote": "“The small stuff matters. The company that became the largest and most powerful in history isn't a military contractor or a car company. It isn't the result of savvy lobbyists in Washington, or the happenstance of controlling the supply of petroleum, or some kind of cabal that is beyond the understanding of ordinary people. The largest and most powerful company in history is built by each of us handing over three single dollar bills over and over again.” ― Charles Fishman"
        },
        {
            "Number": "2728",
            "Quote": "“The road to success is not easy to navigate, but with hard work, drive, and passion, it's possible to achieve the American dream” ― Tommy Hilfiger"
        },
        {
            "Number": "2729",
            "Quote": "“...they were mixing and mingling their powerful supporters together like a hearty granola of golfballs and checkbooks.” ― Mandy Ashcraft, Small Orange Fruit"
        },
        {
            "Number": "2730",
            "Quote": "“A business that is not growing after all, is dying.” ― Shawn Casemore"
        },
        {
            "Number": "2731",
            "Quote": "“If others work for you, give your own time only to those who are willing to learn and grow.” ― John C. Maxwell"
        },
        {
            "Number": "2732",
            "Quote": "“Your brand story’s “happily ever after” involves open wallets.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "2733",
            "Quote": "“When you surround an army, leave an outlet free. Do not press a desperate foe too hard.” ― sun tzu, The Art of War"
        },
        {
            "Number": "2734",
            "Quote": "“Businesses that will transform the land are coming through you” ― Sunday Adelaja, No One Is Better Than You"
        },
        {
            "Number": "2735",
            "Quote": "“Lunar Loussia Wellgreens was born on 15th November 1979 in El Cajon. He is currently working as the chief executive officer at WORKS and is the owner of 37.5% of the total shares.” ― Lunar Loussia Wellgreens"
        },
        {
            "Number": "2736",
            "Quote": "“An entrepreneur is not someone that starts his own business. An entrepreneur is someone that realizes he does not want to live the rest of his life as a slave and decides to buy his freedom. Starting a business is just a common consequence of such decision.” ― Robin Sacredfire"
        },
        {
            "Number": "2737",
            "Quote": "“Words and actions will separate a wise man from the crowd.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "2738",
            "Quote": "“No daydreaming. No music, film, art, creative thinking or business.” ― Rasheed Ogunlaru"
        },
        {
            "Number": "2739",
            "Quote": "“Entrepreneur, if your going to start up, make sure you start up with excellence in mind.” ― Onyi Anyado"
        },
        {
            "Number": "2740",
            "Quote": "“You should and can help everyone. You should help every stray dog in the street. There is no limit on how much you can help.” ― Meir Ezra"
        },
        {
            "Number": "2741",
            "Quote": "“Going into business without a business plan is like going on a mountain trek without a map or GPS support – you’ll eventually get lost and starve!” ― Kevin J. Donaldson"
        },
        {
            "Number": "2742",
            "Quote": "“It's a good thing to remember - doesn't really matter what the quality of your code is, your political views or your sense of humor are much more important. Isn't it unfortunate?” ― Yegor Bugayenko, Code Ahead: Volume 1"
        },
        {
            "Number": "2743",
            "Quote": "“followers have a very clear picture of what they want and need from the most influential leaders in their lives: trust, compassion, stability, and hope” ― Tom Rath, Strengths Based Leadership: Great Leaders, Teams, and Why People Follow: A Landmark Study of Great Leaders, Teams, and the Reasons Why We Follow"
        },
        {
            "Number": "2744",
            "Quote": "“I believe in the 20/80 rule. That's where working an extra 20% faster, harder, or smarter gets you an extra 80% of the rewards.” ― Brandon David Hastings"
        },
        {
            "Number": "2745",
            "Quote": "“Dabbling into a business at a venture, without properly investigating the possibility of turning a profit is stack imbecility.” ― Vincent Okay Nwachukwu, Weighty 'n' Worthy African Proverbs - Volume 1"
        },
        {
            "Number": "2746",
            "Quote": "“If you are investing in your education and you are learning, you should do that as early as you possibly can, because then it will have time to compound over the longest period. And that the things you do learn and invest in should be knowledge that is cumulative, so that the knowledge builds on itself. So instead of learning something that might become obsolete tomorrow, like some particular type of software [that no one even uses two years later], choose things that will make you smarter in 10 or 20 years.” ― Warren Buffett"
        },
        {
            "Number": "2747",
            "Quote": "“We are faced with the incredible challenge of creating high quality content for a crowd of skimmers. The faster you understand this, the more effective your content tactics will become.” ― Laura Busche, Powering Content: Building a Nonstop Content Marketing Machine"
        },
        {
            "Number": "2748",
            "Quote": "“It is not God's business to bring security to people but it is our business to provide security for ourselves out of what he has given us.” ― Sunday Adelaja"
        },
        {
            "Number": "2749",
            "Quote": "“Leading means running fast enough to keep ahead of your people” ― S.M. Stirling, The Sunrise Lands"
        },
        {
            "Number": "2750",
            "Quote": "“Data Scientists should refuse to be defined by someone else's vision of what's possible.” ― Damian Mingle"
        },
        {
            "Number": "2751",
            "Quote": "“A única maneira de ser verdadeiro é saber qual a transformação que estamos propondo ao mundo.” ― Cristiane Thiel, Como Definir a Identidade da Marca"
        },
        {
            "Number": "2752",
            "Quote": "“Want to clear that people like me are always looking for the worth not for salaries. Beside from your all good things, I found the mismatch of salary & worth pair, so I decided to move on. But frankly I missed you, I have said already. If you remember I said you that I can come there on maintenance day (on Friday) and I can help you in any work without any expectation. That option could have been better for me & you too. Anyway, I got the point about recovery management now. If you don’t have any problem, then you can send more information about the same (externalwork30@yahoo.com). I would like to work for the employer like you. Side by side I’ll get another experience. Let’s hope for the best.” ― ex employee"
        },
        {
            "Number": "2753",
            "Quote": "“Are you selling with soul or do you come off like you are selling your soul? If people only see you selling your expertise all the time, without experiencing elements of you sharing the expertise and knowledge you have, then what reason are you giving them to trust you or buy? ” ― Loren Weisman"
        },
        {
            "Number": "2754",
            "Quote": "“To the degree that one relates sensitively, appropriately, and even charmingly, to the people and events faced in business and personal life, success will follow.” ― Herman L Glaess, Potentiality Enhancement Programs"
        },
        {
            "Number": "2755",
            "Quote": "“Leadership is a conversation.” ― William A. Adams, Mastering Leadership: An Integrated Framework for Breakthrough Performance and Extraordinary Business Results"
        },
        {
            "Number": "2756",
            "Quote": "“Outstanding leaders go out of their way to boost the self esteem of their personnel. If people believe in themselves it s amazing what they can accomplish.” ― Sam Walton"
        },
        {
            "Number": "2757",
            "Quote": "“You want to be able to say, for example, “I will know I am successful if these three things happen.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2758",
            "Quote": "“At times it’s as if the Silicon Valley inmates are running the VC asylum. But what might seem like unicorn-crazed chaos from the outside looking in is actually carefully structured.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "2759",
            "Quote": "“Instead of looking for one specific market gap, think much more big picture about what kind of market you want to be in for the long run.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "2760",
            "Quote": "“I look forward to the day when business is less about being busy and more about being of service. When Houses of Cards, become Houses of Hearts. We can no longer afford to squander our passion on cold economics. It is time to reclaim our most valuable commodity and devote it to what’s right. Devote it to concern & creation. To meaningful encounters & purpose-bound experiences. May we no longer do business, but build places of thriving instead; ruled by one truth only ~ the wisdom of our hearts.” ― Ina Catrinescu"
        },
        {
            "Number": "2761",
            "Quote": "“Whether it is in business life or in political roles, leaders rise up to offer the solutions to problems society faces. They act with the right actions at the right time.” ― Israelmore Ayivor, Leaders' Ladder"
        },
        {
            "Number": "2762",
            "Quote": "“Never become proud within yourself when you are seen as the one to cause that great effect. Never become timid if you know you can while others dare to prove otherwise! Mind your business and make the strike.” ― Israelmore Ayivor, The Great Hand Book of Quotes"
        },
        {
            "Number": "2763",
            "Quote": "“Stupidity is a manifestation, not the cause.” ― Meir Ezra"
        },
        {
            "Number": "2764",
            "Quote": "“There are stories — legends, really — of the “steady job.” Old-timers gather graduates around the flickering light of a computer monitor and tell stories of how the company used to be, back when a job was for life, not just for the business cycle. … The graduates snicker. A steady job! They’ve never heard of such a thing.” ― Max Barry, Company"
        },
        {
            "Number": "2765",
            "Quote": "“If you know what people need you have gotten more knowledge of a fortune than any amount of capital can give you.” ― Russell H. Conwell"
        },
        {
            "Number": "2766",
            "Quote": "“Make project plan as simple as possible, but not simpler.” ― Gerry Geek"
        },
        {
            "Number": "2767",
            "Quote": "“Every person has his secret; in reverie, unbeknown to others, he finds peace, freedom, sorrow and love.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "2768",
            "Quote": "“Business s humanity's most resilient, iterative and productive mechanism for creating change in the world. - John Batelle” ― Satya Nadella, Hit Refresh"
        },
        {
            "Number": "2769",
            "Quote": "“We all have a little entrepreneur inside of us. Wanting to leverage it is what gives us an entrepreneurial spirit and an entrepreneurial mind. Actually doing it makes one an entrepreneur.” ― K. Abernathy Can You Action Past Your Devil's Advocate"
        },
        {
            "Number": "2770",
            "Quote": "“I still respond to that thing you feel in an office, wearing a crisp suit and sensing the linked grids lap around you. It is all about the enfolding drone of the computers and fax machines. It is about the cell phones slotted in the desk chargers, the voice mail and e-mail—a sense of order and command reinforced by the office itself and the bronze tower that encases the office and by all the contact points that shimmer in the air somewhere.” ― Don DeLillo, Underworld"
        },
        {
            "Number": "2771",
            "Quote": "“If you do still have to work for a boss at a job you don't like, as almost everyone does at some point, don't moan about it. Have a positive out —look on life and just get on with it. Work hard and earn your pay. Enjoy the people you come into contact with through your job. And if you are still unhappy, make it instead your goal to divide your private life from your work life. Have fun in your own time, you will feel happier and you'll enjoy your life and your job more.” ― Richards Branson"
        },
        {
            "Number": "2772",
            "Quote": "“Delegation of kindness is an epidemic of success” ― Goitsemang Mvula"
        },
        {
            "Number": "2773",
            "Quote": "“Reading is one of the most common habit among the most successful people.” ― Aakash Singal"
        },
        {
            "Number": "2774",
            "Quote": "“Villainessa Tittel was a hired killer, an assassin by trade. She had enjoyed the best education and had been trained by assassins who had (until then at least) been considered the best in the business. She had turned to ‘cleaning’ as an occupation because she really enjoyed endings more than beginnings – and anyway, she didn’t need to know her mark’s entire pedigree or life’s story, or to have some kind of facetious moral justification just to collect her fee. Unsurprisingly, when she did read – on those rare occasions – her books were always dog-eared from the back.” ― Christina Engela"
        },
        {
            "Number": "2775",
            "Quote": "“3 qualities of a good investor; Knowledge Courage & Patience.” ― Vijay Kedia"
        },
        {
            "Number": "2776",
            "Quote": "“A nation without productive youths is a nation without hope, and a nation without hope is a nation without future.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "2777",
            "Quote": "“Trong bất cứ trường hợp nào, CEO của một công ty khởi nghiệp giai đoạn đầu, được đầu tư bời quỹ mạo hiểm không nên nhận lương hơn 150.000 USD một năm... Trả lương cao chỉ tạo động lực để anh ta bảo vệ cái trạng thái an toàn cùng với đồng lương, chứ không làm việc với người khác để giải quyết vấn đề một cách triệt để. Ngược lại, một nhà quản trị nhận ít tiền sẽ tập trung vào việc nâng cao giá trị cho toàn công ty. ...Nếu một CEO không làm gương bằng việc nhận lương thấp nhất công ty, anh ta có thể làm điều tương tự bằng cách chọn một mức lương cao nhất. Miễn là con số đó khiêm tốn, nó sẽ tạo ra một mức trần hiệu quả cho việc trả lương nhân viên. ...Trả lương tiền mặt cao dạy cho người lao động đòi hỏi giá trị từ công ty như thể nó đã tồn tại thay vì đầu tư thời gian để tạo ra giá trị mới trong tương lai... Những khoản thưởng như thế sẽ khuyến khích suy nghĩ ngắn hạn và làm thất thoát giá trị. MỌI THỂ LOẠI TIỀN MẶT ĐỀU THIÊN VỀ HIỆN TẠI HƠN LÀ TƯƠNG LAI.” ― PeterThiel"
        },
        {
            "Number": "2778",
            "Quote": "“Fascinatingly resilient the tenacity of a child. Not yet conditioned by society to give up when instructed to do so.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2779",
            "Quote": "“For business and personal relationships to flourish, we must engage with the people in our lives. Together is better. Together is how we win.” ― Laurie Buchanan, PhD"
        },
        {
            "Number": "2780",
            "Quote": "“Innovation must be value-driven. New ideas can be gone by a sneer or yawn and the customer-driven concept has failed to produce the desired results because asking the customers what they want is not innovation. We need to understand the customers’ needs and take an outcome-focused approach.” ― Csaba Gabor"
        },
        {
            "Number": "2781",
            "Quote": "“Today it is cheaper to start a business than tomorrow.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2782",
            "Quote": "“Given the reality of limited time and resources, best practices provide a valuable, low risk, default starting point.” ― Chad White, Email Marketing Rules"
        },
        {
            "Number": "2783",
            "Quote": "“Life is about the moments you create, that you can keep it with you FOREVER. After everything is over,That is what we have or what we are left with.” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "2784",
            "Quote": "“Business, as currently practiced in the corporate world, is basically immoral.” ― Bruce Cameron Alexander"
        },
        {
            "Number": "2785",
            "Quote": "“Quão lamentável é arriscar tudo em um único combate, negligenciando a estratégia vitoriosa, e fazer com que o destino de tuas armas dependa de uma única batalha!” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "2786",
            "Quote": "“Live a life that leaves a memory, nobody can steal.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2787",
            "Quote": "“If you do not communicate the strategy to staff, you are ensuring you will waste their genius” ― Fritz Shoemaker"
        },
        {
            "Number": "2788",
            "Quote": "“How To Purchase Digital Securities On The BrightCOIN Platform In this post, we go over the steps an investor must complete to invest in an STO on the BrightCOIN platform. Almost all security token offerings in the US are launched under Reg. D, 506c, Reg. S, or Reg. A+. And as everyone knows by now, every contributor must not only pass KYC and AML screens but also must be accredited investors. So what does a contributor see when he clicks the “Invest Now” button on an STO landing page? You’re immediately taken to the issuer’s branded page to create an account. Once your email is verified, you’re presented with a screen that asks if you’re investing as an individual or an entity, such as an IRA or irrevocable trust, for example. You’ll then provide the information to complete the KYC and AML scans. If you registered as an individual, then you must upload the appropriate investor accreditation documents that will be verified. Alternatively, if you registered as an entity, you must upload the appropriate documents for verification as well. You’ll then be informed that your documentation has been submitted for verification. The verification process typically takes 24-48 hours to complete. Next, you’ll be asked to complete a questionnaire detailing the conditions of the offering. You must acknowledge that you’ve read them all individually then read and acknowledge terms of service and privacy policy. On the next page, you’ll be presented with a form to make your contribution. Choose the currency you wish to make your contribution with, in addition to the amount you’ll contribute. Your contribution will automatically calculate the number of tokens you’ll receive for your contribution based on the current exchange rate. Then, you’ll be presented with the issuer’s subscription agreement. Read it carefully, agree with the terms and sign. The only step left is to confirm your token purchase. That’s it! You’ve completed the whole token purchase process and will receive your tokens at the close of the STO. The content (Blogs, FAQs, News) posted on BrightCOIN may contain incorrect information, always get professional advice. Neither BrightCOIN nor any of its directors, officers, employees, representatives, affiliates or agents shall have any liability whatsoever arising from any error or incompleteness of fact or opinion in, or lack of care in the preparation of, any of the materials posted on this website. BrightCOIN does not provide legal, accounting or tax advice. Any representation or implication to the contrary is expressly disclaimed.” ― Brightcoin"
        },
        {
            "Number": "2789",
            "Quote": "“Seek out success but don’t be fearful of failure along the way.” ― Sarah Pullen, Healthy Profits: How to promote healthy choices that grow your food business"
        },
        {
            "Number": "2790",
            "Quote": "“Synergy without strategy results to waste of energy.” ― Ogwo David Emenike"
        },
        {
            "Number": "2791",
            "Quote": "“Negotation is a point of interection of common interest.” ― Sukant Ratnakar, Open the Windows"
        },
        {
            "Number": "2792",
            "Quote": "“The creator creates by creating; not by thinking, or trying, or working, or anything else… simply create something out of nothing.” ― Meir Ezra"
        },
        {
            "Number": "2793",
            "Quote": "“The goal is to build a profitable business, not maintain an expensive hobby that will leave you in the poorhouse.” ― Dawn Fotopulos, Accounting for the Numberphobic: A Survival Guide for Small Business Owners"
        },
        {
            "Number": "2794",
            "Quote": "“To befoul the unholy alliance between corrupt business & corrupt politics is the first task of the statesmanship of the day.” ― Theodore Roosevelt"
        },
        {
            "Number": "2795",
            "Quote": "“If you don’t have enough sales, you simply don’t see enough good in others. Once you see the good in others, you will reach out to them.” ― Meir Ezra"
        },
        {
            "Number": "2796",
            "Quote": "“Behind every successful athlete there is a responsible coach.” ― Paul Bamikole"
        },
        {
            "Number": "2797",
            "Quote": "“And now they were weary and frightened because they had gone against a system they did not understand and it had beaten them. They knew that the team and the wagon were worth much more. They knew the buyer man would get much more, but they didn't know how to do it. Merchandising was a secret to them.” ― John Steinbeck, The Grapes of Wrath"
        },
        {
            "Number": "2798",
            "Quote": "“كى تُخرج أفضل ما بداخل الناس ،، عليك أن تكون أفضل” ― ريك كونلو"
        },
        {
            "Number": "2799",
            "Quote": "“Even during a mid-life crisis do not deviate from your goal. History remembers only those who succeed.” ― Hockson Floin"
        },
        {
            "Number": "2800",
            "Quote": "“You only know you have something (own it) when you can waste it. When it’s yours, you can waste it.” ― Meir Ezra"
        },
        {
            "Number": "2801",
            "Quote": "“People aren't happy because they're successful. They're successful because they're happy.” ― Jeff Sutherland"
        },
        {
            "Number": "2802",
            "Quote": "“Don't call yourself discouraged anymore;it's no longer your name.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2803",
            "Quote": "“If you don't have paying customers, you have a hobby.” ― Miles Anthony Smith, Why Leadership Sucks™ Volume 2: The Pain, Pitfalls, and Challenges of Servant Leadership Fundamentals"
        },
        {
            "Number": "2804",
            "Quote": "“Remember, you are not aspiring for perfection, Bombshell. You are aspiring for progress, one step at a time.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2805",
            "Quote": "“If you fulfill the wishes of your employees, the employees will fulfill your visions.” ― Amit Kalantri"
        },
        {
            "Number": "2806",
            "Quote": "“If you don't know the answer to a question, don't guess, don't speculate, don't hypothesize, don't make a joke it by email, tweet, conference call, or at a press conference...Somehow, eventually, the electronic communication surrounding a situation will be made public and clarify and clarify what actually transpired.” ― Kent Alan Robinson, UnSend: Email, text, and social media disasters...and how to avoid them"
        },
        {
            "Number": "2807",
            "Quote": "“The mansion has been built in the forest, now to light the fireworks and draw the playmates in.” ― Trevor Carss"
        },
        {
            "Number": "2808",
            "Quote": "“No business could generate the revenue one government deal could produce with an equivalent investment of time and effort.” ― Krishan Partap Singh, Delhi Durbar"
        },
        {
            "Number": "2809",
            "Quote": "“You have no idea how destructive and wasteful your infrastructure is because you don't need to use it the way the workforce does... Drive the forklift, use the database, fill out the form, submit it to HR, and find out how long it takes to get a response. Use your own infrastructure.” ― Bill Jensen, Hacking Work: Breaking Stupid Rules for Smart Results"
        },
        {
            "Number": "2810",
            "Quote": "“If you want to change the fruits, you will first have to change the roots. If you want to change the visible, you must first change the invisible.” ― T. Harv Eker, Secrets of the Millionaire Mind: Mastering the Inner Game of Wealth"
        },
        {
            "Number": "2811",
            "Quote": "“It doesn't matter what your boss thinks as long as he doesn't cry.” ― Gerry Geek"
        },
        {
            "Number": "2812",
            "Quote": "“Innovation is a learned organizational capability. You must train people how to innovate and navigate organizational barriers that kill off good ideas before they can be tested.” ― Kaihan Krippendorff"
        },
        {
            "Number": "2813",
            "Quote": "“Show your vulnerability, but have faith. You will succeed. Growth is not glamorous.” ― Shu Hattori, The McKinsey Edge: Success Principles from the World's Most Powerful Consulting Firm"
        },
        {
            "Number": "2814",
            "Quote": "“The way we behave, the way we treat others, the way we respond, the way we support, defines the work experience for everyone around us.” ― Laurie Buchanan, PhD"
        },
        {
            "Number": "2815",
            "Quote": "“People believe that through the American way of life they can work together to encourage wider ownership of economic activities. In this way, they believe they can develop an economy of abundance which will provide a maximum of security and freedom.” ― Murray D. Lincoln, Vice President in Charge of Revolution"
        },
        {
            "Number": "2816",
            "Quote": "“Calling for change and being part of making change are two very different things. Stop calling for change and be a part of making the change you want to see.” ― Loren Weisman, The Artist's Guide to Success in the Music Business: The “Who, What, When, Where, Why & How” of the Steps that Musicians & Bands Have to Take to Succeed in Music"
        },
        {
            "Number": "2817",
            "Quote": "“Your clients are more interested in how they will benefit from your product than how you will deliver the product.” ― Chinmai Swamy"
        },
        {
            "Number": "2818",
            "Quote": "“You NEED to learn how to fly before you learn how to land and you MUST learn how to land before you start flying.” ― Samer Chidiac"
        },
        {
            "Number": "2819",
            "Quote": "“People change, and so do their aspirations, and so should brands.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "2820",
            "Quote": "“Rome was not built in one day; But one day Rome was built.” ― Kayambila Mpulamasaka"
        },
        {
            "Number": "2821",
            "Quote": "“Artur Arekhau has worked in construction for many years. His excellent work has led his business to receive a ton of attention from clients all around Connecticut. Working in the construction industry helps Artur Arekhau stay fit and his love for playing sports contributes to this.” ― Artur Arekhau"
        },
        {
            "Number": "2822",
            "Quote": "“Work hard in silence.” ― Alin Sav"
        },
        {
            "Number": "2823",
            "Quote": "“If you build it, no one will care. It turns out marketing exists for a reason.” ― Hunter Post"
        },
        {
            "Number": "2824",
            "Quote": "“Millions of business people are each constantly forced to choose between their desire to not be a bad person and their desire to be a good business person, that is to say, to make as much money as they possibly can by maximizing their revenue while minimizing the cost of producing whatever it is that they sell.” ― Mokokoma Mokhonoana, The Use and Misuse of Children"
        },
        {
            "Number": "2825",
            "Quote": "“Be persistent, be persistent, they say. But please, do not mistake being a pest for being persistent.” ― Nike Thaddeus"
        },
        {
            "Number": "2826",
            "Quote": "“The difference between companies that make $100,000 vs those that make $1bn dollars within the same industry is paying attention to detail.” ― Lovemore Chirombo"
        },
        {
            "Number": "2827",
            "Quote": "“A man who wants to imitate the life of a woman will invariably do some mischief” ― Bangambiki Habyarimana, The Great Pearl of Wisdom"
        },
        {
            "Number": "2828",
            "Quote": "“I loved getting my M. B. A., and I really enjoyed being an accountant and financial analyst before I quit my day job twenty-five years ago to write full time. I just liked writing more…plus, I knew even then that as a full-time writer, I'd get plenty of chances to do business-type stuff, while as an accountant, I probably wouldn't get a lot of opportunities to write about dragons.” ― Patricia C. Wrede"
        },
        {
            "Number": "2829",
            "Quote": "“Stop spending money to be nominated for worthless awards with no substance and no worth to your career. If you have to spend money to be nominated for an award and then spend the time to push all your friends and fans to vote for you to win that award, it is not worth it and it is not going to help you in anyway whatsoever in the long run.” ― Loren Weisman"
        },
        {
            "Number": "2830",
            "Quote": "“If we ask the right questions, we can change the world with the right answers.” ― Ogwo David Emenike"
        },
        {
            "Number": "2831",
            "Quote": "“When you decide you are willing, you can do anything. You reverse time and get freedom.” ― Meir Ezra"
        },
        {
            "Number": "2832",
            "Quote": "“Difference between a professional and amateur is like a difference between your dominant hand and non-dominant hand.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2833",
            "Quote": "“Build systems and methods that incubate ideas, facilitate cooperation and spark growth.” ― Jennifer Ritchie Payette"
        },
        {
            "Number": "2834",
            "Quote": "“You don't know if the water is hot or cold until you stick your toe in.” ― Virginia DeBerry and Donna Grant"
        },
        {
            "Number": "2835",
            "Quote": "“Advertisement shouldn’t look like information, it should look like a promise.” ― Amit Kalantri"
        },
        {
            "Number": "2836",
            "Quote": "“She felt the cold blast from the sterile air conditioning on her bare arms and thighs, as she ambled down the center of the shopping complex's ground floor. The scene was a swirl of candy bright lights--the Victoria's Secret fuchsia signboard, signboards which lured one to purchase \"confidence,\" or \"sexual appeal,\" or whatever it was that was being advertised--the fluorescent lights in each store, contrasting with the shiny, black-tiled walls and eye-catching speckled marble tiles on the ground. One could lick the floor--the tiles were spotless, clean like the fake air she was breathing in, like the atoms and cells in her that were decaying in stale neglect.” ― Jess C Scott, Jack in the Box"
        },
        {
            "Number": "2837",
            "Quote": "“What great leaders have in common is that each truly knows his or her strengths - and can call on the right strength at the right time.” ― Tom Rath, Strengths Based Leadership: Great Leaders, Teams, and Why People Follow: A Landmark Study of Great Leaders, Teams, and the Reasons Why We Follow"
        },
        {
            "Number": "2838",
            "Quote": "“Golf is the great conductor of life's symphony. Not in my lifetime have I seen anything with more ability to change the course of futures. It has the ability to build lasting relationships in a few short hours, promote executives, fund projects, build teams, break down barriers, and create an environment of deal-making, stress relief, and wellness. It's the one place where we willingly shut off our phones, turn away from distraction and become one with nature and ourselves. -Thank you for being a part of our symphony, Network & Golf” ― Colleen Ferrary Bader"
        },
        {
            "Number": "2839",
            "Quote": "“If you are totally willing to accept that you are never effect, you will never lose.” ― Meir Ezra"
        },
        {
            "Number": "2840",
            "Quote": "“A business plan is like a war plan, when you competitors know about it, it's no longer of any use” ― Bangambiki Habyarimana, The Great Pearl of Wisdom"
        },
        {
            "Number": "2841",
            "Quote": "“Positioning is finding the right parking space inside the consumer’s mind and going for it before someone else takes it.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "2842",
            "Quote": "“In meetings philosophy might work, on the field practicality works.” ― Amit Kalantri"
        },
        {
            "Number": "2843",
            "Quote": "“Making a product is just an activity, making a profit on a product is the achievement.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2844",
            "Quote": "“I don't put my ideas in a meeting for acceptance or rejection, I put them in the market for success or failure.” ― Amit Kalantri"
        },
        {
            "Number": "2845",
            "Quote": "“It’s you that puts the resistance and unwillingness there. Put willingness there and resistance melts away.” ― Meir Ezra"
        },
        {
            "Number": "2846",
            "Quote": "“You actually, waste time when you cry over wasted time. Time should be a guide that helps you focus. All you should worry about is ageing with unfinished business.” ― DaVyshka"
        },
        {
            "Number": "2847",
            "Quote": "“Political skills are essential career competencies to get ahead and stay ahead.” ― Bonnie Marcus, The Politics of Promotion: How High-Achieving Women Get Ahead and Stay Ahead"
        },
        {
            "Number": "2848",
            "Quote": "“Brand and product don’t compete. Brand is product, and everything else conforming to the unique story that consumers create when they think of you.” ― Laura Busche, Lean Branding"
        },
        {
            "Number": "2849",
            "Quote": "“Good is the enemy of great” ― Jim Collins"
        },
        {
            "Number": "2850",
            "Quote": "“Running a business well means knowing when it's time to make profit.” ― Auliq Ice"
        },
        {
            "Number": "2851",
            "Quote": "“When you see someone who has a lot of knowledge, they learned it over time. When you see someone who has a lot of skills, they developed them over time. When you see some one who has done a lot, they accomplished it over time. When you see someone who has a lot of money, they earned it over time. The key is over time. Success is built sequentially. It's one thing at a time.” ― Gary Keller, The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results"
        },
        {
            "Number": "2852",
            "Quote": "“Its all about perception in life, For some One minus One = One & for some its Zero.That's the only difference.” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "2853",
            "Quote": "“Solamon Energy Corp (SSL), \"The Company\", is neither offering nor has offered any shares for sale to the general public IPO and has not engaged any agents to do so, as shares can only be traded through GXG Markets by authorized brokers. Potential investors cautioned against solicitation by any unauthorized brokers to purchase SSL:GXG (London) shares. Economic Frauds has been reported. No affiliation with unauthorized offshore broker activity Fisher Capital (FCM) fraud.” ― Solamon Energy"
        },
        {
            "Number": "2854",
            "Quote": "“Buffett's uncommon urge to chronicle made him a unique character in American life, not only a great capitalist but the Great Explainer of American capitalism. He taught a generation how to think about business, and he showed that securities were not just tokens like the Monopoly flatiron, and that investing need not be a game of chance. It was also a logical, commonsensical enterprise, like the tangible businesses beneath. He stripped Wall Street of its mystery and rejoined it to Main Street -- a mythical or disappearing place, perhaps, but one that is comprehensible to the ordinary American.” ― Roger Lowenstein, Buffett: The Making of an American Capitalist"
        },
        {
            "Number": "2855",
            "Quote": "“THE Biggest enemy of Truth is known as Facts in our Society” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2856",
            "Quote": "“Business is the dirtiest word in the world that does not exist in my universe.” ― Petra Hermans"
        },
        {
            "Number": "2857",
            "Quote": "“If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.” ― Simon Sinek"
        },
        {
            "Number": "2858",
            "Quote": "“In this wonderful modern age, if you know what you want, you can just reach out and, with the click of a mouse, take complete control of your entire buying and shopping experience.” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2859",
            "Quote": "“Change how you're paid, change your life.” ― Richie Norton"
        },
        {
            "Number": "2860",
            "Quote": "“For as long as you give importance to FACTS you will not create” ― Meir Ezra"
        },
        {
            "Number": "2861",
            "Quote": "“Speaking from the heart is simple. Listening wholeheartedly, however, is much, much more difficult and most rare.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2862",
            "Quote": "“Vision is oxygen for companies.” ― Alin Sav"
        },
        {
            "Number": "2863",
            "Quote": "“A penny saved is still just a fucking penny.” ― Dan Lok, F.U. Money: Make As Much Money As You Want And Live Your Life As You Damn Well Please!"
        },
        {
            "Number": "2864",
            "Quote": "“In the end it will be your “Actions” “Convictions” & “Thoughts” which will determine how you shaped your life.” ― Abhishek Shukla, The Reflection \"Success or Stress\"Choose Wisely"
        },
        {
            "Number": "2865",
            "Quote": "“Saving face means preserving dignity for all parties involved in order to reach a positive outcome.” ― Maya Hu-Chan, Saving Face: How to Preserve Dignity and Build Trust"
        },
        {
            "Number": "2866",
            "Quote": "“Dissenting opinions are useful, even when they are wrong.” ― Adam Grant, Originals: How Non-Conformists Move the World"
        },
        {
            "Number": "2867",
            "Quote": "“The key to most start-up successes is seeing a need and filling it.” ― Ziad K. Abdelnour, StartUp Saboteurs: How Incompetence, Ego, and Small Thinking Prevent True Wealth Creation"
        },
        {
            "Number": "2868",
            "Quote": "“Subliminal influence, is the constant drive to the change in consumer choices.” ― Wayne Chirisa"
        },
        {
            "Number": "2869",
            "Quote": "“When you fail, get hurt, feel bad, but act on it! Everybody fails, but the ones who act are the ones who change the world!” ― Vishwas Mudagal"
        },
        {
            "Number": "2870",
            "Quote": "“Failing conventionally is the route to go; as a group, lemmings may have a rotten image, but no individual lemming has ever received bad press” ― Warren Buffett"
        },
        {
            "Number": "2871",
            "Quote": "“Those who can create, will create. Those who cannot create, will compete.” ― Michael F. Bruyn, The Philosopher's Toolbox for Entrepreneurs"
        },
        {
            "Number": "2872",
            "Quote": "“The absence of a message sometimes is a presence of one.” ― Hasse Jerner"
        },
        {
            "Number": "2873",
            "Quote": "“There is no future when you work with unwilling people.” ― Meir Ezra"
        },
        {
            "Number": "2874",
            "Quote": "“You can't make history going incognito.” ― Utkarsh Sharma"
        },
        {
            "Number": "2875",
            "Quote": "“In my world, people are always plotting. You have no idea of all the crimes people in business commit every day. Like it was nothing. Or there’s a set of special rules for them. Remember when Bush made that whole speech about ‘corporate ethics’ last year? What a fraud. You think stuff like Enron or WorldCom is an aberration? It’s only the tip. Business is a religion. Probably the only one practiced all over the world.” ― Andrew Vachss, Down Here"
        },
        {
            "Number": "2876",
            "Quote": "“Un'azienda si può sempre acquistare, ma un modello socio-economico non è ancora in vendita.” ― Alberto Forchielli, Il potere è noioso: Il mondo globalizzato raccontato dal più anarchico degli economisti"
        },
        {
            "Number": "2877",
            "Quote": "“Good communication may not make a risky deal safe, but poor communication may sell benefits of a good deal.” ― Dianna Booher, What More Can I Say?: Why Communication Fails and What to Do about It"
        },
        {
            "Number": "2878",
            "Quote": "“The best way for marketing to “know the customer” now is to truly function as a knowledge center, iterating through efforts to connect with customers, optimizing for insight, seeking to create more meaningful relationships with customers by getting clearer and clearer about what different people value for different reasons.” ― Kate O'Neill, Pixels and Place: Connecting Human Experience Across Physical and Digital Spaces"
        },
        {
            "Number": "2879",
            "Quote": "“Though you may be paid minimum wage, to the customers you are the face of the entire company.” ― Sophia Amoruso, #Girlboss"
        },
        {
            "Number": "2880",
            "Quote": "“Unnecessary spending makes another man rich and another man poor.” ― Thebe Kegomoditswe"
        },
        {
            "Number": "2881",
            "Quote": "“A business shines brightest when its people are working on problems bigger than themselves” ― Damian Mingle"
        },
        {
            "Number": "2882",
            "Quote": "“An organization with excellent internal communication will run smoothly, allowing its members to progress toward a mutual goal, which will ultimately affect the quality of external communication.” ― Scribendi, Effective Business Communication"
        },
        {
            "Number": "2883",
            "Quote": "“When you work free of charge, you get to choose your customer.” ― Vineet Raj Kapoor"
        },
        {
            "Number": "2884",
            "Quote": "“There are days when you will wonder if it is even possible to make money doing what you do, or whether you are just barking up the wrong tree... There will be days when you think that if you don't show up for the next few days nobody will miss you and nobody will care... Don't believe it...it's not true...If your gift and your passion wasn't needed you wouldn't have them...” ― Osayi Emokpae Lasisi, Billionaire Mindset (for MoneyMaking Mommies): How to make your Billions and build your legacy"
        },
        {
            "Number": "2885",
            "Quote": "“As a business leader you have to ask yourself, “Am I creating a consumer environment that is conducive to loyalty?” If the answer is no, FIX IT!” ― Steve Maraboli"
        },
        {
            "Number": "2886",
            "Quote": "“A strong and capable leader can stand on their own two feet. A wimpy puppet of a leader needs to have their father, their father-in-law, mother, mother-in-law, sister, nursemaid, paid 'yes' people, etc. prop him up. That's fine if he is a baby, but not fine when he is a grown man. If he is capable of leading a company without the help of nepotism, then his workers will respect him and naturally get motivated to support him as a leader. - Strong by Kailin Gow” ― Kailin Gow"
        },
        {
            "Number": "2887",
            "Quote": "“Passion + Vision +Skill + Mentoring = Success.” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2888",
            "Quote": "“Anyone who believes that exponential growth can go on forever in a finite world is either a madman or an economist.” ― Kenneth Boulding"
        },
        {
            "Number": "2889",
            "Quote": "“The idea of finding value in what people are willing to pay to get rid of it one of the fundamental backbones of ecocapitalism, as I think of it now.” ― Tom Szaky, Revolution in a Bottle: How TerraCycle Is Redefining Green Business"
        },
        {
            "Number": "2890",
            "Quote": "“The moment of creation is 100% willingness.” ― Meir Ezra"
        },
        {
            "Number": "2891",
            "Quote": "“Where value goes, dollars flow. As they say, people vote with dollars. Verification of value is repeat business.” ― Richie Norton"
        },
        {
            "Number": "2892",
            "Quote": "“Be Shameless. Experiment. This is the only way to identify your true passion.” ― Vishwas Mudagal, Losing My Religion"
        },
        {
            "Number": "2893",
            "Quote": "“To enjoy a peaceful & Beautiful Life We should open our 'EYE' and Close our 'I” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2894",
            "Quote": "“You can’t plough a field by turning it over in your mind. Either you get out there and plough it or it doesn’t get done.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2895",
            "Quote": "“The standard business model for corporations is to lie, confuse and deny anything that may threaten their profitability.” ― Steven Magee"
        },
        {
            "Number": "2896",
            "Quote": "“Owning a business is a giant step to take.” ― Oscar Auliq-Ice"
        },
        {
            "Number": "2897",
            "Quote": "“Read not only between the lines, but also what is not written.” ― Vijay Kedia"
        },
        {
            "Number": "2898",
            "Quote": "“Dear Past, Thank you for all the lessons. Dear Future, I am ready now.” ― Linsey Mills, Your Business Venture: The Prep. The Pitch. The Funding."
        },
        {
            "Number": "2899",
            "Quote": "“In the information age, a website can generate such a high income which even a factory cannot generate.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2900",
            "Quote": "“Display these signs in your shop: 1) Enjoy that which you receive - Do not worry about that which you have not received. 2) Fault is of the sufferer. 3) Dishonesty is the best foolishness!” ― Dada Bhagwan, The Science Of Karma"
        },
        {
            "Number": "2901",
            "Quote": "“Anyone can easily build a career on a single eccentric talent, if it is cunningly deployed. As I always advise young people, ‘Find one or two things your boss is rubbish at and be quite good at them.’ Complementary talent is far more valuable than conformist talent.” ― Rory Sutherland, Alchemy: The Dark Art and Curious Science of Creating Magic in Brands, Business, and Life"
        },
        {
            "Number": "2902",
            "Quote": "“Church and business are compatible” ― Sunday Adelaja"
        },
        {
            "Number": "2903",
            "Quote": "“A very focused Chinese government, with firm, long-term social and economic goals, and an increasingly assertive international voice, is feeling more pressure from the Chinese dreamers, and is putting more pressure on foreign business interests. The foreign multinationals have their purposes, but also feed resentment that so much of China’s hard work results in easy profits for foreign brands and foreign shareholders. This new reality requires foreign firms to pay much more attention to the social context, and to ensure that they can manage the increased political and regulatory risk. From \"Risky Business in China\" (Palgrave, September 2014)” ― Jeremy Gordon"
        },
        {
            "Number": "2904",
            "Quote": "“Great things in business are never done by one person.They are done by a team of people” ― Steve jobs, Steve Jobs: His Own Words and Wisdom"
        },
        {
            "Number": "2905",
            "Quote": "“In markets, stupid action does not have equal but severe opposite reaction.” ― Vijay Kedia"
        },
        {
            "Number": "2906",
            "Quote": "“True Relations never break and relation which breaks were never true” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2907",
            "Quote": "“As one might gather from a painting of him scowling in a tall stovepipe hat, Day saw himself as a businessman, not a journalist. ''He needed a newspaper not to reform, not to arouse, but to push the printing business of Benjamin H. Day.'' Day's idea was to try selling a paper for a penny - the going price for many everyday items, like soap or brushes. At that price, he felt sure he could capture a much larger audience than his 6-cent rivals. But what made the prospect risky, potentially even suicidal, was that Day would then be selling his paper at a loss. What day was contemplating was a break with the traditional strategy for making profit: selling at a price higher than the cost of production. He would instead rely on a different but historically significant business model: reselling the attention of his audience, or advertising. What Day understood-more firmly, more clearly than anyone before him-was that while his readers may have thought themselves his customers, they were in fact his product.” ― Tim Wu, The Attention Merchants: The Epic Scramble to Get Inside Our Heads"
        },
        {
            "Number": "2908",
            "Quote": "“If you're waiting until you feel talented enough to make it, you'll never make it.” ― Criss Jami, Healology"
        },
        {
            "Number": "2909",
            "Quote": "“You have to work on the business first before it works for you.” ― Idowu Koyenikan, Wealth for All: Living a Life of Success at the Edge of Your Ability"
        },
        {
            "Number": "2910",
            "Quote": "“It needs EFFORTS to catch time on time!” ― Shayana Kaushal"
        },
        {
            "Number": "2911",
            "Quote": "“Its not your fault for not being there. Its my fault for thinking you would be” ― Abhishek Shukla, Feelings Undefined: The Charm of the Unsaid Vol. 1"
        },
        {
            "Number": "2912",
            "Quote": "“Wal-Mart can't seem to grasp an essential fact: in 2006, the company has exactly the reputation it has earned. No, we don't give the company adequate credit for low prices. But the broken covenant Sam Walton had with how to treat store employees, the relentless pressure that hollows out companies and dilutes the quality of their products, the bullying of suppliers and communities, the corrosive secrecy, the way Wal-Mart has changed our own perception of price and quality, of value and durability--none of these is imaginary, or trivial, or easily changed with a fresh set of bullet points, an impassioned speech, and a website heavy with \"Wal-Mart facts\". If Wal-Mart does in fact double the gas mileage of its truck fleet, and thereby double the gas mileage of every long-haul truck in America, that will be huge. It will change gas consumption in the United States in a single stroke. But it hasn't happened yet. And even if it does, it will not make Wal-Mart a good company or a good corporate partner or a good corporate citizen.” ― Charles Fishman, The Wal-Mart Effect: How the World's Most Powerful Company Really Works - and How It's Transforming the American Economy"
        },
        {
            "Number": "2913",
            "Quote": "“Endurance precedes success.” ― Wayne Chirisa"
        },
        {
            "Number": "2914",
            "Quote": "“Many businesses had closed down due to the emergency situation that went on in the city. People were strongly advised to remain in their homes, until the situation could be contained.” ― Jason Medina, The Manhattanville Incident: An Undead Novel"
        },
        {
            "Number": "2915",
            "Quote": "“I learned that when you can turn a presentation into a conversation, you have won the battle of converting a client; and second, I learned that the real Carla was my best competitive weapon and my key personal advantage.” ― Carla Harris, Expect to Win: Proven Strategies for Success from a Wall Street Vet"
        },
        {
            "Number": "2916",
            "Quote": "“Success leads to laxity and bloat and this leads to decline. Few avoid this tragic arch. Only where there is starvation will you find a tightly crafted and integrated set of actions and policies.” ― Richard P. Rumelt, Good Strategy Bad Strategy: The Difference and Why It Matters"
        },
        {
            "Number": "2917",
            "Quote": "“The market changes faster than school can teach. Don´t lean on degrees.” ― Alin Sav"
        },
        {
            "Number": "2918",
            "Quote": "“The end of every transformation is the beginning of a new era.” ― Shamit Manilal"
        },
        {
            "Number": "2919",
            "Quote": "“If you don’t have money it is because you are in some kind of confusion.” ― Meir Ezra"
        },
        {
            "Number": "2920",
            "Quote": "“The value of a business is a function of how well the financial capital and the intellectual capital are managed by the human capital. You'd better get the human capital part right.” ― Dave Bookbinder, The NEW ROI: Return on Individuals: Do you believe that people are your company's most valuable asset?"
        },
        {
            "Number": "2921",
            "Quote": "“Người ta thường có ảo tưởng rằng có thể công nghiệp hóa một quốc gia bằng cách xây dựng các nhà máy. Không phải. Bạn công nghiệp hoá bằng cách xây dựng các thị trường.” ― Philip Kotler"
        },
        {
            "Number": "2922",
            "Quote": "“WE IN IT TO WIN IT” ― ash mufareh"
        },
        {
            "Number": "2923",
            "Quote": "“There is an interplay between great leadership, events, trends, the organization, the people in it, the market 'out there' that goes far beyond one person exercising their will over others. That's not what leadership is any more.” ― Phil Dourado, The 60 Second Leader: Everything You Need to Know about Leadership, in One Minute Bites"
        },
        {
            "Number": "2924",
            "Quote": "“Your Employees is Part of Your Company, If you want to improve your business Treat like friend not like servant.” ― M.Zuber Bhoja"
        },
        {
            "Number": "2925",
            "Quote": "“Before you start any business, you need to get your target audience down pat. Who do you want to serve? Who will your product/service benefit the most? Don’t worry about the rest.” ― Kevin J. Donaldson"
        },
        {
            "Number": "2926",
            "Quote": "“The bets you take determine the success you make.” ― Brad Chase, Strategy First: How Businesses Win Big"
        },
        {
            "Number": "2927",
            "Quote": "“Those who deal with customers on a regular basis should be circumspect whenever they open their “traps.” It is better not to say anything at all than to say, and later, pay!” ― J. N. HALM, CUSTOMER ROMANCE: A New Feel of Customer Service"
        },
        {
            "Number": "2928",
            "Quote": "“We knew well how much these people were paying for cocaine - and that the more coke cost, the more people wanted it. We applied the same market plan to our budding catering operation, along with a similar pricing structure, and business was suddenly very, very, good.” ― Anthony Bourdain, Kitchen Confidential: Adventures in the Culinary Underbelly"
        },
        {
            "Number": "2929",
            "Quote": "“Words are directed to your personalities namely; - God, your hearers, devil and yourself.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2930",
            "Quote": "“If it's glorious to fail in great attempts, then #gloriousfail should definitely be a thing.” ― Brandon David Hastings"
        },
        {
            "Number": "2931",
            "Quote": "“As people deteriorate (get worse), they believe more and more in science, they lose their ability to bring something out of nothing. They forget they are a spirit.” ― Meir Ezra"
        },
        {
            "Number": "2932",
            "Quote": "“The USA has cloned Russia’s toilet paper business model!” ― Steven Magee"
        },
        {
            "Number": "2933",
            "Quote": "“If you don’t use your new knowledge and skills within a relatively short space of time, then it may have been better never to have had the tantalising prospect of change for the better placed in front of you.” ― Robin Hoyle, Complete Training: From Recruitment to Retirement"
        },
        {
            "Number": "2934",
            "Quote": "“Solving the problem means helping the customer to understand why you’re the best person for the job” ― Chris Murray, Selling with EASE: The Four Step Sales Cycle Found in Every Successful Business Transaction"
        },
        {
            "Number": "2935",
            "Quote": "“We may not be able to stop satan from doing his business, but we can scheme to make his business to yield a loss! All things... I mean \"all\", \"all things\", \"everything\" is working for our good!” ― Israelmore Ayivor, Daily Drive 365"
        },
        {
            "Number": "2936",
            "Quote": "“When they start something for the artists to promote talent and art, but their focus and emphasis is on business side of whatever they started .They are going to sideline other artist and going to kill the spirit of art in others, because they are trying to make business out of artists forgetting how important is the artist and the art itself.” ― De philosopher DJ Kyos"
        },
        {
            "Number": "2937",
            "Quote": "“Within each of us are two competing sides, a polarity of character. Only one leads to greatness.” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "2938",
            "Quote": "“In the world of business, being slow is a losing move.” ― Shawn Casemore"
        },
        {
            "Number": "2939",
            "Quote": "“Focus your business on what you do best. Let everyone else worry about the rest.” ― Kevin Stirtz, Marketing For Smart People"
        },
        {
            "Number": "2940",
            "Quote": "“Serve many be great, Love each other design our fate” ― BJ Klock"
        },
        {
            "Number": "2941",
            "Quote": "“Thanks God that he created me dumb and crazy enough to believe that I can create and invent in other than what i studied in and what they want me to be.” ― Hisham Fawzi"
        },
        {
            "Number": "2942",
            "Quote": "“You are as successful as you are NOT careful. 99% of society says why it cannot be done, why it is dangerous, and they fail since they are careful. Nothing can happen to YOU that you can not handle.” ― Meir Ezra"
        },
        {
            "Number": "2943",
            "Quote": "“Only by using a ‘structured means of control’ can an organization convert high-cost controls into business-assuring, profit-enhancing control.” ― Stephen Asbury, Health & Safety, Environment and Quality Audits"
        },
        {
            "Number": "2944",
            "Quote": "“The greatest irony is that people with Rolodexes are no longer LinkedIn. And if that pun doesn't make sense, don’t ask anyone in your Rolodex to explain it.” ― Ryan Lilly, #Networking is people looking for people looking for people"
        },
        {
            "Number": "2945",
            "Quote": "“A relationship that is truly genuine does not keep changing its colors. Real gold never rusts. If a relationship is really solid and golden, it will be unbreakable. Not even Time can destroy its shine.” ― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem"
        },
        {
            "Number": "2946",
            "Quote": "“The thing is, If you try to market to everyone, then you successfully market to no one.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2947",
            "Quote": "“Create your world with God's Word in your mouth just say it and it will be accomplished!” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2948",
            "Quote": "“Nothing brightens the life of any youth better than knowledge and ability to effect a positive change.” ― Bamigboye Olurotimi"
        },
        {
            "Number": "2949",
            "Quote": "“TAKE Risk because you never know how absolutely perfect something could turn out to be..” ― Abhishek Shukla, KISS Life \"Life is what you make it\""
        },
        {
            "Number": "2950",
            "Quote": "“Having a team deliver standards and performance is much easier when they want to be there and want to be led by you.” ― Tony Curl"
        },
        {
            "Number": "2951",
            "Quote": "“As Herb Kelleher of Southwest Airlines succinctly put it, 'Strategy, overdone; doing stuff, underdone'.” ― Carlo Ancelotti, Quiet Leadership: Winning Hearts, Minds and Matches"
        },
        {
            "Number": "2952",
            "Quote": "“A business must have a website because office hours apply to a workplace, not to a website,” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2953",
            "Quote": "“I will design my reputation and my resolve shall be absolute. I shall not give in when I know I can help.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2954",
            "Quote": "“An entrepreneur is someone who is the king of his business one day and its slave the next.” ― Ajeet Sharma, Three Marketeers"
        },
        {
            "Number": "2955",
            "Quote": "“Every true leader is in the business of God. The good news is that God’s business does not yield loses. Most leaders fail because they claim to be in a business whose owner they never know!” ― Israelmore Ayivor, Leaders' Watchwords"
        },
        {
            "Number": "2956",
            "Quote": "“BUSINESS IS ALL ABOUT CONNECTING THE PEOPLE OR THINGS.” ― Dax Bamania"
        },
        {
            "Number": "2957",
            "Quote": "“Golf sits in that beautiful junction between perfection and frustration.” ― Colleen Ferrary Bader"
        },
        {
            "Number": "2958",
            "Quote": "“[Clayton] Christensen had seen dozens of companies falter by going for immediate payoffs rather than long-term growth, and he saw people do the same thing. In three hours at work, you could get something substantial accomplished, and if you failed to accomplish it you felt the pain right away. If you spent three hours at home with your family, it felt like you hadn't done a thing, and if you skipped it nothing happened. So you spent more and more time at the office, on high-margin, quick-yield tasks, and you even believed that you were staying away from home for the sake of your family. He had seen many people tell themselves that they could divide their lives into stages, spending the first part pushing forward their careers, and imagining that at some future point they would spend time with their families--only to find that by then their families were gone.” ― Larissa MacFarquhar"
        },
        {
            "Number": "2959",
            "Quote": "“Profit is not the purpose of a business, but rather the test of its validity.” ― Peter F. Drucker"
        },
        {
            "Number": "2960",
            "Quote": "“Companies aren’t families. They’re battlefields in a civil war.” ― Charles Duhigg, The Power of Habit: Why We Do What We Do in Life and Business"
        },
        {
            "Number": "2961",
            "Quote": "“Be a King. Dare to be Different, dare to manifest your greatness.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2962",
            "Quote": "“Take your dreams off the ground to the clouds of business where your products will contribute to make the world a better place.” ― Israelmore Ayivor, Shaping the dream"
        },
        {
            "Number": "2963",
            "Quote": "“Every man has a specific skill, whether it is discovered or not, that more readily and naturally comes to him than it would to another, and his own should be sought and polished. He excels best in his niche - originality loses its authenticity in one's efforts to obtain originality.” ― Criss Jami, Salomé: In Every Inch In Every Mile"
        },
        {
            "Number": "2964",
            "Quote": "“Don't blow off another's candle for it won't make yours shine brighter.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2965",
            "Quote": "“In this world of half-jobs and liars, I will prevail.” ― Chris Murray, The Extremely Successful Salesman's Club"
        },
        {
            "Number": "2966",
            "Quote": "“Where Attention Goes, Energy Flows” ― Itzik Amiel"
        },
        {
            "Number": "2967",
            "Quote": "“One obvious aspect of management is identifying people who can help you get where you are trying to go. Talent-identification sounds like a straightforward business. If it were, every team would be successful.” ― Alex Ferguson, Alex Ferguson: My Autobiography"
        },
        {
            "Number": "2968",
            "Quote": "“Networking is an investment in your business. It takes time and when done correctly can yield great results for years to come.” ― Diane Helbig, Lemonade Stand Selling: Accelerate Your Small Business Growth"
        },
        {
            "Number": "2969",
            "Quote": "“Remember that businesses are made up of humans like you. They aren’t going to be perfect and they will need encouragement, clarification, and correction to deliver their best.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2970",
            "Quote": "“I believe inspiring trust with transparency and tenacity is the keystone to doing business.” ― Ashwin Muthiah, Chairman, AM International"
        },
        {
            "Number": "2971",
            "Quote": "“Trust: it's the basis of everything else.” ― Matthew Pollard, The Introvert's Edge: How the Quiet and Shy Can Outsell Anyone"
        },
        {
            "Number": "2972",
            "Quote": "“Authority is not a power, it is a responsibility.” ― Amit Kalantri"
        },
        {
            "Number": "2973",
            "Quote": "“I foresee the next wave of revenue growth in corporate America will come directly from Data Science.” ― Ken Poirot"
        },
        {
            "Number": "2974",
            "Quote": "“When you need to confront something, you stopped being willing long ago.” ― Meir Ezra"
        },
        {
            "Number": "2975",
            "Quote": "“God comes down in the evenings to chat with man, enjoy man's company and find out how man faired in the course of the day.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2976",
            "Quote": "“Teamwork is a system without broken parts.” ― Joey Lawsin, Biotronics: The Silver Species"
        },
        {
            "Number": "2977",
            "Quote": "“Yes, your words matter and how you communicate with your clients can be the key to a successful future. Use empathy, thoughtfulness and kindness in your business interactions and think before you speak.” ― Cindy Ann Peterson, The Power of Civility: Top Experts Reveal the Secrets to Social Capital"
        },
        {
            "Number": "2978",
            "Quote": "“it was always something what we did or said, and there would be this flash, and then it didn't subside. all your past sins would be brought up, it was just endless. and my mother attributed it sometimes to having neuralgia, but she never showed that outwardly” ― Alice Schroeder"
        },
        {
            "Number": "2979",
            "Quote": "“If you want your fridge freezer and your car, a nice house, and asphalt on the roads, and a health service, then thank the weapons business. Thank the war economy that drives us to this and thank [a major corporation]. [War] is good, good for England, and especially good for the economy. You deride the weapons business, but without it we would be a 10th rate country struggling to maintain a standard of living anywhere anywhere near that of our european neighbors.” ― Jasper Fforde, The Eyre Affair"
        },
        {
            "Number": "2980",
            "Quote": "“Ciente de tuas capacidades e limitações, não inicies nenhuma empreitada que não possas levar a cabo.” ― Sun Tzu, The Art of War"
        },
        {
            "Number": "2981",
            "Quote": "“For customers, a website is an 'always open' workplace of your business.” ― Amit Kalantri, Wealth of Words"
        },
        {
            "Number": "2982",
            "Quote": "“Whether you practice craftiness in your business, you will have profit and if you do not practice craftiness, then also you will have [same] profit. Craftiness creates a liability for the next life. So God had said not to do craftiness. There is no benefit in it and there is infinite suffering.” ― Dada Bhagwan"
        },
        {
            "Number": "2983",
            "Quote": "“A highly paid, highly motivated employee who is not allowed to work with his full potential is like a Ferrari which is not allowed out of the garage.” ― Charbel Tadros"
        },
        {
            "Number": "2984",
            "Quote": "“Life isn't all about money but this life is nothing without it!” ― Wayne Dupree"
        },
        {
            "Number": "2985",
            "Quote": "“Trust yourself, trust your intuition, trust your heart and doors will open.” ― Shawn Vij, Moral Fiber - A Practical Guide to Living Our Values"
        },
        {
            "Number": "2986",
            "Quote": "“life is a continuous exercise is creative problem solving” ― Michael J Gelb, Brain Power"
        },
        {
            "Number": "2987",
            "Quote": "“The phone is the new tamagotchi. We have to feed it daily with energy to keep it alive.” ― Alin Sav"
        },
        {
            "Number": "2988",
            "Quote": "“You have to actively listen to your clients and provide the service they’re looking for!” ― john di lemme, *57* Must Use Words in Every Piece of Marketing that You Do for Your Business"
        },
        {
            "Number": "2989",
            "Quote": "“You can’t be “it” for everyone. In fact, if you try to please everyone, you will please no one, especially yourself.” ― Amber Hurdle, The Bombshell Business Woman: How to Become a Bold, Brave, and Successful Female Entrepreneur"
        },
        {
            "Number": "2990",
            "Quote": "“Everyone maintains hope for profit only. No person ever maintains hope for a loss. For one year, at least run (your business) with the hope for a loss. If you incur a loss, then understand that your hope has been fulfilled! 'We' maintain a hope for loss, 'we' do not do as everyone does.” ― Dada Bhagwan, Brahmacharya: Celibacy Attained with Understanding"
        },
        {
            "Number": "2991",
            "Quote": "“The most powerful productivity tool ever invented is simply the word \"No.” ― Shane Parrish"
        },
        {
            "Number": "2992",
            "Quote": "“Business is like a game and you play the game only in two ways. Either you play to Win or Play not to Lose” ― Qasid Parkar"
        },
        {
            "Number": "2993",
            "Quote": "“Wait What Really OK is A methodical, comical and informational podcast sharing authentic brand messaging, optics approaches & strategies for honorable authority driven businesses.” ― Loren Weisman"
        },
        {
            "Number": "2994",
            "Quote": "“Man is like a bride unto God. God is jealous when man veers away from Him.” ― Jaachynma N.E. Agu, The Prince and the Pauper"
        },
        {
            "Number": "2995",
            "Quote": "“The sum of our greatness lies not in asking “what do I want to do?” but rather “who do I want to be?” ― Lolly Daskal, The Leadership Gap: What Gets Between You and Your Greatness"
        },
        {
            "Number": "2996",
            "Quote": "“Deregulation: It is what greedy corporate business people do. Afterwards people start getting injured and killed in large numbers and then the reality of deregulation emerges to the general public.” ― Steven Magee"
        },
        {
            "Number": "2997",
            "Quote": "“Spare the regulation and you spoil the corporation.” ― C.A.A. Savastano"
        },
        {
            "Number": "2998",
            "Quote": "“Creativity is a unique characteristics that a person can posses from his or her own knowledge when he or she is creating changes in society that can benefit a vast amount of people.” ― Saaif Alam"
        },
        {
            "Number": "2999",
            "Quote": "“An entrepreneur's job is to find a problem that needs a solution and then produce a solution.” ― Amit Kalantri, Wealth of Words"
        }
    ]

    export default quotes