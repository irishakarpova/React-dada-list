

export default (rangeArticles = Array.from({ length: 2 }), action ) =>{
  const {type} = action

  switch (type) {

    default:
      return { rangeArticles }
  }
}
