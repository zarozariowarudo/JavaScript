let obj = new Object();
// obj = {};
obj.name = "Olena";
obj.age = 15;
obj.abvgd = "abvgd";

delete obj.abvgd;

let product = {
    name: "Iphone"
    ,price: 15999
    ,memory: 512
    ,isLocked: false
    ,application: ["Chrome", "Youtube", "Opera", "Instagram"]
    ,owner: {
        name: "Oleg"
        ,age: "30"
    }
};

console.log(product);
console.log(`Name product: ${product.name}`);
console.log(`Price product: ${product.price}`);
console.log(`Owner of product: ${product.owner.name}`);

