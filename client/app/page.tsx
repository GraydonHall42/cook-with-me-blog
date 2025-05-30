import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const recipes = [
  {
    title: "Spinach Arugula Salad with Easy Maple-Dijon Vinaigrette",
    image: "/images/spinach-arugula-salad.jpg",
  },
  {
    title: "Crispy Garlic Soy Chicken Wings (Baked or Air Fryer Recipe)",
    image: "/images/crispy-garlic-chicken-wings.jpg",
  },
  {
    title: "Iced Dirty Matcha Latte Recipe (So Easy)",
    image: "/images/iced-matcha-latte.jpg",
  },
  {
    title: "Garlic Hot Honey Chicken Wings (Extra Crispy)",
    image: "/images/honey-chicken-wings.jpg",
  },
  {
    title: "Roasted Asparagus and Carrots with Chunky Pesto",
    image: "/images/roasted-asparagus-carrots.jpg",
  },
  {
    title: "Strawberry Banana Pudding with Matcha",
    image: "/images/strawberry-banana-pudding.jpg",
  },
  {
    title: "Creamy Bolognese Sauce: The Best Pasta I've Ever Made",
    image: "/images/bolognese-pasta-fixed.jpg",
  },
  {
    title: "The Viral Fish Tacos Everyone Loves (with Video)",
    image: "/images/fish-tacos-new.jpg",
  },
  {
    title: "Oven Baked St. Louis Style Ribs (Just 3 Ingredients!)",
    image: "/images/st-louis-ribs.jpg",
  },
  {
    title: "Ham and Mushroom Pizza (with Store-Bought Pizza Dough)",
    image: "/images/ham-mushroom-pizza.jpg",
  },
  {
    title: "Whipped Bone Marrow Butter with Garlic and Herbs",
    image: "/images/bone-marrow-butter.jpg",
  },
  {
    title: "Easy Miso Butter Salmon (Quick Dinner)",
    image: "/images/miso-butter-salmon.jpg",
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-4xl font-bold text-blue-600" style={{ fontFamily: "cursive" }}>
                The Butter Table
              </h1>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">🧈</div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/recipes" className="text-orange-600 hover:text-orange-700 font-medium">
              Recipes
            </Link>
            <Link href="/about" className="text-orange-600 hover:text-orange-700 font-medium">
              About
            </Link>
            <Link href="/work-with-me" className="text-orange-600 hover:text-orange-700 font-medium">
              Work with Me
            </Link>
          </nav>

          <div className="relative">
            <Input
              type="search"
              placeholder="Search recipes..."
              className="w-48 bg-white border-gray-300 rounded-full pl-4 pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">Recipe Index</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipes.map((recipe, index) => (
              <Link key={index} href={`/recipe/${index + 1}`} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-gray-800 font-medium leading-tight group-hover:text-orange-600 transition-colors">
                  {recipe.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-600">
              1
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600">
              2
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600">
              3
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f1eb] border-t border-gray-200 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <Link href="/" className="flex items-center space-x-2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-blue-600" style={{ fontFamily: "cursive" }}>
                The Butter Table
              </h2>
            </Link>

            <div className="flex flex-col items-center space-y-4">
              <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-8 py-2">Stay In Touch</Button>

              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/recipes" className="hover:text-orange-600">
                Recipes
              </Link>
              <Link href="/about" className="hover:text-orange-600">
                About
              </Link>
              <Link href="/work-with-me" className="hover:text-orange-600">
                Work with Me
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p className="mb-2">📍 Brooklyn, New York</p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs">
                <span>Copyright © 2024 The Butter Table. All Rights Reserved.</span>
                <Link href="/sitemap" className="hover:text-orange-600">
                  Sitemap
                </Link>
                <Link href="/privacy" className="hover:text-orange-600">
                  Privacy Policy
                </Link>
                <Link href="/accessibility" className="hover:text-orange-600">
                  Accessibility Statement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
