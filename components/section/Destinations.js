"use client"
import React from "react"

const Destinations = () => {

   const data = [
    {
        name: "UK",
        desc: "Step into a legacy of excellence where centuries-old universities meet modern innovation. Studying in the UK isn’t just about earning a degree—it’s about experiencing a culture that has shaped thinkers, leaders, and creators for generations. Walk through historic campuses, engage with diverse minds from across the world, and build a future that carries global recognition and prestige.",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
    },
    {
        name: "USA",
        desc: "Chase limitless possibilities in a country where ambition meets opportunity. The USA offers more than education—it offers freedom to explore, innovate, and redefine your path. With world-class universities, flexible learning, and a culture that celebrates individuality, you don’t just study here—you discover who you truly are and what you’re capable of becoming.",
        image: "https://www.usnews.com/object/image/0000016f-8c62-d408-a9ef-9ffe94a60000/200115bcusaprofile-editorial.usa.profile.jpg"
    },
    {
        name: "Canada",
        desc: "Find the perfect balance between quality education and a peaceful lifestyle. Canada welcomes you with open arms, offering a safe, inclusive environment where your dreams can grow without limits. Surrounded by breathtaking landscapes and supportive communities, your journey here becomes not just successful—but meaningful and fulfilling.",
        image: "https://img.freepik.com/premium-photo/national-flag-canada-with-mountain-forest-jasper-national-park-summer-landscape-lac-beauver_363815-4351.jpg"
    },
    {
        name: "Germany",
        desc: "Build your future where innovation meets precision. Germany stands as a powerhouse of technology and research, offering world-class education with minimal tuition costs. Here, you don’t just learn theories—you gain real-world skills that prepare you to lead in global industries, all while experiencing a culture rooted in discipline and excellence.",
        image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f"
    },
    {
        name: "Australia",
        desc: "Experience education in a land where opportunity meets lifestyle. Australia offers top-ranked universities combined with a vibrant, welcoming environment that makes every day feel inspiring. From sunny beaches to dynamic cities, your academic journey here is enriched with experiences that shape both your career and your life.",
        image: "https://kashmirobserver.net/wp-content/uploads/2025/12/australia.jpg"
    }
]

    return (
        <div className="relative">

            {data.map((item, i) => (
                <div
                    key={i}
                    className="sticky top-0 h-screen flex items-center justify-center"
                >
                    <div
                        className="w-full h-full flex flex-col items-center justify-center text-white relative"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Content */}
                        <div className="relative z-10 text-center px-6 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-bold">
                                {item.name}
                            </h2>

                            <p className="mt-4 text-xs md:text-sm opacity-80">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                </div>
            ))}

        </div>
    )
}

export default Destinations