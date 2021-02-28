
import { main_BANG_ } from "./js-out/app.server.js"

main_BANG_()

if (import.meta.hot) {
  import.meta.hot.accept('./js-out/app.server.js', (main) => {
    main.reload_BANG_()
  })
}
