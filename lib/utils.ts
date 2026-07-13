export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function toAbsoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `https://atikulislam.me${path}`;
}
