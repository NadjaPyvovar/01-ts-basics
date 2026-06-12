function logStatus(status: "loading" | "success" | "error"): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");

// logStatus("denied") // Argument of type '"denied"' is not assignable to parameter of type '"loading" | "success" | "error"'.ts(2345)

// alternative to Union Type operator => using a type alias:
// type Status = "loading" | "success" | "error";
// function logStatus(status: Status): void {
//     if (status === "loading") {
//     console.log("Loading...");
//   } else if (status === "success") {
//     console.log("Success!");
//   } else if (status === "error") {
//     console.log("Something went wrong");
//   }
// }