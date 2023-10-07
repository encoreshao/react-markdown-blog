declare module "react-syntax-highlighter";
declare module "react-copy-to-clipboard";

declare module "*.md" {
  const content: string;
  export default content;
}
