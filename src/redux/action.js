
export const onJustReducerUpdate = (payload, reducerType) => {
  return ({ type: reducerType, payload })
}