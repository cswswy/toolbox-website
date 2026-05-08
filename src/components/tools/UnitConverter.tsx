"use client";

import { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";

const units = {
  length: {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    inches: 39.3701,
    feet: 3.28084,
    yards: 1.09361,
    miles: 0.000621371,
  },
  weight: {
    kilograms: 1,
    grams: 1000,
    milligrams: 1000000,
    pounds: 2.20462,
    ounces: 35.274,
  },
  temperature: {
    celsius: (v: number) => v,
    fahrenheit: (v: number) => (v * 9/5) + 32,
    kelvin: (v: number) => v + 273.15,
  }
};

type Category = keyof typeof units;

export default function UnitConverter() {
  const [category, setCategory] = useState<Category>("length");
  const [value, setValue] = useState<string>("1");
  const [fromUnit, setFromUnit] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const catUnits = Object.keys(units[category]);
    setFromUnit(catUnits[0]);
    setToUnit(catUnits[1]);
  }, [category]);

  useEffect(() => {
    convert();
  }, [value, fromUnit, toUnit, category]);

  const convert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult(null);
      return;
    }

    if (category === "temperature") {
      // Temperature is special
      let celsius = 0;
      if (fromUnit === "celsius") celsius = numValue;
      else if (fromUnit === "fahrenheit") celsius = (numValue - 32) * 5/9;
      else if (fromUnit === "kelvin") celsius = numValue - 273.15;

      if (toUnit === "celsius") setResult(celsius);
      else if (toUnit === "fahrenheit") setResult((celsius * 9/5) + 32);
      else if (toUnit === "kelvin") setResult(celsius + 273.15);
    } else {
      const cat = units[category] as Record<string, number>;
      const inBase = numValue / cat[fromUnit];
      const converted = inBase * cat[toUnit];
      setResult(converted);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm space-y-8">
      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-zinc-800 rounded-xl">
        {(Object.keys(units) as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold capitalize transition-all ${
              category === cat 
                ? "bg-white dark:bg-zinc-700 text-blue-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700 dark:text-zinc-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <label className="text-sm font-medium text-slate-500">From</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-4 text-2xl font-bold bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl outline-none"
          >
            {Object.keys(units[category]).map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-center sm:pt-8">
          <button 
            onClick={() => {
              const temp = fromUnit;
              setFromUnit(toUnit);
              setToUnit(temp);
            }}
            className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            <ArrowRightLeft className="w-6 h-6 rotate-90 sm:rotate-0" />
          </button>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-slate-500">To</label>
          <div className="w-full p-4 text-2xl font-bold bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl text-blue-600">
            {result !== null ? result.toLocaleString(undefined, { maximumFractionDigits: 6 }) : "-"}
          </div>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl outline-none"
          >
            {Object.keys(units[category]).map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
