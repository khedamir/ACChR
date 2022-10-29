import { FileType } from "../../API/enum";
import { docLogo } from "../../assets/images";

export const FileLogoPath: { [key in FileType]: string } = {
  [FileType.PDF]: docLogo.pdf,
  [FileType.excel]: docLogo.excel,
  [FileType.word]: docLogo.word,
  [FileType.other]: docLogo.other,
};
