import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

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
            <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium">
              Recipes
            </Link>
            <Link href="/about" className="text-orange-600 hover:text-orange-700 font-medium">
              About
            </Link>
          </nav>

        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">Recipes</h2>

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
        </div>
      </main>
    </div>
  )
}
