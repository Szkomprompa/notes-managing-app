import {ThemeProvider} from "@mui/material";
import theme from "@/app/theme";

export const metadata = {
  title: 'Notemaster',
  description: 'App for taking notes and sharing them with the community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
