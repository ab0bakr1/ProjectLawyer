// للصور العادية
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";

// لل Video
declare module "*.mp4";
declare module "*.webm";
declare module "*.ogg";

// لل json
declare module "*.json" {
  const value: unknown;
  export default value;
}
// globals.css
declare module "*.css";
