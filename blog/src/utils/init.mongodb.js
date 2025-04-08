const database = 'F8_education';
const collection = 'cources';

use(database);
// db.createCollection(collection);

db.getCollection('courses').insertMany([
    {
        name: "Lập trình JavaScript cơ bản",
        description: "Khóa học dành cho người mới bắt đầu với JavaScript.",
        image: "https://img.youtube.com/vi/PkZNo7MFNFg/sddefault.jpg",
        videoID: "PkZNo7MFNFg",
        level: "dễ",
        slug: "lap-trinh-javascript-co-ban",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "ReactJS từ cơ bản đến nâng cao",
        description: "Khóa học chi tiết về ReactJS, giúp bạn xây dựng ứng dụng thực tế.",
        image: "https://img.youtube.com/vi/Dorf8i6lCuk/sddefault.jpg",
        videoID: "Dorf8i6lCuk",
        level: "trung bình",
        slug: "reactjs-co-ban-den-nang-cao",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Node.js và Express",
        description: "Học cách xây dựng backend với Node.js và Express.",
        image: "https://img.youtube.com/vi/Oe421EPjeBE/sddefault.jpg",
        videoID: "Oe421EPjeBE",
        level: "trung bình",
        slug: "nodejs-va-express",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "MongoDB cho người mới bắt đầu",
        description: "Tìm hiểu cách sử dụng MongoDB để lưu trữ dữ liệu.",
        image: "https://img.youtube.com/vi/oSIv-E60NiU/sddefault.jpg",
        videoID: "oSIv-E60NiU",
        level: "dễ",
        slug: "mongodb-cho-nguoi-moi",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Lập trình Fullstack với MERN Stack",
        description: "Khóa học chuyên sâu về MERN Stack (MongoDB, Express, React, Node).",
        image: "https://img.youtube.com/vi/7CqJlxBYj-M/sddefault.jpg",
        videoID: "7CqJlxBYj-M",
        level: "khó",
        slug: "fullstack-mern-stack",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Data Structures & Algorithms",
        description: "Học về cấu trúc dữ liệu và thuật toán để tối ưu hóa hiệu suất ứng dụng.",
        image: "https://img.youtube.com/vi/8hly31xKli0/sddefault.jpg",
        videoID: "8hly31xKli0",
        level: "khó",
        slug: "data-structures-algorithms",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Python cho người mới bắt đầu",
        description: "Học Python từ cơ bản đến nâng cao với các bài tập thực hành.",
        image: "https://img.youtube.com/vi/rfscVS0vtbw/sddefault.jpg",
        videoID: "rfscVS0vtbw",
        level: "dễ",
        slug: "python-cho-nguoi-moi",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Machine Learning cơ bản",
        description: "Giới thiệu về Machine Learning và các thuật toán phổ biến.",
        image: "https://img.youtube.com/vi/GwIo3gDZCVQ/sddefault.jpg",
        videoID: "GwIo3gDZCVQ",
        level: "trung bình",
        slug: "machine-learning-co-ban",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Kubernetes và Docker",
        description: "Học cách triển khai và quản lý ứng dụng với Kubernetes và Docker.",
        image: "https://img.youtube.com/vi/X48VuDVv0do/sddefault.jpg",
        videoID: "X48VuDVv0do",
        level: "khó",
        slug: "kubernetes-va-docker",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Phát triển game với Unity",
        description: "Lập trình game 2D và 3D bằng Unity từ cơ bản đến nâng cao.",
        image: "https://img.youtube.com/vi/5-X-Ebh1kYA/sddefault.jpg",
        videoID: "5-X-Ebh1kYA",
        level: "trung bình",
        slug: "phat-trien-game-voi-unity",
        createdAt: new Date(),
        updatedAt: new Date()
    }
])
