const Invoice = require('./lib/Invoice');
const finRouter = require('./FinRouter');
async function a() {
  // 校验格式
  let inv1 = new Invoice();
  inv1.userid = "karonl";
  inv1.plusnum = 12.23;

  let inv2 = new Invoice();
  inv2.userid = "xiaobai";
  inv2.minus = 12.23;

  let inv3 = new Invoice();
  inv3.userid = "karonl";
  inv3.minus = 12.23;

  let begin = new Date().getTime();
  const res = await finRouter.run([{
    path: '#add1',
    invoices: [inv1]
  },{
    path: '#sub1',
    invoices: [inv2, inv3]
  }]);
  let end = new Date().getTime();
  console.log("耗时：" + (end - begin) / 1000 + "秒");
}
a();

// 标签，通过标签选人、通过标签选事件