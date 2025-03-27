import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dena Restaurant",
  description: "Learn about the story, philosophy, and culinary team behind Dena Restaurant's exceptional dining experience.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Elegant restaurant interior"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 drop-shadow-lg text-shadow-lg">
            About <span className="gold-text">Dena</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            A culinary journey of exceptional flavors and experiences
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden border border-gold/20">
              <Image
                src="https://images.unsplash.com/photo-1470256699805-a29e1b58598a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Chef preparing exquisite dish"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gold mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-gold/40 mb-8"></div>
              <p className="text-cream/90 mb-6 leading-relaxed">
                Founded in 2015 by award-winning Chef Alexandra Dena, our restaurant began with a simple yet profound mission: to create extraordinary dining experiences that celebrate the finest ingredients and culinary traditions from around the world.
              </p>
              <p className="text-cream/90 mb-6 leading-relaxed">
                What started as an intimate dining room with just a few tables has evolved into one of Amsterdam's most cherished culinary destinations. Throughout our journey, we've remained committed to our founding principles: impeccable quality, creative innovation, and warm hospitality.
              </p>
              <p className="text-cream/90 leading-relaxed">
                Every dish at Dena tells a story – of passionate producers, time-honored techniques, and our team's dedication to culinary excellence. We invite you to join us at our table and become part of our continuing story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gold mb-6">Our Philosophy</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            <p className="text-xl text-cream/90">
              The guiding principles that inspire every aspect of your experience at Dena
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Philosophy 1 */}
            <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20 transition-elegant hover:border-gold/40">
              <h3 className="text-xl font-serif font-semibold text-gold mb-4">Exceptional Ingredients</h3>
              <p className="text-cream/80">
                We source only the finest seasonal ingredients from trusted local farmers and premium suppliers around the world. Quality is never compromised in our kitchen.
              </p>
            </div>
            
            {/* Philosophy 2 */}
            <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20 transition-elegant hover:border-gold/40">
              <h3 className="text-xl font-serif font-semibold text-gold mb-4">Artful Presentation</h3>
              <p className="text-cream/80">
                We believe dining engages all the senses. Each plate is thoughtfully composed to create a harmonious balance of flavor, texture, aroma, and visual beauty.
              </p>
            </div>
            
            {/* Philosophy 3 */}
            <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20 transition-elegant hover:border-gold/40">
              <h3 className="text-xl font-serif font-semibold text-gold mb-4">Genuine Hospitality</h3>
              <p className="text-cream/80">
                Beyond exquisite food, we believe in creating a warm, welcoming atmosphere where every guest feels valued and attended to with sincerity and grace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gold mb-6">Meet Our Culinary Team</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            <p className="text-xl text-cream/90">
              The talented individuals who create the magic behind every dish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Chef 1 */}
            <div className="text-center">
              <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden mb-6 border-2 border-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="Chef Alexandra Dena"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gold">Alexandra Dena</h3>
              <p className="text-cream/80 mb-4">Founder & Executive Chef</p>
              <p className="text-cream/80 max-w-sm mx-auto">
                With three Michelin stars to her name, Chef Alexandra brings her visionary approach to modern European cuisine with global influences.
              </p>
            </div>
            
            {/* Chef 2 */}
            <div className="text-center">
              <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden mb-6 border-2 border-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1377&q=80"
                  alt="Chef Marco Rossi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gold">Marco Rossi</h3>
              <p className="text-cream/80 mb-4">Head Chef</p>
              <p className="text-cream/80 max-w-sm mx-auto">
                Chef Marco's mastery of Italian traditions and innovative techniques creates the perfect balance of comfort and surprise in every dish.
              </p>
            </div>
            
            {/* Chef 3 */}
            <div className="text-center">
              <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden mb-6 border-2 border-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1587116901524-11b6012c1e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  alt="Sophia Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gold">Sophia Chen</h3>
              <p className="text-cream/80 mb-4">Pastry Chef</p>
              <p className="text-cream/80 max-w-sm mx-auto">
                Sophia's artful desserts combine classical French techniques with Asian influences, creating memorable finales to your dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Interior Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gold mb-6">Our Space</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            <p className="text-xl text-cream/90 mb-12">
              An ambiance designed to complement and enhance your culinary journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 h-96 relative rounded-lg overflow-hidden border border-gold/20">
              <Image 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Dena restaurant main dining room"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="h-44 relative rounded-lg overflow-hidden border border-gold/20">
                <Image 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Dena restaurant private dining area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-44 relative rounded-lg overflow-hidden border border-gold/20">
                <Image 
                  src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                  alt="Dena restaurant bar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-light relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">Experience Dena</h2>
            <p className="text-xl text-cream/90 mb-10 max-w-3xl mx-auto">
              We invite you to join us for an unforgettable culinary journey. Reserve your table today and discover the unique flavors and warm hospitality that define Dena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/reservations" className="bg-gold hover:bg-gold-light text-charcoal font-semibold px-8 py-3 rounded-lg transition-elegant">
                Make a Reservation
              </a>
              <a href="/menu" className="border border-gold hover:bg-gold/10 text-gold font-semibold px-8 py-3 rounded-lg transition-elegant">
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 