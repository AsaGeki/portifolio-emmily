export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function toWhatsAppLink({
  countryCode,
  phone,
  text,
}: {
  countryCode: string;
  phone: string;
  text?: string;
}) {
  const number = `${digitsOnly(countryCode)}${digitsOnly(phone)}`;
  const base = `https://wa.me/${number}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

