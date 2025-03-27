import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Dena Restaurant",
  description: "Explore our exquisite menu featuring the finest seasonal ingredients and culinary traditions.",
};

export default function MenuPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Elegant plated dish"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6 drop-shadow-lg text-shadow-lg">
            Our <span className="gold-text">Menu</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            A culinary journey through seasons and traditions
          </p>
        </div>
      </section>

      {/* Menu Introduction */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gold mb-6">Seasonal Excellence</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            <p className="text-cream/90 leading-relaxed mb-6">
              Our menu changes with the seasons, ensuring that we always use the freshest, most flavorful ingredients at their peak. Each dish is crafted with precision and passion by our talented culinary team.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Chef Alexandra Dena draws inspiration from European traditions while incorporating global flavors and techniques to create a dining experience that is both familiar and surprising.
            </p>
          </div>

          {/* Menu Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#starters" className="px-6 py-2 bg-charcoal hover:bg-charcoal-dark border border-gold/20 rounded-full text-gold transition-elegant">Starters</a>
            <a href="#mains" className="px-6 py-2 bg-charcoal hover:bg-charcoal-dark border border-gold/20 rounded-full text-gold transition-elegant">Main Courses</a>
            <a href="#desserts" className="px-6 py-2 bg-charcoal hover:bg-charcoal-dark border border-gold/20 rounded-full text-gold transition-elegant">Desserts</a>
            <a href="#tasting" className="px-6 py-2 bg-charcoal hover:bg-charcoal-dark border border-gold/20 rounded-full text-gold transition-elegant">Tasting Menu</a>
            <a href="#wines" className="px-6 py-2 bg-charcoal hover:bg-charcoal-dark border border-gold/20 rounded-full text-gold transition-elegant">Wine Selection</a>
          </div>
        </div>
      </section>

      {/* Starters Section */}
      <section id="starters" className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gold mb-2 text-center">Starters</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Menu Item 1 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Hand-Dived Scallops</h3>
                  <span className="text-gold font-medium">€21</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Cauliflower Purée, Black Truffle, Hazelnut Crumb</p>
                <p className="text-cream/80 text-sm">Delicately seared scallops with a velvety cauliflower purée, shaved black truffle, and a textural contrast of toasted hazelnut crumb.</p>
              </div>

              {/* Menu Item 2 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Heritage Beetroot</h3>
                  <span className="text-gold font-medium">€16</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Goat Cheese Mousse, Walnut, Aged Balsamic</p>
                <p className="text-cream/80 text-sm">A symphony of colors and textures featuring multi-colored beetroot, light goat cheese mousse, candied walnuts, and aged balsamic reduction.</p>
              </div>

              {/* Menu Item 3 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Foie Gras Terrine</h3>
                  <span className="text-gold font-medium">€24</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Spiced Fig Chutney, Brioche, Sauternes Gel</p>
                <p className="text-cream/80 text-sm">Silky foie gras terrine accompanied by aromatic spiced fig chutney, house-made toasted brioche, and a delicate Sauternes wine gel.</p>
              </div>

              {/* Menu Item 4 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Wild Mushroom Velouté</h3>
                  <span className="text-gold font-medium">€18</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Cep Foam, Pickled Mushrooms, Thyme Oil</p>
                <p className="text-cream/80 text-sm">A silky wild mushroom soup with an airy cep foam, contrasting pickled wild mushrooms, and aromatic thyme-infused olive oil.</p>
              </div>

              {/* Menu Item 5 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Dutch Oysters</h3>
                  <span className="text-gold font-medium">€22</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Mignonette, Lemon, Horseradish Snow</p>
                <p className="text-cream/80 text-sm">Fresh Dutch oysters served with classic shallot mignonette, lemon, and a surprising horseradish snow that adds a gentle heat.</p>
              </div>

              {/* Menu Item 6 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Steak Tartare</h3>
                  <span className="text-gold font-medium">€20</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Smoked Egg Yolk, Capers, Sourdough Crisps</p>
                <p className="text-cream/80 text-sm">Hand-cut beef tenderloin with traditional garnishes, a smoked egg yolk, capers, cornichons, and house-made sourdough crisps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section id="mains" className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gold mb-2 text-center">Main Courses</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Menu Item 1 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Aged Dutch Beef Ribeye</h3>
                  <span className="text-gold font-medium">€42</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Pommes Anna, Charred Onion, Red Wine Jus</p>
                <p className="text-cream/80 text-sm">28-day dry-aged ribeye, cooked to perfection, served with layered potato cake, sweet charred onions, and a rich red wine reduction.</p>
              </div>

              {/* Menu Item 2 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">North Sea Turbot</h3>
                  <span className="text-gold font-medium">€38</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Saffron Risotto, Mussel Velouté, Sea Herbs</p>
                <p className="text-cream/80 text-sm">Line-caught turbot fillet on a bed of saffron risotto, surrounded by a light mussel velouté and garnished with fresh sea herbs.</p>
              </div>

              {/* Menu Item 3 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Herb-Crusted Lamb Rack</h3>
                  <span className="text-gold font-medium">€39</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Ratatouille, Potato Fondant, Rosemary Jus</p>
                <p className="text-cream/80 text-sm">Tender herb-crusted lamb rack with a Provençal-style ratatouille, buttery potato fondant, and aromatic rosemary-infused jus.</p>
              </div>

              {/* Menu Item 4 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Roasted Guinea Fowl</h3>
                  <span className="text-gold font-medium">€36</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Wild Mushrooms, Parsnip Purée, Madeira Sauce</p>
                <p className="text-cream/80 text-sm">Succulent guinea fowl with a medley of wild mushrooms, silky parsnip purée, and finished with a glossy Madeira sauce.</p>
              </div>

              {/* Menu Item 5 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Butter-Poached Lobster</h3>
                  <span className="text-gold font-medium">€44</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Fennel, Orange, Champagne Sauce</p>
                <p className="text-cream/80 text-sm">Butter-poached Dutch lobster with braised fennel, segments of orange for brightness, and a delicate champagne butter sauce.</p>
              </div>

              {/* Menu Item 6 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Wild Mushroom Risotto</h3>
                  <span className="text-gold font-medium">€32</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Porcini, Black Truffle, Aged Parmesan</p>
                <p className="text-cream/80 text-sm">Creamy Arborio rice cooked with porcini stock, assorted wild mushrooms, shaved black truffle, and aged Parmesan cheese.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section id="desserts" className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gold mb-2 text-center">Desserts</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Menu Item 1 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Dark Chocolate Délice</h3>
                  <span className="text-gold font-medium">€14</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Salted Caramel, Hazelnut Praline, Gold Leaf</p>
                <p className="text-cream/80 text-sm">Rich dark chocolate délice with a touch of fleur de sel caramel, crunchy hazelnut praline, and an elegant gold leaf garnish.</p>
              </div>

              {/* Menu Item 2 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Vanilla Bean Crème Brûlée</h3>
                  <span className="text-gold font-medium">€12</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Seasonal Berries, Shortbread</p>
                <p className="text-cream/80 text-sm">Classic vanilla bean crème brûlée with a perfectly caramelized sugar crust, served with seasonal berries and house-made shortbread.</p>
              </div>

              {/* Menu Item 3 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Apple Tarte Tatin</h3>
                  <span className="text-gold font-medium">€13</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Cinnamon Ice Cream, Calvados Caramel</p>
                <p className="text-cream/80 text-sm">Upside-down caramelized apple tart served warm with house-made cinnamon ice cream and a decadent Calvados caramel sauce.</p>
              </div>

              {/* Menu Item 4 */}
              <div className="border-b border-gold/20 pb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-serif text-cream">Lemon Verbena Panna Cotta</h3>
                  <span className="text-gold font-medium">€12</span>
                </div>
                <p className="text-cream/70 italic text-sm mb-3">Blackberry, White Chocolate, Lemon Balm</p>
                <p className="text-cream/80 text-sm">Silky lemon verbena-infused panna cotta paired with blackberry coulis, white chocolate shards, and fresh lemon balm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tasting Menu Section */}
      <section id="tasting" className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gold mb-2 text-center">Chef's Tasting Menu</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            <p className="text-center text-cream/90 mb-16 max-w-2xl mx-auto">
              Experience Chef Alexandra's culinary vision with our seasonal tasting menu. A journey through the finest ingredients and techniques, showcasing the essence of Dena.
            </p>

            <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif text-gold mb-3">Six-Course Journey</h3>
                <p className="text-cream/70">€95 per person</p>
                <p className="text-cream/70 text-sm mt-1">Wine Pairing Available | €65</p>
              </div>

              <div className="space-y-8">
                <div className="border-b border-gold/20 pb-6">
                  <p className="text-cream font-serif text-center mb-2">Amuse-Bouche</p>
                  <p className="text-cream/70 text-center text-sm italic">Chef's Selection</p>
                </div>

                <div className="border-b border-gold/20 pb-6">
                  <p className="text-cream font-serif text-center mb-2">First Course</p>
                  <p className="text-cream/70 text-center text-sm italic">Seasonal Appetizer</p>
                </div>

                <div className="border-b border-gold/20 pb-6">
                  <p className="text-cream font-serif text-center mb-2">Second Course</p>
                  <p className="text-cream/70 text-center text-sm italic">Fish or Seafood</p>
                </div>

                <div className="border-b border-gold/20 pb-6">
                  <p className="text-cream font-serif text-center mb-2">Intermezzo</p>
                  <p className="text-cream/70 text-center text-sm italic">Palate Cleanser</p>
                </div>

                <div className="border-b border-gold/20 pb-6">
                  <p className="text-cream font-serif text-center mb-2">Main Course</p>
                  <p className="text-cream/70 text-center text-sm italic">Chef's Selection of Meat or Fish</p>
                </div>

                <div className="border-b border-gold/20 pb-6">
                  <p className="text-cream font-serif text-center mb-2">Pre-Dessert</p>
                  <p className="text-cream/70 text-center text-sm italic">Sweet Transition</p>
                </div>

                <div>
                  <p className="text-cream font-serif text-center mb-2">Dessert</p>
                  <p className="text-cream/70 text-center text-sm italic">Seasonal Creation</p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-cream/80 text-sm mb-2">Vegetarian and vegan tasting menus available upon request.</p>
                <p className="text-cream/80 text-sm">Please inform us of any dietary requirements when making your reservation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Selection Section */}
      <section id="wines" className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gold mb-2 text-center">Wine Selection</h2>
            <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
            <p className="text-center text-cream/90 mb-16 max-w-2xl mx-auto">
              Our sommelier has curated an exceptional wine list featuring both celebrated vineyards and hidden gems from around the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-serif text-gold mb-6 border-b border-gold/20 pb-2">Champagne & Sparkling</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-cream">Dom Pérignon, Vintage</span>
                    <span className="text-gold">€220</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Ruinart, Blanc de Blancs</span>
                    <span className="text-gold">€110</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Franciacorta, Ca' del Bosco</span>
                    <span className="text-gold">€75</span>
                  </li>
                </ul>

                <h3 className="text-xl font-serif text-gold mt-10 mb-6 border-b border-gold/20 pb-2">White Wines</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-cream">Chablis Grand Cru, William Fèvre</span>
                    <span className="text-gold">€95</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Sancerre, Pascal Cotat</span>
                    <span className="text-gold">€68</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Puligny-Montrachet, Louis Jadot</span>
                    <span className="text-gold">€120</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Riesling, Egon Müller</span>
                    <span className="text-gold">€85</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif text-gold mb-6 border-b border-gold/20 pb-2">Red Wines</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-cream">Château Margaux, Bordeaux</span>
                    <span className="text-gold">€320</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Barolo, Giacomo Conterno</span>
                    <span className="text-gold">€150</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Brunello di Montalcino, Biondi-Santi</span>
                    <span className="text-gold">€180</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Penfolds Grange, Australia</span>
                    <span className="text-gold">€290</span>
                  </li>
                </ul>

                <h3 className="text-xl font-serif text-gold mt-10 mb-6 border-b border-gold/20 pb-2">Dessert Wines</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-cream">Sauternes, Château d'Yquem</span>
                    <span className="text-gold">€180</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Tokaji Aszú 5 Puttonyos</span>
                    <span className="text-gold">€95</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-cream">Royal Tokaji, Blue Label</span>
                    <span className="text-gold">€70</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-cream/80 text-sm">Our full wine list is available upon request.</p>
              <p className="text-cream/80 text-sm">Our sommelier will be delighted to assist with recommendations to complement your meal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-light relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">Experience Our Menu</h2>
            <p className="text-xl text-cream/90 mb-10 max-w-3xl mx-auto">
              Join us for an unforgettable dining experience featuring Chef Alexandra's seasonal creations. We look forward to welcoming you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/reservations" className="bg-gold hover:bg-gold-light text-charcoal font-semibold px-8 py-3 rounded-lg transition-elegant">
                Make a Reservation
              </a>
              <a href="/contact" className="border border-gold hover:bg-gold/10 text-gold font-semibold px-8 py-3 rounded-lg transition-elegant">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 