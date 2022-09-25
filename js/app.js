// IIFE - Immediately Invoked Function Expression 
(() => {
    //instantiate Singleton
    const app = Controller.getInstance();
    console.log("app started");
  })();