export const STORYLINE = [
  {
    line: "June 28, 1993: The mayor tells me that 5 of my men are called in. They have not worked together before, nor are they well acquainted, but these select few were handpicked by the mayor to work on a drug runner case to form a task force led by not me, but the mayor. I was shocked. Usually, as the major of the police department, I led the task forces, but it is the mayor afterall, so who was I to say anything?",
    choice: false,
    goto: 1,
  },
  {
    line: "June 29, 1993: In the morning, I hand the deputy a walkie talkie, telling him to update me about the task on hand. While they investigate the drug case, I stand on guard waiting for updates. After a few hours, the walkie talkie suddenly beeps, transmitting the deputy’s voice. “Major”, the deputy says, updating me on where they investigated and any leads that have been made. After a few minutes, he says, “But the real reason I am updating you now is because...”",
    choice: false,
    goto: 2,
  },
  {
    line: "“We found a dead body near the University. What should we do?”",
    choice: true,
    ca: "(A) Tell the force to proceed with their initial task",
    cb: "(B) Tell them to investigate the course",
    gotoa: 3,
    gotob: 0,
  },
  {
    line: 'I instructed the force to proceed with their initial task, knowing the mayor will be unhappy if they leave it untouched. However, the walkie talkie beeps again a few minutes later. The voice of the deputy comes once again. “Sir, we just received a report that an unidentified body has been found near the first body."',
    choice: false,
    goto: 0,
  },
];
