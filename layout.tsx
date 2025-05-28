import './globals.css'

export const metadata = {
  title: 'Treino Personalizado',
  description: 'Monte seu treino com base em suas metas!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
