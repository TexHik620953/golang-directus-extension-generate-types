import { ModuleConfig } from "@directus/shared/types";
import IndexComponent from "./routes/index.vue";
import TsComponent from "./routes/ts.vue";
import OasComponent from "./routes/oas.vue";
import PyComponent from "./routes/py.vue";
import GoComponent from "./routes/go.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";

export default {
  id: "generate-types",
  name: "Generate Types",
  icon: "code",
  routes: [
    {
      path: "",
      redirect: "/generate-types/index",
    },
    {
      path: "/generate-types/index",
      component: IndexComponent,
    },
    {
      path: "/generate-types/ts",
      component: TsComponent,
    },
    {
      path: "/generate-types/oas",
      component: OasComponent,
    },
    {
      path: "/generate-types/py",
      component: PyComponent,
    },
    {
      path: "/generate-types/go",
      component: GoComponent,
    },
  ],
  hidden: false,
  preRegisterCheck(user) {
    return user.role.admin_access;
  },
} as ModuleConfig;
