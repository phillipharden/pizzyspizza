class Controller {
    constructor() {
      console.log("Controller started");
      this.model = new Model();
      this.view = new View();
    }
    //--------------------------------------------------------------------------------------------------
    // Is there an instance variable attached to the class? If so, don't create. If not, then it's okay to create!
    static getInstance() {
      if (!Controller._instance) {
        Controller._instance = new Controller();
        return Controller._instance;
      } else {
        throw "Singleton has already been created!";
      }
      console.log("getInstance done");
    }
    //--------------------------------------------------------------------------------------------------
  } // End of Controller Class -------------------------------------------------------------------------