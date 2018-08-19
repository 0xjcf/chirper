const logger = ({ getState }) => next => action => {
  console.group(action.type);
  console.log("The action is: ", action);
  const returnValue = next(action);
  console.log("The new state is: ", getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
