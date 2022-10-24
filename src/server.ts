import server from "./app";

server.listen(process.env.PORT || 9000, () => {
  console.log("server is listening");
});

// unhandled rejection, such as not throwing a catch function to a promsie
process.on("unhandledRejection", (reason: Error | any) => {
  console.log(`Unhandled Rejection: ${reason.message || reason}`);

  throw new Error(reason.message || reason);
});

process.on("uncaughtException", (error: Error) => {
  console.log(`Uncaught Exception: ${error.message}`, error);
});
