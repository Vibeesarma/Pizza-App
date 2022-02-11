
export function formatPrice(price){
    return price.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
    })
}




export const foodItems = [
    {
        name :"Chicken Pizza",
        img:"img/chicken.jpg",
        Section:"Pizza",
        price : 1
    },
    {
        name :"Cruist Pizza",
        img:"img/cruist.jpg",
        Section:"Pizza",
        price : 1
    
    },
    {
        name :"MushRoom Pizza",
        img:"img/mushroom.jpg",
        Section:"Pizza",
        price : 1
    },
    {
        name :"Pan Pizza",
        img:"/img/pan.jpg",
        Section:"Pizza",
        price : 1
    },
    {
        name :"Burger",
        img:"../img/burger.jpg",
        Section:"Pizza",
        price : 1.5
    },
    {
        name :"Veg Pizza",
        img:"img/vegchicken.jpg",
        Section:"Pizza",
        price : 1.2
    },
    {
        name :"Weird Pizza",
        img:"../img/weird.jpg",
        Section:"Pizza",
        price : 1.6
    }
  
]

export const foods =foodItems.reduce((res,food)=>{

    if (!res[food.Section]){
        res[food.Section]=[]
    }
    res[food.Section].push(food)
    return res;
},{})