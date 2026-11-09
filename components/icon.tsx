import {
  Boxes, Building2, Cloud, Compass, Factory, Globe, GraduationCap, HardHat, HeartPulse, Landmark,
  LifeBuoy, Network, Package, PenTool, Plug, RefreshCw, ShoppingBag, Smartphone, Sparkles, Truck,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/content/types";

// Content files store a string key, so icons can cross the server/client boundary.
const icons: Record<IconKey, LucideIcon> = {
  boxes: Boxes, globe: Globe, smartphone: Smartphone, plug: Plug, sparkles: Sparkles,
  refresh: RefreshCw, lifebuoy: LifeBuoy, cloud: Cloud, pen: PenTool, compass: Compass,
  package: Package, factory: Factory, truck: Truck, building: Building2, bag: ShoppingBag,
  graduation: GraduationCap, hardhat: HardHat, heart: HeartPulse, landmark: Landmark, network: Network,
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const Glyph = icons[name];
  return <Glyph aria-hidden className={className} strokeWidth={1.5} />;
}
