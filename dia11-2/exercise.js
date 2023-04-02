// task.js

export const doTask1 = () => new Promise((resolve) => {
	window.setTimeout(() => resolve('Task 1'), 300);
  })
  
  export const doTask2 = () => new Promise((resolve) => {
	window.setTimeout(() => resolve('Task 2'), 300);
  })
  
  export const doTask3 = () => new Promise((resolve) => {
	window.setTimeout(() => resolve('Task 3'), 300);
  })

// exercise.js

import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];
  return new Promise(async (resolve) => {
    strings.push(await doTask1())
    strings.push(await doTask2())
    strings.push(await doTask3())
    resolve(strings)
  })
}
