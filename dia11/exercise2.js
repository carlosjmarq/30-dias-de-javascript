// ! codigo antes xd
/*
import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
}
*/

// ! tasks

export const doTask1 = () => new Promise ((resolve, reject) => {
	window.setTimeout(() => resolve('Task 1'), 300);
  })
  
export const doTask2 = () => new Promise((resolve, reject) => {
  window.setTimeout(() => resolve('Task 2'), 300);
})
  
export const doTask3 = () => new Promise((resolve, reject) => {
  window.setTimeout(() => resolve('Task 3'), 300);
})
  
// ! codigo resuelto

import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  return new Promise((resolve) => {
    const task1 = doTask1()
    const task2 = doTask2()
    const task3 = doTask3()
    Promise.all([task1, task2, task3])
      .then(result => resolve(result))
  })
}
