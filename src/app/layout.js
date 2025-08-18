import { Noto_Sans} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
 subsets: ["latin"],
});


export const metadata = {
  title: "JKD",
  description: "Orginazation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} flex flex-col items-center
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
