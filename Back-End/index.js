const app = require("./app");

require("./models/index.js");
require("./models/user.model").sync();
require("./models/request.model").sync();
require("./models/product.model").sync();
require("./models/order.model").sync();

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("Server started...");
});
