const pageLoader = document.getElementById('page-loader');
const topProgress = document.getElementById('topProgress');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const heroControls = document.getElementById('heroControls');
const menuFilters = document.getElementById('menuFilters');
const menuGrid = document.getElementById('menuGrid');
const galleryFilters = document.getElementById('galleryFilters');
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const faqList = document.getElementById('faqList');
const reserveForm = document.getElementById('reserveForm');
const summary = {
  name: document.getElementById('summaryName'),
  phone: document.getElementById('summaryPhone'),
  guests: document.getElementById('summaryGuests'),
  date: document.getElementById('summaryDate'),
  time: document.getElementById('summaryTime'),
  request: document.getElementById('summaryRequest'),
};
const inputs = {
  name: document.getElementById('inputName'),
  phone: document.getElementById('inputPhone'),
  guests: document.getElementById('inputGuests'),
  date: document.getElementById('inputDate'),
  time: document.getElementById('inputTime'),
  request: document.getElementById('inputRequest'),
  meal: document.getElementById('inputMeal'),
quantity: document.getElementById('inputQuantity'),
};
const testimonials = Array.from(document.querySelectorAll('.testimonial-card'));
const statCounters = Array.from(document.querySelectorAll('.stat-number'));
const counters = Array.from(document.querySelectorAll('.counter'));
const backToTop = document.getElementById('backToTop');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const customCursor = document.getElementById('customCursor');
const videoOverlay = document.getElementById('videoOverlay');
const videoPlay = document.getElementById('videoPlay');
const closeVideo = document.getElementById('closeVideo');
const previewVideo = document.getElementById('previewVideo');
const searchData = [
    { title: "عن المطعم", target: "#about" },
    { title: "الطاهي", target: "#chef" },
    { title: "مميز اليوم", target: "#special" },
    { title: "القائمة", target: "#menu" },
    { title: "المعرض", target: "#gallery" },
    { title: "الحجز", target: "#reserve" },

    { title: "بيتزا لاكشري", target: "#menu" },
    { title: "سالمون سموكي", target: "#menu" },
    { title: "ريزوتو الكمأة", target: "#menu" },
    { title: "برجر ووتر فايف", target: "#menu" },
    { title: "ستيك شامبيوني", target: "#menu" },
    { title: "دجاج تندوري", target: "#menu" }
];
const searchInput = document.getElementById("siteSearch");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {

    const value = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if(value === "") return;

    const results = searchData.filter(item =>
        item.title.toLowerCase().includes(value)
    );

    results.forEach(item => {

        const div = document.createElement("div");

        div.className = "search-item";

        div.textContent = item.title;

        div.onclick = () => {

            document.querySelector(item.target)
                .scrollIntoView({
                    behavior:"smooth"
                });

            searchResults.innerHTML = "";
            searchInput.value = "";
        };

        searchResults.appendChild(div);

    });

});

const translations = {
  ar: {
    navAbout: 'عن المطعم',
    navChef: 'الطاهى',
    navSpecial: 'مميز اليوم',
    navMenu: 'القائمة',
    navGallery: 'المعرض',
    navReserve: 'الحجز',
    navReserveButton: 'احجز الآن',
    heroEyebrow: 'مطعم فخم',
    heroReserve: 'احجز طاولتك',
    heroMenu: 'عرض القائمة',
    todaySpecial: 'مميز اليوم',
    todaySpecialDish: 'ميني لحم بقر فاخر',
    chefRecommend: 'توصية الشيف',
    chefSignature: 'سوشي سموكي بالزعفران',
    openingHours: 'أوقات العمل',
    openEveryday: 'كل يوم',
    rating: 'التقييم',
    michelinStar: 'نجمة ميشلان',
    aboutEyebrow: 'لماذا YourBrand؟',
    aboutTitle: 'مطعم من تصميم فخم يتجاوز التوقعات',
    aboutStory: 'YourBrand يجمع بين الفخامة والتجربة الحسية لوجبة لا تُنسى. نعيد تعريف الضيافة العربية من خلال أجواء راقية وخدمة تفوق الخيال.',
    aboutMissionTitle: 'مهمتنا',
    aboutMissionText: 'تقديم أطباق تجمع بين الأصالة والابتكار في كل لقمة.',
    aboutExperienceTitle: 'خبرتنا',
    aboutYears: 'سنة',
    aboutExperienceText: 'في تقديم خدمات ضيافة فاخرة',
    counterCustomers: 'عميل سعيد',
    counterEvents: 'فعالية ناجحة',
    counterRate: 'رضا مضمون %',
    chefEyebrow: 'الطاهى التنفيذي',
    chefTitle: 'شيف/.....................',
    chefBio: 'خمس نجوم في فنون الطهي. يشتهر بابتكاره للتوازن بين النكهات العربية والعالمية وابتكاره لأطباق حصرية باحترافية عالية.',
    chefAwards: 'جوائز دولية',
    chefExperience: 'سنة خبرة',
    chefSignature: 'الطبق المميز',
    chefSignatureText: 'لحم الضأن المحمص مع صلصة الكراميل المدخن.',
    specialEyebrow: 'مذاق حصري',
    specialTitle: 'أفضل أطباقنا لهذا اليوم',
    specialDish1: 'بيتزا لاكشري',
    specialDesc1: 'مزيج فاخر من الترف والعمق مع جبن الموتزاريلا الإيطالية.',
    specialDish2: 'سالمون سموكي',
    specialDesc2: 'نغمات رائعة من الليمون والعسل على شريحة سمك ناعمة.',
    specialDish3: 'ريزوتو الكمأة',
    specialDesc3: 'لمسة فخمة من الكمأة مع أرز أرابوريو كريمي.',
    orderNow: 'اطلب الآن',
    menuEyebrow: 'قائمة تفاعلية',
    menuTitle: 'اختر من أرقى الأطباق',
    categoryAll: 'الكل',
    categoryPizza: 'بيتزا',
    categoryBurger: 'برجر',
    categorySteak: 'ستيك',
    categorySeafood: 'مأكولات بحرية',
    categoryChicken: 'دجاج',
    categoryDesserts: 'حلويات',
    categoryDrinks: 'مشروبات',
    menuItem1: 'بيتزا سوشي البحر',
    menuDesc1: 'قاعدة مقرمشة، مزيج من الجمبري والسلمون، صلصة الكريمة المميزة.',
    menuIngredients1: 'مكونات: سمك، جبنة، صلصة حارّة.',
    menuItem2: 'برجر ووتر فايف',
    menuDesc2: 'لحم متبل، جبن الشيدر المعمر، خبز بريوش طري.',
    menuIngredients2: 'مكونات: لحم، خس، صلصة خاصة.',
    menuItem3: 'ستيك شامبيوني',
    menuDesc3: 'شرائح لحم متبلة، صلصة فطر الفوجي، خضار موسمية.',
    menuIngredients3: 'مكونات: لحم، فطر، زبدة.',
    menuItem4: 'تندر لابيزاريات',
    menuDesc4: 'طبق بحري فاخر مع لمسة زعفران وعطر الليمون.',
    menuIngredients4: 'مكونات: جمبري، كاليماري، زعفران.',
    menuItem5: 'دجاج تندوري ذهبي',
    menuDesc5: 'شرائح دجاج متبلة بتوابل خاصة وأرز برائحة القرنفل.',
    menuIngredients5: 'مكونات: دجاج، توابل، أرز.',
    menuItem6: 'موس الشوكولاتة الذهبية',
    menuDesc6: 'مزيج أنعم من الشوكولاتة الداكنة والكراميل الفاخر.',
    menuIngredients6: 'مكونات: شوكولاتة، كراميل، فانيليا.',
    menuItem7: 'كوكتيل الياقوت',
    menuDesc7: 'مشروب بارد بلمسة توت رمان وعصير الليمون الطازج.',
    menuIngredients7: 'مكونات: رمان، نعناع، فواكه.',
    orderButton: 'اطلب',
    signatureEyebrow: 'التوقيعات الخاصة',
    signatureTitle: 'أطباق مختارة بتقنية عرض ثلاثية الأبعاد',
    galleryEyebrow: 'المعرض الفاخر',
    galleryTitle: 'صور تخطف الأنفاس من أجوائنا',
    galleryAll: 'الكل',
    galleryDining: 'الطعام',
    galleryInterior: 'الديكور',
    galleryEvents: 'الفعاليات',
    viewImage: 'عرض',
    chooseEyebrow: 'اختر الفخامة',
    chooseTitle: 'لماذا يعتمد علينا عملاؤنا؟',
    chooseFresh: 'مكونات طازجة',
    chooseFreshText: 'نستخدم منتجات بجودة النخبة لخلق تجارب لا تُنسى.',
    chooseChefs: 'شيفات محترفون',
    chooseChefsText: 'فريق عالمي بخبرة يقدم أطباق فنية.',
    chooseFast: 'خدمة سريعة',
    chooseFastText: 'توقيت دقيق وتقديم منظم في كل زيارة.',
    chooseAtmosphere: 'أجواء فاخرة',
    chooseAtmosphereText: 'تصميم يجمع الدفء والرفاهية للضيف.',
    chooseDelivery: 'توصيل منزلي',
    chooseDeliveryText: 'تجربة فاخرة تصل إلى بابك.',
    reserveEyebrow: 'احجز الآن',
    reserveTitle: 'حجز طاولة من فئة الصفوة',
    reserveText: 'أكمل نموذج الحجز الفاخر لتأمين مقعدك في تجربة طعام فريدة.',
    summaryTitle: 'ملخص الحجز',
    summaryName: 'الاسم:',
    summaryPhone: 'الهاتف:',
    summaryGuests: 'الضيوف:',
    summaryDate: 'التاريخ:',
    summaryTime: 'الوقت:',
    summaryRequest: 'الطلب الخاص:',
    summaryWhatsApp: 'احجز عبر واتساب',
    formName: 'الاسم الكامل',
    formPhone: 'رقم الهاتف',
    formGuests: 'عدد الضيوف',
    formDate: 'التاريخ',
    formTime: 'الوقت',
    formRequest: 'طلبات خاصة',
    formSubmit: 'قم بالحجز',
    testimonialsEyebrow: 'آراء العملاء',
    testimonialsTitle: 'تجارب تلامس الفخامة',
    statsCustomers: 'عملاء سعداء',
    statsDishes: 'طبق مُقدم',
    statsYears: 'سنة خبرة',
    statsAwards: 'جوائز',
    videoEyebrow: 'مشهد سينمائي',
    videoTitle: 'استعد لرحلة بصرية داخل مطعمنا',
    videoText: 'شاهد طريقة إعداد أطباقنا بحرفية معدة بعناية عبر فيديو حصري.',
    instagramEyebrow: 'انستغرام',
    instagramTitle: 'لحظات مختارة من حسابنا',
    eventsEyebrow: 'فعالياتنا',
    eventsTitle: 'أمسيات لا تُنسى كل أسبوع',
    eventLive: 'موسيقى حية',
    eventLiveText: 'عشاء راقٍ مع أنغام تنبض بالفخامة.',
    eventFamily: 'ليلة العائلة',
    eventFamilyText: 'جلسات خاصة تناسب العائلات الباحثة عن الخصوصية.',
    eventBirthday: 'حفلات الميلاد',
    eventBirthdayText: 'باقة متكاملة لتجربة احتفال فخمة.',
    eventSpecial: 'عروض خاصة',
    eventSpecialText: 'تخفيضات حصرية لأمسية الذواقة.',
    faqEyebrow: 'الأسئلة الشائعة',
    faqTitle: 'إجابات سريعة على أهم التساؤلات',
    faqQuestion1: 'هل يمكن الحجز لمجموعات كبيرة؟',
    faqAnswer1: 'نعم، لدينا باقات خاصة للمجموعات والعائلات مع تصميم مساحة مخصص.',
    faqQuestion2: 'هل تقدمون خيارات نباتية؟',
    faqAnswer2: 'نعم، قائمةنا تشمل أطباق نباتية فاخرة ومبتكرة.',
    faqQuestion3: 'ما أوقات عمل المطعم؟',
    faqAnswer3: 'نرحب بضيوفنا يوميًا من 12 مساءً حتى 2 صباحًا.',
    locationEyebrow: 'موقعنا',
    locationTitle: 'زورونا في قلب المدينة',
    locationHours: 'ساعات العمل',
    locationParking: 'موقف سيارات',
    locationParkingText: 'موقف خاص مع خدمة صف السيارات.',
    locationDelivery: 'توصيل',
    locationDeliveryText: 'توصيل إلى وسط المدينة وضواحيها.',
    contactEyebrow: 'تواصل معنا',
    contactTitle: 'نحن هنا لخدمتك',
    contactName: 'اسمك',
    contactEmail: 'البريد الإلكتروني',
    contactMessage: 'رسالتك',
    contactSubmit: 'أرسل الرسالة',
    contactPhone: 'الهاتف',
    contactEmailLabel: 'البريد الإلكتروني',
    contactSocial: 'تابعنا',
    footerText: 'تصميم وتجربة نهاية مطاف فاخرة للمطاعم الراقية.',
    footerAbout: 'عن المطعم',
    footerMenu: 'القائمة',
    footerReserve: 'الحجز',
    newsletterTitle: 'النشرة البريدية',
    newsletterSubmit: 'اشترك',
  },
  en: {
    navAbout: 'About',
    navChef: 'Chef',
    navSpecial: "Today's Special",
    navMenu: 'Menu',
    navGallery: 'Gallery',
    navReserve: 'Reserve',
    navReserveButton: 'Reserve Now',
    heroEyebrow: 'Luxury Dining',
    heroReserve: 'Book Your Table',
    heroMenu: 'View Menu',
    todaySpecial: "Today's Special",
    todaySpecialDish: 'Prime Beef Mini',
    chefRecommend: 'Chef Recommendation',
    chefSignature: 'Saffron Smoky Sushi',
    openingHours: 'Opening Hours',
    openEveryday: 'Every Day',
    rating: 'Rating',
    michelinStar: 'Michelin Star',
    aboutEyebrow: 'Why YourBrand?',
    aboutTitle: 'A luxurious restaurant beyond expectation',
    aboutStory: 'YourBrand blends luxury with a sensory dining experience. We redefine hospitality with elegant atmosphere and exceptional service.',
    aboutMissionTitle: 'Our Mission',
    aboutMissionText: 'Deliver dishes that combine authenticity and innovation in every bite.',
    aboutExperienceTitle: 'Experience',
    aboutYears: 'Years',
    aboutExperienceText: 'of premium hospitality services',
    counterCustomers: 'Happy guests',
    counterEvents: 'Successful events',
    counterRate: 'Guaranteed satisfaction %',
    chefEyebrow: 'Executive Chef',
    chefTitle: 'Chef/.....................',
    chefBio: 'Five-star culinary mastery. Known for balancing Arabic and global flavors while crafting exclusive signature dishes.',
    chefAwards: 'International awards',
    chefExperience: 'Years experience',
    chefSignature: 'Signature dish',
    chefSignatureText: 'Roasted lamb with smoked caramel sauce.',
    specialEyebrow: 'Exclusive taste',
    specialTitle: 'Our top dishes for today',
    specialDish1: 'Luxury Pizza',
    specialDesc1: 'A lavish blend of depth with Italian mozzarella cheese.',
    specialDish2: 'Smoky Salmon',
    specialDesc2: 'A perfect harmony of lemon and honey on delicate fish.',
    specialDish3: 'Truffle Risotto',
    specialDesc3: 'A luxurious touch of truffle with creamy arborio rice.',
    orderNow: 'Order Now',
    menuEyebrow: 'Interactive Menu',
    menuTitle: 'Choose from premium dishes',
    categoryAll: 'All',
    categoryPizza: 'Pizza',
    categoryBurger: 'Burger',
    categorySteak: 'Steak',
    categorySeafood: 'Seafood',
    categoryChicken: 'Chicken',
    categoryDesserts: 'Desserts',
    categoryDrinks: 'Drinks',
    menuItem1: 'Ocean Sushi Pizza',
    menuDesc1: 'Crispy crust, shrimp and salmon fusion, signature cream sauce.',
    menuIngredients1: 'Ingredients: fish, cheese, spicy sauce.',
    menuItem2: 'Water Five Burger',
    menuDesc2: 'Seasoned beef, aged cheddar, soft brioche bun.',
    menuIngredients2: 'Ingredients: beef, lettuce, special sauce.',
    menuItem3: 'Championi Steak',
    menuDesc3: 'Seasoned steak with Fuji mushroom sauce and seasonal greens.',
    menuIngredients3: 'Ingredients: beef, mushroom, butter.',
    menuItem4: 'Tender Lobster',
    menuDesc4: 'Luxurious seafood with saffron and lemon aroma.',
    menuIngredients4: 'Ingredients: shrimp, calamari, saffron.',
    menuItem5: 'Golden Tandoori Chicken',
    menuDesc5: 'Spiced chicken fillets with clove-scented rice.',
    menuIngredients5: 'Ingredients: chicken, spices, rice.',
    menuItem6: 'Golden Chocolate Mousse',
    menuDesc6: 'Silkiest blend of dark chocolate and premium caramel.',
    menuIngredients6: 'Ingredients: chocolate, caramel, vanilla.',
    menuItem7: 'Ruby Cocktail',
    menuDesc7: 'Chilled drink with pomegranate and fresh lemon.',
    menuIngredients7: 'Ingredients: pomegranate, mint, fruits.',
    orderButton: 'Order',
    signatureEyebrow: 'Signature Dishes',
    signatureTitle: 'Selected dishes with 3D coverflow effect',
    galleryEyebrow: 'Luxury Gallery',
    galleryTitle: 'Breathtaking visuals from our venue',
    galleryAll: 'All',
    galleryDining: 'Dining',
    galleryInterior: 'Interior',
    galleryEvents: 'Events',
    viewImage: 'View',
    chooseEyebrow: 'Choose Luxury',
    chooseTitle: 'Why our guests trust us',
    chooseFresh: 'Fresh ingredients',
    chooseFreshText: 'We use elite products to craft unforgettable experiences.',
    chooseChefs: 'Professional chefs',
    chooseChefsText: 'A global team delivering artful cuisine.',
    chooseFast: 'Fast service',
    chooseFastText: 'Precise timing and polished delivery every visit.',
    chooseAtmosphere: 'Luxury atmosphere',
    chooseAtmosphereText: 'Design that combines warmth and elegance.',
    chooseDelivery: 'Home delivery',
    chooseDeliveryText: 'Luxury dining delivered to your door.',
    reserveEyebrow: 'Reserve now',
    reserveTitle: 'Book an elite dining experience',
    reserveText: 'Complete the premium reservation form to secure your seat.',
    summaryTitle: 'Reservation Summary',
    summaryName: 'Name:',
    summaryPhone: 'Phone:',
    summaryGuests: 'Guests:',
    summaryDate: 'Date:',
    summaryTime: 'Time:',
    summaryRequest: 'Special request:',
    summaryWhatsApp: 'Reserve on WhatsApp',
    formName: 'Full Name',
    formPhone: 'Phone Number',
    formGuests: 'Guests',
    formDate: 'Date',
    formTime: 'Time',
    formRequest: 'Special requests',
    formSubmit: 'Reserve Table',
    testimonialsEyebrow: 'Guest Reviews',
    testimonialsTitle: 'Memorable luxury experiences',
    statsCustomers: 'Happy customers',
    statsDishes: 'Dishes served',
    statsYears: 'Years experience',
    statsAwards: 'Awards',
    videoEyebrow: 'Cinematic preview',
    videoTitle: 'Prepare for a cinematic restaurant experience',
    videoText: 'Watch how our dishes are crafted with expert precision.',
    instagramEyebrow: 'Instagram',
    instagramTitle: 'Curated moments from our feed',
    eventsEyebrow: 'Events',
    eventsTitle: 'Unforgettable evenings every week',
    eventLive: 'Live music',
    eventLiveText: 'An elegant dinner paired with soulful melodies.',
    eventFamily: 'Family night',
    eventFamilyText: 'Private seating for families seeking comfort.',
    eventBirthday: 'Birthday packages',
    eventBirthdayText: 'A complete luxury celebration package.',
    eventSpecial: 'Special offers',
    eventSpecialText: 'Exclusive deals for gourmet evenings.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Fast answers to top questions',
    faqQuestion1: 'Can I book for large groups?',
    faqAnswer1: 'Yes, we offer special group and family packages with dedicated space.',
    faqQuestion2: 'Do you offer vegetarian options?',
    faqAnswer2: 'Yes, our menu includes premium vegetarian and creative dishes.',
    faqQuestion3: 'What are the opening hours?',
    faqAnswer3: 'We welcome guests daily from 12 PM to 2 AM.',
    locationEyebrow: 'Location',
    locationTitle: 'Visit us in the city center',
    locationHours: 'Working hours',
    locationParking: 'Parking',
    locationParkingText: 'Private parking with valet service.',
    locationDelivery: 'Delivery',
    locationDeliveryText: 'Delivery across downtown and nearby areas.',
    contactEyebrow: 'Contact',
    contactTitle: 'We are here to assist',
    contactName: 'Your name',
    contactEmail: 'Email address',
    contactMessage: 'Your message',
    contactSubmit: 'Send message',
    contactPhone: 'Phone',
    contactEmailLabel: 'Email',
    contactSocial: 'Follow us',
    footerText: 'A premium end-to-end restaurant design and experience.',
    footerAbout: 'About',
    footerMenu: 'Menu',
    footerReserve: 'Reserve',
    newsletterTitle: 'Newsletter',
    newsletterSubmit: 'Subscribe',
  }
};

const componentMap = {};

function initTranslation() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    componentMap[key] = componentMap[key] || [];
    componentMap[key].push(element);
  });
}

function applyLanguage(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
  Object.entries(componentMap).forEach(([key, elements]) => {
    const text = translations[lang][key] || translations.ar[key] || '';
    elements.forEach((el) => {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });
  });
  localStorage.setItem('restaurantLang', lang);
  if (heroSlides.length) {
    updateHeroContent(currentSlide);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '☾' : '☀';
  localStorage.setItem('restaurantTheme', theme);
}

function updateHeroContent(index) {
  heroSlides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
  const activeSlide = heroSlides[index];
  const titleKey = langState === 'ar' ? 'title' : 'titleEn';
  const subtitleKey = langState === 'ar' ? 'subtitle' : 'subtitleEn';
  heroTitle.textContent = activeSlide.dataset[titleKey] || heroTitle.textContent;
  heroSubtitle.textContent = activeSlide.dataset[subtitleKey] || heroSubtitle.textContent;
  heroControls.querySelectorAll('button').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === index);
  });
}

function createHeroControls() {
  heroSlides.forEach((slide, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.addEventListener('click', () => {
      currentSlide = idx;
      updateHeroContent(idx);
    });
    if (idx === 0) btn.classList.add('active');
    heroControls.appendChild(btn);
    const img = slide.dataset.image;
    if (img) slide.style.backgroundImage = `url('${img}')`;
  });
}

function filterCards(container, category) {
  const cards = Array.from(container.children);
  cards.forEach((card) => {
    const itemCategory = card.dataset.category || 'all';
    const visible = category === 'all' || itemCategory === category;
    card.style.display = visible ? 'grid' : 'none';
  });
}

function setupFilters(filtersRoot, gridRoot) {
  filtersRoot.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      filtersRoot.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      filterCards(gridRoot, button.dataset.category);
    });
  });
}

function setupFavoriteButtons() {
  document.querySelectorAll('.favorite-btn').forEach((button) => {
    button.addEventListener('click', () => button.classList.toggle('active'));
  });
}

let currentSlide = 0;
let carouselIndex = 0;
let testimonialIndex = 0;

function updateSignatureCarousel(index) {
  const cards = Array.from(document.querySelectorAll('.carousel-card'));
  carouselIndex = index;
  cards.forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
    const offset = idx - index;
    const transform = `translateX(${offset * 60}px) scale(${idx === index ? 1 : 0.88}) rotateY(${offset * 12}deg)`;
    card.style.transform = transform;
    card.style.zIndex = cards.length - Math.abs(offset);
  });
}

function setupCarouselControls() {
  const prev = document.getElementById('carouselPrev');
  const next = document.getElementById('carouselNext');
  prev.addEventListener('click', () => {
    carouselIndex = (carouselIndex - 1 + 3) % 3;
    updateSignatureCarousel(carouselIndex);
  });
  next.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 1) % 3;
    updateSignatureCarousel(carouselIndex);
  });
  updateSignatureCarousel(carouselIndex);
  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % 3;
    updateSignatureCarousel(carouselIndex);
  }, 6500);
}

function setupGalleryLightbox() {
  galleryGrid.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      lightboxImage.src = item.dataset.image;
      lightbox.classList.add('open');
    });
  });
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove('open');
    }
  });
}

function setupFAQ() {
  faqList.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      faqList.querySelectorAll('.faq-item').forEach((block) => block.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function setupReservationForm() {

  Object.values(inputs).forEach((input) => {
    if (!input) return;

    input.addEventListener("input", updateSummary);
  });

  reserveForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = inputs.name.value.trim();
    const phone = inputs.phone.value.trim();
    const guests = inputs.guests.value;
    const date = inputs.date.value;
    const time = inputs.time.value;
    const request = inputs.request.value.trim();

    const message = `
🍽️ طلب حجز جديد

👤 الاسم: ${name}
📞 الهاتف: ${phone}

🍕 الوجبة: ${inputs.meal.value}
🔢 الكمية: ${inputs.quantity.value}

👥 عدد الأشخاص: ${guests}
📅 التاريخ: ${date}
🕒 الوقت: ${time}

📝 طلبات خاصة:
${request || "لا يوجد"}
`;

    window.open(
      `https://wa.me/201014053954?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });

}

function updateSummary() {
  summary.name.textContent =
    inputs.name.value || "-";

  summary.phone.textContent =
    inputs.phone.value || "-";

  summary.guests.textContent =
    inputs.guests.value || "-";

  summary.date.textContent =
    inputs.date.value || "-";

  summary.time.textContent =
    inputs.time.value || "-";

  summary.request.textContent =
    inputs.request.value || "لا يوجد";

  // لو عندك span للوجبة والكمية
  const summaryMeal = document.getElementById("summaryMeal");
  const summaryQuantity = document.getElementById("summaryQuantity");

  if (summaryMeal)
    summaryMeal.textContent = inputs.meal.value || "-";

  if (summaryQuantity)
    summaryQuantity.textContent = inputs.quantity.value || "-";
}

function animateCounters(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = parseInt(element.dataset.target, 10);
    let count = 0;
    const step = Math.max(1, Math.round(target / 100));
    const interval = setInterval(() => {
      count += step;
      element.textContent = count.toLocaleString(langState === 'ar' ? 'ar-EG' : 'en-US');
      if (count >= target) {
        element.textContent = target.toLocaleString(langState === 'ar' ? 'ar-EG' : 'en-US');
        clearInterval(interval);
      }
    }, 15);
    observer.unobserve(element);
  });
}

function setupTestimonialsCarousel() {
  function updateTestimonials(index) {
    testimonials.forEach((card, idx) => card.classList.toggle('active', idx === index));
  }
  updateTestimonials(testimonialIndex);
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    updateTestimonials(testimonialIndex);
  }, 7000);
}

function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.section').forEach((section) => observer.observe(section));
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  topProgress.style.width = `${progress}%`;
  backToTop.classList.toggle('visible', scrollTop > 500);
}

function setupBackToTop() {
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupMenuToggle() {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

function setupParallax() {
  const hero = document.querySelector('.hero-section');
  const floats = document.querySelectorAll('.float-card');
  hero.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 18;
    heroSlides.forEach((slide) => slide.style.transform = `translate(${x}px, ${y}px)`);
    floats.forEach((card, index) => {
      const offset = (index + 1) * 6;
      card.style.transform = `translate(${x * offset * 0.07}px, ${y * offset * 0.09}px)`;
    });
  });
}

function setupCursor() {
  document.addEventListener('pointermove', (event) => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
  });
  document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .favorite-btn').forEach((item) => {
    item.addEventListener('pointerenter', () => {
      customCursor.style.transform = 'translate(-50%, -50%) scale(1.7)';
      customCursor.style.background = 'rgba(181, 133, 39, 0.16)';
    });
    item.addEventListener('pointerleave', () => {
      customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
      customCursor.style.background = 'transparent';
    });
  });
}

function setupVideoOverlay() {
  videoPlay.addEventListener('click', () => {
    videoOverlay.classList.add('open');
    previewVideo.play();
  });
  closeVideo.addEventListener('click', () => {
    videoOverlay.classList.remove('open');
    previewVideo.pause();
  });
  videoOverlay.addEventListener('click', (event) => {
    if (event.target === videoOverlay) {
      videoOverlay.classList.remove('open');
      previewVideo.pause();
    }
  });
}

let langState = localStorage.getItem('restaurantLang') || 'ar';
let themeState = localStorage.getItem('restaurantTheme') || 'dark';

function setupHeroAutoSlide() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateHeroContent(currentSlide);
  }, 7500);
}

window.addEventListener('DOMContentLoaded', () => {
  initTranslation();
  applyLanguage(langState);
  applyTheme(themeState);
  createHeroControls();
  updateHeroContent(currentSlide);
  setupFilters(menuFilters, menuGrid);
  setupFilters(galleryFilters, galleryGrid);
  setupFavoriteButtons();
  setupCarouselControls();
  setupGalleryLightbox();
  setupFAQ();
  setupReservationForm();
  setupScrollReveal();
  setupBackToTop();
  setupMenuToggle();
  setupParallax();
  setupCursor();
  setupVideoOverlay();
  setupHeroAutoSlide();
  setupTestimonialsCarousel();
  updateSummary();

  const counterObserver = new IntersectionObserver(animateCounters, { threshold: 0.35 });
  counters.forEach((counter) => counterObserver.observe(counter));

  document.querySelectorAll('.stat-number').forEach((number) => counterObserver.observe(number));

  setTimeout(() => {
    pageLoader.style.opacity = '0';
    pageLoader.style.visibility = 'hidden';
  }, 1000);
});

window.addEventListener('scroll', updateScrollProgress);

themeToggle.addEventListener('click', () => {
  themeState = themeState === 'dark' ? 'light' : 'dark';
  applyTheme(themeState);
});

langToggle.addEventListener('click', () => {
  langState = langState === 'ar' ? 'en' : 'ar';
  applyLanguage(langState);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 820) navMenu.classList.remove('open');
});

if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.scrollBehavior = 'auto';
}
