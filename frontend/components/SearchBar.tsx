"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">
        Search items
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type item name…"
        className="mt-2 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}
