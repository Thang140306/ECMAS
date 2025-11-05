//bai1 
function calculateBMI(weight, height) {

    const bmi = weight / (height * height);


    let category = "";
    if (bmi < 18.5) {
        category = "Thiếu cân";
    } else if (bmi < 25) {
        category = "Bình thường";
    } else if (bmi < 30) {
        category = "Thừa cân";
    } else {
        category = "Béo phì";
    }


    return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
}
console.log(calculateBMI(70, 1.75));

//bai2 
function createBook(title, author, year, price) {

    const book = {
        title,
        author,
        year,
        price,


        getBookInfo() {
            return `📖 ${this.title} - Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price}đ`;
        },


        calculateDiscount(discount) {
            const finalPrice = this.price - (this.price * discount) / 100;
            return `Giá sau khi giảm ${discount}%: ${finalPrice}đ`;
        },


        ["isNewBook"]: year >= 2022
    };

    return book;
}


const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
console.log(`Sách mới: ${book.isNewBook ? "Có" : "Không"}`);
