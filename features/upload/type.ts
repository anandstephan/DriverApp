export type S3UploadResponse = {
  url: string;
  key: string;
};

export interface RNFile {
  uri: string;
  name: string;
  type: string;
}