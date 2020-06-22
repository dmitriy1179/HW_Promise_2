//1
const wait = ms =>
new Promise(resolve =>
    setTimeout(() => resolve(`Promise`), ms)
)

wait(2000)

//2
async function funcExecTime () {
  let t0 = performance.now();
  await wait(2000);
  await wait(2000);
  await wait(2000);
  let t1 = performance.now();
  console.log("time =", t1 - t0, "ms")
}

funcExecTime()

//3
async function funcExecTime1 () {
  let t0 = performance.now();
  await Promise.all([wait(2000), wait(2000), wait(2000)])
  let t1 = performance.now();
  console.log("time1 =", t1 - t0, "ms")
}
funcExecTime1()



