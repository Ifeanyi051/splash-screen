import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Purple splash screen" },
    { name: "description", content: "created by codelikeifeanyi.com" },
  ];
}

export default function Home() {
  return <Welcome />;
}
