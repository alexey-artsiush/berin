export const getBasketGoods = () => {
  const data = JSON.parse(localStorage.getItem("bag"))
  return data
}
