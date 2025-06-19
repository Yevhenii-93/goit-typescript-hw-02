export interface ImageData {
  id: string;
  description: string;
  // baseImageUrl?: string;
  // modalImageUrl?: string;
  urls: {
    small: string;
    regular: string;
  };
}
