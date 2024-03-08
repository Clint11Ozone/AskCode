import '@/styles/globals.css'
import 'swiper/css';
import 'swiper/css/bundle';
import "react-phone-input-2/lib/bootstrap.css";
import { UserSelectionProvider } from '@/components/utils/context/UserSelectionContext';


export default function App({ Component, pageProps }) {
  // <UserSelectionProvider>
  return <Component {...pageProps} />
  // </UserSelectionProvider>

}
