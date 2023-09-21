import '../styles/globals.scss'
import LayoutProvider from "@/components/LayoutProvider";


export const metadata = {
  title: 'mahsa seyedzade challenge',
  description: 'project created by next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <LayoutProvider>
          {children}
      </LayoutProvider>
      </body>
    </html>
  )
}
