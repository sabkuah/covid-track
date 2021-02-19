import React from "react";

const DataContext = React.createContext({}); //create context

export const DataProvider = DataContext.Provider;
export default DataContext;
