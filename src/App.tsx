import Routes from "./Routes"
import UITheme from "./styles/themes/UITheme"
import CssReset from "./styles/CssReset"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssReset />
      <UITheme>
        <Routes />
      </UITheme>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
