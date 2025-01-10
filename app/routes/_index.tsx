import { redirect } from "@remix-run/cloudflare";

export const loader = () => {
  return redirect("/generate-image");
};

export default function Index() {
  return null; // 不再需要渲染任何内容
}
