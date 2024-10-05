import { useState } from "react";

const useFilters = (initialProducts) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProducts = initialProducts.filter((product) => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || product.category === selectedFilter;
    return matchesSearchTerm && matchesFilter;
  });

  return {
    searchTerm,
    setSearchTerm,
    selectedFilter,
    setSelectedFilter,
    filteredProducts,
  };
};

export default useFilters;
