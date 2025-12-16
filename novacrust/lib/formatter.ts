export default function formatCurrency(value: string) {
  const numericValue = value.replace(/[^0-9.]/g, "");

  const [intPart, decimalPart] = numericValue.split(".");

  const formattedInt = parseInt(intPart || "0", 10).toLocaleString();

  const formattedDecimal =
    decimalPart !== undefined ? decimalPart.slice(0, 2).padEnd(2, "0") : "00";

  return `${formattedInt}.${formattedDecimal}`;
}
