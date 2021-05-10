//Action Creators

export const IDS_DEV_PAGE_ACTION = pageDetails => {
  return {
    type: "IDS_DEV",
    payload: pageDetails,
  }
}

export const IDS_PROD_PAGE_ACTION = pageDetails => {
  return {
    type: "IDS_PROD",
    payload: pageDetails,
  }
}
export const IDS_SYSTEST_PAGE_ACTION = pageDetails => {
  return {
    type: "IDS_SYSTEST",
    payload: pageDetails,
  }
}
