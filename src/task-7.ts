function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    //   resolve(666); // error: Argument of type 'number' is not assignable to parameter of type 'string | PromiseLike<string>'.ts(2345)
    //   resolve(false); // error: Argument of type 'boolean' is not assignable to parameter of type 'string | PromiseLike<string>'.ts(2345)
    }, 1000);
  });
}

getMessage().then(result => console.log(result));

// verification with a wrong type
// getMessage().then(result => {
//     console.log(result);
//     console.log(result.toUpperCase()); // ok as string method
//     console.log(result.toFixed(2)); // error as toFixed() does not apply for string 
// });




// notes: 
// : Promise<string> (function return type) => function returns a Promise resolving into a string
// new Promise<string> (Promise constructor) => indicates TS that resolved value is a string (to remember: Promise<string> resolves with a string; Promise<number> resolves with a number; Promise<User> resolves with a User object; Promise<void> resolves with nothing (no return))