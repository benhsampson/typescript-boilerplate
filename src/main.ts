export default (async () => {
  const wait = (ms: number) =>
    new Promise((resolve) => {
      return setTimeout(() => resolve('Finished wait task'), ms);
    });
  const res = await wait(1000);
  console.log(res);
})();
