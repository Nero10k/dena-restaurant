import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Services | Dena Restaurant",
  description: "Elevate your events with Dena's luxury catering services. From intimate gatherings to grand celebrations, we bring the finest seafood and grilled specialties to your venue.",
};

export default function CateringPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Elegant catering setup"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 drop-shadow-lg text-shadow-lg">
            Catering <span className="gold-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Elevate your events with our premium catering experience
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gold-text mb-8">
              Exceptional Catering for Every Occasion
            </h2>
            <p className="text-cream/80 text-lg mb-8">
              At Dena, we bring our culinary excellence directly to you. Our catering services are designed to create memorable dining experiences for any event, from intimate gatherings to grand celebrations. With meticulous attention to detail and a passion for extraordinary cuisine, we ensure your occasion is nothing short of perfect.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Catering Options */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center gold-text mb-12">
            Our Catering Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Events */}
            <div className="bg-charcoal-light p-8 rounded-lg hover:shadow-gold transition-elegant">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-4 text-center">Corporate Events</h3>
              <p className="text-cream/80 mb-6 text-center">
                Impress your clients and colleagues with our sophisticated corporate catering options. From business lunches to formal galas, we offer tailored menus that reflect your company's standards.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Breakfast & lunch meetings
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Corporate dinners
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Business presentations
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Award ceremonies
                </li>
              </ul>
              <div className="text-center">
                <p className="text-gold text-lg font-serif mb-4">Starting from €35 per person</p>
              </div>
            </div>

            {/* Private Events */}
            <div className="bg-charcoal-light p-8 rounded-lg transform scale-105 border border-gold/30 hover:shadow-gold transition-elegant">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-bl rounded-tr">
                POPULAR
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-4 text-center">Private Celebrations</h3>
              <p className="text-cream/80 mb-6 text-center">
                Create unforgettable memories with our exquisite catering for your special occasions. We handle everything from setup to service, letting you focus on celebrating.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Birthdays & anniversaries
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Engagement parties
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Wedding receptions
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Family gatherings
                </li>
              </ul>
              <div className="text-center">
                <p className="text-gold text-lg font-serif mb-4">Starting from €45 per person</p>
              </div>
            </div>

            {/* Custom Events */}
            <div className="bg-charcoal-light p-8 rounded-lg hover:shadow-gold transition-elegant">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-4 text-center">Custom Experiences</h3>
              <p className="text-cream/80 mb-6 text-center">
                For truly unique events, our team works with you to create bespoke culinary experiences that perfectly align with your vision and requirements.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Themed events
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Chef's table experiences
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Multi-day conferences
                </li>
                <li className="flex items-center text-cream/80">
                  <span className="text-gold mr-2">✓</span> Cultural celebrations
                </li>
              </ul>
              <div className="text-center">
                <p className="text-gold text-lg font-serif mb-4">Custom pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center gold-text mb-12">
            Our Catering Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-gold">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-3">Consultation</h3>
              <p className="text-cream/80">
                We begin with a detailed consultation to understand your event, preferences, and requirements.
              </p>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[2px] bg-gold/30"></div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-gold">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-3">Menu Creation</h3>
              <p className="text-cream/80">
                Our chefs craft a personalized menu tailored to your taste, dietary needs, and event theme.
              </p>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[2px] bg-gold/30"></div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-gold">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-3">Event Planning</h3>
              <p className="text-cream/80">
                We handle all logistics, from staffing and equipment to setup and service details.
              </p>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[2px] bg-gold/30"></div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-gold">4</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-3">Execution</h3>
              <p className="text-cream/80">
                On the day, our professional team delivers a flawless culinary experience for you and your guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center gold-text mb-12">
            Sample Menu Selections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Appetizers & Starters */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-6 border-b border-gold/30 pb-2">
                Appetizers & Starters
              </h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-serif text-gold">Seafood Platter</h4>
                    <span className="text-cream/60 text-sm">Serves 8-10</span>
                  </div>
                  <p className="text-cream/80 text-sm">Fresh oysters, poached prawns, smoked salmon and tuna tartare with signature sauces</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-serif text-gold">Gourmet Canapés</h4>
                    <span className="text-cream/60 text-sm">Per dozen</span>
                  </div>
                  <p className="text-cream/80 text-sm">Selection of elegant bite-sized offerings from land and sea</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-serif text-gold">Charcuterie & Cheese</h4>
                    <span className="text-cream/60 text-sm">Serves 10-12</span>
                  </div>
                  <p className="text-cream/80 text-sm">Premium cured meats, artisanal cheeses, dried fruits, nuts and house-made crackers</p>
                </li>
              </ul>
            </div>

            {/* Main Courses */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-6 border-b border-gold/30 pb-2">
                Main Courses
              </h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-serif text-gold">Grilled Seafood Selection</h4>
                  </div>
                  <p className="text-cream/80 text-sm">Lobster tail, sea bass, jumbo prawns and scallops with herb butter and seasonal vegetables</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-serif text-gold">Prime Beef Tenderloin</h4>
                  </div>
                  <p className="text-cream/80 text-sm">Perfectly grilled beef with truffle mashed potatoes and red wine reduction</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-serif text-gold">Vegetarian Delight</h4>
                  </div>
                  <p className="text-cream/80 text-sm">Seasonal vegetable risotto with aged parmesan, truffle oil and micro greens</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-cream/80 mb-6">
              Our catering menus are fully customizable to suit your preferences and dietary requirements. 
              We also offer specialized dessert options, beverage packages, and wine pairings.
            </p>
            <p className="text-cream/80 italic">
              Please note that menu items may vary based on seasonality and availability.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center gold-text mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-charcoal p-8 rounded-lg relative">
              <div className="absolute -top-4 left-8 text-5xl text-gold opacity-30">"</div>
              <p className="text-cream/80 mb-6 relative z-10">
                Dena catered our corporate gala, and the service was impeccable. The food was exquisite, and their attention to detail made our event truly special. Our guests are still talking about it!
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-serif font-bold">MJ</span>
                  </div>
                </div>
                <div>
                  <p className="text-cream font-semibold">Michael Johnson</p>
                  <p className="text-cream/60 text-sm">Marketing Director, Tech Innovations</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-charcoal p-8 rounded-lg relative">
              <div className="absolute -top-4 left-8 text-5xl text-gold opacity-30">"</div>
              <p className="text-cream/80 mb-6 relative z-10">
                Our wedding reception was absolutely perfect thanks to Dena. The menu was customized exactly to our tastes, and the presentation was stunning. The chef and staff were professional and warm.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-serif font-bold">SL</span>
                  </div>
                </div>
                <div>
                  <p className="text-cream font-semibold">Sarah & Lucas</p>
                  <p className="text-cream/60 text-sm">Wedding, June 2023</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-charcoal p-8 rounded-lg relative">
              <div className="absolute -top-4 left-8 text-5xl text-gold opacity-30">"</div>
              <p className="text-cream/80 mb-6 relative z-10">
                I hosted a birthday dinner at home and Dena's private chef service exceeded all expectations. The seafood was incredibly fresh, and they transformed my dining room into a 5-star restaurant experience.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-serif font-bold">ED</span>
                  </div>
                </div>
                <div>
                  <p className="text-cream font-semibold">Elena Dimitriou</p>
                  <p className="text-cream/60 text-sm">Private Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Elegant dining setup"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gold-text mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-cream/80 text-lg mb-8">
              Contact our catering specialists to discuss your upcoming event. We'll work with you to create a personalized catering experience that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?inquiry=catering"
                className="px-8 py-3 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-elegant"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+13105550123"
                className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-elegant"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center gold-text mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-charcoal p-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-cream mb-3">How far in advance should I book catering services?</h3>
              <p className="text-cream/80">
                We recommend booking at least 4-6 weeks in advance for most events, and 2-3 months for large events or during peak season. For last-minute requests, please contact us directly to discuss availability.
              </p>
            </div>
            <div className="bg-charcoal p-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-cream mb-3">Can you accommodate dietary restrictions?</h3>
              <p className="text-cream/80">
                Absolutely. We can accommodate a wide range of dietary needs including vegetarian, vegan, gluten-free, and allergen-specific requirements. Please inform us of any dietary restrictions during the consultation phase.
              </p>
            </div>
            <div className="bg-charcoal p-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-cream mb-3">What is included in your catering services?</h3>
              <p className="text-cream/80">
                Our standard catering packages include food preparation, service staff, tableware, and cleanup. Additional services such as bar service, specialty rentals, and venue decoration can be arranged for an additional fee.
              </p>
            </div>
            <div className="bg-charcoal p-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-cream mb-3">Do you provide tastings before the event?</h3>
              <p className="text-cream/80">
                Yes, we offer menu tastings for events above a certain size. Tastings are typically scheduled after the initial consultation and once a preliminary menu has been established.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 