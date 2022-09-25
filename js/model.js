// Model - Manages the data of an application
class Model {
    constructor() {
      console.log("Model created");
    }
    //--------------------------------------------------------------------------------------------------
    // static fetchData() {
    //   // console.log("static fetchData() started");
    //   const api = "https://cold-sprinkle-mechanic.glitch.me/api",
    //     access = "?accessToken=5b1064585f4ab8706d275f90";
  
    //   fetch(api + "/lists" + access)
    //     // Error handler
    //     .then((response) => {
    //       if (response.ok) {
    //         // console.log("Fetch GET successful!");
    //       } else {
    //         // console.log("Fetch GET unsuccessful!");
    //       }
    //       return response;
    //     })
    //     .catch((error) => console.log(error))
    //     .then((response) => response.json())
    //     .then((data) => View.displayPage(data));
  
    //   // console.log("static fetchData() finished");
    // }
    //--------------------------------------------------------------------------------------------------
    // add the task to the API
    // static addTask(listId) {
    //   // console.log("static addTask() started");
    //   const title = document.querySelector("#title").value,
    //     description = document.querySelector("#description").value,
    //     dueDate = document.querySelector("#dueDate").value;
  
    //   //  Data staged for sending
    //   let dataToSendToServer = {
    //     title: title,
    //     listId: listId,
    //     description: description,
    //     dueDate: dueDate,
    //   };
  
    //   const option = {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(dataToSendToServer),
    //   };
  
    //   const api = "https://cold-sprinkle-mechanic.glitch.me/api";
    //   const access = "?accessToken=5b1064585f4ab8706d275f90";
  
    //   fetch(api + "/items" + access, option)
    //     .then((response) => {
    //       if (response.ok) {
    //         // console.log("Add task successful!");
    //       } else {
    //         // console.log("Add task unsuccessful!");
    //       }
    //       return response;
    //     })
    //     .then((response) => response.json())
    //     .then((data) =>
    //       View.displayNewTask(title, description, dueDate, listId, data.id)
    //     );
    //   // console.log("static addTask() done");
    // } // end of addTask(currentListId)
    //--------------------------------------------------------------------------------------------------
    // static deleteTask(e, taskId) {
    //   const api = "https://cold-sprinkle-mechanic.glitch.me/api";
    //   const access = "?accessToken=5b1064585f4ab8706d275f90";
  
    //   const option = {
    //     method: "DELETE",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   };
  
    //   fetch(api + "/items/" + taskId + access, option)
    //     .then((response) => {
    //       if (response.ok) {
    //         // console.log("Delete task successful!");
    //       } else {
    //         // console.log("Delete task unsuccessful!");
    //       }
    //       return response;
    //     })
    //     // .then((response) => console.log(response));
  
    //   let deleteTask = document.querySelector('[data-task-id="' + taskId + '"]');
    //   deleteTask.remove();
    //   // console.log("static deleteTask(taskId) done");
    // }
    //--------------------------------------------------------------------------------------------------
  } // end of Model class ------------------------------------------------------------------------------