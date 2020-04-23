setTimeout(() => {
    console.log("Hello World")
}, 0);

// Stack --> main --> top_of_stack
// Stack --> main --> setTimeout --> top_of_stack
// Stack --> main --> top_of_stack
// Stack --> # --> top_of_stack  // Empty Stack
// Stack --> function() --> top_of_stack // due to event loop
// Stack --> # --> top_of_stack