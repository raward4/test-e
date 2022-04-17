

export const initialPOBoxes = {
  Jane: {
    boxHolders: ['Eat', 'Sleep', 'Poop'],
    letters: [0],
  },
}

export const initialLetters = {
  0: {
    content: 'Type notes ',
    date: "11/23/2021",
    read: false,
    sender: ['Wet', 'Dirty'],
    recipient: [initialPOBoxes.Jane.boxHolders],
    subject: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  }
}


