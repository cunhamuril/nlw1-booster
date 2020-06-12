/**
 * Return the serialized path to the specific file
 * @param fileName name of file to serialize
 */
export default function serialized(fileName: string): string {
  return `http://192.168.0.103:3333/uploads/${fileName}`;
}
