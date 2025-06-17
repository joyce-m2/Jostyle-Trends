const App = () => {
    return (
        <div>
            <NavBar />
            <VideoSection />
            <MarqueeSection />
            <BestSellers />
            <AboutUs /> 
            <CustomerReviews />
            <Footer />
        </div>
    );
};

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <div className="logo-text">
                    <p>JoStyle</p>
                    <p>Trends</p>
                </div>
            </div>
            <div className="categories">
                <div className="dropdown">
                    <p>All Products</p>
                </div>
                <div className="dropdown">
                    <p class='top'>Clothing</p>
                    <div className="dropdown-content categories-specific">
                        <p>Topwear</p>
                        <p>Bottomwear</p>
                        <p>Co-ord Sets</p>
                    </div>
                </div>
                <div className="dropdown">
                    <p class='top1'>Bags</p>
                </div>
                <div className="dropdown">
                    <p class='top2'>Accessories</p>
                    <div className="dropdown-content categories-specific">
                        <p>Hats</p>
                        <p>Jewellery</p>
                        <p>Glasses</p>
                    </div>
                </div>
                <div className="dropdown">
                    <p class='top3'>Shoes</p>
                </div>

                <div className="dropdown">
                    <a href="#about-us">About Us</a>
                    </div>
                    <div className="dropdown">
                    <a href="#footer">Contact Us</a>
                </div>
            </div>
            <div className="icons">
                <img src="shopping-bag.png" alt="Shopping Bag" className="icon" />
            </div>
        </nav>
    );
};

const VideoSection = () => {
    return (
        <div className="video-container">
            <video src="video.mp4" autoPlay loop muted></video>
        </div>
    );
};


const MarqueeSection = () => {
    return (
        <div className="marquee-container">
            <div className="marquee">
                <p>•</p>
                <p>FREE SHIPPING on all orders above ₹999</p>
                <p>•</p>
                <p>FREE SHIPPING on all orders above ₹999</p>
                <p>•</p>
                <p>FREE SHIPPING on all orders above ₹999</p>
                <p>•</p>
                <p>FREE SHIPPING on all orders above ₹999</p>
                <p>•</p>
            </div>
        </div>
    );
};

const BestSellers = () => {
    return (
        <div className="bestsellers-section">
            <h2 className="bestsellers-heading">Best Sellers</h2>
            <div className="bestsellers">
                <div className="bestseller-row">
                    <div className="bestseller-wrapper">
                        <span className="number-badge">1</span>
                        <img src="7a.jpg" alt="Best Seller 1" loading="lazy" />
                        <div className="product-info">
                            <p className="product-name">Black Bodycon Dress Full Sleeves</p>
                            <p className="product-price">
                                <span className="mrp">MRP: ₹1750</span>
                                <span className="sale-price">Sale Price: ₹1279</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestseller-wrapper">
                        <span className="number-badge">2</span>
                        <img src="8a.jpg" alt="Best Seller 2" loading="lazy" />
                        <div className="product-info">
                            <p className="product-name">White Men's Formal Suit Set</p>
                            <p className="product-price">
                                <span className="mrp">MRP: ₹2999</span>
                                <span className="sale-price">Sale Price: ₹2599</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestseller-wrapper">
                        <span className="number-badge">3</span>
                        <img src="9a.jpg" alt="Best Seller 3" loading="lazy" />
                        <div className="product-info">
                            <p className="product-name">Men's Casual White Co-ord Set</p>
                            <p className="product-price">
                                <span className="mrp">MRP: ₹1865</span>
                                <span className="sale-price">Sale Price: ₹1529</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bestseller-row">
                    <div className="bestseller-wrapper">
                        <span className="number-badge">4</span>
                        <img src="11a.jpg" alt="Best Seller 4" loading="lazy" />
                        <div className="product-info">
                            <p className="product-name">Distressed Gray Chained Cargo Pants</p>
                            <p className="product-price">
                                <span className="mrp">MRP: ₹2124</span>
                                <span className="sale-price">Sale Price: ₹1779</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestseller-wrapper">
                        <span className="number-badge">5</span>
                        <img src="10a.jpg" alt="Best Seller 5" loading="lazy" />
                        <div className="product-info">
                            <p className="product-name">Casual Women's Sneakers</p>
                            <p className="product-price">
                                <span className="mrp">MRP: ₹1089</span>
                                <span className="sale-price">Sale Price: ₹899</span>
                            </p>
                        </div>
                    </div>
                    <div className="bestseller-wrapper">
                        <span className="number-badge">6</span>
                        <img src="12a.jpg" alt="Best Seller 6" loading="lazy" />
                        <div className="product-info">
                            <p className="product-name">Glossy Green Bodycon Dress for Women</p>
                            <p className="product-price">
                                <span className="mrp">MRP: ₹1679</span>
                                <span className="sale-price">Sale Price: ₹1489</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [fadeEffect, setFadeEffect] = React.useState(false);

    const reviews = [
        {
            image: "review1.jpg",
            name: "Alexa P.",
            rating: 5,
            text: "Amazing products! I loved the quality and the designs. Will definitely shop again here 🥰."
        },
        {
            image: "review2.jpg",
            name: "Abhay K.",
            rating: 4,
            text: "The product quality is top notch, and they have fast delivery. Highly recommend 👍!"
        },
        {
            image: "review3.jpg",
            name: "Rachel S.",
            rating: 5,
            text: "The winter collection is just perfect. Have been ordering from here for a long time 😍."
        }
    ];

    const changeReview = (newIndex) => {
        setFadeEffect(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setFadeEffect(false);
        }, 300);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % reviews.length;
        changeReview(newIndex);
    };

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        changeReview(newIndex);
    };

    return (
        <div className="customer-reviews-section">
            <h2 className="reviews-heading">Customer Reviews</h2>
            <div className="reviews-slider">
                <button className="arrow left-arrow" onClick={handlePrev}>
                    &#9664;
                </button>
                <div className={`review-card ${fadeEffect ? 'fade-out' : 'fade-in'}`}>
                    <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} className="review-image" />
                    <p className="review-author">{reviews[currentIndex].name}</p>
                    <div className="star-rating">
                        {Array(reviews[currentIndex].rating).fill("⭐")}
                    </div>
                    <p className="review-text">"{reviews[currentIndex].text}"</p>
                </div>
                <button className="arrow right-arrow" onClick={handleNext}>
                    &#9654;
                </button>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <p>Contact us: JoStyle Trends</p>
            <p>Whatsapp us: +91 2345678910</p>
            <p>123 Fashion Street, Style City, 56789</p>
            <p>&copy; 2024 JoStyle Trends</p>
        </footer>
    );
};

const AboutUs = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-us-section" id="about-us">
            <div className="about-us-content">
                <div className="about-us-text">
                    <h2>About Us</h2>
                    <p>
                        At JoStyle Trends, we pride ourselves on providing the latest fashion trends with impeccable quality and style.
                        Over the years, we’ve grown from a small boutique into a fashion-forward brand loved by customers all over the country.
                        Our mission is to deliver chic and affordable fashion that reflects your unique personality.
                    </p>
                </div>
                <div className="about-us-images">
                    <img src="about1.jpg" alt="About Us 1" className={`about-us-img ${currentIndex === 0 ? 'active' : ''}`} />
                    <img src="about2.jpg" alt="About Us 2" className={`about-us-img ${currentIndex === 1 ? 'active' : ''}`} />
                    <img src="about3.jpg" alt="About Us 3" className={`about-us-img ${currentIndex === 2 ? 'active' : ''}`} />
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
