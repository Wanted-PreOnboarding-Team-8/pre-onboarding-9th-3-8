export const transObjToArr = (action: any) => {
  return Object.entries(action.payload.response).map((ele: [string, any]) => {
    return {
      tid: ele[0],
      ...ele[1],
    };
  });
};
