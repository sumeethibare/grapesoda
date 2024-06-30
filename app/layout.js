import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigate from "@/modules/navigation/Navigate";
import Base from "@/modules/base/Base";
import AnimatedCursor from "react-animated-cursor"

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "sumeet hibare",
  description: "designer & developer just for fun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar scroll-smooth">
      <body className={space.className}>
        <Navigate />
        <AnimatedCursor
          innerSize={6}
          outerSize={9}
          color='193, 11, 111'
          outerAlpha={0.1}
          innerScale={0.1}
          outerScale={8}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        {children}
        <Base />
      </body>
    </html>
  );
}
