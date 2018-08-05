'use strict'
// 金融模块，控制钱包的充值与花费
const Loop = require("./lib/Loop");
const finRouter = new Loop();

finRouter.begin(async (ctx, next) => {
  console.log("begin");
  await next();
});

finRouter.commit(ctx => {
  console.log("commit");
});

finRouter.rollback((err, ctx) => {
  console.log("rollback");
});


// 测试充值
finRouter.use("#add1", async (ctx, up) => {
  console.log('---run---1', up);
  for (let invo of ctx.req.invoices) { // 当前上下文
    console.log('税收:' + "#add1: ",invo);
  }
  return 'xcxcxc1';
});

// 测试充值
finRouter.use("#add1", async ctx => {
  console.log('---run---2');
  for (let invo of ctx.req.invoices) { // 当前上下文
    console.log('充值:' + "#add1: ",invo);
  }
  return 'xcxcxc2';
});

// 测试充值
finRouter.use("#sub1", async (ctx, up) => {
  console.log('---run---3', up);
  for (let invo of ctx.req.invoices) { // 当前上下文
    console.log('扣款:' + "#sub1: ",invo);
  }
  return 'xcxcxc2';
});

module.exports = finRouter;
