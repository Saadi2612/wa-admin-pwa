import "./globals.css";

import { Providers } from "./providers";
import theme from "@/utils/theme";

import { hankenGrotesk } from "@/utils";

const APP_NAME = "Work Ambitions";
const APP_DEFAULT_TITLE = "Work Ambitions";
const APP_TITLE_TEMPLATE = "%1$s | %2$s";
const APP_DESCRIPTION = "Work Ambitions Admin Dashboard";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
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
