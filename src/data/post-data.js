import { number } from "prop-types";
import React, { useState } from "react"

export const initialPOBoxes = {
  Jane: {
    boxHolders: ['Eat', 'Sleep', 'Poop'],
    letters: [0],
    subject: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
}

const esp = {
  Eat: ["Bottle", "Breast"],
  Sleep: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  Poop: ["Wet", "Dirty"]
};

const espArr = (Object.values(esp));

export const initialLetters = {
  0: {
    content: 'Type notes ',
    date: "11/23/2021",
    read: false,
    sender: ['Wet', 'Dirty'],
    recipient: [espArr],
    subject: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  }
}


