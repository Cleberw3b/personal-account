import Nav from "./nav"
import Footer from "./footer"
import { FC } from "react"

interface IProps {
  children: React.ReactNode
}

const Layout: FC<IProps> = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout