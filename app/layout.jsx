import "../globals.css";

export const metadata = {
  title: "Azamat | Front-end React Разработчик",
  description: "Увлеченный фронтенд-разработчик React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-screen antialiased grainy font-sans"}>
        {children}
      </body>
    </html>
  );
}
