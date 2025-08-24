const {John,Peter}=require("./names");
const sayhi=require("./sayhello");
console.log(require("./alternative"));
require("./function");
sayhi(John);
sayhi("Susan");
sayhi(Peter);