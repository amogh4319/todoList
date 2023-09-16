const {username,password}=process.env;
export const connectionStr=`mongodb+srv://${username}:${password}@cluster0.zgknsuf.mongodb.net/tododatabase?retryWrites=true&w=majority`