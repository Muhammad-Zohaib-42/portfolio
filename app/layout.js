import { Poppins } from "next/font/google";
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Muhammad Zohaib | Portfolio",
  description: "Frontend Developer Portfolio showcasing projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
