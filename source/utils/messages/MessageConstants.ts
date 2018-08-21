
const Message = {
  Error: {
    Interpreter: {
      InvalidCommand: "Invalid Command"
    },
    IOStream: {
      WriteError: "An error has occurred during saving data.",
      ReadError: "An error has occurred during reading data.",
    },
    Data: {
      NotLoaded: "Data not loaded."
    },
    Task: {
      FailedToCreate: "Failed to create task."
    },
    Event: {
      FailedToCreate: "Failed to create event."
    }
  },
  Info: {
    ListTaskCommand: {
      NoTasks: "There are no tasks to list."
    },
    ListHistoryCommand: {
      NoTasks: "There are no tasks to list."
    }
  }
};
export default Message;