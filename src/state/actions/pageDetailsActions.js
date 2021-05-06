//Action Creators

export const selectPageDetail = pageDetails => {
  return {
    type: "DETAIL_SELECTED",
    payload: pageDetails,
  }
}
