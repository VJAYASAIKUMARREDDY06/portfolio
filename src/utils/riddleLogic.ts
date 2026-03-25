export const riddles = [
  {
    text: "I am not a pirate's map, yet I guide recruiters to the greatest treasure of all—me. What am I?",
    explanation: "A resume is your treasure map, leading directly to your value as a candidate.",
  },
  {
    text: "I am no wizard's grimoire, yet every page carries a spell of my journey. What am I?",
    explanation: "A resume is like a grimoire — filled with pages of experience and skills that define your journey.",
  },
];

export function getRandomRiddle() {
  return riddles[Math.floor(Math.random() * riddles.length)];
}

export function revealRandomLetter(revealed: string[]): string[] {
  const answer = "RESUME";
  const newRevealed = [...revealed];
  const hiddenIndices = newRevealed
    .map((c, i) => (c === "_" ? i : null))
    .filter((i): i is number => i !== null);

  if (hiddenIndices.length > 0) {
    const randomIndex = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
    newRevealed[randomIndex] = answer[randomIndex];
  }
  return newRevealed;
}

export const hintLetter = `<p style="margin: 0 0 8px 0;"><strong style="color: #f093fb;">R</strong>ecently, Luna wandered through Hogwarts' quiet halls,</p>
<p style="margin: 0 0 8px 0;"><strong style="color: #f093fb;">E</strong>very nargle and Wrackspurt she quietly observed,</p>
<p style="margin: 0 0 8px 0;"><strong style="color: #f093fb;">S</strong>he sketched magical creatures in her diary,</p>
<p style="margin: 0 0 8px 0;"><strong style="color: #f093fb;">U</strong>nder the moonlight, she hummed soft, whimsical tunes,</p>
<p style="margin: 0 0 8px 0;"><strong style="color: #f093fb;">M</strong>ysterious radishes floated gently around her head,</p>
<p style="margin: 0 0 15px 0;"><strong style="color: #f093fb;">E</strong>very student paused to smile at Luna's curious world.</p>`;
