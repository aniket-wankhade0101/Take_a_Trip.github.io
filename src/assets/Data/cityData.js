const cityData = [
    {
        id :1,
        title: "Goa",
        cover: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.",
       key : "Beach Destination",
        price: 599,
        rating: 4.3
    },

    {
        id: 2,
        title: "Lakshadweep",
        cover: "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600",
        text: "Lakshadweep is a much loved beach destination. You can expect summer heat and the temperature rising upto 32°C. Lakshadweep is also very popular among relaxation-seekers.",
        key : "Beach Destination",
        price: 1999,
        rating: 4.5
    },

    {
        id: 3,
        title: "Gokarna",
        cover: "https://images.news9live.com/wp-content/uploads/2023/09/cropped-OM-beach-in-GokarnaKarnataka.jpg?w=900&enlarge=true",
        text: "Take your beach love to Gokarna. You can expect extremely hot and humid weather. Also, don’t miss the pilgrimage sites at Gokarna.",
        key : "Beach Destination",
        price: 499,
        rating: 4.3
    },

    {
        id: 4,
        title: "Pondicherry",
        cover: "https://img.veenaworld.com/wp-content/uploads/2021/06/Best-Places-to-Visit-in-Pondicherry-scaled.jpg",
        text: "If you are a beach lover, you must head to Puducherry. You can expect the city is at its hottest during this time. Puducherry is a hot favourite among foodies too.",
        key : "Beach Destination",
        price: 399,
        rating: 4.3
    },

    {
        id: 5,
        title: "Alibagh",
        cover: "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Alibaug-1.jpg",
        text: "Alibagh is extremely popular for its beautiful beaches. You can expect hot And Humid Weather. The Temperature Tends To Go Very High. You can also unwind amidst the tranquil surroundings of Alibagh.",
        key : "Beach Destination",
        price: 799,
        rating: 4.3
    },

    {
        id: 6,
        title: "Kasol",
        cover: "https://images.pexels.com/photos/7846665/pexels-photo-7846665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Enjoy a memorable mountain vacation at Kasol. You will love trekking, camping, festivals and parties. Kasol is also very popular among relaxation-seekers.",
       key: "Hill & Mountains",
        price: 999,
        rating: 4.3
    },

    {
        id: 7,
        title: "Shimla",
        cover: "https://images.pexels.com/photos/14572763/pexels-photo-14572763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Let the mighty mountains of Shimla raise your spirits! You will love sightseeing, paragliding, hiking, camping, and trekking. Shimla is also an ideal destination for a relaxing break.",
        key: "Hill & Mountains",
        price: 1299,
        rating: 4.3
    },

    {
        id: 8,
        title: "Pahalgam",
        cover: "https://images.pexels.com/photos/6649781/pexels-photo-6649781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "For the best mountain views, head to Pahalgam. You will love soaking in lush green surroundings and exploring the various trekking trails. Pahalgam is also an ideal destination for a relaxing break.",
        key: "Hill & Mountains",
        price: 1199,
        rating: 4.3
    },

    {
        id: 9,
        title: "Leh",
        cover: "https://images.pexels.com/photos/570026/pexels-photo-570026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Prepare to be wooed by the mesmerizing mountains of Leh. You will love sightseeing and the surreal vistas of snow-capped mountains. Leh is also known for its unique wildlife.",
        key: "Hill & Mountains",
        price: 2999,
        rating: 4.3
    },

    {
        id: 10,
        title: "Gulmarg",
        cover: "https://images.pexels.com/photos/10679346/pexels-photo-10679346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "If mountains make you feel alive, then head to Gulmarg. You can expect the temperatures drop down to below freezing. Gulmarg is also very popular among relaxation-seekers.",
        key: "Hill & Mountains",
        price: 1599,
        rating: 4.3
    },

    {
        id: 11,
        title: "Leh",
        cover: "https://images.pexels.com/photos/570026/pexels-photo-570026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Prepare to be wooed by the mesmerizing mountains of Leh. You will love sightseeing and the surreal vistas of snow-capped mountains. Leh is also known for its unique wildlife.",
       key : "Adventure Spots",
        price: 2999,
        rating: 4.3
    },

    {
        id: 12,
        title: "Kasol",
        cover: "https://images.pexels.com/photos/7846665/pexels-photo-7846665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Enjoy a memorable mountain vacation at Kasol. You will love trekking, camping, festivals and parties. Kasol is also very popular among relaxation-seekers.",
        key : "Adventure Spots",
        price: 999,
        rating: 4.3
    },

    {
        id: 13,
        title: "Gulmarg",
        cover: "https://images.pexels.com/photos/10679346/pexels-photo-10679346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "If mountains make you feel alive, then head to Gulmarg. You can expect the temperatures drop down to below freezing. Gulmarg is also very popular among relaxation-seekers.",
        key : "Adventure Spots",
        price: 1599,
        rating: 4.3
    },

    {
        id: 14,
        title: "Kutch",
        cover: "https://images.pexels.com/photos/7023880/pexels-photo-7023880.jpeg",
        text: "Enjoy an adventure-packed vacay at Rann of Kutch. You can expect extremely hot and humid days with temperatures soaring as high as 48°C. You can also spot wildlife at Rann of Kutch.",
        key : "Adventure Spots",
        price: 1299,
        rating: 4.3
    },

    {
        id: 15,
        title: "Goa",
        cover: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.",
        key : "Adventure Spots",
        price: 599,
        rating: 4.3
    },

    {
        id: 16,
        title: "Lakshadweep",
        cover: "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600",
        text: "Lakshadweep is a much loved beach destination. You can expect summer heat and the temperature rising upto 32°C. Lakshadweep is also very popular among relaxation-seekers.",
       key : "Place to Relax",
        price: 1999,
        rating: 4.3
    },

    {
        id: 17,
        title: "Kasauli",
        cover: "https://hblimg.mmtcdn.com/content/hubble/img/kasauli/mmt/destination/t_trp/m_destination-kasauli-landscape_l_400_640.jpg?im=Resize=(576,324)",
        text: "Surrender to the tranquillity of Kasauli. You can expect chilly but enjoyable weather. The mountain views from Kasauli are an added bonus.",
        key : "Place to Relax",
        price: 1399,
        rating: 4.3
    },

    {
        id: 18,
        title: "Kovalam",
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/01KovalamBeach%26Kerala.jpg/308px-01KovalamBeach%26Kerala.jpg",
        text: "Enjoy bliss in the midst of nature at the splendid Kovalam. You will love water sports and beach activities. The beaches at Kovalam are also worth exploring.",
        key : "Place to Relax",
        price: 899,
        rating: 4.3
    },

    {
        id: 19,
        title: "Ranikhet",
        cover: "https://rishikeshdaytour.com/blog/wp-content/uploads/2019/10/Ranikhet-A-Serene-Town-In-The-Lap-Of-Nature.jpg",
        text: "Enjoy a blissful break at serene Ranikhet. You will love breathtaking landscapes and nature’s full bloom during spring. Don’t forget to explore the beautiful mountains around Ranikhet.",
        key : "Place to Relax",
        price: 799,
        rating: 4.3
    },

    {
        id: 20,
        title: "Alleppey",
        cover: "https://alleppeyhouseboat.in/wp-content/uploads/2019/02/houseboat-Copy.jpg",
        text: "If relaxation is what you’re after, head to Alleppey. You will love exploring the backwaters and houseboat stays. Don’t forget to spend some time at the beaches of Alleppey.",
        key : "Place to Relax",
        price: 1199,
        rating: 4.3
    },

    {
        id: 21,
        title: "Bali",
        cover: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "If you love beaches, then Bali is the place to go! You can expect frequent heavy rainfalls with high humidity levels. The local cuisines at Bali are worth trying out too.",
        key: "International ",
        price: 1999,
        rating: 4.3
    },

    {
        id: 22,
        title: "Paro",
        cover: "https://www.andbeyond.com/wp-content/uploads/sites/5/Bhutan-Paro-Tigers-Nest-6-Website-1920x1080-fill-gravityauto.jpg",
        text: "Paro is an ideal destination for heritage buffs. You will love the festivals and lush valley views. You will also enjoy exploring the mountains at Paro.",
        key: "International ",
        price:2199,
        rating: 4.3
    },

    {
        id: 23,
        title: "Istanbul",
        cover: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg",
        text: "If you love history and heritage, Istanbul is the perfect getaway. You can expect low temperatures with windy weather. Istanbul is a hot favourite among foodies too.",
        key: "International ",
        price: 2499,
        rating: 4.3
    },

    {
        id: 24,
        title: "Abu Dhabi",
        cover: "https://visitabudhabi.ae/-/media/project/vad/homepage/november-2023/regions-map/admap-dsk-1-19-12.jpg",
        text: "Exciting adventures await you at Abu Dhabi. You will love shopping jackpots and perfect conditions for sightseeing the attractions or relaxing at the seashore. Also, don’t miss the heritage structures at Abu Dhabi.",
        key: "International ",
        price: 2699,
        rating: 4.3
    },

    {
        id: 25,
        title: "Krabi",
        cover: "https://images.pexels.com/photos/1154193/pexels-photo-1154193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "If you love watching the ocean, then Krabi is home to gorgeous beaches. You will love the beaches and water sports. Krabi is also very popular among relaxation-seekers.",
        key: "International ",
        price: 2199,
        rating: 4.3
    },


]

export default cityData;