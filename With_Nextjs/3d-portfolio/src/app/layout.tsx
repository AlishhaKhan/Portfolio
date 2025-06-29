
import "./globals.css";

export const metadata = {
  title: "3D Portfolio",
  description: "My awesome portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full overflow-y-auto overflow-x-hidden bg-darkBg">
       
        {children}
      </body>
    </html>
  );
}
