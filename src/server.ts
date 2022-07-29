import app from './app';

app.listen(process.env.PORT as string, () => {
    console.log('server is listening');
})

// unhandled rejection, such as not throwing a catch request
process.on('unhandledRejection', (reason: Error | any) => {
    console.log(`Unhandled Rejection: ${reason.message || reason}`);
  
    throw new Error(reason.message || reason);
  });