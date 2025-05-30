import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const recipes = [
  {
    id: 1,
    title: "Spinach Arugula Salad with Easy Maple-Dijon Vinaigrette",
    image: "/images/spinach-arugula-salad.jpg",
    description:
      "This vibrant spinach arugula salad is the perfect balance of fresh, peppery greens with a sweet and tangy maple-dijon vinaigrette. The combination of baby spinach and arugula creates a wonderful texture contrast, while the homemade dressing brings everything together with its perfect blend of maple syrup, Dijon mustard, and olive oil. This salad is not only delicious but also packed with nutrients, making it an ideal side dish or light lunch. The maple-dijon vinaigrette is incredibly versatile and can be used on other salads too. What makes this recipe special is how the sweetness of the maple syrup perfectly balances the sharpness of the Dijon mustard, creating a dressing that's both sophisticated and approachable. Fresh herbs and a sprinkle of toasted nuts can elevate this salad even further, making it restaurant-quality at home.",
  },
  {
    id: 2,
    title: "Crispy Garlic Soy Chicken Wings (Baked or Air Fryer Recipe)",
    image: "/images/crispy-garlic-chicken-wings.jpg",
    description:
      "These crispy garlic soy chicken wings are absolutely addictive! The secret to their incredible flavor lies in the perfect marinade that combines savory soy sauce with aromatic garlic and a touch of sweetness. Whether you choose to bake them in the oven or use an air fryer, these wings come out perfectly crispy on the outside and juicy on the inside. The garlic soy glaze caramelizes beautifully during cooking, creating that irresistible sticky coating that makes these wings impossible to put down. This recipe is perfect for game day, parties, or just a delicious weeknight dinner. The best part? They're much healthier than traditional fried wings but don't compromise on flavor or texture. Serve them with some fresh scallions and sesame seeds for an extra pop of flavor and color.",
  },
  {
    id: 3,
    title: "Iced Dirty Matcha Latte Recipe (So Easy)",
    image: "/images/iced-matcha-latte.jpg",
    description:
      "This iced dirty matcha latte is the perfect fusion of earthy matcha and bold espresso, creating a drink that's both energizing and delicious. The 'dirty' element comes from adding a shot of espresso to the traditional matcha latte, giving you double the caffeine kick and a complex flavor profile that's absolutely divine. The creamy milk balances the intensity of both the matcha and espresso, while a touch of sweetener brings everything together harmoniously. This recipe is incredibly easy to make at home and costs a fraction of what you'd pay at a coffee shop. The key to a perfect dirty matcha latte is using high-quality matcha powder and properly whisking it to avoid any lumps. Serve it over ice for a refreshing pick-me-up that's perfect for warm days or whenever you need an extra boost of energy.",
  },
  {
    id: 4,
    title: "Garlic Hot Honey Chicken Wings (Extra Crispy)",
    image: "/images/honey-chicken-wings.jpg",
    description:
      "These garlic hot honey chicken wings are the perfect combination of sweet, spicy, and savory flavors that will have you licking your fingers clean! The secret to their extra crispy texture lies in a special coating technique that ensures maximum crunchiness. The hot honey glaze is where the magic happens - it's a perfect balance of local honey, garlic, and just the right amount of heat from chili flakes. These wings are baked to perfection, making them a healthier alternative to deep-fried wings without sacrificing any of the flavor or texture. The garlic adds a wonderful aromatic element that complements both the sweetness of the honey and the heat from the spices. Whether you're hosting a party or just want to treat yourself to something special, these wings are guaranteed to be a crowd-pleaser.",
  },
  {
    id: 5,
    title: "Roasted Asparagus and Carrots with Chunky Pesto",
    image: "/images/roasted-asparagus-carrots.jpg",
    description:
      "This roasted asparagus and carrots with chunky pesto is a celebration of fresh, seasonal vegetables at their finest. The high-heat roasting brings out the natural sweetness in both the asparagus and carrots, while creating those beautiful caramelized edges that add so much flavor. The chunky pesto is made with fresh basil, pine nuts, garlic, and Parmesan cheese, creating a vibrant green sauce that's bursting with flavor. Unlike traditional smooth pesto, this chunky version has more texture and allows each ingredient to shine through. The combination of the roasted vegetables with the fresh, herbaceous pesto creates a dish that's both elegant and rustic. This recipe is perfect as a side dish for any protein or can even stand alone as a light vegetarian meal. It's also incredibly versatile - you can use whatever vegetables are in season.",
  },
  {
    id: 6,
    title: "Strawberry Banana Pudding with Matcha",
    image: "/images/strawberry-banana-pudding.jpg",
    description:
      "This strawberry banana pudding with matcha is a unique twist on the classic comfort dessert that will surprise and delight your taste buds. The earthy, slightly bitter notes of matcha create a beautiful contrast with the sweet strawberries and creamy bananas. The pudding itself is silky smooth and incredibly rich, made with real vanilla and high-quality matcha powder. Fresh strawberries add bursts of tartness and color, while ripe bananas contribute natural sweetness and creaminess. The matcha not only adds a sophisticated flavor but also gives the pudding a beautiful pale green color that's Instagram-worthy. This dessert is perfect for those who want to try something different from traditional puddings. It's also a great way to introduce matcha to those who might be hesitant about its unique flavor, as the familiar fruits help balance its intensity.",
  },
  {
    id: 7,
    title: "Creamy Bolognese Sauce: The Best Pasta I've Ever Made",
    image: "/images/bolognese-pasta-fixed.jpg",
    description:
      "This creamy Bolognese sauce is truly the best pasta sauce you'll ever make - rich, complex, and absolutely soul-satisfying. The secret lies in the slow cooking process that allows all the flavors to meld together beautifully. We start with a classic soffritto of onions, carrots, and celery, then add high-quality ground beef and pork for depth of flavor. The addition of cream at the end creates that luxurious, velvety texture that coats every strand of pasta perfectly. San Marzano tomatoes and a splash of red wine add acidity and complexity, while fresh herbs brighten the entire dish. This sauce simmers low and slow for hours, developing layers of flavor that simply can't be rushed. The result is a Bolognese that's restaurant-quality but made with love in your own kitchen. Serve it over fresh pappardelle or your favorite pasta for an unforgettable meal.",
  },
  {
    id: 8,
    title: "The Viral Fish Tacos Everyone Loves (with Video)",
    image: "/images/fish-tacos-new.jpg",
    description:
      "These viral fish tacos have taken social media by storm, and for good reason - they're absolutely incredible! The fish is perfectly seasoned and cooked until flaky and tender, then nestled in warm corn tortillas with a rainbow of fresh toppings. What makes these tacos special is the combination of textures and flavors: crispy cabbage slaw, creamy avocado, tangy lime crema, and fresh cilantro all come together in perfect harmony. The fish is seasoned with a blend of spices that includes cumin, chili powder, and paprika, giving it a beautiful color and amazing flavor. The lime crema is made with Greek yogurt, making it lighter than traditional sour cream but just as delicious. These tacos are not only delicious but also relatively healthy, packed with lean protein and fresh vegetables. They're perfect for a quick weeknight dinner or casual entertaining.",
  },
  {
    id: 9,
    title: "Oven Baked St. Louis Style Ribs (Just 3 Ingredients!)",
    image: "/images/st-louis-ribs.jpg",
    description:
      "These oven-baked St. Louis style ribs prove that sometimes the simplest recipes are the most delicious. With just three ingredients, you can create fall-off-the-bone tender ribs that rival any barbecue joint. The secret is in the low and slow cooking method that breaks down the tough connective tissues, resulting in incredibly tender meat. St. Louis style ribs are cut from the spare ribs and have a rectangular shape that makes them perfect for even cooking. The dry rub penetrates deep into the meat during the long cooking process, creating a beautiful bark on the outside while keeping the inside juicy and flavorful. These ribs are perfect for when you want that barbecue flavor but don't have access to a grill or smoker. The oven method is foolproof and produces consistent results every time. Serve them with your favorite barbecue sauce and classic sides for the ultimate comfort food experience.",
  },
  {
    id: 10,
    title: "Ham and Mushroom Pizza (with Store-Bought Pizza Dough)",
    image: "/images/ham-mushroom-pizza.jpg",
    description:
      "This ham and mushroom pizza is a classic combination that never goes out of style, and using store-bought pizza dough makes it incredibly easy to prepare at home. The key to a great pizza is balancing the toppings so that each ingredient can shine through. The ham adds a salty, savory element while the mushrooms contribute an earthy, umami-rich flavor. A good quality mozzarella cheese melts beautifully and creates those Instagram-worthy cheese pulls we all love. The pizza sauce is kept simple to let the toppings be the star, but it's seasoned perfectly with herbs and garlic. Using store-bought dough doesn't mean compromising on quality - many grocery stores now carry excellent fresh pizza dough that rivals homemade. The trick is to let the dough come to room temperature before stretching it, which makes it much easier to work with and prevents tearing.",
  },
  {
    id: 11,
    title: "Whipped Bone Marrow Butter with Garlic and Herbs",
    image: "/images/bone-marrow-butter.jpg",
    description:
      "This whipped bone marrow butter with garlic and herbs is the ultimate indulgent spread that will elevate any bread or steak to gourmet status. Bone marrow is often called 'meat butter' for its rich, creamy texture and intense flavor. When whipped with real butter, garlic, and fresh herbs, it becomes something truly extraordinary. The process involves roasting the bone marrow until it's soft and spreadable, then whipping it with softened butter to create a light, airy texture. Fresh garlic adds a sharp bite that cuts through the richness, while herbs like parsley and thyme add freshness and color. This compound butter is perfect for spreading on crusty bread, melting over steaks, or tossing with pasta for an instant upgrade. While it might sound intimidating, bone marrow is actually quite easy to work with and can be found at most butcher shops. The result is a luxurious spread that tastes like it came from a high-end restaurant.",
  },
  {
    id: 12,
    title: "Easy Miso Butter Salmon (Quick Dinner)",
    image: "/images/miso-butter-salmon.jpg",
    description:
      "This easy miso butter salmon is the perfect weeknight dinner that feels fancy but comes together in just 20 minutes. The combination of umami-rich miso paste with creamy butter creates a glaze that's both complex and comforting. Miso adds a deep, savory flavor that complements the natural richness of salmon perfectly. The butter helps to mellow the intensity of the miso while adding richness and helping the glaze adhere to the fish. The salmon is cooked until it's flaky and tender, with a beautiful caramelized exterior from the miso glaze. This dish is not only delicious but also packed with healthy omega-3 fatty acids and probiotics from the miso. The recipe is incredibly forgiving - even if you're new to cooking fish, it's hard to go wrong with this method. Serve it with steamed rice and vegetables for a complete, restaurant-quality meal that you can make at home in no time.",
  },
]

interface RecipePageProps {
  params: {
    id: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipeId = Number.parseInt(params.id)
  const recipe = recipes.find((r) => r.id === recipeId)

  if (!recipe) {
    return (
      <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Recipe Not Found</h1>
          <Link href="/">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Back to Recipes</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Recipes</span>
          </Link>

          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold text-blue-600" style={{ fontFamily: "cursive" }}>
              The Butter Table
            </h1>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">🧈</div>
          </Link>
        </div>
      </header>

      {/* Recipe Content */}
      <main className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Image */}
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Recipe Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">{recipe.title}</h1>

          {/* Recipe Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">{recipe.description}</p>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">View More Recipes</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
