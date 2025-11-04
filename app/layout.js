import './globals.css';

export const metadata = {
  title: 'Agentic App',
  description: 'Demonstra??o r?pida do que ? poss?vel fazer aqui.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  );
}
