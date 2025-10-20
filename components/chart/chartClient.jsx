"use client";
import AreaChartPlot from "./AreaChartPlot";
import BarChartPlot from "./BarChartPlot";
import PieChartPlot from "./PieChartPlot";
import LineChartPlot from "./LineChartPlot";
import RadarChartPlot from "./RadarChartPlot";
import { getProducts } from "@/productData/productData";
import { useState, useEffect, useMemo } from "react";
import { use } from "react";

function chartClient() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getProducts();
        console.log(" Products fetched from Supabase:", data);
        if (!mounted) return;
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error in getProducts():", err);
        if (!mounted) return;
        setProducts([]);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const derivedData = useMemo(() => {
    const names = products.map((p) => p.name ?? `#${p.id}`);
    const prices = products.map((p) => Number(p.price ?? 0));
    const stocks = products.map((p) => Number(p.stock ?? 0));
    const categories = products.reduce((acc, p) => {
      const c = p.category ?? "Unknown";
      acc[c] = (acc[c] || 0) + Number(p.stock ?? 0);
      return acc;
    }, {});
    return {
      names,
      prices,
      stocks,
      categories,
    };
  }, [products]);

  if (loading) return <p>Loading charts...</p>;

  if (!products.length)
    return <p className="p-4 text-gray-300">No products found.</p>;

  return (
    <>
      <section className="flex my-4 px-4 gap-3">
        <div className="w-1/2 h-[300px] bg-gray-700 rounded">
          <AreaChartPlot data={products} derivedData={derivedData} />
        </div>

        <div className="w-1/2 h-[300px] bg-gray-700 rounded">
          <BarChartPlot data={products} derivedData={derivedData} />
        </div>
      </section>

      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded">
          <PieChartPlot data={products} derivedData={derivedData} />
        </div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded">
          <LineChartPlot data={products} derivedData={derivedData} />
        </div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded">
          <RadarChartPlot data={products} derivedData={derivedData} />
        </div>
      </section>
    </>
  );
}

export default chartClient;
