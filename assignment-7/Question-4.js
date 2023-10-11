class RateLimiter {
    constructor(limit) {
      this.limit = limit;
      this.queue = [];
      this.inProgress = 0;
    }
  
    async addToQueue(fn) {
      return new Promise((resolve, reject) => {
        const execute = async () => {
          this.inProgress++;
          try {
            const result = await fn();
            resolve(result);
          } catch (error) {
            reject(error);
          } finally {
            this.inProgress--;
            this.processQueue();
          }
        };
  
        if (this.inProgress < this.limit) {
          execute();
        } else {
          this.queue.push(execute);
        }
      });
    }
  
    processQueue() {
      if (this.inProgress < this.limit && this.queue.length > 0) {
        const nextTask = this.queue.shift();
        nextTask();
      }
    }
  }
  
  // Example usage:
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const rateLimiter = new RateLimiter(10); // Allow 2 concurrent requests
  
  const makeRequest = async (requestNumber) => {
    console.log(`Request ${requestNumber} started`);
    await delay(1000); // Simulate async operation
    console.log(`Request ${requestNumber} completed`);
  };
  
  // Example requests
  rateLimiter.addToQueue(() => makeRequest(1));
  rateLimiter.addToQueue(() => makeRequest(2));
  rateLimiter.addToQueue(() => makeRequest(3));
  rateLimiter.addToQueue(() => makeRequest(4));
  rateLimiter.addToQueue(() => makeRequest(5));
  rateLimiter.addToQueue(() => makeRequest(50));
  

  /*
  Certainly! Let's break down the code step by step:

RateLimiter Class:

The class is designed to limit the number of concurrent requests using a simple queue mechanism.
It has properties limit (the maximum number of concurrent requests allowed), queue (an array to store functions awaiting execution), and inProgress (the count of currently executing functions).
addToQueue Method:

This method takes a function (fn) as a parameter, representing the asynchronous operation you want to limit.
It returns a promise that resolves when the operation is completed.
If there's room for more concurrent requests (i.e., inProgress is less than limit), the function is executed immediately.
If the limit is reached, the function is added to the queue.
The promise resolves or rejects based on the completion or failure of the provided function.
processQueue Method:

This method is responsible for checking the queue and executing functions if there is space for more concurrent requests.
It is called whenever a request completes to see if there are more functions in the queue that can be executed.
Example Usage:

The example usage section demonstrates creating a RateLimiter instance with a limit of 2 concurrent requests.
The makeRequest function simulates an asynchronous operation with a delay.
Requests are made using the addToQueue method of the RateLimiter instance.
The example demonstrates that only two requests are executed concurrently, and the others are queued until space is available.
This rate limiter is a basic example, and in a real-world scenario, you might need to handle more cases, such as timeouts, error handling, and potentially a more sophisticated queuing strategy depending on your specific requirements. 
  */