import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Luxurious restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6">
            Welcome to <span className="gold-text">Dena</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Experience the finest seafood and grilled specialties in an elegant atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="px-8 py-3 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-elegant"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-elegant"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center gold-text mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Breakfast */}
            <div className="bg-charcoal-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Breakfast</h3>
              <p className="text-cream/80 text-sm mb-4">
                Start your day with our luxurious breakfast selection
              </p>
              <p className="text-gold text-sm">Daily 7:00 AM - 11:00 AM</p>
            </div>

            {/* Lunch */}
            <div className="bg-charcoal-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Lunch</h3>
              <p className="text-cream/80 text-sm mb-4">
                Enjoy our exquisite lunch menu in a sophisticated setting
              </p>
              <p className="text-gold text-sm">Daily 11:30 AM - 3:00 PM</p>
            </div>

            {/* Dinner */}
            <div className="bg-charcoal-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M4 12l4-4m-4 4l4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Dinner</h3>
              <p className="text-cream/80 text-sm mb-4">
                Experience fine dining with our carefully curated dinner menu
              </p>
              <p className="text-gold text-sm">Daily 5:00 PM - 10:00 PM</p>
            </div>

            {/* Catering */}
            <div className="bg-charcoal-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Catering</h3>
              <p className="text-cream/80 text-sm mb-4">
                Let us cater your special events with our premium service
              </p>
              <Link
                href="/catering"
                className="inline-block text-gold hover:text-gold-light transition-elegant"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold gold-text mb-6">
                Visit Us
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-cream mb-2">Location</h3>
                  <p className="text-cream/80">
                    123 Luxury Lane<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-cream mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-cream/80">
                    <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                    <p>Saturday: 7:00 AM - 11:00 PM</p>
                    <p>Sunday: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-cream mb-2">Contact</h3>
                  <p className="text-cream/80">
                    Tel: (310) 555-0123<br />
                    Email: info@denarestaurant.com
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center gold-text mb-12">
            Order Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-light p-8 rounded-lg text-center hover:bg-charcoal/80 transition-elegant"
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Uber_Eats_logo_2018.svg/2560px-Uber_Eats_logo_2018.svg.png"
                  alt="UberEats"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-cream/80 mb-4">
                Order your favorite dishes through UberEats
              </p>
              <span className="text-gold hover:text-gold-light transition-elegant">
                Order Now →
              </span>
            </a>
            <a
              href="https://www.thuisbezorgd.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-light p-8 rounded-lg text-center hover:bg-charcoal/80 transition-elegant"
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Thuisbezorgd_logo.svg/2560px-Thuisbezorgd_logo.svg.png"
                  alt="Thuisbezorgd"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-cream/80 mb-4">
                Order your favorite dishes through Thuisbezorgd
              </p>
              <span className="text-gold hover:text-gold-light transition-elegant">
                Order Now →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Restaurant ambiance"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gold-text mb-6">
              Experience Fine Dining
            </h2>
            <p className="text-cream/80 text-lg mb-8">
              Join us for an unforgettable culinary journey. Book your table today and
              experience the perfect blend of luxury and exceptional cuisine.
            </p>
            <Link
              href="/reservations"
              className="inline-block px-8 py-3 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-elegant"
            >
              Reserve Your Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
