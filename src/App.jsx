import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ErrorBanner from "./components/ErrorBanner.jsx";
import { useProducts } from "./hooks/useProducts.js";
import { useDebouncedValue } from "./hooks/useDebouncedValue.js";

export default function App() {
  const { products, isLoading, error } = useProducts();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const debouncedQuery = useDebouncedValue(searchQuery, 200);

  const categories = useMemo(() => {
    const unique = new Set(products.map((product) => product.category));
    return Array.from(unique);
  }, [products]);

  const filteredProducts = useMemo(() => {
    const query = debouncedQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;

      const matchesQuery =
        query === "" || product.title.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [products, debouncedQuery, activeCategory]);

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  const handleCategorySelect = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-paper">
      <Header />

      <main className="max-w-6xl px-6 py-10 mx-auto sm:px-8">
        {error ? (
          <ErrorBanner message={error} />
        ) : (
          <>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="w-full sm:max-w-sm">
                <SearchBar
                  value={searchQuery}
                  onChange={handleSearchChange}
                  resultCount={filteredProducts.length}
                />
              </div>

              {!isLoading && categories.length > 0 && (
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onSelect={handleCategorySelect}
                />
              )}
            </div>

            <div className="mt-8">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <ProductGrid
                  products={filteredProducts}
                  isLoading={isLoading}
                />
              )}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
