const mongoose = require("mongoose");
const slugify = require("slugify");

// Kết nối đến MongoDB
mongoose.connect("mongodb://localhost:27017/F8_education", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Định nghĩa model
const Course = mongoose.model("Course", new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    slug: String,  // Thêm trường slug
}));

// Hàm cập nhật slug hàng loạt
async function updateSlugs() {
    try {
        const courses = await Course.find(); // Lấy tất cả dữ liệu từ DB

        for (let course of courses) {
            course.slug = slugify(course.name, { lower: true, strict: true }); // Tạo slug từ name
            await course.save(); // Lưu lại bản ghi đã cập nhật
            console.log(`✔ Đã cập nhật slug: ${course.slug}`);
        }

        console.log("✅ Cập nhật slug thành công!");
        mongoose.connection.close(); // Đóng kết nối sau khi cập nhật xong
    } catch (error) {
        console.error("❌ Lỗi khi cập nhật slug:", error);
    }
}

// Gọi hàm cập nhật slug
updateSlugs();
