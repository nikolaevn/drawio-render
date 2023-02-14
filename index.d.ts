module "drawio-render" {
  function draw(
    inFileName: string,
    outFileName: string,
    format: "pdf" | "png" | "jpg" | "svg" | "vsdx" | "xml"
  ): void;
  export default draw;
}
