import "./globals.css";

export const metadata = {
  title: "Ideas from: Voice-to-Code Generator",
  description: "Revolutionary AI solution based on Ideas from: Voice-to-Code Generator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}