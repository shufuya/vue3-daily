import Vrouter from "@/router"
const router = Vrouter
const useRouterPush = (path: string) => {
  console.log(router);
  router.push({
    path
  })
}
export default {
  useRouterPush
}
