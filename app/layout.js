import "./globals.css";

import { Providers } from "./providers";
import theme from "@/utils/theme";

import { hankenGrotesk } from "@/utils";

export const metadata = {
  title: "Admin Dashboard",
  description: "Work Ambitions Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers theme={theme}>{children}</Providers>
      </body>
    </html>
  );
}
