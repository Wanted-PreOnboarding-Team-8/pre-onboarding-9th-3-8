export const transObjToArr = (state: any, action: any) => {
  const transform = Object.entries(action.payload.response).map(
    (ele: [string, any]) => {
      return {
        tid: ele[0],
        ...ele[1],
      };
    },
  );
  return {
    ...state,
    response: transform,
  };
};
