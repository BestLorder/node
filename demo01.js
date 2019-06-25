// function getSomething(){
//     return 'something'
// }
// async function testAsync(){
//     return 'Hello async'
// }
// async function test(){
//     const v1=await getSomething();
//     const v2=await testAsync();
//     console.log(v1,v2)
// }
// test();

// function getSomething() {
//   return 'something'
// }

// function testAsync() {
//   return 'Hello async'
// }

// async function test() {
//   const v1 = getSomething();
//   const v2 = testAsync();
//   console.log(v1, v2)
// }
// test();
// console.log('虽然在后面，但是我先执行');
async function timeout() {
  return 'hello world'
}
timeout().then(result => {
  console.log(result);
})
console.log('虽然在后面，但是我先执行');