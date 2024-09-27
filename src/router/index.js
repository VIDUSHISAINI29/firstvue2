import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "/home",
               name: "home",
               component: () => import("@/views/Home.vue"),
               children: [
                  {
                     path: "itemPage",
                     name: "itemPage",
                     component: () => import("@/views/Products/ItemsShow.vue"),
                     children: [
                        {
                        path: ":id",
                        name: "homeContent",
                        component: () => import("@/views/Products/DetailsShow.vue"),
                        props: true,
                        }
                     ]
                  },
               ],
            },
         ],
      },
   ],
});

export default router;
