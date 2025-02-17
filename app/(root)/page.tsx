import ProductList from "@/components/shared/product/Product-List"
import { getLatestProducts } from "@/lib/actions/product.actions"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
}

const HomePage = async () => {

  const latestProducts = await getLatestProducts()

  return (
    <div>
      <h1>Home Page</h1>
      <ProductList data={latestProducts} title="Product List" limit={4} />
    </div>

  )
}

export default HomePage
