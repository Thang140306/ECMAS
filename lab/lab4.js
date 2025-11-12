// Array Destructuring
function getFirstLast([first, ...rest]) {
    const last = rest.pop();
    return [first, last];
}

console.log(getFirstLast([1, 2, 3, 4]));

function swapElements(arr) {
    const newArr = [...arr];
    [newArr[1], newArr[3]] = [newArr[3], newArr[1]];
    return newArr;
}

console.log(swapElements([1, 2, 3, 4, 5]));
//Object Destructuring
const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};
function getUserInfo(user) {

    const {
        personalInfo: {
            name,
            contact: { email },
        },
    } = user;

    return { name, email };
}

console.log(getUserInfo(user));

function createProduct({ name, price, category = "general", inStock = true }) {
    return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);

//Promises
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => console.log("2 seconds passed"));

function fetchMultipleData(urls) {
    return Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
    console.log(users)
);

//Async/Await
async function processOrder(orderId) {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);
    return { order, user, products };
}

async function safeApiCall(apiFunction, ...args) {
    try {
        const result = await apiFunction(...args);
        return { data: result, error: null };
    } catch (error) {
        return { data: null, error };
    }
}



