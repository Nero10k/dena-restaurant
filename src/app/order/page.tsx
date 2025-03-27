import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Online | Dena Restaurant",
  description: "Order Dena's exquisite cuisine for delivery or pickup. Enjoy our fine dining experience in the comfort of your home.",
};

export default function OrderPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Elegant takeaway food"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 drop-shadow-lg text-shadow-lg">
            Order <span className="gold-text">Online</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Experience our exceptional cuisine in the comfort of your home
          </p>
        </div>
      </section>

      {/* Ordering Options */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gold mb-6">How Would You Like to Order?</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            <p className="text-cream/90 text-lg leading-relaxed max-w-3xl mx-auto">
              Choose your preferred way to enjoy Dena's cuisine. We've partnered with premium delivery services to ensure your meal arrives in perfect condition, or you can pick up your order directly from our restaurant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Delivery Option */}
            <div className="bg-charcoal rounded-lg border border-gold/20 p-8 transition-all hover:border-gold/40">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gold/10 rounded-full">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-gold mb-2">Delivery</h3>
                <p className="text-cream/80 mb-6">
                  Have your meal delivered to your doorstep. Available within 10km of our restaurant.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-charcoal-light rounded-lg p-6 border border-gold/10 transition-elegant hover:border-gold/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 relative mr-4">
                      <Image
                        src="https://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png"
                        alt="UberEats logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif text-cream">UberEats</h4>
                      <p className="text-cream/70 text-sm">Delivery time: 30-45 minutes</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.ubereats.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center bg-gold hover:bg-gold-light text-charcoal font-semibold py-3 px-6 rounded-lg transition-elegant"
                  >
                    Order via UberEats
                  </a>
                </div>

                <div className="bg-charcoal-light rounded-lg p-6 border border-gold/10 transition-elegant hover:border-gold/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 relative mr-4">
                      <Image
                        src="https://assets.stickpng.com/images/5a902db47f96951c82922873.png"
                        alt="Thuisbezorgd logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif text-cream">Thuisbezorgd</h4>
                      <p className="text-cream/70 text-sm">Delivery time: 35-50 minutes</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.thuisbezorgd.nl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center bg-gold hover:bg-gold-light text-charcoal font-semibold py-3 px-6 rounded-lg transition-elegant"
                  >
                    Order via Thuisbezorgd
                  </a>
                </div>
              </div>
            </div>

            {/* Pickup Option */}
            <div className="bg-charcoal rounded-lg border border-gold/20 p-8 transition-all hover:border-gold/40">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gold/10 rounded-full">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-gold mb-2">Pickup</h3>
                <p className="text-cream/80 mb-6">
                  Order ahead and pick up from our restaurant. Ready in 20-30 minutes.
                </p>
              </div>

              <div className="bg-charcoal-light rounded-lg p-6 border border-gold/10 h-[calc(100%-8rem)]">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="pickup-name" className="block text-cream font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="pickup-name" 
                      className="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-cream"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="pickup-phone" className="block text-cream font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="pickup-phone" 
                      className="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-cream"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="pickup-time" className="block text-cream font-medium mb-2">Pickup Time</label>
                    <select 
                      id="pickup-time" 
                      className="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-cream"
                    >
                      <option value="">Select a time</option>
                      <option value="asap">As soon as possible</option>
                      <option value="30min">In 30 minutes</option>
                      <option value="60min">In 1 hour</option>
                      <option value="90min">In 1.5 hours</option>
                      <option value="120min">In 2 hours</option>
                    </select>
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      href="/menu"
                      className="block text-center border border-gold hover:bg-gold/10 text-gold font-semibold py-3 px-6 rounded-lg transition-elegant mb-4"
                    >
                      View Menu & Select Items
                    </Link>
                    
                    <button 
                      type="button" 
                      className="w-full bg-gold hover:bg-gold-light text-charcoal font-semibold py-3 px-6 rounded-lg transition-elegant"
                    >
                      Continue to Checkout
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gold mb-6">Most Popular Takeaway Items</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            <p className="text-cream/90 text-lg">
              Our customers' favorite dishes, perfectly prepared for takeaway and delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Popular Item 1 */}
            <div className="bg-charcoal-light rounded-lg overflow-hidden border border-gold/20 transition-elegant hover:border-gold/40">
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                  alt="Dena's Signature Ribeye"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif text-gold">Dena's Signature Ribeye</h3>
                  <span className="text-gold font-medium">€38</span>
                </div>
                <p className="text-cream/80 text-sm mb-4">
                  Our famous 28-day aged ribeye with truffle mashed potatoes and seasonal vegetables, served with our house-made sauce.
                </p>
                <button className="w-full border border-gold hover:bg-gold/10 text-gold font-medium py-2 rounded transition-elegant">
                  Add to Order
                </button>
              </div>
            </div>
            
            {/* Popular Item 2 */}
            <div className="bg-charcoal-light rounded-lg overflow-hidden border border-gold/20 transition-elegant hover:border-gold/40">
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  alt="Saffron Seafood Risotto"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif text-gold">Saffron Seafood Risotto</h3>
                  <span className="text-gold font-medium">€29</span>
                </div>
                <p className="text-cream/80 text-sm mb-4">
                  Creamy Arborio rice infused with saffron, topped with North Sea prawns, mussels, and calamari. Finished with aged Parmesan.
                </p>
                <button className="w-full border border-gold hover:bg-gold/10 text-gold font-medium py-2 rounded transition-elegant">
                  Add to Order
                </button>
              </div>
            </div>
            
            {/* Popular Item 3 */}
            <div className="bg-charcoal-light rounded-lg overflow-hidden border border-gold/20 transition-elegant hover:border-gold/40">
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Truffle Mushroom Pasta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif text-gold">Truffle Mushroom Pasta</h3>
                  <span className="text-gold font-medium">€26</span>
                </div>
                <p className="text-cream/80 text-sm mb-4">
                  House-made tagliatelle with wild mushrooms, black truffle, and a light cream sauce. Garnished with fresh herbs and Parmesan.
                </p>
                <button className="w-full border border-gold hover:bg-gold/10 text-gold font-medium py-2 rounded transition-elegant">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/menu"
              className="inline-block bg-gold hover:bg-gold-light text-charcoal font-semibold py-3 px-8 rounded-lg transition-elegant"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Delivery Information */}
              <div>
                <h3 className="text-2xl font-serif text-gold mb-6">Delivery Information</h3>
                <div className="w-16 h-1 bg-gold/40 mb-8"></div>
                
                <div className="space-y-6 text-cream/80">
                  <div>
                    <h4 className="text-lg font-serif text-cream mb-2">Delivery Hours</h4>
                    <p>Monday - Friday: 12:00 PM - 9:30 PM</p>
                    <p>Saturday - Sunday: 12:00 PM - 10:00 PM</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-serif text-cream mb-2">Delivery Area</h4>
                    <p>We deliver within a 10km radius of our restaurant located in central Amsterdam.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-serif text-cream mb-2">Delivery Fee</h4>
                    <p>Delivery fees vary depending on distance and are calculated at checkout.</p>
                    <p>Free delivery on orders over €75 within 5km.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-serif text-cream mb-2">Estimated Delivery Time</h4>
                    <p>30-50 minutes depending on your location and current order volume.</p>
                  </div>
                </div>
              </div>
              
              {/* Pickup Information */}
              <div>
                <h3 className="text-2xl font-serif text-gold mb-6">Pickup Information</h3>
                <div className="w-16 h-1 bg-gold/40 mb-8"></div>
                
                <div className="space-y-6 text-cream/80">
                  <div>
                    <h4 className="text-lg font-serif text-cream mb-2">Pickup Hours</h4>
                    <p>Monday - Friday: 12:00 PM - 10:00 PM</p>
                    <p>Saturday - Sunday: 12:00 PM - 10:30 PM</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-serif text-cream mb-2">Pickup Location</h4>
                    <p>123 Luxury Lane</p>
                    <p>Amsterdam, Netherlands</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-serif text-cream mb-2">Pickup Process</h4>
                    <p>Please provide your name and order number at our designated pickup counter.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-serif text-cream mb-2">Special Instructions</h4>
                    <p>You can add special instructions for your order during checkout.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-6 bg-charcoal rounded-lg border border-gold/20">
              <h3 className="text-xl font-serif text-gold mb-4">Food Quality & Packaging</h3>
              <p className="text-cream/80 leading-relaxed">
                At Dena, we take great care to ensure our takeaway and delivery items maintain the same exceptional quality as our in-restaurant dining. Our dishes are prepared with thermal-insulated packaging to preserve temperature and presentation. For the best experience, we recommend consuming your meal within 30 minutes of delivery or pickup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-gold mb-6">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-charcoal-light p-6 rounded-lg border border-gold/20">
                <h3 className="text-lg font-serif text-gold mb-2">Can I modify menu items for dietary restrictions?</h3>
                <p className="text-cream/80">
                  Yes, we can accommodate most dietary restrictions and preferences. Please include your requirements in the special instructions section when placing your order.
                </p>
              </div>
              
              <div className="bg-charcoal-light p-6 rounded-lg border border-gold/20">
                <h3 className="text-lg font-serif text-gold mb-2">What payment methods do you accept?</h3>
                <p className="text-cream/80">
                  We accept all major credit cards, debit cards, and mobile payment methods including Apple Pay and Google Pay. Cash is accepted for pickup orders only.
                </p>
              </div>
              
              <div className="bg-charcoal-light p-6 rounded-lg border border-gold/20">
                <h3 className="text-lg font-serif text-gold mb-2">Can I schedule an order in advance?</h3>
                <p className="text-cream/80">
                  Yes, you can place an order up to 7 days in advance for both delivery and pickup. Simply select your preferred date and time during checkout.
                </p>
              </div>
              
              <div className="bg-charcoal-light p-6 rounded-lg border border-gold/20">
                <h3 className="text-lg font-serif text-gold mb-2">What if there's an issue with my order?</h3>
                <p className="text-cream/80">
                  If you experience any issues with your order, please contact us immediately at +31 (0) 20 555 1234 or email us at info@denarestaurant.com. We're committed to ensuring your satisfaction.
                </p>
              </div>
              
              <div className="bg-charcoal-light p-6 rounded-lg border border-gold/20">
                <h3 className="text-lg font-serif text-gold mb-2">Do you offer group or corporate orders?</h3>
                <p className="text-cream/80">
                  Yes, we specialize in catering for group and corporate events. For orders serving 10 or more people, please contact us directly at least 24 hours in advance to ensure we can accommodate your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-light relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">Ready to Order?</h2>
            <p className="text-xl text-cream/90 mb-10 max-w-3xl mx-auto">
              Browse our menu and place your order now. Experience the exceptional flavors of Dena in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/menu"
                className="bg-gold hover:bg-gold-light text-charcoal font-semibold px-8 py-3 rounded-lg transition-elegant"
              >
                View Menu & Order
              </Link>
              <Link 
                href="/contact"
                className="border border-gold hover:bg-gold/10 text-gold font-semibold px-8 py-3 rounded-lg transition-elegant"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 