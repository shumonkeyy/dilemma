export const STORYLINE = [
  {
    id: 0,
    line: "June 28, 1993: The mayor tells me that 5 of my men are called in. They have not worked together before, nor are they well acquainted, but these select few were handpicked by the mayor to work on a drug runner case to form a task force led not by me, but the mayor. I was shocked. Usually, as the major of the police department, I led the task forces, but it is the mayor afterall, so who was I to say anything?",
    choice: false,
    goto: 1,
  },
  {
    id: 1,
    line: "June 29, 1993: In the morning, I hand the deputy a walkie talkie, telling him to update me about the task on hand. While they investigate the drug case, I stand on guard waiting for updates. After a few hours, the walkie talkie suddenly beeps, transmitting the deputy’s voice. “Major”, the deputy says, updating me on where they investigated and any leads that have been made. After a few minutes, he says, “But the real reason I am updating you now is because...”",
    choice: false,
    goto: 2,
  },
  {
    id: 2,
    line: "“We found a dead body near the University. What should we do?”",
    choice: true,
    ca: "(A) Tell the force to proceed with their initial task",
    cb: "(B) Tell them to investigate the course",
    gotoa: 3,
    gotob: 6,
  },
  {
    id: 3,
    line: 'I instructed the force to proceed with their initial task, knowing the mayor will be unhappy if they leave it untouched. However, the walkie talkie beeps again a few minutes later. “Sir," the deputy states, "we just received a report that another body has been found near the first body. The civilians found a gunshot wound on her face, gagged with a handkerchief. What should we do major?" ',
    choice: true,
    ca: "(A) Continue with initial task",
    cb: "(B) Let justice be served",
    gotoa: 4,
    gotob: 5,
  },
  {
    id: 4,
    line: "I proceeded to order the team to continue with the drug runner case. As time passes, they continuously make leads, and we are able to solve the case. But the mystery of the two bodies forever remains… ",
    choice: false,
    goto: -1,
  },
  {
    id: 5,
    line: "Though this is a digression from the purpose of the force, I order my men to bring the bodies in for an autopsy at the University's morgue hospital. Although the mayor may become unhappy with me, I know what I am doing will serve these two individuals justice. Ten minutes later, I received a transmission from the deputy. “Major, we have brought in the two bodies for an autopsy, but something strange occurred. When we came in, many of the students who were in the building… recognized the bodies?”",
    choice: false,
    goto: 8,
  },
  {
    id: 6,
    line: "I instruct the men to investigate the course with the mayor’s task in the back of my mind. After ten minutes of them carefully examining the body, I got a transmission from the deputy. “Major, after taking a look at the body, we have found two gunshot wounds on both his head and in the back. However, we are still unable to determine who this is or where they came from.”",
    choice: false,
    goto: 7,
  },
  {
    id: 7,
    line: "Ten minutes later, I received another transmission, “Major, we brought the body in for an autopsy at the University’s morgue hospital, but something strange occurred. Around the same time we brought it in, another body that had been found near this one was brought in?”",
    choice: false,
    goto: 8,
  },
  {
    id: 8,
    line: "Huh. Interesting. I instructed the deputy to come to where I was so we could discuss the details in person. I sat him down and told him to explain the details. He states, “From as far as I’ve heard and seen, the first body is a boy and the second body is a girl. The first body sustained a gunshot to his head and another to his back from a 2-3 feet range. We found his wallet near the University.” He hands the wallet over to me. ",
    choice: false,
    goto: 9,
  },
  {
    id: 9,
    line: "I took out his ID from the wallet. “His name is Alan,” the deputy continues. “19, always laughing according to the classmates who knew him.”<br/><br/>“How about the second body?” I asked. <br/><br/>“The second one had sustained a gunshot on the side of her cheek while the gun seemed to be touching her face. The second body also had bodily fluids “flowing out” of her.”",
    choice: false,
    goto: 10,
  },
  {
    id: 10,
    line: "“It’s pretty safe to say that the girl was the target then. Have you guys determined who it is?” I asked. <br/><br/>“Aileen, 21 years old, a student at this university. According to those who knew her, she was a very curious and nice person.” <br/><br/>Huh. Our country keeps failing to protect these children.",
    choice: false,
    goto: 11,
  },
  {
    id: 11,
    line: "The deputy continues without me prompting him. “I was thinking that maybe Alan did it.” <br/><br/>I put the wallet down on the table and raised an eyebrow. “Elaborate?”",
    choice: false,
    goto: 12,
  },
  {
    id: 12,
    line: "“Not trying to victim blame, of course. But from those same classmates, we heard that Alan got into a fight with another guy a couple months ago. Alan liked Aileen, but got rejected because Aileen has a boyfriend. He pretended to be understanding and continued being friends. Then when he lost the fight, his ego got hurt, and what do men with hurt ego do? They like to blame it on women, and Alan blamed it on Aileen because she rejected him. Therefore, I think it's pretty safe to say that Alan did it.”",
    choice: false,
    goto: 13,
  },
  {
    id: 13,
    line: "Wow. So he already has a theory.",
    choice: true,
    ca: "(A) His theory seems reasonable",
    cb: "(B) What is this kid saying?",
    gotoa: 14,
    gotob: 15,
  },
  {
    id: 14,
    line: 'Huh, seems reasonable. "Wrap up the case and call it a day".<br/><br/>But is that really the truth?',
    choice: false,
    goto: -1,
  },
  {
    id: 15,
    line: "If Allan was the culprit, <i>then how would he have shot himself from a 2-3 foot range?</i> Why would he shoot himself? This deputy is making a fool out of himself. I ordered the deputy to run a DNA test on Aileen’s body instead of agreeing with his nonsense. <br/><br/>Afterwards, I called the deputy, “Have everyone do a round check in the neighborhood,” I ordered, “Find potential witnesses for this case.”<br/><br/>“Allan couldn’t have done it,” I mutter, “Something isn’t adding up..”",
    choice: false,
    goto: 16,
  },
  {
    id: 16,
    line: "The next day, nothing had been discovered. I called the task force in for a meeting, taking a long sip of coffee before speaking, “I called you all in to talk about the matter on hand,” I pause to make sure everyone is focusing, “12,000 lives are at risk as we speak. Each day that the case remains unsolved, a student is under the threat of being murdered. I want you all to scrap the drug runner case, and focus on gathering all the evidence you can find.”",
    choice: false,
    goto: 17,
  },
  {
    id: 17,
    line: "One of my men interrupts before I speak again, “But what about the mayor?”<br/><br/>“I’ll worry about him, but for now I want each and every one of you to prioritize this case. Justice must be served to these students.”",
    choice: false,
    goto: 18,
  },
  {
    id: 18,
    line: "It was midday now. The only thing we had going for this case right now was the DNA test. I had little hope when an officer called, “Major, I was doing a round check on a house just now, and a civilian had found a bullet casing near the road where Allan’s body was found.” He handed the bullet casing over to me. <br/><br/>Though the bullet casing was not as useful, this was the only form of evidence that could keep this case on track. I passed the bullet casing to be tested.",
    choice: false,
    goto: 19,
  },
  {
    id: 19,
    line: "Just as I finished managing the bullet casing for testing, one of my fellow officers called me. “Major, Major! Officer Arbor is missing.”<br/><br/><i>...What</i>.",
    choice: true,
    ca: "(A) Search for the missing officer",
    cb: "(B) Worry about him later and put all effort into working on the murder case",
    gotoa: 20,
    gotob: 22,
  },
  {
    id: 20,
    line: "As I attempt to shift the focus onto finding the missing officer, the public gets annoyed. They do not like that I am attempting to even shift the resources from the case. They rioted every day in front of the police station, demanding that I get removed from my position of power. What should I do?",
    choice: true,
    ca: "(A) Continue searching for officer Arbor",
    cb: "(B) Public sentiment is more important: I will shift my focus onto the case.",
    gotoa: 21,
    gotob: 22,
  },
  {
    id: 21,
    line: "I decided to continue with my search for Officer Arbor. However, with the protests in front of the police station every day, the higher ups had decided to fire me.<br/><br/>I had failed these children.",
    choice: false,
    goto: -1,
  },
  {
    id: 22,
    line: "Although I decided to move forward with the case, the disappearance of the officer had alarmed us. The mayor’s house was close to where Allan’s body was found. What if the killers target him next?<br/><br/>The next day, I visited the mayor, informing him about my worries. “Sir, now that there are thousands of lives at risk, I am worried about your safety. You need to do something now, and get somewhere far away from here.” ",
    choice: false,
    goto: 23,
  },
  {
    id: 23,
    line: "The officer sipped his tea and smiled, straightening his signature white polo shirt. “It’s alright, major. I have faith in God's protection.”<br/><br/>“But mayor,” I say. <br/><br/>“I will pray to god,” he smiles, “I believe he will keep me safe,”",
    choice: true,
    ca: "(A) Prioritize the case",
    cb: "(B) Prioritize the mayor's safety",
    gotoa: 25,
    gotob: 24,
  },
  {
    id: 24,
    line: "The public was not happy with my decision. They are annoyed that I decided to put more effort into protecting a person of high power rather than protecting those who are vulnerable. They persistently protested in front of the police station every day requesting for me to be discharged. With time, my superiors had no choice but to accept their request.<br/><br/>I did things with the best intention, yet I was not able to bring these children to justice.",
    choice: false,
    goto: -1,
  },
  {
    id: 25,
    line: "I grimace, there’s no convincing this man. The mayor has always been a religious man at heart. Besides, there is a case that we need to solve. To bring justice, and save the lives of more citizens.<br/><br/>I meet with Khan, a potential culprit, who reportedly had a physical fight with Allan. He sits across from me, confused as to why he was in the station. ",
    choice: false,
    goto: 26,
  },
  {
    id: 26,
    line: "“I’m sorry for the sudden question”, he shifts in his seat, “but why was I called here?”<br/><br/>I slid a picture of Allan across the table to him, “Do you recognize this man? Perhaps someone you have gotten into a physical fight with?”<br/><br/>He nods, “Yeah, we did get into an argument, but that was months ago. We resolve our issues.”",
    choice: false,
    goto: 27,
  },
  {
    id: 27,
    line: "I raise my eyebrow, seeing the blood on his pants. I don’t buy it.  “If you two resolved your issues, why is there blood on your pants?” I question.<br/><br/>“Oh, this? I had punched a wall earlier, and blood had gotten onto my pants.”<br/><br/>I still didn’t buy it. After our meeting, I ordered the police force to continue looking into Khan’s story. Something about it had made me feel uneasy.",
    choice: false,
    goto: 28,
  },
  {
    id: 28,
    line: "However, after investigating his claim and Khan’s friends confirming that there wasn’t any rivalry between the two, we were at another dead end.<br/><br/>When I had thought all hope was lost, the deputy came in with the DNA tests. Handing it to me, the detective says, “the test reveals that seven men were involved with the bodily fluids and murder of Eileen.”",
    choice: false,
    goto: 29,
  },
  {
    id: 29,
    line: 'Wow, 7. How cruel do these people have to be to do that? <br/><br/> “But,” he continues, “the test led to no matches in the system meaning that the perpetrators had little to no involvement in crime beforehand. Additionally, we looked over the bullet casings that were found, and striations were found in it." <br/><br/>“Odd,” I frown, “How could the perpetrators have no criminal history despite the cruelty of this case?”',
    choice: false,
    goto: 30,
  },
  {
    id: 30,
    line: "After my meeting with the deputy, I ran the bullet case through a system of all the registered guns in the country. After a few minutes, the match was found, a M16 rifle with a serial number of 773159.<br/><br/>“What…” I frowned, “this can’t be right.”",
    choice: false,
    goto: 31,
  },
  {
    id: 31,
    line: "M16 was a standard police rifle in the Philippines and the serial number belonged to Officer Louis. But he had turned his gun in, so how could he have-? Huh, turned in on the day the bodies were discovered… <br/><br/> I suddenly heard something from the news that was playing from the TV in the back. “...with the rise of this case, the public, especially university students, have been uneasy. By gathering and interviewing neighbors, they were able to make a composite sketch of the driver of the van.”",
    choice: false,
    goto: 32,
  },
  {
    id: 32,
    line: "I snapped my head and looked at the TV. Then I did a double take, closed my eyes, and opened them again, only to see the same face.<br/><br/>The sketch looked exactly like Officer Arbor.",
    choice: true,
    ca: "(A) I have been betrayed by my own men!",
    cb: "(B) This is all just a bad coincidence...",
    gotoa: 33,
    gotob: 33,
  },
  {
    id: 33,
    line: 'Without having any time to process, I suddenly receive a call from an officer. <br/><br/>“Major..,” he hesitates, “Officer Louis and his brother just turned themselves in, claiming they were involved in the murders.”<br/><br/>My eyes darkened. “Bring them to my office," I told him, then hanged up.',
    choice: false,
    goto: 34,
  },
  {
    id: 34,
    line: "Twenty minutes later, I sat across the two of them. Disappointment was written on my face. These two men were officers who were supposed to protect their country, not fail it. I am in disbelief that someone so cruel had been working with us all along. <br/><br/>“I want your answers straight to the point,” I demand, “what is your involvement in the murders of Aileen and Alan?”<br/><br/>Louis hesitates for a second before answering, “We did participate in the murders of these two, but we weren’t the only ones, major.”",
    choice: false,
    goto: 35,
  },
  {
    id: 35,
    line: "His brother adds on, “Yeah, we were only following orders sir. But the guilt was too great to bear after the murders, which is why we had turned ourselves in.”<br/><br/>I frown, “Who are you taking orders from, and why?”<br/><br/>“A week before, both of us were approached by a man named Lavadia who had worked for General Barron,” Louis claimed.<br/><br/>I know that name. General Barron, a powerful figure in the army, was known for his infamous reputation of threatening opponents and connections to human rights violations. ",
    choice: false,
    goto: 36,
  },
  {
    id: 36,
    line: "“He told us that Barron wasn’t in the happiest state due to someone messing with his son, Khan. We were ordered to commit these murders for the general.”<br/><br/>I look at these two like they’re out of their mind. How could they have easily agreed to do such a thing? Who were the other men who did this?",
    choice: true,
    ca: "(A) Send them to another station that specializes in torture interrogations",
    cb: "(B) Immediately ask them these questions",
    gotoa: 38,
    gotob: 37,
  },
  {
    id: 37,
    line: "I demanded for the answers, time and time again, but it did not work. The men kept repeating the same storyline, and with no other proof, our team had no choice but to take their testimonies to court. As no other proof was able to be provided, General Barron was executed.<br/><br/>But this wasn't the truth.",
    choice: false,
    goto: -1,
  },
  {
    id: 38,
    line: "I send the two brothers to another police station, seeking answers to their story. I watch as they are forced to confess the truth through merciless torture at the station. Despite their resistance, they eventually gave in, confessing that they were working under someone of higher power. Not the general, but someone else. <br/><br/>My eyes widen in disbelief when I hear this, but I know what I need to do.",
    choice: false,
    goto: 39,
  },
  {
    id: 39,
    line: "Following the torture of the brothers, I immediately go to the killer’s house, knocking on their door. He shows up wearing his signature white Polo shirt.<br/><br/>“Mayor Sanchez,” I begin, “Can I ask you a few questions please?”<br/><br/>A few minutes later, I sat across from the mayor, the killer of Aileen and Alan, who willingly invited me in without suspecting anything.<br/><br/>“What were you doing on the night of June 28, 1993?”",
    choice: false,
    goto: 40,
  },
  {
    id: 40,
    line: "He thinks for a moment before answering, “That’s been so long, I’m not sure I can remember, major,” he laughs, “Well actually, I do recall what happened. I was with Elvira… my mistress. I was with her in the morning for breakfast then stayed in Manila for the entirety of the day before going back at 10.”<br/><br/>“Alright,” I pause, “now can you tell me what you know about the ongoing murder case?”",
    choice: false,
    goto: 41,
  },
  {
    id: 41,
    line: "“I was told on the very same day that two students had been murdered near my house! You can only imagine how enraged I was, I had immediately ordered a thorough investigation to be made about it. I will not hesitate to have the perpetrators of this murder case be killed whether a general’s son is involved or not!” the mayor expresses. <br/><br/> Huh. How does he know about the involvement of the general's son?",
    choice: false,
    goto: 42,
  },
  {
    id: 42,
    line: '"So, who do you think did it?”<br/><br/>The mayor leaned closer. "Well, I heard that the general\'s son had gotten into a fight with one of the victims before the murder. Maybe you should look into that."<br/><br/>Suddenly, all the pieces started to connect together. All the evidence made so far, the sketch made depicting the missing officer, the bullet case from officer Louis, the authority figure the brothers were working for, led to my answer. <br/><br/><i>The mayor is the murderer.</i>',
    choice: false,
    goto: 43,
  },
  {
    id: 43,
    line: "In all my years of working as the head of the police force, no case has ever been as mentally damaging as this one. 2 officers and our mayor, men who were supposed to protect the lives of citizens, were the merciless murderers of 2 innocent students. No amount of gore could compare to the disgust I feel towards these men. <br/><br/>Though I am still processing this betrayal, the investigation of this case must continue. There were still 4 murderers on the loose whose presence puts 12,000 lives in danger. ",
    choice: false,
    goto: 44,
  },
  {
    id: 44,
    line: "<i>But how do I find them?</i>",
    choice: true,
    ca: "(A) Utilize the evidence found",
    cb: "(B) Have the task force do another round check on houses",
    gotoa: 46,
    gotob: 45,
  },
  {
    id: 45,
    line: "The round check proves to be a failure. After searching the whole neighborhood, none of my men have reported anything new regarding the case. <br/><br/>But for some odd reason, my gut feeling tells me something is yet to be discovered from a place I haven’t thought of searching yet. The university.",
    choice: false,
    goto: 47,
  },
  {
    id: 46,
    line: "I think back to all the evidence made thus far during the investigation. One of them in particular, the bullet casing, had been tested the day Officer Arbor had been found missing. <br/><br/>Officer Arbor...<br/><br/>The officer who had been depicted in the sketch by the university students who were at unease. From what I remember, he had a close relationship with mayor Sanchez, the murderer. <br/><br/> Now I know the place where I can get answers from: the university.",
    choice: false,
    goto: 47,
  },
  {
    id: 47,
    line: "I stand at the entrance to the university; the place Aileen and Alan are no longer graduating from. I see posters plastered everywhere around campus, demanding justice for the two. A group of students walk together, chanting about the severity of the deaths and the need for action. What catches my eye is the poster they are holding, containing the same sketch depicting Officer Arbor. I walk up to them.",
    choice: true,
    ca: "(A) Introduce yourself as the major",
    cb: "(B) Lie about your identity",
    gotoa: 48,
    gotob: 49,
  },
  {
    id: 48,
    line: "After you introduced yourself, the students immediately criticized you for the incompetence of the police. They bombard you with questions, leaving no time to ask them if they knew anything.<br/><br/>You are unable to find anything due to the angry students.",
    choice: false,
    goto: -1,
  },
  {
    id: 49,
    line: "I introduce myself to the group of students as a transfer from another city, immediately inquiring about the sketch on the poster.<br/><br/>“Oh,” one student frowned, “since the police are putting our lives at stake each day, we decided to take matters into our own hands which included making this sketch of the murderer of Aileen and Alan.”<br/><br/>I raise an eyebrow. “What made you think that?”",
    choice: false,
    goto: 50,
  },
  {
    id: 50,
    line: "“From our investigation, we found that witnesses of the murders reported seeing a police van, and their descriptions combined to make this drawing”. Of Officer Arbor.<br/><br/>“Hm. Interesting.. Have you guys found anything else about this man?”<br/><br/>The student nods while frowning, “Yes, it was reported that he was last seen being arrested at a flea market in Manila.”<br/><br/>After we talked for a few more minutes, I had enough information to go forward with this case.",
    choice: false,
    goto: 51,
  },
  {
    id: 51,
    line: "The next day, I drove down to Manila to the jail where officer Arbor was said to be in.  Though I have not seen this man, someone whose duty was to protect the Philippines, in months, my disgust for his actions is written over my face when I stand before him. He looks up at me with a face full of surprise, “M..major?! My arrest was a mistake, sir. I was..”<br/><br/>“Save it, officer Arbor,” I interrupt, “I need you to come with me”",
    choice: false,
    goto: 52,
  },
  {
    id: 52,
    line: "I called in the rest of the task force for a questioning that I had disguised as a meeting to prevent suspicion. I sit in front of these 4 men. My men. Men who ruthlessly took the lives of children we promised to protect. The betrayal I felt was unreal.<br/><br/>“Officers,” I start, “I entrusted you with the duty of providing for the country. But you have both failed to do so and broke my trust by murdering Aileen and Alan with the help of the mayor.”",
    choice: false,
    goto: 53,
  },
  {
    id: 53,
    line: "They stay silent, so I continue, “I want to know why. Why did you all do such a thing?” I ask, “What happened that night of the murders? I demand answers from all of you now.”<br/><br/>Despite my aggressiveness, nobody said anything. Throughout the entire questioning, I continuously demanded answers from these men, but got no response back. <br/><br/>In order for justice to be served, I needed to go to my last resort. The strategy where officer Louis and his brother confessed their sides of the story.",
    choice: false,
    goto: 54,
  },
  {
    id: 54,
    line: "I sent these men- no, monsters, to be tortured into telling the truth. <br/><br/>Officer Arbor was the first one to crack after being water boarded. Gasping for air, he shouted, “Okay, okay! I’ll tell you what happened. The whole purpose of the task force was not looking for the drug runner, but for Aileen.” <br/><br/>“The case was never about that,” another officer confessed in his individual investigation, “We were all involved with the murders because of the mayor's orders.”",
    choice: false,
    goto: 55,
  },
  {
    id: 55,
    line: "Arbor also stated, “He had told us about his desire for this girl, and demanded for us to bring her to him. So that night.. I drove everyone in the police van until we found Aileen and Alan. Instead of just leaving Alan there, we brought him with Aileen where the mayor got what he wanted. After he was done with her, he let us do whatever with the single demand of disposing of their bodies. So, after, we drove them to another area where we killed them. But I didn’t take part in the act that the other men did because I felt bad for her.”",
    choice: false,
    goto: 56,
  },
  {
    id: 56,
    line: "I look at both of them with disgust, how could they have done something so cruel? Not just 1, but 7 of the people I trusted with fulfilling their duties have committed a crime so violating that words are unable to describe it. It’s just so inhumane.<br/><br/>",
    choice: true,
    ca: "(A) Continue interrogating: they left out something",
    cb: "(B) This seems to be the full story",
    gotoa: 58,
    gotob: 57,
  },
  {
    id: 57,
    line: "As this seemed to be the full story, we closed the case and labelled it solved. However, there was one detail we didn't catch, which would lead to one of the murderers being on the loose, even years after the murder...",
    choice: false,
    goto: -1,
  },
  {
    id: 58,
    line: 'Something wasn\'t adding up, however. I only had the Mayor, the Deputy, Arbor, Louis, Victor, Zach, and Louis\'s brother. But without Arbor taking part in the action, there were only 6 peole who took part in the act. How could that be?" I asked Arbor, "Is there someone else that was involved that you haven\'t told me about?"<br/><br/>"Oh, are you talking about the garderner?" he asked, "He joined midway through the act of torturing Alan and participated in the act with Aileen as well."',
    choice: false,
    goto: 59,
  },
  {
    id: 59,
    line: "Someone had the audacity to join midways? Our country truly has evil people.<br/><br/>Now that truth has come out, I am forced to endure the loss of trust of both my men and the mayor. These men have betrayed not just me, but the entire country.<br/><br/>However, one question remains whether this information is disclosed to the public or kept hidden. Though I am a strong believer in serving justice, this case could tarnish the reputation of the force permanently. However, if it is kept hidden, these children will forever remain unavenged.",
    choice: false,
    goto: 60,
  },
  {
    id: 60,
    line: "Due to being the only one aware of who actually did it, the choice is mine to make. This case's outcome would depend on my final decision.<br/><br/>This is my final <i>dilemma</i>.",
    choice: true,
    ca: "(A) Disclose this information to the public",
    cb: "(B) Protect the reputation of the police",
    gotoa: 100,
    gotob: -1,
  },
];
